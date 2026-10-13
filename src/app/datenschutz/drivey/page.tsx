import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Drivey Datenschutz",
  description: "Datenschutzerklärung für die Drivey App von Cubeon Solutions",
  robots: { index: false },
};

export default function DriveyDatenschutzPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="pt-20 pb-16">
        <div className="mx-auto max-w-3xl px-6 py-12 prose prose-slate max-w-none">
          <Link href="/datenschutz" className="text-sm text-[var(--color-brand)] hover:underline no-underline mb-8 inline-block">
            ← Zur Datenschutzübersicht</Link>
          <h1>Datenschutzerklärung – Drivey</h1>

          <h2>1. Verantwortlicher</h2>
          <p>
            <strong>Cubeon Solutions UG (haftungsbeschränkt)</strong><br />
            Hupfeldstr. 6, 34121 Kassel<br />
            E-Mail:{" "}<a href={"mailto:" + "kontakt@cubeon-solutions.de"}>kontakt@cubeon-solutions.de</a>
          </p>

          <h2>2. Datenverarbeitung durch die App</h2>
          <p>
            Drivey verarbeitet{" "}<strong>keine personenbezogenen Daten</strong>, die an Server oder Dritte übertragen werden. Die App greift auf die Standortdaten Ihres Geräts zu, um Fahrten aufzuzeichnen. Diese Daten werden ausschließlich lokal auf Ihrem Gerät gespeichert und verarbeitet. Es findet keine Übertragung an Dritte statt.</p>

          <h2>3. Kontakt per E-Mail</h2>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b bzw. f DSGVO).</p>

          <h2>4. Aktualisierung</h2>
          <p>
            Diese Datenschutzerklärung wird aktualisiert, falls die App um Online-Funktionen erweitert wird.</p>

          <hr />

          <h1>Privacy Policy – Drivey (English)</h1>

          <h2>1. Controller</h2>
          <p>
            <strong>Cubeon Solutions UG (haftungsbeschränkt)</strong><br />
            Hupfeldstr. 6, 34121 Kassel, Germany<br />
            E-mail:{" "}<a href={"mailto:" + "kontakt@cubeon-solutions.de"}>kontakt@cubeon-solutions.de</a>
          </p>

          <h2>2. Data Processing by the App</h2>
          <p>
            Drivey does{" "}<strong>not transfer any personal data</strong> {" "}to servers or third parties. The app accesses your device&apos;s location data solely to record routes, which are stored and processed locally on your device only.</p>

          <h2>3. Contact via E-Mail</h2>
          <p>
            If you contact us by e-mail, we process your details solely to handle your inquiry (Art. 6 (1)(b) or (f) GDPR).</p>

          <h2>4. Updates</h2>
          <p>
            This policy will be updated if the app is extended with online features.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
