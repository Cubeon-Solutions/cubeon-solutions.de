import { createHash } from "node:crypto";
import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
const MAX_BODY_BYTES = 16_384;
const WINDOW_MS = 15 * 60 * 1000;
// Best-effort protection per server instance; shared limits belong in the hosting WAF.
const attempts = new Map<string, { count: number; expires: number }>();
const origins = new Set(["https://cubeon-solutions.de", "https://www.cubeon-solutions.de"]);

function allowedAttempt(email: string) {
  const now = Date.now();
  for (const [key, bucket] of attempts) {
    if (bucket.expires <= now) attempts.delete(key);
  }
  const key = createHash("sha256").update(email.toLowerCase()).digest("hex");
  const total = attempts.get("total");
  const sender = attempts.get(key);
  if ((total?.count ?? 0) >= 30 || (sender?.count ?? 0) >= 3) return false;
  for (const id of ["total", key]) {
    const bucket = attempts.get(id) ?? { count: 0, expires: now + WINDOW_MS };
    bucket.count++;
    attempts.set(id, bucket);
  }
  return true;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const localOrigin = process.env.NODE_ENV !== "production" && origin === new URL(request.url).origin;
  if (origin && !origins.has(origin) && !localOrigin) {
    return NextResponse.json({ error: "Anfrage nicht erlaubt." }, { status: 403 });
  }
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    return NextResponse.json({ error: "JSON-Anfrage erforderlich." }, { status: 415 });
  }

  let data: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) throw new Error("Missing body");
    const chunks: Uint8Array[] = [];
    let length = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > MAX_BODY_BYTES) {
        await reader.cancel();
        return NextResponse.json({ error: "Nachricht ist zu groß." }, { status: 413 });
      }
      chunks.push(value);
    }
    data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }
  const fields = data as Record<string, unknown>;
  // Bots filling the invisible website field receive a success response without sending email.
  if (fields.website) return NextResponse.json({ ok: true });
  if (![fields.name, fields.email, fields.message].every((value) => typeof value === "string")) {
    return NextResponse.json({ error: "Alle Felder sind erforderlich." }, { status: 400 });
  }
  const name = (fields.name as string).trim();
  const email = (fields.email as string).trim();
  const message = (fields.message as string).trim();
  if (!name || name.length > 120 || /[\r\n\x00]/.test(name) ||
      email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n\x00]/.test(email) ||
      !message || message.length > 5000 || message.includes("\x00")) {
    return NextResponse.json({ error: "Bitte prüfen Sie Name, E-Mail und Nachricht (maximal 5.000 Zeichen)." }, { status: 400 });
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "E-Mail-Versand ist nicht konfiguriert." }, { status: 503 });
  }
  if (!allowedAttempt(email)) {
    return NextResponse.json({ error: "Zu viele Anfragen. Bitte versuchen Sie es in 15 Minuten erneut." }, { status: 429, headers: { "Retry-After": "900" } });
  }
  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: "Cubeon Solutions <kontakt@cubeon-solutions.de>",
      to: "kontakt@cubeon-solutions.de",
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
    });
    if (error) throw new Error("Email provider rejected request");
    return NextResponse.json({ ok: true });
  } catch {
    // Never log provider responses or submitted personal data.
    console.error("Contact email delivery failed");
    return NextResponse.json({ error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut." }, { status: 502 });
  }
}
