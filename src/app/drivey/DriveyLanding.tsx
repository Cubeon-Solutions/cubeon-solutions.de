import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

export type DriveyLocale = "en" | "de";

const appStoreUrl = "https://apps.apple.com/de/app/drivey/id1590360678";

const screenshots = {
  en: [
    {
      src: "/images/drivey/screen-1.webp",
      alt: "Drivey app overview with trips and mileage",
    },
    {
      src: "/images/drivey/screen-2.webp",
      alt: "Drivey app detail view for a recorded trip",
    },
    {
      src: "/images/drivey/screen-3.webp",
      alt: "Drivey app CarPlay and car assignment",
    },
    {
      src: "/images/drivey/screen-4.webp",
      alt: "Drivey app export and trip history",
    },
    {
      src: "/images/drivey/screen-5.webp",
      alt: "Drivey app settings and automations",
    },
  ],
  de: [
    {
      src: "/images/drivey/screen-1.webp",
      alt: "Drivey App Übersicht mit Fahrten und Kilometerstand",
    },
    {
      src: "/images/drivey/screen-2.webp",
      alt: "Drivey App Detailansicht einer aufgezeichneten Fahrt",
    },
    {
      src: "/images/drivey/screen-3.webp",
      alt: "Drivey App CarPlay und Autozuordnung",
    },
    {
      src: "/images/drivey/screen-4.webp",
      alt: "Drivey App Export und Fahrtenhistorie",
    },
    {
      src: "/images/drivey/screen-5.webp",
      alt: "Drivey App Einstellungen und Automationen",
    },
  ],
};

