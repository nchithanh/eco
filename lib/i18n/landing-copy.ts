import type { Locale } from "@/lib/i18n/types";

export type LandingFaqItem = { q: string; a: string };

export type LandingCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  fitLine: string;
  ctaPrimary: string;
  ctaSecondary: string;

  whatEyebrow: string;
  whatTitle: string;
  whatBody: string;
  whenTitle: string;
  whenItems: string[];

  whyEyebrow: string;
  whyTitle: string;
  whyIntro: string;
  whyItems: { title: string; body: string }[];

  includeEyebrow: string;
  includeTitle: string;
  includeIntro: string;
  includeGroups: { title: string; items: string[] }[];

  industriesEyebrow: string;
  industriesTitle: string;
  industriesIntro: string;
  industriesHeaders: [string, string];
  industries: { sector: string; goal: string }[];

  processEyebrow: string;
  processTitle: string;
  processSteps: { title: string; body: string }[];

  pricingEyebrow: string;
  pricingTitle: string;
  pricingNote: string;
  pricingHeaders: [string, string, string, string];
  pricingRows: {
    name: string;
    price: string;
    timeline: string;
    fit: string;
  }[];
  pricingCta: string;

  faqEyebrow: string;
  faqTitle: string;
  faqItems: LandingFaqItem[];

  closeEyebrow: string;
  closeTitle: string;
  closeSupport: string;
  closeBullets: string[];
  closeHint: string;
  contactLinks: { label: string; href: string }[];
};

const ZALO = "https://zalo.me/0779937633";
const EMAIL = "mailto:nchithanh9999@gmail.com";

