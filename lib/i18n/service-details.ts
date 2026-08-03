import type { Locale } from "./types";

export const SERVICE_SLUGS = [
  "web",
  "mobile",
  "backend",
  "design",
  "integrations",
  "agents",
  "custom-agent",
] as const;
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

export type ServiceDetail = {
  title: string;
  intro: string;
  /** Optional SEO title (browser tab / Google). Falls back to title. */
  metaTitle?: string;
  metaDescription?: string;
  /** Optional section title overrides (e.g. web AEO headers). */
  highlightsTitle?: string;
  processTitle?: string;
  deliverablesTitle?: string;
  /** Optional lead sentences for AEO section extraction. */
  highlightsLead?: string;
  processLead?: string;
  deliverablesLead?: string;
  highlights: string[];
  process: string[];
  deliverables: string[];
};

export type ServiceDetailUi = {
  back: string;
  highlightsTitle: string;
  processTitle: string;
  deliverablesTitle: string;
  cta: string;
  packagesCta: string;
  notFound: string;
};

const ui: Record<Locale, ServiceDetailUi> = {
  vi: {
    back: "← Về trang chủ",
    highlightsTitle: "Bạn nhận được gì",
    processTitle: "Quy trình làm việc",
    deliverablesTitle: "Bàn giao",
    cta: "Nhận báo giá miễn phí",
    packagesCta: "Xem các gói dịch vụ",
    notFound: "Không tìm thấy dịch vụ này.",
  },
  en: {
    back: "← Back to home",
    highlightsTitle: "What you get",
    processTitle: "How we work",
    deliverablesTitle: "Deliverables",
    cta: "Get a quote",
    packagesCta: "See packages",
    notFound: "This service was not found.",
  },
  ja: {
    back: "← ホームへ戻る",
    highlightsTitle: "得られるもの",
    processTitle: "進め方",
    deliverablesTitle: "納品物",
    cta: "見積もりを依頼",
    packagesCta: "料金パッケージを見る",
    notFound: "このサービスは見つかりませんでした。",
  },
};

