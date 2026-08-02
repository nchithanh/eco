import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomAgentPage } from "@/components/CustomAgentContent";
import { JsonLd } from "@/components/JsonLd";
import { ServiceDetailView } from "@/components/ServiceDetailView";
import {
  SERVICE_SLUGS,
  getServiceDetail,
  isServiceSlug,
} from "@/lib/i18n/service-details";
import { getCustomAgentCopy } from "@/lib/i18n/custom-agent-copy";
import { getServiceExtras } from "@/lib/detail-extras";
import {
  buildPageMetadata,
  faqPageJsonLd,
  SEO_LOCALE,
  serviceJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isServiceSlug(slug)) {
    return { title: "Services" };
  }

  // Prefer the dedicated custom-agent URL to avoid duplicate indexing.
  if (slug === "custom-agent") {
    const c = getCustomAgentCopy(SEO_LOCALE);
    return {
      ...buildPageMetadata({
        title: c.metaTitle,
        description: c.metaDescription,
        path: "/custom-agent/",
      }),
      title: { absolute: c.metaTitle },
      robots: { index: false, follow: true },
    };
  }

  // Web + mobile: bake VI meta for Google even if UI default locale is JA.
  const metaLocale = slug === "web" || slug === "mobile" ? "vi" : SEO_LOCALE;
  const detail = getServiceDetail(metaLocale, slug);
  const path = `/services/${slug}/`;
  const title = detail.metaTitle ?? detail.title;
  const description = detail.metaDescription ?? detail.intro;
  return {
    ...buildPageMetadata({
      title,
      description,
      path,
    }),
    ...(detail.metaTitle ? { title: { absolute: detail.metaTitle } } : {}),
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) {
    notFound();
  }

  if (slug === "custom-agent") {
    return <CustomAgentPage />;
  }

  const metaLocale = slug === "web" || slug === "mobile" ? "vi" : SEO_LOCALE;
  const detail = getServiceDetail(metaLocale, slug);
  const extras = getServiceExtras(metaLocale, slug);
  const path = `/services/${slug}/`;

  return (
    <>
      <JsonLd
        id={`service-${slug}-jsonld`}
        data={[
          serviceJsonLd({
            name: detail.title,
            description: detail.metaDescription ?? detail.intro,
            path,
          }),
          faqPageJsonLd(extras.faq),
        ]}
      />
      <ServiceDetailView slug={slug} />
    </>
  );
}