const content = {
  en: {
    privacy: "Privacy",
    languageToggleLabel: "Select language",
    platform: "iPhone, iPad, Apple Watch, and CarPlay",
    heroTitle: "Mileage log app that records every drive automatically.",
    heroText:
      "Drivey is a mileage log app for iPhone that records drives in the background, tracks route, duration, and distance, and exports trip logs for expenses, reimbursement, and tax records.",
    appStoreCta: "Download on the App Store",
    pricing: "Free · In-App Purchases",
    highlights: [
      { value: "4.5/5", label: "App Store rating" },
      { value: "26", label: "Ratings" },
      { value: "12.4 MB", label: "Compact install" },
      { value: "4+", label: "Age rating" },
    ],
    featuresEyebrow: "Features",
    featuresTitle: "Everything a mileage tracker should handle every day.",
    featuresIntro:
      "Drivey is built for freelancers, consultants, commuters, and anyone who needs reliable drive logs without operating overloaded admin software: drive, review, export.",
    features: [
      {
        title: "Automatic drive tracking",
        description:
          "Drivey detects trips in the background, records mileage, duration, and route, and keeps manual mileage tracking to a minimum.",
      },
      {
        title: "Siri, Shortcuts, and CarPlay",
        description:
          "Start, stop, and automate trip logging through iOS Shortcuts, voice commands, routines, and CarPlay integration.",
      },
      {
        title: "CSV mileage log exports",
        description:
          "Export trip logs as CSV for accounting, expense reports, reimbursements, and tax documentation.",
      },
      {
        title: "Multiple cars",
        description:
          "Assign trips to your vehicles and keep separate odometers and trip lists in view.",
      },
      {
        title: "Apple Watch support",
        description:
          "Control recording right from your wrist when your iPhone stays in your pocket.",
      },
      {
        title: "Privacy-minded",
        description:
          "Drivey does not collect your data for advertising, tracking, or resale. Location data is used only to record your trips.",
      },
    ],
    screenshotsEyebrow: "App Preview",
    screenshotsTitle: "Clear history, quick control, direct exports.",
    workflowEyebrow: "Workflow",
    workflowTitle: "From driving off to a CSV mileage log in three steps.",
    workflowText:
      "Drivey combines automatic recording with the iOS tools you already use: Shortcuts, Siri, Apple Watch, and CarPlay.",
    steps: [
      "Start a trip automatically or with a Shortcut",
      "Let Drivey record route, mileage, and duration",
      "Review trip logs, add tags, assign a car, and export",
    ],
    faqEyebrow: "Mileage Log FAQ",
    faqTitle: "Common questions about Drivey trip logging.",
    faqs: [
      {
        question: "Can Drivey log drives automatically?",
        answer:
          "Yes. Drivey can record drives in the background and keep route, mileage, duration, and trip history available for review.",
      },
      {
        question: "Can I export my mileage log?",
        answer:
          "Yes. Drivey exports trip logs as CSV files for accounting, expense reports, reimbursements, and tax documentation.",
      },
      {
        question: "Does Drivey collect my data for advertising?",
        answer:
          "No. Drivey does not collect your data for advertising, tracking, or resale. Location data is used only to record your trips.",
      },
    ],
    finalTitle: "Ready for a mileage log that simply rides along?",
    finalText:
      "Drivey is available for free on the App Store. Pro upgrades are available as monthly or lifetime options.",
    privacyCta: "View privacy policy",
    cubeonLabel: "Cubeon Solutions homepage",
    schemaDescription:
      "Drivey is a mileage log app for iPhone that records drives automatically, tracks mileage and routes, and exports CSV trip logs.",
    schemaKeywords: [
      "mileage log app",
      "trip logging app",
      "drive tracker",
      "mileage tracker",
      "automatic drive tracking",
      "CSV mileage log export",
    ],
    schemaFeatureList: [
      "Automatic drive tracking",
      "Mileage and route logging",
      "CSV trip log export",
      "CarPlay integration",
      "Apple Watch support",
      "Siri Shortcuts automation",
    ],
  },
  de: {
    privacy: "Datenschutz",
    languageToggleLabel: "Sprache auswählen",
    platform: "iPhone, iPad, Apple Watch und CarPlay",
    heroTitle: "Fahrtenbuch App, die Fahrten automatisch aufzeichnet.",
    heroText:
      "Drivey ist eine Fahrtenbuch App für iPhone, die Fahrten im Hintergrund protokolliert, Route, Dauer und Kilometer erfasst und exportierbare Fahrtenbücher für Abrechnung, Erstattung und Steuerunterlagen liefert.",
    appStoreCta: "Im App Store laden",
    pricing: "Kostenlos · In-App-Käufe",
    highlights: [
      { value: "4,5/5", label: "App Store Bewertung" },
      { value: "26", label: "Bewertungen" },
      { value: "12,4 MB", label: "Kompakt installiert" },
      { value: "4+", label: "Altersfreigabe" },
    ],
    featuresEyebrow: "Funktionen",
    featuresTitle: "Alles, was ein digitaler Kilometer Tracker täglich können muss.",
    featuresIntro:
      "Drivey ist für Selbstständige, Berater, Pendler und alle gebaut, die ein verlässliches Fahrtenprotokoll brauchen, aber keine überladene Verwaltungssoftware bedienen wollen: fahren, prüfen, exportieren.",
    features: [
      {
        title: "Automatische Fahrtenaufzeichnung",
        description:
          "Drivey erkennt Fahrten im Hintergrund, protokolliert Kilometer, Dauer und Route und reduziert manuelle Fahrtenbuchpflege auf ein Minimum.",
      },
      {
        title: "Siri, Kurzbefehle und CarPlay",
        description:
          "Starten, stoppen und automatisieren Sie Fahrten über iOS Kurzbefehle, Sprachbefehle, Routinen und die CarPlay Integration.",
      },
      {
        title: "CSV Fahrtenbuch Export",
        description:
          "Exportieren Sie Fahrtenbücher als CSV für Buchhaltung, Reisekostenabrechnung, Rückerstattung und steuerliche Dokumentation.",
      },
      {
        title: "Mehrere Autos",
        description:
          "Ordnen Sie Fahrten Ihren Fahrzeugen zu und behalten Sie unabhängige Kilometerstände und Fahrtlisten im Blick.",
      },
      {
        title: "Apple Watch Support",
        description:
          "Steuern Sie die Aufzeichnung direkt am Handgelenk, wenn das iPhone in der Tasche bleibt.",
      },
      {
        title: "Datenschutzfreundlich",
        description:
          "Drivey sammelt keine Daten für Werbung, Tracking oder Weiterverkauf. Standortdaten werden nur zur Aufzeichnung Ihrer Fahrten verwendet.",
      },
    ],
    screenshotsEyebrow: "App Einblicke",
    screenshotsTitle: "Klarer Verlauf, schnelle Kontrolle, direkte Exporte.",
    workflowEyebrow: "Workflow",
    workflowTitle: "Vom Losfahren bis zum CSV Fahrtenbuch in drei Schritten.",
    workflowText:
      "Drivey verbindet automatische Erfassung mit den iOS Werkzeugen, die Sie ohnehin nutzen: Kurzbefehle, Siri, Apple Watch und CarPlay.",
    steps: [
      "Fahrt automatisch oder per Kurzbefehl starten",
      "Route, Kilometer und Dauer erfassen lassen",
      "Fahrtenbuch prüfen, taggen, einem Auto zuordnen und exportieren",
    ],
    faqEyebrow: "Fahrtenbuch FAQ",
    faqTitle: "Häufige Fragen zur Fahrtenaufzeichnung mit Drivey.",
    faqs: [
      {
        question: "Kann Drivey Fahrten automatisch aufzeichnen?",
        answer:
          "Ja. Drivey kann Fahrten im Hintergrund protokollieren und Route, Kilometer, Dauer und Fahrtenhistorie zur Prüfung bereitstellen.",
      },
      {
        question: "Kann ich mein Fahrtenbuch exportieren?",
        answer:
          "Ja. Drivey exportiert Fahrtenbücher als CSV-Dateien für Buchhaltung, Reisekostenabrechnung, Erstattung und Steuerunterlagen.",
      },
      {
        question: "Sammelt Drivey Daten für Werbung?",
        answer:
          "Nein. Drivey sammelt keine Daten für Werbung, Tracking oder Weiterverkauf. Standortdaten werden nur zur Aufzeichnung Ihrer Fahrten verwendet.",
      },
    ],
    finalTitle: "Bereit für ein Fahrtenbuch, das einfach mitfährt?",
    finalText:
      "Drivey ist kostenlos im App Store verfügbar. Pro Upgrades sind als monatlicher Kauf oder Lifetime Option erhältlich.",
    privacyCta: "Datenschutz ansehen",
    cubeonLabel: "Cubeon Solutions Startseite",
    schemaDescription:
      "Drivey ist eine Fahrtenbuch App für iPhone, die Fahrten automatisch aufzeichnet, Kilometer und Routen erfasst und CSV-Fahrtenbücher exportiert.",
    schemaKeywords: [
      "Fahrtenbuch App",
      "digitales Fahrtenbuch",
      "Fahrten automatisch aufzeichnen",
      "Kilometer Tracker",
      "Routenerfassung App",
      "CSV Fahrtenbuch Export",
    ],
    schemaFeatureList: [
      "Automatische Fahrtenaufzeichnung",
      "Kilometer- und Routenerfassung",
      "CSV Fahrtenbuch Export",
      "CarPlay Integration",
      "Apple Watch Unterstützung",
      "Kurzbefehle Automatisierung",
    ],
  },
};

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="m5 12.5 4.2 4.2L19 6.8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.3 3.3 5.3 3.3 9S14.2 18.7 12 21c-2.2-2.3-3.3-5.3-3.3-9S9.8 5.3 12 3Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path
        d="m6 9 6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function AppStoreButton({ label }: { label: string }) {
  return (
    <a
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#111827] px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#243044]"
    >
      {label}
    </a>
  );
}

