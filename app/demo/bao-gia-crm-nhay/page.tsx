import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { assetPath } from "@/lib/asset";
import { brandLogoSrc } from "@/lib/brand-logo";
import { buildPageMetadata } from "@/lib/seo";
import { QuoteFrame } from "./QuoteFrame";
import "./quote.css";

const pathName = "/demo/bao-gia-crm-nhay/";

function loadQuoteHtml() {
  return readFileSync(
    path.join(process.cwd(), "app/demo/bao-gia-crm-nhay/quote.html"),
    "utf8",
  ).replaceAll("/brand/logo-dolphin.webp", assetPath(brandLogoSrc()));
}

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Báo giá CRM — MA Dance | Dolphin Software",
    description:
      "Phiếu báo giá CRM cho MA Dance: CRM + website; tác vụ và cổng login GV/HV tick thêm. Không index.",
    path: pathName,
    noIndex: true,
  }),
  title: { absolute: "Báo giá CRM — MA Dance | Dolphin Software" },
};

export default function BaoGiaCrmNhayPage() {
  const quoteHtml = loadQuoteHtml();
  return (
    <div className="quote-crm">
      <p className="quote-crm__bar">
        <Link href={assetPath("/demos/")}>← Demo vault</Link>
        {" · "}
        Báo giá CRM · MA Dance
      </p>
      <QuoteFrame html={quoteHtml} />
    </div>
  );
}
