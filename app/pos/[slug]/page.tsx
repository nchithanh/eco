import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PosPageContent } from "@/components/PosPageContent";
import { getPosPageCopy } from "@/lib/i18n/pos-copy";
import {
  POS_SLUGS,
  isPosSlug,
  type PosSlug,
} from "@/lib/pos/catalog";
import {
  absoluteUrl,
  breadcrumbListJsonLd,
  buildPageMetadata,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return POS_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isPosSlug(slug)) {
    return { title: "POS" };
  }
  const c = getPosPageCopy(slug);
  const path = `/pos/${slug}/`;
  return {
    ...buildPageMetadata({
      title: c.metaTitle,
      description: c.metaDescription,
      path,
    }),
    title: { absolute: c.metaTitle },
  };
}

export default async function PosIndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isPosSlug(slug)) {
    notFound();
  }
  const posSlug = slug as PosSlug;
  const c = getPosPageCopy(posSlug);
  const path = `/pos/${posSlug}/`;

  return (
    <>
      <JsonLd
        id={`pos-${posSlug}-jsonld`}
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
            { name: "POS", path: "/pos/" },
            { name: c.label, path },
          ]),
          faqPageJsonLd(c.faq),
        ]}
      />
      <PosPageContent slug={posSlug} />
    </>
  );
}
