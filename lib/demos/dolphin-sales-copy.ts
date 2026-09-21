/** Dolphin Admin UI — vi / en (workspace `/demos/admin/`). */

import {
  type LeadStage,
  LEAD_STAGES,
  isLeadStage,
} from "@/lib/demos/sales-process";

export type SalesLocale = "vi" | "en";

export const SALES_LOCALE_KEY = "dolphin-sales-locale";

export type DolphinSalesCopy = {
  brand: string;
  workspaceName: string;
  loading: string;
  soon: string;
  gate: {
    title: string;
    lead: string;
    tokenLabel: string;
    tokenPlaceholder: string;
    submit: string;
    back: string;
    tokenRequired: string;
  };
  workspaces: {
    label: string;
    sale: string;
    crm: string;
    analytics: string;
  };
  side: {
    search: string;
    saleGroup: string;
    crmGroup: string;
    analyticsGroup: string;
    navPipeline: string;
    navPlaybook: string;
    navActivities: string;
    navContacts: string;
    navCompanies: string;
    navOverview: string;
    navReports: string;
    refresh: string;
    refreshing: string;
    demoVault: string;
    signOut: string;
    langLabel: string;
    available: string;
  };
  top: {
    searchPlaceholder: string;
    breadcrumbHome: string;
    filters: string;
    clearFilters: string;
    filtersActive: string;
  };
  hero: {
    title: string;
    description: string;
    newDeal: string;
  };
  forecast: {
    title: string;
    hint: string;
    pipeline: string;
    weighted: string;
    winRate: string;
  };
  teamKpi: {
    title: string;
    owner: string;
    openDeals: string;
    won: string;
    winRate: string;
    atRisk: string;
    soonCalls: string;
    soonMeetings: string;
  };
  crmPage: {
    title: string;
    description: string;
    soonTitle: string;
    soonBody: string;
  };
  analyticsPage: {
    title: string;
    description: string;
  };
  kpi: {
    totalLeads: string;
    qualified: string;
    inProgress: string;
    converted: string;
    pipelineValue: string;
    atRisk: string;
  };
  tabs: {
    all: string;
  };
  view: {
    list: string;
    board: string;
    label: string;
  };
  board: {
    idle: string;
    empty: string;
  };
  table: {
    searchLeads: string;
    lead: string;
    company: string;
    stage: string;
    amount: string;
    owner: string;
    idle: string;
    source: string;
    lastActivity: string;
    nextAction: string;
    edit: string;
    open: string;
    emptyAll: string;
    emptyFiltered: string;
    emptyHint: string;
    loading: string;
    showing: string;
  };
  nextAction: {
    followUp: string;
    qualify: string;
    discover: string;
    propose: string;
    close: string;
    deliver: string;
    nurture: string;
    none: string;
  };
  drawer: {
    lead: string;
    contactSection: string;
    dealSection: string;
    activitySection: string;
    notesSection: string;
    timelineSection: string;
    profile360: string;
    profile360Soon: string;
    stage: string;
    amount: string;
    account: string;
    contact: string;
    phone: string;
    close: string;
    owner: string;
    idle: string;
    lastActivity: string;
    nextAction: string;
    note: string;
    delete: string;
    edit: string;
    deleteConfirm: string;
    emptyTitle: string;
    emptyBody: string;
    created: string;
    activityTouch: string;
    noteOnFile: string;
    noTimeline: string;
  };
  form: {
    editTitle: string;
    newTitle: string;
    sectionBasic: string;
    sectionSales: string;
    sectionContext: string;
    dealTitle: string;
    dealTitlePh: string;
    company: string;
    contactName: string;
    phone: string;
    amount: string;
    currency: string;
    stage: string;
    closeDate: string;
    owner: string;
    source: string;
    atRisk: string;
    note: string;
    cancel: string;
    save: string;
    saving: string;
    requiredFields: string;
  };
  filters: {
    owner: string;
    ownerAll: string;
    source: string;
    excludeCareers: string;
    allSources: string;
    idle: string;
    idleAll: string;
    idleOk: string;
    idleWarn: string;
    idleBad: string;
  };
  playbook: {
    title: string;
    intro: string;
    qualifyTitle: string;
    sla: string;
    output: string;
    principles: string[];
    qualify: string[];
    steps: {
      stage: LeadStage;
      title: string;
      body: string;
      sla: string;
      output: string;
    }[];
  };
  stageLabels: Record<LeadStage, string>;
  stageShort: Record<LeadStage, string>;
};

