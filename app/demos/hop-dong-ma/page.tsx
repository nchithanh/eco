import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { HopDongMa } from "@/components/HopDongMa";
import { buildPageMetadata } from "@/lib/seo";
import "./hop-dong-ma.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const path = "/demos/hop-dong-ma/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Hợp đồng dịch vụ phần mềm — MA Dance",
    description:
      "Hợp đồng dịch vụ phần mềm Dolphin Software × MA Dance — CRM chuyển đổi vận hành. Vault demos, không index.",
    path,
    noIndex: true,
  }),
  title: { absolute: "Hợp đồng MA Dance | Dolphin Software" },
  robots: { index: false, follow: false },
};

export default function HopDongMaPage() {
  return (
    <main className={`${beVietnamPro.variable} ${beVietnamPro.className}`}>
      <HopDongMa />
    </main>
  );
}
