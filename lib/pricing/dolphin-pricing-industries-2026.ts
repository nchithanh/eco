/**
 * Industry-flavored feature copy for /chinh-sach-gia-dolphin-2026/
 * Prices stay in dolphin-pricing-policy-2026.ts — this file is UI SoT only.
 * Facts map Ops tools (Booking/Customer/…) + Edu canvas modules; no invented SLAs.
 */

export type IndustryId =
  | "spa"
  | "salon"
  | "clinic"
  | "shop"
  | "edu"
  | "transport"
  | "sales";

export type FeatureTier = "crm" | "care" | "ops";

export type IndustryDef = {
  id: IndustryId;
  label: string;
  /** Short line under industry menu */
  lead: string;
};

export const PRICING_INDUSTRIES: readonly IndustryDef[] = [
  {
    id: "spa",
    label: "Spa",
    lead: "Nhiều lịch trong ngày — khách, slot và nhắc hẹn trên một CRM.",
  },
  {
    id: "salon",
    label: "Salon",
    lead: "Khách quay lại, dịch vụ lặp — lịch thợ và hồ sơ trên cùng hệ thống.",
  },
  {
    id: "clinic",
    label: "Clinic",
    lead: "Tra khách nhanh, lịch khám/điều trị, bước nhạy có người duyệt.",
  },
  {
    id: "shop",
    label: "Shop dịch vụ",
    lead: "Lịch · khách · báo cáo cho shop dịch vụ — không học menu nặng.",
  },
  {
    id: "edu",
    label: "Edu",
    lead: "Studio / lớp học: khóa · lớp · học viên · giáo viên · phòng.",
  },
  {
    id: "transport",
    label: "Vận tải",
    lead: "Đơn · chuyến · tài xế · khách — lịch và trạng thái trên một CRM.",
  },
  {
    id: "sales",
    label: "Sales pipeline",
    lead: "Lead · deal · follow-up · báo cáo pipeline — đội sales nói việc, mở đúng màn.",
  },
] as const;

/** Feature bullets per industry × product tier (shown stacked on combo cards). */
export const INDUSTRY_FEATURES: Record<
  IndustryId,
  Record<FeatureTier, readonly string[]>
