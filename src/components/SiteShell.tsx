import Header from "./Header";
import Footer from "./Footer";
import FacebookPopup from "./FacebookPopup";
import { dict } from "@/lib/i18n";
import { FACEBOOK_URL, type Locale } from "@/lib/site";

export default function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const d = dict(locale);
  return (
    <>
      <FacebookPopup
        href={FACEBOOK_URL}
        title={d.popup.title}
        body={d.popup.body}
        primary={d.popup.primary}
        secondary={d.popup.secondary}
      />
      <Header locale={locale} />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
