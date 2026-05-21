import type { Metadata } from "next";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
