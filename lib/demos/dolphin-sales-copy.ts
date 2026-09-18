/** Dolphin Sales UI — vi / en (workspace `/demos/admin/`). */

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
  side: {
    search: string;
    workspace: string;
    crm: string;
    sales: string;
    analytics: string;
    navPipeline: string;
    navDeals: string;
    navContacts: string;
    navCompanies: string;
    navPlaybook: string;
    navActivities: string;
    navOverview: string;
    reports: string;
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
  board: {
    idle: string;
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
  new: "1 · Lead vào",
  qualified: "2 · Qualify",
  discover: "3 · Discover",
  propose: "4 · Propose",
  won: "5 · Chốt / Won",
  deliver: "6 · Deliver",
  expand: "7 · Care / Mở rộng",
  lost: "Lost",
  nurture: "Nurture",
  out_of_scope: "Không fit",
};

const STAGE_LABELS_EN: Record<LeadStage, string> = {
  new: "1 · Lead in",
  qualified: "2 · Qualify",
  discover: "3 · Discover",
  propose: "4 · Propose",
  won: "5 · Close / Won",
  deliver: "6 · Deliver",
  expand: "7 · Care / Expand",
  lost: "Lost",
  nurture: "Nurture",
  out_of_scope: "Out of scope",
};

const STAGE_SHORT_VI: Record<LeadStage, string> = {
  new: "Lead vào",
  qualified: "Qualify",
  discover: "Discover",
  propose: "Propose",
  won: "Won",
  deliver: "Deliver",
  expand: "Expand",
  lost: "Lost",
  nurture: "Nurture",
  out_of_scope: "Không fit",
};

const STAGE_SHORT_EN: Record<LeadStage, string> = {
  new: "Lead in",
  qualified: "Qualify",
  discover: "Discover",
  propose: "Propose",
  won: "Won",
  deliver: "Deliver",
  expand: "Expand",
  lost: "Lost",
  nurture: "Nurture",
  out_of_scope: "Out of scope",
};

const VI: DolphinSalesCopy = {
  brand: "Dolphin Sales",
  workspaceName: "Dolphin Software",
  loading: "Đang tải…",
  soon: "Sắp có",
  gate: {
    title: "Đăng nhập workspace",
    lead: "CRM pipeline nội bộ — dán workspace token (chỉ lưu session). Sau này sẽ là tài khoản SaaS.",
    tokenLabel: "Workspace token",
    tokenPlaceholder: "LEADS_ADMIN_TOKEN…",
    submit: "Tiếp tục",
    back: "← Demo vault",
    tokenRequired: "Nhập workspace token",
  },
  side: {
    search: "Tìm kiếm",
    workspace: "Workspace",
    crm: "CRM",
    sales: "Sales",
    analytics: "Analytics",
    navPipeline: "Lead Pipeline",
    navDeals: "Deals",
    navContacts: "Contacts",
    navCompanies: "Companies",
    navPlaybook: "Playbook",
    navActivities: "Activities",
    navOverview: "Overview",
    reports: "Reports",
    refresh: "Làm mới",
    refreshing: "Đang tải…",
    demoVault: "Demo vault",
    signOut: "Đăng xuất",
    langLabel: "Ngôn ngữ",
    available: "Available",
  },
  top: {
    searchPlaceholder: "Search leads, deals, contacts…",
    breadcrumbHome: "Dolphin Sales",
    filters: "Filters",
    clearFilters: "Xóa bộ lọc",
    filtersActive: "đang lọc",
  },
  hero: {
    title: "Lead Pipeline",
    description:
      "Theo dõi prospect, follow-up và cơ hội trên toàn pipeline bán hàng.",
    newDeal: "Add Lead",
  },
  kpi: {
    totalLeads: "Total leads",
    qualified: "Qualified",
    inProgress: "In progress",
    converted: "Converted",
    pipelineValue: "Pipeline value",
    atRisk: "At risk",
  },
  tabs: {
    all: "All",
  },
  board: {
    idle: "{n}d",
  },
  table: {
    searchLeads: "Lọc trong danh sách…",
    lead: "Lead",
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
    emptyAll: "Chưa có lead",
    emptyFiltered: "Không tìm thấy lead",
    emptyHint: "Đổi bộ lọc hoặc thêm lead mới.",
    loading: "Đang tải…",
    showing: "{from}–{to} / {total}",
  },
  nextAction: {
    followUp: "Follow up",
    qualify: "Qualify",
    discover: "Discover call",
    propose: "Send proposal",
    close: "Close deal",
    deliver: "Kickoff",
    nurture: "Nurture",
    none: "—",
  },
  drawer: {
    lead: "Lead",
    contactSection: "Contact",
    dealSection: "Deal",
    activitySection: "Activity",
    notesSection: "Notes",
    timelineSection: "Timeline",
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
    edit: "Edit lead",
    deleteConfirm: "Xóa lead “{title}”?",
    emptyTitle: "Chọn một lead",
    emptyBody: "Click một dòng trong bảng để xem chi tiết, đổi stage và follow-up.",
    created: "Lead created",
    activityTouch: "Last activity recorded",
    noteOnFile: "Note on file",
    noTimeline: "Chưa có mốc nào ngoài thời gian tạo.",
  },
  form: {
    editTitle: "Edit lead",
    newTitle: "New lead",
    sectionBasic: "Basic information",
    sectionSales: "Sales information",
    sectionContext: "Context",
    dealTitle: "Lead / deal name",
    dealTitlePh: "Salon website + Care…",
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
    intro: "Pipeline Dolphin — bắt đầu từ vấn đề, không từ sản phẩm.",
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
        title: "Lead vào",
        body: "Thu lead từ Zalo, form quote/contact, hoặc nhập tay. Ghi source + note ngắn. Không mở đầu bằng AI Agent.",
        sla: "≤ 1 giờ (giờ HC); ngoài giờ ≤ 8h sáng hôm sau",
        output: "Record trong leads",
      },
      {
        stage: "qualified",
        title: "Qualify",
        body: "Hỏi pain, mục tiêu, timeline, ai quyết định. Phân loại: Build web / Care–Ops / Custom / Không fit.",
        sla: "≤ 24 giờ",
        output: "Stage + hướng tiếp theo",
      },
      {
        stage: "discover",
        title: "Discover",
        body: "15–30’ nghe: bán gì, khách tìm thế nào, lead đang trôi đâu, đã có site chưa.",
        sla: "Trong 2–3 ngày sau qualify",
        output: "Brief 5–8 dòng",
      },
      {
        stage: "propose",
        title: "Propose",
        body: "Scope rõ (landing / site DN / Care…) + mốc + bàn giao. Báo giá theo phạm vi.",
        sla: "≤ 2 ngày sau discover",
        output: "Quote / phiếu báo giá",
      },
      {
        stage: "won",
        title: "Chốt / Won",
        body: "Chốt gói, tạm ứng, kickoff. Ghi điều kiện bảo hành.",
        sla: "Theo lịch khách",
        output: "HĐ / xác nhận Zalo + payment",
      },
      {
        stage: "deliver",
        title: "Deliver",
        body: "Làm theo milestone, demo định kỳ, bàn giao source + hướng dẫn vận hành.",
        sla: "Theo scope đã ký",
        output: "Go-live + handover",
      },
      {
        stage: "expand",
        title: "Care / Mở rộng",
        body: "Review sau go-live. Upsell Care / Ops / Intelligence chỉ khi pain khớp.",
        sla: "+30 / +90 ngày",
        output: "Upsell hoặc nurture",
      },
    ],
  },
  stageLabels: STAGE_LABELS_VI,
  stageShort: STAGE_SHORT_VI,
};

