import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { BASE_URL, SOCIAL_IMAGE } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Cubeon Solutions – Software, Apps und Beratung aus Kassel", template: "%s | Cubeon Solutions" },
  description: "Individuelle Software, Apps für Android, iOS und Desktop sowie Beratung für KMU deutschlandweit. Aus Kassel, direkt mit den Entwicklern.",
  metadataBase: new URL(BASE_URL),
  openGraph: { type: "website", locale: "de_DE", siteName: "Cubeon Solutions", images: [{ url: SOCIAL_IMAGE, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: [SOCIAL_IMAGE] },
  other: { "theme-color": "#1e50d4" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-[var(--color-brand)]">Zum Inhalt springen</a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
