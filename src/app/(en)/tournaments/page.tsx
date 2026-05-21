import type { Metadata } from "next";
import TournamentsContent from "@/components/TournamentsContent";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbLd, webPageLd } from "@/lib/jsonld";
import { dict } from "@/lib/i18n";

const locale = "en" as const;
const d = dict(locale);

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/tournaments",
  title: d.meta.tournaments.title,
  description: d.meta.tournaments.description,
  keywords: [
    "padel tournaments Bangkok",
    "Bangkok Americano padel",
    "Bangkok Mexicano padel",
    "Playtomic Bangkok tournaments",
    "padel events Thailand",
    "Bangkok padel calendar 2026",
    "No Drama Padel tournament",
    "Baan Padel Mexicano",
  ],
});

export default function TournamentsPage() {
  const path = "/tournaments";

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
              { name: d.nav.home, path: "/" },
              { name: d.nav.tournaments, path },
            ]),
          ),
        }}
      />
      <TournamentsContent locale={locale} />
    </>
  );
}