const EN: DolphinSalesCopy = {
  brand: "Dolphin Sales",
  workspaceName: "Dolphin Software",
  loading: "Loading…",
  soon: "Soon",
  gate: {
    title: "Sign in to workspace",
    lead: "Internal pipeline CRM — paste your workspace token (session only). SaaS accounts come later.",
    tokenLabel: "Workspace token",
    tokenPlaceholder: "LEADS_ADMIN_TOKEN…",
    submit: "Continue",
    back: "← Demo vault",
    tokenRequired: "Enter workspace token",
  },
  side: {
    search: "Search",
    workspace: "Workspace",
    crm: "CRM",
    sales: "Sales",
    analytics: "Analytics",
    navPipeline: "Lead Pipeline",
    navDeals: "Deals",
    navContacts: "Contacts",
    navCompanies: "Companies",
    navPlaybook: "Playbook",
    navActivities: "Activities",
    navOverview: "Overview",
    reports: "Reports",
    refresh: "Refresh",
    refreshing: "Refreshing…",
    demoVault: "Demo vault",
    signOut: "Sign out",
    langLabel: "Language",
    available: "Available",
  },
  top: {
    searchPlaceholder: "Search leads, deals, contacts…",
    breadcrumbHome: "Dolphin Sales",
    filters: "Filters",
    clearFilters: "Clear filters",
    filtersActive: "active",
  },
  hero: {
    title: "Lead Pipeline",
    description:
      "Track prospects, follow-ups, and opportunities across your sales pipeline.",
    newDeal: "Add Lead",
  },
  kpi: {
    totalLeads: "Total leads",
    qualified: "Qualified",
    inProgress: "In progress",
    converted: "Converted",
    pipelineValue: "Pipeline value",
    atRisk: "At risk",
  },
  tabs: {
    all: "All",
  },
  board: {
    idle: "{n}d",
  },
  table: {
    searchLeads: "Filter this list…",
    lead: "Lead",
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
    emptyAll: "No leads yet",
    emptyFiltered: "No leads found",
    emptyHint: "Try changing your filters or add a new lead.",
    loading: "Loading…",
    showing: "{from}–{to} of {total}",
  },
  nextAction: {
    followUp: "Follow up",
    qualify: "Qualify",
    discover: "Discover call",
    propose: "Send proposal",
    close: "Close deal",
    deliver: "Kickoff",
    nurture: "Nurture",
    none: "—",
  },
  drawer: {
    lead: "Lead",
    contactSection: "Contact",
    dealSection: "Deal",
    activitySection: "Activity",
    notesSection: "Notes",
    timelineSection: "Timeline",
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
    edit: "Edit lead",
    deleteConfirm: "Delete lead “{title}”?",
    emptyTitle: "Select a lead",
    emptyBody: "Click a row to inspect details, change stage, and follow up.",
    created: "Lead created",
    activityTouch: "Last activity recorded",
    noteOnFile: "Note on file",
    noTimeline: "No milestones beyond creation time.",
  },
  form: {
    editTitle: "Edit lead",
    newTitle: "New lead",
    sectionBasic: "Basic information",
    sectionSales: "Sales information",
    sectionContext: "Context",
    dealTitle: "Lead / deal name",
    dealTitlePh: "Salon website + Care…",
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
    intro: "Dolphin pipeline — start from the problem, not the product.",
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
        title: "Lead in",
        body: "Capture from Zalo, quote/contact forms, or manual entry. Log source + short note. Don’t open with AI Agent.",
        sla: "≤ 1h (business hours); after hours ≤ 8am next day",
        output: "Lead record",
      },
      {
        stage: "qualified",
        title: "Qualify",
        body: "Ask pain, goal, timeline, decision-maker. Route: Build web / Care–Ops / Custom / Out of scope.",
        sla: "≤ 24 hours",
        output: "Stage + next step",
      },
      {
        stage: "discover",
        title: "Discover",
        body: "15–30’ listen: what they sell, how customers find them, where leads leak, existing site.",
        sla: "Within 2–3 days after qualify",
        output: "5–8 line brief",
      },
      {
        stage: "propose",
        title: "Propose",
        body: "Clear scope (landing / business site / Care…) + milestones + handover. Quote by scope.",
        sla: "≤ 2 days after discover",
        output: "Quote",
      },
      {
        stage: "won",
        title: "Close / Won",
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