const STAGE_LABELS_VI: Record<LeadStage, string> = {
  new: "1 · New (Mới tiếp cận)",
  qualified: "2 · Survey (Đang khảo sát)",
  discover: "3 · Discovery (Khảo sát sâu)",
  propose: "4 · Quote (Báo giá / Thương lượng)",
  won: "5 · Won (Chốt)",
  deliver: "6 · Deliver (Bàn giao)",
  expand: "7 · Expand (Mở rộng)",
  lost: "Lost (Mất)",
  nurture: "Nurture (Nuôi dưỡng)",
  out_of_scope: "Out of scope (Không fit)",
};

const STAGE_LABELS_EN: Record<LeadStage, string> = {
  new: "1 · New outreach",
  qualified: "2 · Discovery / survey",
  discover: "3 · Deep discovery",
  propose: "4 · Quote / negotiation",
  won: "5 · Won / closed",
  deliver: "6 · Deliver",
  expand: "7 · Care / Expand",
  lost: "Lost",
  nurture: "Nurture",
  out_of_scope: "Out of scope",
};

const STAGE_SHORT_VI: Record<LeadStage, string> = {
  new: "New (Mới tiếp cận)",
  qualified: "Survey (Khảo sát)",
  discover: "Discovery (Khảo sát sâu)",
  propose: "Quote (Báo giá)",
  won: "Won (Chốt)",
  deliver: "Deliver (Bàn giao)",
  expand: "Expand (Mở rộng)",
  lost: "Lost (Mất)",
  nurture: "Nurture (Nuôi dưỡng)",
  out_of_scope: "Out of scope (Không fit)",
};

const STAGE_SHORT_EN: Record<LeadStage, string> = {
  new: "New",
  qualified: "Survey",
  discover: "Discovery",
  propose: "Quote",
  won: "Won",
  deliver: "Deliver",
  expand: "Expand",
  lost: "Lost",
  nurture: "Nurture",
  out_of_scope: "Out of scope",
};