const vi: LandingCopy = {
  metaTitle: "Thiết Kế Landing Page Chuyên Nghiệp | Dolphin Software",
  metaDescription:
    "Dịch vụ thiết kế landing page cho SMB Việt Nam — bàn giao trong 3–5 ngày, CTA rõ ràng, tối ưu chuyển đổi. Báo giá cố định, không phát sinh chi phí ngoài scope.",
  eyebrow: "Dịch vụ · Landing Page",
  title: "Dịch vụ thiết kế Landing Page cho doanh nghiệp vừa và nhỏ",
  lead: "Dolphin Software thiết kế landing page với một mục tiêu duy nhất: biến người truy cập thành khách hàng tiềm năng. Mỗi trang được bàn giao trong 3–5 ngày làm việc, có CTA rõ ràng, responsive trên mọi thiết bị, và đi kèm hướng dẫn vận hành sau bàn giao.",
  fitLine:
    "Phù hợp cho: chiến dịch quảng cáo, ra mắt dịch vụ mới, thu lead nhanh — không cần website nhiều trang.",
  ctaPrimary: "Nhận báo giá ngay",
  ctaSecondary: "Xem bảng giá",

  whatEyebrow: "Khái niệm",
  whatTitle: "Thiết kế Landing Page là gì? Khi nào doanh nghiệp cần?",
  whatBody:
    "Landing page là một trang web đơn lẻ, được thiết kế để hướng người xem thực hiện một hành động cụ thể — điền form, đặt lịch, liên hệ, hoặc mua hàng. Khác với website nhiều trang, landing page loại bỏ mọi yếu tố phân tâm để tối đa hóa tỷ lệ chuyển đổi.",
  whenTitle: "Doanh nghiệp nên dùng landing page khi:",
  whenItems: [
    "Chạy quảng cáo Google Ads, Facebook Ads và cần trang đích riêng biệt",
    "Ra mắt sản phẩm, dịch vụ mới cần thu thập lead nhanh",
    "Tổ chức sự kiện, hội thảo, khuyến mãi theo mùa",
    "Muốn kiểm tra thị trường trước khi đầu tư vào website đầy đủ",
  ],

  whyEyebrow: "Lý do chọn",
  whyTitle: "Tại sao chọn Dolphin Software để thiết kế Landing Page?",
  whyIntro:
    "Dolphin Software là đơn vị phần mềm Việt Nam chuyên phục vụ SMB — doanh nghiệp vừa và nhỏ không có đội IT nội bộ. Mỗi dự án được tiếp cận theo ngôn ngữ kinh doanh, không phải ngôn ngữ kỹ thuật.",
  whyItems: [
    {
      title: "Bàn giao nhanh",
      body: "Landing page hoàn thành trong 3–5 ngày làm việc sau khi chốt scope.",
    },
    {
      title: "Báo giá minh bạch",
      body: "Giá cố định từ đầu, không phát sinh ngoài scope đã ký.",
    },
    {
      title: "Tối ưu chuyển đổi",
      body: "CTA nổi bật, form ngắn gọn, luồng hành động rõ ràng cho người xem.",
    },
    {
      title: "Responsive mặc định",
      body: "Hiển thị chuẩn trên điện thoại, máy tính bảng, và desktop.",
    },
    {
      title: "SEO on-page cơ bản",
      body: "Meta title, meta description, heading structure chuẩn — sẵn sàng cho quảng cáo và tìm kiếm tự nhiên.",
    },
    {
      title: "Hỗ trợ sau bàn giao",
      body: "Hướng dẫn vận hành, bảo hành lỗi kỹ thuật trong thời gian thỏa thuận.",
    },
  ],

  includeEyebrow: "Phạm vi",
  includeTitle: "Dịch vụ Landing Page của Dolphin Software bao gồm những gì?",
  includeIntro:
    "Mỗi landing page được thiết kế theo brief của doanh nghiệp và bao gồm các hạng mục sau.",
  includeGroups: [
    {
      title: "Thiết kế & phát triển",
      items: [
        "Thiết kế UI theo nhận diện thương hiệu (màu sắc, font, logo)",
        "Layout tối ưu cho chuyển đổi: hero section, điểm nổi bật, CTA, form liên hệ",
        "Responsive toàn bộ thiết bị — không cần chỉnh tay sau bàn giao",
      ],
    },
    {
      title: "Kỹ thuật & tích hợp",
      items: [
        "Tốc độ tải trang tối ưu (ảnh nén, code gọn)",
        "Tích hợp form thu lead (gửi email hoặc kết nối CRM theo yêu cầu)",
        "Tích hợp Google Analytics 4 và tracking sự kiện cơ bản",
        "Hỗ trợ tích hợp Zalo OA, MoMo, ZaloPay, VNPay khi cần",
      ],
    },
    {
      title: "Bàn giao & vận hành",
      items: [
        "Source code và quyền sở hữu toàn bộ thuộc về khách hàng",
        "Hướng dẫn vận hành và chỉnh sửa nội dung cơ bản",
        "Bảo hành lỗi kỹ thuật theo thỏa thuận (thường 1–3 tháng)",
      ],
    },
  ],

  industriesEyebrow: "Ngành",
  industriesTitle: "Landing Page phù hợp với ngành nào?",
  industriesIntro:
    "Dịch vụ thiết kế landing page của Dolphin Software đã được triển khai cho nhiều ngành khác nhau.",
  industriesHeaders: ["Ngành", "Mục tiêu thường gặp"],
  industries: [
    { sector: "Spa / Thẩm mỹ", goal: "Thu lead, đặt lịch dịch vụ" },
    { sector: "Nhà hàng / F&B", goal: "Quảng bá khuyến mãi, đặt bàn online" },
    { sector: "Giáo dục", goal: "Đăng ký khóa học, tư vấn tuyển sinh" },
    { sector: "Y tế / Phòng khám", goal: "Đặt lịch khám, tư vấn sức khỏe" },
    {
      sector: "Bất động sản",
      goal: "Thu thập thông tin khách hàng tiềm năng",
    },
    { sector: "Sự kiện", goal: "Đăng ký tham dự, bán vé online" },
  ],

  processEyebrow: "Quy trình",
  processTitle: "Quy trình thiết kế Landing Page tại Dolphin Software",
  processSteps: [
    {
      title: "Lắng nghe & xác định mục tiêu",
      body: "Dolphin Software làm rõ mục tiêu trang, đối tượng mục tiêu, deadline, và ngân sách. Đầu ra: tóm tắt bài toán và yêu cầu đã thống nhất.",
    },
    {
      title: "Lên phương án & báo giá",
      body: "Đề xuất cấu trúc trang, phân tích tính năng cần thiết, và gửi báo giá cố định. Đầu ra: proposal rõ scope, timeline, và chi phí.",
    },
    {
      title: "Thiết kế & phát triển",
      body: "Triển khai UI, tích hợp form và tracking, kiểm tra responsive. Đầu ra: bản demo để khách hàng duyệt và điều chỉnh sớm.",
    },
    {
      title: "QA & nghiệm thu",
      body: "Kiểm tra kỹ thuật, tốc độ tải, hiển thị đa thiết bị, và nghiệm thu cùng khách hàng. Đầu ra: checklist QA và danh sách lỗi đã xử lý.",
    },
    {
      title: "Bàn giao & hỗ trợ",
      body: "Deploy lên domain, bàn giao source code, hướng dẫn vận hành, và kích hoạt bảo hành. Đầu ra: toàn bộ tài sản kỹ thuật và hướng dẫn sử dụng.",
    },
  ],

  pricingEyebrow: "Báo giá",
  pricingTitle: "Bảng giá dịch vụ Landing Page",
  pricingNote:
    "Giá cố định trước khi bắt đầu — không phát sinh phí ngoài scope đã ký. Gửi brief ngắn để nhận báo giá cụ thể.",
  pricingHeaders: ["Gói", "Giá khởi điểm", "Thời gian", "Phù hợp"],
  pricingRows: [
    {
      name: "Landing Page cơ bản",
      price: "{{landingPrice}}",
      timeline: "3–5 ngày",
      fit: "Thu lead, quảng bá dịch vụ",
    },
    {
      name: "Landing Page nâng cao",
      price: "Báo giá theo scope",
      timeline: "5–7 ngày",
      fit: "Tích hợp form CRM, payment, Zalo OA",
    },
  ],
  pricingCta: "Nhận báo giá ngay →",

  faqEyebrow: "FAQ",
  faqTitle: "Câu hỏi thường gặp về thiết kế Landing Page",
  faqItems: [
    {
      q: "Thiết kế landing page mất bao lâu?",
      a: "Landing page tiêu chuẩn tại Dolphin Software được bàn giao trong 3–5 ngày làm việc sau khi chốt scope và nhận đủ nội dung từ khách hàng. Trang có tích hợp phức tạp hơn (CRM, payment) có thể cần 5–7 ngày.",
    },
    {
      q: "Landing page có khác website không?",
      a: "Có. Website là hệ thống nhiều trang phục vụ nhiều mục đích (giới thiệu công ty, sản phẩm, blog, liên hệ). Landing page là một trang duy nhất tập trung vào một hành động cụ thể — phù hợp cho chiến dịch quảng cáo hoặc ra mắt dịch vụ mới. Xem thêm dịch vụ website tại /services/web/.",
    },
    {
      q: "Tôi có thể tự chỉnh sửa nội dung sau khi bàn giao không?",
      a: "Có. Dolphin Software cung cấp hướng dẫn chỉnh sửa nội dung cơ bản (văn bản, hình ảnh) sau bàn giao. Nếu cần CMS đầy đủ để tự cập nhật thường xuyên, hãy nêu yêu cầu khi báo giá.",
    },
    {
      q: "Landing page có được tối ưu cho quảng cáo không?",
      a: "Có. Mỗi landing page được tối ưu on-page SEO cơ bản (meta title, description, heading structure) và tích hợp Google Analytics 4 để theo dõi hiệu quả quảng cáo Google Ads hoặc Facebook Ads.",
    },
    {
      q: "Nếu tôi chưa có nội dung, Dolphin Software có hỗ trợ không?",
      a: "Dolphin Software có thể hỗ trợ tư vấn cấu trúc nội dung (content outline) cho landing page. Nội dung chuyên sâu theo ngành sẽ cần phía khách hàng cung cấp hoặc bổ sung scope viết nội dung.",
    },
    {
      q: "Chi phí thiết kế landing page tại Dolphin Software là bao nhiêu?",
      a: "Landing page cơ bản bắt đầu từ {{landingPrice}}, bao gồm thiết kế UI, responsive, form thu lead, và tích hợp GA4. Các gói nâng cao (CRM, payment gateway, Zalo OA) được báo giá theo scope cụ thể — không áp dụng mức giá cố định chung.",
    },
    {
      q: "Dolphin Software có hỗ trợ tích hợp chatbot AI vào landing page không?",
      a: "Có. Dolphin Software cung cấp giải pháp Dolphin Care — chatbot AI được tích hợp trực tiếp vào trang web, hỗ trợ trả lời câu hỏi tự động, thu thập lead, và chuyển tiếp cho nhân viên khi cần. Tính năng này có thể bổ sung vào scope landing page theo yêu cầu. Chi tiết tại /dolphin-care/.",
    },
  ],

  closeEyebrow: "Bắt đầu",
  closeTitle: "Sẵn sàng để có Landing Page hoạt động hiệu quả?",
  closeSupport:
    "Gửi brief ngắn — Dolphin Software phản hồi với phương án và báo giá cụ thể, không ép package.",
  closeBullets: [
    "Phương án tiếp cận phù hợp với mục tiêu của bạn",
    "Gợi ý scope: cấu trúc trang, tính năng, tích hợp cần thiết",
    "Timeline và ước tính chi phí rõ ràng",
  ],
  closeHint: "Thường phản hồi trong ngày làm việc.",
  contactLinks: [
    { label: "Chat Zalo", href: ZALO },
    { label: "Gửi email", href: EMAIL },
    { label: "Nhận báo giá", href: "/#contact" },
  ],
};

