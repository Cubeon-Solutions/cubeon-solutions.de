import type { MetadataRoute } from "next";
import { appsData } from "@/lib/data/apps";

const BASE_URL = "https://www.cubeon-solutions.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const appPages = appsData.map((app) => ({
    url: `${BASE_URL}/apps/${app.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...appPages,
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
