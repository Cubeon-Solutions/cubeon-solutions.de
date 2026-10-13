import type { MetadataRoute } from "next";
import { appsData } from "@/lib/data/apps";
import { services } from "@/lib/data/services";
import { BASE_URL, CONTENT_UPDATED } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(CONTENT_UPDATED);
  return [
    { url: BASE_URL + "/", lastModified: updated },
    ...services.map((service) => ({ url: BASE_URL + service.href, lastModified: updated })),
    { url: BASE_URL + "/apps", lastModified: updated },
    ...appsData.filter((app) => !app.productUrl).map((app) => ({ url: BASE_URL + "/apps/" + app.slug, lastModified: updated })),
    { url: "https://drivey.cubeon-solutions.de", lastModified: updated },
    { url: "https://drivey.cubeon-solutions.de/de", lastModified: updated },
  ];
}