const VI: DolphinSalesCopy = {
  brand: "Dolphin Admin",
  workspaceName: "Dolphin Software",
  loading: "Đang tải…",
  soon: "Sắp có",
  gate: {
    title: "Đăng nhập workspace",
    lead: "Dolphin Admin — CRM / Sales nội bộ. Dán workspace token (chỉ lưu session).",
    tokenLabel: "Workspace token",
    tokenPlaceholder: "LEADS_ADMIN_TOKEN…",
    submit: "Tiếp tục",
    back: "← Demo vault",
    tokenRequired: "Nhập workspace token",
  },
  workspaces: {
    label: "Không gian làm việc",
    sale: "Bán hàng",
    crm: "CRM",
    analytics: "Phân tích",
  },
  side: {
    search: "Tìm kiếm",
    saleGroup: "Bán hàng",
    crmGroup: "CRM",
    analyticsGroup: "Phân tích",
    navPipeline: "Sales Pipeline",
    navPlaybook: "Playbook",
    navActivities: "Activities",
    navContacts: "Contacts",
    navCompanies: "Companies",
    navOverview: "Overview",
    navReports: "Reports",
    refresh: "Làm mới",
    refreshing: "Đang tải…",
    demoVault: "Demo vault",
    signOut: "Đăng xuất",
    langLabel: "Ngôn ngữ",
    available: "Sẵn sàng",
  },
  top: {
    searchPlaceholder: "Tìm deal, liên hệ…",
    breadcrumbHome: "Dolphin Admin",
    filters: "Bộ lọc",
    clearFilters: "Xóa bộ lọc",
    filtersActive: "đang lọc",
  },
  hero: {
    title: "Sales Pipeline",
    description:
      "B2B / giải pháp & hợp đồng — theo dõi thương vụ từ tiếp cận đến chốt. Chu kỳ dài, giá trị lớn, nhiều vòng đàm phán.",
    newDeal: "Add Deal",
  },
  forecast: {
    title: "Sales Forecasting",
    hint: "Ước lượng theo giai đoạn — chưa phải forecast SaaS đầy đủ.",
    pipeline: "Open pipeline",
    weighted: "Weighted forecast",
    winRate: "Win rate",
  },
  teamKpi: {
    title: "Team KPI",
    owner: "Owner",
    openDeals: "Open deals",
    won: "Won",
    winRate: "Win rate",
    atRisk: "At risk",
    soonCalls: "Cuộc gọi — sắp có",
    soonMeetings: "Cuộc hẹn — sắp có",
  },
  crmPage: {
    title: "CRM",
    description:
      "Hồ sơ khách hàng 360° — lịch sử gọi, email, họp, hợp đồng. Workspace riêng ngoài đường ống bán hàng.",
    soonTitle: "CRM 360° sắp có",
    soonBody:
      "Liên hệ / Công ty và nhật ký hoạt động đầy đủ sẽ vào đây. Hiện dùng ghi chú + timeline tối thiểu trên từng deal trong Bán hàng.",
  },
  analyticsPage: {
    title: "Phân tích",
    description:
      "Sức khỏe pipeline, dự báo ước lượng và KPI theo người phụ trách từ data deal thật.",
  },
  kpi: {
    totalLeads: "Total deals",
    qualified: "Survey",
    inProgress: "In progress",
    converted: "Won",
    pipelineValue: "Pipeline value",
    atRisk: "At risk",
  },
  tabs: {
    all: "All",
  },
  view: {
    list: "List",
    board: "Board",
    label: "View",
  },
  board: {
    idle: "{n}d",
    empty: "Empty",
  },
  table: {
    searchLeads: "Lọc trong danh sách…",
    lead: "Deal",
    company: "Company",
    stage: "Stage",
    amount: "Value",
    owner: "Owner",
    idle: "Idle",
    source: "Source",
    lastActivity: "Last activity",
    nextAction: "Next",
    edit: "Edit",
    open: "Open",
    emptyAll: "Chưa có deal",
    emptyFiltered: "Không tìm thấy deal",
    emptyHint: "Đổi bộ lọc hoặc thêm deal mới.",
    loading: "Đang tải…",
    showing: "{from}–{to} / {total}",
  },
  nextAction: {
    followUp: "Follow up",
    qualify: "Survey",
    discover: "Discover call",
    propose: "Send proposal",
    close: "Close deal",
    deliver: "Kickoff",
    nurture: "Nurture",
    none: "—",
  },
  drawer: {
    lead: "Deal",
    contactSection: "Contact",
    dealSection: "Deal",
    activitySection: "Activity",
    notesSection: "Notes",
    timelineSection: "Timeline",
    profile360: "Customer 360°",
    profile360Soon:
      "Lịch sử gọi / email / họp / hợp đồng đầy đủ — sắp có trong workspace CRM.",
    stage: "Stage",
    amount: "Value",
    account: "Company",
    contact: "Person",
    phone: "Phone",
    close: "Expected close",
    owner: "Owner",
    idle: "Idle",
    lastActivity: "Last activity",
    nextAction: "Suggested next",
    note: "Notes",
    delete: "Delete",
    edit: "Edit deal",
    deleteConfirm: "Xóa deal “{title}”?",
    emptyTitle: "Chọn một deal",
    emptyBody: "Click một dòng hoặc thẻ board để xem chi tiết và đổi stage.",
    created: "Deal created",
    activityTouch: "Last activity recorded",
    noteOnFile: "Note on file",
    noTimeline: "Chưa có mốc nào ngoài thời gian tạo.",
  },
  form: {
    editTitle: "Edit deal",
    newTitle: "New deal",
    sectionBasic: "Basic information",
    sectionSales: "Sales information",
    sectionContext: "Context",
    dealTitle: "Deal name",
    dealTitlePh: "Website DN + Care 12 tháng…",
    company: "Company",
    contactName: "Contact name",
    phone: "Phone / Zalo",
    amount: "Value",
    currency: "Currency",
    stage: "Stage",
    closeDate: "Expected close",
    owner: "Owner",
    source: "Source",
    atRisk: "Mark at-risk",
    note: "Notes",
    cancel: "Cancel",
    save: "Save",
    saving: "Saving…",
    requiredFields: "Tên liên hệ và SĐT bắt buộc",
  },
  filters: {
    owner: "Owner",
    ownerAll: "All owners",
    source: "Source",
    excludeCareers: "Exclude careers",
    allSources: "All sources",
    idle: "Idle",
    idleAll: "Any idle",
    idleOk: "0–2 days",
    idleWarn: "3–6 days",
    idleBad: "7+ days",
  },
  playbook: {
    title: "Sales playbook",
    intro:
      "Pipeline giải pháp / hợp đồng — bắt đầu từ vấn đề, không từ sản phẩm. Chu kỳ dài, nhiều vòng khảo sát & đàm phán.",
    qualifyTitle: "Qualify questions",
    sla: "SLA",
    output: "Output",
    principles: [
      "Bắt đầu từ vấn đề, không từ sản phẩm.",
      "Cold SMB: không mở bằng AI Agent — ưu tiên website / báo giá khi khớp.",
      "USP: pain → Build (khi fit) → Care / Ops / Automate khi pain khớp.",
    ],
    qualify: [
      "Anh chị đang nghẽn chỗ nào nhất?",
      "Muốn kết quả gì trong 30–60 ngày?",
      "Đã có website / fanpage / Zalo OA chưa?",
      "Ai quyết định + khung ngân sách tạm?",
    ],
    steps: [
      {
        stage: "new",
        title: "Mới tiếp cận",
        body: "Thu cơ hội từ Zalo, form quote/contact, hoặc nhập tay. Ghi nguồn + ghi chú ngắn. Không mở đầu bằng AI Agent.",
        sla: "≤ 1 giờ (giờ HC); ngoài giờ ≤ 8h sáng hôm sau",
        output: "Bản ghi deal",
      },
      {
        stage: "qualified",
        title: "Đang khảo sát",
        body: "Hỏi pain, mục tiêu, timeline, ai quyết định. Phân loại: Build web / Care–Ops / Custom / Không fit.",
        sla: "≤ 24 giờ",
        output: "Giai đoạn + hướng tiếp theo",
      },
      {
        stage: "discover",
        title: "Khảo sát sâu",
        body: "15–30’ nghe: bán gì, khách tìm thế nào, lead đang trôi đâu, đã có site chưa.",
        sla: "Trong 2–3 ngày sau khảo sát",
        output: "Brief 5–8 dòng",
      },
      {
        stage: "propose",
        title: "Báo giá / Thương lượng",
        body: "Scope rõ + mốc + bàn giao. Gửi báo giá, đàm phán điều khoản.",
        sla: "≤ 2 ngày sau khảo sát sâu",
        output: "Quote / phiếu báo giá",
      },
      {
        stage: "won",
        title: "Chốt",
        body: "Chốt gói, tạm ứng, kickoff. Ghi điều kiện bảo hành.",
        sla: "Theo lịch khách",
        output: "HĐ / xác nhận Zalo + thanh toán",
      },
      {
        stage: "deliver",
        title: "Bàn giao",
        body: "Làm theo milestone, demo định kỳ, bàn giao source + hướng dẫn vận hành.",
        sla: "Theo scope đã ký",
        output: "Go-live + bàn giao",
      },
      {
        stage: "expand",
        title: "Care / Mở rộng",
        body: "Review sau go-live. Upsell Care / Ops / Intelligence chỉ khi pain khớp.",
        sla: "+30 / +90 ngày",
        output: "Upsell hoặc nuôi dưỡng",
      },
    ],
  },
  stageLabels: STAGE_LABELS_VI,
  stageShort: STAGE_SHORT_VI,
};

