import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      // Search access is separate from model-training crawler preferences.
      { userAgent: ["OAI-SearchBot", "PerplexityBot"], allow: "/", disallow: "/api/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
