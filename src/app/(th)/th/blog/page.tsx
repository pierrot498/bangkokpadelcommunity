import type { Metadata } from "next";
import BlogIndexContent from "@/components/BlogIndexContent";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbLd, webPageLd } from "@/lib/jsonld";
import { dict } from "@/lib/i18n";

const locale = "th" as const;
const d = dict(locale);

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/blog",
  title: d.meta.blog.title,
  description: d.meta.blog.description,
});

export default function ThBlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageLd(locale, "/th/blog", d.meta.blog.title, d.meta.blog.description),
          ),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: d.nav.home, path: "/th" },
              { name: d.nav.blog, path: "/th/blog" },
            ]),
          ),
        }}
      />
      <BlogIndexContent locale={locale} />
    </>
  );
}
