import { appsData } from "@/lib/data/apps";
import AppCard from "@/components/ui/AppCard";

export default function Apps() {
  return (
    <section id="apps" className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-heading)] mb-4">
            Portfolio
          </h2>
          <p className="text-[var(--color-body)] max-w-xl mx-auto">
            Eigene Produkte, die unsere Expertise in der mobilen Entwicklung
            zeigen — verfügbar im App Store und bei Google Play.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {appsData.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
