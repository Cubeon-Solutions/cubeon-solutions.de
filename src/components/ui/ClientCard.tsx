import Image from "next/image";
import Link from "next/link";
import type { ClientReference } from "@/lib/data/clients";

export default function ClientCard({ client }: { client: ClientReference }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
      <div className="flex min-h-36 items-center border-b border-[var(--color-border)] px-7 py-7" style={{ backgroundColor: client.background }}>
        <a href={client.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label={`${client.name} – Website besuchen (neuer Tab)`} className="flex h-20 w-full max-w-64 items-center rounded-sm">
          <Image src={client.logo} alt={client.name} width={client.width} height={client.height} unoptimized className="h-auto max-h-20 w-auto max-w-full object-contain" />
        </a>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">{client.category}</p>
        <h3 className="mb-3 text-xl leading-snug font-bold text-[var(--color-heading)]">{client.title}</h3>
        <p className="mb-6 text-sm leading-7">{client.description}</p>
        <ul aria-label="Projektschwerpunkte" className="mt-auto flex flex-wrap gap-2">
          {client.tags.map((tag) => <li key={tag} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-3 py-1 text-xs font-medium">{tag}</li>)}
        </ul>
        <div className="mt-6 flex flex-col items-start gap-3 border-t border-[var(--color-border)] pt-5 text-sm">
          <Link href={client.serviceHref} className="text-link">{client.serviceLabel} <span aria-hidden="true">→</span></Link>
          <a href={client.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[var(--color-muted)] underline underline-offset-4 hover:text-[var(--color-brand)]">Website von {client.name} <span aria-hidden="true">↗</span><span className="sr-only"> (öffnet in einem neuen Tab)</span></a>
        </div>
      </div>
    </article>
  );
}
