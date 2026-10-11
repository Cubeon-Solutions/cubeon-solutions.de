export interface ClientReference {
  id: string;
  enabled: boolean;
  name: string;
  logo: string;
  width: number;
  height: number;
  category: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  background: string;
}

// Eintrag kopieren, eindeutige id vergeben und Logo unter public/images/clients ablegen.
// enabled steuert die Sichtbarkeit; die Reihenfolge hier bestimmt die Anzeige.
export const clients: ClientReference[] = [
  {
    id: "rohloff", enabled: true,
    name: "Rohloff", logo: "/images/clients/rohloff.png", width: 203, height: 57,
    category: "Individuelle Software", title: "Eine eigene Erweiterung für Nextcloud",
    description: "Ein Nextcloud-Plugin für Rohloff, abgestimmt auf die Anforderungen des Unternehmens. Es ergänzt die bestehende Plattform um eigene Funktionen.",
    tags: ["Nextcloud", "Plugin-Entwicklung"], accent: "#d6a600", background: "#fffbeb",
  },
  {
    id: "eimsig", enabled: true,
    name: "Eimsig", logo: "/images/clients/eimsig.png", width: 1920, height: 489,
    category: "Mobile Entwicklung", title: "Die Eimsig-App neu aufgestellt",
    description: "Die Eimsig-App verbindet das Alarmsystem mit dem Smartphone. Unsere Zusammenarbeit umfasst die Erneuerung der App für iOS und Android.",
    tags: ["iOS", "Android", "App-Modernisierung"], accent: "#437b40", background: "#f2f8f0",
  },
  {
    id: "nvv", enabled: true,
    name: "NVV", logo: "/images/clients/nvv.svg", width: 185, height: 90,
    category: "IT-Beratung", title: "Beratung zur App-Entwicklung",
    description: "Eine App für mehrere Plattformen: Beratung zur Cross-Platform-Entwicklung für den Nordhessischen VerkehrsVerbund (NVV).",
    tags: ["Cross-Platform", "App-Beratung"], accent: "#00a650", background: "#effaf3",
  },
];

export const enabledClients = clients.filter((client) => client.enabled);