const vi: Record<ServiceSlug, ServiceDetail> = {
  web: {
    title: "Thiết kế website theo yêu cầu cho doanh nghiệp vừa và nhỏ",
    metaTitle: "Thiết kế website theo yêu cầu | Dolphin Software",
    metaDescription:
      "Dolphin Software thiết kế website doanh nghiệp, landing page và e-commerce theo yêu cầu — báo giá rõ ràng, bàn giao đúng hạn, dễ mở rộng về sau. Xem gói dịch vụ.",
    intro:
      "Dolphin Software xây dựng website doanh nghiệp, landing page, và cửa hàng trực tuyến — phạm vi rõ ràng, tiến độ minh bạch, dễ báo giá và mở rộng về sau. Phù hợp cho SMB, startup, và đội marketing cần ra hàng nhanh mà không cần am hiểu kỹ thuật.",
    highlightsTitle: "Bạn nhận được gì từ dịch vụ thiết kế web của Dolphin Software?",
    highlightsLead:
      "Mỗi website do Dolphin Software xây dựng đều được thiết kế hướng đến chuyển đổi — không chỉ đẹp về hình thức mà còn hoạt động hiệu quả cho doanh nghiệp.",
    processTitle: "Quy trình làm việc",
    processLead:
      "Dolphin Software theo quy trình theo từng milestone — minh bạch, gọn gàng, không kéo dài không cần thiết.",
    deliverablesTitle: "Bàn giao bao gồm những gì?",
    deliverablesLead:
      "Phù hợp nhất cho: doanh nghiệp vừa và nhỏ (SMB), startup, và đội marketing cần website hoàn chỉnh, bàn giao đúng hạn và dễ báo giá.",
    highlights: [
      "Landing page & marketing site tối ưu chuyển đổi, rõ thông điệp",
      "Website doanh nghiệp đa trang cho profile công ty, dịch vụ, SEO dài hạn",
      "CMS headless (Strapi) để đội ngũ tự cập nhật nội dung mà không cần lập trình viên",
      "Nền tảng SEO kỹ thuật bao gồm meta tags, tốc độ tải, mobile, sitemap/robots",
    ],
    process: [
      "Khám phá mục tiêu — xác định sitemap, cấu trúc nội dung, và yêu cầu kỹ thuật",
      "Thiết kế UI — vòng review ngắn, phản hồi nhanh, tránh lãng phí thời gian",
      "Phát triển theo milestone — build bằng Next.js / React, bàn giao từng phần để kiểm tra",
      "QA, ra mắt, và bàn giao vận hành — bao gồm hướng dẫn sử dụng và hỗ trợ sau launch",
    ],
    deliverables: [
      "Source code và deploy production",
      "Tài liệu cấu trúc CMS / nội dung",
      "Checklist ra mắt và hỗ trợ ngắn sau launch",
    ],
  },
  mobile: {
    title: "Phát triển ứng dụng mobile – iOS, Android & cross-platform",
    metaTitle: "Phát triển ứng dụng mobile | Dolphin Software",
    metaDescription:
      "Dolphin Software phát triển app iOS/Android và cross-platform bằng Flutter, React Native cho doanh nghiệp vừa và nhỏ tại Việt Nam. Báo giá rõ ràng, bàn giao đúng hạn.",
    intro:
      "Dolphin Software xây dựng ứng dụng di động iOS/Android và cross-platform bằng Flutter hoặc React Native — ưu tiên trải nghiệm người dùng, phát hành ổn định và tích hợp API sạch. Phù hợp cho doanh nghiệp vừa và nhỏ, startup và product team tại Việt Nam cần ra mắt MVP nhanh, đúng hạn, không phát sinh chi phí ẩn.",
    highlightsTitle: "Bạn nhận được gì khi làm app với Dolphin Software?",
    highlightsLead:
      "Dolphin Software cung cấp đầy đủ năng lực phát triển app di động — từ thiết kế luồng UX, lập trình tính năng lõi, đến hỗ trợ submit lên store — trong một gói dịch vụ rõ ràng, không bán thừa.",
    processTitle: "Cách Dolphin Software triển khai dự án app",
    processLead:
      "Dolphin Software làm việc theo quy trình sprint có cấu trúc, giúp SMB và startup kiểm soát tiến độ và chi phí ở từng giai đoạn — không bị surprise ở cuối dự án.",
    deliverablesTitle: "Bàn giao dự án app bao gồm những gì?",
    deliverablesLead:
      "Sau khi hoàn thành, Dolphin Software bàn giao đầy đủ tài liệu và source code để team của bạn có thể tự vận hành hoặc tiếp tục phát triển.",
    highlights: [
      "Flutter hoặc React Native phù hợp với stack và yêu cầu native của team bạn",
      "Navigation, xác thực (auth), offline-friendly patterns được xây dựng theo chuẩn từ đầu",
      "Tích hợp API, thanh toán, push notifications — không cần team riêng",
      "Build pipeline và checklist phát hành lên store (App Store / Google Play)",
    ],
    process: [
      "Xác định luồng và phạm vi MVP — cùng bạn làm rõ yêu cầu, loại bỏ phần không cần thiết cho v1",
      "Mobile UI kit + prototype lõi — bàn giao bản prototype có thể click trước khi lập trình",
      "Phát triển sprint, demo định kỳ — bạn thấy tiến độ thực tế mỗi sprint, không chờ đến cuối",
      "Device testing, UAT, hỗ trợ submit store — kiểm thử trên thiết bị thật, hỗ trợ toàn bộ quá trình submit",
    ],
    deliverables: [
      "App builds (TestFlight / internal track) sẵn sàng để test và submit",
      "Source code + hướng dẫn chạy local — không bị lock-in vào Dolphin Software",
      "Tài liệu tích hợp API phía app — rõ ràng cho developer kế tiếp tiếp quản",
    ],
  },
  backend: {
    title: "Backend & tích hợp hệ thống",
    intro:
      "API, auth, thanh toán và kết nối dịch vụ bên thứ ba — nền tảng vững để web/app scale mà không “vá” lung tung.",
    highlights: [
      "REST / API rõ contract và error handling",
      "Auth (JWT / session) và phân quyền",
      "Tích hợp payment, email, storage, webhook",
      "PostgreSQL + logging / monitoring cơ bản",
    ],
    process: [
      "Phân tích domain và biên hệ thống",
      "Thiết kế API + data model",
      "Implement theo module / sprint",
      "Test tích hợp, tài liệu và bàn giao ops",
    ],
    deliverables: [
      "Service backend deploy được",
      "OpenAPI / tài liệu endpoint",
      "Env sample + runbook ngắn",
    ],
  },
  design: {
    title: "UI/UX & bàn giao",
    intro:
      "Thiết kế giao diện và design system — để sản phẩm đẹp, nhất quán và đội engineering triển khai nhanh, ít đoán mò.",
    highlights: [
      "Research nhanh + user flow",
      "UI high-fidelity trên Figma",
      "Design system / component library",
      "Handover sạch: spacing, states, assets",
    ],
    process: [
      "Workshop yêu cầu và đối tượng dùng",
      "Wireframe → UI polish theo vòng feedback",
      "Chuẩn hóa token và component",
      "Handover + hỗ trợ trong giai đoạn build",
    ],
    deliverables: [
      "File Figma có tổ chức",
      "Specs / redlines cho key screens",
      "Export icon/assets và guideline ngắn",
    ],
  },
  integrations: {
    title: "Tích hợp dịch vụ bên thứ ba",
    intro:
      "Gắn thanh toán MoMo / ZaloPay / VNPay, Zalo OA, SMS, email và các API khác vào hệ thống hiện có — an toàn, rõ luồng, dễ vận hành.",
    highlights: [
      "Thanh toán: MoMo, ZaloPay, VNPay, Stripe…",
      "Zalo OA / Messaging / webhook realtime",
      "SMS, email, eKYC, logistics tùy nhu cầu",
      "Retry, idempotency, logging và đối soát",
    ],
    process: [
      "Audit hệ thống hiện tại và chọn cổng phù hợp",
      "Thiết kế luồng thanh toán / callback / hoàn tiền",
      "Implement + sandbox test với đối tác",
      "Go-live, monitoring và bàn giao ops",
    ],
    deliverables: [
      "Module tích hợp chạy trên staging/production",
      "Tài liệu luồng + env / credential checklist",
      "Runbook xử lý lỗi thanh toán / webhook",
    ],
  },
  agents: {
    title: "Hệ sinh thái agent cho business",
    intro:
      "Xây context theo nghiệp vụ doanh nghiệp, gắn MCP và tool nội bộ — để team vibe coding / AI workflow nhanh hơn, đúng domain hơn.",
    highlights: [
      "Business context / knowledge base cho agent",
      "Tích hợp MCP servers và tool nội bộ",
      "Workflow agent hỗ trợ coding, CS, ops",
      "Guardrails: quyền truy cập, audit, prompt policy",
    ],
    process: [
      "Map nghiệp vụ, nguồn dữ liệu và use-case agent",
      "Thiết kế context layer + MCP / tool connectors",
      "Prototype agent workflow và đánh giá chất lượng",
      "Hardening, tài liệu và bàn giao vận hành",
    ],
    deliverables: [
      "Agent / MCP stack chạy được theo môi trường",
      "Context pack theo business + guideline dùng",
      "Checklist bảo mật và mở rộng tool mới",
    ],
  },

  "custom-agent": {
    title: "AI Agent theo yêu cầu",
    intro:
      "Không phải chatbot kịch bản bán sẵn. Dolphin nạp nghiệp vụ thật của bạn — quy trình, bảng giá, chính sách — nối hệ thống đang chạy (CRM, Zalo, lịch, thanh toán) để agent tự nhận việc và làm tới kết quả đo được.",
    highlights: [
      "Nạp nghiệp vụ riêng: quy trình, giá, cách xưng hô, ngoại lệ",
      "Nối hệ thống đang dùng — không bắt đổi cả bộ máy",
      "Một agent gánh một khâu rõ: lead, lịch, báo giá, nhắc việc…",
      "Human-in-the-loop cho bước nhạy cảm; có log và chỉnh sau bàn giao",
    ],
    process: [
      "Soi luồng việc thật — chọn khâu lặp / đốt người nhất trước",
      "Nạp nghiệp vụ + quy tắc + nguồn dữ liệu cần thiết",
      "Nối tool / API / kênh (CRM, Zalo, lịch…) trong phạm vi đã chốt",
      "Chạy thử trên việc thật, đo số, tinh chỉnh rồi mở rộng",
    ],
    deliverables: [
      "Agent / workflow chạy trên môi trường thỏa thuận",
      "Tài liệu nghiệp vụ đã nạp + hướng dẫn vận hành ngắn",
      "Checklist bảo mật, quyền truy cập và mở rộng khâu tiếp",
    ],
  },
};

