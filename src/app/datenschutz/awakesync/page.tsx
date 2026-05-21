import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AwakeSync Datenschutz",
  description: "Datenschutzerklärung für die AwakeSync App von Cubeon Solutions",
  robots: { index: false },
};

export default function AwakeSyncDatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="mx-auto max-w-3xl px-6 py-12 prose prose-slate max-w-none">
          <Link href="/datenschutz" className="text-sm text-[var(--color-brand)] hover:underline no-underline mb-8 inline-block">
            ← Zur Datenschutzübersicht
          </Link>
          <h1>Datenschutzerklärung – AwakeSync</h1>

          <h2>1. Verantwortlicher</h2>
          <p>
            <strong>Cubeon Solutions UG (haftungsbeschränkt)</strong><br />
            Hupfeldstr. 6, 34121 Kassel<br />
            E-Mail: <a href="mailto:kontakt@cubeon-solutions.de">kontakt@cubeon-solutions.de</a>
          </p>

          <h2>2. Datenverarbeitung durch die App</h2>
          <p>
            AwakeSync verarbeitet <strong>keine personenbezogenen Daten</strong>.
            Alle Funktionen der App laufen vollständig lokal auf Ihrem Gerät.
            Es findet keine Datenübertragung an Server oder Dritte statt.
            Die App benötigt keine besonderen Berechtigungen und greift nicht
            auf personenbezogene Gerätedaten zu.
          </p>

          <h2>3. Kontakt per E-Mail</h2>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben
            ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b
            bzw. f DSGVO).
          </p>

          <h2>4. Aktualisierung</h2>
          <p>
            Diese Datenschutzerklärung wird aktualisiert, falls die App um
            Online-Funktionen erweitert wird.
          </p>

          <hr />

          <h1>Privacy Policy – AwakeSync (English)</h1>

          <h2>1. Controller</h2>
          <p>
            <strong>Cubeon Solutions UG (haftungsbeschränkt)</strong><br />
            Hupfeldstr. 6, 34121 Kassel, Germany<br />
            E-mail: <a href="mailto:kontakt@cubeon-solutions.de">kontakt@cubeon-solutions.de</a>
          </p>

          <h2>2. Data Processing by the App</h2>
          <p>
            AwakeSync does <strong>not process any personal data</strong>.
            All functions run entirely locally on your device. No data is
            transmitted to servers or third parties. The app requires no
            special permissions and does not access personal device data.
          </p>

          <h2>3. Contact via E-Mail</h2>
          <p>
            If you contact us by e-mail, we process your details solely to
            handle your inquiry (Art. 6 (1)(b) or (f) GDPR).
          </p>

          <h2>4. Updates</h2>
          <p>
            This policy will be updated if the app is extended with online
            features.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
