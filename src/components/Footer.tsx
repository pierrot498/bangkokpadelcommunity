import Link from "next/link";
import { dict } from "@/lib/i18n";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  localePath,
  type Locale,
} from "@/lib/site";

export default function Footer({ locale }: { locale: Locale }) {
  const d = dict(locale);
  return (
    <footer className="mt-auto border-t border-white/5 bg-black/40 py-8 text-xs text-white/55">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} Bangkok Padel Community · {d.home.footer}
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <Link
              href={localePath(locale, "/blog")}
              className="transition hover:text-white"
            >
              {d.nav.blog}
            </Link>
          </li>
          <li>
            <Link
              href={localePath(locale, "/coaching")}
              className="transition hover:text-white"
            >
              {d.nav.coaching}
            </Link>
          </li>
          <li>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
