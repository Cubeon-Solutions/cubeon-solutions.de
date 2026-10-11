import Image from "next/image";
import type { ClientReference } from "@/lib/data/clients";

export default function ClientCard({ client }: { client: ClientReference }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
                <div className="flex min-h-36 items-center justify-between gap-6 border-b border-[var(--color-border)] px-7 py-7 sm:px-8" style={{ backgroundColor: client.background }}>
                  <div className="flex h-20 w-48 items-center">
                    <Image src={client.logo} alt={client.name} width={client.width} height={client.height} unoptimized className="h-auto max-h-20 w-auto max-w-full object-contain" />
                  </div>
                  <span aria-hidden="true" className="h-10 w-1 shrink-0 rounded-full" style={{ backgroundColor: client.accent }} />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">{client.category}</p>
                  <h3 className="mb-3 text-xl font-bold leading-snug text-[var(--color-heading)]">{client.title}</h3>
                  <p className="mb-6 text-sm leading-7 text-[var(--color-body)]">{client.description}</p>
                  <ul aria-label="Projektschwerpunkte" className="mt-auto flex flex-wrap gap-2">
                    {client.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-3 py-1 text-xs font-medium text-[var(--color-body)]">{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
  );
}
