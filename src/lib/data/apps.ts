export interface AppData {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  imageSrc: string;
  imageAlt: string;
  badges: string[];
  appStoreUrl: string;
  playStoreUrl?: string;
  privacyUrl: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
  pricingInfo?: string;
  schemaPrice?: string;
}

export const appsData: AppData[] = [
  {
    slug: "awakesync",
    title: "AwakeSync",
    description:
      "Eine minimalistische Wecker-App, die lokal auf dem Gerät funktioniert – ohne Datenerfassung.",
    longDescription:
      "AwakeSync ist ein schlichter, ablenkungsfreier Wecker für iOS. Alle Funktionen laufen vollständig lokal auf Ihrem Gerät – keine Konten, keine Datenerfassung, kein Netzwerkzugriff. Einfach einstellen und schlafen.",
    imageSrc: "/images/awakesync.jpg",
    imageAlt: "AwakeSync App Screenshot",
    badges: ["iOS", "Mobile"],
    appStoreUrl: "https://apps.apple.com/de/app/awakesync/id6466740367",
    privacyUrl: "/datenschutz/awakesync",
    features: [
      "Vollständig offline – kein Internet erforderlich",
      "Keine Registrierung, keine Konten, keine Werbung",
      "Minimalistisches Design ohne Ablenkung",
      "Mehrere Alarme mit individuellen Einstellungen",
      "Datenschutzfreundlich: keine Daten werden gesammelt oder übertragen",
    ],
    metaTitle: "AwakeSync – Minimalistischer Wecker für iOS",
    metaDescription:
      "AwakeSync: Der datenschutzfreundliche Wecker für iPhone. Lokal, offline, ohne Tracking. Jetzt im App Store.",
    pricingInfo: "Kostenlos · Pro €9,99",
  },
  {
    slug: "drivey",
    title: "Drivey",
    description:
      "Eine Fahrtenbuch-App zum Tracken und Abrechnen Ihrer Fahrten.",
    longDescription:
      "Drivey macht die Führung eines Fahrtenbuchs so einfach wie möglich. Starten Sie die Aufzeichnung, fahren Sie los – Drivey erfasst Route und Distanz lokal auf Ihrem Gerät. Perfekt für steuerliche Nachweise oder die Reisekostenabrechnung.",
    imageSrc: "/images/drivey.jpg",
    imageAlt: "Drivey Fahrtenbuch App Screenshot",
    badges: ["iOS", "Mobile"],
    appStoreUrl: "https://apps.apple.com/de/app/drivey/id1590360678",
    privacyUrl: "/datenschutz/drivey",
    features: [
      "Automatische GPS-Aufzeichnung Ihrer Fahrten",
      "Übersichtliche Liste aller erfassten Fahrten",
      "Distanz- und Routenauswertung",
      "Alle Daten bleiben lokal auf Ihrem Gerät",
      "Export-Funktion für die Reisekostenabrechnung",
    ],
    metaTitle: "Drivey – Fahrtenbuch App für iOS",
    metaDescription:
      "Drivey: Einfaches digitales Fahrtenbuch für iPhone. GPS-Tracking, lokale Datenspeicherung, kein Cloud-Zwang. Jetzt im App Store.",
    pricingInfo: "Kostenlos · Pro ab €2,99/Monat oder einmalig €58,99",
  },
  {
    slug: "sbf-see",
    title: "SBF See Prüfungscoach",
    description:
      "App zum Lernen für den Sportbootführerschein See – sicher in die Prüfung gehen.",
    longDescription:
      "Der SBF See Prüfungscoach bereitet Sie gezielt auf die Prüfung zum Sportbootführerschein See vor. Mit dem offiziellen Fragenkatalog, Lernmodus und Übungsprüfungen lernen Sie effizient und prüfungssicher – komplett offline.",
    imageSrc: "/images/sbf-see.jpg",
    imageAlt: "SBF See Prüfungscoach App Screenshot",
    badges: ["iOS", "Education"],
    appStoreUrl:
      "https://apps.apple.com/de/app/sbf-see-pr%C3%BCfungscoach/id6745528841",
    privacyUrl: "/datenschutz/sbf-see",
    features: [
      "Vollständiger offizieller Fragenkatalog für den SBF See",
      "Lernmodus mit sofortiger Auswertung",
      "Realistische Übungsprüfungen im Prüfungsformat",
      "Statistik zum Lernfortschritt",
      "Offline nutzbar – kein Internet nötig",
    ],
    metaTitle: "SBF See Prüfungscoach – Führerschein App für iOS",
    metaDescription:
      "Bereiten Sie sich mit dem SBF See Prüfungscoach auf Ihren Sportbootführerschein vor. Offizieller Fragenkatalog, Übungsprüfungen, offline nutzbar.",
    pricingInfo: "Kostenlos · Prüfungsmodus €6,99",
  },
  {
    slug: "sociogramly",
    title: "Sociogramly",
    description:
      "Eine App für soziale Analysen und Diagramme – lokal, sicher und datenschutzfreundlich.",
    longDescription:
      "Sociogramly ermöglicht die Erstellung und Analyse von Soziogrammen direkt auf Ihrem iPhone. Ideal für Lehrkräfte, Trainer und Berater, die Gruppenstrukturen visualisieren möchten – vollständig lokal und ohne Datenweitergabe.",
    imageSrc: "/images/sociogramly.png",
    imageAlt: "Sociogramly App Screenshot",
    badges: ["iOS", "Education"],
    appStoreUrl:
      "https://apps.apple.com/de/app/sociogramly/id6477749891",
    privacyUrl: "/datenschutz/sociogramly",
    features: [
      "Soziogramme erstellen und bearbeiten",
      "Visuelle Darstellung von Gruppenbeziehungen",
      "Analysefunktionen für soziale Netzwerke",
      "Alle Daten verbleiben lokal auf dem Gerät",
      "Datenschutzfreundlich – keine Weitergabe an Dritte",
    ],
    metaTitle: "Sociogramly – Soziogramm App für iOS",
    metaDescription:
      "Sociogramly: Soziogramme erstellen und analysieren auf dem iPhone. Lokal, datenschutzfreundlich, für Lehrkräfte und Berater.",
    pricingInfo: "€10,99",
    schemaPrice: "10.99",
  },
  {
    slug: "homespot",
    title: "HomeSpot",
    description: "Steuere dein HomeKit-Zuhause. Schneller als je zuvor.",
    longDescription:
      "HomeSpot ist die schnellste Art, Ihre HomeKit-Geräte zu steuern. Minimale Ladezeiten, direkter Zugriff auf alle Räume und Geräte – ohne Umwege. Für alle, die ihr Smart Home wirklich täglich nutzen.",
    imageSrc: "/images/homespot.png",
    imageAlt: "HomeSpot App Screenshot",
    badges: ["iOS", "Smart Home"],
    appStoreUrl:
      "https://apps.apple.com/de/app/homespot/id6757016819",
    privacyUrl: "/datenschutz/homespot",
    features: [
      "Blitzschneller Zugriff auf alle HomeKit-Geräte",
      "Übersichtliche Raumansicht",
      "Direkte Steuerung ohne Ladezeiten",
      "Optimiert für täglichen Gebrauch",
      "Vollständig lokal – keine Clouddaten",
    ],
    metaTitle: "HomeSpot – HomeKit Steuerung für iOS",
    metaDescription:
      "HomeSpot: Die schnellste HomeKit App für iPhone. Blitzschnell, übersichtlich, lokal. Steuere dein Smart Home wie nie zuvor.",
    pricingInfo: "Kostenlos · Pro €5,99",
  },
  {
    slug: "nd-filter",
    title: "ND Filter",
    description:
      "Berechne die optimale Belichtungszeit für Langzeitbelichtungen mit ND-Filtern.",
    longDescription:
      "ND Filter hilft Fotografen, die ideale Belichtungszeit beim Einsatz von Graufiltern (ND-Filtern) zu berechnen. Wähle einzelne oder mehrere Filter, gib deine Basisbelichtung ein und erhalte sofort die korrigierte Belichtungszeit – inklusive eingebautem Timer mit Vibration und Tonsignal.",
    imageSrc: "/images/nd-filter.jpg",
    imageAlt: "ND Filter App Screenshot",
    badges: ["iOS", "Android", "Compose Multiplatform"],
    appStoreUrl: "https://apps.apple.com/de/app/nd-filter/id6760582359",
    playStoreUrl: "https://play.google.com/store/apps/details?id=de.litedev.ndfilter&hl=de",
    privacyUrl: "/datenschutz/nd-filter",
    features: [
      "Belichtungszeit für beliebige ND-Filter berechnen",
      "Mehrere Filter gleichzeitig kombinieren",
      "Eigene Filter hinzufügen und speichern",
      "Eingebauter Timer mit Vibration und Tonsignal",
      "Verfügbar für iOS und Android",
    ],
    metaTitle: "ND Filter – Belichtungsrechner für Fotografen",
    metaDescription:
      "ND Filter App: Berechne die optimale Belichtungszeit für Graufilter. Mit eingebautem Timer, für iOS und Android.",
    pricingInfo: "Kostenlos",
  },
];