const en: Record<ServiceSlug, ServiceDetail> = {
  web: {
    title: "Website design & development",
    metaTitle: "Custom website design & development | Dolphin Software",
    metaDescription:
      "Dolphin Software builds business websites, landing pages, and e-commerce sites to order — clear quotes, on-time delivery, easy to scale later. See packages.",
    intro:
      "Dolphin Software builds business websites, landing pages, and online stores — clear scope, transparent timeline, easy to quote and extend later. Fit for SMBs, startups, and marketing teams who need to ship fast without deep technical knowledge.",
    highlightsTitle: "What you get from Dolphin Software's website service?",
    highlightsLead:
      "Every website built by Dolphin Software is designed for conversion — not just good looks but real business performance.",
    processTitle: "How we work",
    processLead:
      "Dolphin Software follows a milestone-driven process — transparent, lean, no unnecessary delays.",
    deliverablesTitle: "What's included in handover?",
    deliverablesLead:
      "Best fit for: small to mid-sized businesses (SMBs), startups, and marketing teams who need a complete website, on-time delivery, and easy quotes.",
    highlights: [
      "Landing pages & marketing sites optimized for conversion and clear messaging",
      "Multi-page business websites for company profile, services, and long-term SEO",
      "Headless CMS (Strapi) so your team can update content without developers",
      "Technical SEO foundation including meta tags, load speed, mobile, and sitemap/robots",
    ],
    process: [
      "Discover goals — define sitemap, content structure, and technical requirements",
      "UI design — short review loops, fast feedback, avoid wasting time",
      "Build by milestone — Next.js / React, deliver in stages for review",
      "QA, launch, and ops handover — includes usage docs and post-launch support",
    ],
    deliverables: [
      "Source code and production deploy",
      "CMS / content structure documentation",
      "Launch checklist and short post-launch support",
    ],
  },
  mobile: {
    title: "Mobile app development – iOS, Android & cross-platform",
    metaTitle: "Mobile app development | Dolphin Software",
    metaDescription:
      "Dolphin Software develops iOS/Android and cross-platform apps using Flutter, React Native for small to mid-sized businesses in Vietnam. Clear quotes, on-time delivery.",
    intro:
      "Dolphin Software builds iOS/Android and cross-platform mobile apps using Flutter or React Native — prioritizing user experience, stable releases, and clean API integration. Fit for small to mid-sized businesses, startups, and product teams in Vietnam who need to launch MVP fast, on time, with no hidden costs.",
    highlightsTitle: "What you get when you build an app with Dolphin Software?",
    highlightsLead:
      "Dolphin Software provides full mobile app development capabilities — from UX flow design, core feature development, to store submission support — in one clear package, no upselling.",
    processTitle: "How Dolphin Software runs app projects",
    processLead:
      "Dolphin Software works in structured sprint process, helping SMBs and startups control timeline and cost at every stage — no surprises at the end of the project.",
    deliverablesTitle: "What's included in app project handover?",
    deliverablesLead:
      "After completion, Dolphin Software hands over full documentation and source code so your team can operate or continue development independently.",
    highlights: [
      "Flutter or React Native to fit your team's stack and native requirements",
      "Navigation, auth, offline-friendly patterns built to standard from the start",
      "API integration, payments, push notifications — no separate team needed",
      "Build pipeline and store release checklist (App Store / Google Play)",
    ],
    process: [
      "Define flow and MVP scope — clarify requirements with you, remove unnecessary parts for v1",
      "Mobile UI kit + core prototype — deliver clickable prototype before coding",
      "Sprint development, regular demos — you see real progress every sprint, no waiting until the end",
      "Device testing, UAT, store submit support — test on real devices, support full submission process",
    ],
    deliverables: [
      "App builds (TestFlight / internal track) ready to test and submit",
      "Source code + local run guide — no lock-in to Dolphin Software",
      "App-side API integration documentation — clear for next developer to take over",
    ],
  },
  backend: {
    title: "Backend & system integration",
    intro:
      "APIs, auth, payments, and third-party connections — a foundation that scales without endless patches.",
    highlights: [
      "REST / APIs with clear contracts and errors",
      "Auth (JWT / session) and authorization",
      "Payments, email, storage, webhooks",
      "PostgreSQL plus basic logging / monitoring",
    ],
    process: [
      "Map domain boundaries and integrations",
      "Design API + data model",
      "Implement module by module",
      "Integration tests, docs, and ops handover",
    ],
    deliverables: [
      "Deployable backend services",
      "OpenAPI / endpoint documentation",
      "Env samples + short runbook",
    ],
  },
  design: {
    title: "UI/UX & handover",
    intro:
      "Interfaces and design systems — so the product looks consistent and engineering can ship without guessing.",
    highlights: [
      "Lightweight research + user flows",
      "High-fidelity UI in Figma",
      "Design system / component library",
      "Clean handover: spacing, states, assets",
    ],
    process: [
      "Workshop requirements and audiences",
      "Wireframes → polished UI with feedback loops",
      "Tokens and components standardization",
      "Handover and support during build",
    ],
    deliverables: [
      "Organized Figma file",
      "Specs / redlines for key screens",
      "Exported assets and a short guideline",
    ],
  },
  integrations: {
    title: "Third-party service integration",
    intro:
      "Wire MoMo / ZaloPay / VNPay, Zalo OA, SMS, email, and other APIs into your existing system — securely, with clear flows and operable runbooks.",
    highlights: [
      "Payments: MoMo, ZaloPay, VNPay, Stripe…",
      "Zalo OA / messaging / realtime webhooks",
      "SMS, email, eKYC, logistics as needed",
      "Retries, idempotency, logging, reconciliation",
    ],
    process: [
      "Audit your stack and pick the right providers",
      "Design payment / callback / refund flows",
      "Implement + sandbox test with partners",
      "Go-live, monitoring, and ops handover",
    ],
    deliverables: [
      "Integration modules on staging/production",
      "Flow docs + env / credential checklist",
      "Runbook for payment / webhook failures",
    ],
  },
  agents: {
    title: "Business agent ecosystem",
    intro:
      "Build business-aware context, MCP connectors, and internal tools — so your team can vibe-code and run AI workflows faster, on-domain.",
    highlights: [
      "Business context / knowledge base for agents",
      "MCP servers and internal tool integration",
      "Agent workflows for coding, CS, and ops",
      "Guardrails: access control, audit, prompt policy",
    ],
    process: [
      "Map business processes, data, and agent use-cases",
      "Design context layer + MCP / tool connectors",
      "Prototype workflows and evaluate quality",
      "Harden, document, and hand over operations",
    ],
    deliverables: [
      "Runnable agent / MCP stack per environment",
      "Business context pack + usage guideline",
      "Security checklist and path to add new tools",
    ],
  },

  "custom-agent": {
    title: "Custom AI agents built to order",
    intro:
      "Not an off-the-shelf scripted chatbot. Dolphin loads your real operations — process, pricing, policies — and connects systems you already run (CRM, messaging, calendar, payments) so the agent takes work and finishes measurable outcomes.",
    highlights: [
      "Business rules packed in: process, pricing, tone, exceptions",
      "Connect current tools — no full stack rip-and-replace",
      "One agent owns one clear job: leads, booking, quotes, follow-ups…",
      "Human-in-the-loop for sensitive steps; logs and post-handover tuning",
    ],
    process: [
      "Map the real workflow — pick the most repetitive pain first",
      "Load business rules, data sources, and success criteria",
      "Wire tools / APIs / channels in agreed scope",
      "Pilot on live work, measure, refine, then expand",
    ],
    deliverables: [
      "Running agent / workflow in the agreed environment",
      "Loaded business pack + short ops guide",
      "Security / access checklist and path for the next job",
    ],
  },
};

