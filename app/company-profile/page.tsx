import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { CompanyProfileViewer } from "@/components/CompanyProfileViewer";
import { buildPageMetadata } from "@/lib/seo";
import "./company-profile.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Hồ sơ năng lực",
    description:
      "Hồ sơ năng lực Dolphin Software 2026 — CRM + AI cho doanh nghiệp dịch vụ (spa, nail, salon, giáo dục, clinic).",
    path: "/company-profile/",
  }),
  title: { absolute: "Hồ sơ năng lực | Dolphin Software" },
};

export default function CompanyProfilePage() {
  return (
    <main className={`${beVietnamPro.variable} ${beVietnamPro.className}`}>
      <CompanyProfileViewer />
    </main>
  );
}
