import Image from "next/image";
import TypewriterText from "@/components/ui/TypewriterText";
import { whatsappUrl } from "@/lib/whatsapp";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/40 pt-20">

<div className="relative mx-auto max-w-5xl px-6 py-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Text */}
          <div
            className="flex-1 text-center md:text-left animate-fade-in-up"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-brand)] mb-3">
              IT-Dienstleister aus Kassel
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-heading)] leading-tight mb-4">
              Cubeon Solutions
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-[var(--color-muted)] mb-6 min-h-[2em]">
              <TypewriterText />
            </p>
            <p className="text-base text-[var(--color-body)] leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              Als Ihr IT-Dienstleister in Kassel entwickeln wir Software nicht nur bis zum Release, sondern von Anfang an wartbar, skalierbar und zukunftssicher. Direkt und ohne Agentur-Overhead.
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
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-heading)] transition-colors justify-center md:justify-start mt-4"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" style={{ fill: "#25D366", flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.862L.057 23.428a.75.75 0 0 0 .921.921l5.555-1.479A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.188-1.435l-.372-.22-3.849 1.024 1.024-3.742-.242-.384A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Oder direkt auf WhatsApp schreiben
            </a>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/cubeon_favicon_blue_1024.png"
              alt="Cubeon Solutions — IT-Dienstleister aus Kassel"
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
