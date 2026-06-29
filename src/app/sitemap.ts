import type { MetadataRoute } from "next";
import { appsData } from "@/lib/data/apps";

const BASE_URL = "https://www.cubeon-solutions.de";
const DRIVEY_URL = "https://drivey.cubeon-solutions.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const LAUNCH_DATE = new Date("2026-05-21");
  const DRIVEY_SEO_UPDATE_DATE = new Date("2026-06-29");

  const appPages = appsData
    .filter((app) => !app.productUrl)
    .map((app) => ({
      url: `${BASE_URL}/apps/${app.slug}`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: BASE_URL,
      lastModified: LAUNCH_DATE,
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    ...appPages,
    {
      url: DRIVEY_URL,
      lastModified: DRIVEY_SEO_UPDATE_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${DRIVEY_URL}/de`,
      lastModified: DRIVEY_SEO_UPDATE_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
