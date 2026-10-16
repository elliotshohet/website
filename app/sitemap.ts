import type { MetadataRoute } from "next";
import { allProjects } from "../lib/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://elliotshohet.com", changeFrequency: "monthly", priority: 1 },
    { url: "https://elliotshohet.com/contact", changeFrequency: "monthly", priority: 0.7 },
    ...allProjects.map(project => ({ url: `https://elliotshohet.com/work/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
