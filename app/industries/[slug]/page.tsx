import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryPageContent } from "@/components/IndustryPageContent";
import { JsonLd } from "@/components/JsonLd";
import {
  INDUSTRY_SLUGS,
  isIndustrySlug,
  type IndustrySlug,
} from "@/lib/industries/catalog";
import { getIndustryPageCopy } from "@/lib/i18n/industries-copy";
import {
  absoluteUrl,
  breadcrumbListJsonLd,
  buildPageMetadata,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isIndustrySlug(slug)) {
    return { title: "Ngành" };
  }
  const c = getIndustryPageCopy(slug);
  const path = `/industries/${slug}/`;
  return {
    ...buildPageMetadata({
      title: c.metaTitle,
      description: c.metaDescription,
      path,
    }),
    title: { absolute: c.metaTitle },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isIndustrySlug(slug)) {
    notFound();
  }
  const industrySlug = slug as IndustrySlug;
  const c = getIndustryPageCopy(industrySlug);
  const path = `/industries/${industrySlug}/`;

  return (
    <>
      <JsonLd
        id={`industry-${industrySlug}-jsonld`}
        data={[
          serviceJsonLd({
            name: c.h1,
            description: c.metaDescription,
            path,
          }),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: c.metaTitle,
            description: c.metaDescription,
            url: absoluteUrl(path),
            inLanguage: "vi",
            isPartOf: {
              "@type": "WebSite",
              name: "Dolphin Software",
              url: "https://dolphin-software.io.vn/",
            },
          },
          breadcrumbListJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: "Ngành", path: "/industries/" },
            { name: c.label, path },
          ]),
          faqPageJsonLd(c.faq),
        ]}
      />
      <IndustryPageContent slug={industrySlug} />
    </>
  );
}
