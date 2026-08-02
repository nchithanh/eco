import { themeAsset } from "@/lib/asset";
import type { Locale } from "@/lib/i18n/types";
import type { ServiceSlug } from "@/lib/i18n/service-details";
import type { TechSlug } from "@/lib/tech-stack";
import type { ThemeId } from "@/lib/theme";
import type { WorkSlug } from "@/lib/works-details";

export function serviceHero(slug: ServiceSlug, theme: ThemeId) {
  return themeAsset(`/services/${slug}/hero.jpg`, theme);
}
export function techHero(slug: TechSlug, theme: ThemeId) {
  return themeAsset(`/tech/${slug}.jpg`, theme);
}

export type FaqItem = { q: string; a: string };

export type ServiceExtras = {
  audience: string;
  useCases: string[];
  faq: FaqItem[];
};

export type TechExtras = {
  whenToUse: string[];
  stackFit: string;
};

export type WorkExtras = {
  timeline: string;
  stack: string[];
};

type L<T> = Record<Locale, Record<string, T>>;

const serviceExtras: L<ServiceExtras> = {
  vi: {
    web: {
      audience:
        "Doanh nghiệp vừa và nhỏ (SMB), startup, và đội marketing cần website hoàn chỉnh, bàn giao đúng hạn và dễ báo giá.",
      useCases: [
        "Landing page cho chiến dịch quảng cáo hoặc ra mắt sản phẩm mới",
        "Website doanh nghiệp với CMS để tự quản lý nội dung",
        "Website đa ngôn ngữ hỗ trợ VI / EN / JA cho doanh nghiệp hướng xuất khẩu hoặc khách quốc tế",
      ],
      faq: [
        {
          q: "Thiết kế website theo yêu cầu giá bao nhiêu?",
          a: "Giá phụ thuộc vào phạm vi: số trang, thiết kế tùy chỉnh hay dùng template, có CMS không, và các tích hợp như form hoặc thanh toán. Gói khởi điểm từ $38 (landing page) đến $380 (e-commerce). Báo giá chính xác được cung cấp sau khi xác nhận mục tiêu.",
        },
        {
          q: "Làm website doanh nghiệp mất bao lâu?",
          a: "Landing page thường hoàn thành trong 3–5 ngày làm việc. Website doanh nghiệp đa trang mất 7–14 ngày. Website e-commerce mất 3–4 tuần. Thời gian thực tế phụ thuộc vào mức độ phản hồi nội dung và review từ phía khách hàng.",
        },
        {
          q: "Tôi có thể tự cập nhật nội dung website sau khi bàn giao không?",
          a: "Có. Các gói Business Website trở lên bao gồm CMS headless (Strapi), cho phép đội ngũ của bạn tự thêm, sửa, xóa nội dung mà không cần lập trình viên.",
        },
        {
          q: "Dịch vụ có bao gồm SEO không?",
          a: "Tất cả các gói đều bao gồm SEO kỹ thuật nền tảng: meta tags, tối ưu tốc độ, mobile-friendly, sitemap và robots.txt. Chiến lược từ khóa và xây dựng backlink là dịch vụ bổ sung nếu bạn muốn tăng trưởng organic dài hạn.",
        },
        {
          q: "Dolphin Software có làm website đa ngôn ngữ không?",
          a: "Có. Dolphin Software hỗ trợ xây dựng website đa ngôn ngữ (Tiếng Việt / Tiếng Anh / Tiếng Nhật), phù hợp cho doanh nghiệp có khách hàng hoặc đối tác quốc tế.",
        },
        {
          q: "Tôi đang dùng website cũ — Dolphin Software có hỗ trợ nâng cấp hệ thống cũ không?",
          a: "Có. Dolphin Software đánh giá hệ thống hiện tại và đề xuất phương án nâng cấp phù hợp — từ cải thiện hiệu năng đến tái cấu trúc toàn bộ stack kỹ thuật. Liên hệ để được phân tích giải pháp miễn phí.",
        },
        {
          q: "Dolphin Software có tích hợp AI automation vào website không?",
          a: "Có. Với định vị là studio phát triển phần mềm và AI, Dolphin Software có thể tích hợp các tính năng AI automation — như chatbot, xử lý đơn hàng tự động, hoặc phân tích dữ liệu — vào website doanh nghiệp theo yêu cầu.",
        },
      ],
    },
    mobile: {
      audience:
        "Dịch vụ phát triển app của Dolphin Software phù hợp nhất cho product team đang ship MVP iOS/Android hoặc cross-platform — SMB và startup Việt Nam cần app thương mại hoặc vận hành nội bộ; product team có sẵn web muốn mở rộng sang mobile; doanh nghiệp cần app companion tích hợp backend hiện có.",
      useCases: [
        "Startup booking cần app consumer nhanh → MVP cross-platform Flutter + API đặt lịch/thanh toán → lên store trong 8–12 tuần, sẵn sàng beta",
        "Chuỗi bán lẻ cần app vận hành nội bộ → Android companion nối POS/ERP qua REST API → giảm thao tác thủ công, đồng bộ dữ liệu real-time",
        "SaaS / web platform muốn mobile companion → React Native tái sử dụng backend hiện có → ra mắt mobile channel không build lại backend",
      ],
      faq: [
        {
          q: "Flutter hay React Native — nên chọn cái nào?",
          a: "Dolphin Software chọn framework dựa trên stack hiện tại của team bạn và yêu cầu native trước khi bắt đầu dự án. Flutter phù hợp hơn khi cần UI tùy biến cao và hiệu năng đồng nhất trên cả hai platform; React Native phù hợp hơn khi team đã quen với JavaScript/TypeScript hoặc cần tích hợp sâu với module native.",
        },
        {
          q: "Dolphin Software có hỗ trợ submit lên App Store và Google Play không?",
          a: "Có. Dolphin Software cung cấp checklist đầy đủ cho TestFlight và Play internal track, hỗ trợ bạn trong toàn bộ quá trình submit — bao gồm cả xử lý feedback từ Apple/Google nếu cần review lại.",
        },
        {
          q: "Thời gian phát triển một app MVP thường mất bao lâu?",
          a: "Thông thường từ 8 đến 14 tuần tùy phạm vi, sau khi xác định xong luồng và MVP scope ở sprint đầu. Dolphin Software sẽ cung cấp timeline cụ thể sau buổi trao đổi yêu cầu ban đầu — không ước lượng chung chung.",
        },
        {
          q: "Chi phí làm app iOS/Android với Dolphin Software là bao nhiêu?",
          a: "Dolphin Software báo giá theo phạm vi dự án cụ thể, không có gói cố định áp cho mọi trường hợp. Sau buổi trao đổi yêu cầu, bạn nhận được báo giá rõ ràng — không phí ẩn, không bán thêm dịch vụ không cần thiết.",
        },
        {
          q: "App sau khi bàn giao có được hỗ trợ tiếp không?",
          a: "Có. Dolphin Software cung cấp hỗ trợ sau bàn giao cho các lỗi phát sinh sau khi launch. Nếu bạn cần nâng cấp tính năng hoặc mở rộng app, Dolphin Software có thể tiếp tục theo hình thức retainer hoặc dự án riêng.",
        },
        {
          q: "Dolphin Software có thể tích hợp AI vào ứng dụng di động không?",
          a: "Có. Với định vị là studio phát triển phần mềm và AI cho doanh nghiệp, Dolphin Software có thể tích hợp chatbot, xử lý ngôn ngữ tự nhiên, hoặc phân tích dữ liệu thông minh vào app di động theo phạm vi dự án. Xem thêm dịch vụ agent tùy chỉnh tại /custom-agent/ hoặc lộ trình AI tại /ai-transform/.",
        },
      ],
    },
    backend: {
      audience: "Team cần API vững, auth và tích hợp dịch vụ bên thứ ba.",
      useCases: [
        "API cho web + mobile",
        "Auth, phân quyền, webhook",
        "Thanh toán / email / storage",
      ],
      faq: [
        {
          q: "Stack mặc định?",
          a: "Node.js (NestJS/Express) + PostgreSQL là lựa chọn phổ biến; có thể điều chỉnh.",
        },
        {
          q: "Có tài liệu API?",
          a: "Bàn giao OpenAPI / mô tả endpoint và env sample.",
        },
      ],
    },
    design: {
      audience: "Product owner cần UI rõ ràng và handover sạch cho engineering.",
      useCases: [
        "UI marketing site / app flows",
        "Design system nhẹ cho SMB",
        "Redesign trải nghiệm đặt lịch / convert",
      ],
      faq: [
        {
          q: "Làm trên Figma?",
          a: "Có — file có tổ chức, states và assets để dev implement.",
        },
        {
          q: "Có prototype?",
          a: "Có prototype flow chính trước khi polish UI.",
        },
      ],
    },
    integrations: {
      audience: "Doanh nghiệp cần nối hệ thống sẵn có thay vì viết lại từ đầu.",
      useCases: [
        "Zalo / email / CRM webhook",
        "Payment gateway và đối soát",
        "Đồng bộ đơn hàng / lịch sang tool nội bộ",
      ],
      faq: [
        {
          q: "Cần gì từ phía khách?",
          a: "Credential sandbox, mô tả flow hiện tại và người phụ trách hệ thống.",
        },
        {
          q: "Có monitoring?",
          a: "Logging cơ bản + cảnh báo lỗi tích hợp khi thỏa thuận trong scope.",
        },
      ],
    },
    agents: {
      audience: "Team muốn tự động hóa quy trình bằng agent / AI có kiểm soát.",
      useCases: [
        "Chatbot FAQ nội bộ / khách hàng",
        "Agent gom tài liệu và tóm tắt chu kỳ",
        "Tool-calling / MCP theo môi trường",
      ],
      faq: [
        {
          q: "AI có thay hết người không?",
          a: "Không — thiết kế human-in-the-loop cho bước quan trọng.",
        },
        {
          q: "Chạy trên cloud nào?",
          a: "Theo policy khách: cloud managed hoặc self-host khi cần.",
        },
      ],
    },
    "custom-agent": {
      audience: "SME / chủ vận hành có khâu lặp rõ và muốn agent gắn nghiệp vụ thật, không chatbot kịch bản.",
      useCases: [
        "Trả lời & gom lead đa kênh theo quy trình riêng",
        "Đặt lịch / nhắc lịch gắn slot thật",
        "Báo giá hoặc soạn giấy tờ theo mẫu + duyệt người",
      ],
      faq: [
        {
          q: "Khác chatbot bán sẵn thế nào?",
          a: "Chatbot kịch bản tắc ngoài script. Agent theo yêu cầu được nạp nghiệp vụ, nối hệ thống và làm tới kết quả (lead, lịch, báo giá…) trong phạm vi đã chốt.",
        },
        {
          q: "Doanh nghiệp nhỏ có làm được không?",
          a: "Có — bắt đầu một khâu đau nhất, đo bằng số, rồi mới mở rộng. Không vẽ hệ thống đồ sộ ngay từ đầu.",
        },
        {
          q: "Có cần người trông sau bàn giao?",
          a: "Có, như nhân sự mới. Dolphin bàn giao kèm hướng dẫn; tinh chỉnh khi quy trình/giá đổi theo thỏa thuận bảo hành hoặc hạng mục riêng.",
        },
      ],
    },
  },
  en: {
    web: {
      audience:
        "SMEs, startups, and marketing teams who need scoped websites that ship fast and are easy to quote.",
      useCases: [
        "Campaign / product launch landing",
        "Business & commerce site + CMS",
        "Multi-language VI/EN/JA sites",
      ],
      faq: [
        {
          q: "How is website pricing calculated?",
          a: "By scope: page count, custom vs template design, CMS, forms/payments. See homepage packages for ranges; exact quote after goals are clear.",
        },
        {
          q: "How long does a website take?",
          a: "Landings usually 1–3 weeks; multi-page business sites a few weeks to a few months depending on content and reviews.",
        },
        {
          q: "Can we get a CMS?",
          a: "Yes — headless CMS (e.g. Strapi) so your team can update pages and posts.",
        },
        {
          q: "Is SEO included?",
          a: "Technical SEO basics (meta, performance, mobile, sitemap/robots). Keyword content and links are a follow-on if you want organic growth.",
        },
      ],
    },
    mobile: {
      audience: "Product teams shipping an iOS/Android or cross-platform MVP.",
      useCases: [
        "Consumer booking MVP",
        "Store ops companion app",
        "Mobile companion to an existing web product",
      ],
      faq: [
        {
          q: "Flutter or React Native?",
          a: "We pick based on your team stack and native needs before kickoff.",
        },
        {
          q: "Store submission help?",
          a: "Yes — TestFlight / Play internal checklist and submit support.",
        },
      ],
    },
    backend: {
      audience: "Teams that need solid APIs, auth, and third-party integrations.",
      useCases: [
        "APIs for web + mobile",
        "Auth, roles, webhooks",
        "Payments / email / storage",
      ],
      faq: [
        {
          q: "Default stack?",
          a: "Node.js (NestJS/Express) + PostgreSQL is common; we adapt as needed.",
        },
        {
          q: "API docs included?",
          a: "OpenAPI / endpoint notes and env samples at handover.",
        },
      ],
    },
    design: {
      audience: "Owners who need clear UI and clean engineering handover.",
      useCases: [
        "Marketing site / app flows",
        "Lightweight SMB design systems",
        "Booking / conversion UX redesigns",
      ],
      faq: [
        {
          q: "Figma?",
          a: "Yes — organized files, states, and assets for implementation.",
        },
        {
          q: "Prototypes?",
          a: "Core flows are prototyped before visual polish.",
        },
      ],
    },
    integrations: {
      audience: "Businesses connecting existing systems instead of rewriting everything.",
      useCases: [
        "Zalo / email / CRM webhooks",
        "Payment gateways and reconciliation",
        "Syncing orders / schedules into internal tools",
      ],
      faq: [
        {
          q: "What do you need from us?",
          a: "Sandbox credentials, current flow notes, and a system owner.",
        },
        {
          q: "Monitoring?",
          a: "Basic logging plus integration error alerts when in scope.",
        },
      ],
    },
    agents: {
      audience: "Teams automating workflows with controlled AI agents.",
      useCases: [
        "Internal / customer FAQ chatbots",
        "Doc collection and cycle summaries",
        "Tool-calling / MCP per environment",
      ],
      faq: [
        {
          q: "Does AI replace people?",
          a: "No — we keep humans in the loop for critical steps.",
        },
        {
          q: "Where does it run?",
          a: "Per your policy: managed cloud or self-hosted when required.",
        },
      ],
    },
    "custom-agent": {
      audience: "SMEs / operators with a clear repetitive job who want an agent tied to real process — not a scripted chatbot.",
      useCases: [
        "Multi-channel reply & lead capture with your rules",
        "Booking / reminders against real availability",
        "Quote or document drafts with human approval",
      ],
      faq: [
        {
          q: "How is this different from an off-the-shelf chatbot?",
          a: "Scripted bots stall outside the script. A custom agent loads your process, connects systems, and finishes outcomes (leads, bookings, quotes…) in agreed scope.",
        },
        {
          q: "Can a small business start?",
          a: "Yes — start with one painful job, measure, then expand. No giant platform on day one.",
        },
        {
          q: "Do we still need humans after handover?",
          a: "Yes for sensitive steps. Dolphin hands over an ops guide; further tuning when rules change is covered by warranty or a scoped follow-up.",
        },
      ],
    },
  },
  ja: {
    web: {
      audience: "スコープが明確で早く公開・見積もりしやすい SME・スタートアップ・マーケチーム向け。",
      useCases: [
        "キャンペーン / ローンチ用 LP",
        "企業・販促サイト + CMS",
        "VI/EN/JA 多言語サイト",
      ],
      faq: [
        {
          q: "料金の決まり方は？",
          a: "ページ数、デザイン新規/テンプレ、CMS、フォーム/決済などで決まります。ホームのパッケージが目安。目標が固まれば正式見積もりします。",
        },
        {
          q: "制作期間は？",
          a: "LPは通常1〜3週間。複数ページの企業サイトは内容とレビュー次第で数週間〜数ヶ月。",
        },
        {
          q: "CMSは付けられますか？",
          a: "ヘッドレスCMS（例: Strapi）で自社更新可能にできます。",
        },
        {
          q: "SEOは含まれますか？",
          a: "技術SEOの基礎（meta、速度、モバイル、sitemap/robots）。キーワード記事や被リンクは別フェーズです。",
        },
      ],
    },
    mobile: {
      audience: "iOS/Android またはクロスプラットフォームの MVP を出すプロダクトチーム向け。",
      useCases: [
        "予約系コンシューマー MVP",
        "店舗オペ向けコンパニオン",
        "既存 Web のモバイル版",
      ],
      faq: [
        { q: "Flutter と RN は？", a: "チームのスタックとネイティブ要件でキックオフ前に選定します。" },
        { q: "ストア申請は？", a: "TestFlight / Play 内部テストのチェックと申請支援あり。" },
      ],
    },
    backend: {
      audience: "堅牢な API・認証・外部連携が必要なチーム向け。",
      useCases: [
        "Web + Mobile 向け API",
        "認証・権限・Webhook",
        "決済 / メール / ストレージ",
      ],
      faq: [
        { q: "標準スタックは？", a: "Node.js（NestJS/Express）+ PostgreSQL が一般的。要件に合わせて調整。" },
        { q: "API ドキュメントは？", a: "OpenAPI / エンドポイント説明と env サンプルを納品。" },
      ],
    },
    design: {
      audience: "明確な UI とエンジニア向けのきれいなハンドオーバーが必要なオーナー向け。",
      useCases: [
        "マーケサイト / アプリフロー",
        "SMB 向け軽量デザインシステム",
        "予約・CV の UX 改善",
      ],
      faq: [
        { q: "Figma ですか？", a: "はい。整理されたファイル、状態、アセットを用意します。" },
        { q: "プロトタイプは？", a: "主要フローを先にプロトタイプしてからビジュアルを磨きます。" },
      ],
    },
    integrations: {
      audience: "全面作り直しではなく既存システム接続が必要な企業向け。",
      useCases: [
        "Zalo / メール / CRM Webhook",
        "決済ゲートウェイと突合",
        "注文・予定の社内ツール同期",
      ],
      faq: [
        { q: "こちらで用意するものは？", a: "サンドボックス認証情報、現行フロー、システム担当者。" },
        { q: "監視は？", a: "スコープに含めれば基本ログと連携エラー通知。" },
      ],
    },
    agents: {
      audience: "制御付き AI エージェントで業務を自動化したいチーム向け。",
      useCases: [
        "社内 / 顧客向け FAQ ボット",
        "ドキュメント収集とサイクル要約",
        "環境別の tool-calling / MCP",
      ],
      faq: [
        { q: "人は不要になりますか？", a: "いいえ。重要ステップは human-in-the-loop を残します。" },
        { q: "実行環境は？", a: "方針に応じマネージドクラウドまたはセルフホスト。" },
      ],
    },
    "custom-agent": {
      audience: "繰り返し業務が明確で、シナリオ型ボットではなく業務接続の Agent が必要な中小・現場責任者。",
      useCases: [
        "独自ルールでの多チャネル応答とリード取得",
        "実枠に基づく予約・リマインド",
        "見積や書類ドラフト＋人の承認",
      ],
      faq: [
        {
          q: "既製チャットボットとの違いは？",
          a: "シナリオ外で止まるボットと異なり、業務を取り込みシステム接続し、合意範囲で成果まで進めます。",
        },
        {
          q: "小規模でも可能？",
          a: "はい。最も痛い1業務から始め、数値で測ってから拡張します。",
        },
        {
          q: "引き渡し後も人が必要？",
          a: "重要判断は人確認。運用ガイドを渡し、ルール変更時の調整は保証または別スコープで対応します。",
        },
      ],
    },
  },

};

