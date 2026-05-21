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

          <h2>3. Hosting (Vercel)</h2>
          <p>
            Diese Website wird bei <strong>Vercel Inc.</strong> (340 Pine Street,
            Suite 701, San Francisco, CA 94104, USA) gehostet. Vercel kann
            Zugriffsdaten inkl. IP-Adressen verarbeiten. Die Verarbeitung
            erfolgt zur technischen Bereitstellung und Absicherung dieses
            Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO). Mit Vercel besteht
            ein Data Processing Agreement gemäß Art. 28 DSGVO.
            Datenübermittlungen in die USA erfolgen auf Basis der
            EU-Standardvertragsklauseln. Weitere Informationen:{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Datenschutzerklärung</a>.
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

          <h2>5. Kontaktmöglichkeiten</h2>
          <p>
            Wenn Sie uns über das Kontaktformular, per E-Mail oder WhatsApp
            kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der
            Anfrage (Art. 6 Abs. 1 lit. b bzw. f DSGVO).
          </p>
          <p>
            <strong>WhatsApp:</strong> Auf unserer Website bieten wir die
            Kontaktaufnahme über WhatsApp an. Betreiber ist die{" "}
            <strong>WhatsApp Ireland Limited</strong> (4 Grand Canal Square,
            Grand Canal Harbour, Dublin 2, Irland), ein Tochterunternehmen
            von Meta Platforms Inc. Wenn Sie uns über WhatsApp kontaktieren,
            verarbeitet WhatsApp Ihre Telefonnummer, Nachrichteninhalte sowie
            Metadaten gemäß den eigenen Nutzungsbedingungen und
            Datenschutzrichtlinien. Wir haben keinen Einfluss auf diese
            Datenverarbeitung durch WhatsApp/Meta. Rechtsgrundlage für unsere
            Verarbeitung der übermittelten Inhalte ist Art. 6 Abs. 1 lit. b
            bzw. f DSGVO. Weitere Informationen:{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Datenschutzrichtlinie
            </a>
            .
          </p>
          <p>
            Für den Versand von Formularanfragen per E-Mail nutzen wir den
            Dienst <strong>Resend</strong> (Resend Inc., 2261 Market Street
            #5039, San Francisco, CA 94114, USA). Beim Absenden des Formulars
            werden Ihre Angaben (Name, E-Mail-Adresse, Nachricht) zur
            Zustellung an uns an Resend übermittelt. Mit Resend besteht ein
            Data Processing Agreement gemäß Art. 28 DSGVO. Die Übermittlung
            in die USA erfolgt auf Basis der EU-Standardvertragsklauseln.
            Weitere Informationen:{" "}
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resend Datenschutzerklärung
            </a>
            .
          </p>
          <p>
            Speicherdauer: Anfragen werden regelmäßig nach 6–12 Monaten
            gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen.
          </p>

          <h2>6. Analyse (Vercel Analytics)</h2>
          <p>
            Wir nutzen <strong>Vercel Analytics</strong>, einen
            datenschutzfreundlichen Analysedienst der Vercel Inc. (USA).
            Vercel Analytics setzt <strong>keine Cookies</strong> und erhebt
            keine personenbezogenen Daten. Es werden ausschließlich aggregierte,
            anonymisierte Zugriffsdaten erfasst (aufgerufene Seiten,
            Herkunftsland, Gerätekategorie, Referrer). Eine Identifizierung
            einzelner Personen ist nicht möglich. Die Verarbeitung erfolgt auf
            Basis unseres berechtigten Interesses an der Analyse und
            Verbesserung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
            Ein Cookie-Banner ist nicht erforderlich.
          </p>

          <h2>7. Empfänger von Daten</h2>
          <p>
            Eine Weitergabe erfolgt nur, soweit dies für die o.g. Zwecke
            erforderlich ist (Vercel, Resend) oder eine rechtliche
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
            <li><Link href="/datenschutz/nd-filter">ND Filter</Link></li>
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

          <h2>3. Hosting (Vercel)</h2>
          <p>
            This website is hosted by <strong>Vercel Inc.</strong> (340 Pine
            Street, Suite 701, San Francisco, CA 94104, USA). Vercel may
            process access data including IP addresses. A data processing
            agreement pursuant to Art. 28 GDPR is in place. Transfers to the
            USA are based on EU Standard Contractual Clauses. See the{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>.
          </p>

          <h2>4. Server Log Files</h2>
          <p>
            The server automatically records IP address, date/time, URL,
            HTTP status, referrer URL, and user agent. Retention: 14 days.
            Legal basis: Art. 6 (1)(f) GDPR.
          </p>

          <h2>5. Contact Options</h2>
          <p>
            <strong>WhatsApp:</strong> We offer contact via WhatsApp, operated
            by <strong>WhatsApp Ireland Limited</strong> (a Meta subsidiary).
            When you contact us via WhatsApp, your phone number, message
            content, and metadata are processed by WhatsApp/Meta under their
            own terms. We have no influence over this processing. Legal basis
            for our processing of the content you send: Art. 6 (1)(b) or (f)
            GDPR. See the{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Privacy Policy
            </a>
            .
          </p>
          <p>
            For sending contact form submissions by e-mail we use{" "}
            <strong>Resend</strong> (Resend Inc., San Francisco, CA, USA).
            Your details (name, e-mail address, message) are transmitted to
            Resend for delivery to us. A data processing agreement pursuant
            to Art. 28 GDPR is in place. Transfers to the USA are based on
            EU Standard Contractual Clauses. See{" "}
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resend Privacy Policy
            </a>
            .
          </p>

          <h2>6. Analytics (Vercel Analytics)</h2>
          <p>
            We use <strong>Vercel Analytics</strong>, a privacy-friendly
            analytics service by Vercel Inc. (USA). It sets no cookies and
            collects no personal data — only aggregated, anonymised metrics
            (pages visited, country, device type, referrer). Individual users
            cannot be identified. Legal basis: Art. 6 (1)(f) GDPR (legitimate
            interest in improving our website). No cookie banner required.
          </p>

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
