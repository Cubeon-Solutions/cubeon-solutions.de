export interface TeamMember {
  name: string;
  profession: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
}

export const teamData: TeamMember[] = [
  {
    name: "M. Sc. Ludwig Chen Li",
    profession: "Informatiker",
    role: "Geschäftsführer & Gründer",
    imageSrc: "/images/ludwig.jpg",
    imageAlt: "M. Sc. Ludwig Chen Li, Geschäftsführer und Gründer von Cubeon Solutions"
  },
  {
    name: "Dr. Lars Mathuseck",
    profession: "Informatiker",
    role: "Gründer",
    imageSrc: "/images/lars.jpg",
    imageAlt: "Dr. Lars Mathuseck, Gründer Cubeon Solutions"
  },
  {
    name: "M.Sc. Lennart Busch",
    profession: "Informatiker",
    role: "Gründer",
    imageSrc: "/images/lennart.jpg",
    imageAlt: "M.Sc. Lennart Busch, Gründer Cubeon Solutions"
  }
];
