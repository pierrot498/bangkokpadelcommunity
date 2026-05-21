import Link from "next/link";
import { dict } from "@/lib/i18n";
import { FACEBOOK_URL, localePath, type Locale } from "@/lib/site";
import {
  loadTournaments,
  tournamentsByMonth,
  type PlaytomicTournament,
} from "@/data/tournaments";

function formatDateTime(iso: string, locale: Locale): string {
  const d = new Date(iso);
  const fmt = new Intl.DateTimeFormat(locale === "th" ? "th-TH" : "en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: locale === "en",
    timeZone: "Asia/Bangkok",
  });
  return fmt.format(d);
}

function formatUpdated(iso: string, locale: Locale): string {
  const d = new Date(iso);
  const fmt = new Intl.DateTimeFormat(locale === "th" ? "th-TH" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Bangkok",
  });
  return fmt.format(d);
}

function typeBadge(type: string | null): string {
  if (!type) return "Event";
  if (type === "AMERICAN") return "Americano";
  if (type === "MEXICAN" || type === "MEXICANO") return "Mexicano";
  return type
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function genderLabel(gender: string | null, locale: Locale): string {
  if (!gender) return "—";
  const map: Record<string, { en: string; th: string }> = {
    MIXED: { en: "Mixed", th: "ผสม" },
    MALE: { en: "Men", th: "ชาย" },
    FEMALE: { en: "Women", th: "หญิง" },
  };
  return map[gender]?.[locale] ?? gender;
}

function TournamentCard({
  t,
  locale,
}: {
  t: PlaytomicTournament;
  locale: Locale;
}) {
  const d = dict(locale);
  const tr = d.tournaments;
  const open = t.availablePlaces ?? 0;
  const total = t.maxPlayers ?? 0;
  const isSoldOut = open === 0 && total > 0;

  return (
    <li className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-[var(--accent)]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[var(--accent)]">
              {typeBadge(t.type)}
            </span>
            {t.gender ? (
              <span className="text-[10px] uppercase tracking-widest text-white/55">
                {genderLabel(t.gender, locale)}
              </span>
            ) : null}
          </div>
          <h3 className="mt-2 text-base font-extrabold tracking-tight sm:text-lg">
            {t.name}
          </h3>
          {t.tenant.name ? (
            <p className="mt-1 text-sm text-white/80">{t.tenant.name}</p>
          ) : null}
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-white">
            {formatDateTime(t.startDate, locale)}
          </p>
          {t.price ? (
            <p className="mt-0.5 text-xs uppercase tracking-widest text-white/55">
              {t.price}
            </p>
          ) : null}
        </div>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-xs sm:grid-cols-3">
        {t.level && t.level !== "0.00 - 7.00" ? (
          <div>
            <dt className="uppercase tracking-wider text-white/55">
              {dict(locale).tournaments.levelLabel}
            </dt>
            <dd className="mt-0.5 text-white/85">{t.level}</dd>
          </div>
        ) : null}
        {total > 0 ? (
          <div>
            <dt className="uppercase tracking-wider text-white/55">Spots</dt>
            <dd
              className={`mt-0.5 ${isSoldOut ? "text-white/60" : "text-white/85"}`}
            >
              {isSoldOut ? tr.soldOut : tr.spotsLabel(open, total)}
            </dd>
          </div>
        ) : null}
        {t.tenant.street ? (
          <div className="col-span-2 sm:col-span-1">
            <dt className="uppercase tracking-wider text-white/55">Address</dt>
            <dd className="mt-0.5 truncate text-white/70" title={t.tenant.street}>
              {t.tenant.street}
            </dd>
          </div>
        ) : null}
      </dl>

      {t.playtomicUrl ? (
        <a
          href={t.playtomicUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[var(--accent)] hover:underline"
        >
          {tr.registerCta}
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
  );
}

export default function TournamentsContent({ locale }: { locale: Locale }) {
  const d = dict(locale);
  const tr = d.tournaments;
  const snapshot = loadTournaments();
  const months = tournamentsByMonth(snapshot.tournaments, locale);
  const isEmpty = snapshot.tournaments.length === 0;

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <header className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
          {tr.eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">
          {tr.h1}
        </h1>
        <p className="mt-4 text-base text-white/80 sm:text-lg">{tr.lead}</p>
        <p className="mt-3 text-xs text-white/55">
          {tr.updatedLabel}: {formatUpdated(snapshot.scrapedAt, locale)}
          {" · "}
          {tr.timezoneNote}
        </p>
      </header>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/75 sm:p-6">
        {tr.sourceNote}
      </div>

      {isEmpty ? (
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="text-xl font-extrabold tracking-tight">
            {tr.emptyTitle}
          </h2>
          <p className="mt-3 text-sm text-white/75">{tr.emptyBody}</p>
        </div>
      ) : (
        <div className="mt-10 space-y-10">
          {months.map((month) => (
            <div key={month.key}>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-white/65">
                {tr.monthHeading(month.label, month.items.length)}
              </h2>
              <ol className="mt-4 space-y-4" aria-label={month.label}>
                {month.items.map((t) => (
                  <TournamentCard key={t.id} t={t} locale={locale} />
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 rounded-3xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-6 text-center backdrop-blur-md sm:p-8">
        <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
          {tr.ctaTitle}
        </h2>
        <p className="mt-2 text-sm text-white/75 sm:text-base">{tr.ctaBody}</p>
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--accent-soft)]"
        >
          {tr.ctaButton}
        </a>
      </div>

      <p className="mt-10 text-center text-sm text-white/65">
        {d.courts.relatedLead}{" "}
        <Link
          href={localePath(locale, "/courts")}
          className="text-[var(--accent)] hover:underline"
        >
          {d.nav.courts}
        </Link>
        {" · "}
        <Link
          href={localePath(locale, "/blog/americano-vs-mexicano-padel-bangkok")}
          className="text-[var(--accent)] hover:underline"
        >
          Americano vs Mexicano
        </Link>
        {" · "}
        <Link
          href={localePath(locale, "/blog/fip-tour-thailand-2026-guide")}
          className="text-[var(--accent)] hover:underline"
        >
          FIP Tour Thailand
        </Link>
      </p>
    </section>
  );
}
