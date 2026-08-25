/** Demo vault catalog — password lives in Cloudflare Worker secrets only. */
export type DemoCatalogItem = {
  slug: string;
  href: string;
  title: string;
  blurb: string;
  tag: string;
};

export function isExternalDemoHref(href: string): boolean {
  return href.startsWith("https://") || href.startsWith("http://");
}

export const demoCatalog: DemoCatalogItem[] = [
  {
    slug: "edu",
    href: "https://edu.dolphin-software.io.vn/",
    title: "Dolphin Edu",
    blurb:
      "Dashboard vận hành trung tâm — lớp học, học viên, học phí, chuyên cần, gợi ý AI. Live demo trên subdomain (số liệu placeholder).",
    tag: "Education",
  },
  {
    slug: "wedding-saler",
    href: "/demos/wedding-saler/",
    title: "Saler Studio Wedding",
    blurb:
      "Landing tư vấn cưới cá nhân — portfolio concept, bảng giá minh bạch, quy trình, FAQ, đặt lịch (placeholder ảnh).",
    tag: "Wedding",
  },
  {
    slug: "english-teacher",
    href: "/demos/english-teacher/",
    title: "ENGLISH/1–1 · Giáo viên tiếng Anh",
    blurb:
      "Landing giáo viên tiếng Anh cá nhân — lộ trình 1-1, khóa học, review, FAQ, học thử (placeholder).",
    tag: "Education",
  },
  {
    slug: "brokerage",
    href: "/demos/brokerage/",
    title: "Nguyễn Văn A Invest",
    blurb:
      "Landing môi giới chứng khoán — tông SSI-inspired, P&L demo, chart, social strip.",
    tag: "Brokerage",
  },
  {
    slug: "automotive",
    href: "/demos/automotive/",
    title: "Quân Auto Concierge",
    blurb:
      "Sales experience ô tô cá nhân — hero cinematic, gallery, financing, đặt lái thử.",
    tag: "Automotive",
  },
];
