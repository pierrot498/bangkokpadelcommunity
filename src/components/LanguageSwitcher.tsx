"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import type { Locale } from "@/lib/site";

function swapPath(pathname: string, target: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const hasTh = segments[0] === "th";
  const rest = hasTh ? segments.slice(1) : segments;
  if (target === "th") {
    return "/" + ["th", ...rest].join("/");
  }
  return "/" + rest.join("/");
}

export default function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || "/";
  const otherHref = useMemo(
    () => swapPath(pathname, current === "en" ? "th" : "en"),
    [pathname, current],
  );

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center gap-0.5 rounded-full border border-white/15 bg-black/40 p-0.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-md"
    >
      <LangBtn href={current === "en" ? "#" : swapPath(pathname, "en")} active={current === "en"} label="EN" />
      <LangBtn href={current === "th" ? "#" : swapPath(pathname, "th")} active={current === "th"} label="TH" />
      <span className="sr-only">Other language: {otherHref}</span>
    </div>
  );
}

function LangBtn({
  href,
  active,
  label,
}: {
  href: string;
  active: boolean;
  label: string;
}) {
  if (active) {
    return (
      <span
        aria-current="true"
        className="rounded-full bg-[var(--accent)] px-3 py-1 text-black"
      >
        {label}
      </span>
    );
  }
  return (
    <Link
      href={href}
      hrefLang={label.toLowerCase() === "en" ? "en" : "th"}
      className="rounded-full px-3 py-1 text-white/70 transition hover:text-white"
    >
      {label}
    </Link>
  );
}
