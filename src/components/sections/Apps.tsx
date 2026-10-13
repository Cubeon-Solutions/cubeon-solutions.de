import Link from "next/link";
import { orderedApps } from "@/lib/data/apps";
import AppCard from "@/components/ui/AppCard";
import ProductScroller from "@/components/ui/ProductScroller";

export default function Apps() {
  return (
    <section id="apps" aria-labelledby="products-heading" className="bg-[var(--color-bg-alt)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl"><p className="section-kicker">Eigene Produkte</p><h2 id="products-heading" className="section-title">Profitieren Sie von unserer Erfahrung.</h2><p className="mt-5 leading-7">Unsere eigenen Apps begleiten wir von der Vision bis zum laufenden Betrieb. Die Erfahrung aus Entwicklung, Veröffentlichung und regelmäßigen Updates bringen wir in Ihr Projekt ein.</p></div>
          <Link href="/apps" className="text-link shrink-0 text-sm">Alle Produkte ansehen <span aria-hidden="true">→</span></Link>
        </div>
        <ProductScroller labels={{ scrollLabel: "Eigene Apps – horizontal scrollbare Produktübersicht", previous: "Vorherige Produkte anzeigen", next: "Weitere Produkte anzeigen" }}>
          {orderedApps.map((app) => <div key={app.slug} className="w-[min(78vw,20rem)] shrink-0 snap-start"><AppCard app={app} /></div>)}
        </ProductScroller>
      </div>
    </section>
  );
}
