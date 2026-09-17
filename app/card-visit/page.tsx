import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { CardVisitViewer } from "@/components/CardVisitViewer";
import { buildPageMetadata } from "@/lib/seo";
import "./card-visit.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Danh thiếp",
    description:
      "Danh thiếp Dolphin Software — CRM + AI, Zalo/hotline, website và địa chỉ. In PDF khổ 90×54mm.",
    path: "/card-visit/",
  }),
  title: { absolute: "Danh thiếp | Dolphin Software" },
};

export default function CardVisitPage() {
  return (
    <main className={`${beVietnamPro.variable} ${beVietnamPro.className}`}>
      <CardVisitViewer />
    </main>
  );
}