const languageOptions = [
  { locale: "en", code: "EN", label: "English", href: "/drivey" },
  { locale: "de", code: "DE", label: "Deutsch", href: "/drivey/de" },
] as const;

function LanguageMenu({
  locale,
  label,
}: {
  locale: DriveyLocale;
  label: string;
}) {
  const current = languageOptions.find((option) => option.locale === locale);

  return (
    <details className="group relative">
      <summary
        aria-label={label}
        className="flex min-h-10 cursor-pointer list-none items-center gap-2 rounded-lg border border-[#c7d8d6] bg-white/70 px-3 py-2 text-sm font-bold text-[#162033] shadow-sm shadow-[#194b5f]/5 transition-colors hover:border-[#1e50d4] hover:text-[#1e50d4] [&::-webkit-details-marker]:hidden"
      >
        <GlobeIcon />
        <span>{current?.code}</span>
        <span className="text-[#8796a8] transition-transform group-open:rotate-180">
          <ChevronIcon />
        </span>
      </summary>
      <div className="absolute right-0 z-20 mt-2 w-44 overflow-hidden rounded-lg border border-[#d8e7e5] bg-white p-1 shadow-xl shadow-[#162033]/10">
        {languageOptions.map((option) => {
          const isActive = option.locale === locale;
          const className = `flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
            isActive
              ? "bg-[#eef7f6] font-bold text-[#162033]"
              : "font-medium text-[#50627a] hover:bg-[#f7f9fb] hover:text-[#1e50d4]"
          }`;

          return (
            <Link
              key={option.locale}
              href={option.href}
              hrefLang={option.locale}
              aria-current={isActive ? "page" : undefined}
              className={className}
            >
              <span className="flex h-7 w-8 items-center justify-center rounded-md bg-[#172033] text-xs font-bold text-white">
                {option.code}
              </span>
              <span>{option.label}</span>
            </Link>
          );
        })}
      </div>
    </details>
  );
}

