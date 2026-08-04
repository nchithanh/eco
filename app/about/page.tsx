import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AboutContent } from "@/components/AboutContent";
import { JsonLd } from "@/components/JsonLd";
import { getAboutCopy } from "@/lib/i18n/about-copy";
import {
 buildPageMetadata,
 faqPageJsonLd,
 personJsonLd,
} from "@/lib/seo";

/** VI meta for Google / GEO (About is VN-first ICP). */
const c = getAboutCopy("vi");
const path = "/about/";

export const metadata: Metadata = {
 ...buildPageMetadata({
 title: c.metaTitle,
 description: c.metaDescription,
 path,
 }),
 title: { absolute: c.metaTitle },
};

export default function AboutPage() {
 return (
 <main>
 <JsonLd
 id="about-jsonld"
 data={[
 faqPageJsonLd(c.faqItems),
 personJsonLd({
 name: c.founderName,
 jobTitle: c.founderRole,
 description: c.founderBody,
 imagePath: "/about/founder.png",
 }),
 ]}
 />
 <Nav />
 <AboutContent />
 <Footer />
 </main>
 );
}
