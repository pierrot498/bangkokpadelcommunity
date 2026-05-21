import type { Metadata } from "next";
import TournamentsContent from "@/components/TournamentsContent";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbLd, webPageLd } from "@/lib/jsonld";
import { dict } from "@/lib/i18n";

const locale = "th" as const;
const d = dict(locale);

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/tournaments",
  title: d.meta.tournaments.title,
  description: d.meta.tournaments.description,
  keywords: [
    "ทัวร์นาเมนต์พาเดิล กรุงเทพ",
    "Americano พาเดิล กรุงเทพ",
    "Mexicano พาเดิล",
    "Playtomic กรุงเทพ",
    "อีเวนต์พาเดิล ไทย",
    "ปฏิทินพาเดิล กรุงเทพ 2026",
  ],
});

export default function ThTournamentsPage() {
  const path = "/th/tournaments";

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageLd(
              locale,
              path,
              d.meta.tournaments.title,
              d.meta.tournaments.description,
            ),
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
              { name: d.nav.tournaments, path },
            ]),
          ),
        }}
      />
      <TournamentsContent locale={locale} />
    </>
  );
}
