import type { Dictionary, Locale } from "./types";

type UiGallery = Dictionary["uiGallery"];

const itemVi = {
  "01": {
    label: "Landing",
    title: "Campaign conversion",
    body: "Hero rõ, CTA nổi — tối ưu lead từ ads.",
    badge: "Phổ biến nhất",
  },
  "02": {
    label: "Landing",
    title: "Product launch",
    body: "Ra mắt sản phẩm gọn, một mục tiêu chính.",
  },
  "03": {
    label: "Business",
    title: "SMB giới thiệu",
    body: "Dịch vụ + liên hệ rõ, dễ mở rộng nội dung.",
  },
  "04": {
    label: "Corporate",
    title: "Hồ sơ doanh nghiệp",
    body: "Uy tín B2B, cấu trúc trang chuẩn corporate.",
    badge: "Đề xuất",
  },
  "05": {
    label: "Startup",
    title: "Startup pitch",
    body: "Story ngắn, social proof, form đầu tư / demo.",
  },
  "06": {
    label: "Landing",
    title: "Lead magnet",
    body: "Form + benefit bullets — thu lead nhanh.",
  },
  "07": {
    label: "Portfolio",
    title: "Creative portfolio",
    body: "Showcase dự án, grid ảnh, case ngắn.",
  },
  "08": {
    label: "Portfolio",
    title: "Freelancer / agency",
    body: "Personal brand + selected works.",
  },
  "09": {
    label: "Corporate",
    title: "Enterprise intro",
    body: "Vision, leadership, đối tác — tone trang trọng.",
  },
  "10": {
    label: "Business",
    title: "Dịch vụ B2B",
    body: "Phân nhóm dịch vụ, FAQ, CTA tư vấn.",
  },
  "11": {
    label: "E-commerce",
    title: "Catalog shop",
    body: "Danh mục sản phẩm, filter, giỏ hàng.",
  },
  "12": {
    label: "E-commerce",
    title: "Online store",
    body: "Shop đầy đủ: catalog, checkout, promo.",
    badge: "Được chọn nhiều",
  },
  "13": {
    label: "E-commerce",
    title: "Brand D2C",
    body: "Thương hiệu + bán hàng trực tiếp.",
  },
  "14": {
    label: "Web App",
    title: "Ops dashboard",
    body: "Panel vận hành, bảng số liệu, role cơ bản.",
  },
  "15": {
    label: "Web App",
    title: "SaaS starter",
    body: "Onboarding + dashboard cho sản phẩm số.",
  },
  "16": {
    label: "Web App",
    title: "Internal tool",
    body: "Workflow nội bộ, form + trạng thái đơn.",
  },
  "17": {
    label: "Business",
    title: "Company profile",
    body: "About, team, chứng thực — trust-first.",
  },
  "18": {
    label: "Portfolio",
    title: "Case studies",
    body: "Dự án theo ngành, kết quả đo được.",
  },
  "19": {
    label: "Corporate",
    title: "Group / holding",
    body: "Đa công ty con, investor relations gọn.",
  },
  "20": {
    label: "Startup",
    title: "Growth landing",
    body: "Waitlist, pricing teaser, social proof.",
  },
} satisfies UiGallery["items"];

const vi: UiGallery = {
  eyebrow: "Showcase",
  title: "Khám phá [[giao diện]] & giải pháp",
  support:
    "Lọc nhanh theo nhu cầu — tham khảo layout phổ biến, rồi chọn hướng phù hợp hoặc nhận tư vấn.",
  filters: {
    all: "Tất cả",
    landing: "Landing Page",
    business: "Website Business",
    webapp: "Web App Custom",
    ecommerce: "E-commerce",
    corporate: "Corporate",
    portfolio: "Portfolio",
    startup: "Startup",
  },
  previewAlt: "Mẫu giao diện",
  viewSample: "Xem mẫu",
  ctaServices: "Xem tất cả dịch vụ",
  ctaConsult: "Nhận tư vấn",
  empty: "Chưa có mẫu trong nhóm này — thử filter khác hoặc liên hệ tư vấn.",
  items: itemVi,
};

