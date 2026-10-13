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
      <div role="status" className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
        <p className="text-green-800 font-medium text-lg mb-1">
          Vielen Dank für Ihre Anfrage!</p>
        <p className="text-green-700 text-sm">
          Wir melden uns per E-Mail, um Ihre Anfrage und die nächsten Schritte zu besprechen.</p>
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
          Ihr Name</label>
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="name"
          maxLength={120}
          required
          className={inputClass}
          placeholder="Vor- und Nachname…"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-heading)] mb-1.5">
          Ihre E-Mail</label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          spellCheck={false}
          maxLength={254}
          required
          className={inputClass}
          placeholder="name@unternehmen.de"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-[var(--color-heading)] mb-1.5">
          Ihr Unternehmen <span className="font-normal text-[var(--color-muted)]">(optional)</span>
        </label>
        <input id="company" type="text" name="company" autoComplete="organization" maxLength={160} className={inputClass} placeholder="Name Ihres Unternehmens…" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-heading)] mb-1.5">
          Ihre Nachricht</label>
        <textarea
          id="message"
          name="message"
          aria-describedby="message-hint"
          maxLength={5000}
          required
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="Beschreiben Sie kurz Ihre Idee oder Ihr Softwareproblem…"
        />
        <p id="message-hint" className="mt-2 text-sm leading-6 text-[var(--color-muted)]">Was möchten Sie verbessern oder entwickeln? Welche Programme nutzen Sie bisher? Welche Frage möchten Sie mit uns klären?</p>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">{errorMsg}</p>
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
          Datenschutzerklärung</a>{" "}
        zu.</p>
    </form>
  );
}
