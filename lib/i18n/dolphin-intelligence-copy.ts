import type { Locale } from "@/lib/i18n/types";

export type WorkflowNodeKind = "agent" | "action" | "logic" | "human";

export type WorkflowNodeCopy = {
  id: string;
  label: string;
  kind: WorkflowNodeKind;
  typeLabel: string;
  desc: string;
  input?: string;
  output: string;
};

export type DolphinIntelligenceCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  support: string;
  audienceLine: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trustLine: string;
  workflowEyebrow: string;
  workflowTitle: string;
  workflowSupport: string;
  workflowCanvasTitle: string;
  workflowCampaignName: string;
  workflowRunningLabel: string;
  workflowStatusReady: string;
  workflowStatusRunning: string;
  workflowStageActive: string;
  workflowStageDone: string;
  workflowStageQueued: string;
  workflowStageRemoving: string;
  workflowStageRemoved: string;
  workflowCountNodes: string;
  workflowLegend: { kind: WorkflowNodeKind; label: string }[];
  workflowStages: { id: string; label: string }[];
  workflowBadges: {
    id: string;
    label: string;
    tone: "pass" | "fail" | "info";
  }[];
  workflowNodes: WorkflowNodeCopy[];
  painEyebrow: string;
  painTitle: string;
  painSupport: string;
  painCols: { title: string; items: string[] }[];
  whatEyebrow: string;
  whatTitle: string;
  whatSupport: string;
  whatVs: { title: string; body: string }[];
  pillarsEyebrow: string;
  pillarsTitle: string;
  pillarsSupport: string;
  pillars: { kind: WorkflowNodeKind; title: string; body: string }[];
  agentEyebrow: string;
  agentTitle: string;
  agentSupport: string;
  agentItems: { title: string; body: string }[];
  actionEyebrow: string;
  actionTitle: string;
  actionSupport: string;
  actionItems: string[];
  whyEyebrow: string;
  whyTitle: string;
  whyItems: { title: string; body: string }[];
  deployEyebrow: string;
  deployTitle: string;
  deploySupport: string;
  deploySteps: { title: string; body: string }[];
  faqEyebrow: string;
  faqTitle: string;
  faqItems: { q: string; a: string }[];
  closeEyebrow: string;
  closeTitle: string;
  closeSupport: string;
  closeCta: string;
  closeSecondary: string;
  closeTrust: string;
};

