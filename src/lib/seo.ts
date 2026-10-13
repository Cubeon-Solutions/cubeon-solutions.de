import type { Metadata } from "next";

import { services, type Service } from "@/lib/data/services";

export const BASE_URL = "https://www.cubeon-solutions.de";
export const CONTENT_UPDATED = "2026-10-13";
export const SOCIAL_IMAGE = "/share/opengraph-image";
const BUSINESS_ID = `${BASE_URL}/#unternehmen`;

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org", "@type": "Service",
    "@id": `${BASE_URL}${service.href}#leistung`,
    name: service.name, description: service.summary,
    serviceType: service.name, url: `${BASE_URL}${service.href}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "Country", name: "Deutschland" },
    audience: { "@type": "BusinessAudience", audienceType: "Kleine und mittlere Unternehmen (KMU)" },
  };
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | Cubeon Solutions`;
  return {
    title: { absolute: fullTitle }, description,
    alternates: { canonical: `${BASE_URL}${path}` },
    openGraph: {
      type: "website", locale: "de_DE", siteName: "Cubeon Solutions",
      title: fullTitle, description, url: `${BASE_URL}${path}`,
      images: [{ url: SOCIAL_IMAGE, width: 1200, height: 630, alt: "Cubeon Solutions – Softwareentwicklung, Apps und Beratung aus Kassel für KMU deutschlandweit" }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [SOCIAL_IMAGE] },
  };
}

export const businessSchema = {
  "@context": "https://schema.org", "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  name: "Cubeon Solutions", legalName: "Cubeon Solutions UG (haftungsbeschränkt)",
  url: `${BASE_URL}/`, email: "kontakt@cubeon-solutions.de",
  address: { "@type": "PostalAddress", streetAddress: "Hupfeldstr. 6", addressLocality: "Kassel", postalCode: "34121", addressCountry: "DE" },
  description: "Cubeon Solutions aus Kassel entwickelt individuelle Software und Apps für Android, iOS und Desktop für kleine und mittlere Unternehmen in ganz Deutschland. Das Team berät zu Softwareprojekten und bietet bei Bedarf Server-Software, Hosting, Wartung und KI-Integration.",
  areaServed: { "@type": "Country", name: "Deutschland" }, knowsLanguage: [
    "de",
    "en"
  ],
  logo: `${BASE_URL}/images/cubeon_favicon_blue_1024.png`, image: `${BASE_URL}${SOCIAL_IMAGE}`,
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: "Softwareentwicklung, Apps und Beratung",
    itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: serviceSchema(service) })),
  },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${BASE_URL}${item.path}` })),
  };
}
