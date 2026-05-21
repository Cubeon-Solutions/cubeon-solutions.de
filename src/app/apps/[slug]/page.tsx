import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { appsData } from "@/lib/data/apps";
import AppStoreBadge from "@/components/ui/AppStoreBadge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return appsData.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = appsData.find((a) => a.slug === slug);
  if (!app) return {};
  return {
    title: app.metaTitle,
    description: app.metaDescription,
    openGraph: {
      title: app.metaTitle,
      description: app.metaDescription,
      images: [app.imageSrc],
    },
  };
}

export default async function AppPage({ params }: Props) {
  const { slug } = await params;
  const app = appsData.find((a) => a.slug === slug);
  if (!app) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50/40 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-48 flex-shrink-0 relative" style={{ height: "380px" }}>
                <Image
                  src={app.imageSrc}
                  alt={app.imageAlt}
                  fill
                  className="object-contain drop-shadow-xl"
                  sizes="192px"
                  priority
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap gap-1.5 justify-center md:justify-start mb-4">
                  {app.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-medium text-[var(--color-brand)]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl font-bold text-[var(--color-heading)] mb-4">
                  {app.title}
                </h1>
                <p className="text-lg text-[var(--color-body)] leading-relaxed mb-6">
                  {app.longDescription}
                </p>
                <AppStoreBadge url={app.appStoreUrl} size="md" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-6">
              Funktionen
            </h2>
            <ul className="space-y-3">
              {app.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 rounded-full bg-blue-100 p-1">
                    <svg className="h-3.5 w-3.5 text-[var(--color-brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[var(--color-body)]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA + back nav */}
        <section className="py-16 bg-[var(--color-bg-alt)]">
          <div className="mx-auto max-w-3xl px-6 flex flex-col items-center gap-6 text-center">
            <h2 className="text-2xl font-bold text-[var(--color-heading)]">
              Jetzt herunterladen
            </h2>
            <AppStoreBadge url={app.appStoreUrl} size="md" />
            <div className="flex gap-4 text-sm text-[var(--color-muted)]">
              <Link
                href={app.privacyUrl}
                className="hover:text-[var(--color-brand)] transition-colors"
              >
                Datenschutz
              </Link>
              <span>·</span>
              <Link
                href="/#apps"
                className="hover:text-[var(--color-brand)] transition-colors"
              >
                ← Alle Apps
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
