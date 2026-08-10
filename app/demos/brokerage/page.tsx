import type { Metadata } from "next";
import { BrokerageLanding } from "@/components/demos/BrokerageLanding";
import { brokerageDemoCopy } from "@/lib/demos/brokerage-copy";
import { buildPageMetadata } from "@/lib/seo";
import "./brokerage.css";

const path = "/demos/brokerage/";
const c = brokerageDemoCopy;

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path,
    noIndex: true,
  }),
  title: { absolute: c.metaTitle },
};

export default function BrokerageDemoPage() {
  return <BrokerageLanding />;
}