const techExtras: L<TechExtras> = {
  vi: {
    react: {
      whenToUse: ["UI web/app component-based", "Đội đã quen JS/TS", "Cần ecosystem lớn"],
      stackFit: "Thường đi với Next.js, TypeScript, Tailwind trong các dự án Dolphin Software.",
    },
    nextjs: {
      whenToUse: ["Marketing site + app cùng codebase", "SEO / SSR quan trọng", "Full-stack React"],
      stackFit: "Mặc định cho website & dashboard của studio.",
    },
    typescript: {
      whenToUse: ["Codebase trung / lớn", "Nhiều người cùng dev", "API contract rõ"],
      stackFit: "Chuẩn cho frontend, NestJS và script tooling.",
    },
    tailwind: {
      whenToUse: ["Ship UI nhanh", "Design system utility-first", "Marketing + app cùng ngôn ngữ style"],
      stackFit: "Dùng xuyên suốt landing và product UI.",
    },
    nodejs: {
      whenToUse: ["API / realtime", "Cùng ngôn ngữ với frontend", "CLI & worker"],
      stackFit: "Nền cho Express, NestJS và automation.",
    },
    flutter: {
      whenToUse: ["Một codebase multi-platform", "UI custom mạnh", "Performance native"],
      stackFit: "Lựa chọn mobile khi đội ưu tiên Flutter.",
    },
    "react-native": {
      whenToUse: ["Tái dùng skill React", "MVP mobile nhanh", "Chia sẻ logic với web"],
      stackFit: "Khi đội web React muốn mở rộng mobile.",
    },
    postgresql: {
      whenToUse: ["Dữ liệu quan hệ", "JSON + SQL cùng chỗ", "Cần độ tin cậy cao"],
      stackFit: "DB mặc định cho hầu hết backend sản phẩm.",
    },
    docker: {
      whenToUse: ["Môi trường đồng nhất", "CI/CD", "Deploy microservice / agent"],
      stackFit: "Đóng gói service và stack local Compose.",
    },
    nestjs: {
      whenToUse: ["API TypeScript có cấu trúc", "Module rõ domain", "Enterprise-ready"],
      stackFit: "Backend chính khi scope API lớn.",
    },
    express: {
      whenToUse: ["API nhỏ / gateway", "Prototype nhanh", "Middleware linh hoạt"],
      stackFit: "Service nhỏ hoặc lớp HTTP tối giản.",
    },
    strapi: {
      whenToUse: ["CMS headless", "Editor tự cập nhật", "Nhiều kênh frontend"],
      stackFit: "Nội dung marketing / blog cho Next.js.",
    },
    aws: {
      whenToUse: ["Cần cloud managed", "Scale theo traffic", "Nhiều dịch vụ (compute/DB/storage)"],
      stackFit: "Nền deploy production và managed data cho sản phẩm Dolphin Software.",
    },
    kubernetes: {
      whenToUse: ["Nhiều service container", "Cần rollout/rollback chuẩn", "GitOps / platform team"],
      stackFit: "Khi hệ thống vượt 1–2 container Compose và cần orchestration.",
    },
    grafana: {
      whenToUse: ["Cần dashboard vận hành", "Alert theo metrics/logs", "Nhiều datasource"],
      stackFit: "Lớp quan sát kèm Prometheus/Loki hoặc cloud metrics.",
    },
    elasticsearch: {
      whenToUse: ["Full-text search", "Gom log/event lớn", "Analytics gần realtime"],
      stackFit: "Search sản phẩm hoặc log pipeline khi PostgreSQL không đủ.",
    },
    redis: {
      whenToUse: ["Cache hot-path", "Session / rate limit", "Queue nhẹ"],
      stackFit: "Đi kèm API Nest/Express + PostgreSQL.",
    },
    terraform: {
      whenToUse: ["Nhiều môi trường cloud", "Muốn IaC review được", "Tránh click-ops"],
      stackFit: "Định nghĩa AWS/K8s và dịch vụ kèm theo một cách lặp lại.",
    }
  },
  en: {
    react: {
      whenToUse: ["Component-based web/app UI", "JS/TS-friendly teams", "Large ecosystem needed"],
      stackFit: "Pairs with Next.js, TypeScript, and Tailwind on Dolphin Software projects.",
    },
    nextjs: {
      whenToUse: ["Marketing + app in one codebase", "SEO / SSR matters", "Full-stack React"],
      stackFit: "Default for studio websites and dashboards.",
    },
    typescript: {
      whenToUse: ["Medium/large codebases", "Multi-dev collaboration", "Clear API contracts"],
      stackFit: "Standard across frontend, NestJS, and tooling.",
    },
    tailwind: {
      whenToUse: ["Fast UI shipping", "Utility-first design systems", "Shared marketing + app styling"],
      stackFit: "Used across landings and product UI.",
    },
    nodejs: {
      whenToUse: ["APIs / realtime", "Same language as frontend", "CLIs & workers"],
      stackFit: "Foundation for Express, NestJS, and automation.",
    },
    flutter: {
      whenToUse: ["One multi-platform codebase", "Highly custom UI", "Native performance"],
      stackFit: "Mobile choice when teams prefer Flutter.",
    },
    "react-native": {
      whenToUse: ["Reuse React skills", "Fast mobile MVP", "Share logic with web"],
      stackFit: "When React web teams expand to mobile.",
    },
    postgresql: {
      whenToUse: ["Relational data", "JSON + SQL together", "High reliability"],
      stackFit: "Default DB for most product backends.",
    },
    docker: {
      whenToUse: ["Consistent environments", "CI/CD", "Microservices / agents"],
      stackFit: "Packages services and local Compose stacks.",
    },
    nestjs: {
      whenToUse: ["Structured TypeScript APIs", "Clear domain modules", "Enterprise-ready"],
      stackFit: "Primary backend when API scope is large.",
    },
    express: {
      whenToUse: ["Small APIs / gateways", "Fast prototypes", "Flexible middleware"],
      stackFit: "Small services or minimal HTTP layers.",
    },
    strapi: {
      whenToUse: ["Headless CMS", "Editor self-serve updates", "Multi-channel frontends"],
      stackFit: "Marketing / blog content for Next.js.",
    },
    aws: {
      whenToUse: ["Need managed cloud", "Scale with traffic", "Compute/DB/storage building blocks"],
      stackFit: "Production deploy and managed data foundation for Dolphin Software products.",
    },
    kubernetes: {
      whenToUse: ["Many containerized services", "Standard rollouts/rollbacks", "GitOps / platform teams"],
      stackFit: "When the system outgrows one or two Compose containers.",
    },
    grafana: {
      whenToUse: ["Ops dashboards", "Metric/log alerts", "Multiple datasources"],
      stackFit: "Observability layer with Prometheus/Loki or cloud metrics.",
    },
    elasticsearch: {
      whenToUse: ["Full-text search", "Large log/event volumes", "Near-real-time analytics"],
      stackFit: "Product search or log pipelines when PostgreSQL is not enough.",
    },
    redis: {
      whenToUse: ["Hot-path cache", "Sessions / rate limits", "Lightweight queues"],
      stackFit: "Pairs with Nest/Express APIs and PostgreSQL.",
    },
    terraform: {
      whenToUse: ["Multi-env cloud", "Reviewable IaC", "Avoid click-ops"],
      stackFit: "Defines repeatable AWS/K8s and related services.",
    }
  },
  ja: {
    react: {
      whenToUse: ["コンポーネント UI", "JS/TS チーム", "大きなエコシステム"],
      stackFit: "Dolphin Software では Next.js / TypeScript / Tailwind と併用が多いです。",
    },
    nextjs: {
      whenToUse: ["マーケとアプリを一体で", "SEO / SSR が重要", "フルスタック React"],
      stackFit: "スタジオのサイトとダッシュボードの標準です。",
    },
    typescript: {
      whenToUse: ["中〜大規模コード", "複数人開発", "明確な API 契約"],
      stackFit: "フロント・NestJS・ツール共通の標準です。",
    },
    tailwind: {
      whenToUse: ["UI を速く出す", "Utility-first", "マーケとアプリで共通"],
      stackFit: "LP からプロダクト UI まで使用します。",
    },
    nodejs: {
      whenToUse: ["API / リアルタイム", "フロントと同じ言語", "CLI / Worker"],
      stackFit: "Express・NestJS・自動化の基盤です。",
    },
    flutter: {
      whenToUse: ["マルチプラットフォーム", "カスタム UI", "ネイティブ性能"],
      stackFit: "Flutter 志向のモバイル案件で採用します。",
    },
    "react-native": {
      whenToUse: ["React スキル再利用", "モバイル MVP", "Web とロジック共有"],
      stackFit: "React Web チームのモバイル展開向けです。",
    },
    postgresql: {
      whenToUse: ["関係データ", "JSON + SQL", "高い信頼性"],
      stackFit: "プロダクト backend の標準 DB です。",
    },
    docker: {
      whenToUse: ["環境の統一", "CI/CD", "マイクロサービス / Agent"],
      stackFit: "サービス梱包と Compose に使います。",
    },
    nestjs: {
      whenToUse: ["構造化 TS API", "ドメイン分割", "エンタープライズ向け"],
      stackFit: "API スコープが大きいときの主 backend です。",
    },
    express: {
      whenToUse: ["小さな API / GW", "試作", "柔軟なミドルウェア"],
      stackFit: "小サービスや薄い HTTP 層向けです。",
    },
    strapi: {
      whenToUse: ["ヘッドレス CMS", "編集者セルフ更新", "多チャネル配信"],
      stackFit: "Next.js 向けマーケ / ブログコンテンツに。",
    },
    aws: {
      whenToUse: ["Need managed cloud", "Scale with traffic", "Compute/DB/storage building blocks"],
      stackFit: "Production deploy and managed data foundation for Dolphin Software products.",
    },
    kubernetes: {
      whenToUse: ["Many containerized services", "Standard rollouts/rollbacks", "GitOps / platform teams"],
      stackFit: "When the system outgrows one or two Compose containers.",
    },
    grafana: {
      whenToUse: ["Ops dashboards", "Metric/log alerts", "Multiple datasources"],
      stackFit: "Observability layer with Prometheus/Loki or cloud metrics.",
    },
    elasticsearch: {
      whenToUse: ["Full-text search", "Large log/event volumes", "Near-real-time analytics"],
      stackFit: "Product search or log pipelines when PostgreSQL is not enough.",
    },
    redis: {
      whenToUse: ["Hot-path cache", "Sessions / rate limits", "Lightweight queues"],
      stackFit: "Pairs with Nest/Express APIs and PostgreSQL.",
    },
    terraform: {
      whenToUse: ["Multi-env cloud", "Reviewable IaC", "Avoid click-ops"],
      stackFit: "Defines repeatable AWS/K8s and related services.",
    }
  },

};

