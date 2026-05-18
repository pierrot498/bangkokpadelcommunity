import Link from "next/link";
import { listPosts } from "@/data/posts";
import { dict } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/site";

export default function BlogIndexContent({ locale }: { locale: Locale }) {
  const d = dict(locale);
  const posts = listPosts();

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
          {d.nav.blog}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {d.blog.title}
        </h1>
        <p className="mt-3 max-w-xl text-white/70">{d.blog.description}</p>
      </header>

      <ul className="flex flex-col gap-5">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={localePath(locale, `/blog/${post.slug}`)}
              className="group block rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:bg-white/10"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/55">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(
                    locale === "th" ? "th-TH" : "en-US",
                    { year: "numeric", month: "long", day: "numeric" },
                  )}
                </time>
                <span aria-hidden="true">·</span>
                <span>{d.blog.minRead(post.readMinutes)}</span>
              </div>
              <h2 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl">
                {post.title[locale]}
              </h2>
              <p className="mt-2 text-sm text-white/70 sm:text-base">
                {post.excerpt[locale]}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)] transition group-hover:gap-2">
                {d.blog.readMore}
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
