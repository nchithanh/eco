import type { Metadata } from "next";
import { AdminConsole } from "@/components/demos/AdminConsole";
import { buildPageMetadata } from "@/lib/seo";
import "./admin.css";

const path = "/demos/admin/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Dolphin Sales | Dolphin Software",
    description: "Dolphin Sales — workspace quản lý pipeline lead. Không index.",
    path,
    noIndex: true,
  }),
  title: { absolute: "Dolphin Sales | Dolphin Software" },
};

export default function DemosAdminPage() {
  return <AdminConsole />;
}
