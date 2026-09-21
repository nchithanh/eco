/** Sales pipeline stages — Dolphin Software (admin + D1 `leads.stage`). */

export const LEAD_STAGES = [
  "hotline",
  "new",
  "qualified",
  "discover",
  "propose",
  "won",
  "deliver",
  "expand",
  "lost",
  "nurture",
  "out_of_scope",
] as const;

export type LeadStage = (typeof LEAD_STAGES)[number];

export const LEAD_STAGE_LABELS: Record<LeadStage, string> = {
  hotline: "0 · Hotline",
  new: "1 · Lead in",
  qualified: "2 · Qualify",
  discover: "3 · Discover",
  propose: "4 · Propose",
  won: "5 · Close / Won",
  deliver: "6 · Deliver",
  expand: "7 · Care / Expand",
  lost: "Lost",
  nurture: "Nurture",
  out_of_scope: "Không fit",
};

export type SaleProcessStep = {
  stage: LeadStage;
  title: string;
  body: string;
  sla: string;
  output: string;
};

/** Chi tiết quy trình sale — popup admin */
export const SALE_PROCESS_STEPS: SaleProcessStep[] = [
  {
    stage: "new",
    title: "Lead in",
    body: "Thu lead từ Zalo, form quote/contact, hoặc nhập tay. Ghi source + note ngắn. Không mở đầu bằng AI Agent.",
    sla: "≤ 1 giờ (giờ HC); ngoài giờ ≤ 8h sáng hôm sau",
    output: "Record trong leads",
  },
  {
    stage: "qualified",
    title: "Qualify",
    body: "Hỏi pain, mục tiêu, timeline, ai quyết định. Phân loại: Build web / Care–Ops / Custom / Không fit (vd. muốn mở salon thật — không ép website).",
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
    body: "Scope rõ (landing / site DN / Care…) + mốc + bàn giao. Báo giá theo phạm vi — không phí ngoài scope.",
    sla: "≤ 2 ngày sau discover",
    output: "Quote / phiếu báo giá",
  },
  {
    stage: "won",
    title: "Close / Won",
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
    title: "Care / Expand",
    body: "Review sau go-live. Upsell Care / Ops / Intelligence chỉ khi pain khớp — không hard-sell.",
    sla: "+30 / +90 ngày",
    output: "Upsell hoặc nurture",
  },
];

export const SALE_PROCESS_PRINCIPLES = [
  "Bắt đầu từ vấn đề, không từ sản phẩm.",
  "Cold SMB: không mở bằng AI Agent — ưu tiên website / báo giá khi khớp.",
  "USP: pain → Build (khi fit) → Care / Ops / Automate khi pain khớp.",
];

export const SALE_PROCESS_QUALIFY = [
  "Anh chị đang nghẽn chỗ nào nhất?",
  "Muốn kết quả gì trong 30–60 ngày?",
  "Đã có website / fanpage / Zalo OA chưa?",
  "Ai quyết định + khung ngân sách tạm?",
];

export function isLeadStage(value: string): value is LeadStage {
  return (LEAD_STAGES as readonly string[]).includes(value);
}

export function normalizeLeadStage(value: unknown): LeadStage {
  if (typeof value === "string" && isLeadStage(value)) return value;
  return "new";
}

export function leadStageLabel(stage: string): string {
  if (isLeadStage(stage)) return LEAD_STAGE_LABELS[stage];
  return stage || LEAD_STAGE_LABELS.new;
}
