import { services } from "@/lib/data/services";
import ServiceBadge from "@/components/ui/ServiceBadge";

export default function Services() {
  return (
    <section id="dienstleistungen" className="py-20 bg-[var(--color-bg-alt)]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-heading)] mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-[var(--color-body)] max-w-xl mx-auto">
            Von der ersten Idee bis zum laufenden Betrieb — wir begleiten Ihr
            Projekt in jeder Phase.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {services.map((service) => (
            <ServiceBadge key={service} label={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#kontakt"
            className="inline-block rounded-lg bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-brand-dark)] transition-colors"
          >
            Projekt besprechen →
          </a>
        </div>
      </div>
    </section>
  );
}