const ja: Record<ServiceSlug, ServiceDetail> = {
  web: {
    title: "中小企業向けオーダーメイドWebサイト制作",
    metaTitle: "オーダーメイドWebサイト制作 | Dolphin Software",
    metaDescription:
      "Dolphin Softwareは企業サイト、LP、ECサイトをオーダーメイドで制作 — 明確な見積もり、期日厳守、後から拡張しやすい。料金パッケージを見る。",
    intro:
      "Dolphin Softwareは企業サイト、LP、オンラインストアを構築します — 範囲が明確で、進捗が透明、見積もりしやすく後から拡張できる形で。SMB、スタートアップ、技術知識がなくても速く公開したいマーケチーム向けです。",
    highlightsTitle: "Dolphin SoftwareのWebサイト制作サービスで得られるもの",
    highlightsLead:
      "Dolphin Softwareが構築する全てのWebサイトはコンバージョンを重視した設計 — 見た目だけでなくビジネスに実際に効果をもたらします。",
    processTitle: "進め方",
    processLead:
      "Dolphin Softwareはマイルストーン駆動のプロセス — 透明で無駄がなく、不要な遅延がありません。",
    deliverablesTitle: "納品物に含まれるもの",
    deliverablesLead:
      "最適な対象：中小企業（SMB）、スタートアップ、完成したWebサイトを期日通り、見積もりしやすい形で必要とするマーケチーム。",
    highlights: [
      "コンバージョン最適化されたLP & マーケティングサイト、明確なメッセージ",
      "企業プロフィール、サービス、長期SEO向けの多ページ企業サイト",
      "ヘッドレスCMS（Strapi）でチームが開発者なしでコンテンツ更新可能",
      "meta tags、読み込み速度、モバイル、sitemap/robotsを含む技術SEO基盤",
    ],
    process: [
      "目標の把握 — サイトマップ、コンテンツ構造、技術要件を定義",
      "UI設計 — 短いレビューサイクル、素早いフィードバック、時間の無駄を回避",
      "マイルストーンごとに開発 — Next.js / Reactで構築、段階的に納品して確認",
      "QA、公開、運用引き継ぎ — 使い方ドキュメントとローンチ後サポートを含む",
    ],
    deliverables: [
      "ソースコードと本番デプロイ",
      "CMS / コンテンツ構造ドキュメント",
      "ローンチチェックリストと短期ローンチ後サポート",
    ],
  },
  mobile: {
    title: "モバイルアプリ開発 – iOS、Android & クロスプラットフォーム",
    metaTitle: "モバイルアプリ開発 | Dolphin Software",
    metaDescription:
      "Dolphin SoftwareはベトナムでFlutter、React Nativeを使用したiOS/Android & クロスプラットフォームアプリを開発。明確な見積もり、期日厳守。",
    intro:
      "Dolphin SoftwareはFlutterまたはReact Nativeを使用したiOS/Androidおよびクロスプラットフォームモバイルアプリを構築 — ユーザー体験、安定したリリース、クリーンなAPI連携を優先します。ベトナムで速くMVPを、期日通り、隠れたコストなしでローンチしたい中小企業、スタートアップ、プロダクトチーム向けです。",
    highlightsTitle: "Dolphin Softwareでアプリを作ると得られるもの",
    highlightsLead:
      "Dolphin Softwareは完全なモバイルアプリ開発能力を提供 — UXフロー設計、コア機能開発、ストア申請サポートまで — 一つの明確なパッケージで、アップセルなし。",
    processTitle: "Dolphin Softwareのアプリプロジェクト進め方",
    processLead:
      "Dolphin Softwareは構造化されたスプリントプロセスで作業し、SMBとスタートアップが各段階でスケジュールとコストを管理できるようサポート — プロジェクト終了時のサプライズなし。",
    deliverablesTitle: "アプリプロジェクト納品物に含まれるもの",
    deliverablesLead:
      "完了後、Dolphin Softwareは完全なドキュメントとソースコードを引き渡すため、チームが独立して運用または開発を継続できます。",
    highlights: [
      "チームのスタックとネイティブ要件に合わせたFlutterまたはReact Native",
      "ナビゲーション、認証、オフライン対応パターンを最初から標準に構築",
      "API連携、決済、プッシュ通知 — 別チーム不要",
      "ビルドパイプラインとストアリリースチェックリスト（App Store / Google Play）",
    ],
    process: [
      "フローとMVP範囲を定義 — 要件を明確にし、v1に不要な部分を削除",
      "モバイルUIキット + コアプロトタイプ — コーディング前にクリック可能なプロトタイプを納品",
      "スプリント開発、定期デモ — 毎スプリントで実際の進捗を確認、終わりまで待たない",
      "実機テスト、UAT、ストア申請サポート — 実機でテスト、申請プロセス全体をサポート",
    ],
    deliverables: [
      "テストと申請準備ができたアプリビルド（TestFlight / internal track）",
      "ソースコード + ローカル起動ガイド — Dolphin Softwareへのロックインなし",
      "アプリ側API連携ドキュメント — 次の開発者が引き継ぐために明確",
    ],
  },
  backend: {
    title: "バックエンド & システム連携",
    intro:
      "API、認証、決済、外部連携 — 場当たり的な継ぎ接ぎではなく、スケールできる基盤を作ります。",
    highlights: [
      "契約とエラーが明確なREST / API",
      "認証（JWT / session）と権限",
      "決済・メール・ストレージ・Webhook",
      "PostgreSQL + 基本ログ / 監視",
    ],
    process: [
      "ドメイン境界と連携の整理",
      "API + データモデル設計",
      "モジュール単位で実装",
      "結合テスト、ドキュメント、運用引き継ぎ",
    ],
    deliverables: [
      "デプロイ可能なバックエンド",
      "OpenAPI / エンドポイント文書",
      "環境変数サンプル + 短い運用手順",
    ],
  },
  design: {
    title: "UI/UX & 引き渡し",
    intro:
      "UIとデザインシステム — 見た目の一貫性と、開発が迷わないハンドオーバーを両立します。",
    highlights: [
      "軽量リサーチ + ユーザーフロー",
      "Figmaでの高精細UI",
      "デザインシステム / コンポーネント",
      "余白・状態・アセットまで整理した引き渡し",
    ],
    process: [
      "要件と対象ユーザーのワークショップ",
      "ワイヤー → UI磨き込み",
      "トークンとコンポーネント標準化",
      "引き渡しと実装フェーズの伴走",
    ],
    deliverables: [
      "整理されたFigmaファイル",
      "主要画面のスペック / レッドライン",
      "アセット書き出しと短いガイドライン",
    ],
  },
  integrations: {
    title: "外部サービス連携",
    intro:
      "MoMo / ZaloPay / VNPay、Zalo OA、SMS、メールなどを既存システムへ安全に接続 — フローを明確にし、運用しやすい形で実装します。",
    highlights: [
      "決済: MoMo、ZaloPay、VNPay、Stripe…",
      "Zalo OA / メッセージ / Webhook",
      "SMS・メール・eKYC・物流など必要に応じて",
      "リトライ、冪等、ログ、突合",
    ],
    process: [
      "現行システムの監査とプロバイダ選定",
      "決済 / コールバック / 返金フロー設計",
      "実装 + サンドボックステスト",
      "本番投入、監視、運用引き継ぎ",
    ],
    deliverables: [
      "ステージング / 本番で動く連携モジュール",
      "フロー文書 + 環境変数 / 認証チェックリスト",
      "決済 / Webhook障害のランブック",
    ],
  },
  agents: {
    title: "ビジネス向けエージェント生態系",
    intro:
      "業務コンテキスト、MCP、社内ツールを整え — チームがドメインに沿って vibe coding / AI ワークフローを速く回せる基盤を作ります。",
    highlights: [
      "業務コンテキスト / ナレッジベース",
      "MCPサーバーと社内ツール連携",
      "コーディング・CS・Ops向けエージェント",
      "ガードレール: 権限、監査、プロンプト方針",
    ],
    process: [
      "業務・データ・エージェント用途の整理",
      "コンテキスト層 + MCP / ツール設計",
      "ワークフロー試作と品質評価",
      "ハードニング、文書化、運用引き渡し",
    ],
    deliverables: [
      "環境ごとに動く agent / MCP スタック",
      "業務コンテキストパック + 利用ガイド",
      "セキュリティチェックとツール拡張手順",
    ],
  },

  "custom-agent": {
    title: "要件に合わせたカスタム AI Agent",
    intro:
      "既製のシナリオ型チャットボットではありません。業務・価格・ポリシーを取り込み、既存システム（CRM、メッセージ、予約、決済）へ接続し、エージェントが作業を受けて測定可能な成果まで進めます。",
    highlights: [
      "業務ルールの実装：手順・価格・トーン・例外",
      "現行ツールへ接続 — 全面刷新は不要",
      "1エージェントが1業務を担当：リード、予約、見積、フォロー…",
      "重要ステップは人確認、ログと引き渡し後の調整あり",
    ],
    process: [
      "実フローを可視化し、最も繰り返しの多い箇所から選定",
      "業務ルールとデータソース、成功指標を投入",
      "合意範囲でツール / API / チャネルを接続",
      "本番相当で試験し、数値で測り、改善してから拡張",
    ],
    deliverables: [
      "合意環境で動くエージェント / ワークフロー",
      "投入済み業務パックと短い運用ガイド",
      "権限・セキュリティチェックと次業務への拡張パス",
    ],
  },
};


const detailsByLocale: Record<Locale, Record<ServiceSlug, ServiceDetail>> = {
  vi,
  en,
  ja,
};

export function getServiceDetailUi(locale: Locale): ServiceDetailUi {
  return ui[locale];
}

export function getServiceDetail(
  locale: Locale,
  slug: ServiceSlug,
): ServiceDetail {
  return detailsByLocale[locale][slug];
}
