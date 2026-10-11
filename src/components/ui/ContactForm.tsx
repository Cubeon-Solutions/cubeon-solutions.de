"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-heading)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand)] focus:outline-none focus:ring-2 focus:ring-blue-100";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Unbekannter Fehler");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Fehler beim Senden.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
        <p className="text-green-800 font-medium text-lg mb-1">
          Vielen Dank für Ihre Anfrage!
        </p>
        <p className="text-green-700 text-sm">
          Wir melden uns so schnell wie möglich bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div hidden aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-heading)] mb-1.5">
          Ihr Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          maxLength={120}
          required
          className={inputClass}
          placeholder="Max Mustermann"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-heading)] mb-1.5">
          Ihre E-Mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          maxLength={254}
          required
          className={inputClass}
          placeholder="max@beispiel.de"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-heading)] mb-1.5">
          Ihre Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          maxLength={5000}
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Anfrage…"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-lg bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-brand-dark)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Wird gesendet…" : "Anfrage senden"}
      </button>

      <p className="text-xs text-[var(--color-muted)] leading-relaxed">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{" "}
        <a href="/datenschutz" className="underline hover:text-[var(--color-brand)]">
          Datenschutzerklärung
        </a>{" "}
        zu.
      </p>
    </form>
  );
}