const workExtras: L<WorkExtras> = {
  vi: {
    billiard: {
      timeline: "Khoảng 3–5 tuần cho MVP ops (tùy số bàn và báo cáo).",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Realtime status"],
    },
    badminton: {
      timeline: "Khoảng 2–4 tuần cho site + booking lịch cơ bản.",
      stack: ["Next.js", "Tailwind", "Booking calendar", "Form / notify"],
    },
    tickets: {
      timeline: "Khoảng 2–3 tuần cho landing convert + luồng đặt vé ngắn.",
      stack: ["Next.js", "Conversion funnel", "Form tối giản", "Confirm screen"],
    },
    beauty: {
      timeline: "Khoảng 3–4 tuần cho catalog dịch vụ + slot booking.",
      stack: ["Next.js", "Service catalog", "Slot calendar", "Status workflow"],
    },
    cafe: {
      timeline: "Khoảng 3–5 tuần cho menu QR + luồng order tới quầy/bếp.",
      stack: ["Next.js", "QR per table", "Order cart", "Kitchen / counter status"],
    },
    clinic: {
      timeline: "Khoảng 3–4 tuần cho site phòng khám + lịch bác sĩ/slot.",
      stack: ["Next.js", "Doctor calendar", "Intake form", "Reminders"],
    },
  },
  en: {
    billiard: {
      timeline: "About 3–5 weeks for an ops MVP (tables + reporting).",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Realtime status"],
    },
    badminton: {
      timeline: "About 2–4 weeks for site + basic court booking.",
      stack: ["Next.js", "Tailwind", "Booking calendar", "Form / notify"],
    },
    tickets: {
      timeline: "About 2–3 weeks for a conversion landing + short ticket flow.",
      stack: ["Next.js", "Conversion funnel", "Minimal form", "Confirm screen"],
    },
    beauty: {
      timeline: "About 3–4 weeks for service catalog + slot booking.",
      stack: ["Next.js", "Service catalog", "Slot calendar", "Status workflow"],
    },
    cafe: {
      timeline: "About 3–5 weeks for QR menu + counter/kitchen order flow.",
      stack: ["Next.js", "QR per table", "Order cart", "Kitchen / counter status"],
    },
    clinic: {
      timeline: "About 3–4 weeks for clinic site + doctor/slot calendar.",
      stack: ["Next.js", "Doctor calendar", "Intake form", "Reminders"],
    },
  },
  ja: {
    billiard: {
      timeline: "Ops MVP はおおよそ 3〜5 週間（テーブル数・レポート次第）。",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Realtime status"],
    },
    badminton: {
      timeline: "サイト + 基本予約はおおよそ 2〜4 週間。",
      stack: ["Next.js", "Tailwind", "Booking calendar", "Form / notify"],
    },
    tickets: {
      timeline: "CV 向け LP + 短いチケット導線はおおよそ 2〜3 週間。",
      stack: ["Next.js", "Conversion funnel", "Minimal form", "Confirm screen"],
    },
    beauty: {
      timeline: "メニュー + スロット予約はおおよそ 3〜4 週間。",
      stack: ["Next.js", "Service catalog", "Slot calendar", "Status workflow"],
    },
    cafe: {
      timeline: "QRメニュー + 厨房/カウンター注文はおおよそ 3〜5 週間。",
      stack: ["Next.js", "QR per table", "Order cart", "Kitchen / counter status"],
    },
    clinic: {
      timeline: "クリニックサイト + 医師スロットはおおよそ 3〜4 週間。",
      stack: ["Next.js", "Doctor calendar", "Intake form", "Reminders"],
    },
  },

};

