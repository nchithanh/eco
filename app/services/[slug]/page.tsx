import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomAgentPage } from "@/components/CustomAgentContent";
import { ServiceDetailView } from "@/components/ServiceDetailView";
import {
  SERVICE_SLUGS,
  getServiceDetail,
  isServiceSlug,
} from "@/lib/i18n/service-details";
import { getCustomAgentCopy } from "@/lib/i18n/custom-agent-copy";
import { buildPageMetadata, SEO_LOCALE } from "@/lib/seo";

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

  const detail = getServiceDetail(SEO_LOCALE, slug);
  const path = `/services/${slug}/`;
  return buildPageMetadata({
    title: detail.title,
    description: detail.intro,
    path,
  });
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

  return <ServiceDetailView slug={slug} />;
}
