import { enabledClients } from "@/lib/data/clients";
import ClientCard from "@/components/ui/ClientCard";

export default function Clients() {
  if (enabledClients.length === 0) return null;
  return (
    <section id="zusammenarbeit" aria-labelledby="clients-heading" className="border-y border-[var(--color-border)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">Beispielprojekte</p>
          <h2 id="clients-heading" className="section-title">Referenzen</h2>
        </div>
        <ul className="grid gap-6 md:grid-cols-2">
          {enabledClients.map((client) => <li key={client.id}><ClientCard client={client} /></li>)}
        </ul>
      </div>
    </section>
  );
}
