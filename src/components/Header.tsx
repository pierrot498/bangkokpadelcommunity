import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { dict } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/site";

export default function Header({ locale }: { locale: Locale }) {
  const d = dict(locale);
  const nav = [
    { href: localePath(locale, "/"), label: d.nav.home },
    { href: localePath(locale, "/blog"), label: d.nav.blog },
    { href: localePath(locale, "/coaching"), label: d.nav.coaching },
  ];

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/5 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href={localePath(locale, "/")}
          className="group inline-flex items-center gap-2 text-sm font-bold tracking-tight text-white"
        >
          <span
            aria-hidden="true"
            className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] transition group-hover:scale-125"
          />
          <span className="hidden sm:inline">Bangkok Padel Community</span>
          <span className="sm:hidden">BPC</span>
        </Link>

        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-1 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageSwitcher current={locale} />
      </div>
      <nav aria-label="Primary mobile" className="sm:hidden">
        <ul className="flex items-center justify-center gap-1 border-t border-white/5 px-4 pb-2 pt-2 text-xs">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3 py-1.5 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
