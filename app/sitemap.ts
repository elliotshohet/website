import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://elliotshohet.com", lastModified: "2026-10-01", changeFrequency: "monthly", priority: 1 }];
}
