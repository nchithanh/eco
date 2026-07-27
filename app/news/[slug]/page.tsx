import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsDetailView } from "@/components/NewsDetailView";
import { assetPath } from "@/lib/asset";
import { getNewsDetail, NEWS_SLUGS, isNewsSlug } from "@/lib/news-details";
import { DEFAULT_LOCALE } from "@/lib/i18n/types";

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

  const article = getNewsDetail(DEFAULT_LOCALE, slug);
  const title = article.title;
  const description = article.excerpt;
  const image = assetPath(article.image);
  const path = `/news/${slug}/`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title,
      description,
      url: path,
      publishedTime: article.date,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
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

  return <NewsDetailView slug={slug} />;
}