const en: UiGallery = {
  eyebrow: "Showcase",
  title: "Explore [[layouts]] & solutions",
  support:
    "Quick filter by need — review popular layouts, then choose the right direction or get consultation.",
  filters: {
    all: "All",
    landing: "Landing Page",
    business: "Business Website",
    webapp: "Custom Web App",
    ecommerce: "E-commerce",
    corporate: "Corporate",
    portfolio: "Portfolio",
    startup: "Startup",
  },
  previewAlt: "Layout sample",
  viewSample: "View sample",
  ctaServices: "View all services",
  ctaConsult: "Get consultation",
  empty: "No samples in this group yet — try another filter or contact for consultation.",
  items: {
    "01": {
      label: "Landing",
      title: "Campaign conversion",
      body: "Clear hero and CTA — built for ad traffic.",
      badge: "Most popular",
    },
    "02": {
      label: "Landing",
      title: "Product launch",
      body: "Focused launch page with one primary goal.",
    },
    "03": {
      label: "Business",
      title: "SMB intro",
      body: "Services + contact paths, room to grow content.",
    },
    "04": {
      label: "Corporate",
      title: "Company profile",
      body: "B2B trust, standard corporate structure.",
      badge: "Recommended",
    },
    "05": {
      label: "Startup",
      title: "Startup pitch",
      body: "Short story, proof, demo / investor form.",
    },
    "06": {
      label: "Landing",
      title: "Lead magnet",
      body: "Form + benefits — fast lead capture.",
    },
    "07": {
      label: "Portfolio",
      title: "Creative portfolio",
      body: "Project grid, visuals, short cases.",
    },
    "08": {
      label: "Portfolio",
      title: "Freelancer / agency",
      body: "Personal brand and selected work.",
    },
    "09": {
      label: "Corporate",
      title: "Enterprise intro",
      body: "Vision, leadership, partners — formal tone.",
    },
    "10": {
      label: "Business",
      title: "B2B services",
      body: "Service groups, FAQ, consult CTA.",
    },
    "11": {
      label: "E-commerce",
      title: "Catalog shop",
      body: "Product catalog, filters, cart.",
    },
    "12": {
      label: "E-commerce",
      title: "Online store",
      body: "Full shop: catalog, checkout, promos.",
      badge: "Often picked",
    },
    "13": {
      label: "E-commerce",
      title: "Brand D2C",
      body: "Brand story plus direct sales.",
    },
    "14": {
      label: "Web App",
      title: "Ops dashboard",
      body: "Ops panel, metrics, basic roles.",
    },
    "15": {
      label: "Web App",
      title: "SaaS starter",
      body: "Onboarding + dashboard for digital products.",
    },
    "16": {
      label: "Web App",
      title: "Internal tool",
      body: "Internal workflow, forms, order states.",
    },
    "17": {
      label: "Business",
      title: "Company profile",
      body: "About, team, proof — trust-first.",
    },
    "18": {
      label: "Portfolio",
      title: "Case studies",
      body: "Industry projects with measurable outcomes.",
    },
    "19": {
      label: "Corporate",
      title: "Group / holding",
      body: "Multi-entity, compact investor section.",
    },
    "20": {
      label: "Startup",
      title: "Growth landing",
      body: "Waitlist, pricing teaser, social proof.",
    },
  },
};

const ja: UiGallery = {
  eyebrow: "Showcase",
  title: "[[レイアウト]]とソリューションを探す",
  support:
    "ニーズで素早く絞り込み — 人気レイアウトを参照し、適した方向性を選ぶかご相談ください。",
  filters: {
    all: "すべて",
    landing: "ランディングページ",
    business: "ビジネスサイト",
    webapp: "カスタムWebアプリ",
    ecommerce: "E-commerce",
    corporate: "コーポレート",
    portfolio: "ポートフォリオ",
    startup: "スタートアップ",
  },
  previewAlt: "レイアウトサンプル",
  viewSample: "サンプルを見る",
  ctaServices: "すべてのサービスを見る",
  ctaConsult: "相談する",
  empty: "このグループにはサンプルがありません — 別のフィルターをお試しいただくか、ご相談ください。",
  items: {
    "01": {
      label: "LP",
      title: "キャンペーン転換",
      body: "明確なヒーローとCTA — 広告流入向け。",
      badge: "最も人気",
    },
    "02": { label: "LP", title: "プロダクトローンチ", body: "一つの主目的に集中した公開ページ。" },
    "03": { label: "ビジネス", title: "SMB紹介", body: "サービスと問い合わせ導線が明確。" },
    "04": {
      label: "コーポレート",
      title: "企業プロフィール",
      body: "B2Bの信頼感、標準的な構成。",
      badge: "おすすめ",
    },
    "05": { label: "スタートアップ", title: "ピッチ", body: "短いストーリーとデモフォーム。" },
    "06": { label: "LP", title: "リード獲得", body: "フォームとメリットで素早くリード。" },
    "07": { label: "ポートフォリオ", title: "クリエイティブ", body: "作品グリッドと短いケース。" },
    "08": { label: "ポートフォリオ", title: "フリーランス", body: "個人ブランドと実績。" },
    "09": { label: "コーポレート", title: "エンタープライズ", body: "ビジョンとパートナー紹介。" },
    "10": { label: "ビジネス", title: "B2Bサービス", body: "サービス分類とFAQ。" },
    "11": { label: "EC", title: "カタログショップ", body: "商品一覧とカート。" },
    "12": {
      label: "EC",
      title: "オンラインストア",
      body: "カタログ、決済、プロモーション。",
      badge: "よく選ばれる",
    },
    "13": { label: "EC", title: "D2Cブランド", body: "ブランドストーリーと直販。" },
    "14": { label: "Webアプリ", title: "運用ダッシュボード", body: "指標パネルと基本ロール。" },
    "15": { label: "Webアプリ", title: "SaaS入門", body: "オンボーディングとダッシュボード。" },
    "16": { label: "Webアプリ", title: "社内ツール", body: "社内ワークフローとフォーム。" },
    "17": { label: "ビジネス", title: "会社紹介", body: "チームと実績で信頼構築。" },
    "18": { label: "ポートフォリオ", title: "事例", body: "業界別の成果ケース。" },
    "19": { label: "コーポレート", title: "グループ", body: "多法人とIRセクション。" },
    "20": { label: "スタートアップ", title: "グロースLP", body: "ウェイトリストと価格ティーザー。" },
  },
};



export const uiGalleryByLocale: Record<Locale, UiGallery> = {
  vi,
  en,
  ja,
};
