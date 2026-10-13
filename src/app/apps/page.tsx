import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AppCard from "@/components/ui/AppCard";
import { orderedApps } from "@/lib/data/apps";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Eigene Apps für Android & iOS", "Eigene Apps von Cubeon Solutions: Drivey, AwakeSync, SBF See, ND Filter und weitere Anwendungen für Android und iOS. Funktionen, Preise und Store-Links.", "/apps");

export default function ProductsPage() {
  return (
    <><Navbar /><main id="main-content" tabIndex={-1} className="pt-28 pb-16 sm:pt-32">
      <div className="mx-auto max-w-6xl px-6"><p className="section-kicker">Eigene Produkte</p><h1 className="text-4xl font-bold text-[var(--color-heading)] sm:text-5xl">Apps aus unserem Entwicklungsteam.</h1><p className="mt-5 max-w-2xl text-lg leading-8">Wir entwickeln, veröffentlichen und pflegen auch eigene Apps. Diese Erfahrung bringen wir in Ihr Projekt ein. Hier finden Sie die Funktionen unserer Produkte und die Links zu den App Stores.</p><h2 className="sr-only">Unsere Apps</h2><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{orderedApps.map((app) => <AppCard key={app.slug} app={app} />)}</div><div className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-8"><h2 className="text-2xl font-bold text-[var(--color-heading)]">Sie planen eine eigene App?</h2><p className="mt-4 max-w-2xl leading-7">Wir entwickeln Apps für Smartphones und Desktop für Ihr Unternehmen oder beraten Sie vorab zu Funktionen, Technik und Umsetzung.</p><Link href="/app-entwicklung-kassel" className="text-link mt-5 inline-block">App-Entwicklung kennenlernen{" "}<span aria-hidden="true">→</span></Link></div></div>
    </main><Footer /></>
  );
}
