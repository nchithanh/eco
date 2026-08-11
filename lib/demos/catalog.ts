/** Demo vault catalog — password lives in Cloudflare Worker secrets only. */
export type DemoCatalogItem = {
  slug: string;
  href: string;
  title: string;
  blurb: string;
  tag: string;
};

export const demoCatalog: DemoCatalogItem[] = [
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
