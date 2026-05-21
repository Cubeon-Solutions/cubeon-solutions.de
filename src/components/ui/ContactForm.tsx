"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "";
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
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
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[var(--color-heading)] mb-1.5"
        >
          Ihr Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-heading)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand)] focus:outline-none focus:ring-2 focus:ring-blue-100"
          placeholder="Max Mustermann"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[var(--color-heading)] mb-1.5"
        >
          Ihre E-Mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-heading)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand)] focus:outline-none focus:ring-2 focus:ring-blue-100"
          placeholder="max@beispiel.de"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--color-heading)] mb-1.5"
        >
          Ihre Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-heading)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand)] focus:outline-none focus:ring-2 focus:ring-blue-100 resize-none"
          placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Anfrage…"
        />
        <ValidationError prefix="Nachricht" field="message" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="rounded-lg bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-brand-dark)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? "Wird gesendet…" : "Anfrage senden"}
      </button>
    </form>
  );
}
