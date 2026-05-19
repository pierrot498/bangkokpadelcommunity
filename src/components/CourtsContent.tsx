import Link from "next/link";
import { dict } from "@/lib/i18n";
import { FACEBOOK_URL, localePath, type Locale } from "@/lib/site";
import { listCourts } from "@/data/courts";

export default function CourtsContent({ locale }: { locale: Locale }) {
  const d = dict(locale);
  const c = d.courts;
  const courts = listCourts();

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <header className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
          {c.eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">
          {c.h1}
        </h1>
        <p className="mt-4 text-base text-white/80 sm:text-lg">{c.lead}</p>
      </header>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/75 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/55">
          {c.methodologyTitle}
        </p>
        <p className="mt-2">{c.methodology}</p>
      </div>

      <ol className="mt-12 space-y-6" aria-label={c.h1}>
        {courts.map((court, index) => (
          <li
            key={court.id}
            id={court.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-extrabold text-black"
              >
                {index + 1}
              </span>
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                {court.name}
              </h2>
              <span className="text-xs text-white/55">{court.area[locale]}</span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
              {court.pitch[locale]}
            </p>

            <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
              {court.transit[locale] && court.transit[locale] !== "—" ? (
                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/55">
                    {c.transit}
                  </dt>
                  <dd className="mt-0.5 text-white/85">{court.transit[locale]}</dd>
                </div>
              ) : null}
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/55">
                  {c.courts}
                </dt>
                <dd className="mt-0.5 text-white/85">{court.courts[locale]}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/55">
                  {c.price}
                </dt>
                <dd className="mt-0.5 text-white/85">{court.price[locale]}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/55">
                  {c.booking}
                </dt>
                <dd className="mt-0.5 text-white/85">{court.booking[locale]}</dd>
              </div>
            </dl>

            {court.website ? (
              <a
                href={court.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[var(--accent)] hover:underline"
              >
                {c.visitWebsite}
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-3xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-6 text-center backdrop-blur-md sm:p-8">
        <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
          {c.ctaTitle}
        </h2>
        <p className="mt-2 text-sm text-white/75 sm:text-base">{c.ctaBody}</p>
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--accent-soft)]"
        >
          {c.ctaButton}
        </a>
      </div>

      <p className="mt-10 text-center text-sm text-white/65">
        {c.relatedLead}{" "}
        <Link
          href={localePath(locale, "/blog/play-padel-bangkok")}
          className="text-[var(--accent)] hover:underline"
        >
          {c.relatedPlay}
        </Link>
        {" · "}
        <Link
          href={localePath(locale, "/blog/best-padel-clubs-bangkok")}
          className="text-[var(--accent)] hover:underline"
        >
          {c.relatedClubs}
        </Link>
        {" · "}
        <Link
          href={localePath(locale, "/coaching")}
          className="text-[var(--accent)] hover:underline"
        >
          {c.relatedCoaching}
        </Link>
      </p>
    </section>
  );
}
