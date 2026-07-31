import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsContent } from "@/components/NewsContent";
import { newsByLocale } from "@/lib/i18n/news-copy";
import { buildPageMetadata, SEO_LOCALE } from "@/lib/seo";

const c = newsByLocale[SEO_LOCALE];

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.meta.title,
    description: c.meta.description,
    path: "/news/",
  }),
  title: { absolute: c.meta.title },
};

export default function NewsPage() {
  return (
    <main>
      <Nav />
      <NewsContent />
      <Footer />
    </main>
  );
}
