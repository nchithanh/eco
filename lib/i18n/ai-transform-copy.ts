import type { Locale } from "@/lib/i18n/types";

export type AiTransformCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  support: string;
  audienceLine: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trustLine: string;
  compareEyebrow: string;
  compareTitle: string;
  compareSupport: string;
  offShelfTitle: string;
  offShelfItems: string[];
  customTitle: string;
  customItems: string[];
  whenEyebrow: string;
  whenTitle: string;
  whenSupport: string;
  whenItems: { title: string; body: string }[];
  whatWeBuildEyebrow: string;
  whatWeBuildTitle: string;
  whatWeBuildSupport: string;
  whatWeBuildItems: { title: string; body: string }[];
  processEyebrow: string;
  processTitle: string;
  processSupport: string;
  processSteps: { title: string; body: string }[];
  agentEyebrow: string;
  agentTitle: string;
  agentSupport: string;
  agentFit: string;
  agentItems: string[];
  agentNote: string;
  useCasesEyebrow: string;
  useCasesTitle: string;
  useCasesSupport: string;
  useCases: { title: string; body: string }[];
  industriesEyebrow: string;
  industriesTitle: string;
  industriesSupport: string;
  industries: { name: string; body: string }[];
  roiEyebrow: string;
  roiTitle: string;
  roiSupport: string;
  roiItems: { title: string; body: string }[];
  govEyebrow: string;
  govTitle: string;
  govSupport: string;
  govItems: string[];
  proofEyebrow: string;
  proofTitle: string;
  proofSupport: string;
  proofTypeLabel: string;
  proofNote: string;
  proofAgents: { title: string; body: string }[];
  faqEyebrow: string;
  faqTitle: string;
  faqItems: { q: string; a: string }[];
  closeEyebrow: string;
  closeTitle: string;
  closeSupport: string;
  closeCta: string;
  closeLinks: { label: string; href: string }[];
  closeTrust: string;
};

