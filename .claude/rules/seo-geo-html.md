---
description: SEO/GEO — semantic HTML, headings, alt text, landmarks; always on for public UI and pages.
---

# SEO / GEO — HTML semantics

Code that renders **public pages** must help crawlers and answer engines read structure, not only copy. Pair with skill **seo**, `lib/seo.ts`, and `content-seo` for keywords.

## Headings

- **One `<h1>` per page** (detail page title or list page title).
- **No skipped levels** on a page: `h1` → `h2` → `h3` (section → subsection → card title).
- Homepage sections: section title = **`h2`**; cards/teasers inside = **`h3`** (not `<p>` styled as title).
- News/article detail: **`h1`** = article title; body blocks use `h2` / `h3` from copy structure.

## Landmarks & sections

- Major blocks: `<section>` with stable `id` (anchor/IA) and **`aria-labelledby`** → id on visible heading.
- Breadcrumb: `<nav aria-label="Breadcrumb">`.
- Carousels: wrapper `role="region"` + `aria-roledescription="carousel"` + concise `aria-label`; dots `role="tablist"` / `role="tab"` + `aria-selected`.

## News & articles

- Teaser/card = **`<article>`** (one post per card).
- Link wraps heading or sits inside article; **link text = title** (no “Xem thêm” alone).
- **`<time datetime="YYYY-MM-DD">`** on visible dates (ISO date).
- Hero/inline **content images**: **`alt` = descriptive** (title or caption from copy); do not leave `alt=""` when the image carries meaning.
- Decorative chrome only (logo glyph, pure ornament): `alt=""` + `aria-hidden` where appropriate.

## Links & media

- Internal routes: real **`<a href>`** (with `assetPath` / `routePath`); avoid click-only divs for navigation.
- Images in JSON-LD / meta / visible hero should describe the same entity (title, excerpt).

## Structured data

- When adding FAQ, article, or service content, keep **JSON-LD in sync** with visible Q/A and headings (`app/**/page.tsx`, `lib/seo.ts`).
- VI meta SoT for crawlers where project already bakes `SEO_LOCALE`.

## Do not

- Multiple `h1` on one page.
- Keyword-stuffed `alt` or invisible text.
- Replace semantic headings with styled `<div>` / `<p>` for SEO.

## Quick check (news UI)

```tsx
// ❌ BAD — no landmark, empty alt, title not a heading
<section id="news">
  <p className="text-3xl font-bold">{title}</p>
  <a href={href}><img alt="" />{item.title}</a>
</section>

// ✅ GOOD
<section id="news" aria-labelledby="home-news-heading">
  <h2 id="home-news-heading">{sectionTitle}</h2>
  <div role="region" aria-roledescription="carousel" aria-label={sectionTitle}>
    <article>
      <a href={href}>
        <img alt={item.title} />
        <h3>{item.title}</h3>
        <time dateTime={item.date}>{dateLabel}</time>
      </a>
    </article>
  </div>
</section>
```
