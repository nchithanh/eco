import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ServiceDetailView } from "@/components/ServiceDetailView";
import {
 SERVICE_SLUGS,
 getServiceDetail,
 isServiceSlug,
} from "@/lib/i18n/service-details";
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

 // Web + mobile + backend: bake VI meta for Google even if UI default locale is JA.
 const metaLocale =
 slug === "web" || slug === "mobile" || slug === "backend" ? "vi" : SEO_LOCALE;
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

 const metaLocale =
 slug === "web" || slug === "mobile" || slug === "backend" ? "vi" : SEO_LOCALE;
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
