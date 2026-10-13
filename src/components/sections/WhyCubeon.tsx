const reasons = [
  {
    title: "Direkt mit den Entwicklern sprechen",
    text: "Wir sind ein kleines Team. Ihre Fragen zu Funktionen und Technik besprechen Sie direkt mit den Menschen, die an Ihrer Software arbeiten – ohne Agentur-Overhead."
  },
  {
    title: "Ihre vorhandene Software einbeziehen",
    text: "Wir sehen uns an, welche Anwendungen und Daten Sie bereits nutzen. Danach lässt sich entscheiden, was erweitert werden kann und was neu entwickelt werden muss."
  },
  {
    title: "Eigene Apps im laufenden Betrieb",
    text: "Mit unseren eigenen Apps kümmern wir uns auch um Veröffentlichungen, Updates und neue Funktionen. Diese Aufgaben übernehmen wir auf Wunsch ebenso für Ihre Anwendung."
  }
];

export default function WhyCubeon() {
  return (
    <section aria-labelledby="why-heading" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-kicker">Warum Cubeon</p>
        <h2 id="why-heading" className="section-title">So arbeiten Sie mit uns.</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <h3 className="mb-3 text-xl font-semibold text-[var(--color-heading)]">{reason.title}</h3>
              <p className="leading-7">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
