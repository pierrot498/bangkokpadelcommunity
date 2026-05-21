import type { MetadataRoute } from "next";
import { listPosts } from "@/data/posts";
import { SITE_URL } from "@/lib/site";

/**
 * Emit BOTH the English and Thai URL as separate <url> entries, each one
 * annotating the full set of hreflang alternates (en-US, th-TH, x-default).
 * This is Google's recommended pattern for non-English locales — it indexes
 * the Thai pages more reliably than listing only the EN URL with TH as a
 * nested alternate.
 */
function pair(
  pathEn: string,
  pathTh: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
  lastModified?: Date,
): MetadataRoute.Sitemap {
  const languages = {
    "en-US": `${SITE_URL}${pathEn}`,
    "th-TH": `${SITE_URL}${pathTh}`,
    "x-default": `${SITE_URL}${pathEn}`,
  };
  const lastMod = lastModified ?? new Date();
  return [
    {
      url: `${SITE_URL}${pathEn}`,
      lastModified: lastMod,
      changeFrequency,
      priority,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}${pathTh}`,
      lastModified: lastMod,
      changeFrequency,
      priority,
      alternates: { languages },
    },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = listPosts();
  return [
    ...pair("/", "/th", "weekly", 1),
    ...pair("/courts", "/th/courts", "weekly", 0.9),
    ...pair("/tournaments", "/th/tournaments", "daily", 0.9),
    ...pair("/blog", "/th/blog", "weekly", 0.9),
    ...pair("/coaching", "/th/coaching", "monthly", 0.8),
    ...posts.flatMap((p) =>
      pair(
        `/blog/${p.slug}`,
        `/th/blog/${p.slug}`,
        "monthly",
        0.7,
        new Date(p.date),
      ),
    ),
  ];
}
