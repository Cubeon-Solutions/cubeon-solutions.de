import { teamData } from "@/lib/data/team";
import TeamCard from "@/components/ui/TeamCard";

export default function About() {
  return (
    <section id="ueber-uns" className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-heading)] mb-4">
            Über uns
          </h2>
          <p className="text-[var(--color-body)] max-w-2xl mx-auto leading-relaxed">
            Hinter Cubeon Solutions stehen drei Informatiker aus Kassel —
            mit echter Leidenschaft für gut gemachte
            Software. Was uns antreibt: Produkte, die im Alltag wirklich
            funktionieren — durchdacht entwickelt, sauber gewartet und
            gemeinsam mit unseren Kunden weitergedacht.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-[var(--color-heading)] text-center mb-8">
          Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {teamData.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
