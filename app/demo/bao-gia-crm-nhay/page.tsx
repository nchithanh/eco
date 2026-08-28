import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { assetPath } from "@/lib/asset";
import { buildPageMetadata } from "@/lib/seo";
import { QuoteFrame } from "./QuoteFrame";
import "./quote.css";

const pathName = "/demo/bao-gia-crm-nhay/";

function loadQuoteHtml() {
  return readFileSync(
    path.join(process.cwd(), "app/demo/bao-gia-crm-nhay/quote.html"),
    "utf8",
  ).replaceAll("/brand/logo-dolphin.webp", assetPath("/brand/logo-dolphin.webp"));
}

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Báo giá CRM | Dolphin Software",
    description:
      "Phiếu báo giá CRM. Không index.",
    path: pathName,
    noIndex: true,
  }),
  title: { absolute: "Báo giá CRM | Dolphin Software" },
};

export default function BaoGiaCrmNhayPage() {
  const quoteHtml = loadQuoteHtml();
  return (
    <div className="quote-crm">
      <p className="quote-crm__bar">
        <Link href={assetPath("/demos/")}>← Demo vault</Link>
        {" · "}
        Báo giá CRM
      </p>
      <QuoteFrame html={quoteHtml} />
    </div>
  );
}
