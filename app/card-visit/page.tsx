import type { Metadata } from "next";
import { CardVisitViewer } from "@/components/CardVisitViewer";
import { buildPageMetadata } from "@/lib/seo";
import "./card-visit.css";

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
    <main>
      <CardVisitViewer />
    </main>
  );
}
