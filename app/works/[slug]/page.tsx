import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { WorkDetailView } from "@/components/WorkDetailView";
import { getWorkDetail, WORK_SLUGS, isWorkSlug } from "@/lib/works-details";
import {
  absoluteUrl,
  breadcrumbListJsonLd,
  buildPageMetadata,
  SEO_LOCALE,
} from "@/lib/seo";

export function generateStaticParams() {
  return WORK_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isWorkSlug(slug)) {
    return { title: "Works" };
  }
  const detail = getWorkDetail(SEO_LOCALE, slug);
  return buildPageMetadata({
    title: detail.title,
    description: detail.intro,
    path: `/works/${slug}/`,
    image: detail.image,
  });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isWorkSlug(slug)) {
    notFound();
  }

  const detail = getWorkDetail(SEO_LOCALE, slug);
  const path = `/works/${slug}/`;

  return (
    <>
      <JsonLd
        id={`work-${slug}-jsonld`}
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: detail.title,
            description: detail.intro,
            url: absoluteUrl(path),
            inLanguage: "vi",
            isPartOf: {
              "@type": "WebSite",
              name: "Dolphin Software",
              url: absoluteUrl("/"),
            },
            about: {
              "@type": "Organization",
              name: "Dolphin Software",
              url: absoluteUrl("/"),
            },
          },
          breadcrumbListJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: "Case studies", path: "/case-studies/" },
            { name: detail.title, path },
          ]),
        ]}
      />
      <WorkDetailView slug={slug} />
    </>
  );
}
