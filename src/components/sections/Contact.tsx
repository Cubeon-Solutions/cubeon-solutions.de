"use client";

import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/ui/ContactForm"), {
  ssr: false,
  loading: () => (
    <div className="h-64 flex items-center justify-center text-[var(--color-muted)] text-sm">
      Formular wird geladen…
    </div>
  ),
});

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-[var(--color-bg-alt)]">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-heading)] mb-4">
            Kontakt
          </h2>
          <p className="text-[var(--color-body)] max-w-xl mx-auto leading-relaxed">
            Wir sitzen in Kassel — remote oder vor Ort. Für einen ersten
            Austausch reicht eine kurze Nachricht; auf Wunsch vereinbaren wir
            direkt ein unverbindliches Gespräch, um Ihre Anforderungen besser
            zu verstehen.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-[var(--color-border)] p-8">
          <ContactForm />
          <p className="mt-4 text-center text-xs text-[var(--color-muted)]">
            Oder direkt per E-Mail:{" "}
            <a
              href="mailto:kontakt@cubeon-solutions.de"
              className="text-[var(--color-brand)] hover:underline"
            >
              kontakt@cubeon-solutions.de
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