export function getServiceExtras(
  locale: Locale,
  slug: ServiceSlug,
): ServiceExtras {
  return serviceExtras[locale][slug];
}

export function getTechExtras(locale: Locale, slug: TechSlug): TechExtras {
  return techExtras[locale][slug];
}

export function getWorkExtras(locale: Locale, slug: WorkSlug): WorkExtras {
  return workExtras[locale][slug];
}

export type DetailExtrasUi = {
  audienceTitle: string;
  useCasesTitle: string;
  faqTitle: string;
  whenToUseTitle: string;
  stackFitTitle: string;
  timelineTitle: string;
  stackTitle: string;
};

const extrasUi: Record<Locale, DetailExtrasUi> = {
  vi: {
    audienceTitle: "Phù hợp với",
    useCasesTitle: "Use cases điển hình",
    faqTitle: "Câu hỏi thường gặp",
    whenToUseTitle: "Khi nào nên dùng",
    stackFitTitle: "Trong stack KU THANH",
    timelineTitle: "Timeline tham khảo",
    stackTitle: "Stack đã dùng",
  },
  en: {
    audienceTitle: "Best for",
    useCasesTitle: "Use cases",
    faqTitle: "FAQ",
    whenToUseTitle: "When to use it",
    stackFitTitle: "In the KU THANH stack",
    timelineTitle: "Reference timeline",
    stackTitle: "Stack used",
  },
  ja: {
    audienceTitle: "向いている方",
    useCasesTitle: "ユースケース",
    faqTitle: "よくある質問",
    whenToUseTitle: "こんなときに",
    stackFitTitle: "KU THANH スタックでの位置",
    timelineTitle: "参考スケジュール",
    stackTitle: "使用スタック",
  },


};

export function getDetailExtrasUi(locale: Locale): DetailExtrasUi {
  return extrasUi[locale];
}