const vi: AiTransformCopy = {
  metaTitle: "Lộ Trình Triển Khai AI cho Doanh Nghiệp | Dolphin Software",
  metaDescription:
    "Dolphin Software tư vấn chuyển đổi AI cho SMB Việt Nam: kiểm toán quy trình, ưu tiên use-case, pilot có số đo, agent tùy chỉnh — báo giá minh bạch, không phí ẩn.",
  eyebrow: "Enterprise AI transformation",
  headline:
    "Chuyển Đổi AI cho Doanh Nghiệp: Lộ Trình Triển Khai [[Có Kiểm Soát]]",
  support:
    "Chuyển đổi AI trong vận hành không bắt đầu bằng việc mua phần mềm — mà bắt đầu bằng việc hiểu đúng quy trình nào đang đốt tiền và thời gian của bạn. Dolphin Software rà soát quy trình thực tế, xác định 1–2 việc ưu tiên, thiết kế AI agent phù hợp, và đo kết quả trước khi nhân rộng. Lộ trình theo từng cột mốc — bắt đầu nhỏ, mở rộng sau khi có bằng chứng.",
  audienceLine:
    "Phù hợp với: SMB Việt Nam muốn triển khai AI có kiểm soát, không rủi ro, đo được ROI ngay từ pilot đầu tiên.",
  ctaPrimary: "Nhận lộ trình sơ bộ",
  ctaSecondary: "Xem Dolphin Care",
  trustLine: "Quy trình trước tool · Đo bằng số · Human-in-the-loop",
  compareEyebrow: "Operating reality",
  compareTitle: "AI Seats vs Chuyển Đổi AI Thực Sự: Đâu Là [[Khác Biệt]]?",
  compareSupport:
    "Mua ChatGPT hay Gemini cho cả team không phải là chuyển đổi AI. Chuyển đổi AI thực sự nghĩa là gắn máy vào đúng luồng vận hành của doanh nghiệp — có hệ thống, có số đo, có người phê duyệt ở những bước nhạy cảm.",
  offShelfTitle: "Seats / Công cụ rải rác",
  offShelfItems: [
    "Mỗi người dùng AI theo cách riêng — không chuẩn hóa được, không đo được giờ tiết kiệm",
    "AI không thấy CRM, tồn kho, hay quy trình — chỉ tồn tại trong một ô chat",
    "Chi phí cố định tăng; năng suất và chất lượng thường đứng yên",
    "Dễ tin AI quá mức hoặc dùng sai — lỗi xuất hiện sau khi khách hàng đã thấy",
  ],
  customTitle: "Chuyển đổi AI theo lộ trình (Cách Dolphin làm)",
  customItems: [
    "Vẽ lại quy trình: bước nào giữ người, bước nào giao máy",
    "Gắn AI agent vào việc lặp lại — kết nối với hệ thống doanh nghiệp đang dùng",
    "Pilot một luồng; đo leads/giờ/lỗi trước khi mở rộng",
    "Người phê duyệt các bước nhạy cảm; có log, bàn giao, và tinh chỉnh sau triển khai",
  ],
  whenEyebrow: "When it matters",
  whenTitle: "Ba Dấu Hiệu “Có AI Rồi” Mà Vẫn [[Tắc]]",
  whenSupport:
    "Nếu bạn nhận ra một trong ba tình huống dưới đây, đây là lúc cần lộ trình — không phải thêm công cụ.",
  whenItems: [
    {
      title: "Công cụ không kết nối",
      body: "Bot ở đây, CRM ở kia, Excel ở chỗ khác — mọi kết nối đều là copy-paste thủ công.",
    },
    {
      title: "AI mua xong, việc vẫn tắc",
      body: "Đã mua seats, đã training — nhưng leads vẫn rơi, lịch hẹn vẫn gọi tay, báo cáo vẫn là “hỏa hoạn” cuối tháng.",
    },
    {
      title: "Không đo được ROI",
      body: "Không nêu được tiết kiệm bao nhiêu giờ, giảm bao nhiêu lỗi — chỉ thấy hóa đơn AI tăng mỗi tháng.",
    },
  ],
  whatWeBuildEyebrow: "What we implement",
  whatWeBuildTitle: "Dolphin [[Xây Gì]] Trong Lộ Trình Chuyển Đổi AI?",
  whatWeBuildSupport:
    "Dolphin không chỉ tư vấn doanh nghiệp dùng AI — mà thiết kế và triển khai hệ thống AI như một phần của lộ trình có kiểm soát. Các mục dưới đây là khả năng tiêu biểu trong quá trình chuyển đổi, không phải sản phẩm tách riêng.",
  whatWeBuildItems: [
    {
      title: "AI Agents",
      body: "Custom agents được thiết kế cho từng workflow và vai trò cụ thể.",
    },
    {
      title: "AI Automation",
      body: "Tự động hóa các bước lặp lại trong quy trình vận hành.",
    },
    {
      title: "AI Integration",
      body: "Kết nối AI với CRM, chat, lịch và các hệ thống doanh nghiệp hiện có.",
    },
  ],
  processEyebrow: "How Dolphin Software works",
  processTitle: "Lộ Trình Triển Khai AI Có Kiểm Soát — [[5 Bước]] Cụ Thể",
  processSupport:
    "Dolphin Software triển khai AI transformation theo lộ trình 5 bước, mỗi bước có đầu ra rõ ràng. Doanh nghiệp chỉ mở rộng sau khi pilot cho kết quả đo được.",
  processSteps: [
    {
      title: "Bước 1 — Kiểm toán quy trình vận hành (AI Readiness Audit)",
      body: "Lập bản đồ luồng khách hàng, đơn hàng, và nội bộ. Xác định điểm đốt người và điểm gãy dữ liệu. Đánh giá mức độ sẵn sàng triển khai AI của từng quy trình.",
    },
    {
      title: "Bước 2 — Chọn 1–2 use case ưu tiên",
      body: "Không tự động hóa sự mơ hồ. Ưu tiên việc lặp lại, quy tắc rõ ràng, thời gian hoàn vốn nhanh. Dolphin Software sử dụng khung ưu tiên use-case để tránh lãng phí nguồn lực vào những chỗ AI chưa phù hợp.",
    },
    {
      title: "Bước 3 — Thiết kế human–machine + tích hợp hệ thống",
      body: "Xác định ai phê duyệt gì; AI agent/workflow được kết nối với CRM, chat, lịch, thanh toán trong phạm vi cam kết. Custom AI agent là một building block trong bước này — không phải sản phẩm độc lập.",
    },
    {
      title: "Bước 4 — Pilot trên dữ liệu thực",
      body: "Chạy thật, đo thật, sửa quy trình mới nghiêm túc trước khi nhân bản sang luồng khác.",
    },
    {
      title: "Bước 5 — Nhân rộng có kiểm soát",
      body: "Lặp lại cho use case tiếp theo; bàn giao vận hành, quyền truy cập, và checklist mở rộng cho đội ngũ nội bộ.",
    },
  ],
  agentEyebrow: "Building block",
  agentTitle: "Custom AI Agent — Một Building Block Trong [[Lộ Trình]]",
  agentSupport:
    "Custom AI agent là gì? Đây là một workflow AI được xây dựng theo đúng quy trình của doanh nghiệp — kết nối với hệ thống thực (CRM, email, calendar, spreadsheet), thực thi các bước lặp lại tự động, và chuyển giao cho người khi gặp trường hợp ngoại lệ.",
  agentFit:
    "Custom AI agent phù hợp nhất cho doanh nghiệp có quy trình rõ ràng và công việc lặp lại hàng ngày. Ngược lại, nếu quy trình còn mơ hồ hoặc chưa được chuẩn hóa, Dolphin Software sẽ ưu tiên bước kiểm toán và thiết kế quy trình trước khi xây dựng agent.",
  agentItems: [
    "Phân tích và chuẩn hóa quy trình trước khi tự động hóa",
    "Tích hợp với hệ thống doanh nghiệp đang dùng (không yêu cầu thay nền tảng)",
    "Human-in-the-loop: người phê duyệt ở những bước nhạy cảm",
    "Bàn giao đầy đủ: tài liệu, quyền truy cập, hướng dẫn vận hành",
    "Không vendor lock-in — doanh nghiệp sở hữu workflow sau bàn giao",
  ],
  agentNote:
    "Nếu bạn cần AI hỗ trợ chăm sóc khách hàng trực tiếp tại website (FAQ tự động, booking, xử lý yêu cầu thường gặp), Dolphin Software cung cấp giải pháp chuyên biệt tại /dolphin-care/ — thiết kế riêng cho on-site customer support, không trùng với lộ trình AI transformation ở trang này. Custom AI agent là một building block trong lộ trình này, không phải sản phẩm tách riêng.",
  useCasesEyebrow: "Use cases",
  useCasesTitle: "Ứng Dụng Thực Tế trong [[Vận Hành]] SMB",
  useCasesSupport:
    "Các khu vực dưới đây là điểm bắt đầu phổ biến cho chuyển đổi AI. Phạm vi cụ thể phụ thuộc quy trình và dữ liệu của từng doanh nghiệp — không phải cam kết kết quả cố định.",
  useCases: [
    {
      title: "Sales",
      body: "Capture và phân loại lead, nhắc follow-up, trả lời đa kênh theo quy tắc đã thống nhất.",
    },
    {
      title: "Customer Support",
      body: "FAQ theo kịch bản, định tuyến yêu cầu, bàn giao người khi vượt phạm vi agent.",
    },
    {
      title: "Operations",
      body: "Tổng hợp báo cáo, nhắc lịch/công việc lặp, giảm copy-paste giữa các hệ thống.",
    },
    {
      title: "Internal Knowledge",
      body: "Tra cứu tài liệu nội bộ có kiểm soát — hỗ trợ onboarding và hỏi quy trình.",
    },
  ],
  industriesEyebrow: "Entry points",
  industriesTitle: "Điểm Khởi Đầu [[Phổ Biến]] cho SMB",
  industriesSupport:
    "Doanh nghiệp không cần “AI ở khắp nơi” ngay từ ngày đầu. Dưới đây là những điểm vào phổ biến nhất mà Dolphin Software đã triển khai cho SMB Việt Nam:",
  industries: [
    {
      name: "Sales & Leads",
      body: "Capture–qualify lead, nhắc deal, trả lời đa kênh nhất quán.",
    },
    {
      name: "Chăm sóc & đặt lịch",
      body: "FAQ tự động, đặt lịch hẹn, nhắc nhở gắn với lịch thực.",
    },
    {
      name: "Content & web ops",
      body: "Cập nhật nội dung/SEO lặp lại với bước phê duyệt.",
    },
    {
      name: "Báo cáo & vận hành",
      body: "Tổng hợp dữ liệu rời rạc vào một vòng Collect → Govern.",
    },
    {
      name: "HR / nội bộ",
      body: "Sàng lọc hồ sơ, nhắc nhở, checklist — khi quy tắc đã rõ.",
    },
  ],
  roiEyebrow: "ROI",
  roiTitle: "Khung Đo ROI — Biết Bạn Được Gì [[Trước Khi]] Nhân Rộng",
  roiSupport:
    "Dolphin Software xây dựng ROI framework ngay từ bước thiết kế, không phải sau khi triển khai. Trước mỗi pilot, doanh nghiệp và Dolphin cam kết rõ ba chỉ số:",
  roiItems: [
    {
      title: "Giờ tiết kiệm/tuần",
      body: "Đo trực tiếp trên workflow được tự động hóa.",
    },
    {
      title: "Tỷ lệ lỗi giảm",
      body: "So sánh trước và sau pilot trên cùng luồng dữ liệu.",
    },
    {
      title: "Thời gian hoàn vốn dự kiến",
      body: "Tính dựa trên chi phí pilot và tiết kiệm thực tế.",
    },
  ],
  govEyebrow: "Governance",
  govTitle: "AI Governance — Ai Kiểm Soát Gì Khi AI [[Vận Hành]]?",
  govSupport:
    "AI governance là tập hợp các quy tắc xác định ai phê duyệt gì, khi nào AI dừng lại để chờ người, và làm thế nào để audit lại quyết định của AI. Dolphin Software tích hợp governance vào từng workflow ngay từ bước thiết kế — không phải bổ sung sau.",
  govItems: [
    "Human-in-the-loop bắt buộc ở các bước nhạy cảm (thanh toán, cam kết pháp lý, thông tin khách hàng)",
    "Log đầy đủ — mọi hành động của agent đều có thể truy vết",
    "Quyền truy cập được bàn giao cho đội ngũ nội bộ sau triển khai",
    "Không vendor lock-in — doanh nghiệp toàn quyền kiểm soát sau bàn giao",
  ],
  proofEyebrow: "Internal proof",
  proofTitle: "Dolphin [[Builds With AI]]",
  proofSupport:
    "Dolphin áp dụng AI agent workflow vào chính hoạt động nội bộ — từ điều phối công việc, sản xuất nội dung, thiết kế đến phát triển software. Đây là bằng chứng năng lực nội bộ đang xây dựng, không phải case study khách hàng.",
  proofTypeLabel: "Internal",
  proofNote:
    "Hệ thống đang được phát triển theo từng giai đoạn — dùng để điều phối strategy, content, design và software development trong đội ngũ Dolphin.",
  proofAgents: [
    {
      title: "Overview Agent",
      body: "Điều phối chiến lược và phân công công việc giữa các agent.",
    },
    {
      title: "Content Agent",
      body: "Hỗ trợ sản xuất và chuẩn hóa nội dung trong luồng nội bộ.",
    },
    {
      title: "Designer Agent",
      body: "Hỗ trợ thiết kế trong quy trình làm việc nội bộ.",
    },
    {
      title: "Developer Agent",
      body: "Hỗ trợ phát triển software trong quy trình nội bộ.",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Câu Hỏi Thường Gặp về Triển Khai AI cho [[Doanh Nghiệp]]",
  faqItems: [
    {
      q: "Chuyển đổi AI khác mua ChatGPT seats như thế nào?",
      a: "Seats là công cụ cá nhân — mỗi người dùng theo cách riêng, không kết nối với hệ thống, không đo được kết quả tổng thể. Chuyển đổi AI gắn máy vào đúng quy trình vận hành của doanh nghiệp, có tích hợp hệ thống, có người phê duyệt, và có số đo rõ ràng.",
    },
    {
      q: "Doanh nghiệp có phải chuyển đổi toàn bộ cùng một lúc không?",
      a: "Không. Dolphin Software ưu tiên 1–2 việc đang gây đau nhất, pilot với số đo thực, rồi mới mở rộng — không có mega-project không kiểm soát được.",
    },
    {
      q: "Custom AI agent liên quan đến lộ trình AI như thế nào?",
      a: "Custom AI agent thường là một building block trong lộ trình — được xây dựng ở Bước 3 sau khi quy trình đã được kiểm toán và use case đã được ưu tiên. Lộ trình AI transformation bao gồm cả agent, tích hợp hệ thống, governance, và ROI framework — không chỉ riêng agent, và agent không phải sản phẩm tách riêng.",
    },
    {
      q: "SMB nhỏ có thể bắt đầu được không?",
      a: "Được — nếu quy trình đủ rõ ràng và có ít nhất một việc lặp lại đang đốt người. Phạm vi triển khai được thiết kế theo quy mô thực tế của doanh nghiệp, không bán thừa, không platform giả tạo.",
    },
    {
      q: "Dolphin Care khác gì với AI transformation?",
      a: "Dolphin Care là giải pháp AI chăm sóc khách hàng trực tiếp tại website — xử lý FAQ, booking, và yêu cầu thường gặp theo thời gian thực. AI transformation (trang này) là lộ trình chiến lược toàn diện cho vận hành nội bộ và đa quy trình. Hai dịch vụ có thể kết hợp, nhưng phục vụ mục tiêu khác nhau. Xem /dolphin-care/.",
    },
    {
      q: "Chi phí triển khai AI transformation là bao nhiêu?",
      a: "Dolphin Software báo giá minh bạch theo phạm vi thực tế sau buổi tư vấn quy trình — không phí ẩn, không gói cố định áp cho mọi doanh nghiệp. Chi phí phụ thuộc vào độ phức tạp của quy trình, số use case pilot, và mức độ tích hợp hệ thống cần thiết.",
    },
  ],
  closeEyebrow: "Start",
  closeTitle: "Bắt Đầu Với Một [[Quy Trình Thực Tế]]",
  closeSupport:
    "Dolphin Software xác định điểm gãy và phác thảo lộ trình sơ bộ: bắt đầu từ đâu, đo gì, các cột mốc nào. Không có magic trên slide, không cam kết mơ hồ.",
  closeCta: "Liên hệ Dolphin Software",
  closeLinks: [
    { label: "Tìm hiểu về Dolphin Care", href: "/dolphin-care/" },
    { label: "Về chúng tôi", href: "/about/" },
  ],
  closeTrust:
    "Báo giá minh bạch · Không phí ẩn · Hỗ trợ sau bàn giao · Không vendor lock-in",
};

const en: AiTransformCopy = {
  metaTitle: "AI Implementation Roadmap for Business | Dolphin Software",
  metaDescription:
    "Dolphin Software advises AI transformation for Vietnamese SMBs: process audit, use-case priority, measured pilots, custom agents — transparent quotes, no hidden fees.",
  eyebrow: "Enterprise AI transformation",
  headline:
    "AI Transformation for Business: a [[Controlled]] Implementation Roadmap",
  support:
    "Operational AI transformation does not start by buying software — it starts by understanding which processes burn your money and time. Dolphin Software reviews real workflows, picks 1–2 priorities, designs fitting AI agents, and measures results before scaling. A milestone roadmap — start small, expand after proof.",
  audienceLine:
    "Best for: Vietnamese SMBs that want controlled AI rollout, low risk, and measurable ROI from the first pilot.",
  ctaPrimary: "Get a rough roadmap",
  ctaSecondary: "See Dolphin Care",
  trustLine: "Process before tools · Measure in numbers · Human-in-the-loop",
  compareEyebrow: "Operating reality",
  compareTitle: "AI Seats vs Real AI Transformation: What’s the [[Difference]]?",
  compareSupport:
    "Buying ChatGPT or Gemini for the whole team is not AI transformation. Real transformation means wiring machines into your company's operating flows — with system integrations, metrics, and human approval on sensitive steps.",
  offShelfTitle: "Seats / scattered tools",
  offShelfItems: [
    "Everyone uses AI differently — hard to standardize or measure hours saved",
    "AI never sees CRM, stock, or process — it only lives in a chat box",
    "Fixed cost rises; productivity and quality often stay flat",
    "Easy to over-trust or misuse — errors show up after customers see them",
  ],
  customTitle: "AI transformation by roadmap (How Dolphin works)",
  customItems: [
    "Redraw the process: which steps stay human, which go to machines",
    "Attach AI agents to repetitive work — connect systems you already run",
    "Pilot one flow; measure leads/hours/errors before expanding",
    "Humans approve sensitive steps; logs, handover, and post-launch tuning",
  ],
  whenEyebrow: "When it matters",
  whenTitle: "Three Signs You “Have AI” but Still [[Stall]]",
  whenSupport:
    "If you recognize one of these situations, you need a roadmap — not another tool.",
  whenItems: [
    {
      title: "Tools don’t connect",
      body: "Bot here, CRM there, Excel elsewhere — every join is manual copy-paste.",
    },
    {
      title: "AI bought, work still stuck",
      body: "Seats and training done — leads still drop, booking still by phone, reports still month-end fire drills.",
    },
    {
      title: "No measurable ROI",
      body: "You can’t name hours saved or errors cut — only a rising AI bill each month.",
    },
  ],
  whatWeBuildEyebrow: "What we implement",
  whatWeBuildTitle: "What Dolphin [[Builds]] in an AI Transformation Roadmap",
  whatWeBuildSupport:
    "Dolphin does not only advise businesses to use AI — we design and implement AI systems as part of a controlled transformation process. The items below are capabilities inside that process, not separate products.",
  whatWeBuildItems: [
    {
      title: "AI Agents",
      body: "Custom agents designed for specific workflows and roles.",
    },
    {
      title: "AI Automation",
      body: "Automating repetitive steps in operating processes.",
    },
    {
      title: "AI Integration",
      body: "Connecting AI to CRM, chat, calendars, and systems you already run.",
    },
  ],
  processEyebrow: "How Dolphin Software works",
  processTitle: "A Controlled AI Implementation Roadmap — [[5 Concrete]] Steps",
  processSupport:
    "Dolphin Software runs AI transformation in 5 steps, each with a clear output. You expand only after the pilot shows measured results.",
  processSteps: [
    {
      title: "Step 1 — Operating process audit (AI Readiness Audit)",
      body: "Map customer, order, and internal flows. Spot people-burn and data breaks. Assess AI readiness per process.",
    },
    {
      title: "Step 2 — Pick 1–2 priority use cases",
      body: "Don’t automate fog. Prefer repetitive, rule-clear jobs with fast payback. Dolphin Software uses a use-case priority frame so you don’t waste effort where AI doesn’t fit yet.",
    },
    {
      title: "Step 3 — Design human–machine + system integrations",
      body: "Who approves what; AI agents/workflows connect to CRM, chat, calendar, payments in committed scope. A custom AI agent is a building block here — not a standalone product.",
    },
    {
      title: "Step 4 — Pilot on real data",
      body: "Run live, measure live, fix the new process seriously before cloning to other flows.",
    },
    {
      title: "Step 5 — Scale with control",
      body: "Repeat for the next use case; hand over ops, access rights, and an expansion checklist for your team.",
    },
  ],
  agentEyebrow: "Building block",
  agentTitle: "Custom AI Agent — One Building Block in the [[Roadmap]]",
  agentSupport:
    "What is a custom AI agent? An AI workflow built to your process — connected to live systems (CRM, email, calendar, spreadsheet), automating repetitive steps, and handing off to humans on exceptions.",
  agentFit:
    "Custom AI agents fit best when you have clear processes and daily repetitive work. If processes are still vague or unstandardized, Dolphin Software prioritizes audit and process design before building an agent.",
  agentItems: [
    "Analyze and standardize the process before automating",
    "Integrate with systems you already use (no platform rip-and-replace)",
    "Human-in-the-loop: people approve sensitive steps",
    "Full handover: docs, access, ops walkthrough",
    "No vendor lock-in — you own the workflow after handover",
  ],
  agentNote:
    "If you need AI for on-site customer care (FAQ, booking, common requests), Dolphin Software offers a dedicated product at /dolphin-care/ — built for website support, separate from this AI transformation roadmap. A custom AI agent is a building block in this roadmap, not a standalone product.",
  useCasesEyebrow: "Use cases",
  useCasesTitle: "Practical Applications in [[SMB Operations]]",
  useCasesSupport:
    "These areas are common starting points for AI transformation. Exact scope depends on each company’s processes and data — not a fixed outcome promise.",
  useCases: [
    {
      title: "Sales",
      body: "Capture and qualify leads, follow-up nudges, consistent multi-channel replies under agreed rules.",
    },
    {
      title: "Customer Support",
      body: "Scripted FAQ, request routing, and human handoff when the case leaves agent scope.",
    },
    {
      title: "Operations",
      body: "Report assembly, recurring reminders, less copy-paste between systems.",
    },
    {
      title: "Internal Knowledge",
      body: "Controlled lookup of internal docs — onboarding help and process Q&A.",
    },
  ],
  industriesEyebrow: "Entry points",
  industriesTitle: "Common [[Starting Points]] for SMBs",
  industriesSupport:
    "You don’t need “AI everywhere” on day one. These are the most common entry points Dolphin Software has shipped for Vietnamese SMBs:",
  industries: [
    {
      name: "Sales & leads",
      body: "Capture–qualify leads, deal nudges, consistent multi-channel replies.",
    },
    {
      name: "Care & scheduling",
      body: "Automated FAQ, appointments, reminders tied to real calendars.",
    },
    {
      name: "Content & web ops",
      body: "Repeatable content/SEO updates with an approval step.",
    },
    {
      name: "Reporting & ops",
      body: "Pull scattered data into a Collect → Govern loop.",
    },
    {
      name: "HR / internal",
      body: "Screening, reminders, checklists — when rules are clear.",
    },
  ],
  roiEyebrow: "ROI",
  roiTitle: "ROI Framework — Know What You Get [[Before]] Scaling",
  roiSupport:
    "Dolphin Software builds the ROI framework at design time — not after launch. Before each pilot, you and Dolphin commit to three metrics:",
  roiItems: [
    {
      title: "Hours saved / week",
      body: "Measured directly on the automated workflow.",
    },
    {
      title: "Error rate reduction",
      body: "Before/after comparison on the same data flow.",
    },
    {
      title: "Expected payback time",
      body: "Based on pilot cost and real savings.",
    },
  ],
  govEyebrow: "Governance",
  govTitle: "AI Governance — Who Controls What When AI [[Runs]]?",
  govSupport:
    "AI governance is the set of rules for who approves what, when AI pauses for a human, and how to audit AI decisions. Dolphin Software builds governance into every workflow at design time — not as an afterthought.",
  govItems: [
    "Human-in-the-loop required on sensitive steps (payments, legal commitments, customer data)",
    "Full logs — every agent action is traceable",
    "Access rights handed to your internal team after launch",
    "No vendor lock-in — you keep full control after handover",
  ],
  proofEyebrow: "Internal proof",
  proofTitle: "Dolphin [[Builds With AI]]",
  proofSupport:
    "Dolphin applies an AI agent workflow to its own internal work — from coordinating tasks, content production, and design to software development. This is internal capability evidence under construction, not a customer case study.",
  proofTypeLabel: "Internal",
  proofNote:
    "The system is being developed in stages — used to coordinate strategy, content, design, and software development inside the Dolphin team.",
  proofAgents: [
    {
      title: "Overview Agent",
      body: "Coordinates strategy and task handoffs across agents.",
    },
    {
      title: "Content Agent",
      body: "Supports content production and consistency in internal flows.",
    },
    {
      title: "Designer Agent",
      body: "Supports design work inside internal workflows.",
    },
    {
      title: "Developer Agent",
      body: "Supports software development in internal processes.",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "FAQ on AI Implementation for [[Business]]",
  faqItems: [
    {
      q: "How is AI transformation different from buying ChatGPT seats?",
      a: "Seats are personal tools — everyone uses them differently, with no system connection and no company-wide metrics. AI transformation wires machines into real operating processes, with integrations, human approval, and clear numbers.",
    },
    {
      q: "Do we have to transform everything at once?",
      a: "No. Dolphin Software prioritizes 1–2 most painful jobs, pilots with real metrics, then expands — no uncontrolled mega-project.",
    },
    {
      q: "How does a custom AI agent relate to the AI roadmap?",
      a: "A custom AI agent is usually a building block — built in Step 3 after process audit and use-case priority. The AI transformation roadmap includes agents, system integrations, governance, and an ROI framework — not the agent alone, and the agent is not a separate product.",
    },
    {
      q: "Can a small SMB start?",
      a: "Yes — if processes are clear enough and at least one repetitive job burns people. Scope matches your real size: no overselling, no fake platform.",
    },
    {
      q: "How is Dolphin Care different from AI transformation?",
      a: "Dolphin Care is on-site website customer care AI — FAQ, booking, and common requests in real time. AI transformation (this page) is a strategic roadmap for internal ops and multi-process change. They can combine, but serve different goals. See /dolphin-care/.",
    },
    {
      q: "How much does AI transformation cost?",
      a: "Dolphin Software quotes transparently from real scope after a process consult — no hidden fees, no one-size package. Cost depends on process complexity, pilot use cases, and required system integrations.",
    },
  ],
  closeEyebrow: "Start",
  closeTitle: "Start with One [[Real Process]]",
  closeSupport:
    "Dolphin Software identifies breaks and drafts a rough roadmap: where to start, what to measure, which milestones. No magic on slides, no vague promises.",
  closeCta: "Contact Dolphin Software",
  closeLinks: [
    { label: "Learn about Dolphin Care", href: "/dolphin-care/" },
    { label: "About us", href: "/about/" },
  ],
  closeTrust:
    "Transparent quotes · No hidden fees · Support after handover · No vendor lock-in",
};

const ja: AiTransformCopy = {
  metaTitle: "企業向けAI導入ロードマップ | Dolphin Software",
  metaDescription:
    "Dolphin SoftwareがベトナムSMB向けにAI変革を支援：プロセス監査、ユースケース優先、数値付きパイロット、カスタムエージェント — 見積もり明確、隠れた費用なし。",
  eyebrow: "Enterprise AI transformation",
  headline: "企業向けAI変革：[[制御可能な]]導入ロードマップ",
  support:
    "運用のAI変革はソフト購入から始まりません — どのプロセスがお金と時間を燃やしているかを正しく理解することから始まります。Dolphin Softwareが実プロセスを精査し、1〜2の優先業務を決め、適合するAIエージェントを設計し、拡大前に結果を測ります。マイルストーン型 — 小さく始め、証拠の後に拡大。",
  audienceLine:
    "向いている方：リスクを抑え、最初のパイロットからROIを測れる形でAIを導入したいベトナムのSMB。",
  ctaPrimary: "概略ロードマップを相談",
  ctaSecondary: "Dolphin Careを見る",
  trustLine: "プロセス優先 · 数値で測定 · Human-in-the-loop",
  compareEyebrow: "Operating reality",
  compareTitle: "AIシート vs 本当のAI変革：[[何が違う]]？",
  compareSupport:
    "チーム全員にChatGPTやGeminiを買うことはAI変革ではありません。本当の変革とは、企業の稼働フローに機械を組み込むこと — システム連携、指標、機密ステップでの人承認付きです。",
  offShelfTitle: "シート / 散在ツール",
  offShelfItems: [
    "各自が別々にAIを使う — 標準化や工数削減の測定ができない",
    "AIはCRM・在庫・プロセスを見ない — チャット欄の中だけ",
    "固定費は上がるが、生産性と品質は据え置きが多い",
    "過信や誤用が起きやすい — エラーは顧客に届いてから発覚",
  ],
  customTitle: "ロードマップ型AI変革（Dolphinの進め方）",
  customItems: [
    "プロセスを再設計：人が残るステップと機械に渡すステップ",
    "反復業務にAIエージェントを接続 — 既存システムと連携",
    "1フローをパイロット；リード/工数/ミスを測ってから拡大",
    "機密ステップは人が承認；ログ・納品・導入後チューニング",
  ],
  whenEyebrow: "When it matters",
  whenTitle: "「AIはある」のにまだ[[詰まる]]3つのサイン",
  whenSupport:
    "次のいずれかに心当たりがあるなら、追加ツールではなくロードマップが必要です。",
  whenItems: [
    {
      title: "ツールがつながっていない",
      body: "ボットはここ、CRMはあそこ、Excelは別 — 接続はすべて手作業のコピペ。",
    },
    {
      title: "AIを買ったのに業務が詰まる",
      body: "シートも研修も済み — でもリードは落ち、予約は電話、レポートは月末の消火活動のまま。",
    },
    {
      title: "ROIが測れない",
      body: "何時間節約したか、ミスがどれだけ減ったか言えない — 見えるのは毎月増えるAI請求だけ。",
    },
  ],
  whatWeBuildEyebrow: "What we implement",
  whatWeBuildTitle: "AI変革ロードマップでDolphinが[[作るもの]]",
  whatWeBuildSupport:
    "Dolphinは「AIを使え」と助言するだけではありません — 制御可能な変革プロセスの一部として、AIシステムを設計・実装します。以下は別製品ではなく、そのプロセス内の代表的な能力です。",
  whatWeBuildItems: [
    {
      title: "AI Agents",
      body: "特定のワークフローと役割向けに設計したカスタムエージェント。",
    },
    {
      title: "AI Automation",
      body: "運用プロセス内の反復ステップを自動化。",
    },
    {
      title: "AI Integration",
      body: "CRM・チャット・カレンダーなど既存の業務システムへAIを接続。",
    },
  ],
  processEyebrow: "How Dolphin Software works",
  processTitle: "制御可能なAI導入ロードマップ — [[5つの具体]]ステップ",
  processSupport:
    "Dolphin SoftwareはAI変革を5ステップで進め、各ステップに明確な成果物があります。パイロットで測定可能な結果が出てから拡大します。",
  processSteps: [
    {
      title: "ステップ1 — 運用プロセス監査（AI Readiness Audit）",
      body: "顧客・受注・社内フローを可視化。人の消耗とデータ断絶を特定。プロセスごとのAI準備度を評価。",
    },
    {
      title: "ステップ2 — 優先ユースケースを1〜2選定",
      body: "曖昧さを自動化しない。反復・ルール明確・回収の早い業務を優先。AIがまだ向かない領域への浪費を避ける優先フレームを使います。",
    },
    {
      title: "ステップ3 — 人–機械設計 + システム連携",
      body: "誰が何を承認するか；AIエージェント/ワークフローをCRM・チャット・カレンダー・決済に合意範囲で接続。カスタムAIエージェントはこのステップのビルディングブロックです。",
    },
    {
      title: "ステップ4 — 実データでパイロット",
      body: "本番相当で動かし、測り、他フローへ複製する前に新プロセスを真剣に直す。",
    },
    {
      title: "ステップ5 — 制御しながら拡大",
      body: "次のユースケースで繰り返し；運用・権限・拡張チェックリストを社内チームへ納品。",
    },
  ],
  agentEyebrow: "Building block",
  agentTitle: "Custom AI Agent — ロードマップ内の[[ビルディングブロック]]",
  agentSupport:
    "カスタムAIエージェントとは？企業の手順に合わせて作られたAIワークフローです — 実システム（CRM、メール、カレンダー、スプレッドシート）へ接続し、反復ステップを自動化し、例外は人へ引き継ぎます。",
  agentFit:
    "カスタムAIエージェントは、手順が明確で毎日繰り返す業務がある企業に最適です。手順が曖昧・未標準化なら、Dolphin Softwareはエージェント構築の前に監査とプロセス設計を優先します。",
  agentItems: [
    "自動化前にプロセスを分析・標準化",
    "既存システムへ連携（プラットフォーム全面刷新は不要）",
    "Human-in-the-loop：機密ステップは人が承認",
    "完全な納品：ドキュメント、権限、運用ガイド",
    "ベンダーロックインなし — 納品後は企業がワークフローを所有",
  ],
  agentNote:
    "サイト上の顧客ケアAI（FAQ、予約、よくある依頼）が必要なら、Dolphin Softwareは /dolphin-care/ の専用製品を提供します — オンサイトサポート向けで、本ページのAI変革ロードマップとは別です。カスタムAIエージェントはこのロードマップ内のビルディングブロックであり、独立した製品ではありません。",
  useCasesEyebrow: "Use cases",
  useCasesTitle: "SMB運用での[[実践的な適用]]",
  useCasesSupport:
    "以下はAI変革のよくある開始領域です。具体的な範囲は各社のプロセスとデータ次第 — 固定成果の約束ではありません。",
  useCases: [
    {
      title: "Sales",
      body: "リード獲得・選別、フォローリマインド、合意ルールに沿ったマルチチャネル応答。",
    },
    {
      title: "Customer Support",
      body: "シナリオFAQ、依頼の振り分け、範囲外は人へ引き継ぎ。",
    },
    {
      title: "Operations",
      body: "レポート集約、定例リマインド、システム間コピペの削減。",
    },
    {
      title: "Internal Knowledge",
      body: "社内ドキュメントの制御付き検索 — オンボーディングと手順Q&Aを支援。",
    },
  ],
  industriesEyebrow: "Entry points",
  industriesTitle: "SMBに多い[[スタート地点]]",
  industriesSupport:
    "初日から「全社AI」は不要です。Dolphin SoftwareがベトナムSMB向けに実装してきた代表的な入口：",
  industries: [
    {
      name: "Sales & Leads",
      body: "リード獲得・選別、ディールリマインド、マルチチャネルの一貫応答。",
    },
    {
      name: "ケア & 予約",
      body: "自動FAQ、予約、実カレンダー連動のリマインダー。",
    },
    {
      name: "コンテンツ & Web運用",
      body: "承認付きの定型コンテンツ/SEO更新。",
    },
    {
      name: "レポート & 運用",
      body: "散在データをCollect → Governループへ集約。",
    },
    {
      name: "HR / 社内",
      body: "スクリーニング、リマインダー、チェックリスト — ルールが明確な場合。",
    },
  ],
  roiEyebrow: "ROI",
  roiTitle: "ROIフレームワーク — 拡大前に[[何を得るか]]を知る",
  roiSupport:
    "Dolphin Softwareは導入後ではなく設計段階からROIフレームワークを作ります。各パイロット前に、企業とDolphinが3指標に合意します：",
  roiItems: [
    {
      title: "週あたり節約工数",
      body: "自動化したワークフロー上で直接測定。",
    },
    {
      title: "エラー率の低下",
      body: "同じデータフローでパイロット前後を比較。",
    },
    {
      title: "想定回収期間",
      body: "パイロット費用と実節約に基づいて算出。",
    },
  ],
  govEyebrow: "Governance",
  govTitle: "AIガバナンス — AI稼働時に誰が何を[[制御する]]か？",
  govSupport:
    "AIガバナンスとは、誰が何を承認するか、いつAIが人待ちで止まるか、AI判断をどう監査するかを定めるルール群です。Dolphin Softwareは設計段階から各ワークフローにガバナンスを組み込みます — 後付けではありません。",
  govItems: [
    "機密ステップ（決済、法的コミット、顧客情報）ではHuman-in-the-loop必須",
    "完全なログ — エージェントの全動作を追跡可能",
    "導入後は社内チームへアクセス権限を引き渡す",
    "ベンダーロックインなし — 納品後は企業が完全に制御",
  ],
  proofEyebrow: "Internal proof",
  proofTitle: "Dolphin [[Builds With AI]]",
  proofSupport:
    "Dolphinは自社の社内業務にAIエージェント・ワークフローを適用しています — 仕事の調整、コンテンツ制作、デザインからソフトウェア開発まで。顧客ケーススタディではなく、構築中の社内能力の証跡です。",
  proofTypeLabel: "Internal",
  proofNote:
    "段階的に開発中 — Dolphinチーム内でstrategy・content・design・software developmentの調整に用います。",
  proofAgents: [
    {
      title: "Overview Agent",
      body: "戦略とエージェント間のタスク引き継ぎを調整。",
    },
    {
      title: "Content Agent",
      body: "社内フローでのコンテンツ制作と一貫性を支援。",
    },
    {
      title: "Designer Agent",
      body: "社内ワークフローでのデザイン作業を支援。",
    },
    {
      title: "Developer Agent",
      body: "社内プロセスでのソフトウェア開発を支援。",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "企業向けAI導入について[[よくある質問]]",
  faqItems: [
    {
      q: "AI変革はChatGPTシート購入と何が違う？",
      a: "シートは個人ツール — 各自の使い方で、システム連携も全社指標もありません。AI変革は稼働プロセスに機械を接続し、連携・人承認・明確な数値を伴います。",
    },
    {
      q: "一度に全部を変革する必要がありますか？",
      a: "いいえ。Dolphin Softwareは最も痛い1〜2業務を優先し、実数値でパイロットしてから拡大 — 制御不能なメガプロジェクトにはしません。",
    },
    {
      q: "カスタムAIエージェントとAIロードマップの関係は？",
      a: "カスタムAIエージェントは通常ビルディングブロック — プロセス監査とユースケース優先の後、ステップ3で構築します。AI変革ロードマップはエージェント、システム連携、ガバナンス、ROIフレームワークを含みます。エージェントは独立した製品ではありません。",
    },
    {
      q: "小さなSMBでも始められますか？",
      a: "はい — 手順が十分明確で、少なくとも1つの反復業務が人を消耗させているなら。規模に合わせた範囲で、過剰販売や偽プラットフォームはありません。",
    },
    {
      q: "Dolphin CareとAI変革の違いは？",
      a: "Dolphin Careはサイト上の顧客ケアAI — FAQ、予約、よくある依頼をリアルタイム処理。AI変革（本ページ）は社内運用と複数プロセス向けの戦略ロードマップです。併用可能ですが目的が異なります。詳しくは /dolphin-care/。",
    },
    {
      q: "AI変革の導入費用は？",
      a: "Dolphin Softwareはプロセス相談後の実範囲で透明に見積もり — 隠れた費用なし、全社一律パッケージなし。費用はプロセス複雑さ、パイロット数、必要なシステム連携によります。",
    },
  ],
  closeEyebrow: "Start",
  closeTitle: "1つの[[実プロセス]]から始める",
  closeSupport:
    "Dolphin Softwareが断絶を特定し、概略ロードマップを描きます：どこから、何を測り、どのマイルストーンか。スライドの魔法も曖昧な約束もありません。",
  closeCta: "Dolphin Softwareに連絡",
  closeLinks: [
    { label: "Dolphin Careについて", href: "/dolphin-care/" },
    { label: "会社概要", href: "/about/" },
  ],
  closeTrust:
    "見積もり明確 · 隠れた費用なし · 納品後サポート · ベンダーロックインなし",
};

export const aiTransformCopy: Record<Locale, AiTransformCopy> = {
  vi,
  en,
  ja,
};

export function getAiTransformCopy(locale: Locale): AiTransformCopy {
  return aiTransformCopy[locale];
}
