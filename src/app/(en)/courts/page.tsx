import type { Metadata } from "next";
import CourtsContent from "@/components/CourtsContent";
import { listCourts } from "@/data/courts";
import { pageMetadata } from "@/lib/metadata";
import {
  breadcrumbLd,
  faqPageLd,
  itemListLd,
  webPageLd,
} from "@/lib/jsonld";
import { dict } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

const locale = "en" as const;
const d = dict(locale);

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/courts",
  title: d.meta.courts.title,
  description: d.meta.courts.description,
  keywords: [
    "padel courts Bangkok",
    "best padel courts Bangkok",
    "padel court ranking Bangkok",
    "where to play padel Bangkok",
    "padel club Bangkok",
    "Bangkok padel 2026",
  ],
});

const FAQ = [
  {
    question: "What is the best padel court in Bangkok?",
    answer:
      "The Bangkok Padel Community currently ranks Pad Thai Padel (Sukhumvit) and Bangkok Padel (Ambassador Hotel rooftop) at the top for central Bangkok, and Kross Padel On Nut and The Padel Co. for east Bangkok. The right club for you depends on commute, court surface and whether you want indoor, rooftop or covered outdoor courts.",
  },
  {
    question: "How many padel courts are there in Bangkok?",
    answer:
      "Bangkok has more than two dozen dedicated padel venues across Sukhumvit, Sathorn, On Nut, Ratchada, Pratunam and Bang Na — with single venues offering between two and seven courts each. New clubs are still opening throughout 2025 and 2026.",
  },
  {
    question: "How much does a padel court cost per hour in Bangkok?",
    answer:
      "Court rental in Bangkok ranges from around 800 THB per hour off-peak at clubs like Playerbox up to around 2,000 THB per hour at premium primetime slots. The total cost is divided across up to four players, so a typical doubles game costs 200 to 500 THB per person.",
  },
  {
    question: "Which Bangkok padel court has the best beginner programming?",
    answer:
      "No Drama Padel and Baan Padel are known for strong beginner-friendly coaching pipelines and weekly mixed Americanos. Pad Thai Padel and Bangkok Padel also run regular mixed-level social formats that welcome new players.",
  },
];

export default function CourtsPage() {
  const path = "/courts";
  const courts = listCourts();

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageLd(locale, path, d.meta.courts.title, d.meta.courts.description),
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
              { name: d.nav.courts, path },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListLd({
              pathname: path,
              name: d.meta.courts.title,
              description: d.meta.courts.description,
              items: courts.map((c) => ({
                name: c.name,
                url: `${SITE_URL}${path}#${c.id}`,
                description: c.pitch[locale],
              })),
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageLd(FAQ)),
        }}
      />
      <CourtsContent locale={locale} />
    </>
  );
}
