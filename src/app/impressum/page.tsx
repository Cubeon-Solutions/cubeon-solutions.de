import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Cubeon Solutions UG (haftungsbeschränkt)",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <Link href="/" className="text-sm text-[var(--color-brand)] hover:underline mb-8 inline-block">
            ← Zurück zur Startseite
          </Link>
          <h1 className="text-3xl font-bold text-[var(--color-heading)] mb-8">
            Impressum
          </h1>

          <h2 className="text-lg font-semibold text-[var(--color-heading)] mt-6 mb-2">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="text-[var(--color-body)] leading-relaxed">
            <strong>Cubeon Solutions UG (haftungsbeschränkt)</strong>
            <br />
            Hupfeldstr. 6
            <br />
            34121 Kassel
          </p>

          <h2 className="text-lg font-semibold text-[var(--color-heading)] mt-6 mb-2">
            Vertreten durch
          </h2>
          <p className="text-[var(--color-body)]">Ludwig Chen Li</p>

          <h2 className="text-lg font-semibold text-[var(--color-heading)] mt-6 mb-2">
            Kontakt
          </h2>
          <p className="text-[var(--color-body)]">
            E-Mail:{" "}
            <a
              href="mailto:kontakt@cubeon-solutions.de"
              className="text-[var(--color-brand)] hover:underline"
            >
              kontakt@cubeon-solutions.de
            </a>
          </p>

          <h2 className="text-lg font-semibold text-[var(--color-heading)] mt-6 mb-2">
            Registereintrag
          </h2>
          <p className="text-[var(--color-body)] leading-relaxed">
            Eintragung im Handelsregister.
            <br />
            Registergericht: Amtsgericht Kassel
            <br />
            Registernummer: HRB 20365
          </p>

          <h2 className="text-lg font-semibold text-[var(--color-heading)] mt-6 mb-2">
            Umsatzsteuer-ID
          </h2>
          <p className="text-[var(--color-body)]">
            USt-IdNr.: [beantragt]
          </p>

          <h2 className="text-lg font-semibold text-[var(--color-heading)] mt-6 mb-2">
            Verantwortlich i.S.d. § 18 Abs. 2 MStV
          </h2>
          <p className="text-[var(--color-body)] leading-relaxed">
            Ludwig Chen Li
            <br />
            Hupfeldstr. 6
            <br />
            34121 Kassel
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
