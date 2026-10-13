export interface ClientReference {
  id: string;
  enabled: boolean;
  name: string;
  websiteUrl: string;
  logo: string;
  width: number;
  height: number;
  category: string;
  title: string;
  description: string;
  projectDetails: { title: string; text: string }[];
  tags: string[];
  background: string;
  serviceHref: string;
  serviceLabel: string;
}

// Eintrag kopieren, eindeutige id vergeben und Logo unter public/images/clients ablegen.
// enabled steuert die Sichtbarkeit; die Reihenfolge hier bestimmt die Anzeige.
export const clients: ClientReference[] = [
  {
    id: "eimsig",
    enabled: true,
    name: "EiMSIG",
    websiteUrl: "https://www.eimsig.de/",
    logo: "/images/clients/eimsig.png",
    width: 1920,
    height: 489,
    category: "Mobile Entwicklung",
    title: "Eine App neu entwickeln und modernisieren",
    description: "Für EiMSIG entwickeln wir die App für Android und iOS vollständig neu und modernisieren ihre technische Grundlage. Die Anwendungen verbinden das Smartphone mit dem Alarmsystem und werden nach den Anforderungen des Unternehmens umgesetzt. Dabei schaffen wir die Grundlage für langfristige Pflege und neue Funktionen.",
    projectDetails: [
      {
        title: "1. Ausgangslage",
        text: "Die EiMSIG-App verbindet das Alarmsystem mit dem Smartphone. Für die weitere Nutzung und Entwicklung soll sie nach den Anforderungen des Unternehmens vollständig neu entwickelt und modernisiert werden."
      },
      {
        title: "2. Lösung",
        text: "Wir entwickeln neue Apps für Android und iOS, die auf die Anforderungen von EiMSIG abgestimmt sind. Die Anbindung an das Alarmsystem gehört zur Neuentwicklung."
      },
      {
        title: "3. Ergebnis",
        text: "Mit der Neuentwicklung entsteht eine moderne Grundlage für die EiMSIG-App. Ziel ist, die Anwendungen langfristig zu pflegen und neue Funktionen leichter ergänzen zu können."
      }
    ],
    tags: [
      "iOS",
      "Android",
      "Native Entwicklung",
      "Geräteanbindung"
    ],
    background: "#f2f8f0",
    serviceHref: "/app-entwicklung-kassel",
    serviceLabel: "App-Entwicklung"
  },
  {
    id: "nvv",
    enabled: true,
    name: "NVV",
    websiteUrl: "https://www.nvv.de/",
    logo: "/images/clients/nvv.svg",
    width: 185,
    height: 90,
    category: "Beratung",
    title: "Eine neue App mit Beratung begleiten",
    description: "Wir begleiten die Umsetzung einer neuen App für den Nordhessischen VerkehrsVerbund (NVV) beratend. Gemeinsam besprechen wir den Funktionsumfang, die Bedienung und die Technologie. Während der Umsetzung stehen wir dem Projektteam für Fragen rund um die App zur Seite.",
    projectDetails: [
      {
        title: "1. Ausgangslage",
        text: "Der NVV setzt eine neue App um. Wir begleiten das Projekt mit Beratung zu Funktionen, Nutzererfahrung und technischen Entscheidungen."
      },
      {
        title: "2. Lösung",
        text: "Wir besprechen den Funktionsumfang, die Gestaltung der Bedienung und die Wahl der Technologie mit dem Projektteam. Unsere Rolle ist die beratende Begleitung der Umsetzung."
      },
      {
        title: "3. Ergebnis",
        text: "Auch bei Fragen, die im weiteren Projektverlauf entstehen, stehen wir als Ansprechpartner zur Verfügung. Die Beratung begleitet damit die Entwicklung der neuen App."
      }
    ],
    tags: [
      "Funktionsumfang",
      "Nutzererfahrung",
      "Technologieberatung"
    ],
    background: "#effaf3",
    serviceHref: "/app-beratung",
    serviceLabel: "Beratung"
  },
  {
    id: "rohloff",
    enabled: true,
    name: "Rohloff",
    websiteUrl: "https://www.rohloff.de/de/",
    logo: "/images/clients/rohloff.png",
    width: 203,
    height: 57,
    category: "Individuelle Softwareentwicklung",
    title: "Manuelle Abläufe im Mailsystem automatisieren",
    description: "Für Rohloff entwickeln wir ein Plugin für das interne Mailsystem. Die Erweiterung soll Arbeitsschritte automatisieren, die Mitarbeitende bisher manuell erledigen. Ihre Funktionen richten sich nach den Abläufen und Anforderungen des Unternehmens.",
    projectDetails: [
      {
        title: "1. Ausgangslage",
        text: "Im internen Mailsystem führen Mitarbeitende bestimmte Arbeitsschritte bisher manuell durch. Diese Abläufe sollen durch eine Softwareerweiterung automatisiert werden."
      },
      {
        title: "2. Lösung",
        text: "Wir entwickeln ein spezielles Plugin für das vorhandene Mailsystem. Die Funktionen werden nach den Wünschen und Anforderungen von Rohloff umgesetzt."
      },
      {
        title: "3. Ergebnis",
        text: "Ziel der Erweiterung ist, wiederkehrende manuelle Arbeitsschritte direkt im bestehenden Mailsystem zu automatisieren. So sollen die internen Abläufe mit weniger manuellen Eingriffen auskommen."
      }
    ],
    tags: [
      "Individualsoftware",
      "Automatisierung",
      "Plugin-Entwicklung"
    ],
    background: "#fffbeb",
    serviceHref: "/softwareentwicklung-kassel",
    serviceLabel: "Individuelle Softwareentwicklung"
  },
  {
    id: "tanzverzeichnis",
    enabled: true,
    name: "Tanzverzeichnis.de",
    websiteUrl: "https://www.tanzverzeichnis.de/",
    logo: "/images/clients/tanzverzeichnis.svg",
    width: 7997,
    height: 888,
    category: "Individuelle Softwareentwicklung",
    title: "WordPress mit einem Zahlungsdienstleister verbinden",
    description: "Für Tanzverzeichnis.de haben wir ein WordPress-Plugin entwickelt, das die Website mit dem Zahlungsdienstleister verbindet. Die Zahlungsanbindung wurde nach den individuellen Anforderungen des Kunden umgesetzt und in die bestehende WordPress-Website integriert.",
    projectDetails: [
      {
        title: "1. Ausgangslage",
        text: "Die WordPress-Website sollte an einen Zahlungsdienstleister angebunden werden. Dabei mussten die individuellen Anforderungen des Kunden berücksichtigt werden."
      },
      {
        title: "2. Lösung",
        text: "Wir haben ein eigenes WordPress-Plugin entwickelt, das die Website mit dem Zahlungsdienstleister verbindet. Die Funktionen wurden nach den Vorgaben des Kunden umgesetzt."
      },
      {
        title: "3. Ergebnis",
        text: "Die Zahlungsanbindung ergänzt die bestehende WordPress-Website um die vereinbarten Funktionen. Die individuelle Erweiterung fügt sich in das vorhandene System ein."
      }
    ],
    tags: ["WordPress", "Plugin-Entwicklung", "Zahlungsanbindung"],
    background: "#e8f3f4",
    serviceHref: "/softwareentwicklung-kassel",
    serviceLabel: "Individuelle Softwareentwicklung"
  }
];

export const enabledClients = clients.filter((client) => client.enabled);
