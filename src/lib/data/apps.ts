export interface AppData {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  imageSrc: string;
  imageAlt: string;
  badges: string[];
  appStoreUrl: string;
  privacyUrl: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
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
  },
];
