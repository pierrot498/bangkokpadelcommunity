import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://bangkokpadelcommunity.com/sitemap.xml",
    host: "https://bangkokpadelcommunity.com",
  };
}
