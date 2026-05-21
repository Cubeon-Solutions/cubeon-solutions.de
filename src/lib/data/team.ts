export interface TeamMember {
  name: string;
  degree: string;
  role: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Lars Mathuseck",
    degree: "M. Sc. Informatik",
    role: "Android & KI/ML Experte",
    description:
      "Mobile Entwicklung (Android, iOS), KI-Beratung und Durchführung, Server-Software Entwicklung (Full-Stack), Augmented Reality und Smart City.",
    imageSrc: "/images/lars.jpg",
    imageAlt: "Lars Mathuseck, Gründer Cubeon Solutions",
  },
  {
    name: "Lennart Busch",
    degree: "M. Sc. Informatik",
    role: "iOS & KI/ML Experte",
    description:
      "Mobile Entwicklung (Android, iOS), Augmented Reality, KI-Entwicklung.",
    imageSrc: "/images/lennart.jpg",
    imageAlt: "Lennart Busch, Gründer Cubeon Solutions",
  },
  {
    name: "Ludwig Chen Li",
    degree: "M. Sc. Informatik",
    role: "Web/Backend & Geschäftsführer",
    description:
      "Frontend-Entwicklung (Web, Mobile), Datenbank-Design, skalierbare Backend-Architekturen.",
    imageSrc: "/images/ludwig.jpg",
    imageAlt: "Ludwig Chen Li, Geschäftsführer Cubeon Solutions",
  },
];
