import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://bangkokpadelcommunity.com";
const SITE_NAME = "Bangkok Padel Community";
const DESCRIPTION =
  "Bangkok's #1 padel community. Find players, courts, tournaments and events. Join the largest padel network in Bangkok on Facebook and Instagram.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — #1 Padel Community in Bangkok`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "padel",
    "Bangkok",
    "padel Bangkok",
    "Bangkok padel community",
    "padel Thailand",
    "padel club Bangkok",
    "padel courts Bangkok",
    "padel players Bangkok",
    "padel tournaments Bangkok",
    "padel events Bangkok",
    "where to play padel in Bangkok",
  ],
  category: "sports",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
    languages: { "en-US": "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — #1 Padel Community in Bangkok`,
    description: DESCRIPTION,
    images: [
      {
        url: "/bg.jpg",
        width: 1672,
        height: 941,
        alt: `${SITE_NAME} — padel players in Bangkok, Thailand`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — #1 Padel Community in Bangkok`,
    description: DESCRIPTION,
    images: ["/bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#06080a" },
    { media: "(prefers-color-scheme: light)", color: "#06080a" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

const sportsClubLd = {
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
  sameAs: [
    "https://web.facebook.com/groups/bangkok.padel.community",
    "https://www.instagram.com/bangkokpadelcommunity/",
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: DESCRIPTION,
  inLanguage: "en-US",
  publisher: { "@id": `${SITE_URL}/#sportsclub` },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/bg.jpg`,
  sameAs: [
    "https://web.facebook.com/groups/bangkok.padel.community",
    "https://www.instagram.com/bangkokpadelcommunity/",
  ],
};

const webPageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: `${SITE_NAME} — #1 Padel Community in Bangkok`,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#sportsclub` },
  description: DESCRIPTION,
  inLanguage: "en-US",
  primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/bg.jpg` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
};

const graphLd = {
  "@context": "https://schema.org",
  "@graph": [sportsClubLd, organizationLd, websiteLd, webPageLd, breadcrumbLd],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://web.facebook.com" />
        <link rel="dns-prefetch" href="https://web.facebook.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graphLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
