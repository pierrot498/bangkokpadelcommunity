# Padel accessories + Thailand tournaments — 4 SEO blog posts

**Date:** 2026-05-20
**Status:** Approved, implementing

## Goal

Add 4 bilingual (EN + TH) blog posts to `src/data/posts.ts` that target padel accessory and Thailand tournament queries with mid-to-low Google competition. Grounded in real 2026 data — confirmed THB pricing and confirmed Cupra FIP Tour events held in Thailand.

## Posts

| # | Slug | Date | Type | Primary keyword |
|---|------|------|------|-----------------|
| 1 | `padel-overgrip-bangkok-humidity-guide` | 2026-05-23 | Accessory | "padel overgrip humid weather" / "padel grip Thailand" |
| 2 | `padel-balls-thailand-price-guide` | 2026-05-22 | Accessory | "padel balls Bangkok price" / "Head Pro S Thailand" |
| 3 | `fip-tour-thailand-2026-guide` | 2026-05-21 | Tournament | "FIP Tour Thailand 2026" / "Cupra FIP Samui Phangan" |
| 4 | `americano-vs-mexicano-padel-bangkok` | 2026-05-20 | Tournament | "americano padel rules" / "mexicano padel format" |

Dates chosen so the new posts appear at the top of the blog index (newest first).

## Per-post structure

Each post matches the existing schema in `src/data/posts.ts`:

- `slug`, `date`, `readMinutes` (6–8)
- `title.{en,th}` — front-loads primary keyword + 2026
- `excerpt.{en,th}` — 1–2 sentences, search-snippet length
- `keywords.{en,th}` — 6–8 keywords each
- `body.{en,th}` — Markdown, 1,200–2,000 words, H2/H3 hierarchy, ≥1 comparison table, internal links to ≥2 existing posts, CTA to Facebook group
- `faq.{en,th}` — **6 Q&As each** (matches `play-padel-bangkok` standard, enables FAQPage rich result)

## Content sources & honest disclaimers

- Overgrip 3-pack pricing: 4ON Premium 427 THB at Padel Racket Thailand (verified)
- Padel balls: Head Padel Pro S+ 300 THB at No Drama Padel (verified)
- FIP Bronze Samui (May 6–10 2026) and Phangan (May 14–17 2026) confirmed on padelfip.com
- Premier Padel 2026: **no Thai stop** — explicitly stated in post 3
- TPS 2026 referenced but months 5–8 flagged as tentative
- "As of mid-2026" qualifier on all price claims

## Internal linking

- Post 1 (overgrip) → racket guide + shoes post
- Post 2 (balls) → clubs + courts ranking
- Post 3 (FIP Tour) → clubs + season guide
- Post 4 (Americano/Mexicano) → play-padel-bangkok + clubs

EN posts link to `/blog/<slug>`; TH posts link to `/th/blog/<slug>`.

## Out of scope

- New components or routes
- Tournament listing widget on home page
- New images (existing OG/social card system handles this automatically via `pageMetadata`)
- Spanish or other locales

## Verification

After implementation:
1. `npm run lint` — no errors
2. `npm run build` — sitemap, JSON-LD, generateStaticParams all succeed for new slugs
3. Manual smoke: each new slug should appear in `listPosts()` output, both `/blog/<slug>` and `/th/blog/<slug>` should be static-generated.
