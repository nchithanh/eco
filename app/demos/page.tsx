import type { Metadata } from "next";
import Link from "next/link";
import { assetPath } from "@/lib/asset";
import { demoCatalog } from "@/lib/demos/catalog";
import { buildPageMetadata } from "@/lib/seo";

const path = "/demos/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Demo vault | Dolphin Software",
    description:
      "Danh sách landing demo Dolphin Software — yêu cầu mật khẩu. Không index.",
    path,
    noIndex: true,
  }),
  title: { absolute: "Demo vault | Dolphin Software" },
};

export default function DemosIndexPage() {
  return (
    <div className="demo-index">
      <div className="demo-index__inner">
        <p className="demo-index__bar">
          <Link href={assetPath("/")}>← Dolphin Software</Link>
          {" · "}
          Demo vault (session unlocked)
        </p>
        <h1>Demos</h1>
        <p className="demo-index__lead">
          Landing minh họa theo ngành — dùng khi pitch khách. Nội dung và số liệu
          là placeholder trừ khi ghi chú khác.
        </p>
        <ul className="demo-index__list">
          {demoCatalog.map((item) => (
            <li key={item.slug}>
              <Link href={assetPath(item.href)} className="demo-index__card">
                <span className="demo-index__tag">{item.tag}</span>
                <h2>{item.title}</h2>
                <p>{item.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="demo-index__note">
          Vault bảo vệ bằng Cloudflare Worker (cookie). Trên production cần mật
          khẩu; số liệu trong demo là placeholder trừ khi ghi chú khác.
        </p>
      </div>
    </div>
  );
}
