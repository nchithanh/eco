import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AboutContent } from "@/components/AboutContent";
import { getAboutCopy } from "@/lib/i18n/about-copy";
import { buildPageMetadata, SEO_LOCALE } from "@/lib/seo";

const c = getAboutCopy(SEO_LOCALE);

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: `${c.title} — About`,
    description: c.support,
    path: "/about/",
  }),
  title: { absolute: `${c.title} — About` },
};

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <AboutContent />
      <Footer />
    </main>
  );
}
