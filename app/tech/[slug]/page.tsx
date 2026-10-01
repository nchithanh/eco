import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { TechDetailView } from "@/components/TechDetailView";
import { getTechDetail, TECH_SLUGS, isTechSlug } from "@/lib/tech-stack";
import {
  breadcrumbListJsonLd,
  buildPageMetadata,
  SEO_LOCALE,
  webPageJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return TECH_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isTechSlug(slug)) {
    return { title: "Tech" };
  }
  const detail = getTechDetail(SEO_LOCALE, slug);
  return buildPageMetadata({
    title: detail.name,
    description: detail.intro || detail.tagline,
    path: `/tech/${slug}/`,
  });
}

export default async function TechPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isTechSlug(slug)) {
    notFound();
  }

  const detail = getTechDetail(SEO_LOCALE, slug);
  const path = `/tech/${slug}/`;
  const description = detail.intro || detail.tagline;

  return (
    <>
      <JsonLd
        id={`tech-${slug}-jsonld`}
        data={[
          webPageJsonLd({
            name: detail.name,
            description,
            path,
          }),
          breadcrumbListJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: "Công nghệ", path: "/#stack" },
            { name: detail.name, path },
          ]),
        ]}
      />
      <TechDetailView slug={slug} />
    </>
  );
}
