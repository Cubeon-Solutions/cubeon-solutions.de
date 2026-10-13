import type { Metadata } from "next";
import DriveyLanding from "./DriveyLanding";

export const metadata: Metadata = {
  title: "Mileage Log App for iPhone - Drivey",
  description:
    "Drivey is a mileage log app for iPhone that records drives automatically, tracks routes and distance, and exports CSV trip logs for expenses or taxes.",
  keywords: [
    "mileage log app",
    "trip logging app",
    "drive tracker",
    "mileage tracker iPhone",
    "automatic route tracking",
    "CSV mileage export"
  ],
  alternates: {
    canonical: "https://drivey.cubeon-solutions.de",
    languages: {
      en: "https://drivey.cubeon-solutions.de",
      de: "https://drivey.cubeon-solutions.de/de",
    },
  },
  openGraph: {
    title: "Drivey - Mileage Log App for iPhone",
    description:
      "Record drives automatically, track mileage and routes, and export clean CSV trip logs for expenses, reimbursement, or tax records.",
    url: "https://drivey.cubeon-solutions.de",
    images: ["https://drivey.cubeon-solutions.de/images/drivey/screen-1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drivey - Mileage Log App for iPhone",
    description:
      "Automatic drive tracking, mileage logs, route history, CarPlay, Shortcuts, and CSV exports.",
    images: ["https://drivey.cubeon-solutions.de/images/drivey/screen-1.webp"],
  },
};

export default function DriveyPage() {
  return <DriveyLanding locale="en" />;
}
