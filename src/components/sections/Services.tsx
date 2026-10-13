import Link from "next/link";
import { services } from "@/lib/data/services";

export default function Services() {
  return (
    <section id="dienstleistungen" aria-labelledby="services-heading" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">Unsere Leistungen</p>
          <h2 id="services-heading" className="section-title">Software, Apps und Beratung.</h2>
          <p className="mt-5 leading-7">Sie brauchen eine Anwendung für Ihren Betrieb, möchten eine vorhandene Lösung erweitern oder planen eine App? Wir übernehmen die Entwicklung oder unterstützen Sie zunächst bei den technischen Entscheidungen.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.id} data-service={service.id} className="flex flex-col rounded-2xl border border-[var(--service-border)] bg-[var(--service-background)] p-7 shadow-sm">
              <span aria-hidden="true" className="mb-6 text-sm font-semibold text-[var(--service-accent)]">0{index + 1}</span>
              <h3 className="mb-4 text-2xl leading-snug font-bold text-[var(--color-heading)]">{service.name}</h3>
              <p className="mb-3 font-medium text-[var(--color-heading)]">{service.question}</p>
              <p className="mb-6 text-sm leading-7">{service.summary}</p>
              <Link href={service.href} className="text-link service-link mt-auto">{service.shortName} kennenlernen <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
