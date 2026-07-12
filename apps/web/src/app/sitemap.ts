import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@amiom/constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amiom.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = SERVICE_SLUGS.map((slug) => ({
    path: `/services/${slug}`,
    priority: 0.8 as const,
    changeFrequency: "monthly" as const,
  }));

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    ...serviceRoutes,
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
