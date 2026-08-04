import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { NewsDetailView } from "@/components/NewsDetailView";
import { getNewsDetail, NEWS_SLUGS, isNewsSlug } from "@/lib/news-details";
import {
  articleJsonLd,
  buildPageMetadata,
  faqPageJsonLd,
  OG_IMAGE_PATH,
  SEO_LOCALE,
} from "@/lib/seo";

export function generateStaticParams() {
  return NEWS_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isNewsSlug(slug)) {
    return { title: "News" };
  }

  const article = getNewsDetail(SEO_LOCALE, slug);
  const path = `/news/${slug}/`;
  const metaTitle = article.metaTitle ?? article.title;
  const base = buildPageMetadata({
    title: metaTitle,
    description: article.excerpt,
    path,
    image: article.image || OG_IMAGE_PATH,
    type: "article",
  });

  return {
    ...base,
    title: metaTitle,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isNewsSlug(slug)) {
    notFound();
  }

  const article = getNewsDetail(SEO_LOCALE, slug);
  const path = `/news/${slug}/`;
  const jsonLd = [
    articleJsonLd({
      title: article.metaTitle ?? article.title,
      description: article.excerpt,
      path,
      datePublished: article.date,
      image: article.image,
    }),
    ...(article.faq?.length ? [faqPageJsonLd(article.faq)] : []),
  ];

  return (
    <>
      <JsonLd id={`news-${slug}-jsonld`} data={jsonLd} />
      <NewsDetailView slug={slug} />
    </>
  );
}