const en: LandingCopy = {
  metaTitle: "Professional Landing Page Design | Dolphin Software",
  metaDescription:
    "Landing page design for Vietnamese SMBs — delivered in 3–5 days, clear CTAs, conversion-focused. Fixed scope pricing, no surprise fees.",
  eyebrow: "Service · Landing Page",
  title: "Landing page design for small and mid-size businesses",
  lead: "Dolphin Software designs landing pages with one goal: turn visitors into leads. Each page ships in 3–5 business days, with clear CTAs, full responsiveness, and a short ops guide after handover.",
  fitLine:
    "Best for: ad campaigns, new service launches, fast lead capture — without a multi-page website.",
  ctaPrimary: "Get a quote",
  ctaSecondary: "See pricing",

  whatEyebrow: "Basics",
  whatTitle: "What is a landing page? When do you need one?",
  whatBody:
    "A landing page is a single web page built so visitors take one action — form, booking, contact, or purchase. Unlike multi-page sites, it removes distractions to maximize conversion.",
  whenTitle: "Use a landing page when you:",
  whenItems: [
    "Run Google Ads or Facebook Ads and need a dedicated destination",
    "Launch a product or service and need leads fast",
    "Host events, workshops, or seasonal promos",
    "Want to test the market before investing in a full website",
  ],

  whyEyebrow: "Why us",
  whyTitle: "Why choose Dolphin Software for landing pages?",
  whyIntro:
    "Dolphin Software is a Vietnam software studio for SMBs without an in-house IT team. We speak business outcomes, not jargon.",
  whyItems: [
    {
      title: "Fast delivery",
      body: "Standard landing pages ship in 3–5 business days after scope is locked.",
    },
    {
      title: "Transparent pricing",
      body: "Fixed price up front — no fees outside the signed scope.",
    },
    {
      title: "Conversion-focused",
      body: "Clear CTAs, short forms, and a simple path to act.",
    },
    {
      title: "Responsive by default",
      body: "Looks right on phone, tablet, and desktop.",
    },
    {
      title: "Basic on-page SEO",
      body: "Meta title, description, and heading structure ready for ads and organic search.",
    },
    {
      title: "Support after handover",
      body: "Ops guidance and technical warranty for the agreed period.",
    },
  ],

  includeEyebrow: "Scope",
  includeTitle: "What does a Dolphin Software landing page include?",
  includeIntro:
    "Each landing page follows your brief and typically includes the items below.",
  includeGroups: [
    {
      title: "Design & build",
      items: [
        "UI aligned to brand (colors, fonts, logo)",
        "Conversion layout: hero, highlights, CTA, contact form",
        "Fully responsive — no manual tweaks after handover",
      ],
    },
    {
      title: "Tech & integrations",
      items: [
        "Page speed basics (compressed images, lean code)",
        "Lead form (email or CRM as requested)",
        "Google Analytics 4 and basic event tracking",
        "Optional Zalo OA, MoMo, ZaloPay, VNPay",
      ],
    },
    {
      title: "Handover & ops",
      items: [
        "Full source code and ownership for the client",
        "Guide for basic content edits",
        "Technical warranty (typically 1–3 months)",
      ],
    },
  ],

  industriesEyebrow: "Industries",
  industriesTitle: "Which industries fit a landing page?",
  industriesIntro:
    "Dolphin Software has shipped landing pages across many verticals.",
  industriesHeaders: ["Industry", "Common goal"],
  industries: [
    { sector: "Spa / Beauty", goal: "Leads and service bookings" },
    { sector: "Restaurant / F&B", goal: "Promos and online reservations" },
    { sector: "Education", goal: "Course sign-ups and counseling" },
    { sector: "Clinic / Healthcare", goal: "Appointments and health consults" },
    { sector: "Real estate", goal: "Capture prospect details" },
    { sector: "Events", goal: "Registrations and online tickets" },
  ],

  processEyebrow: "Process",
  processTitle: "How Dolphin Software designs a landing page",
  processSteps: [
    {
      title: "Listen & lock goals",
      body: "Clarify page goal, audience, deadline, and budget. Output: agreed problem summary and requirements.",
    },
    {
      title: "Proposal & quote",
      body: "Suggest page structure, needed features, and a fixed quote. Output: clear scope, timeline, and cost.",
    },
    {
      title: "Design & develop",
      body: "UI, forms, tracking, responsive checks. Output: demo for early review and tweaks.",
    },
    {
      title: "QA & acceptance",
      body: "Tech checks, load speed, multi-device review with you. Output: QA checklist and fixed issues.",
    },
    {
      title: "Handover & support",
      body: "Deploy to domain, hand over source, ops guide, and warranty. Output: full technical assets.",
    },
  ],

  pricingEyebrow: "Pricing",
  pricingTitle: "Landing page pricing",
  pricingNote:
    "Price is fixed before we start — no fees outside signed scope. Send a short brief for a concrete quote.",
  pricingHeaders: ["Package", "From", "Timeline", "Best for"],
  pricingRows: [
    {
      name: "Basic landing page",
      price: "{{landingPrice}}",
      timeline: "3–5 days",
      fit: "Lead capture, service promo",
    },
    {
      name: "Advanced landing page",
      price: "Scoped quote",
      timeline: "5–7 days",
      fit: "CRM forms, payments, Zalo OA",
    },
  ],
  pricingCta: "Get a quote →",

  faqEyebrow: "FAQ",
  faqTitle: "Landing page FAQs",
  faqItems: [
    {
      q: "How long does a landing page take?",
      a: "A standard Dolphin Software landing page ships in 3–5 business days after scope and content are ready. Heavier CRM or payment integrations may need 5–7 days.",
    },
    {
      q: "Is a landing page different from a website?",
      a: "Yes. A website is multi-page (about, products, blog, contact). A landing page is one page focused on one action — ideal for ads or launches. See also /services/web/.",
    },
    {
      q: "Can I edit content after handover?",
      a: "Yes. We provide a basic edit guide (text, images). If you need a full CMS for frequent updates, say so when quoting.",
    },
    {
      q: "Is it optimized for ads?",
      a: "Yes. Basic on-page SEO (meta, headings) plus Google Analytics 4 for Google Ads or Facebook Ads performance.",
    },
    {
      q: "What if I do not have content yet?",
      a: "We can help with a content outline. Deep industry copy still needs your input or an added writing scope.",
    },
    {
      q: "How much does a landing page cost?",
      a: "Basic packages start at {{landingPrice}} — UI, responsive, lead form, GA4. Advanced (CRM, payments, Zalo OA) are quoted by scope.",
    },
    {
      q: "Can you add an AI chatbot?",
      a: "Yes. Dolphin Care can sit on the page for FAQs, lead capture, and human handoff. Add it to scope as needed — see /dolphin-care/.",
    },
  ],

  closeEyebrow: "Next step",
  closeTitle: "Ready for a landing page that converts?",
  closeSupport:
    "Send a short brief — Dolphin Software replies with a plan and concrete quote, no forced package.",
  closeBullets: [
    "An approach that fits your goal",
    "Scope hints: structure, features, integrations",
    "Clear timeline and cost estimate",
  ],
  closeHint: "Usually replies within one business day.",
  contactLinks: [
    { label: "Chat on Zalo", href: ZALO },
    { label: "Email us", href: EMAIL },
    { label: "Get a quote", href: "/#contact" },
  ],
};

