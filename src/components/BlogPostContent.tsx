import Link from "next/link";
import { dict } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/site";
import type { Post } from "@/data/posts";
import { renderMarkdown } from "@/lib/markdown";

export default function BlogPostContent({
  locale,
  post,
}: {
  locale: Locale;
  post: Post;
}) {
  const d = dict(locale);
  const html = renderMarkdown(post.body[locale]);
  const faqItems = post.faq?.[locale];
  const faqHeading = locale === "th" ? "คำถามที่พบบ่อย" : "Frequently asked questions";

  return (
    <article className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6 sm:py-16">
      <Link
        href={localePath(locale, "/blog")}
        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[var(--accent)] hover:underline"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        {d.blog.backToBlog}
      </Link>

      <header className="mt-4">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {post.title[locale]}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/55">
          <time dateTime={post.date}>
            {d.blog.publishedOn}{" "}
            {new Date(post.date).toLocaleDateString(
              locale === "th" ? "th-TH" : "en-US",
              { year: "numeric", month: "long", day: "numeric" },
            )}
          </time>
          <span aria-hidden="true">·</span>
          <span>{d.blog.minRead(post.readMinutes)}</span>
        </div>
      </header>

      <div
        className="prose-bpc mt-8"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {faqItems && faqItems.length > 0 ? (
        <section className="mt-12 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {faqHeading}
          </h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 open:bg-white/10"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-white marker:hidden">
                  <span className="flex items-start justify-between gap-3">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="mt-0.5 text-[var(--accent)] transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
