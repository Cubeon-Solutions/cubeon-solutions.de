import Image from "next/image";
import Link from "next/link";
import type { AppData } from "@/lib/data/apps";
import AppStoreBadge from "./AppStoreBadge";

export default function AppCard({ app }: { app: AppData }) {
  return (
    <div className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative w-full bg-[var(--color-bg-alt)]" style={{ paddingBottom: "180%" }}>
        <Image
          src={app.imageSrc}
          alt={app.imageAlt}
          fill
          className="object-contain p-4"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="font-semibold text-[var(--color-heading)] text-lg mb-1">
            {app.title}
          </h3>
          <p className="text-sm text-[var(--color-body)] leading-relaxed">
            {app.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {app.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-[var(--color-brand)]"
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-2">
          <AppStoreBadge url={app.appStoreUrl} size="sm" />
          <Link
            href={`/apps/${app.slug}`}
            className="text-sm font-medium text-[var(--color-brand)] hover:underline"
          >
            Mehr erfahren →
          </Link>
        </div>
      </div>
    </div>
  );
}
