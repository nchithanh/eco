/** Client-side demo vault — not real security; obscures demos on static Pages. */
export const DEMO_GATE_PASSWORD = "dolphincaheo";
export const DEMO_GATE_STORAGE_KEY = "dolphin-demos-unlocked-v1";

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
