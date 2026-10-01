import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { NewsContent } from "@/components/NewsContent";
import { newsByLocale } from "@/lib/i18n/news-copy";
import { listNews } from "@/lib/news-details";
import {
  breadcrumbListJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
  SEO_LOCALE,
} from "@/lib/seo";

const c = newsByLocale[SEO_LOCALE];
const path = "/news/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.meta.title,
    description: c.meta.description,
    path,
  }),
  title: { absolute: c.meta.title },
};

export default function NewsPage() {
  const items = listNews(SEO_LOCALE).map((item) => ({
    name: item.title,
    path: `/news/${item.slug}/`,
  }));

  return (
    <main>
      <JsonLd
        id="news-hub-jsonld"
        data={[
          collectionPageJsonLd({
            name: c.meta.title,
            description: c.meta.description,
            path,
            items,
          }),
          breadcrumbListJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: "Tin tức", path },
          ]),
        ]}
      />
      <Nav />
      <NewsContent />
      <Footer />
    </main>
  );
}
