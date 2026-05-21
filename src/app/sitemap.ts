import type { MetadataRoute } from "next";
import { appsData } from "@/lib/data/apps";

const BASE_URL = "https://www.cubeon-solutions.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const LAUNCH_DATE = new Date("2026-05-21");

  const appPages = appsData.map((app) => ({
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
