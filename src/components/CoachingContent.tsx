import { dict } from "@/lib/i18n";
import { FACEBOOK_URL, type Locale } from "@/lib/site";

export default function CoachingContent({ locale }: { locale: Locale }) {
  const d = dict(locale);

  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6 sm:py-20">
      <header className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
          {d.nav.coaching}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {d.coaching.title}
        </h1>
        <p className="mt-4 text-lg text-white/80">{d.coaching.lead}</p>
      </header>

      <p className="mt-8 text-base leading-relaxed text-white/75">
        {d.coaching.body}
      </p>

      <div className="mt-10 rounded-3xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-6 text-center backdrop-blur-md sm:p-8">
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-4 text-base font-semibold text-black transition hover:bg-[var(--accent-soft)]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06z" />
          </svg>
          {d.coaching.cta}
        </a>
        <p className="mt-3 text-xs text-white/55">{d.coaching.ctaSub}</p>
      </div>
    </section>
  );
}
