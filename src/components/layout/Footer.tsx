import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data/services";
import CopyrightYear from "@/components/ui/CopyrightYear";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 font-semibold text-[var(--color-heading)]">
              <Image src="/images/cubeon_favicon_blue_1024.png" alt="" width={32} height={32} /><span translate="no">Cubeon Solutions</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7">Individuelle Software, Apps für Smartphone und Desktop sowie Beratung. Aus Kassel für kleine und mittlere Unternehmen in ganz Deutschland. Auf Wunsch mit Server-Software, Betrieb und Wartung.</p>
            <a href={"mailto:" + "kontakt@cubeon-solutions.de"} className="text-link mt-4 inline-block text-sm">kontakt@cubeon-solutions.de</a>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold text-[var(--color-heading)]">Leistungen</h2>
            <ul className="space-y-3 text-sm">
              {services.map((service) => <li key={service.id}><Link href={service.href} className="hover:text-[var(--color-brand)]">{service.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold text-[var(--color-heading)]">Cubeon kennenlernen</h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#zusammenarbeit" className="hover:text-[var(--color-brand)]">Referenzen</Link></li>
              <li><Link href="/#ueber-uns" className="hover:text-[var(--color-brand)]">Unser Team</Link></li>
              <li><Link href="/apps" className="hover:text-[var(--color-brand)]">Eigene Produkte</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--color-border)] pt-6">
          <p className="text-center text-sm leading-7">Gefällt Ihnen diese Website?{" "}<Link href="/#kontakt" className="text-link">Wir erstellen auch gerne eine für Sie.</Link></p>
          <div className="mt-6 flex flex-col justify-between gap-4 text-xs text-[var(--color-muted)] sm:flex-row">
            <p>© <CopyrightYear initialYear={new Date().getFullYear()} /> Cubeon Solutions UG (haftungsbeschränkt)</p>
            <div className="flex gap-5"><Link href="/impressum" className="hover:text-[var(--color-brand)]">Impressum</Link><Link href="/datenschutz" className="hover:text-[var(--color-brand)]">Datenschutz</Link></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
