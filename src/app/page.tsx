import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ProjectExtensions from "@/components/sections/ProjectExtensions";
import Clients from "@/components/sections/Clients";
import WhyCubeon from "@/components/sections/WhyCubeon";
import Approach from "@/components/sections/Approach";
import About from "@/components/sections/About";
import Apps from "@/components/sections/Apps";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/seo/JsonLd";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { businessSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Software, Apps & Beratung aus Kassel",
  "Individuelle Software, Apps für Android, iOS und Desktop sowie Beratung für KMU deutschlandweit. Aus Kassel, direkt mit den Entwicklern.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <JsonLd data={businessSchema} />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <ProjectExtensions />
        <Clients />
        <WhyCubeon />
        <Approach />
        <About />
        <Apps />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
