import HomeContent from "@/components/HomeContent";
import { homeMetadata } from "@/lib/metadata";
import { webPageLd } from "@/lib/jsonld";
import { dict } from "@/lib/i18n";

export const metadata = homeMetadata("en");

export default function Home() {
  const d = dict("en");
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageLd("en", "/", d.meta.home.title, d.meta.home.description),
          ),
        }}
      />
      <HomeContent locale="en" />
    </>
  );
}
