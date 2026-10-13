const developmentSteps = [
  {
    title: "Aufgaben besprechen",
    text: "Sie zeigen uns, wie Sie heute arbeiten und was die Software übernehmen soll. Falls bereits eine Anwendung vorhanden ist, sehen wir sie uns an."
  },
  {
    title: "Umfang und Aufwand klären",
    text: "Wir legen die Funktionen der ersten Version fest und besprechen Aufwand und Umsetzung. Bei Bedarf prüfen wir die Bedienung mit einem Prototyp."
  },
  {
    title: "Entwickeln und abstimmen",
    text: "Sie sehen Zwischenstände der Anwendung und geben Rückmeldung zu Funktionen und Bedienung. Änderungen besprechen wir vor der weiteren Umsetzung."
  },
  {
    title: "Einführen und betreuen",
    text: "Wir begleiten die Einführung. Hosting, Fehlerbehebung, Updates und neue Funktionen können Sie anschließend mit uns vereinbaren."
  }
];

const consultingSteps = [
  {
    title: "Ihre Frage festlegen",
    text: "Geht es um ein neues Softwareprojekt, die Wahl der Technik oder Probleme in einer bestehenden Anwendung? Wir legen fest, was die Beratung beantworten soll."
  },
  {
    title: "Anforderungen prüfen",
    text: "Wir sehen uns die geplanten Funktionen, vorhandene Systeme und die Kenntnisse Ihres Entwicklungsteams an."
  },
  {
    title: "Technik vergleichen",
    text: "Wir vergleichen die geeigneten Ansätze und besprechen Unterschiede bei Aufwand, Schnittstellen und späterer Wartung."
  },
  {
    title: "Empfehlung dokumentieren",
    text: "Sie erhalten das vereinbarte Ergebnis, zum Beispiel eine Empfehlung zur Plattformwahl oder einen Vorschlag für den Aufbau der Anwendung."
  }
];

export default function Approach({ consulting = false }: { consulting?: boolean }) {
  const steps = consulting ? consultingSteps : developmentSteps;
  return (
    <section aria-labelledby="approach-heading" className="bg-[var(--service-background,var(--color-bg-alt))] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-kicker">{consulting ? "Der Beratungsablauf" : "Der Projektablauf"}</p>
        <h2 id="approach-heading" className="section-title">{consulting ? "Von Ihrer Frage zur dokumentierten Empfehlung." : "Vom ersten Gespräch bis zum Betrieb."}</h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span aria-hidden="true" className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--service-border,#dbeafe)] text-sm font-semibold text-[var(--service-accent,var(--color-brand))]">0{index + 1}</span>
              <h3 className="mb-3 text-lg font-semibold text-[var(--color-heading)]">{step.title}</h3>
              <p className="text-sm leading-7">{step.text}</p>
            </li>
          ))}
        </ol>
        {!consulting && <p className="mt-8 text-sm text-[var(--color-muted)]">Beratungsleistungen können Sie auch ohne anschließenden Entwicklungsauftrag buchen.</p>}
      </div>
    </section>
  );
}