const EN: DolphinSalesCopy = {
  brand: "Dolphin Admin",
  workspaceName: "Dolphin Software",
  loading: "Loading…",
  soon: "Soon",
  gate: {
    title: "Sign in to workspace",
    lead: "Dolphin Admin — internal CRM / Sales. Paste your workspace token (session only).",
    tokenLabel: "Workspace token",
    tokenPlaceholder: "LEADS_ADMIN_TOKEN…",
    submit: "Continue",
    back: "← Demo vault",
    tokenRequired: "Enter workspace token",
  },
  workspaces: {
    label: "Workspace",
    sale: "Sale",
    crm: "CRM",
    analytics: "Analytics",
  },
  side: {
    search: "Search",
    saleGroup: "Sale",
    crmGroup: "CRM",
    analyticsGroup: "Analytics",
    navPipeline: "Sales Pipeline",
    navPlaybook: "Playbook",
    navActivities: "Activities",
    navContacts: "Contacts",
    navCompanies: "Companies",
    navOverview: "Overview",
    navReports: "Reports",
    refresh: "Refresh",
    refreshing: "Refreshing…",
    demoVault: "Demo vault",
    signOut: "Sign out",
    langLabel: "Language",
    available: "Available",
  },
  top: {
    searchPlaceholder: "Search deals, contacts…",
    breadcrumbHome: "Dolphin Admin",
    filters: "Filters",
    clearFilters: "Clear filters",
    filtersActive: "active",
  },
  hero: {
    title: "Sales Pipeline",
    description:
      "B2B / solutions & contracts — track opportunities from outreach to close. Long cycle, high value, multi-touch negotiation.",
    newDeal: "Add Deal",
  },
  forecast: {
    title: "Sales Forecasting",
    hint: "Stage-weighted heuristic — not a full SaaS forecast engine yet.",
    pipeline: "Open pipeline",
    weighted: "Weighted forecast",
    winRate: "Win rate",
  },
  teamKpi: {
    title: "Team KPI",
    owner: "Owner",
    openDeals: "Open deals",
    won: "Won",
    winRate: "Win rate",
    atRisk: "At risk",
    soonCalls: "Calls — coming soon",
    soonMeetings: "Meetings — coming soon",
  },
  crmPage: {
    title: "CRM",
    description:
      "Customer 360° — calls, email, meetings, signed contracts. Separate from the Sale pipeline workspace.",
    soonTitle: "CRM 360° coming soon",
    soonBody:
      "Contacts / Companies and full activity log land here. For now use deal notes + minimal timeline in Sale.",
  },
  analyticsPage: {
    title: "Analytics",
    description:
      "Pipeline health, heuristic forecast, and owner KPIs from live deal data.",
  },
  kpi: {
    totalLeads: "Total deals",
    qualified: "Survey",
    inProgress: "In progress",
    converted: "Won",
    pipelineValue: "Pipeline value",
    atRisk: "At risk",
  },
  tabs: {
    all: "All",
  },
  view: {
    list: "List",
    board: "Board",
    label: "View",
  },
  board: {
    idle: "{n}d",
    empty: "Empty",
  },
  table: {
    searchLeads: "Filter this list…",
    lead: "Deal",
    company: "Company",
    stage: "Stage",
    amount: "Value",
    owner: "Owner",
    idle: "Idle",
    source: "Source",
    lastActivity: "Last activity",
    nextAction: "Next",
    edit: "Edit",
    open: "Open",
    emptyAll: "No deals yet",
    emptyFiltered: "No deals found",
    emptyHint: "Try changing your filters or add a new deal.",
    loading: "Loading…",
    showing: "{from}–{to} of {total}",
  },
  nextAction: {
    followUp: "Follow up",
    qualify: "Survey",
    discover: "Discover call",
    propose: "Send proposal",
    close: "Close deal",
    deliver: "Kickoff",
    nurture: "Nurture",
    none: "—",
  },
  drawer: {
    lead: "Deal",
    contactSection: "Contact",
    dealSection: "Deal",
    activitySection: "Activity",
    notesSection: "Notes",
    timelineSection: "Timeline",
    profile360: "Customer 360°",
    profile360Soon:
      "Full call / email / meeting / contract history — coming in the CRM workspace.",
    stage: "Stage",
    amount: "Value",
    account: "Company",
    contact: "Person",
    phone: "Phone",
    close: "Expected close",
    owner: "Owner",
    idle: "Idle",
    lastActivity: "Last activity",
    nextAction: "Suggested next",
    note: "Notes",
    delete: "Delete",
    edit: "Edit deal",
    deleteConfirm: "Delete deal “{title}”?",
    emptyTitle: "Select a deal",
    emptyBody: "Click a row or board card to inspect details and change stage.",
    created: "Deal created",
    activityTouch: "Last activity recorded",
    noteOnFile: "Note on file",
    noTimeline: "No milestones beyond creation time.",
  },
  form: {
    editTitle: "Edit deal",
    newTitle: "New deal",
    sectionBasic: "Basic information",
    sectionSales: "Sales information",
    sectionContext: "Context",
    dealTitle: "Deal name",
    dealTitlePh: "Business site + Care 12 mo…",
    company: "Company",
    contactName: "Contact name",
    phone: "Phone / Zalo",
    amount: "Value",
    currency: "Currency",
    stage: "Stage",
    closeDate: "Expected close",
    owner: "Owner",
    source: "Source",
    atRisk: "Mark at-risk",
    note: "Notes",
    cancel: "Cancel",
    save: "Save",
    saving: "Saving…",
    requiredFields: "Contact name and phone are required",
  },
  filters: {
    owner: "Owner",
    ownerAll: "All owners",
    source: "Source",
    excludeCareers: "Exclude careers",
    allSources: "All sources",
    idle: "Idle",
    idleAll: "Any idle",
    idleOk: "0–2 days",
    idleWarn: "3–6 days",
    idleBad: "7+ days",
  },
  playbook: {
    title: "Sales playbook",
    intro:
      "Solutions / contract pipeline — start from the problem, not the product. Long cycle, multi-touch survey & negotiation.",
    qualifyTitle: "Qualify questions",
    sla: "SLA",
    output: "Output",
    principles: [
      "Start from the problem, not the product.",
      "Cold SMB: don’t lead with AI Agent — lead with website / quote when it fits.",
      "USP: pain → Build (when fit) → Care / Ops / Automate when pain matches.",
    ],
    qualify: [
      "What’s the biggest bottleneck right now?",
      "What result do you want in 30–60 days?",
      "Do you already have a website / fanpage / Zalo OA?",
      "Who decides + rough budget range?",
    ],
    steps: [
      {
        stage: "new",
        title: "New outreach",
        body: "Capture from Zalo, quote/contact forms, or manual entry. Log source + short note. Don’t open with AI Agent.",
        sla: "≤ 1h (business hours); after hours ≤ 8am next day",
        output: "Deal record",
      },
      {
        stage: "qualified",
        title: "Survey",
        body: "Ask pain, goal, timeline, decision-maker. Route: Build web / Care–Ops / Custom / Out of scope.",
        sla: "≤ 24 hours",
        output: "Stage + next step",
      },
      {
        stage: "discover",
        title: "Deep discovery",
        body: "15–30’ listen: what they sell, how customers find them, where leads leak, existing site.",
        sla: "Within 2–3 days after survey",
        output: "5–8 line brief",
      },
      {
        stage: "propose",
        title: "Quote / negotiation",
        body: "Clear scope + milestones + handover. Send quote, negotiate terms.",
        sla: "≤ 2 days after deep discovery",
        output: "Quote",
      },
      {
        stage: "won",
        title: "Won / closed",
        body: "Close package, deposit, kickoff. Record warranty terms.",
        sla: "Per customer schedule",
        output: "Contract / Zalo confirm + payment",
      },
      {
        stage: "deliver",
        title: "Deliver",
        body: "Ship by milestones, periodic demos, hand over source + ops guide.",
        sla: "Per signed scope",
        output: "Go-live + handover",
      },
      {
        stage: "expand",
        title: "Care / Expand",
        body: "Post go-live review. Upsell Care / Ops / Intelligence only when pain matches.",
        sla: "+30 / +90 days",
        output: "Upsell or nurture",
      },
    ],
  },
  stageLabels: STAGE_LABELS_EN,
  stageShort: STAGE_SHORT_EN,
};

export function isSalesLocale(value: string | null | undefined): value is SalesLocale {
  return value === "vi" || value === "en";
}

export function getDolphinSalesCopy(locale: SalesLocale): DolphinSalesCopy {
  return locale === "en" ? EN : VI;
}

export function salesStageLabel(
  locale: SalesLocale,
  stage: string,
): string {
  const copy = getDolphinSalesCopy(locale);
  if (isLeadStage(stage)) return copy.stageLabels[stage];
  return stage || copy.stageLabels.new;
}

export function salesStageShort(
  locale: SalesLocale,
  stage: LeadStage,
): string {
  return getDolphinSalesCopy(locale).stageShort[stage];
}

export { LEAD_STAGES };