export function createDriveySchema(locale: DriveyLocale) {
  const t = content[locale];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Drivey",
        alternateName:
          locale === "de" ? "Drivey Fahrtenbuch" : "Drivey Mileage Log",
        applicationCategory: "UtilitiesApplication",
        applicationSubCategory:
          locale === "de" ? "Fahrtenbuch App" : "Mileage Log App",
        operatingSystem: "iOS, iPadOS, watchOS",
        description: t.schemaDescription,
        keywords: t.schemaKeywords.join(", "),
        featureList: t.schemaFeatureList,
        inLanguage: locale,
        image: "https://drivey.cubeon-solutions.de/images/drivey/screen-1.webp",
        url:
          locale === "de"
            ? "https://drivey.cubeon-solutions.de/de"
            : "https://drivey.cubeon-solutions.de",
        downloadUrl: appStoreUrl,
        author: {
          "@type": "Organization",
          name: "Cubeon Solutions UG",
          url: "https://www.cubeon-solutions.de",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.5",
          ratingCount: "26",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
      },
      {
        "@type": "FAQPage",
        inLanguage: locale,
        mainEntity: t.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export default function DriveyLanding({ locale }: { locale: DriveyLocale }) {
  const t = content[locale];
  const localizedScreenshots = screenshots[locale];

  return (
    <>
      <JsonLd data={createDriveySchema(locale)} />
      <main className="min-h-screen bg-[#f7f9fb] text-[#162033]">
        <section className="overflow-hidden bg-[#eef7f6]">
          <div className="mx-auto grid min-h-[92vh] max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-6 md:grid-cols-[1fr_0.86fr] md:pb-20">
            <header className="flex items-center justify-between gap-4 md:col-span-2">
              <Link
                href="https://www.cubeon-solutions.de"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#162033]"
                aria-label={t.cubeonLabel}
              >
                <Image
                  src="/images/cubeon_favicon_blue_1024.png"
                  alt=""
                  width={28}
                  height={28}
                />
                Cubeon Solutions
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  href="/datenschutz/drivey"
                  className="text-sm font-medium text-[#50627a] transition-colors hover:text-[#1e50d4]"
                >
                  {t.privacy}
                </Link>
                <LanguageMenu
                  locale={locale}
                  label={t.languageToggleLabel}
                />
              </div>
            </header>

            <div className="max-w-2xl">
              <div className="mb-8 flex items-center gap-4">
                <Image
                  src="/images/drivey/icon.png"
                  alt="Drivey App Icon"
                  width={72}
                  height={72}
                  className="rounded-[18px] shadow-lg shadow-[#194b5f]/15"
                  priority
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#25716d]">
                    Drivey
                  </p>
                  <p className="text-sm text-[#50627a]">{t.platform}</p>
                </div>
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] text-[#111827] sm:text-6xl lg:text-7xl">
                {t.heroTitle}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#3b4b61]">
                {t.heroText}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <AppStoreButton label={t.appStoreCta} />
                <span className="text-sm font-medium text-[#50627a]">
                  {t.pricing}
                </span>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
                {t.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-[#d8e7e5] bg-white/80 px-4 py-3"
                  >
                    <p className="text-xl font-bold text-[#111827]">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs leading-4 text-[#50627a]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto h-[560px] w-full max-w-[430px] md:h-[660px]">
              <div className="absolute left-0 top-10 h-[500px] w-[230px] rotate-[-8deg] overflow-hidden rounded-[34px] border-[10px] border-[#111827] bg-[#111827] shadow-2xl shadow-[#194b5f]/25 sm:w-[255px] md:h-[570px] md:w-[263px]">
                <Image
                  src="/images/drivey/screen-2.webp"
                  alt={localizedScreenshots[1].alt}
                  fill
                  className="object-cover"
                  sizes="263px"
                  priority
                />
              </div>
              <div className="absolute right-0 top-0 h-[520px] w-[240px] rotate-[5deg] overflow-hidden rounded-[34px] border-[10px] border-[#111827] bg-[#111827] shadow-2xl shadow-[#194b5f]/30 sm:w-[264px] md:h-[600px] md:w-[277px]">
                <Image
                  src="/images/drivey/screen-1.webp"
                  alt={localizedScreenshots[0].alt}
                  fill
                  className="object-cover"
                  sizes="277px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 md:grid-cols-[0.75fr_1fr] md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#25716d]">
                  {t.featuresEyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">
                  {t.featuresTitle}
                </h2>
              </div>
              <p className="text-lg leading-8 text-[#3b4b61]">
                {t.featuresIntro}
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {t.features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-lg border border-[#e2e8f0] bg-[#fbfcfd] p-6"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#e7f4f1] text-[#25716d]">
                    <CheckIcon />
                  </div>
                  <h3 className="text-lg font-bold text-[#111827]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#50627a]">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f9fb] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#25716d]">
                  {t.screenshotsEyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">
                  {t.screenshotsTitle}
                </h2>
              </div>
              <AppStoreButton label={t.appStoreCta} />
            </div>
            <div className="flex gap-5 overflow-x-auto pb-4">
              {localizedScreenshots.map((screenshot) => (
                <div
                  key={screenshot.src}
                  className="relative h-[520px] w-[240px] flex-none overflow-hidden rounded-[32px] border-[10px] border-[#111827] bg-[#111827] shadow-xl shadow-[#162033]/10"
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#25716d]">
                {t.workflowEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">
                {t.workflowTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#3b4b61]">
                {t.workflowText}
              </p>
            </div>
            <ol className="space-y-4">
              {t.steps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-lg border border-[#e2e8f0] bg-[#fbfcfd] p-5"
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-[#1e50d4] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-lg font-semibold text-[#162033]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#f7f9fb] py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#25716d]">
                {t.faqEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">
                {t.faqTitle}
              </h2>
            </div>
            <div className="space-y-4">
              {t.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-lg border border-[#e2e8f0] bg-white p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-[#111827] [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-[#eef7f6] text-[#25716d] transition-transform group-open:rotate-180">
                      <ChevronIcon />
                    </span>
                  </summary>
                  <p className="mt-4 leading-7 text-[#50627a]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#172033] py-20 text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
            <Image
              src="/images/drivey/icon.png"
              alt=""
              width={80}
              height={80}
              className="rounded-[20px]"
            />
            <h2 className="mt-6 max-w-2xl text-3xl font-bold sm:text-4xl">
              {t.finalTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#d7dee9]">
              {t.finalText}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <AppStoreButton label={t.appStoreCta} />
              <Link
                href="/datenschutz/drivey"
                className="text-sm font-semibold text-[#d7dee9] transition-colors hover:text-white"
              >
                {t.privacyCta}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
