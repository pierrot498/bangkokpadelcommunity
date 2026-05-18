import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  SITE_NAME,
  SITE_URL,
  localeHtmlLang,
  type Locale,
} from "./site";
import { dict } from "./i18n";

const SAME_AS = [FACEBOOK_URL, INSTAGRAM_URL];

export function sportsClubLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    "@id": `${SITE_URL}/#sportsclub`,
    name: SITE_NAME,
    alternateName: "BPC",
    description: "The #1 padel community in Bangkok, Thailand.",
    url: SITE_URL,
    logo: `${SITE_URL}/bg.jpg`,
    image: `${SITE_URL}/bg.jpg`,
    sport: "Padel",
    areaServed: {
      "@type": "City",
      name: "Bangkok",
      containedInPlace: { "@type": "Country", name: "Thailand" },
    },
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangkok",
        addressCountry: "TH",
      },
    },
    sameAs: SAME_AS,
  };
}

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/bg.jpg`,
    sameAs: SAME_AS,
  };
}

export function websiteLd(locale: Locale) {
  const d = dict(locale);
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website-${locale}`,
    url: locale === "en" ? SITE_URL : `${SITE_URL}/th`,
    name: SITE_NAME,
    description: d.meta.home.description,
    inLanguage: localeHtmlLang(locale),
    publisher: { "@id": `${SITE_URL}/#sportsclub` },
  };
}

export function webPageLd(
  locale: Locale,
  pathname: string,
  title: string,
  description: string,
) {
  const url = `${SITE_URL}${pathname}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    isPartOf: { "@id": `${SITE_URL}/#website-${locale}` },
    about: { "@id": `${SITE_URL}/#sportsclub` },
    description,
    inLanguage: localeHtmlLang(locale),
    primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/bg.jpg` },
  };
}

export function breadcrumbLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function blogPostingLd(args: {
  locale: Locale;
  pathname: string;
  title: string;
  description: string;
  datePublished: string;
  image?: string;
  keywords?: string[];
}) {
  const url = `${SITE_URL}${args.pathname}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: args.title,
    description: args.description,
    image: args.image ?? `${SITE_URL}/bg.jpg`,
    datePublished: args.datePublished,
    dateModified: args.datePublished,
    inLanguage: localeHtmlLang(args.locale),
    keywords: args.keywords,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function siteGraph(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      sportsClubLd(),
      organizationLd(),
      websiteLd(locale),
    ],
  };
}
