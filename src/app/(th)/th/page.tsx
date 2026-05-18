import HomeContent from "@/components/HomeContent";
import { homeMetadata } from "@/lib/metadata";
import { webPageLd } from "@/lib/jsonld";
import { dict } from "@/lib/i18n";

export const metadata = homeMetadata("th");

export default function ThHome() {
  const d = dict("th");
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageLd("th", "/th", d.meta.home.title, d.meta.home.description),
          ),
        }}
      />
      <HomeContent locale="th" />
    </>
  );
}
