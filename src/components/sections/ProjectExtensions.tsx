import { projectExtensions } from "@/lib/data/services";

export default function ProjectExtensions() {
  return (
    <section aria-labelledby="extensions-heading" className="bg-[var(--color-bg-alt)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="section-kicker">Entwicklung und Betrieb</p>
          <h2 id="extensions-heading" className="section-title">Von der Entwicklung bis zum Betrieb und zur Wartung.</h2>
          <p className="mt-5 leading-7">Wir entwickeln Ihre Anwendung und die Software für Daten, Zugriffsrechte und die Verbindung zu bestehenden Systemen. Auch nach der Einführung begleiten wir Sie: Auf Wunsch übernehmen wir Hosting, Betrieb, Wartung und Updates.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projectExtensions.map((extension) => (
            <div key={extension.title} className="border-t-2 border-blue-200 pt-5">
              <h3 className="mb-3 text-lg font-semibold text-[var(--color-heading)]">{extension.title}</h3>
              <p className="text-sm leading-7">{extension.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
