import type { Metadata } from "next";
import CoachingContent from "@/components/CoachingContent";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbLd, webPageLd } from "@/lib/jsonld";
import { dict } from "@/lib/i18n";

const locale = "th" as const;
const d = dict(locale);

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/coaching",
  title: d.meta.coaching.title,
  description: d.meta.coaching.description,
  keywords: [
    "เรียนพาเดิล กรุงเทพ",
    "โค้ชพาเดิล กรุงเทพ",
    "อะคาเดมีพาเดิล กรุงเทพ",
  ],
});

export default function ThCoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageLd(locale, "/th/coaching", d.meta.coaching.title, d.meta.coaching.description),
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
              { name: d.nav.coaching, path: "/th/coaching" },
            ]),
          ),
        }}
      />
      <CoachingContent locale={locale} />
    </>
  );
}
