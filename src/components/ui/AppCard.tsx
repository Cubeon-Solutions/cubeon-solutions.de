import Image from "next/image";
import Link from "next/link";
import type { AppData } from "@/lib/data/apps";
import AppStoreBadge from "./AppStoreBadge";
import PlayStoreBadge from "./PlayStoreBadge";

export default function AppCard({ app }: { app: AppData }) {
  const blurredBackgroundStyle = {
    backgroundImage: `url(${app.imageSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
      <div className="relative w-full overflow-hidden border-b border-[var(--color-border)] bg-slate-100" style={{ aspectRatio: "100 / 217" }}>
        <div
          aria-hidden="true"
          className="absolute -inset-8 blur-xl opacity-70"
          style={blurredBackgroundStyle}
        />
        {app.slug === "sociogramly" && (
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden" style={{ clipPath: "inset(50% 0 0)" }}>
            <div className="absolute -inset-8 -scale-y-100 blur-xl opacity-70" style={blurredBackgroundStyle} />
          </div>
        )}
        <Image
          src={app.imageSrc}
          alt={app.imageAlt}
          fill
          className="z-10 object-contain"
          sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div><h3 className="mb-2 text-xl font-semibold text-[var(--color-heading)]">{app.title}</h3><p className="text-sm leading-7">{app.description}</p></div>
        {app.experience && <p className="text-sm leading-6 text-[var(--color-muted)]">{app.experience}</p>}
        <ul aria-label="Plattformen und Technologien" className="flex flex-wrap gap-2">
          {app.badges.map((badge) => <li key={badge} className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-[var(--color-brand)]">{badge}</li>)}
        </ul>
        <div className="mt-auto flex flex-col items-start gap-4 pt-2">
          <div className="flex flex-wrap gap-2"><AppStoreBadge url={app.appStoreUrl} size="sm" />{app.playStoreUrl && <PlayStoreBadge url={app.playStoreUrl} size="sm" />}</div>
          <Link href={app.productUrl ?? "/apps/" + app.slug} className="text-link text-sm">Mehr über{" "}{app.title} <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </article>
  );
}
