import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Apps from "@/components/sections/Apps";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Cubeon Solutions — IT-Dienstleister aus Kassel",
  description:
    "Cubeon Solutions aus Kassel: Mobile App Entwicklung (Android, iOS), Full-Stack-Entwicklung und KI-Lösungen für Unternehmen. Jetzt anfragen.",
  openGraph: {
    title: "Cubeon Solutions — IT-Dienstleister aus Kassel",
    description:
      "Mobile App Entwicklung, Full-Stack und KI-Lösungen aus Kassel. Enge Zusammenarbeit, schnelle Prototypen.",
    images: ["/images/cubeon_favicon_blue_1024.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cubeon Solutions UG (haftungsbeschränkt)",
  url: "https://www.cubeon-solutions.de",
  email: "kontakt@cubeon-solutions.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hupfeldstr. 6",
    addressLocality: "Kassel",
    postalCode: "34121",
    addressCountry: "DE",
  },
  description:
    "IT-Dienstleister aus Kassel, spezialisiert auf Mobile Development (Android, iOS), Full-Stack-Entwicklung und KI-Lösungen.",
  areaServed: "DE",
  knowsLanguage: ["de", "en"],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Apps />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
