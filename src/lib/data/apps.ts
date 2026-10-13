export interface AppData {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  badges: string[];
  appStoreUrl: string;
  playStoreUrl?: string;
  productUrl?: string;
  privacyUrl: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
  pricingInfo?: string;
  schemaPrice?: string;
  experience?: string;
}

export const appsData: AppData[] = [
  {
    slug: "awakesync",
    title: "AwakeSync",
    description: "Ein Wecker für iOS, der Ihren Schlaf mithilfe von KI-Modellen analysiert. Die App funktioniert offline und ohne Konto.",
    longDescription: "AwakeSync ist ein Wecker für iOS, der KI-Modelle zur Analyse Ihres Schlafs nutzt. Sie können mehrere Alarme einstellen; die Funktionen laufen lokal auf Ihrem Gerät. Ein Konto oder Internetzugang ist dafür nicht erforderlich.",
    imageSrc: "/images/awakesync.jpg",
    imageAlt: "AwakeSync App Screenshot",
    imageWidth: 1284,
    imageHeight: 2778,
    badges: [
      "iOS",
      "Mobile"
    ],
    appStoreUrl: "https://apps.apple.com/de/app/awakesync/id6466740367",
    privacyUrl: "/datenschutz/awakesync",
    features: [
      "Schlafanalyse mithilfe von KI-Modellen",
      "Vollständig offline – kein Internet erforderlich",
      "Keine Registrierung, keine Konten, keine Werbung",
      "Minimalistisches Design ohne Ablenkung",
      "Mehrere Alarme mit individuellen Einstellungen",
      "Lokale Verarbeitung: keine Datenübertragung an Server"
    ],
    metaTitle: "AwakeSync – Wecker mit KI-Schlafanalyse für iOS",
    metaDescription: "AwakeSync ist ein Wecker für iPhone mit KI-Modellen zur Schlafanalyse und mehreren Alarmen. Die App arbeitet lokal, ohne Konto und ohne Internetzugang.",
    pricingInfo: "Kostenlos · Pro €9,99"
  },
  {
    slug: "drivey",
    title: "Drivey",
    description: "Zeichnet Fahrten, Routen und Entfernungen auf und exportiert die Daten als Fahrtenprotokoll.",
    longDescription: "Drivey zeichnet Fahrten auf dem iPhone auf und erfasst Route und Entfernung. Die Daten werden auf Ihrem Gerät gespeichert und lassen sich für die Reisekostenabrechnung exportieren.",
    imageSrc: "/images/drivey.jpg",
    imageAlt: "Drivey Fahrtenbuch App Screenshot",
    imageWidth: 1290,
    imageHeight: 2796,
    badges: [
      "iOS",
      "Mobile"
    ],
    appStoreUrl: "https://apps.apple.com/de/app/drivey/id1590360678",
    productUrl: "https://drivey.cubeon-solutions.de",
    privacyUrl: "/datenschutz/drivey",
    features: [
      "Automatische GPS-Aufzeichnung Ihrer Fahrten",
      "Übersichtliche Liste aller erfassten Fahrten",
      "Distanz- und Routenauswertung",
      "Alle Daten bleiben lokal auf Ihrem Gerät",
      "Export-Funktion für die Reisekostenabrechnung"
    ],
    metaTitle: "Drivey – Fahrtenbuch App für iOS",
    metaDescription: "Drivey zeichnet Fahrten, Routen und Entfernungen auf dem iPhone auf. Mit lokalem Fahrtenprotokoll und CSV-Export für die Reisekostenabrechnung.",
    pricingInfo: "Kostenlos · Pro ab €2,99/Monat oder einmalig €58,99"
  },
  {
    slug: "sbf-see",
    title: "SBF See Prüfungscoach",
    description: "Fragen lernen und Übungsprüfungen für den Sportbootführerschein See absolvieren, auch offline.",
    longDescription: "Der SBF See Prüfungscoach enthält den offiziellen Fragenkatalog, einen Lernmodus und Übungsprüfungen für den Sportbootführerschein See. Sie können Ihren Lernfortschritt verfolgen und die App offline nutzen.",
    imageSrc: "/images/sbf-see.jpg",
    imageAlt: "SBF See Prüfungscoach App Screenshot",
    imageWidth: 1320,
    imageHeight: 2868,
    badges: [
      "iOS",
      "Education"
    ],
    appStoreUrl: "https://apps.apple.com/de/app/sbf-see-pr%C3%BCfungscoach/id6745528841",
    privacyUrl: "/datenschutz/sbf-see",
    features: [
      "Vollständiger offizieller Fragenkatalog für den SBF See",
      "Lernmodus mit sofortiger Auswertung",
      "Realistische Übungsprüfungen im Prüfungsformat",
      "Statistik zum Lernfortschritt",
      "Offline nutzbar – kein Internet nötig"
    ],
    metaTitle: "SBF See Prüfungscoach – Führerschein App für iOS",
    metaDescription: "SBF See Prüfungscoach für iPhone: offizieller Fragenkatalog, Lernmodus und Übungsprüfungen für den Sportbootführerschein See. Auch offline nutzbar.",
    pricingInfo: "Kostenlos · Prüfungsmodus €6,99"
  },
  {
    slug: "sociogramly",
    title: "Sociogramly",
    description: "Erstellt Soziogramme zur Darstellung und Analyse von Beziehungen in Gruppen.",
    longDescription: "Mit Sociogramly erstellen und bearbeiten Sie Soziogramme auf dem iPhone. Die Diagramme zeigen Beziehungen innerhalb einer Gruppe und können von Lehrkräften, Trainern oder Beratern genutzt werden. Die Daten bleiben auf dem Gerät.",
    imageSrc: "/images/sociogramly.jpg",
    imageAlt: "Sociogramly App Screenshot",
    imageWidth: 626,
    imageHeight: 834,
    badges: [
      "iOS",
      "Education"
    ],
    appStoreUrl: "https://apps.apple.com/de/app/sociogramly/id6477749891",
    privacyUrl: "/datenschutz/sociogramly",
    features: [
      "Soziogramme erstellen und bearbeiten",
      "Visuelle Darstellung von Gruppenbeziehungen",
      "Analysefunktionen für soziale Netzwerke",
      "Alle Daten verbleiben lokal auf dem Gerät",
      "Datenschutzfreundlich – keine Weitergabe an Dritte"
    ],
    metaTitle: "Sociogramly – Soziogramm App für iOS",
    metaDescription: "Sociogramly erstellt und analysiert Soziogramme auf dem iPhone. Gruppenbeziehungen als Diagramm darstellen; die Daten bleiben auf dem Gerät.",
    pricingInfo: "€10,99",
    schemaPrice: "10.99"
  },
  {
    slug: "homespot",
    title: "HomeSpot",
    description: "Steuert HomeKit-Geräte über eine Übersicht Ihrer Räume und Geräte.",
    longDescription: "HomeSpot zeigt Ihre HomeKit-Räume und Geräte in einer Übersicht. Von dort können Sie die Geräte direkt steuern. Die App arbeitet lokal.",
    imageSrc: "/images/homespot.png",
    imageAlt: "HomeSpot App Screenshot",
    imageWidth: 300,
    imageHeight: 649,
    badges: [
      "iOS",
      "Smart Home"
    ],
    appStoreUrl: "https://apps.apple.com/de/app/homespot/id6757016819",
    privacyUrl: "/datenschutz/homespot",
    features: [
      "Zugriff auf HomeKit-Geräte",
      "Übersicht der Räume und Geräte",
      "Geräte direkt aus der Übersicht steuern",
      "Lokale Verarbeitung der Daten"
    ],
    metaTitle: "HomeSpot – HomeKit Steuerung für iOS",
    metaDescription: "HomeSpot für iPhone: HomeKit-Räume und Geräte in einer Übersicht anzeigen und direkt steuern. Die App verarbeitet die Daten lokal.",
    pricingInfo: "Kostenlos · Pro €5,99"
  },
  {
    slug: "nd-filter",
    title: "ND Filter",
    description: "Berechnet die Belichtungszeit für Aufnahmen mit einem oder mehreren ND-Filtern.",
    longDescription: "ND Filter berechnet die Belichtungszeit aus Ihrer Basisbelichtung und den gewählten Graufiltern. Sie können mehrere Filter kombinieren und eigene Filter speichern. Für die Aufnahme steht ein Timer mit Vibration und Tonsignal zur Verfügung.",
    imageSrc: "/images/nd-filter.jpg",
    imageAlt: "ND Filter App Screenshot",
    imageWidth: 460,
    imageHeight: 996,
    badges: [
      "iOS",
      "Android",
      "Compose Multiplatform"
    ],
    appStoreUrl: "https://apps.apple.com/de/app/nd-filter/id6760582359",
    playStoreUrl: "https://play.google.com/store/apps/details?id=de.litedev.ndfilter&hl=de",
    privacyUrl: "/datenschutz/nd-filter",
    features: [
      "Belichtungszeit für beliebige ND-Filter berechnen",
      "Mehrere Filter gleichzeitig kombinieren",
      "Eigene Filter hinzufügen und speichern",
      "Eingebauter Timer mit Vibration und Tonsignal",
      "Verfügbar für iOS und Android"
    ],
    metaTitle: "ND Filter – Belichtungsrechner für Fotografen",
    metaDescription: "ND Filter berechnet Belichtungszeiten für einzelne oder kombinierte Graufilter. Mit eigenen Filtern und Aufnahme-Timer für iOS und Android.",
    pricingInfo: "Kostenlos"
  }
];

// Die Reihenfolge gilt für die Produktreihe und die vollständige Übersicht.
// Neue Produkte ohne feste Position werden automatisch am Ende ergänzt.
const appOrder = ["drivey", "awakesync", "sbf-see", "nd-filter", "sociogramly", "homespot"];
export const orderedApps = [...new Set([...appOrder, ...appsData.map((app) => app.slug)])].flatMap((slug) => {
  const app = appsData.find((item) => item.slug === slug);
  return app ? [app] : [];
});
