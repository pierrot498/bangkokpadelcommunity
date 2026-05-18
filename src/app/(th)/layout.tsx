import type { Metadata } from "next";
import "../globals.css";
import SiteShell from "@/components/SiteShell";
import { baseViewport, geist, homeMetadata } from "@/lib/metadata";
import { siteGraph } from "@/lib/jsonld";

export const viewport = baseViewport;
export const metadata: Metadata = homeMetadata("th");

export default function ThRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${geist.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://web.facebook.com" />
        <link rel="dns-prefetch" href="https://web.facebook.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph("th")) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteShell locale="th">{children}</SiteShell>
      </body>
    </html>
  );
}
