import type { Metadata } from "next";
import CoachingContent from "@/components/CoachingContent";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbLd, webPageLd } from "@/lib/jsonld";
import { dict } from "@/lib/i18n";

const locale = "en" as const;
const d = dict(locale);

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/coaching",
  title: d.meta.coaching.title,
  description: d.meta.coaching.description,
  keywords: [
    "padel coaching Bangkok",
    "padel lessons Bangkok",
    "padel coach Bangkok",
    "padel academy Bangkok",
  ],
});

export default function CoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageLd(locale, "/coaching", d.meta.coaching.title, d.meta.coaching.description),
          ),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: d.nav.home, path: "/" },
              { name: d.nav.coaching, path: "/coaching" },
            ]),
          ),
        }}
      />
      <CoachingContent locale={locale} />
    </>
  );
}
