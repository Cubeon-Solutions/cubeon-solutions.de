import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Alle Felder sind erforderlich." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "E-Mail-Versand ist nicht konfiguriert." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Cubeon Solutions <kontakt@cubeon-solutions.de>",
    to: "kontakt@cubeon-solutions.de",
    replyTo: email,
    subject: `Neue Anfrage von ${name}`,
    text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
