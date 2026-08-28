import type { Metadata } from "next";
import { TamTheLanding } from "@/components/demos/TamTheLanding";
import { tamTheDemoCopy } from "@/lib/demos/tam-the-copy";
import { buildPageMetadata } from "@/lib/seo";
import "./tam-the.css";

const path = "/demo/tam-the/";
const c = tamTheDemoCopy;

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path,
    noIndex: true,
  }),
  title: { absolute: c.metaTitle },
};

export default function TamThePublicDemoPage() {
  return <TamTheLanding />;
}
