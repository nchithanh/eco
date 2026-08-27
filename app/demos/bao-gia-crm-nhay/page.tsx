import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { assetPath } from "@/lib/asset";
import { buildPageMetadata } from "@/lib/seo";
import { QuoteFrame } from "./QuoteFrame";
import "./quote.css";

const pathName = "/demos/bao-gia-crm-nhay/";

const quoteHtml = readFileSync(
  path.join(process.cwd(), "app/demos/bao-gia-crm-nhay/quote.html"),
  "utf8",
).replaceAll("/brand/logo-dolphin.webp", assetPath("/brand/logo-dolphin.webp"));

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Báo giá CRM Booking lớp nhảy | Dolphin Software",
    description:
      "Phiếu báo giá CRM booking studio nhảy — sau mật khẩu demo vault. Không index.",
    path: pathName,
    noIndex: true,
  }),
  title: { absolute: "Báo giá CRM Booking lớp nhảy | Dolphin Software" },
};

export default function BaoGiaCrmNhayPage() {
  return (
    <div className="quote-crm">
      <p className="demo-index__bar">
        <Link href={assetPath("/demos/")}>← Demo vault</Link>
        {" · "}
        Báo giá CRM lớp nhảy
      </p>
      <QuoteFrame html={quoteHtml} />
    </div>
  );
}
