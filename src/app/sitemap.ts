import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { pillars } from "@/content/pillars";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/services", "/ai-governance", "/factory-brain", "/outcomes", "/about", "/contact", ...pillars.map((p) => `/${p.slug}`)];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r.includes("-ai") ? 0.9 : 0.7,
  }));
}
