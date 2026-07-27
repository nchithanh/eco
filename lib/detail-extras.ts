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
      audience: "SME, startup và đội marketing cần site rõ phạm vi, ra mắt nhanh.",
      useCases: [
        "Landing campaign / ra mắt sản phẩm",
        "Corporate site đa trang + blog/CMS",
        "Site đa ngôn ngữ VI/EN/JA",
      ],
      faq: [
        {
          q: "Mất bao lâu cho một landing?",
          a: "Thường 1–3 tuần tùy nội dung và vòng review thiết kế.",
        },
        {
          q: "Có kèm CMS không?",
          a: "Có thể gắn headless CMS (vd. Strapi) để team tự cập nhật.",
        },
      ],
    },
    mobile: {
      audience: "Đội sản phẩm cần MVP app iOS/Android hoặc cross-platform.",
      useCases: [
        "App booking / consumer MVP",
        "App nội bộ vận hành cửa hàng",
        "Companion app cho web hiện có",
      ],
      faq: [
        {
          q: "Flutter hay React Native?",
          a: "Chọn theo stack đội ngũ và yêu cầu native — chúng tôi tư vấn trước khi kickoff.",
        },
        {
          q: "Có hỗ trợ lên store?",
          a: "Có checklist TestFlight / Play internal và hỗ trợ submit.",
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
  },
  en: {
    web: {
      audience: "SMEs, startups, and marketing teams who need scoped sites that ship fast.",
      useCases: [
        "Campaign / product launch landing",
        "Multi-page corporate site + CMS",
        "Multi-language VI/EN/JA sites",
      ],
      faq: [
        {
          q: "How long for a landing?",
          a: "Usually 1–3 weeks depending on content and design reviews.",
        },
        {
          q: "Can we get a CMS?",
          a: "Yes — headless CMS (e.g. Strapi) so your team can update content.",
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
  },
  ja: {
    web: {
      audience: "スコープが明確で早く公開したい SME・スタートアップ・マーケチーム向け。",
      useCases: [
        "キャンペーン / ローンチ用 LP",
        "多ページのコーポレート + CMS",
        "VI/EN/JA 多言語サイト",
      ],
      faq: [
        { q: "LP の期間は？", a: "内容とデザインレビュー次第で通常 1〜3 週間。" },
        { q: "CMS は付けられますか？", a: "ヘッドレス CMS（例: Strapi）で更新可能にできます。" },
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
  },
  de: {
    web: {
      audience: "KMUs, Startups und Marketing-Teams mit klarem Scope und schnellem Launch.",
      useCases: [
        "Campaign- / Launch-Landing",
        "Mehrseitige Corporate-Site + CMS",
        "Mehrsprachige VI/EN/JA-Sites",
      ],
      faq: [
        { q: "Dauer für ein Landing?", a: "Meist 1–3 Wochen je nach Content und Reviews." },
        { q: "CMS möglich?", a: "Ja — Headless-CMS (z. B. Strapi) für eigene Updates." },
      ],
    },
    mobile: {
      audience: "Produktteams mit iOS/Android- oder Cross-Platform-MVP.",
      useCases: [
        "Consumer-Booking-MVP",
        "Store-Ops-Companion",
        "Mobile-Companion zu bestehendem Web",
      ],
      faq: [
        { q: "Flutter oder RN?", a: "Auswahl nach Team-Stack und Native-Bedarf vor Kickoff." },
        { q: "Store-Hilfe?", a: "Ja — TestFlight/Play-Checkliste und Submit-Support." },
      ],
    },
    backend: {
      audience: "Teams mit Bedarf an stabilen APIs, Auth und Integrationen.",
      useCases: [
        "APIs für Web + Mobile",
        "Auth, Rollen, Webhooks",
        "Payments / E-Mail / Storage",
      ],
      faq: [
        { q: "Default-Stack?", a: "Node.js (NestJS/Express) + PostgreSQL — anpassbar." },
        { q: "API-Docs?", a: "OpenAPI/Endpoint-Notizen und Env-Samples bei Übergabe." },
      ],
    },
    design: {
      audience: "Owner mit Bedarf an klarer UI und sauberem Engineering-Handover.",
      useCases: [
        "Marketing-Site / App-Flows",
        "Leichte SMB-Design-Systeme",
        "Booking-/Conversion-UX",
      ],
      faq: [
        { q: "Figma?", a: "Ja — strukturierte Files, States und Assets." },
        { q: "Prototypen?", a: "Kernflows zuerst, dann visueller Feinschliff." },
      ],
    },
    integrations: {
      audience: "Unternehmen, die bestehende Systeme verbinden statt neu bauen.",
      useCases: [
        "Zalo / E-Mail / CRM-Webhooks",
        "Payment-Gateways und Abstimmung",
        "Sync von Orders/Terminen in interne Tools",
      ],
      faq: [
        { q: "Was brauchen wir von Ihnen?", a: "Sandbox-Credentials, Ist-Flow und Systemverantwortlichen." },
        { q: "Monitoring?", a: "Basis-Logging und Fehleralerts, wenn im Scope." },
      ],
    },
    agents: {
      audience: "Teams, die Workflows mit kontrollierten AI-Agents automatisieren.",
      useCases: [
        "Interne / Kunden-FAQ-Bots",
        "Dokumentensammlung und Zyklus-Summaries",
        "Tool-Calling / MCP je Umgebung",
      ],
      faq: [
        { q: "Ersetzt AI Menschen?", a: "Nein — kritische Schritte bleiben human-in-the-loop." },
        { q: "Wo läuft es?", a: "Nach Policy: Managed Cloud oder Self-Host." },
      ],
    },
  },

  zh: {
    web: {
      audience: "SMEs, startups, and marketing teams who need scoped sites that ship fast.",
      useCases: [
        "Campaign / product launch landing",
        "Multi-page corporate site + CMS",
        "Multi-language VI/EN/JA sites",
      ],
      faq: [
        {
          q: "How long for a landing?",
          a: "Usually 1–3 weeks depending on content and design reviews.",
        },
        {
          q: "Can we get a CMS?",
          a: "Yes — headless CMS (e.g. Strapi) so your team can update content.",
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
  }
};

const techExtras: L<TechExtras> = {
  vi: {
    react: {
      whenToUse: ["UI web/app component-based", "Đội đã quen JS/TS", "Cần ecosystem lớn"],
      stackFit: "Thường đi với Next.js, TypeScript, Tailwind trong các dự án Dolphin Kick.",
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
  },
  en: {
    react: {
      whenToUse: ["Component-based web/app UI", "JS/TS-friendly teams", "Large ecosystem needed"],
      stackFit: "Pairs with Next.js, TypeScript, and Tailwind on Dolphin Kick projects.",
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
  },
  ja: {
    react: {
      whenToUse: ["コンポーネント UI", "JS/TS チーム", "大きなエコシステム"],
      stackFit: "Dolphin Kick では Next.js / TypeScript / Tailwind と併用が多いです。",
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
  },
  de: {
    react: {
      whenToUse: ["Komponenten-UI", "JS/TS-Teams", "Großes Ökosystem"],
      stackFit: "Oft mit Next.js, TypeScript und Tailwind bei Dolphin Kick.",
    },
    nextjs: {
      whenToUse: ["Marketing + App in einem Codebase", "SEO / SSR wichtig", "Full-Stack React"],
      stackFit: "Standard für Studio-Websites und Dashboards.",
    },
    typescript: {
      whenToUse: ["Mittel/große Codebases", "Mehrere Devs", "Klare API-Verträge"],
      stackFit: "Standard für Frontend, NestJS und Tooling.",
    },
    tailwind: {
      whenToUse: ["Schnelles UI-Shipping", "Utility-first", "Shared Marketing + App"],
      stackFit: "Über Landings und Product-UI hinweg.",
    },
    nodejs: {
      whenToUse: ["APIs / Realtime", "Gleiche Sprache wie Frontend", "CLIs & Worker"],
      stackFit: "Basis für Express, NestJS und Automation.",
    },
    flutter: {
      whenToUse: ["Eine Multi-Platform-Codebasis", "Stark custom UI", "Native Performance"],
      stackFit: "Mobile-Wahl bei Flutter-Teams.",
    },
    "react-native": {
      whenToUse: ["React-Skills nutzen", "Schnelles Mobile-MVP", "Logik mit Web teilen"],
      stackFit: "Wenn React-Web-Teams auf Mobile gehen.",
    },
    postgresql: {
      whenToUse: ["Relationale Daten", "JSON + SQL", "Hohe Zuverlässigkeit"],
      stackFit: "Default-DB für die meisten Backends.",
    },
    docker: {
      whenToUse: ["Einheitliche Umgebungen", "CI/CD", "Microservices / Agents"],
      stackFit: "Packaging von Services und Compose-Stacks.",
    },
    nestjs: {
      whenToUse: ["Strukturierte TS-APIs", "Klare Domänenmodule", "Enterprise-ready"],
      stackFit: "Primäres Backend bei großem API-Scope.",
    },
    express: {
      whenToUse: ["Kleine APIs / Gateways", "Schnelle Prototypen", "Flexible Middleware"],
      stackFit: "Kleine Services oder schlanke HTTP-Schichten.",
    },
    strapi: {
      whenToUse: ["Headless CMS", "Editor-Self-Serve", "Multi-Channel-Frontends"],
      stackFit: "Marketing-/Blog-Content für Next.js.",
    },
  },

  zh: {
    react: {
      whenToUse: ["Component-based web/app UI", "JS/TS-friendly teams", "Large ecosystem needed"],
      stackFit: "Pairs with Next.js, TypeScript, and Tailwind on Dolphin Kick projects.",
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
  }
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
  de: {
    billiard: {
      timeline: "Ca. 3–5 Wochen für Ops-MVP (Tische + Reporting).",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Realtime status"],
    },
    badminton: {
      timeline: "Ca. 2–4 Wochen für Site + Basis-Platzbuchung.",
      stack: ["Next.js", "Tailwind", "Booking calendar", "Form / notify"],
    },
    tickets: {
      timeline: "Ca. 2–3 Wochen für Conversion-Landing + kurzen Ticket-Flow.",
      stack: ["Next.js", "Conversion funnel", "Minimal form", "Confirm screen"],
    },
    beauty: {
      timeline: "Ca. 3–4 Wochen für Servicekatalog + Slot-Booking.",
      stack: ["Next.js", "Service catalog", "Slot calendar", "Status workflow"],
    },
    cafe: {
      timeline: "Ca. 3–5 Wochen für QR-Menü + Theke/Küchen-Orderflow.",
      stack: ["Next.js", "QR per table", "Order cart", "Kitchen / counter status"],
    },
    clinic: {
      timeline: "Ca. 3–4 Wochen für Klinik-Site + Arzt/Slot-Kalender.",
      stack: ["Next.js", "Doctor calendar", "Intake form", "Reminders"],
    },
  },

  zh: {
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
  }
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
    useCasesTitle: "Use cases",
    faqTitle: "Câu hỏi thường gặp",
    whenToUseTitle: "Khi nào nên dùng",
    stackFitTitle: "Trong stack Dolphin Kick",
    timelineTitle: "Timeline tham khảo",
    stackTitle: "Stack đã dùng",
  },
  en: {
    audienceTitle: "Best for",
    useCasesTitle: "Use cases",
    faqTitle: "FAQ",
    whenToUseTitle: "When to use it",
    stackFitTitle: "In the Dolphin Kick stack",
    timelineTitle: "Reference timeline",
    stackTitle: "Stack used",
  },
  ja: {
    audienceTitle: "向いている方",
    useCasesTitle: "ユースケース",
    faqTitle: "よくある質問",
    whenToUseTitle: "こんなときに",
    stackFitTitle: "Dolphin Kick スタックでの位置",
    timelineTitle: "参考スケジュール",
    stackTitle: "使用スタック",
  },
  de: {
    audienceTitle: "Geeignet für",
    useCasesTitle: "Use Cases",
    faqTitle: "FAQ",
    whenToUseTitle: "Wann einsetzen",
    stackFitTitle: "Im Dolphin Kick Stack",
    timelineTitle: "Orientierungszeitplan",
    stackTitle: "Verwendeter Stack",
  },


  zh: {
    audienceTitle: "适合对象",
    useCasesTitle: "使用场景",
    faqTitle: "常见问题",
    whenToUseTitle: "何时使用",
    stackFitTitle: "在 Dolphin Kick 技术栈中",
    timelineTitle: "参考时间表",
    stackTitle: "所用技术栈",
  }
};

export function getDetailExtrasUi(locale: Locale): DetailExtrasUi {
  return extrasUi[locale];
}
