import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Cubeon Solutions UG",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="mx-auto max-w-3xl px-6 py-12 prose prose-slate max-w-none">
          <Link href="/" className="text-sm text-[var(--color-brand)] hover:underline no-underline mb-8 inline-block">
            ← Zurück zur Startseite
          </Link>
          <h1>Datenschutzerklärung</h1>

          <h2>1. Verantwortlicher</h2>
          <p>
            <strong>Cubeon Solutions UG (haftungsbeschränkt)</strong><br />
            Hupfeldstr. 6<br />
            34121 Kassel<br />
            E-Mail:{" "}
            <a href="mailto:kontakt@cubeon-solutions.de">
              kontakt@cubeon-solutions.de
            </a>
          </p>

          <h2>2. Zwecke und Rechtsgrundlagen</h2>
          <p>
            Wir verarbeiten personenbezogene Daten zur Bereitstellung dieser
            Website, zur Beantwortung von Anfragen sowie zur IT-Sicherheit.
            Rechtsgrundlagen: Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anbahnung),
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse: Betrieb &amp;
            Sicherheit), ggf. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
          </p>

          <h2>3. Hosting (Vercel, USA/EU)</h2>
          <p>
            Diese Website wird bei <strong>Vercel Inc.</strong> gehostet.
            Vercel kann Serverdaten (inkl. IP-Adressen) verarbeiten.
            Die Verarbeitung erfolgt zur technischen Bereitstellung und
            Absicherung dieses Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
            Mit Vercel besteht ein Data Processing Agreement gemäß Art. 28
            DSGVO. Datenübermittlungen in die USA erfolgen auf Basis der
            EU-Standardvertragsklauseln.
          </p>

          <h2>4. Server-Logfiles</h2>
          <p>Beim Aufruf unserer Seiten protokolliert der Server automatisch:</p>
          <ul>
            <li>IP-Adresse, Datum/Uhrzeit, Zeitzone</li>
            <li>Abgerufene Ressource/URL, HTTP-Statuscode, übertragene Datenmenge</li>
            <li>Referrer-URL (sofern übermittelt)</li>
            <li>Browser, Betriebssystem, Endgerät (User-Agent)</li>
          </ul>
          <p>
            <strong>Zweck:</strong> technische Auslieferung, Stabilitäts-/Sicherheitsauswertung,
            Missbrauchs- und Angriffserkennung (Art. 6 Abs. 1 lit. f DSGVO).{" "}
            <strong>Speicherdauer:</strong> 14 Tage.
          </p>

          <h2>5. Kontaktformular und E-Mail</h2>
          <p>
            Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren,
            verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage (Art. 6
            Abs. 1 lit. b bzw. f DSGVO).
          </p>
          <p>
            Das Kontaktformular wird über <strong>Formspree Inc.</strong>{" "}
            (USA) bereitgestellt. Beim Absenden des Formulars werden Ihre
            Angaben an Formspree übermittelt, die diese in unserem Auftrag
            verarbeiten. Mit Formspree besteht ein Data Processing Agreement.
            Die Übermittlung in die USA erfolgt auf Basis der
            EU-Standardvertragsklauseln. Weitere Informationen:{" "}
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Formspree Datenschutzerklärung
            </a>
            .
          </p>
          <p>
            Speicherdauer: Anfragen werden regelmäßig nach 6–12 Monaten
            gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen.
          </p>

          <h2>6. Cookies &amp; Tracking</h2>
          <p>
            Wir setzen <strong>keine</strong> Tracking-Cookies ein und
            verwenden keine Analyse- oder Marketing-Dienste.
          </p>

          <h2>7. Empfänger von Daten</h2>
          <p>
            Eine Weitergabe erfolgt nur, soweit dies für die o.g. Zwecke
            erforderlich ist (Hosting, Formspree) oder eine rechtliche
            Verpflichtung besteht.
          </p>

          <h2>8. Speicherdauer</h2>
          <p>
            Wir verarbeiten personenbezogene Daten nur so lange, wie es für
            die jeweiligen Zwecke erforderlich ist oder gesetzliche
            Aufbewahrungspflichten bestehen.
          </p>

          <h2>9. Ihre Rechte</h2>
          <p>
            Sie haben Rechte auf Auskunft (Art. 15), Berichtigung (Art. 16),
            Löschung (Art. 17), Einschränkung (Art. 18),
            Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO).
            Wenden Sie sich dazu an:{" "}
            <a href="mailto:kontakt@cubeon-solutions.de">
              kontakt@cubeon-solutions.de
            </a>
          </p>

          <h2>10. Beschwerderecht</h2>
          <p>
            Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren.
            Zuständig für Hessen ist der{" "}
            <strong>
              Hessische Beauftragte für Datenschutz und Informationsfreiheit
              (HBDI)
            </strong>
            .
          </p>

          <h2>11. Datensicherheit</h2>
          <p>
            Unsere Website wird per TLS/SSL übertragen. Wir treffen angemessene
            technische und organisatorische Maßnahmen zum Schutz Ihrer Daten.
          </p>

          <h2>12. Datenschutzerklärungen für unsere Apps</h2>
          <p>Für unsere mobilen Apps gelten eigene Datenschutzerklärungen:</p>
          <ul>
            <li><Link href="/datenschutz/drivey">Drivey</Link></li>
            <li><Link href="/datenschutz/sbf-see">SBF See Prüfungscoach</Link></li>
            <li><Link href="/datenschutz/awakesync">AwakeSync</Link></li>
            <li><Link href="/datenschutz/sociogramly">Sociogramly</Link></li>
            <li><Link href="/datenschutz/homespot">HomeSpot</Link></li>
          </ul>

          <hr />

          <h1>Privacy Policy (English)</h1>

          <h2>1. Controller</h2>
          <p>
            <strong>Cubeon Solutions UG (haftungsbeschränkt)</strong><br />
            Hupfeldstr. 6, 34121 Kassel, Germany<br />
            E-mail:{" "}
            <a href="mailto:kontakt@cubeon-solutions.de">
              kontakt@cubeon-solutions.de
            </a>
          </p>

          <h2>2. Purposes and Legal Bases</h2>
          <p>
            We process personal data for the provision of this website, for
            responding to inquiries, and for IT security. Legal bases:
            Art. 6 (1)(b) GDPR, Art. 6 (1)(f) GDPR, and if applicable
            Art. 6 (1)(a) GDPR.
          </p>

          <h2>3. Hosting (Vercel, USA/EU)</h2>
          <p>
            This website is hosted by <strong>Vercel Inc.</strong> A data
            processing agreement pursuant to Art. 28 GDPR is in place.
            Transfers to the USA are based on EU Standard Contractual Clauses.
          </p>

          <h2>4. Server Log Files</h2>
          <p>
            The server automatically records IP address, date/time, URL,
            HTTP status, referrer URL, and user agent. Retention: 14 days.
            Legal basis: Art. 6 (1)(f) GDPR.
          </p>

          <h2>5. Contact Form and E-Mail</h2>
          <p>
            The contact form is provided by <strong>Formspree Inc.</strong>{" "}
            (USA). Submissions are forwarded to Formspree under a data
            processing agreement. Transfers to the USA are based on EU
            Standard Contractual Clauses. See{" "}
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Formspree Privacy Policy
            </a>
            .
          </p>

          <h2>6. Cookies &amp; Tracking</h2>
          <p>We do not use tracking cookies or analytics services.</p>

          <h2>7. Your Rights</h2>
          <p>
            You have rights of access (Art. 15), rectification (Art. 16),
            erasure (Art. 17), restriction (Art. 18), portability (Art. 20),
            and objection (Art. 21 GDPR). Contact:{" "}
            <a href="mailto:kontakt@cubeon-solutions.de">
              kontakt@cubeon-solutions.de
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
