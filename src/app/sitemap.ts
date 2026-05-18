import type { MetadataRoute } from "next";
import { listPosts } from "@/data/posts";
import { SITE_URL } from "@/lib/site";

function entry(
  pathEn: string,
  pathTh: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
  lastModified?: Date,
): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${pathEn}`,
    lastModified: lastModified ?? new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        "en-US": `${SITE_URL}${pathEn}`,
        "th-TH": `${SITE_URL}${pathTh}`,
        "x-default": `${SITE_URL}${pathEn}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = listPosts();
  return [
    entry("/", "/th", "weekly", 1),
    entry("/blog", "/th/blog", "weekly", 0.9),
    entry("/coaching", "/th/coaching", "monthly", 0.8),
    ...posts.map((p) =>
      entry(
        `/blog/${p.slug}`,
        `/th/blog/${p.slug}`,
        "monthly",
        0.7,
        new Date(p.date),
      ),
    ),
  ];
}
