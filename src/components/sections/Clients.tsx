import { enabledClients } from "@/lib/data/clients";
import ClientCard from "@/components/ui/ClientCard";

export default function Clients() {
  if (enabledClients.length === 0) return null;

  return (
    <section id="zusammenarbeit" aria-labelledby="clients-heading" className="scroll-mt-24 border-y border-[var(--color-border)] bg-[var(--color-bg-alt)] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">Zusammenarbeit</p>
          <h2 id="clients-heading" className="text-3xl font-bold leading-tight text-[var(--color-heading)] sm:text-4xl">
            Einblicke in unsere Projekte
          </h2>
          <p className="mt-5 leading-relaxed text-[var(--color-body)]">
            Wir entwickeln Software und beraten Unternehmen bei technischen Fragen. Hier ein Ausschnitt aus unserer Arbeit.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {enabledClients.map((client) => (
            <li key={client.id}>
              <ClientCard client={client} />
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border border-[var(--color-border)] bg-white px-6 py-5 sm:flex-row sm:items-center">
          <p className="font-medium text-[var(--color-heading)]">Was können wir für Ihr Unternehmen entwickeln?</p>
          <a href="#kontakt" className="rounded-lg bg-[var(--color-brand)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">Projekt besprechen <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
