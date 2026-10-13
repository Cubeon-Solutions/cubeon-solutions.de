import type { Metadata } from "next";
import DriveyLanding from "../DriveyLanding";

export const metadata: Metadata = {
  title: "Fahrtenbuch App für iPhone - Drivey",
  description:
    "Drivey ist eine Fahrtenbuch App für iPhone, die Fahrten automatisch aufzeichnet, Routen und Kilometer erfasst und CSV-Exporte für Abrechnung oder Steuer liefert.",
  keywords: [
    "Fahrtenbuch App",
    "digitales Fahrtenbuch",
    "Fahrten automatisch aufzeichnen",
    "Kilometer Tracker iPhone",
    "Routenerfassung App",
    "CSV Fahrtenbuch Export"
  ],
  alternates: {
    canonical: "https://drivey.cubeon-solutions.de/de",
    languages: {
      en: "https://drivey.cubeon-solutions.de",
      de: "https://drivey.cubeon-solutions.de/de",
    },
  },
  openGraph: {
    title: "Drivey - Fahrtenbuch App für iPhone",
    description:
      "Fahrten automatisch aufzeichnen, Kilometer und Routen erfassen und saubere CSV-Fahrtenbücher für Abrechnung oder Steuer exportieren.",
    url: "https://drivey.cubeon-solutions.de/de",
    images: ["https://drivey.cubeon-solutions.de/images/drivey/screen-1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drivey - Fahrtenbuch App für iPhone",
    description:
      "Automatische Fahrtenaufzeichnung, Kilometerprotokoll, Routenhistorie, CarPlay, Kurzbefehle und CSV Export.",
    images: ["https://drivey.cubeon-solutions.de/images/drivey/screen-1.webp"],
  },
};

export default function DriveyGermanPage() {
  return <DriveyLanding locale="de" />;
}
