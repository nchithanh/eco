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
    slug: "dolphin-racing",
    href: "/demo/dolphin-racing/",
    title: "Dolphin Racing",
    blurb:
      "Landing đồ chơi xe máy TPHCM: pit-lane đêm, dàn áo, rack phụ tùng. Public `/demo/dolphin-racing/` — không mật khẩu. Ảnh/SĐT placeholder.",
    tag: "Moto",
  },
  {
    slug: "tam-the",
    href: "/demo/tam-the/",
    title: "Tam Thể — Coffee · Brunch · Night",
    blurb:
      "Landing brand F&B Q1: hero split ngày/đêm, collage, đặt bàn. Public `/demo/tam-the/` — không mật khẩu. Tên quán thật — món/giờ/giá placeholder.",
    tag: "F&B",
  },
  {
    slug: "bao-gia-crm-nhay",
    href: "/demo/bao-gia-crm-nhay/",
    title: "Báo giá CRM",
    blurb:
      "Phiếu báo giá CRM — gói cố định + hạng mục tùy chọn. Public `/demo/bao-gia-crm-nhay/` — không mật khẩu. Tick rồi In / PDF.",
    tag: "Quote",
  },
  {
    slug: "ma-dance-discovery",
    href: "/demos/ma-dance-discovery/",
    title: "MA Dance — CRM discovery",
    blurb:
      "Business collect từ form discovery (chi nhánh, khóa, gói, điểm danh, bảo lưu, follow-up). Trong vault `/demos/` — cần mật khẩu.",
    tag: "Discovery",
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
