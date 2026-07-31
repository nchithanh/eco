import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsDetailView } from "@/components/NewsDetailView";
import { getNewsDetail, NEWS_SLUGS, isNewsSlug } from "@/lib/news-details";
import { buildPageMetadata, OG_IMAGE_PATH, SEO_LOCALE } from "@/lib/seo";

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
  const base = buildPageMetadata({
    title: article.title,
    description: article.excerpt,
    path,
    image: article.image || OG_IMAGE_PATH,
    type: "article",
  });

  return {
    ...base,
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

  return <NewsDetailView slug={slug} />;
}
