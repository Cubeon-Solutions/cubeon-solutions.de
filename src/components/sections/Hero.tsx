import Image from "next/image";

const offerings = [
  { title: "Ihre Systeme verbinden", text: "Wir verbinden bestehende Anwendungen, damit Informationen automatisch ausgetauscht werden." },
  { title: "Software für Ihre Abläufe entwickeln", text: "Wir erweitern Ihre Software oder entwickeln eine Anwendung nach Ihren Anforderungen." },
  { title: "Apps für Smartphone und Computer", text: "Anwendungen für Kunden, Mitarbeiter oder die Bedienung technischer Geräte." }
];

export default function Hero() {
  return (
    <section className="border-b border-[var(--color-border)] bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
        <div>
          <p className="section-kicker">Softwareentwicklung aus Kassel · deutschlandweit</p>
          <h1 className="max-w-3xl text-4xl leading-[1.12] font-bold tracking-tight text-[var(--color-heading)] sm:text-5xl xl:text-6xl" style={{ hyphens: "none" }}>
            Individuelle Software,{" "}<span className="text-[var(--color-brand)]">Apps und Beratung</span>{" "}für Ihr Unternehmen.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8">
            Sie erfassen Daten mehrfach, Ihrer Software fehlen wichtige Funktionen oder Sie möchten eine App für Mitarbeiter oder Kunden entwickeln? Wir entwickeln passende Anwendungen, verbinden vorhandene Systeme und erweitern bestehende Software.
          </p>
          <p className="mt-4 max-w-2xl leading-7">Sie möchten zunächst Ihre Möglichkeiten besprechen? Wir beraten Sie und planen gemeinsam die nächsten Schritte.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#kontakt" className="button-primary">Vorhaben besprechen{" "}<span aria-hidden="true">→</span></a>
            <a href="#zusammenarbeit" className="button-secondary">Referenzen ansehen</a>
          </div>
        </div>
        <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-8 sm:p-10">
          <Image src="/images/cubeon_favicon_blue_1024.png" alt="" width={136} height={136} loading="eager" className="mb-8 h-28 w-28 sm:h-32 sm:w-32" />
          <p className="mb-3 text-2xl font-semibold text-[var(--color-heading)]">Wir denken mit und entwickeln weiter.</p>
          <p className="leading-7">Sie sprechen direkt mit den Entwicklern, die Ihr Vorhaben umsetzen. So stimmen wir Anforderungen und Entscheidungen ohne Umwege ab – ohne Agentur-Overhead.</p>
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Plattformen und Server-Software">
            {[
              "Web",
              "Desktop",
              "Android",
              "iOS",
              "Server-Software"
            ].map((platform) => <span key={platform} className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-medium text-[var(--color-brand)]">{platform}</span>)}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl px-6">
        <ul aria-label="Unsere Angebote" className="grid gap-6 border-t border-blue-100 pt-8 sm:grid-cols-3">
          {offerings.map((offering) => (
            <li key={offering.title}>
              <h2 className="mb-2 text-base font-semibold text-[var(--color-heading)]">{offering.title}</h2>
              <p className="text-sm leading-6">{offering.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
