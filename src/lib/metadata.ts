import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import {
  SITE_NAME,
  SITE_URL,
  localePath,
  type Locale,
} from "./site";
import { dict } from "./i18n";

export const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const baseViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#06080a" },
    { media: "(prefers-color-scheme: light)", color: "#06080a" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

type PageMetaArgs = {
  locale: Locale;
  /** Path within the locale, e.g. "/" or "/blog" or "/blog/foo". No locale prefix. */
  path?: string;
  title: string;
  description: string;
  image?: { url: string; width?: number; height?: number; alt?: string };
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
};

export function pageMetadata(args: PageMetaArgs): Metadata {
  const { locale, path = "/", title, description, type = "website" } = args;
  const enUrl = `${SITE_URL}${localePath("en", path)}`;
  const thUrl = `${SITE_URL}${localePath("th", path)}`;
  const canonical = locale === "en" ? enUrl : thUrl;

  const img = args.image ?? {
    url: "/bg.jpg",
    width: 1672,
    height: 941,
    alt: SITE_NAME,
  };

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: args.keywords,
    category: "sports",
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical,
      languages: {
        "en-US": enUrl,
        "th-TH": thUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      type,
      locale: locale === "en" ? "en_US" : "th_TH",
      alternateLocale: locale === "en" ? "th_TH" : "en_US",
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      publishedTime: args.publishedTime,
      modifiedTime: args.modifiedTime,
      images: [
        {
          url: img.url,
          width: img.width,
          height: img.height,
          alt: img.alt ?? SITE_NAME,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
    manifest: "/manifest.webmanifest",
    formatDetection: { email: false, address: false, telephone: false },
  };
}

export function homeMetadata(locale: Locale): Metadata {
  const d = dict(locale);
  return pageMetadata({
    locale,
    path: "/",
    title: d.meta.home.title,
    description: d.meta.home.description,
    keywords:
      locale === "en"
        ? [
            "padel",
            "Bangkok",
            "padel Bangkok",
            "Bangkok padel community",
            "padel Thailand",
            "padel club Bangkok",
            "padel courts Bangkok",
            "padel players Bangkok",
            "padel tournaments Bangkok",
            "where to play padel in Bangkok",
          ]
        : [
            "พาเดิล",
            "กรุงเทพ",
            "พาเดิล กรุงเทพ",
            "คอมมูนิตี้พาเดิล กรุงเทพ",
            "พาเดิล ประเทศไทย",
            "คลับพาเดิล กรุงเทพ",
            "คอร์ทพาเดิล กรุงเทพ",
            "ทัวร์นาเมนต์พาเดิล กรุงเทพ",
          ],
  });
}
