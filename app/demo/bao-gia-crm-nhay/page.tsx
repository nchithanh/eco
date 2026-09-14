import type { Metadata } from "next";
import Link from "next/link";
import { MaDanceQuote } from "@/components/quotes/MaDanceQuote";
import { assetPath } from "@/lib/asset";
import { buildPageMetadata } from "@/lib/seo";
import "./quote.css";
import "./quote-form.css";

const pathName = "/demo/bao-gia-crm-nhay/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Báo giá CRM — MA Dance | Dolphin Software",
    description:
      "Phiếu báo giá CRM MA Dance — 6 gói combo Dolphin Software + tùy chọn outsource. Không index.",
    path: pathName,
    noIndex: true,
  }),
  title: { absolute: "Báo giá CRM — MA Dance | Dolphin Software" },
};

export default function BaoGiaCrmNhayPage() {
  return (
    <div className="quote-crm">
      <p className="quote-crm__bar no-print">
        <Link href={assetPath("/demos/")}>← Demo vault</Link>
        {" · "}
        Báo giá CRM · MA Dance
      </p>
      <MaDanceQuote />
    </div>
  );
}
