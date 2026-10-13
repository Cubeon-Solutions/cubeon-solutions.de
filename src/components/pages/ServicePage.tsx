import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import Approach from "@/components/sections/Approach";
import { enabledClients } from "@/lib/data/clients";
import { services, type Service } from "@/lib/data/services";
import { businessSchema, breadcrumbSchema, serviceSchema } from "@/lib/seo";

export default function ServicePage({ service }: { service: Service }) {
  const clients = enabledClients.filter((reference) => reference.serviceHref === service.href);
  const consulting = service.id === "beratung";

  return (
    <>
      <JsonLd data={businessSchema} />
      <JsonLd data={{ ...serviceSchema(service), description: service.intro }} />
      <JsonLd data={breadcrumbSchema([{ name: "Startseite", path: "/" }, { name: service.name, path: service.href }])} />
      <Navbar />
      <main id="main-content" data-service={service.id} tabIndex={-1}>
        <section className="border-b border-[var(--service-border)] bg-[var(--service-background)] pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <nav aria-label="Brotkrumennavigation" className="mb-10 text-sm text-[var(--color-muted)]">
              <ol className="flex flex-wrap items-center gap-2"><li><Link href="/" className="hover:text-[var(--color-brand)]">Startseite</Link></li><li aria-hidden="true">/</li><li aria-current="page">{service.shortName}</li></ol>
            </nav>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--service-accent)]">{service.name} aus Kassel</p>
            <h1 className="max-w-4xl text-4xl leading-tight font-bold tracking-tight text-[var(--color-heading)] sm:text-5xl">{service.name} für KMU.</h1>
            <p className="mt-5 text-2xl font-medium text-[var(--service-accent)]">{service.title}</p>
            <p className="mt-5 max-w-3xl text-lg leading-8">{service.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/#kontakt" className="button-primary">{consulting ? "Beratung besprechen" : "Vorhaben besprechen"} <span aria-hidden="true">→</span></Link>
              {clients.length > 0 && <a href="#praxis" className="button-secondary">{clients.length > 1 ? "Praxisbeispiele ansehen" : "Praxisbeispiel ansehen"}</a>}
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="section-kicker">Typische Aufgaben</p>
            <h2 className="section-title">Wofür Sie uns beauftragen können.</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {service.scenarios.map((scenario) => <div key={scenario.title}><h3 className="mb-3 text-xl font-semibold text-[var(--color-heading)]">{scenario.title}</h3><p className="leading-7">{scenario.text}</p></div>)}
            </div>
          </div>
        </section>
        <section className="border-t border-[var(--service-border)] py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div><p className="section-kicker">Leistungsumfang</p><h2 className="section-title">{service.outcome}</h2><p className="mt-5 leading-7">{consulting ? "Vor Beginn vereinbaren wir die Fragestellung, den Umfang und das Ergebnis der Beratung. Daraus ergeben sich der Aufwand und das Angebot." : "Vor dem Auftrag legen wir fest, welche Funktionen und Ergebnisse Sie benötigen. Daraus ergeben sich der Aufwand und das Angebot."}</p></div>
            <div className="space-y-8">{service.scope.map((item) => <div key={item.title} className="border-l-2 border-[var(--service-border)] pl-6"><h3 className="mb-3 text-xl font-semibold text-[var(--color-heading)]">{item.title}</h3><p className="leading-7">{item.text}</p></div>)}</div>
          </div>
        </section>
        {clients.length > 0 && (
          <section id="praxis" className="py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-6">
              <p className="section-kicker">{clients.length > 1 ? "Beispiele aus unserer Arbeit" : "Ein Beispiel aus unserer Arbeit"}</p>
              <div className="space-y-16">
                {clients.map((client) => (
                  <article key={client.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                      <a href={client.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label={`${client.name} – Website besuchen (neuer Tab)`} className="mb-6 flex min-h-32 items-center rounded-2xl border border-[var(--color-border)] p-7" style={{ backgroundColor: client.background }}>
                        <Image src={client.logo} alt={client.name} width={client.width} height={client.height} unoptimized className="h-auto max-h-20 w-auto max-w-full sm:max-w-80 object-contain" />
                      </a>
                      <h2 className="section-title">{client.name}: {client.title}.</h2>
                      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                        <a href={client.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-link">Website von {client.name} <span aria-hidden="true">↗</span><span className="sr-only"> (öffnet in einem neuen Tab)</span></a>
                        <Link href="/#zusammenarbeit" className="text-link">Weitere Kundenprojekte ansehen{" "}<span aria-hidden="true">→</span></Link>
                      </div>
                    </div>
                    <dl className="space-y-8">
                      {client.projectDetails.map((detail) => (
                        <div key={detail.title} className="border-l-2 border-[var(--service-border)] pl-6">
                          <dt className="mb-3 text-xl font-semibold text-[var(--color-heading)]">{detail.title}</dt>
                          <dd className="leading-7">{detail.text}</dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
        <Approach consulting={consulting} />
        <section className="bg-[var(--service-background)] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="section-title">{consulting ? "Welche Frage möchten Sie mit uns klären?" : "Besprechen wir Ihre Idee oder Ihr Softwareproblem."}</h2>
            <p className="mt-5 max-w-2xl leading-7">{consulting ? "Schildern Sie kurz Ihr Vorhaben oder die Schwierigkeiten mit Ihrer bestehenden Software. Ein fertiges Konzept ist dafür nicht erforderlich. Gemeinsam legen wir fest, welche Frage die Beratung beantworten soll." : "Schreiben Sie uns, was Sie erreichen möchten und was heute Schwierigkeiten macht. Ein fertiges Konzept ist dafür nicht erforderlich. Wir klären mit Ihnen, welche nächsten Schritte sinnvoll sind."}</p>
            <Link href="/#kontakt" className="button-primary mt-6">{consulting ? "Beratung besprechen" : "Vorhaben besprechen"} <span aria-hidden="true">→</span></Link>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[var(--color-border)] pt-6 text-sm">{services.filter((item) => item.id !== service.id).map((item) => <Link key={item.id} href={item.href} className="text-link">{item.name} <span aria-hidden="true">→</span></Link>)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
