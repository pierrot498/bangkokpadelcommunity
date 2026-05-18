export const SITE_URL = "https://bangkokpadelcommunity.com";
export const SITE_NAME = "Bangkok Padel Community";
export const FACEBOOK_URL =
  "https://web.facebook.com/groups/bangkok.padel.community";
export const INSTAGRAM_URL = "https://www.instagram.com/bangkokpadelcommunity/";

export const LOCALES = ["en", "th"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export function localePath(locale: Locale, path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const normalized = clean === "/" ? "" : clean;
  return locale === "en" ? normalized || "/" : `/th${normalized}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "th" : "en";
}

export function localeHtmlLang(locale: Locale): string {
  return locale === "en" ? "en-US" : "th-TH";
}
