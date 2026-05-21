import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cubeon Solutions",
    template: "%s | Cubeon Solutions",
  },
  description:
    "IT-Dienstleister aus Kassel — Mobile App Entwicklung (Android, iOS), Full-Stack und KI-Lösungen für Unternehmen.",
  metadataBase: new URL("https://www.cubeon-solutions.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Cubeon Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cubeon Solutions",
    description:
      "IT-Dienstleister aus Kassel — Mobile App Entwicklung, Full-Stack und KI-Lösungen.",
    images: ["/images/cubeon_favicon_blue_1024.png"],
  },
  other: {
    "theme-color": "#1e50d4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
