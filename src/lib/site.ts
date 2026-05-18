/**
 * Resolution order:
 * 1. NEXT_PUBLIC_SITE_URL — set this in your hosting env to pin the canonical URL
 *    (e.g. https://bangkokpadelcommunity.com or https://padel-17la.vercel.app).
 * 2. VERCEL_PROJECT_PRODUCTION_URL — Vercel-set host for the production deployment.
 * 3. VERCEL_URL — current deployment URL (preview / production).
 * 4. Hardcoded production fallback.
 *
 * This keeps the sitemap and canonical URLs aligned with the host Google
 * Search Console is verifying — otherwise GSC rejects the sitemap because
 * its URLs sit outside the verified property.
 */
function resolveSiteUrl(): string {
  const fromPublic = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromPublic) return fromPublic.replace(/\/$/, "");
  const fromVercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (fromVercelProd) return `https://${fromVercelProd.replace(/\/$/, "")}`;
  const fromVercel = process.env.VERCEL_URL;
  if (fromVercel) return `https://${fromVercel.replace(/\/$/, "")}`;
  return "https://bangkokpadelcommunity.com";
}

export const SITE_URL = resolveSiteUrl();
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
