import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostContent from "@/components/BlogPostContent";
import { listPosts, postBySlug } from "@/data/posts";
import { pageMetadata } from "@/lib/metadata";
import { blogPostingLd, breadcrumbLd } from "@/lib/jsonld";
import { dict } from "@/lib/i18n";

const locale = "en" as const;

export function generateStaticParams() {
  return listPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return pageMetadata({
    locale,
    path: `/blog/${post.slug}`,
    title: post.title[locale],
    description: post.excerpt[locale],
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.date,
    keywords: post.keywords[locale],
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const d = dict(locale);
  const pathname = `/blog/${post.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostingLd({
              locale,
              pathname,
              title: post.title[locale],
              description: post.excerpt[locale],
              datePublished: post.date,
              keywords: post.keywords[locale],
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: d.nav.home, path: "/" },
              { name: d.nav.blog, path: "/blog" },
              { name: post.title[locale], path: pathname },
            ]),
          ),
        }}
      />
      <BlogPostContent locale={locale} post={post} />
    </>
  );
}
