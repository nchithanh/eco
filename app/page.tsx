import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { JsonLd } from "@/components/JsonLd";
import { homepageLangVi } from "@/lib/i18n/homepage_lang_vi";
import {
 buildPageMetadata,
 faqPageJsonLd,
} from "@/lib/seo";

const seo = homepageLangVi.seo!;
const faq = homepageLangVi.faq!;

export const metadata: Metadata = {
 ...buildPageMetadata({
 title: seo.title,
 description: seo.description,
 path: "/",
 }),
 title: { absolute: seo.title },
 keywords: seo.keywords,
 openGraph: {
 title: seo.og_title ?? seo.title,
 description: seo.og_description ?? seo.description,
 url: "/",
 },
};

function webPageJsonLd() {
 return {
 "@context": "https://schema.org",
 "@type": "WebPage",
 name: seo.title,
 description: seo.description,
 url: "https://dolphin-software.io.vn/",
 isPartOf: {
 "@type": "WebSite",
 name: "Dolphin Software",
 url: "https://dolphin-software.io.vn/",
 },
 about: {
 "@type": "Organization",
 name: "Dolphin Software",
 },
 inLanguage: "vi",
 };
}

export default function Page() {
 return (
 <>
 <JsonLd
 id="home-jsonld"
 data={[webPageJsonLd(), faqPageJsonLd(faq.items)]}
 />
 <HomePage />
 </>
 );
}
