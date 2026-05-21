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
            Wir sind Cubeon Solutions aus Kassel. Unser Fokus liegt auf Mobile
            Development (Android und iOS), Full-Stack und pragmatischen
            KI-Lösungen. Wir stehen für eine enge Zusammenarbeit, schnelle
            Prototypen und saubere Weiterentwicklung bis in den Betrieb —
            zuverlässig und mit Ihnen zusammen.
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