> = {
  spa: {
    crm: [
      "Quản lý khách hàng & hồ sơ dịch vụ",
      "Booking / đặt lịch liệu trình",
      "Appointment — lịch hẹn theo ngày & kỹ thuật viên",
      "Chăm sóc khách: ghi chú, lịch sử liệu trình",
      "Nhắc hẹn & thông báo nội bộ",
      "Báo cáo lịch / doanh thu theo ngày",
      "Nhân sự · ca làm · phân việc",
      "Ghi nhận thanh toán (bước nhạy có duyệt)",
    ],
    care: [
      "Chatbot AI trên website / Zalo / Messenger",
      "Trả lời dịch vụ · giá · giờ mở cửa 24/7",
      "Thu lead & chuyển vào CRM",
      "Insight chăm khách hằng ngày",
    ],
    ops: [
      "Agent CRM: nói việc → mở đúng màn Booking / Customer / Report",
      "Form đặt lịch khi thiếu dữ liệu",
      "Customer 360 khi tra một khách",
      "Duyệt trước khi gửi nhắc hàng loạt / hoàn tiền",
    ],
  },
  salon: {
    crm: [
      "Quản lý khách & lịch sử cắt/uốn/nhuộm",
      "Booking lịch theo thợ & dịch vụ",
      "Appointment — slot trong ngày",
      "Chăm sóc khách quay lại (ghi chú sở thích)",
      "Nhắc lịch & thông báo đội ngũ",
      "Báo cáo theo thợ / theo ngày",
      "Phân ca & phân việc nhân sự",
      "Thanh toán / hoàn tiền có kiểm soát",
    ],
    care: [
      "Chatbot AI website · Zalo · Messenger",
      "Tư vấn dịch vụ & giờ trống sơ bộ",
      "Ghi lead đặt lịch vào CRM",
      "Báo cáo insight chăm khách",
    ],
    ops: [
      "Agent CRM mở đúng màn lịch / khách / báo cáo",
      "Nói “đặt lịch cho Lan” → form Booking",
      "Tra hồ sơ khách thay vì chat dài",
      "Duyệt thao tác nhạy cảm trước khi chạy",
    ],
  },
  clinic: {
    crm: [
      "Hồ sơ khách / bệnh nhân (nội bộ vận hành)",
      "Booking lịch khám · tái khám",
      "Appointment theo bác sĩ / phòng",
      "Ghi chú chăm sóc & lịch sử hẹn",
      "Nhắc hẹn có kiểm soát",
      "Báo cáo lịch & vận hành theo ngày",
      "Phân ca nhân sự",
      "Thanh toán / hoàn tiền — ưu tiên bước duyệt",
    ],
    care: [
      "Chatbot AI kênh khách (website / Zalo / Messenger)",
      "Trả lời giờ khám · dịch vụ · hướng dẫn đến",
      "Thu lead / yêu cầu đặt lịch vào CRM",
      "Insight tương tác khách hằng ngày",
    ],
    ops: [
      "Agent CRM: ý định → đúng tool (Booking, Customer, Payment…)",
      "Customer 360 khi cần xem sâu một khách",
      "Panel duyệt cho thao tác nhạy",
      "Admin chỉnh form/report trong tool đã bật",
    ],
  },
  shop: {
    crm: [
      "Quản lý khách hàng & lịch sử dịch vụ",
      "Booking / đặt lịch dịch vụ",
      "Appointment theo khung giờ",
      "Chăm sóc sau dịch vụ (ghi chú, follow-up)",
      "Nhắc hẹn & thông báo",
      "Báo cáo doanh thu / lịch",
      "Nhân sự & phân việc",
      "Ghi nhận thanh toán",
    ],
    care: [
      "Chatbot AI trên website / Zalo / Messenger",
      "Trả lời FAQ dịch vụ & giá",
      "Thu lead vào CRM",
      "Insight chăm khách hằng ngày",
    ],
    ops: [
      "Agent CRM nói việc → mở đúng giao diện",
      "Booking form · Customer 360 · chart báo cáo",
      "Duyệt hàng loạt / hoàn tiền khi cần",
      "Ít học menu — đúng màn đúng lúc",
    ],
  },
  edu: {
    crm: [
      "Quản lý học viên (Student 360)",
      "Khóa học & cửa sổ tuyển sinh",
      "Lớp học: lịch tuần, sĩ số, trạng thái",
      "Giáo viên & phân công",
      "Phòng học theo chi nhánh",
      "Booking / xếp lịch lớp",
      "Tác vụ vận hành lớp (task)",
      "Dashboard tổng quan studio",
    ],
    care: [
      "Chatbot AI website / Zalo / Messenger cho phụ huynh · học viên",
      "Trả lời lịch học · khóa · đăng ký sơ bộ",
      "Thu lead tuyển sinh vào CRM",
      "Insight tương tác kênh khách",
    ],
    ops: [
      "Agent trên CRM Edu: nói việc → mở đúng canvas (khóa / lớp / HV)",
      "Thêm học viên vào khóa, sinh lớp (theo phạm vi sản phẩm)",
      "Ít click menu — đúng bảng đúng lúc",
      "Việc nhạy: người xác nhận trước khi chạy",
    ],
  },
  transport: {
    crm: [
      "Quản lý khách / chủ hàng",
      "Booking chuyến · lịch vận chuyển",
      "Appointment / slot giao nhận",
      "Theo dõi trạng thái đơn · chuyến",
      "Hồ sơ tài xế · phân việc",
      "Nhắc lịch & thông báo nội bộ",
      "Báo cáo chuyến / doanh thu theo ngày",
      "Ghi nhận thanh toán (bước nhạy có duyệt)",
    ],
    care: [
      "Chatbot AI website / Zalo / Messenger",
      "Trả lời trạng thái đơn · giờ nhận sơ bộ",
      "Thu yêu cầu vận chuyển / lead vào CRM",
      "Insight tương tác khách hằng ngày",
    ],
    ops: [
      "Agent CRM: nói việc → mở đúng màn chuyến / khách / báo cáo",
      "Form đặt chuyến khi thiếu dữ liệu",
      "Customer 360 khi tra một chủ hàng",
      "Duyệt trước thao tác nhạy (hủy chuyến, hoàn tiền…)",
    ],
  },
  sales: {
    crm: [
      "Pipeline lead → deal theo giai",
      "Quản lý khách / công ty & lịch sử tương tác",
      "Booking / hẹn gặp · demo",
      "Follow-up & nhắc việc sales",
      "Ghi chú chăm sóc · next step",
      "Báo cáo pipeline / doanh số theo ngày",
      "Phân công sales · đội ngũ",
      "Ghi nhận thanh toán / chốt đơn (có duyệt khi cần)",
    ],
    care: [
      "Chatbot AI website / Zalo / Messenger thu lead 24/7",
      "Trả lời FAQ sản phẩm · bảng giá sơ bộ",
      "Đưa lead vào CRM / pipeline",
      "Insight tương tác kênh khách hằng ngày",
    ],
    ops: [
      "Agent CRM: nói việc → mở đúng màn lead / deal / báo cáo",
      "Customer 360 khi xem sâu một opportunity",
      "Nhắc follow-up hàng loạt có bước duyệt",
      "Admin chỉnh field / report trong tool đã bật",
    ],
  },
};

/** Which tiers a combo unlocks — derived from package no / stack. */
export function tiersForCombo(pkgNo: number): FeatureTier[] {
  switch (pkgNo) {
    case 1:
      return ["crm"];
    case 2:
    case 3:
      return ["crm", "care"];
    case 4:
      return ["crm", "ops"];
    case 5:
    case 6:
      return ["crm", "care", "ops"];
    default:
      return ["crm"];
  }
}

export function featuresForCombo(
  industryId: IndustryId,
  pkgNo: number,
): { tier: FeatureTier; label: string; items: readonly string[] }[] {
  const tiers = tiersForCombo(pkgNo);
  const dict = INDUSTRY_FEATURES[industryId];
  const labels: Record<FeatureTier, string> = {
    crm: "CRM",
    care: "Dolphin Care",
    ops: "Dolphin Ops",
  };
  return tiers.map((tier) => ({
    tier,
    label: labels[tier],
    items: dict[tier],
  }));
}

export function flatFeaturesForCombo(
  industryId: IndustryId,
  pkgNo: number,
  max = 10,
): string[] {
  const groups = featuresForCombo(industryId, pkgNo);
  const out: string[] = [];
  for (const g of groups) {
    for (const item of g.items) {
      if (out.length >= max) return out;
      out.push(item);
    }
  }
  return out;
}
