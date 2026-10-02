import type { MetadataRoute } from "next";
import { projects } from "../lib/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://elliotshohet.com", lastModified: "2026-10-02", changeFrequency: "monthly", priority: 1 },
    { url: "https://elliotshohet.com/contact", changeFrequency: "monthly", priority: 0.7 },
    ...projects.map(project => ({ url: `https://elliotshohet.com/work/${project.slug}`, lastModified: "2026-10-02", changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
