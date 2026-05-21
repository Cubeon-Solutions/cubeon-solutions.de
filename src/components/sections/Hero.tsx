import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50/40 pt-20">
      <div className="mx-auto max-w-5xl px-6 py-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-brand)] mb-3">
              IT-Dienstleister aus Kassel
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-heading)] leading-tight mb-4">
              Cubeon Solutions
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-[var(--color-muted)] mb-6">
              Mobile Apps. Full Stack. KI-Lösungen.
            </p>
            <p className="text-base text-[var(--color-body)] leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              Wir sind Cubeon Solutions aus Kassel — spezialisiert auf Mobile
              Development (Android, iOS, Augmented Reality), Full-Stack- und
              KI-Lösungen. Wir stehen für enge Zusammenarbeit, schnelle
              Prototypen und zuverlässige Weiterentwicklung bis in den Betrieb.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="#kontakt"
                className="rounded-lg bg-[var(--color-brand)] px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-[var(--color-brand-dark)] transition-colors"
              >
                Jetzt anfragen
              </a>
              <a
                href="#ueber-uns"
                className="rounded-lg border border-[var(--color-border)] bg-white px-6 py-3 text-base font-semibold text-[var(--color-heading)] hover:bg-slate-50 transition-colors"
              >
                Mehr erfahren
              </a>
            </div>
          </div>

          {/* Logo / Illustration */}
          <div className="flex-shrink-0">
            <Image
              src="/images/cubeon_favicon_blue_1024.png"
              alt="Cubeon Solutions"
              width={200}
              height={200}
              priority
              className="drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
