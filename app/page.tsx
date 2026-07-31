import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildPageMetadata, SEO_LOCALE } from "@/lib/seo";

const meta = getDictionary(SEO_LOCALE).meta;

export const metadata: Metadata = buildPageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
