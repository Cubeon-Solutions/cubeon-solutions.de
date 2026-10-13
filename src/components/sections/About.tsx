import { teamData } from "@/lib/data/team";
import TeamCard from "@/components/ui/TeamCard";

export default function About() {
  return (
    <section id="ueber-uns" aria-labelledby="team-heading" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">Über uns</p>
          <h2 id="team-heading" className="section-title">Das Team hinter Cubeon Solutions.</h2>
          <p className="mt-5 leading-7">Wir sind ein kleines Team von Softwareentwicklern aus Kassel. Bei uns besprechen Sie Anforderungen, technische Fragen und die Umsetzung direkt mit den Entwicklern. Wir arbeiten gemeinsam an Ihren Projekten – von der ersten Idee bis zur fertigen Anwendung.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">{teamData.map((member) => <TeamCard key={member.name} member={member} />)}</div>
      </div>
    </section>
  );
}
