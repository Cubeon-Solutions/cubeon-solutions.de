export interface Service {
  id: "software" | "apps" | "beratung";
  href: string;
  name: string;
  shortName: string;
  metaTitle: string;
  description: string;
  title: string;
  intro: string;
  question: string;
  summary: string;
  outcome: string;
  referenceId: string;
  scenarios: { title: string; text: string }[];
  scope: { title: string; text: string }[];
}

export const services: Service[] = [
  {
    id: "software",
    href: "/softwareentwicklung-kassel",
    name: "Individuelle Softwareentwicklung",
    shortName: "Individualsoftware",
    metaTitle: "Softwareentwicklung für KMU in Kassel",
    description: "Individuelle Softwareentwicklung aus Kassel für KMU deutschlandweit: Webanwendungen, Kundenportale und Erweiterungen bestehender Systeme.",
    title: "Für Ihre Abläufe, Daten und vorhandenen Systeme.",
    intro: "Wir entwickeln Software für Aufgaben, die Ihre bisherigen Programme nicht abdecken: zum Beispiel interne Abläufe, Kundenportale oder zusätzliche Funktionen für eine vorhandene Plattform. Oberfläche, Datenbank und Schnittstellen entwickeln wir zusammen, damit Ihre Mitarbeiter mit den benötigten Informationen arbeiten können.",
    question: "Fehlen Ihrer Software wichtige Funktionen?",
    summary: "Wir entwickeln Webanwendungen und Kundenportale, ergänzen bestehende Software und verbinden sie mit den Daten und Systemen Ihres Unternehmens.",
    outcome: "Oberfläche, Datenbank und Schnittstellen.",
    referenceId: "rohloff",
    scenarios: [
      {
        title: "Interne Abläufe digitalisieren",
        text: "Informationen liegen in mehreren Dateien oder müssen von Hand übertragen werden? Eine interne Anwendung kann die benötigten Daten und Arbeitsschritte zusammenführen."
      },
      {
        title: "Vorhandene Software erweitern",
        text: "Ihre Plattform funktioniert, aber eine bestimmte Funktion fehlt. Wir prüfen, ob sie sich über ein Plugin oder eine Schnittstelle ergänzen lässt."
      },
      {
        title: "Ältere Anwendungen modernisieren",
        text: "Die Software wird noch gebraucht, ihre Bedienung oder Technik muss aber erneuert werden. Wir prüfen, welche Teile sich weiterverwenden lassen."
      }
    ],
    scope: [
      {
        title: "Funktionen und Bedienung",
        text: "Wir besprechen die Arbeitsschritte mit Ihnen und legen fest, welche Funktionen die Anwendung braucht. Daraus entsteht die Bedienoberfläche."
      },
      {
        title: "Server-Software und Schnittstellen",
        text: "Wir entwickeln die Software, die Ihre Daten speichert, Zugriffsrechte verwaltet und Informationen mit anderen Systemen austauscht. Sie stellt die benötigten Daten für Ihre Weboberfläche oder App bereit."
      },
      {
        title: "Anschluss an vorhandene Systeme",
        text: "Wir prüfen die Schnittstellen Ihrer bisherigen Anwendungen und legen fest, welche Daten ausgetauscht werden sollen."
      },
      {
        title: "Entwicklung in Etappen",
        text: "Wir vereinbaren den Umfang der ersten Version und die weiteren Entwicklungsschritte. Sie können Zwischenstände prüfen und Rückmeldung geben."
      }
    ]
  },
  {
    id: "apps",
    href: "/app-entwicklung-kassel",
    name: "App-Entwicklung",
    shortName: "Apps",
    metaTitle: "App-Entwicklung in Kassel: Mobil & Desktop",
    description: "App-Entwicklung aus Kassel für KMU deutschlandweit: Android, iOS und Desktop. Neue Apps entwickeln, vorhandene erneuern und Systeme oder Geräte anbinden.",
    title: "Für Mitarbeiter, Kunden oder die Bedienung Ihrer Produkte.",
    intro: "Für kleine und mittlere Unternehmen entwickeln wir Apps für Android, iOS und Desktop: für Aufgaben im Betrieb, Anwendungen für Ihre Kunden oder die Steuerung technischer Geräte. Wir übernehmen neue Apps und die Weiterentwicklung vorhandener Anwendungen. Wenn die App Daten mit Ihrem Unternehmen austauschen muss, entwickeln wir auch die Software für die Datenhaltung und den Datenaustausch dazu.",
    question: "Brauchen Sie, Ihre Mitarbeiter oder Ihre Kunden eine App?",
    summary: "Wir entwickeln Apps für Android, iOS und Desktop, erneuern vorhandene Anwendungen und binden bei Bedarf Ihre Systeme oder Geräte an.",
    outcome: "Von der Bedienung bis zur Veröffentlichung.",
    referenceId: "eimsig",
    scenarios: [
      {
        title: "Eine neue App entwickeln",
        text: "Sie möchten einen betrieblichen Ablauf oder Ihr Produkt auf dem Smartphone oder Computer anbieten. Wir legen fest, welche Funktionen die erste Version enthalten soll."
      },
      {
        title: "Eine bestehende App erneuern",
        text: "Die App wird bereits genutzt, braucht aber neue Funktionen oder eine Überarbeitung der Bedienung. Wir prüfen ihren technischen Stand und planen die Änderungen."
      },
      {
        title: "Geräte über eine App bedienen",
        text: "Ihre Kunden sollen ein technisches Gerät mit dem Smartphone oder Computer steuern oder Daten daraus abrufen. Wir prüfen die benötigten Gerätezugriffe und Schnittstellen."
      }
    ],
    scope: [
      {
        title: "Smartphone und Desktop",
        text: "Android, iOS oder Desktop: Wir wählen die Plattformen und den Entwicklungsansatz nach Ihren Anforderungen. Eine gemeinsame Codebasis für mehrere Plattformen kann den Pflegeaufwand reduzieren; besondere Gerätefunktionen können native Entwicklung erfordern."
      },
      {
        title: "Bedienung und Funktionen",
        text: "Wir planen die Arbeitsschritte in der App und setzen die benötigten Ansichten um. Bei Bedarf testen Sie die Bedienung zunächst mit einem Prototyp."
      },
      {
        title: "Daten und Geräte verbinden",
        text: "Wir verbinden Ihre App mit vorhandenen Systemen und Geräten. Die Software, die im Hintergrund Daten speichert, Zugriffsrechte verwaltet und Informationen austauscht, können wir im selben Projekt entwickeln."
      },
      {
        title: "Veröffentlichen und pflegen",
        text: "Wir begleiten die Veröffentlichung in App Stores oder die Bereitstellung auf den Computern Ihres Unternehmens. Anschließende Updates, Fehlerbehebung und neue Funktionen vereinbaren wir mit Ihnen."
      }
    ]
  },
  {
    id: "beratung",
    href: "/app-beratung",
    name: "Beratung",
    shortName: "Beratung",
    metaTitle: "Beratung für KMU aus Kassel",
    description: "Beratung aus Kassel für KMU deutschlandweit: Vorhaben planen, Anforderungen klären und Entscheidungen zu Funktionen, Bedienung und Technologie treffen.",
    title: "Klären Sie die nächsten Schritte, bevor Sie entwickeln lassen.",
    intro: "Sie möchten ein neues Vorhaben planen, bestehende Abläufe verbessern oder Entscheidungen zu Funktionen, Bedienung und Technologie treffen? Wir besprechen Ihre Ziele, prüfen die Möglichkeiten und dokumentieren eine Empfehlung. Unsere Beratung können Sie auch ohne anschließenden Entwicklungsauftrag buchen. Auf Wunsch begleiten wir Ihr Projekt auch während der Umsetzung.",
    question: "Welche Lösung passt zu Ihrem Vorhaben?",
    summary: "Wir unterstützen Sie bei der Planung Ihres Vorhabens und bei Entscheidungen zu Funktionen, Bedienung und Technologie. Sie erhalten eine dokumentierte Empfehlung. Die Beratung können Sie auch ohne Entwicklungsauftrag buchen.",
    outcome: "Eine dokumentierte Grundlage für Ihre Entscheidung.",
    referenceId: "nvv",
    scenarios: [
      {
        title: "Ein neues Projekt klären",
        text: "Wir besprechen Ihre Abläufe, benötigte Funktionen und vorhandene Systeme. Sie erhalten priorisierte Anforderungen, offene Fragen und einen Vorschlag für die nächsten Schritte."
      },
      {
        title: "Bestehende Software prüfen",
        text: "Wir untersuchen den technischen Aufbau Ihrer Anwendung und die geplanten Änderungen. Sie erhalten eine Einschätzung zu Erweiterungsmöglichkeiten, Abhängigkeiten und anstehenden technischen Aufgaben."
      },
      {
        title: "Entwicklungsansätze vergleichen",
        text: "Wir vergleichen geeignete Ansätze für Ihre Webanwendung oder Ihre App für Smartphone oder Desktop. Sie erhalten eine begründete Empfehlung, die Funktionen, vorhandene Systeme und spätere Wartung berücksichtigt."
      }
    ],
    scope: [
      {
        title: "Funktionen und Machbarkeit",
        text: "Wir prüfen die benötigten Funktionen, Daten und Schnittstellen. Dabei halten wir fest, welche technischen Fragen vor der Entwicklung beantwortet werden müssen."
      },
      {
        title: "Technik und Entwicklungsansatz",
        text: "Wir vergleichen die geeigneten Technologien und besprechen Aufwand, vorhandene Systeme und spätere Pflege. Auch die Kenntnisse Ihres eigenen Entwicklungsteams fließen in die Empfehlung ein."
      },
      {
        title: "Bedienung und Aufbau der Anwendung",
        text: "Wir besprechen die Arbeitsschritte der Nutzer, die benötigten Ansichten und den technischen Aufbau. Dazu gehört auch, wie Daten mit vorhandenen Systemen ausgetauscht werden."
      },
      {
        title: "Dokumentierte Empfehlung",
        text: "Sie erhalten das zuvor vereinbarte Ergebnis: etwa einen Vergleich der Entwicklungsansätze, einen Vorschlag zur Architektur oder eine Liste der nächsten technischen Aufgaben."
      }
    ]
  }
];

export const projectExtensions = [
  {
    title: "Daten und Schnittstellen",
    text: "Wir entwickeln die Server-Software hinter Ihrer Anwendung. Sie speichert Daten, verwaltet Zugriffsrechte und tauscht Informationen mit den Systemen Ihres Unternehmens aus."
  },
  {
    title: "Hosting und Betrieb",
    text: "Auf Wunsch richten wir die Server ein, auf denen Ihre Anwendung läuft, und kümmern uns um den laufenden Betrieb. Anforderungen und Umfang vereinbaren wir vorab."
  },
  {
    title: "Wartung und Updates",
    text: "Wir beheben Fehler, aktualisieren die Technik und passen Ihre Anwendung an neue Anforderungen an. Den Umfang der laufenden Betreuung vereinbaren wir mit Ihnen."
  },
  {
    title: "KI-Integration",
    text: "Bei Bedarf ergänzen wir KI-Funktionen, zum Beispiel für die Suche in Dokumenten oder das Zusammenfassen von Texten. Gemeinsam prüfen wir, ob der Einsatz für Ihre Aufgabe sinnvoll ist."
  }
];
