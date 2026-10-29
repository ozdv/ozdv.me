import { SITE_URL } from "@/lib/constants";
import type { MetadataRoute } from "next";

const ROUTES = ["", "/projects", "/experience", "/contact", "/icatholic"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...ROUTES.map((route) => ({
      url: `${SITE_URL}${route}`,
      priority: route === "" ? 1 : 0.8,
    })),
    { url: `${SITE_URL}/privacy`, priority: 0.3 },
  ];
}
