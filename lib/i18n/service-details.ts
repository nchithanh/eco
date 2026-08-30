import type { Locale } from "./types";

export const SERVICE_SLUGS = [
  "web",
  "mobile",
  "software",
  "design",
  "integrations",
  "agents",
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
      "Khách tìm Google không ra tiệm, hoặc vào site rồi không gọi — đó là lúc website là giải pháp đúng. Dolphin Software xây website doanh nghiệp, landing và shop với phạm vi rõ, tiến độ minh bạch, dễ mở rộng. Không phải mọi vấn đề đều bắt đầu bằng website; khi pain là tìm thấy và chuyển đổi, đây là chỗ bắt đầu.",
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
  software: {
    title: "Phát triển phần mềm theo yêu cầu",
    metaTitle: "Phát Triển Phần Mềm Theo Yêu Cầu | Dolphin Software",
    metaDescription:
      "Dolphin Software phát triển phần mềm theo yêu cầu cho doanh nghiệp: website, web app, hệ thống nội bộ, backend, API và tích hợp bên thứ ba. Phạm vi rõ ràng, bàn giao đầy đủ, hỗ trợ sau triển khai.",
    intro:
      "Phần mềm có sẵn không khớp cách anh chị đang chạy — hoặc kiến thức khách nằm trong đầu nhân viên. Dolphin xây phần mềm theo yêu cầu từ bài toán thực tế: web app, hệ thống nội bộ, backend, API, tích hợp. Không mặc định làm lại toàn bộ cái đang chạy.",
    highlightsTitle: "Dolphin Software có thể xây dựng những gì?",
    highlightsLead:
      "Dịch vụ phát triển phần mềm của Dolphin Software bao gồm các lớp cần thiết để biến một yêu cầu kinh doanh thành sản phẩm phần mềm có thể sử dụng và phát triển tiếp.",
    processTitle: "Quy trình phát triển phần mềm của Dolphin Software",
    processLead:
      "Dolphin Software bắt đầu từ bài toán và phạm vi thực tế, sau đó thiết kế, phát triển, kiểm thử và bàn giao theo từng giai đoạn rõ ràng.",
    deliverablesTitle: "Bàn giao phần mềm bao gồm những gì?",
    deliverablesLead:
      "Bạn nhận sản phẩm có thể triển khai và tiếp tục vận hành — cùng source code, tài liệu và hướng dẫn cần thiết để không phụ thuộc hoàn toàn vào Dolphin Software.",
    highlights: [
      "Website và web application — xây dựng giao diện và hệ thống phía sau phù hợp với nhu cầu kinh doanh",
      "Phần mềm quản lý và hệ thống nội bộ — dashboard, công cụ vận hành và workflow theo quy trình thực tế",
      "Backend và API — REST API, xác thực, phân quyền, xử lý dữ liệu và nền tảng cho web hoặc mobile",
      "Tích hợp hệ thống — kết nối CRM, email, thanh toán, lưu trữ, webhooks và các dịch vụ bên thứ ba",
      "Cơ sở dữ liệu và vận hành — PostgreSQL, logging và monitoring cơ bản để hệ thống có nền tảng ổn định",
    ],
    process: [
      "Làm rõ bài toán và phạm vi — xác định mục tiêu kinh doanh, người dùng, chức năng và các hệ thống cần kết nối",
      "Thiết kế giải pháp — lựa chọn kiến trúc, mô hình dữ liệu, API và luồng trải nghiệm trước khi phát triển",
      "Phát triển và tích hợp — triển khai từng phần, kết nối các dịch vụ cần thiết và kiểm tra trong quá trình xây dựng",
      "Kiểm thử, triển khai và bàn giao — hoàn thiện sản phẩm, tài liệu, môi trường và hướng dẫn vận hành",
    ],
    deliverables: [
      "Phần mềm và các service cần thiết sẵn sàng triển khai lên môi trường của bạn",
      "Source code và tài liệu kỹ thuật — để đội kỹ thuật hoặc đối tác sau này có thể tiếp tục phát triển",
      "Tài liệu API, env samples và runbook phù hợp với phạm vi dự án",
      "Hướng dẫn bàn giao và hỗ trợ kỹ thuật sau triển khai theo phạm vi đã thống nhất",
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
      "Khách, bán hàng, vận hành nằm ở nhiều hệ thống — thông tin không chảy một mạch. Dolphin gắn thanh toán MoMo / ZaloPay / VNPay, Zalo OA, SMS, email và API vào hệ thống đang chạy — an toàn, rõ luồng, dễ vận hành.",
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


};

const en: Record<ServiceSlug, ServiceDetail> = {
  web: {
    title: "Website design & development for small and mid-size businesses",
    metaTitle: "Custom website design & development | Dolphin Software",
    metaDescription:
      "Dolphin Software builds business websites, landing pages, and e-commerce sites to order — clear quotes, on-time delivery, easy to scale later. See packages.",
    intro:
      "Customers can't find you on Google, or they land and never call — that's when a website is the right fix. Dolphin Software builds business sites, landings, and shops with clear scope and a transparent timeline. Not every problem starts with a website; when the pain is being found and converting, this is where we start.",
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
  software: {
    title: "Custom software development",
    metaTitle: "Custom Software Development | Dolphin Software",
    metaDescription:
      "Dolphin Software builds custom software for businesses: websites, web apps, internal systems, backends, APIs, and third-party integrations. Clear scope, full handover, post-launch support.",
    intro:
      "Off-the-shelf software doesn't match how you run — or customer knowledge lives in staff heads. Dolphin builds custom software from the real problem: web apps, internal systems, backends, APIs, integrations. We don't rebuild a living system by default.",
    highlightsTitle: "What can Dolphin Software build?",
    highlightsLead:
      "Our custom software service covers the layers needed to turn a business requirement into usable software you can keep developing.",
    processTitle: "How Dolphin Software develops software",
    processLead:
      "We start from the real problem and scope, then design, build, test, and hand over in clear stages.",
    deliverablesTitle: "What does software handover include?",
    deliverablesLead:
      "You receive deployable software you can keep running — plus source, docs, and guidance so you are not locked into Dolphin Software.",
    highlights: [
      "Websites and web applications — UI and backend suited to the business need",
      "Management software and internal systems — dashboards, ops tools, and real workflows",
      "Backend and APIs — REST APIs, auth, roles, data handling, and a base for web or mobile",
      "System integrations — CRM, email, payments, storage, webhooks, and third-party services",
      "Database and operations — PostgreSQL with basic logging and monitoring for a stable foundation",
    ],
    process: [
      "Clarify the problem and scope — business goals, users, features, and systems to connect",
      "Design the solution — architecture, data model, APIs, and experience flows before building",
      "Build and integrate — ship in pieces, connect required services, and verify along the way",
      "Test, deploy, and hand over — finish the product, docs, environments, and ops guidance",
    ],
    deliverables: [
      "Software and required services ready to deploy on your environment",
      "Source code and technical docs — so your next team or partner can continue",
      "API docs, env samples, and a runbook matching project scope",
      "Handover guidance and post-launch technical support within the agreed scope",
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
      "Customers, sales, and ops live in separate systems — information doesn't flow. Dolphin wires MoMo / ZaloPay / VNPay, Zalo OA, SMS, email, and APIs into what you already run — securely, with clear flows.",
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


};

const ja: Record<ServiceSlug, ServiceDetail> = {
  web: {
    title: "中小企業向けオーダーメイドWebサイト制作",
    metaTitle: "オーダーメイドWebサイト制作 | Dolphin Software",
    metaDescription:
      "Dolphin Softwareは企業サイト、LP、ECサイトをオーダーメイドで制作 — 明確な見積もり、期日厳守、後から拡張しやすい。料金パッケージを見る。",
    intro:
      "Googleで店が見つからない、サイトに来ても電話しない — それがWebサイトが正しい手段のときです。Dolphinは企業サイト、LP、ショップを明確な範囲で作ります。すべての課題がWebから始まるわけではありません。見つかり、転換することが痛みなら、ここから始めます。",
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
  software: {
    title: "要件に応じたソフトウェア開発",
    metaTitle: "要件に応じたソフトウェア開発 | Dolphin Software",
    metaDescription:
      "Dolphin Softwareは企業向けにカスタムソフトウェアを開発：ウェブサイト、Webアプリ、社内システム、バックエンド、API、外部連携。範囲明確、納品完備、導入後サポート。",
    intro:
      "既製品が現場の回り方に合わない — または顧客知識がスタッフの頭の中にある。Dolphinは実課題から専用ソフトを作ります。動いているシステムを、作り直し前提にはしません。",
    highlightsTitle: "Dolphin Softwareは何を作れますか？",
    highlightsLead:
      "カスタムソフトウェア開発は、ビジネス要件を使える・続けて育てられる製品に変えるために必要なレイヤーをカバーします。",
    processTitle: "Dolphin Softwareのソフトウェア開発プロセス",
    processLead:
      "実課題と範囲から始め、設計・開発・テスト・納品を段階的に進めます。",
    deliverablesTitle: "ソフトウェア納品物は何を含みますか？",
    deliverablesLead:
      "デプロイ可能な製品と、ソース・ドキュメント・運用ガイドを納品 — Dolphin Softwareへの完全依存を避けます。",
    highlights: [
      "ウェブサイトとWebアプリケーション — ビジネスに合うUIと裏側のシステム",
      "管理ソフトと社内システム — ダッシュボード、運用ツール、実プロセスのワークフロー",
      "バックエンドとAPI — REST API、認証、権限、データ処理、Web/モバイル基盤",
      "システム連携 — CRM、メール、決済、ストレージ、Webhook、外部サービス",
      "データベースと運用 — PostgreSQL、基本ログと監視で安定した基盤",
    ],
    process: [
      "課題と範囲の明確化 — 目標、ユーザー、機能、接続すべきシステム",
      "ソリューション設計 — アーキテクチャ、データモデル、API、体験フローを先に固める",
      "開発と連携 — 部分ごとに実装し、必要なサービスを接続しながら検証",
      "テスト、導入、納品 — 製品・ドキュメント・環境・運用ガイドを整える",
    ],
    deliverables: [
      "御社環境へデプロイ可能なソフトウェアと必要なサービス",
      "ソースコードと技術ドキュメント — 次のチームやパートナーが継続できる形",
      "API文書、環境変数サンプル、プロジェクト範囲に応じた運用手順",
      "引き継ぎガイドと、合意範囲内の導入後テクニカルサポート",
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
      "顧客、販売、運用が別システムのまま — 情報が一本で流れない。DolphinはMoMo / ZaloPay / VNPay、Zalo OA、SMS、メール、APIを既存システムへ安全に接続します。",
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