const ja: LandingCopy = {
  metaTitle: "ランディングページ制作 | Dolphin Software",
  metaDescription:
    "ベトナムSMB向けランディングページ — 3〜5営業日で納品、明確なCTA、コンバージョン重視。スコープ固定の見積、追加費用なし。",
  eyebrow: "サービス · ランディングページ",
  title: "中小企業向けランディングページ制作",
  lead: "Dolphin Softwareは訪問者を見込み客に変えることを唯一の目的にLPを設計します。3〜5営業日で納品、明確なCTA、全デバイス対応、納品後の運用ガイド付き。",
  fitLine:
    "向いている用途：広告キャンペーン、新サービス公開、リード獲得 — 多ページサイトは不要。",
  ctaPrimary: "見積もりを依頼",
  ctaSecondary: "料金を見る",

  whatEyebrow: "基礎",
  whatTitle: "ランディングページとは？いつ必要か？",
  whatBody:
    "ランディングページは、フォーム送信・予約・連絡・購入など一つの行動に誘導する単一ページです。多ページサイトと違い、散漫な要素を削りコンバージョンを最大化します。",
  whenTitle: "こんなときにLPを使います：",
  whenItems: [
    "Google Ads / Facebook Adsで専用の遷移先が必要",
    "新商品・新サービスで素早くリードを集めたい",
    "イベント・セミナー・季節キャンペーン",
    "本格サイト投資の前に市場を試したい",
  ],

  whyEyebrow: "選ぶ理由",
  whyTitle: "なぜDolphin Softwareのランディングページか？",
  whyIntro:
    "Dolphin Softwareは社内ITがないベトナムSMB向けのソフトスタジオです。技術用語ではなくビジネスの言葉で進めます。",
  whyItems: [
    {
      title: "速い納品",
      body: "スコープ確定後、標準LPは3〜5営業日で完成。",
    },
    {
      title: "透明な見積",
      body: "最初から固定価格。署名スコープ外の追加なし。",
    },
    {
      title: "コンバージョン重視",
      body: "目立つCTA、短いフォーム、明確な行動導線。",
    },
    {
      title: "レスポンシブ標準",
      body: "スマホ・タブレット・デスクトップで適切に表示。",
    },
    {
      title: "基本のオンページSEO",
      body: "メタタイトル・説明・見出し構造 — 広告と自然検索の土台。",
    },
    {
      title: "納品後サポート",
      body: "運用ガイドと合意期間の技術保証。",
    },
  ],

  includeEyebrow: "範囲",
  includeTitle: "Dolphin SoftwareのLPに含まれるもの",
  includeIntro: "各LPはブリーフに沿い、概ね次の項目を含みます。",
  includeGroups: [
    {
      title: "デザイン & 開発",
      items: [
        "ブランドに沿ったUI（色・フォント・ロゴ）",
        "コンバージョン向けレイアウト：ヒーロー、強み、CTA、連絡フォーム",
        "全デバイス対応 — 納品後の手直し不要",
      ],
    },
    {
      title: "技術 & 連携",
      items: [
        "表示速度の基本最適化（画像圧縮・軽いコード）",
        "リードフォーム（メールまたはCRM）",
        "Google Analytics 4 と基本イベント計測",
        "必要に応じて Zalo OA / MoMo / ZaloPay / VNPay",
      ],
    },
    {
      title: "納品 & 運用",
      items: [
        "ソースコードと所有権はお客様へ",
        "基本的な文言・画像の編集ガイド",
        "技術保証（通常1〜3か月）",
      ],
    },
  ],

  industriesEyebrow: "業種",
  industriesTitle: "どんな業種に合うか？",
  industriesIntro: "多くの業種でランディングページを納品しています。",
  industriesHeaders: ["業種", "よくある目的"],
  industries: [
    { sector: "スパ / 美容", goal: "リード獲得・予約" },
    { sector: "飲食", goal: "キャンペーン・オンライン予約" },
    { sector: "教育", goal: "講座申込・進路相談" },
    { sector: "医療 / クリニック", goal: "診察予約・相談" },
    { sector: "不動産", goal: "見込み客情報の収集" },
    { sector: "イベント", goal: "参加登録・オンラインチケット" },
  ],

  processEyebrow: "進め方",
  processTitle: "Dolphin SoftwareのLP制作プロセス",
  processSteps: [
    {
      title: "ヒアリングと目標確定",
      body: "目的・ターゲット・期限・予算を明確化。成果物：合意した課題要約と要件。",
    },
    {
      title: "提案と見積",
      body: "構成・必要機能・固定見積を提示。成果物：スコープ・タイムライン・費用が明確な提案。",
    },
    {
      title: "デザインと開発",
      body: "UI・フォーム・計測・レスポンシブ確認。成果物：早期レビュー用デモ。",
    },
    {
      title: "QAと検収",
      body: "技術・速度・多端末確認と検収。成果物：QAチェックリストと修正済み課題。",
    },
    {
      title: "納品とサポート",
      body: "ドメイン公開、ソース納品、運用ガイド、保証開始。成果物：技術資産一式。",
    },
  ],

  pricingEyebrow: "料金",
  pricingTitle: "ランディングページ料金",
  pricingNote:
    "開始前に価格固定 — 署名スコープ外の追加なし。短いブリーフで具体見積を。",
  pricingHeaders: ["プラン", "税込目安", "期間", "向き"],
  pricingRows: [
    {
      name: "基本LP",
      price: "{{landingPrice}}",
      timeline: "3〜5日",
      fit: "リード獲得・サービス告知",
    },
    {
      name: "高度LP",
      price: "スコープ見積",
      timeline: "5〜7日",
      fit: "CRM・決済・Zalo OA連携",
    },
  ],
  pricingCta: "見積もりを依頼 →",

  faqEyebrow: "FAQ",
  faqTitle: "ランディングページよくある質問",
  faqItems: [
    {
      q: "制作期間は？",
      a: "標準LPはスコープと原稿が揃ってから3〜5営業日。CRMや決済が重い場合は5〜7日になることがあります。",
    },
    {
      q: "ウェブサイトと何が違う？",
      a: "サイトは多ページ（会社紹介・商品・ブログ・連絡）。LPは一つの行動に集中する1ページ — 広告やローンチ向き。詳細は /services/web/。",
    },
    {
      q: "納品後に自分で直せる？",
      a: "はい。文言・画像の基本編集ガイドを渡します。頻繁更新用のCMSが必要なら見積時に伝えてください。",
    },
    {
      q: "広告向けに最適化される？",
      a: "はい。基本オンページSEO（メタ・見出し）とGA4で Google Ads / Facebook Ads の効果を追えます。",
    },
    {
      q: "原稿がない場合は？",
      a: "構成アウトラインの相談は可能です。業種に深い原稿はお客様提供か、執筆スコープの追加が必要です。",
    },
    {
      q: "費用はいくら？",
      a: "基本は{{landingPrice}}〜（UI・レスポンシブ・リードフォーム・GA4）。高度（CRM・決済・Zalo OA）はスコープ見積。",
    },
    {
      q: "AIチャットボットを載せられる？",
      a: "はい。Dolphin Careをページに組み込み、FAQ・リード取得・有人引き継ぎが可能。詳細は /dolphin-care/。",
    },
  ],

  closeEyebrow: "次の一歩",
  closeTitle: "効果の出るランディングページを始めませんか？",
  closeSupport:
    "短いブリーフを送ってください — 押し売りパッケージなしで、方針と具体見積を返します。",
  closeBullets: [
    "目的に合う進め方",
    "スコープ案：構成・機能・連携",
    "明確な期間と費用目安",
  ],
  closeHint: "通常は営業日中に返信します。",
  contactLinks: [
    { label: "Zaloでチャット", href: ZALO },
    { label: "メール", href: EMAIL },
    { label: "見積もり", href: "/#contact" },
  ],
};

export const landingCopy: Record<Locale, LandingCopy> = { vi, en, ja };

export function getLandingCopy(locale: Locale): LandingCopy {
  return landingCopy[locale];
}