const vi: DolphinIntelligenceCopy = {
  metaTitle:
    "Dolphin Intelligence — Nền Tảng AI Workflow Cho Doanh Nghiệp | Dolphin Software",
  metaDescription:
    "Dolphin Intelligence là nền tảng AI workflow giúp doanh nghiệp tự động hóa quy trình bằng AI agent, action và human checkpoint — không cần code, không mất kiểm soát.",
  eyebrow: "Nền tảng AI Workflow cho doanh nghiệp",
  headline:
    "Dolphin Intelligence: Biến Quy Trình Lặp Lại Thành AI Workflow [[Chạy Tự Động]]",
  support:
    "Dolphin Intelligence là nền tảng AI workflow cho phép doanh nghiệp thiết kế, điều phối và vận hành các quy trình làm việc thông minh — kết hợp AI agent, action thực tế, logic điều kiện, và human checkpoint — trong một hệ thống duy nhất, không cần code, không mất kiểm soát.",
  audienceLine:
    "Không phải chatbot. Không phải AI assistant. Đây là hệ thống workflow hoàn chỉnh: agent tư duy, action thực thi, con người tham gia đúng lúc — đúng chỗ.",
  ctaPrimary: "Đặt lịch tư vấn",
  ctaSecondary: "Xem workflow mẫu",
  trustLine: "Agent · Action · Logic · Human Checkpoint",
  workflowEyebrow: "Workflow mẫu",
  workflowTitle: "Daily Content Engine — từ research đến báo cáo hôm sau",
  workflowSupport:
    "Một vòng lặp nội dung hằng ngày: cron kích hoạt, agent nghiên cứu và viết, human duyệt, Jasper/SEO/review, nhánh landing hoặc publish, media và overview report — rồi lặp lại.",
  workflowCanvasTitle: "Workflow canvas · Daily Content Engine",
  workflowCampaignName: "Website Marketing Campaign",
  workflowRunningLabel: "Daily workflow đang chạy",
  workflowStatusReady: "Ready",
  workflowStatusRunning: "Running",
  workflowStageActive: "Đang chạy",
  workflowStageDone: "Xong",
  workflowStageQueued: "Chờ",
  workflowStageRemoving: "Đang xóa…",
  workflowStageRemoved: "Đã xóa",
  workflowCountNodes: "Nodes",
  workflowLegend: [
    { kind: "agent", label: "Agent" },
    { kind: "action", label: "Action" },
    { kind: "logic", label: "Logic" },
    { kind: "human", label: "Human" },
  ],
  workflowStages: [
    { id: "s1", label: "Stage 1 · Trigger + Research" },
    { id: "s2", label: "Stage 2 · Content plan + Human check" },
    { id: "s3", label: "Stage 3 · Content production" },
    { id: "s4", label: "Stage 4 · SEO + Human check" },
    { id: "s5", label: "Stage 5 · Review + Human check" },
    { id: "s6", label: "Stage 6 · Publish / Landing page" },
    { id: "s7", label: "Stage 7 · Media" },
    { id: "s8", label: "Stage 8 · Overview + Human check" },
  ],
  workflowBadges: [
    { id: "approved", label: "Approved", tone: "pass" },
    { id: "reject", label: "Reject → back to Content", tone: "fail" },
    { id: "media", label: "If media needed", tone: "info" },
  ],
  workflowNodes: [
    {
      id: "cron",
      label: "Daily Cron",
      kind: "logic",
      typeLabel: "Trigger",
      desc: "Khởi động workflow mỗi ngày lúc 08:00.",
      output: "DailyRun",
    },
    {
      id: "research",
      label: "Research Agent",
      kind: "agent",
      typeLabel: "AI Agent",
      desc: "Tìm topic, trend, câu hỏi và cơ hội từ mạng lưới đã cấu hình.",
      input: "CampaignTopic",
      output: "TopicList",
    },
    {
      id: "research-net",
      label: "Research Network",
      kind: "action",
      typeLabel: "Action",
      desc: "Thu thập tín hiệu công khai, tham chiếu và nguồn cho topic.",
      input: "CampaignTopic",
      output: "Sources",
    },
    {
      id: "content",
      label: "Content Agent",
      kind: "agent",
      typeLabel: "AI Agent",
      desc: "Biến tín hiệu research thành hàng đợi topic/góc viết có ưu tiên.",
      input: "Sources",
      output: "TopicQueue",
    },
    {
      id: "human",
      label: "Human Check · Topics",
      kind: "human",
      typeLabel: "Approval",
      desc: "Duyệt topic hôm nay: xóa ý yếu, xếp lại ưu tiên, hoặc approve all.",
      input: "TopicQueue",
      output: "ApprovedTopics",
    },
    {
      id: "jasper",
      label: "Jasper",
      kind: "action",
      typeLabel: "Action · API",
      desc: "Sinh bản nháp đầy đủ cho mọi topic đã duyệt.",
      input: "ApprovedTopics",
      output: "Drafts",
    },
    {
      id: "seo",
      label: "SEO Agent",
      kind: "agent",
      typeLabel: "AI Agent",
      desc: "Tối ưu intent, title, cấu trúc, entity, internal link và GEO.",
      input: "Drafts",
      output: "OptimizedContent",
    },
    {
      id: "human-seo",
      label: "Human Check · SEO",
      kind: "human",
      typeLabel: "Approval",
      desc: "Duyệt title, meta và cấu trúc trước khi sang review chất lượng.",
      input: "OptimizedContent",
      output: "SeoApproved",
    },
    {
      id: "review",
      label: "Review Agent",
      kind: "agent",
      typeLabel: "AI Agent",
      desc: "Chấm chất lượng, tính nhất quán, SEO, brand fit và sẵn sàng publish.",
      input: "SeoApproved",
      output: "ReviewResult",
    },
    {
      id: "human-publish",
      label: "Human Check · Publish",
      kind: "human",
      typeLabel: "Approval",
      desc: "Phê duyệt cuối trước khi tạo landing hoặc publish lên site.",
      input: "ReviewResult",
      output: "PublishReady",
    },
    {
      id: "landing",
      label: "Create Template",
      kind: "action",
      typeLabel: "Action",
      desc: "Sinh landing-page template từ nội dung campaign đã duyệt.",
      input: "CampaignData",
      output: "Template",
    },
    {
      id: "publish",
      label: "Publish to Site",
      kind: "action",
      typeLabel: "Action",
      desc: "Tạo hoặc cập nhật bài mới trên website Dolphin.",
      input: "PublishReady",
      output: "PublishedURL",
    },
    {
      id: "media",
      label: "Media Agent",
      kind: "agent",
      typeLabel: "AI Agent",
      desc: "Quyết định có cần media và chuẩn bị brief ảnh/video.",
      input: "PublishedURL",
      output: "MediaPlan",
    },
    {
      id: "create-media",
      label: "Create Media",
      kind: "action",
      typeLabel: "Action",
      desc: "Tạo hoặc thu thập asset hình khi được yêu cầu.",
      input: "MediaPlan",
      output: "MediaAssets",
    },
    {
      id: "human-report",
      label: "Human Check · Report",
      kind: "human",
      typeLabel: "Approval",
      desc: "Xác nhận số liệu ngày trước khi gửi overview report.",
      input: "RunContext",
      output: "ReportApproved",
    },
    {
      id: "report",
      label: "Overview Report",
      kind: "action",
      typeLabel: "Action",
      desc: "Tóm tắt topic, nội dung, URL, media và vấn đề trong ngày.",
      input: "ReportApproved",
      output: "DailyReport",
    },
    {
      id: "next",
      label: "Next Day",
      kind: "logic",
      typeLabel: "Loop",
      desc: "Lưu trạng thái run và chờ cron ngày hôm sau.",
      output: "NextRun",
    },
  ],
  painEyebrow: "Vấn đề",
  painTitle: "Dùng AI mà vẫn làm việc thủ công?",
  painSupport:
    "Nhiều đội nhóm đang dùng AI theo cách rời rạc, thiếu kết nối và khó nhân rộng — tốn thời gian hơn, không chuẩn hóa được quy trình, và không biết AI đang thực sự làm gì.",
  painCols: [
    {
      title: "Cách dùng AI thông thường",
      items: [
        "Copy-paste thủ công giữa các công cụ",
        "Mỗi người dùng AI theo cách riêng",
        "Không biết AI đang làm gì",
        "Mỗi lần chạy phải nhập lại ngữ cảnh",
        "AI quyết định mọi thứ — hoặc không có AI",
      ],
    },
    {
      title: "Với Dolphin Intelligence",
      items: [
        "Workflow kết nối liên tục, tự động truyền dữ liệu",
        "Quy trình chuẩn hóa, nhất quán toàn đội",
        "Thực thi minh bạch, kiểm soát từng bước",
        "Context được lưu và tái sử dụng xuyên suốt",
        "Con người tham gia đúng lúc, đúng chỗ",
      ],
    },
  ],
  whatEyebrow: "Định nghĩa",
  whatTitle: "Dolphin Intelligence là gì?",
  whatSupport:
    "Nền tảng AI workflow để xây dựng và vận hành quy trình thông minh — không thay thế con người, mà đặt AI và con người đúng vị trí. Bạn thiết kế toàn bộ chuỗi: thu thập, phân tích, sản xuất, phê duyệt, xuất bản và báo cáo — trong một hệ thống có thể lập lịch và mở rộng.",
  whatVs: [
    {
      title: "Chatbot / AI assistant",
      body: "Phù hợp khi cần trả lời nhanh, xử lý tác vụ đơn lẻ, hoặc hỗ trợ người dùng cuối theo thời gian thực.",
    },
    {
      title: "Dolphin Intelligence",
      body: "Phù hợp khi cần tự động hóa chuỗi bước liên kết, nhiều agent theo vai trò, và human checkpoint đúng điểm — không phải mọi bước.",
    },
  ],
  pillarsEyebrow: "Cốt lõi",
  pillarsTitle: "Bốn thành phần của AI workflow",
  pillarsSupport:
    "Mỗi workflow được dựng từ bốn loại thành phần — kết hợp linh hoạt theo quy trình thực tế của doanh nghiệp.",
  pillars: [
    {
      kind: "agent",
      title: "AI Agent",
      body: "Thành phần tư duy và ra quyết định. Mỗi agent có ngữ cảnh, hướng dẫn và schema — hoạt động nhất quán, không cần nhập lại prompt mỗi lần.",
    },
    {
      kind: "action",
      title: "Action",
      body: "Thành phần thực thi trong thế giới thực: gọi API, tạo nội dung, gửi email, triển khai site, tạo báo cáo. Agent quyết định — Action làm.",
    },
    {
      kind: "logic",
      title: "Logic",
      body: "Điều phối luồng: điều kiện, vòng lặp, nhánh song song và trigger theo lịch — chạy đúng thời điểm sau khi thiết lập.",
    },
    {
      kind: "human",
      title: "Human Checkpoint",
      body: "Điểm dừng có kiểm soát: con người xem xét và phê duyệt trước khi quy trình tiếp tục — oversight mà không quản lý từng bước nhỏ.",
    },
  ],
  agentEyebrow: "Agent",
  agentTitle: "Bộ não của AI workflow",
  agentSupport:
    "Mỗi agent được cấu hình với bốn yếu tố — schema rõ ràng và ngữ cảnh lưu trữ giúp kết quả nhất quán, không phụ thuộc người nhập prompt.",
  agentItems: [
    {
      title: "Ngữ cảnh (Context)",
      body: "Thông tin nền về nhiệm vụ, doanh nghiệp hoặc chiến dịch.",
    },
    {
      title: "Hướng dẫn (Instructions)",
      body: "Cách agent hành xử, ưu tiên và giới hạn.",
    },
    {
      title: "Input / Output schema",
      body: "Dữ liệu đầu vào nhận và đầu ra trả về.",
    },
    {
      title: "Vai trò / hành vi",
      body: "Research, Content, SEO, Review, Media — tùy vị trí trong workflow.",
    },
  ],
  actionEyebrow: "Action",
  actionTitle: "Kết nối workflow với hệ thống thực tế",
  actionSupport:
    "Action đưa quyết định của agent thành việc đã làm trong stack hiện tại của bạn.",
  actionItems: [
    "Gọi API và webhook",
    "Tạo / cập nhật nội dung CMS",
    "Gửi email và thông báo",
    "Triển khai landing / publish bài",
    "Tạo media và báo cáo tổng quan",
  ],
  whyEyebrow: "Lý do chọn",
  whyTitle: "Tại sao chọn Dolphin Intelligence?",
  whyItems: [
    {
      title: "Workflow hoàn chỉnh — không phải chatbot",
      body: "Nhiều agent phối hợp theo vai trò, action kết nối hệ thống thực, logic điều phối luồng — phù hợp chuỗi quy trình nhiều bước liên kết.",
    },
    {
      title: "Minh bạch và kiểm soát được",
      body: "Mỗi bước thực thi đều xem lại được: AI đang làm gì, tại sao, kết quả ra sao — không phải hộp đen.",
    },
    {
      title: "Con người ở đúng vị trí",
      body: "Human Checkpoint cho quyết định quan trọng; ủy thác phần còn lại cho workflow.",
    },
    {
      title: "Tích hợp stack hiện tại",
      body: "Kết nối công cụ đang dùng — không bắt thay toàn bộ hệ thống.",
    },
    {
      title: "Mở rộng theo nhu cầu",
      body: "Từ vài node đơn giản đến nhiều agent, nhánh song song và nhiều trigger.",
    },
    {
      title: "Hỗ trợ xây dựng theo yêu cầu",
      body: "Custom integration và thiết kế workflow theo quy trình thực tế của doanh nghiệp.",
    },
  ],
  deployEyebrow: "Triển khai",
  deployTitle: "Từ ý tưởng đến AI workflow vận hành — 8 bước",
  deploySupport:
    "Không chỉ phần mềm — mà quy trình triển khai có cấu trúc để workflow chạy được trong môi trường thực tế.",
  deploySteps: [
    {
      title: "Khám phá quy trình",
      body: "Xác định quy trình tốn thời gian nhất và phù hợp tự động hóa.",
    },
    {
      title: "Thiết kế workflow",
      body: "Phác thảo agent, action, logic và human checkpoint.",
    },
    {
      title: "Cấu hình agent",
      body: "Định nghĩa vai trò, ngữ cảnh, hướng dẫn và schema.",
    },
    {
      title: "Kết nối action",
      body: "Tích hợp API, CMS, email, công cụ nội dung…",
    },
    {
      title: "Xây dựng logic và trigger",
      body: "Điều kiện, vòng lặp, nhánh và lịch kích hoạt.",
    },
    {
      title: "Chạy thử và tinh chỉnh",
      body: "Kiểm với dữ liệu thực, quan sát và điều chỉnh từng bước.",
    },
    {
      title: "Đào tạo và bàn giao",
      body: "Hướng dẫn đội vận hành, giám sát và chỉnh sửa khi cần.",
    },
    {
      title: "Tối ưu liên tục",
      body: "Theo dõi hiệu suất, mở rộng và thêm quy trình mới.",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Câu hỏi thường gặp về Dolphin Intelligence",
  faqItems: [
    {
      q: "Dolphin Intelligence có yêu cầu kỹ năng lập trình không?",
      a: "Không cần kỹ năng lập trình. Giao diện drag-and-drop cho phép xây dựng và chỉnh sửa AI workflow mà không viết code. Đội ngũ Dolphin hỗ trợ cấu hình và tích hợp khi cần.",
    },
    {
      q: "Dolphin Intelligence có tích hợp với công cụ tôi đang dùng không?",
      a: "Có sẵn nhiều action phổ biến và kết nối được hệ thống có API. Trường hợp đặc thù, đội ngũ có thể xây custom integration theo yêu cầu.",
    },
    {
      q: "AI workflow có chạy hoàn toàn tự động không?",
      a: "Tùy cấu hình. Có thể chạy tự động cho tác vụ phù hợp, đồng thời đặt Human Checkpoint tại điểm cần phán xét. Bạn quyết định mức tự động hóa theo rủi ro chấp nhận được.",
    },
    {
      q: "Tôi có thể xem lại lịch sử thực thi workflow không?",
      a: "Có. Dolphin Intelligence ghi lại quá trình thực thi của từng workflow để theo dõi kết quả, phát hiện vấn đề và tối ưu từng bước.",
    },
    {
      q: "Nếu quy trình phức tạp và đặc thù, Dolphin có hỗ trợ được không?",
      a: "Có. Ngoài tính năng có sẵn, đội ngũ có thể tư vấn thiết kế và xây AI workflow cũng như custom integration cho quy trình đặc thù.",
    },
    {
      q: "Dolphin Intelligence khác gì so với chatbot hay AI assistant?",
      a: "Chatbot/assistant xử lý câu hỏi hoặc tác vụ đơn lẻ theo yêu cầu. Dolphin Intelligence là nền tảng AI workflow — nhiều agent theo vai trò, action trên hệ thống thực, chạy theo lịch hoặc trigger mà không cần khởi động từng lần.",
    },
    {
      q: "Dolphin Intelligence phù hợp với quy mô doanh nghiệp nào?",
      a: "Phù hợp SMB, startup, marketing agency, công ty phần mềm và đội vận hành muốn chuẩn hóa/tự động hóa. Mở rộng từ một workflow đơn giản đến hệ thống nhiều agent và nhánh song song.",
    },
  ],
  closeEyebrow: "Bắt đầu",
  closeTitle: "Sẵn sàng xây dựng AI workflow đầu tiên?",
  closeSupport:
    "Dolphin Intelligence giúp vận hành thông minh hơn — không thay thế con người, mà đặt AI agent và con người đúng vị trí của từng bên.",
  closeCta: "Đặt lịch tư vấn",
  closeSecondary: "Xem workflow mẫu",
  closeTrust: "Dolphin Software · Build · Modernize · Automate · Care",
};

const en: DolphinIntelligenceCopy = {
  metaTitle:
    "Dolphin Intelligence — AI Workflow Platform for Business | Dolphin Software",
  metaDescription:
    "Dolphin Intelligence is an AI workflow platform that automates processes with agents, actions, and human checkpoints — no code required, control retained.",
  eyebrow: "AI workflow platform for business",
  headline:
    "Dolphin Intelligence: Turn Repeatable Processes Into [[Automated AI Workflows]]",
  support:
    "Design, orchestrate, and run intelligent workflows that combine AI agents, real-world actions, conditional logic, and human checkpoints in one system — without coding away control.",
  audienceLine:
    "Not a chatbot. Not a single assistant. A full workflow system: agents think, actions execute, people join at the right moment.",
  ctaPrimary: "Book a consult",
  ctaSecondary: "See sample workflow",
  trustLine: "Agent · Action · Logic · Human Checkpoint",
  workflowEyebrow: "Sample workflow",
  workflowTitle: "Daily Content Engine — research to next-day report",
  workflowSupport:
    "A daily content loop: cron, research and writing agents, human check, Jasper/SEO/review, landing or publish branch, media, overview report — then repeat.",
  workflowCanvasTitle: "Workflow canvas · Daily Content Engine",
  workflowCampaignName: "Website Marketing Campaign",
  workflowRunningLabel: "Daily workflow running",
  workflowStatusReady: "Ready",
  workflowStatusRunning: "Running",
  workflowStageActive: "In progress",
  workflowStageDone: "Done",
  workflowStageQueued: "Queued",
  workflowStageRemoving: "Removing…",
  workflowStageRemoved: "Removed",
  workflowCountNodes: "Nodes",
  workflowLegend: [
    { kind: "agent", label: "Agent" },
    { kind: "action", label: "Action" },
    { kind: "logic", label: "Logic" },
    { kind: "human", label: "Human" },
  ],
  workflowStages: [
    { id: "s1", label: "Stage 1 · Trigger + Research" },
    { id: "s2", label: "Stage 2 · Content plan + Human check" },
    { id: "s3", label: "Stage 3 · Content production" },
    { id: "s4", label: "Stage 4 · SEO + Human check" },
    { id: "s5", label: "Stage 5 · Review + Human check" },
    { id: "s6", label: "Stage 6 · Publish / Landing page" },
    { id: "s7", label: "Stage 7 · Media" },
    { id: "s8", label: "Stage 8 · Overview + Human check" },
  ],
  workflowBadges: [
    { id: "approved", label: "Approved", tone: "pass" },
    { id: "reject", label: "Reject → back to Content", tone: "fail" },
    { id: "media", label: "If media needed", tone: "info" },
  ],
  workflowNodes: [
    {
      id: "cron",
      label: "Daily Cron",
      kind: "logic",
      typeLabel: "Trigger",
      desc: "Start this workflow every day at 08:00.",
      output: "DailyRun",
    },
    {
      id: "research",
      label: "Research Agent",
      kind: "agent",
      typeLabel: "AI Agent",
      desc: "Discover topics, trends, questions and opportunities from the configured network.",
      input: "CampaignTopic",
      output: "TopicList",
    },
    {
      id: "research-net",
      label: "Research Network",
      kind: "action",
      typeLabel: "Action",
      desc: "Collect public signals, references and source material for the topic.",
      input: "CampaignTopic",
      output: "Sources",
    },
    {
      id: "content",
      label: "Content Agent",
      kind: "agent",
      typeLabel: "AI Agent",
      desc: "Turn research signals into a prioritized list of content topics and angles.",
      input: "Sources",
      output: "TopicQueue",
    },
    {
      id: "human",
      label: "Human Check · Topics",
      kind: "human",
      typeLabel: "Approval",
      desc: "Review today's topics. Delete weak ideas, reorder priorities, or approve all.",
      input: "TopicQueue",
      output: "ApprovedTopics",
    },
    {
      id: "jasper",
      label: "Jasper",
      kind: "action",
      typeLabel: "Action · API",
      desc: "Generate full content drafts for every approved topic.",
      input: "ApprovedTopics",
      output: "Drafts",
    },
    {
      id: "seo",
      label: "SEO Agent",
      kind: "agent",
      typeLabel: "AI Agent",
      desc: "Optimize intent, title, structure, entities, internal links and GEO readiness.",
      input: "Drafts",
      output: "OptimizedContent",
    },
    {
      id: "human-seo",
      label: "Human Check · SEO",
      kind: "human",
      typeLabel: "Approval",
      desc: "Approve title, meta and structure before quality review.",
      input: "OptimizedContent",
      output: "SeoApproved",
    },
    {
      id: "review",
      label: "Review Agent",
      kind: "agent",
      typeLabel: "AI Agent",
      desc: "Score quality, factual consistency, SEO, brand fit and publish readiness.",
      input: "SeoApproved",
      output: "ReviewResult",
    },
    {
      id: "human-publish",
      label: "Human Check · Publish",
      kind: "human",
      typeLabel: "Approval",
      desc: "Final approval before creating a landing page or publishing to the site.",
      input: "ReviewResult",
      output: "PublishReady",
    },
    {
      id: "landing",
      label: "Create Template",
      kind: "action",
      typeLabel: "Action",
      desc: "Generate a landing-page template from approved campaign content.",
      input: "CampaignData",
      output: "Template",
    },
    {
      id: "publish",
      label: "Publish to Site",
      kind: "action",
      typeLabel: "Action",
      desc: "Create or update the new post on the Dolphin website.",
      input: "PublishReady",
      output: "PublishedURL",
    },
    {
      id: "media",
      label: "Media Agent",
      kind: "agent",
      typeLabel: "AI Agent",
      desc: "Decide whether media is needed and prepare image/video briefs.",
      input: "PublishedURL",
      output: "MediaPlan",
    },
    {
      id: "create-media",
      label: "Create Media",
      kind: "action",
      typeLabel: "Action",
      desc: "Generate or collect the required visual assets when requested.",
      input: "MediaPlan",
      output: "MediaAssets",
    },
    {
      id: "human-report",
      label: "Human Check · Report",
      kind: "human",
      typeLabel: "Approval",
      desc: "Confirm the day's figures before sending the overview report.",
      input: "RunContext",
      output: "ReportApproved",
    },
    {
      id: "report",
      label: "Overview Report",
      kind: "action",
      typeLabel: "Action",
      desc: "Summarize topics, content produced, published URLs, media and issues.",
      input: "ReportApproved",
      output: "DailyReport",
    },
    {
      id: "next",
      label: "Next Day",
      kind: "logic",
      typeLabel: "Loop",
      desc: "Persist run state and wait for the next cron trigger.",
      output: "NextRun",
    },
  ],
  painEyebrow: "The gap",
  painTitle: "Using AI but still working by hand?",
  painSupport:
    "Many teams use AI in fragmented ways — hard to scale, hard to standardize, and hard to see what AI is actually doing.",
  painCols: [
    {
      title: "Typical AI usage",
      items: [
        "Manual copy-paste between tools",
        "Everyone prompts differently",
        "No visibility into AI steps",
        "Re-enter context every run",
        "All AI or no AI — no middle ground",
      ],
    },
    {
      title: "With Dolphin Intelligence",
      items: [
        "Connected workflows pass data automatically",
        "Standardized process across the team",
        "Transparent execution step by step",
        "Context stored and reused",
        "Humans join at the right checkpoints",
      ],
    },
  ],
  whatEyebrow: "Definition",
  whatTitle: "What is Dolphin Intelligence?",
  whatSupport:
    "An AI workflow platform to build and operate intelligent processes — placing AI and people where each belongs. Design the full chain from intake to publish and reporting in one schedulable, extensible system.",
  whatVs: [
    {
      title: "Chatbot / AI assistant",
      body: "Best for quick answers, single tasks, or real-time end-user support.",
    },
    {
      title: "Dolphin Intelligence",
      body: "Best for multi-step linked automation, role-based agents, and human checkpoints at the right points.",
    },
  ],
  pillarsEyebrow: "Core",
  pillarsTitle: "Four building blocks of an AI workflow",
  pillarsSupport:
    "Every workflow is composed from four component types — mixed to match your real process.",
  pillars: [
    {
      kind: "agent",
      title: "AI Agent",
      body: "The thinking and decision layer. Each agent has context, instructions, and schema — consistent without re-prompting every time.",
    },
    {
      kind: "action",
      title: "Action",
      body: "Real-world execution: APIs, CMS, email, deploys, reports. Agents decide — actions do.",
    },
    {
      kind: "logic",
      title: "Logic",
      body: "Orchestration: conditions, loops, parallel branches, and schedule triggers.",
    },
    {
      kind: "human",
      title: "Human Checkpoint",
      body: "Controlled pause for review and approval before the flow continues.",
    },
  ],
  agentEyebrow: "Agent",
  agentTitle: "The brain of the AI workflow",
  agentSupport:
    "Four configuration pillars keep agents consistent regardless of who runs the flow.",
  agentItems: [
    { title: "Context", body: "Background on the task, business, or campaign." },
    {
      title: "Instructions",
      body: "How the agent should behave, prioritize, and stay within bounds.",
    },
    {
      title: "Input / Output schema",
      body: "What data comes in and what structure comes out.",
    },
    {
      title: "Role / behavior",
      body: "Research, Content, SEO, Review, Media — by position in the workflow.",
    },
  ],
  actionEyebrow: "Action",
  actionTitle: "Connect workflows to real systems",
  actionSupport:
    "Actions turn agent decisions into work inside your current stack.",
  actionItems: [
    "API and webhook calls",
    "Create / update CMS content",
    "Email and notifications",
    "Deploy landing / publish posts",
    "Create media and overview reports",
  ],
  whyEyebrow: "Why us",
  whyTitle: "Why choose Dolphin Intelligence?",
  whyItems: [
    {
      title: "Full workflow — not a chatbot",
      body: "Role-based agents, real system actions, and logic for multi-step linked processes.",
    },
    {
      title: "Transparent and controllable",
      body: "Review what AI did, why, and with what result — not a black box.",
    },
    {
      title: "Humans in the right place",
      body: "Checkpoints for critical judgment; delegate the rest to the workflow.",
    },
    {
      title: "Fits your current stack",
      body: "Connect tools you already use — no rip-and-replace required.",
    },
    {
      title: "Scales with need",
      body: "From a few nodes to many agents, parallel branches, and triggers.",
    },
    {
      title: "Custom build support",
      body: "Design and custom integrations for your real operating process.",
    },
  ],
  deployEyebrow: "Delivery",
  deployTitle: "From idea to running AI workflow — 8 steps",
  deploySupport:
    "Not only software — a structured path so the workflow works in production.",
  deploySteps: [
    {
      title: "Discover processes",
      body: "Find the highest-cost loops that fit automation.",
    },
    {
      title: "Design the workflow",
      body: "Sketch agents, actions, logic, and human checkpoints.",
    },
    {
      title: "Configure agents",
      body: "Define roles, context, instructions, and schemas.",
    },
    {
      title: "Connect actions",
      body: "Integrate APIs, CMS, email, content tools…",
    },
    {
      title: "Build logic and triggers",
      body: "Conditions, loops, branches, and schedules.",
    },
    {
      title: "Pilot and refine",
      body: "Test with real data; adjust step by step.",
    },
    {
      title: "Train and hand off",
      body: "Enable the team to operate, monitor, and edit.",
    },
    {
      title: "Optimize continuously",
      body: "Track performance; expand and add new flows.",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Frequently asked questions",
  faqItems: [
    {
      q: "Do I need coding skills?",
      a: "No. Drag-and-drop building covers most edits. Dolphin’s team helps with configuration and integrations when needed.",
    },
    {
      q: "Can it integrate with tools I already use?",
      a: "Yes — common actions out of the box, plus any API-capable system. Custom integrations are available for special cases.",
    },
    {
      q: "Can workflows run fully automatically?",
      a: "Depending on your design. Fully automatic where appropriate; human checkpoints where judgment matters.",
    },
    {
      q: "Can I review execution history?",
      a: "Yes. Each workflow run is recorded so you can track results, spot issues, and improve steps over time.",
    },
    {
      q: "What if my process is complex and unique?",
      a: "Beyond platform features, Dolphin can design workflows and custom integrations for your specific ops.",
    },
    {
      q: "How is this different from a chatbot or assistant?",
      a: "Chatbots/assistants handle single questions or tasks on demand. Dolphin Intelligence orchestrates multi-agent workflows with real actions on schedules or triggers.",
    },
    {
      q: "What company size is it for?",
      a: "SMBs, startups, agencies, software companies, and ops teams that want standardized automation — from one simple workflow to many agents and branches.",
    },
  ],
  closeEyebrow: "Get started",
  closeTitle: "Ready to build your first AI workflow?",
  closeSupport:
    "Run smarter processes by placing AI agents and people where each belongs — not by replacing humans wholesale.",
  closeCta: "Book a consult",
  closeSecondary: "See sample workflow",
  closeTrust: "Dolphin Software · Build · Modernize · Automate · Care",
};

const ja: DolphinIntelligenceCopy = {
  metaTitle:
    "Dolphin Intelligence — 企業向けAIワークフロー基盤 | Dolphin Software",
  metaDescription:
    "Dolphin Intelligenceは、AIエージェント・アクション・ヒューマンチェックポイントで業務を自動化するAIワークフロー基盤です。コード不要、コントロールは維持。",
  eyebrow: "企業向けAIワークフロー基盤",
  headline:
    "Dolphin Intelligence：繰り返し業務を[[自動AIワークフロー]]へ",
  support:
    "AIエージェント、実世界アクション、条件ロジック、ヒューマンチェックポイントを一つのシステムで設計・運用。コードなしでも統制を失いません。",
  audienceLine:
    "チャットボットでも単発アシスタントでもありません。考えるエージェント、実行するアクション、適切なタイミングの人の関与です。",
  ctaPrimary: "相談を予約",
  ctaSecondary: "サンプルフローを見る",
  trustLine: "Agent · Action · Logic · Human Checkpoint",
  workflowEyebrow: "サンプル",
  workflowTitle: "Daily Content Engine — 調査から翌日レポートまで",
  workflowSupport:
    "日次ループ：cron、調査・執筆エージェント、人の確認、Jasper/SEO/レビュー、LPまたは公開の分岐、メディア、概要レポート、そして翌日へ。",
  workflowCanvasTitle: "Workflow canvas · Daily Content Engine",
  workflowCampaignName: "Website Marketing Campaign",
  workflowRunningLabel: "Daily workflow 実行中",
  workflowStatusReady: "Ready",
  workflowStatusRunning: "Running",
  workflowStageActive: "進行中",
  workflowStageDone: "完了",
  workflowStageQueued: "待機",
  workflowStageRemoving: "削除中…",
  workflowStageRemoved: "削除済み",
  workflowCountNodes: "Nodes",
  workflowLegend: [
    { kind: "agent", label: "Agent" },
    { kind: "action", label: "Action" },
    { kind: "logic", label: "Logic" },
    { kind: "human", label: "Human" },
  ],
  workflowStages: [
    { id: "s1", label: "Stage 1 · Trigger + Research" },
    { id: "s2", label: "Stage 2 · Content plan + Human check" },
    { id: "s3", label: "Stage 3 · Content production" },
    { id: "s4", label: "Stage 4 · SEO + Human check" },
    { id: "s5", label: "Stage 5 · Review + Human check" },
    { id: "s6", label: "Stage 6 · Publish / Landing page" },
    { id: "s7", label: "Stage 7 · Media" },
    { id: "s8", label: "Stage 8 · Overview + Human check" },
  ],
  workflowBadges: [
    { id: "approved", label: "Approved", tone: "pass" },
    { id: "reject", label: "Reject → Content へ戻る", tone: "fail" },
    { id: "media", label: "If media needed", tone: "info" },
  ],
  workflowNodes: [
    {
      id: "cron",
      label: "Daily Cron",
      kind: "logic",
      typeLabel: "Trigger",
      desc: "毎日 08:00 にこのワークフローを開始。",
      output: "DailyRun",
    },
    {
      id: "research",
      label: "Research Agent",
      kind: "agent",
      typeLabel: "AI Agent",
      desc: "設定済みネットワークからトピック・トレンド・機会を発見。",
      input: "CampaignTopic",
      output: "TopicList",
    },
    {
      id: "research-net",
      label: "Research Network",
      kind: "action",
      typeLabel: "Action",
      desc: "公開シグナル・参考・ソース素材を収集。",
      input: "CampaignTopic",
      output: "Sources",
    },
    {
      id: "content",
      label: "Content Agent",
      kind: "agent",
      typeLabel: "AI Agent",
      desc: "調査シグナルを優先付きコンテンツキューに変換。",
      input: "Sources",
      output: "TopicQueue",
    },
    {
      id: "human",
      label: "Human Check · Topics",
      kind: "human",
      typeLabel: "Approval",
      desc: "本日のトピックを確認。弱い案を削除・並び替え・一括承認。",
      input: "TopicQueue",
      output: "ApprovedTopics",
    },
    {
      id: "jasper",
      label: "Jasper",
      kind: "action",
      typeLabel: "Action · API",
      desc: "承認済みトピックの全文ドラフトを生成。",
      input: "ApprovedTopics",
      output: "Drafts",
    },
    {
      id: "seo",
      label: "SEO Agent",
      kind: "agent",
      typeLabel: "AI Agent",
      desc: "意図・タイトル・構造・エンティティ・内部リンク・GEO を最適化。",
      input: "Drafts",
      output: "OptimizedContent",
    },
    {
      id: "human-seo",
      label: "Human Check · SEO",
      kind: "human",
      typeLabel: "Approval",
      desc: "品質レビュー前にタイトル・メタ・構造を承認。",
      input: "OptimizedContent",
      output: "SeoApproved",
    },
    {
      id: "review",
      label: "Review Agent",
      kind: "agent",
      typeLabel: "AI Agent",
      desc: "品質・事実整合・SEO・ブランド適合・公開可否性を採点。",
      input: "SeoApproved",
      output: "ReviewResult",
    },
    {
      id: "human-publish",
      label: "Human Check · Publish",
      kind: "human",
      typeLabel: "Approval",
      desc: "LP作成または公開前の最終承認。",
      input: "ReviewResult",
      output: "PublishReady",
    },
    {
      id: "landing",
      label: "Create Template",
      kind: "action",
      typeLabel: "Action",
      desc: "承認済みキャンペーン内容から LP テンプレートを生成。",
      input: "CampaignData",
      output: "Template",
    },
    {
      id: "publish",
      label: "Publish to Site",
      kind: "action",
      typeLabel: "Action",
      desc: "サイト上の新規投稿を作成または更新。",
      input: "PublishReady",
      output: "PublishedURL",
    },
    {
      id: "media",
      label: "Media Agent",
      kind: "agent",
      typeLabel: "AI Agent",
      desc: "メディア要否を判断し、画像/動画ブリーフを準備。",
      input: "PublishedURL",
      output: "MediaPlan",
    },
    {
      id: "create-media",
      label: "Create Media",
      kind: "action",
      typeLabel: "Action",
      desc: "必要時にビジュアルアセットを生成または収集。",
      input: "MediaPlan",
      output: "MediaAssets",
    },
    {
      id: "human-report",
      label: "Human Check · Report",
      kind: "human",
      typeLabel: "Approval",
      desc: "概要レポート送信前に当日の数値を確認。",
      input: "RunContext",
      output: "ReportApproved",
    },
    {
      id: "report",
      label: "Overview Report",
      kind: "action",
      typeLabel: "Action",
      desc: "トピック・制作物・URL・メディア・問題を要約。",
      input: "ReportApproved",
      output: "DailyReport",
    },
    {
      id: "next",
      label: "Next Day",
      kind: "logic",
      typeLabel: "Loop",
      desc: "実行状態を保存し、次の cron を待つ。",
      output: "NextRun",
    },
  ],
  painEyebrow: "課題",
  painTitle: "AIを使っても手作業のまま？",
  painSupport:
    "分断された使い方では拡張・標準化が難しく、AIが何をしているかも見えません。",
  painCols: [
    {
      title: "よくある使い方",
      items: [
        "ツール間の手動コピー",
        "人ごとに違うプロンプト",
        "AIの手順が見えない",
        "毎回コンテキストを入れ直し",
        "全部AIか、AIなしの二択",
      ],
    },
    {
      title: "Dolphin Intelligence",
      items: [
        "つながったフローでデータ連携",
        "チーム全体で標準化",
        "ステップごとに透明",
        "コンテキストを再利用",
        "人が適切な地点で関与",
      ],
    },
  ],
  whatEyebrow: "定義",
  whatTitle: "Dolphin Intelligenceとは？",
  whatSupport:
    "人とAIを正しい位置に置くためのAIワークフロー基盤。収集から公開・報告までをスケジュール可能な一連の流れとして設計できます。",
  whatVs: [
    {
      title: "チャットボット / アシスタント",
      body: "単発の質問・タスク、リアルタイムのエンドユーザー支援に向きます。",
    },
    {
      title: "Dolphin Intelligence",
      body: "複数ステップの連携自動化、役割別エージェント、適切なチェックポイントに向きます。",
    },
  ],
  pillarsEyebrow: "中核",
  pillarsTitle: "AIワークフローの4要素",
  pillarsSupport: "現実の業務に合わせて4種類の部品を組み合わせます。",
  pillars: [
    {
      kind: "agent",
      title: "AI Agent",
      body: "思考と判断の層。コンテキスト・指示・スキーマで一貫動作。",
    },
    {
      kind: "action",
      title: "Action",
      body: "API・CMS・メール・公開・レポートなど実世界の実行。",
    },
    {
      kind: "logic",
      title: "Logic",
      body: "条件・ループ・並列分岐・スケジュール起動。",
    },
    {
      kind: "human",
      title: "Human Checkpoint",
      body: "続行前に人が確認・承認する制御ポイント。",
    },
  ],
  agentEyebrow: "Agent",
  agentTitle: "ワークフローの頭脳",
  agentSupport: "4つの設定で、誰が起動しても一貫した結果を保ちます。",
  agentItems: [
    { title: "コンテキスト", body: "タスク・事業・キャンペーンの背景。" },
    { title: "指示", body: "振る舞い・優先・境界。" },
    { title: "入出力スキーマ", body: "受け取るデータと返す構造。" },
    {
      title: "役割 / 振る舞い",
      body: "Research / Content / SEO / Review / Media など。",
    },
  ],
  actionEyebrow: "Action",
  actionTitle: "現実のシステムへ接続",
  actionSupport: "エージェントの判断を、既存スタック上の作業に変えます。",
  actionItems: [
    "API / Webhook",
    "CMSの作成・更新",
    "メールと通知",
    "LPデプロイ / 記事公開",
    "メディア作成と概要レポート",
  ],
  whyEyebrow: "選ぶ理由",
  whyTitle: "なぜ Dolphin Intelligence か",
  whyItems: [
    {
      title: "完成したワークフロー — チャットボットではない",
      body: "役割別エージェント、実システムへのアクション、多段連携に対応。",
    },
    {
      title: "透明で制御可能",
      body: "何をしたか・なぜ・結果はどうかをレビュー可能。",
    },
    {
      title: "人は正しい位置に",
      body: "重要判断はチェックポイント、それ以外は委任。",
    },
    {
      title: "既存スタックに適合",
      body: "今のツールに接続 — 全面置換は不要。",
    },
    {
      title: "必要に応じて拡張",
      body: "少数ノードから多エージェント・並列分岐まで。",
    },
    {
      title: "要件に応じた構築支援",
      body: "実業務に合わせた設計とカスタム連携。",
    },
  ],
  deployEyebrow: "導入",
  deployTitle: "アイデアから稼働まで — 8ステップ",
  deploySupport: "本番で動くための構造化された導入プロセスです。",
  deploySteps: [
    { title: "業務の発見", body: "自動化に合う高コスト工程を特定。" },
    { title: "フロー設計", body: "エージェント・アクション・ロジック・人の関与。" },
    { title: "エージェント設定", body: "役割・文脈・指示・スキーマ。" },
    { title: "アクション接続", body: "API・CMS・メールなど。" },
    { title: "ロジックとトリガー", body: "条件・ループ・分岐・スケジュール。" },
    { title: "試験と調整", body: "実データで検証し段階的に改善。" },
    { title: "研修と引き渡し", body: "運用・監視・編集をチームへ。" },
    { title: "継続最適化", body: "性能を見て拡張・新規フロー追加。" },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "よくある質問",
  faqItems: [
    {
      q: "プログラミングは必要ですか？",
      a: "不要です。ドラッグ＆ドロップで構築・編集できます。必要時は Dolphin が設定と連携を支援します。",
    },
    {
      q: "既存ツールと連携できますか？",
      a: "一般的なアクションに加え、API可能なシステムへ接続可能。特殊要件はカスタム連携も対応します。",
    },
    {
      q: "完全自動で回せますか？",
      a: "設計次第です。適した作業は自動、判断が必要な点はヒューマンチェックポイントを置けます。",
    },
    {
      q: "実行履歴は見られますか？",
      a: "はい。各実行を記録し、結果追跡・問題発見・改善に使えます。",
    },
    {
      q: "特殊で複雑な業務でも対応できますか？",
      a: "プラットフォーム機能に加え、設計とカスタム連携の支援が可能です。",
    },
    {
      q: "チャットボットとの違いは？",
      a: "チャットボットは単発の質問・タスク向き。Dolphin Intelligence は役割別エージェントと実アクションをスケジュール／トリガーで動かす基盤です。",
    },
    {
      q: "どんな規模向けですか？",
      a: "SMB・スタートアップ・代理店・ソフトウェア企業・運用チーム向け。単純な1フローから多エージェントまで拡張できます。",
    },
  ],
  closeEyebrow: "はじめよう",
  closeTitle: "最初のAIワークフローを作れますか？",
  closeSupport:
    "人を丸ごと置き換えるのではなく、エージェントと人を正しい位置に置くことで、より賢い運用へ。",
  closeCta: "相談を予約",
  closeSecondary: "サンプルフローを見る",
  closeTrust: "Dolphin Software · Build · Modernize · Automate · Care",
};

const byLocale: Record<Locale, DolphinIntelligenceCopy> = {
  vi,
  en,
  ja,
};

export function getDolphinIntelligenceCopy(
  locale: Locale,
): DolphinIntelligenceCopy {
  return byLocale[locale] ?? vi;
}
