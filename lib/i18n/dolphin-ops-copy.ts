import type { Locale } from "@/lib/i18n/types";

export type OpsToolId =
  | "booking"
  | "customer"
  | "notification"
  | "reports"
  | "payment"
  | "staff";

export type OpsUiKind = "booking" | "customer360" | "chart" | "notify";

export type OpsCustomizeKind = "form" | "report";

export type DolphinOpsCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  support: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trustLine: string;
  heroChromeTitle: string;
  heroStatusReady: string;
  heroStatusRunning: string;
  heroIntentLabel: string;
  heroIntentText: string;
  heroUnderstanding: string;
  heroToolSelected: string;
  heroFormTitle: string;
  heroFieldCustomer: string;
  heroFieldService: string;
  heroFieldDate: string;
  heroFieldTime: string;
  heroFieldStaff: string;
  heroCustomerValue: string;
  heroServiceValue: string;
  heroDateValue: string;
  heroTimeValue: string;
  heroStaffPlaceholder: string;
  heroStaffValue: string;
  heroConfirm: string;
  heroSuccess: string;
  problemEyebrow: string;
  problemTitle: string;
  problemSupport: string;
  problemTraditionalTitle: string;
  problemTraditionalSteps: string[];
  problemTraditionalNote: string;
  problemOpsTitle: string;
  problemOpsSteps: string[];
  problemOpsNote: string;
  vsCareTitle: string;
  vsCareBody: string;
  vsOpsTitle: string;
  vsOpsBody: string;
  howEyebrow: string;
  howTitle: string;
  howSupport: string;
  howSteps: { title: string; body: string }[];
  howPipeline: { id: string; label: string }[];
  toolsEyebrow: string;
  toolsTitle: string;
  toolsSupport: string;
  tools: {
    id: OpsToolId;
    title: string;
    body: string;
    previewLabel: string;
  }[];
  dynamicEyebrow: string;
  dynamicTitle: string;
  dynamicSupport: string;
  dynamicQuote: string;
  dynamicScenes: {
    id: OpsUiKind;
    user: string;
    uiLabel: string;
  }[];
  adminIntentLabel: string;
  customizeEyebrow: string;
  customizeTitle: string;
  customizeSupport: string;
  customizeApplying: string;
  customizeApplied: string;
  customizeScenes: {
    id: OpsCustomizeKind;
    tab: string;
    user: string;
    uiLabel: string;
  }[];
  customizeNoteLabel: string;
  customizeNoteRequired: string;
  customizeNotePlaceholder: string;
  customizeFormulaLabel: string;
  customizeFormula: string;
  customizeReportTitle: string;
  chartTitle: string;
  chartDays: string[];
  customer360Name: string;
  customer360Meta: string;
  customer360Rows: { label: string; value: string }[];
  notifyListTitle: string;
  notifyItems: string[];
  examplesEyebrow: string;
  examplesTitle: string;
  examplesSupport: string;
  examples: { title: string; body: string }[];
  controlEyebrow: string;
  controlTitle: string;
  controlSupport: string;
  controlConcept: string;
  controlAgentLine: string;
  controlActionLabel: string;
  controlReview: string;
  controlConfirm: string;
  controlSent: string;
  controlSensitive: string[];
  philosophyEyebrow: string;
  philosophyTitle: string;
  philosophySupport: string;
  philosophyTraditional: { title: string; body: string };
  philosophyOps: { title: string; body: string };
  philosophyCombine: string;
  philosophyPills: string[];
  whoEyebrow: string;
  whoTitle: string;
  whoSupport: string;
  whoItems: { title: string; body: string }[];
  faqEyebrow: string;
  faqTitle: string;
  faqItems: { q: string; a: string }[];
  closeEyebrow: string;
  closeTitle: string;
  closeSupport: string;
  closeCta: string;
  closeSecondary: string;
  closeTrust: string;
  zaloLabel: string;
};

const vi: DolphinOpsCopy = {
  metaTitle: "Dolphin Ops | AI vận hành doanh nghiệp cho team nhỏ",
  metaDescription:
    "Dolphin Ops là AI vận hành doanh nghiệp cho spa, clinic, salon và shop dịch vụ. Anh chị nói việc cần làm, hệ thống chọn đúng tool và UI để chạy.",
  eyebrow: "AI vận hành doanh nghiệp",
  headline: "Dolphin Ops – [[AI vận hành doanh nghiệp]] cho team nhỏ",
  support:
    "Dolphin Ops là AI vận hành doanh nghiệp cho đội ngũ nội bộ: anh chị nói việc cần làm, hệ thống hiểu ý định, chọn đúng Business Tool, mở đúng giao diện và chờ người xác nhận trước khi chạy.",
  ctaPrimary: "Khám phá Dolphin Ops",
  ctaSecondary: "Nói chuyện với chúng tôi",
  trustLine: "AI không thay giao diện. Nó chọn đúng giao diện.",
  heroChromeTitle: "Dolphin Ops",
  heroStatusReady: "Sẵn sàng",
  heroStatusRunning: "Đang xử lý",
  heroIntentLabel: "Bạn nói",
  heroIntentText: "Đặt lịch cho Lan thứ Bảy này.",
  heroUnderstanding: "Đang hiểu yêu cầu…",
  heroToolSelected: "Booking Tool",
  heroFormTitle: "Đặt lịch",
  heroFieldCustomer: "Khách",
  heroFieldService: "Dịch vụ",
  heroFieldDate: "Ngày",
  heroFieldTime: "Giờ",
  heroFieldStaff: "Nhân viên",
  heroCustomerValue: "Lan",
  heroServiceValue: "Chăm sóc da mặt",
  heroDateValue: "Thứ Bảy",
  heroTimeValue: "15:00",
  heroStaffPlaceholder: "Chọn nhân viên",
  heroStaffValue: "Mai",
  heroConfirm: "Xác nhận đặt lịch",
  heroSuccess: "Đã tạo lịch hẹn.",
  problemEyebrow: "Vấn đề",
  problemTitle: "CRM đòi anh chị học nó. Ops nghe việc rồi mở đúng màn.",
  problemSupport:
    "CRM truyền thống bắt đi menu → module → form → Save. Muốn thêm trường hay báo cáo thì thường phải ticket, chờ team software code rồi deploy. Dolphin Ops bắt đầu từ ý định — rồi chọn tool và giao diện; admin tự chỉnh tool đã bật bằng chat.",
  problemTraditionalTitle: "CRM quen thuộc",
  problemTraditionalSteps: [
    "Người dùng",
    "Dashboard",
    "Module",
    "Tính năng",
    "Form",
    "Save",
  ],
  problemTraditionalNote:
    "Đổi form hay công thức? Mở ticket. Chờ sprint. Chờ deploy.",
  problemOpsTitle: "Dolphin Ops",
  problemOpsSteps: [
    "Ý định",
    "Agent",
    "Business Tool",
    "Giao diện",
    "Thao tác",
    "Kết quả",
  ],
  problemOpsNote:
    "Admin nói nhu cầu. Tool cập nhật — không chờ bộ phận software code từng thay đổi nhỏ.",
  vsCareTitle: "Dolphin Care",
  vsCareBody: "AI chăm sóc khách hàng của bạn.",
  vsOpsTitle: "Dolphin Ops",
  vsOpsBody: "AI giúp anh chị chạy doanh nghiệp.",
  howEyebrow: "Cách chạy",
  howTitle: "AI vận hành doanh nghiệp: nói việc cần làm, mở đúng tool.",
  howSupport:
    "Chat là cửa vào, không phải toàn bộ sản phẩm. Agent chọn Business Tool, rồi hiện UI để anh chị xem và hoàn tất.",
  howSteps: [
    {
      title: "Anh chị nói việc cần làm",
      body: "Bắt đầu bằng ý định thật, ví dụ: “Đặt lịch cho Lan thứ Bảy”, “Cho tôi xem doanh thu hôm nay”, hoặc “Mở hồ sơ khách Hương”.",
    },
    {
      title: "Agent hiểu ý định",
      body: "AI Agent đọc câu lệnh: đặt lịch, tra khách, xem báo cáo hay thanh toán. Nó không chỉ trả lời chữ cho có.",
    },
    {
      title: "Chọn đúng Business Tool",
      body: "Hệ thống gọi Booking, Customer, Reports hoặc Payment — đúng việc thì đúng tool.",
    },
    {
      title: "Mở đúng giao diện",
      body: "Thiếu dữ liệu thì form. Xem khách thì Customer 360. Doanh thu thì chart. AI không thay giao diện. Nó chọn đúng giao diện.",
    },
    {
      title: "Người xác nhận rồi mới chạy",
      body: "Thông báo hàng loạt, hoàn tiền, xóa dữ liệu, đổi thông tin quan trọng — có thể dừng để người có quyền duyệt.",
    },
  ],
  howPipeline: [
    { id: "intent", label: "Intent" },
    { id: "agent", label: "Agent" },
    { id: "tool", label: "Tool" },
    { id: "ui", label: "Dynamic UI" },
    { id: "action", label: "Action" },
  ],
  toolsEyebrow: "Business Tools",
  toolsTitle: "Một bộ công cụ nghiệp vụ, Agent gọi khi cần.",
  toolsSupport:
    "Mỗi tool có khả năng, schema, quyền, UI và cách thực thi. Cùng một tool có thể dùng ở nhiều chỗ trong hệ Dolphin.",
  tools: [
    {
      id: "booking",
      title: "Booking",
      body: "Tạo, sửa và kiểm tra lịch hẹn. Ví dụ: “Đặt lịch cho Lan thứ Bảy” → Agent chọn Booking Tool → mở form → nhân viên điền chỗ thiếu → xác nhận.",
      previewLabel: "Đặt lịch",
    },
    {
      id: "customer",
      title: "Customer",
      body: "Tra hồ sơ khách, lịch sử dịch vụ và ghi chú nội bộ. Xem sâu một khách thì mở Customer 360, không trả một đoạn chat.",
      previewLabel: "Khách hàng",
    },
    {
      id: "notification",
      title: "Notification",
      body: "Chuẩn bị và gửi nhắc hẹn, thông báo hoặc tin nội bộ. Gửi hàng loạt có thể dừng ở bước duyệt.",
      previewLabel: "Thông báo",
    },
    {
      id: "reports",
      title: "Reports",
      body: "Xem báo cáo theo ngày, nhân sự hoặc lịch hẹn. Hỏi doanh thu thì có thể mở chart thay vì một con số.",
      previewLabel: "Báo cáo",
    },
    {
      id: "payment",
      title: "Payment",
      body: "Ghi nhận thanh toán, hoàn tiền hoặc kiểm tra giao dịch. Việc nhạy — có thể cần người duyệt trước khi chạy.",
      previewLabel: "Thanh toán",
    },
    {
      id: "staff",
      title: "Staff",
      body: "Theo dõi nhân sự, phân việc và ca làm. Phù hợp team nhỏ đang xoay lịch, khách và người trên nhiều màn.",
      previewLabel: "Nhân sự",
    },
  ],
  dynamicEyebrow: "Dynamic UI",
  dynamicTitle: "AI không thay giao diện. Nó chọn đúng giao diện.",
  dynamicSupport:
    "Cùng một Agent, bốn kiểu UI khác nhau. Chat không phải cả ứng dụng.",
  dynamicQuote: "Chat là cửa vào, không phải toàn bộ sản phẩm.",
  dynamicScenes: [
    {
      id: "booking",
      user: "Đặt lịch Lan thứ Bảy.",
      uiLabel: "Booking Form",
    },
    {
      id: "customer360",
      user: "Cho xem lịch sử của Lan.",
      uiLabel: "Customer 360",
    },
    {
      id: "chart",
      user: "Tuần này doanh thu thế nào?",
      uiLabel: "Revenue Chart",
    },
    {
      id: "notify",
      user: "Nhắn khách có lịch ngày mai.",
      uiLabel: "Confirmation Panel",
    },
  ],
  adminIntentLabel: "Admin",
  customizeEyebrow: "Admin",
  customizeTitle: "Admin chỉnh form và báo cáo bằng chat.",
  customizeSupport:
    "Trong phạm vi tool đã bật, admin nói nhu cầu — thêm trường, công thức report, quy tắc duyệt — mà không phải báo bộ phận software để code và deploy từng thay đổi nhỏ. Đổi cấu trúc quan trọng vẫn có thể cần xác nhận.",
  customizeApplying: "Đang áp dụng thay đổi…",
  customizeApplied: "Đã cập nhật tool.",
  customizeScenes: [
    {
      id: "form",
      tab: "Sửa form",
      user: "Thêm trường Ghi chú vào form đặt lịch. Bắt buộc trước khi xác nhận.",
      uiLabel: "Booking form",
    },
    {
      id: "report",
      tab: "Thêm report",
      user: "Thêm báo cáo doanh thu tuần: tổng = số lịch × giá dịch vụ. Vẽ cột theo ngày.",
      uiLabel: "Custom report",
    },
  ],
  customizeNoteLabel: "Ghi chú",
  customizeNoteRequired: "Bắt buộc",
  customizeNotePlaceholder: "Ghi chú của khách",
  customizeFormulaLabel: "Công thức admin",
  customizeFormula: "doanh thu = số lịch × giá dịch vụ",
  customizeReportTitle: "Doanh thu tuần · công thức mới",
  chartTitle: "Doanh thu tuần",
  chartDays: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
  customer360Name: "Lan Nguyễn",
  customer360Meta: "Khách quen · Spa",
  customer360Rows: [
    { label: "Lần gần nhất", value: "Chăm sóc da · 12/08" },
    { label: "Tổng lịch", value: "14 lần" },
    { label: "Ghi chú", value: "Dị ứng tinh dầu mạnh" },
  ],
  notifyListTitle: "Khách ngày mai",
  notifyItems: ["Lan · 09:00", "Hùng · 11:30", "My · 15:00"],
  examplesEyebrow: "Ví dụ thật",
  examplesTitle: "Một câu. Đúng tool. Đúng màn hình.",
  examplesSupport:
    "Anh chị không cần đi Bookings → Create → Customer → Service → Date → Staff → Save.",
  examples: [
    {
      title: "Đặt lịch",
      body: "“Đặt lịch cho Lan thứ Bảy.” Agent chọn Booking, mở form, anh chị bổ sung giờ và nhân viên, rồi xác nhận.",
    },
    {
      title: "Xem khách",
      body: "“Lịch sử của Lan.” Customer 360 hiện bảng lịch sử — không phải đoạn chat liệt kê từng dòng.",
    },
    {
      title: "Báo cáo",
      body: "“Doanh thu tuần này.” Reports mở biểu đồ. Số liệu để xem, không để đọc thành đoạn văn.",
    },
    {
      title: "Admin sửa form",
      body: "“Thêm ghi chú bắt buộc vào form đặt lịch.” Form hiện trường mới ngay — không ticket cho team software, không vào màn settings.",
    },
    {
      title: "Admin thêm report",
      body: "“Doanh thu = số lịch × giá dịch vụ.” Reports vẽ cột theo công thức admin vừa nói. Không chờ sprint deploy.",
    },
  ],
  controlEyebrow: "Human control",
  controlTitle: "AI xử lý độ phức tạp. Người giữ quyền quyết.",
  controlSupport:
    "AI hỗ trợ vận hành; người giữ quyết định ở bước nhạy. Thông báo hàng loạt, thanh toán, hoàn tiền, xóa dữ liệu, đổi thông tin quan trọng — có thể dừng để duyệt.",
  controlConcept: "AI hỗ trợ vận hành. Người giữ quyền quyết.",
  controlAgentLine: "Tìm thấy 128 khách có lịch ngày mai.",
  controlActionLabel: "Gửi thông báo",
  controlReview: "Xem lại",
  controlConfirm: "Xác nhận & gửi",
  controlSent: "Đã xếp hàng gửi.",
  controlSensitive: [
    "Gửi thông báo",
    "Thanh toán",
    "Hoàn tiền",
    "Xóa dữ liệu",
    "Đổi thông tin quan trọng",
  ],
  philosophyEyebrow: "Cách nghĩ",
  philosophyTitle: "Dùng giao diện khi muốn. Nói với hệ thống khi nhanh hơn.",
  philosophySupport:
    "UI không biến mất. Ops ghép Agent, Business Tools, Dynamic UI và chỗ người xác nhận.",
  philosophyTraditional: {
    title: "CRM truyền thống",
    body: "“Học CRM. Đổi form thì báo software.”",
  },
  philosophyOps: {
    title: "Dolphin Ops",
    body: "“Nói việc cần làm. Admin tự chỉnh tool đã bật.”",
  },
  philosophyCombine: "Agent + Business Tools + Dynamic UI + Human Control",
  philosophyPills: [
    "AI Agent",
    "Business Tools",
    "Dynamic UI",
    "Admin customize",
    "Human Control",
  ],
  whoEyebrow: "Dành cho ai",
  whoTitle: "Spa, clinic, salon và team nhỏ đang chạy việc nội bộ.",
  whoSupport:
    "Phù hợp khi lịch, khách, báo cáo và nhắc hẹn nằm rải nhiều màn — và anh chị muốn nói việc thay vì học menu.",
  whoItems: [
    {
      title: "Spa và salon có nhiều lịch trong ngày",
      body: "Lịch hẹn, khách quay lại và nhắc lịch đang nằm rải nhiều màn — hoặc nhớ bằng tay.",
    },
    {
      title: "Clinic và phòng khám nhỏ",
      body: "Tra khách nhanh, kiểm soát thao tác nhạy, người có quyền duyệt ở bước quan trọng.",
    },
    {
      title: "Shop dịch vụ và team nhỏ",
      body: "Xem lịch, khách, báo cáo mà không phải học phần mềm nặng menu.",
    },
    {
      title: "Đã có web, thiếu lớp vận hành nội bộ",
      body: "Website là mặt tiền khách tìm thấy anh chị. Ops là lớp đội ngũ chạy việc phía sau. Chưa có mặt tiền: xem /services/web/.",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Câu hỏi thường gặp",
  faqItems: [
    {
      q: "AI vận hành doanh nghiệp là gì, và Dolphin Ops có phải kiểu đó không?",
      a: "AI vận hành doanh nghiệp là cách dùng AI để xử lý công việc nội bộ như lịch hẹn, khách, báo cáo, thông báo và các bước cần phối hợp giữa người với công cụ. Dolphin Ops là sản phẩm của Dolphin Software theo hướng đó: anh chị nói việc cần làm, hệ thống chọn đúng tool và đúng UI để chạy.",
    },
    {
      q: "Dolphin Ops khác Dolphin Care ở đâu?",
      a: "Dolphin Care là AI chăm sóc khách hàng của bạn trên website, tập trung vào lớp giao tiếp với khách. Dolphin Ops là AI giúp anh chị chạy doanh nghiệp ở bên trong, tập trung vào vận hành nội bộ. Nếu anh chị đang tìm lớp chăm khách trên web, xem /dolphin-care/. Nếu đang tìm lớp chạy việc nội bộ, xem /dolphin-ops/.",
    },
    {
      q: "Dolphin Ops có phải CRM AI không?",
      a: "Không theo kiểu CRM gắn thêm chat. CRM truyền thống thường bắt người dùng đi menu → module → form → Save. Đổi form hay báo cáo thì hay phải ticket cho bộ phận software, chờ code rồi deploy. Dolphin Ops đi từ việc anh chị muốn làm, chọn đúng Business Tool và UI; admin tự chỉnh tool đã bật bằng chat.",
    },
    {
      q: "Đổi form hay báo cáo, anh chị có phải chờ bộ phận software không?",
      a: "Với CRM truyền thống thì thường vậy: mở ticket, chờ sprint, rồi deploy. Dolphin Ops để admin nói nhu cầu trong phạm vi các tool đã bật — thêm trường, công thức report, quy tắc duyệt — mà không cần team software code từng thay đổi nhỏ. Nếu thay đổi chạm cấu trúc quan trọng, hệ thống có thể cần xác nhận thêm hoặc trao đổi scope qua /ai-transform/.",
    },
    {
      q: "Dolphin Ops có phải chỉ là chat không?",
      a: "Không. Chat là cửa vào, không phải toàn bộ sản phẩm. Cùng một Agent, hệ thống có thể mở form, Customer 360, chart hoặc panel xác nhận tùy theo việc anh chị đang làm.",
    },
    {
      q: "Những ai nên dùng Dolphin Ops?",
      a: "Phù hợp với spa, clinic, salon, shop dịch vụ và team nhỏ đang bị rối vì lịch, khách, báo cáo và nhắc hẹn nằm trên nhiều màn hình. Đây thường là nhu cầu sau khi anh chị đã có một lớp hiện diện online cơ bản hoặc đã có website. Nếu chưa có mặt tiền để khách tìm thấy, xem thêm /services/web/.",
    },
    {
      q: "Dolphin Ops có tự động làm mọi thứ không cần người duyệt không?",
      a: "Không. Với các việc nhạy cảm như thanh toán, hoàn tiền, xóa dữ liệu, đổi thông tin quan trọng hoặc gửi thông báo hàng loạt, hệ thống có thể dừng để người có quyền xác nhận. Cách này giúp anh chị vẫn kiểm soát được việc quan trọng.",
    },
    {
      q: "Admin có chỉnh được Dolphin Ops bằng chat không?",
      a: "Có, trong phạm vi các tool đã bật — không phải báo bộ phận software để code và triển khai từng thay đổi nhỏ. Ví dụ admin yêu cầu thêm trường vào form, đổi logic một báo cáo đơn giản hoặc thêm quy tắc duyệt. Nếu thay đổi chạm tới cấu trúc quan trọng, hệ thống có thể cần xác nhận thêm hoặc cần trao đổi scope qua /ai-transform/.",
    },
    {
      q: "Chi phí Dolphin Ops tính như thế nào?",
      a: "Chi phí đi theo scope, không có một mức cố định cho mọi doanh nghiệp. Vì mỗi team đang vướng các tool và quy trình khác nhau, cách hợp lý là trao đổi phạm vi trước rồi mới chốt hướng làm. Anh chị có thể nhắn Zalo tại https://zalo.me/0779937633 để mô tả bài toán.",
    },
  ],
  closeEyebrow: "Bước tiếp",
  closeTitle: "Muốn xem Ops trên nghiệp vụ của anh chị?",
  closeSupport:
    "Nếu anh chị đang cần lớp chăm khách trên website trước, xem /dolphin-care/. Nếu đang cần lộ trình ứng dụng AI rõ hơn, xem /ai-transform/.",
  closeCta: "Nói chuyện với chúng tôi",
  closeSecondary: "Xem lại demo",
  closeTrust:
    "Dolphin Ops không bắt anh chị học thêm một lớp menu mới. Nó giúp đội ngũ nói việc cần làm, rồi chọn đúng tool để chạy.",
  zaloLabel: "Nhắn Zalo",
};

const en: DolphinOpsCopy = {
  metaTitle: "Dolphin Ops | AI operations for small teams",
  metaDescription:
    "Dolphin Ops is AI for internal operations — spa, clinic, salon and service shops. You say the job; the system picks the right tool and UI.",
  eyebrow: "AI for business operations",
  headline: "Dolphin Ops – [[AI operations]] for small teams",
  support:
    "Dolphin Ops is AI for the internal team: you say what you need, the system reads the intent, picks the Business Tool, opens the right UI, and waits for a person before sensitive actions run.",
  ctaPrimary: "Explore Dolphin Ops",
  ctaSecondary: "Talk to us",
  trustLine: "AI doesn't replace the interface. It chooses the right one.",
  heroChromeTitle: "Dolphin Ops",
  heroStatusReady: "Ready",
  heroStatusRunning: "Working",
  heroIntentLabel: "You",
  heroIntentText: "Book an appointment for Lan this Saturday.",
  heroUnderstanding: "Understanding request…",
  heroToolSelected: "Booking Tool",
  heroFormTitle: "Book appointment",
  heroFieldCustomer: "Customer",
  heroFieldService: "Service",
  heroFieldDate: "Date",
  heroFieldTime: "Time",
  heroFieldStaff: "Staff",
  heroCustomerValue: "Lan",
  heroServiceValue: "Facial treatment",
  heroDateValue: "Saturday",
  heroTimeValue: "03:00 PM",
  heroStaffPlaceholder: "Select staff",
  heroStaffValue: "Mai",
  heroConfirm: "Confirm booking",
  heroSuccess: "Appointment created.",
  problemEyebrow: "The problem",
  problemTitle: "A CRM asks you to learn it. Ops hears the job and opens the right screen.",
  problemSupport:
    "A traditional CRM walks Dashboard → Module → Feature → Form → Save. A new field or report often means a ticket, a wait for the software team, then a deploy. Dolphin Ops starts from intent — then picks the tool and UI. Admins change enabled tools in chat.",
  problemTraditionalTitle: "Familiar CRM",
  problemTraditionalSteps: [
    "User",
    "Dashboard",
    "Module",
    "Feature",
    "Form",
    "Save",
  ],
  problemTraditionalNote:
    "Need a new field or formula? Open a ticket. Wait for the sprint. Wait for deploy.",
  problemOpsTitle: "Dolphin Ops",
  problemOpsSteps: [
    "Intent",
    "Agent",
    "Business Tool",
    "UI",
    "Action",
    "Result",
  ],
  problemOpsNote:
    "The admin says the change. The tool updates — without waiting on software to code each small tweak.",
  vsCareTitle: "Dolphin Care",
  vsCareBody: "AI that takes care of your customers.",
  vsOpsTitle: "Dolphin Ops",
  vsOpsBody: "AI that helps you run your business.",
  howEyebrow: "How it works",
  howTitle: "AI operations: say the job, open the right tool.",
  howSupport:
    "Chat is the entry point. The Agent selects a Business Tool, then shows UI so you can review and finish.",
  howSteps: [
    {
      title: "Tell Dolphin Ops what you need",
      body: "One clear sentence — book, find a customer, check revenue.",
    },
    {
      title: "The Agent reads the intent",
      body: "It does not stop at a text reply. It chooses the next step.",
    },
    {
      title: "It picks the Business Tool",
      body: "Booking, Customer, Reports, Notification — the tool matches the job.",
    },
    {
      title: "The right UI appears",
      body: "Form, table, chart, confirmation panel — depending on the task.",
    },
    {
      title: "You review and complete",
      body: "Fill gaps, confirm. Sensitive actions do not run blindly.",
    },
  ],
  howPipeline: [
    { id: "intent", label: "Intent" },
    { id: "agent", label: "Agent" },
    { id: "tool", label: "Tool" },
    { id: "ui", label: "Dynamic UI" },
    { id: "action", label: "Action" },
  ],
  toolsEyebrow: "Business Tools",
  toolsTitle: "Reusable business tools the Agent can call.",
  toolsSupport:
    "Each tool has capability, schema, permission, UI and execution. One tool can serve more than one part of the Dolphin ecosystem.",
  tools: [
    {
      id: "booking",
      title: "Booking",
      body: "Create, edit, cancel and manage appointments.",
      previewLabel: "Booking",
    },
    {
      id: "customer",
      title: "Customer",
      body: "Search customers, view history, update records.",
      previewLabel: "Customers",
    },
    {
      id: "notification",
      title: "Notification",
      body: "Send and schedule notifications.",
      previewLabel: "Notify",
    },
    {
      id: "reports",
      title: "Reports",
      body: "Revenue, bookings, customers and operational reports.",
      previewLabel: "Reports",
    },
    {
      id: "payment",
      title: "Payment",
      body: "Payments, invoices and financial actions.",
      previewLabel: "Payment",
    },
    {
      id: "staff",
      title: "Staff",
      body: "Schedules, assignments and staff operations.",
      previewLabel: "Staff",
    },
  ],
  dynamicEyebrow: "Dynamic UI",
  dynamicTitle: "AI doesn't replace the interface. It chooses the right one.",
  dynamicSupport:
    "Same Agent, four UI types. Chat is not the whole application.",
  dynamicQuote: "Chat is the entry point, not the entire product.",
  dynamicScenes: [
    {
      id: "booking",
      user: "Book Lan for Saturday.",
      uiLabel: "Booking Form",
    },
    {
      id: "customer360",
      user: "Show me Lan's history.",
      uiLabel: "Customer 360",
    },
    {
      id: "chart",
      user: "How was revenue this week?",
      uiLabel: "Revenue Chart",
    },
    {
      id: "notify",
      user: "Notify tomorrow's customers.",
      uiLabel: "Confirmation Panel",
    },
  ],
  adminIntentLabel: "Admin",
  customizeEyebrow: "Admin",
  customizeTitle: "Admins change forms and reports by chatting.",
  customizeSupport:
    "Inside tools you have switched on, an admin says the change — a field, a report formula, an approval rule — without sending the software team a ticket to code and deploy each small tweak. Structural changes can still need a confirm.",
  customizeApplying: "Applying the change…",
  customizeApplied: "Tool updated.",
  customizeScenes: [
    {
      id: "form",
      tab: "Edit form",
      user: "Add a Notes field to the booking form. Required before confirm.",
      uiLabel: "Booking form",
    },
    {
      id: "report",
      tab: "Add report",
      user: "Add a weekly revenue report: total = bookings × service price. Column chart by day.",
      uiLabel: "Custom report",
    },
  ],
  customizeNoteLabel: "Notes",
  customizeNoteRequired: "Required",
  customizeNotePlaceholder: "Customer note",
  customizeFormulaLabel: "Admin formula",
  customizeFormula: "revenue = bookings × service price",
  customizeReportTitle: "Weekly revenue · new formula",
  chartTitle: "Weekly revenue",
  chartDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  customer360Name: "Lan Nguyen",
  customer360Meta: "Regular · Spa",
  customer360Rows: [
    { label: "Last visit", value: "Facial · 12 Aug" },
    { label: "Bookings", value: "14 visits" },
    { label: "Note", value: "Strong essential-oil allergy" },
  ],
  notifyListTitle: "Tomorrow's customers",
  notifyItems: ["Lan · 09:00", "Hung · 11:30", "My · 15:00"],
  examplesEyebrow: "Product examples",
  examplesTitle: "One sentence. The right tool. The right screen.",
  examplesSupport:
    "You do not need Bookings → Create → Customer → Service → Date → Staff → Save.",
  examples: [
    {
      title: "Booking",
      body: "“Book Lan for Saturday.” The Agent opens Booking, you fill time and staff, then confirm.",
    },
    {
      title: "Customer",
      body: "“Lan's history.” Customer 360 shows a structured record — not a chat dump.",
    },
    {
      title: "Report",
      body: "“Revenue this week.” Reports opens a chart. Numbers to see, not a paragraph to read.",
    },
    {
      title: "Admin edits a form",
      body: "“Add a required note on the booking form.” The field appears now — no software ticket, no settings maze.",
    },
    {
      title: "Admin adds a report",
      body: "“Revenue = bookings × price.” Reports draws columns from that formula. No sprint deploy.",
    },
  ],
  controlEyebrow: "Human control",
  controlTitle: "AI handles complexity. You keep the decision.",
  controlSupport:
    "Bulk notifications, payments, refunds, deletions, important data changes — Ops can pause for a human check.",
  controlConcept: "AI handles complexity. Human stays in control.",
  controlAgentLine: "I found 128 customers with appointments tomorrow.",
  controlActionLabel: "Send notification",
  controlReview: "Review",
  controlConfirm: "Confirm & send",
  controlSent: "Queued to send.",
  controlSensitive: [
    "Notifications",
    "Payments",
    "Refunds",
    "Deletions",
    "Important data changes",
  ],
  philosophyEyebrow: "Product philosophy",
  philosophyTitle: "Use the interface when you want. Talk when it's faster.",
  philosophySupport:
    "Traditional UI does not disappear. Ops combines Agent, Business Tools, Dynamic UI and human confirmation.",
  philosophyTraditional: {
    title: "Traditional CRM",
    body: "“Learn the CRM. Changing a form means asking software.”",
  },
  philosophyOps: {
    title: "Dolphin Ops",
    body: "“Say the job. Admins change enabled tools themselves.”",
  },
  philosophyCombine: "Agent + Business Tools + Dynamic UI + Human Control",
  philosophyPills: [
    "AI Agent",
    "Business Tools",
    "Dynamic UI",
    "Admin customize",
    "Human Control",
  ],
  whoEyebrow: "Who it is for",
  whoTitle: "Spa, clinic, salon, and small teams running the day.",
  whoSupport:
    "A fit when bookings, customers, reports and reminders live on too many screens — and speaking the job beats learning a menu.",
  whoItems: [
    {
      title: "Spas and salons with a full book",
      body: "Appointments, returning guests and reminders sit on too many screens — or in someone's head.",
    },
    {
      title: "Clinics and small practices",
      body: "Look a guest up fast, keep sensitive actions gated, and let the right person approve.",
    },
    {
      title: "Service shops and small teams",
      body: "See bookings, customers and reports without learning a heavy menu.",
    },
    {
      title: "You have a website, not an ops layer",
      body: "The site is the shopfront. Ops is how the team runs work behind it. No shopfront yet: see /services/web/.",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Common questions",
  faqItems: [
    {
      q: "What is AI for business operations, and is Dolphin Ops that?",
      a: "AI for business operations means using AI on internal work: bookings, customers, reports, notifications, and steps that mix people and tools. Dolphin Ops is Dolphin Software's product in that direction: you say the job, the system picks the right tool and UI.",
    },
    {
      q: "How is Dolphin Ops different from Dolphin Care?",
      a: "Dolphin Care is AI that takes care of your customers on the website. Dolphin Ops is AI that helps you run the business inside. For on-site customer care see /dolphin-care/. For internal ops see /dolphin-ops/.",
    },
    {
      q: "Is Dolphin Ops a CRM with AI?",
      a: "Not a CRM with chat bolted on. A traditional CRM walks menu → module → form → Save. A new field or report often waits on a software ticket, then a deploy. Dolphin Ops starts from the job you want, picks the Business Tool and UI, and lets an admin change enabled tools in chat.",
    },
    {
      q: "Do form or report changes wait on the software team?",
      a: "In a traditional CRM, often yes: ticket, sprint, deploy. In Dolphin Ops an admin can ask — inside enabled tools — for a field, a simple report formula, or an approval rule, without software coding each small change. Structural work can still need a confirm, or a scope talk via /ai-transform/.",
    },
    {
      q: "Is Dolphin Ops just chat?",
      a: "No. Chat is the entry point, not the whole product. The same Agent can open a form, Customer 360, a chart, or a confirmation panel.",
    },
    {
      q: "Who is Dolphin Ops for?",
      a: "Spas, clinics, salons, service shops and small teams juggling bookings, customers, reports and reminders across too many screens. Often after you already have a basic online presence or a website. If customers still cannot find you, see /services/web/.",
    },
    {
      q: "Does Dolphin Ops run everything with no human check?",
      a: "No. Payments, refunds, deletions, important data changes and bulk notifications can pause for someone with permission to confirm.",
    },
    {
      q: "Can an admin change Dolphin Ops in chat?",
      a: "Yes, inside tools you have switched on — without filing a ticket for software to code and ship each small tweak. Add a form field, a simple report formula, or an approval rule. Structural changes may still need a confirm, or a scope talk via /ai-transform/.",
    },
    {
      q: "What does Dolphin Ops cost?",
      a: "Price follows scope. There is no single fee for every business. Message Zalo at https://zalo.me/0779937633 and describe the work.",
    },
  ],
  closeEyebrow: "Next step",
  closeTitle: "Want to see Ops on your actual work?",
  closeSupport:
    "If you need on-site customer care first, see /dolphin-care/. For a broader AI rollout, see /ai-transform/.",
  closeCta: "Talk to us",
  closeSecondary: "Replay the demo",
  closeTrust:
    "Dolphin Ops does not ask you to learn another menu. The team says the job; the system picks the tool.",
  zaloLabel: "Message on Zalo",
};

const ja: DolphinOpsCopy = {
  metaTitle: "Dolphin Ops | 少人数チーム向け、事業を回すAI",
  metaDescription:
    "Dolphin Opsはスパ・クリニック・サロン・サービス店向けの社内運用AI。用件を伝えると、適切なツールと画面を開きます。",
  eyebrow: "事業オペレーションのAI",
  headline: "Dolphin Ops – 少人数チームの[[事業運用AI]]",
  support:
    "Dolphin Opsは社内向けの運用AIです。用件を伝えると意図を読み、業務ツールを選び、適切な画面を開き、機微な操作は人の確認を待ちます。",
  ctaPrimary: "Dolphin Opsを見る",
  ctaSecondary: "相談する",
  trustLine: "AIは画面を消さない。適切な画面を選ぶ。",
  heroChromeTitle: "Dolphin Ops",
  heroStatusReady: "待機",
  heroStatusRunning: "処理中",
  heroIntentLabel: "あなた",
  heroIntentText: "今週土曜、Lanさんの予約を入れて。",
  heroUnderstanding: "意図を理解しています…",
  heroToolSelected: "Booking Tool",
  heroFormTitle: "予約",
  heroFieldCustomer: "お客様",
  heroFieldService: "メニュー",
  heroFieldDate: "日付",
  heroFieldTime: "時刻",
  heroFieldStaff: "担当",
  heroCustomerValue: "Lan",
  heroServiceValue: "フェイシャル",
  heroDateValue: "土曜",
  heroTimeValue: "15:00",
  heroStaffPlaceholder: "担当を選択",
  heroStaffValue: "Mai",
  heroConfirm: "予約を確定",
  heroSuccess: "予約を作成しました。",
  problemEyebrow: "課題",
  problemTitle: "CRMに使い方を覚えさせる仕事。Opsは用件を聞いて画面を出す。",
  problemSupport:
    "従来のCRMはダッシュボード→モジュール→機能→フォーム→保存。欄やレポートを足すと、ソフト担当へのチケット、実装待ち、デプロイ待ちになりがちです。Dolphin Opsは意図から入り、有効なツールを管理者がチャットで直せます。",
  problemTraditionalTitle: "よくあるCRM",
  problemTraditionalSteps: [
    "ユーザー",
    "ダッシュボード",
    "モジュール",
    "機能",
    "フォーム",
    "保存",
  ],
  problemTraditionalNote:
    "欄や計算式を変えたい？チケット。スプリント待ち。デプロイ待ち。",
  problemOpsTitle: "Dolphin Ops",
  problemOpsSteps: [
    "意図",
    "Agent",
    "業務ツール",
    "UI",
    "操作",
    "結果",
  ],
  problemOpsNote:
    "管理者が用件を言う。ツールが更新される — 小さな変更ごとにソフト担当の実装を待たない。",
  vsCareTitle: "Dolphin Care",
  vsCareBody: "お客様をケアするAI。",
  vsOpsTitle: "Dolphin Ops",
  vsOpsBody: "事業を回すためのAI。",
  howEyebrow: "動き方",
  howTitle: "やりたいことを伝える。適切なツールが開く。",
  howSupport:
    "チャットは入口です。エージェントが業務ツールを選び、確認して完了できるUIを出します。",
  howSteps: [
    {
      title: "Dolphin Opsに用件を伝える",
      body: "予約、顧客検索、売上確認 — 意味の通る一文で十分です。",
    },
    {
      title: "エージェントが意図を読む",
      body: "テキスト返信で終わりません。次の一手を選びます。",
    },
    {
      title: "業務ツールを選ぶ",
      body: "Booking、Customer、Reports、Notification — 仕事に合うツールです。",
    },
    {
      title: "適切なUIが出る",
      body: "フォーム、表、チャート、確認パネル — タスク次第です。",
    },
    {
      title: "見て、仕上げる",
      body: "欠けを埋め、確認する。重要な操作は勝手に走りません。",
    },
  ],
  howPipeline: [
    { id: "intent", label: "Intent" },
    { id: "agent", label: "Agent" },
    { id: "tool", label: "Tool" },
    { id: "ui", label: "Dynamic UI" },
    { id: "action", label: "Action" },
  ],
  toolsEyebrow: "Business Tools",
  toolsTitle: "エージェントが呼び出せる業務ツール。",
  toolsSupport:
    "各ツールは能力・スキーマ・権限・UI・実行を持ちます。同じツールをDolphinの別の場所でも使えます。",
  tools: [
    {
      id: "booking",
      title: "Booking",
      body: "予約の作成・変更・キャンセルと管理。",
      previewLabel: "予約",
    },
    {
      id: "customer",
      title: "Customer",
      body: "顧客検索、履歴、情報の更新。",
      previewLabel: "顧客",
    },
    {
      id: "notification",
      title: "Notification",
      body: "通知の送信と予約配信。",
      previewLabel: "通知",
    },
    {
      id: "reports",
      title: "Reports",
      body: "売上・予約・顧客・オペレーションのレポート。",
      previewLabel: "レポート",
    },
    {
      id: "payment",
      title: "Payment",
      body: "支払い、請求、金銭操作。",
      previewLabel: "決済",
    },
    {
      id: "staff",
      title: "Staff",
      body: "シフト、担当、スタッフ業務。",
      previewLabel: "スタッフ",
    },
  ],
  dynamicEyebrow: "Dynamic UI",
  dynamicTitle: "AIは画面を消さない。適切な画面を選ぶ。",
  dynamicSupport:
    "同じエージェントが、四種類のUIを出します。チャットがアプリ全体ではありません。",
  dynamicQuote: "チャットは入口であり、製品そのものではない。",
  dynamicScenes: [
    {
      id: "booking",
      user: "土曜、Lanさんを予約して。",
      uiLabel: "Booking Form",
    },
    {
      id: "customer360",
      user: "Lanさんの履歴を見せて。",
      uiLabel: "Customer 360",
    },
    {
      id: "chart",
      user: "今週の売上は？",
      uiLabel: "Revenue Chart",
    },
    {
      id: "notify",
      user: "明日のお客様に通知して。",
      uiLabel: "Confirmation Panel",
    },
  ],
  adminIntentLabel: "Admin",
  customizeEyebrow: "Admin",
  customizeTitle: "管理者がチャットでフォームとレポートを直す。",
  customizeSupport:
    "有効なツールの範囲なら、管理者が欄・計算式・承認ルールを話して直せる。小さな変更ごとにソフト担当へ実装・デプロイを頼まなくてよい。構造に触れる変更は確認が残る場合があります。",
  customizeApplying: "変更を適用しています…",
  customizeApplied: "ツールを更新しました。",
  customizeScenes: [
    {
      id: "form",
      tab: "フォームを直す",
      user: "予約フォームにメモ欄を追加。確定前は必須。",
      uiLabel: "Booking form",
    },
    {
      id: "report",
      tab: "レポートを足す",
      user: "週次売上レポートを追加。合計＝予約数×メニュー単価。日別の棒グラフ。",
      uiLabel: "Custom report",
    },
  ],
  customizeNoteLabel: "メモ",
  customizeNoteRequired: "必須",
  customizeNotePlaceholder: "お客様メモ",
  customizeFormulaLabel: "管理者の計算式",
  customizeFormula: "売上 = 予約数 × メニュー単価",
  customizeReportTitle: "今週の売上 · 新しい計算式",
  chartTitle: "今週の売上",
  chartDays: ["月", "火", "水", "木", "金", "土", "日"],
  customer360Name: "Lan Nguyen",
  customer360Meta: "常連 · スパ",
  customer360Rows: [
    { label: "前回", value: "フェイシャル · 8/12" },
    { label: "来店", value: "14回" },
    { label: "メモ", value: "強めの精油アレルギー" },
  ],
  notifyListTitle: "明日のお客様",
  notifyItems: ["Lan · 09:00", "Hung · 11:30", "My · 15:00"],
  examplesEyebrow: "具体例",
  examplesTitle: "一文。正しいツール。正しい画面。",
  examplesSupport:
    "予約 → 新規 → 顧客 → メニュー → 日付 → 担当 → 保存、と辿る必要はありません。",
  examples: [
    {
      title: "予約",
      body: "「土曜、Lanさんを予約。」エージェントがBookingを開き、時刻と担当を補って確定します。",
    },
    {
      title: "顧客",
      body: "「Lanさんの履歴。」Customer 360が構造化された記録を出します。チャットの羅列ではありません。",
    },
    {
      title: "レポート",
      body: "「今週の売上。」Reportsがチャートを開きます。読む文章ではなく、見る数字です。",
    },
    {
      title: "管理者がフォームを直す",
      body: "「予約フォームに必須のメモを足して。」欄がすぐ出る。ソフト担当へのチケットも、設定の奥も不要。",
    },
    {
      title: "管理者がレポートを足す",
      body: "「売上＝予約数×単価。」その式でチャートが描かれる。スプリントのデプロイを待たない。",
    },
  ],
  controlEyebrow: "Human control",
  controlTitle: "複雑さはAI。決めるのは人。",
  controlSupport:
    "一斉通知、決済、返金、削除、重要なデータ変更 — Opsは人の確認で止まれます。",
  controlConcept: "AI handles complexity. Human stays in control.",
  controlAgentLine: "明日予約のあるお客様が128人見つかりました。",
  controlActionLabel: "通知を送る",
  controlReview: "確認",
  controlConfirm: "確定して送信",
  controlSent: "送信待ちに入れました。",
  controlSensitive: [
    "通知",
    "決済",
    "返金",
    "削除",
    "重要なデータ変更",
  ],
  philosophyEyebrow: "考え方",
  philosophyTitle: "画面は残す。速いときは話して動かす。",
  philosophySupport:
    "従来UIは消えません。Opsはエージェント、業務ツール、動的UI、人の確認を組み合わせます。",
  philosophyTraditional: {
    title: "従来のCRM",
    body: "「CRMの使い方を覚える。フォームを変えるならソフト担当へ。」",
  },
  philosophyOps: {
    title: "Dolphin Ops",
    body: "「用件を伝える。有効なツールは管理者が自分で直す。」",
  },
  philosophyCombine: "Agent + Business Tools + Dynamic UI + Human Control",
  philosophyPills: [
    "AI Agent",
    "Business Tools",
    "Dynamic UI",
    "Admin customize",
    "Human Control",
  ],
  whoEyebrow: "向いている人",
  whoTitle: "スパ、クリニック、サロン、少人数チーム。",
  whoSupport:
    "予約・顧客・レポート・リマインドが画面に散らばっていて、メニューを覚えるより用件を言った方が早いときに向きます。",
  whoItems: [
    {
      title: "予約が多いスパ・サロン",
      body: "予約、再来、リマインドが画面に散らばっている、または人の記憶に載っているとき。",
    },
    {
      title: "小さなクリニック",
      body: "お客様をすぐ引き、機微な操作を止め、権限のある人が承認する。",
    },
    {
      title: "サービス店と少人数チーム",
      body: "重いメニューを覚えず、予約・顧客・数字を見る。",
    },
    {
      title: "サイトはあるが、社内の回し方が足りない",
      body: "サイトは客が見つける店先。Opsは裏側の運用。店先がまだなら /services/web/。",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "よくある質問",
  faqItems: [
    {
      q: "事業を回すAIとは？Dolphin Opsはそれですか？",
      a: "予約、顧客、レポート、通知など、人とツールが混ざる社内業務にAIを使うことです。Dolphin OpsはDolphin Softwareのその製品です。用件を伝えると、適切なツールと画面を開きます。",
    },
    {
      q: "Dolphin Careとの違いは？",
      a: "Dolphin Careはサイト上でお客様をケアするAI。Dolphin Opsは社内で事業を回すAIです。サイト上の顧客ケアは /dolphin-care/。社内運用は /dolphin-ops/。",
    },
    {
      q: "AI付きのCRMですか？",
      a: "チャットを後付けしたCRMではありません。従来のCRMはメニュー→モジュール→フォーム→保存。欄やレポートを足すとソフト担当のチケットとデプロイ待ちになりがちです。Dolphin Opsはやりたいことから入り、有効なツールを管理者がチャットで直せます。",
    },
    {
      q: "フォームやレポートの変更はソフト担当待ちですか？",
      a: "従来のCRMではそうなりやすいです。チケット、スプリント、デプロイ。Dolphin Opsでは有効なツールの範囲で、管理者が欄・簡単な計算式・承認ルールを話して直せます。小さな変更ごとに実装を頼みません。構造に触れる変更は確認や /ai-transform/ の相談が残る場合があります。",
    },
    {
      q: "チャットだけの製品ですか？",
      a: "いいえ。チャットは入口です。同じエージェントがフォーム、Customer 360、チャート、確認パネルを開けます。",
    },
    {
      q: "誰向けですか？",
      a: "スパ、クリニック、サロン、サービス店、少人数チーム。予約・顧客・レポートが画面に散らばっているとき。オンラインの店先がまだなら /services/web/。",
    },
    {
      q: "人の確認なしで全部走りますか？",
      a: "いいえ。決済、返金、削除、重要なデータ変更、一斉通知は、権限のある人の確認で止まれます。",
    },
    {
      q: "管理者はチャットで変えられますか？",
      a: "有効なツールの範囲ではできます。小さな変更ごとにソフト担当へ実装・デプロイを頼まなくてよい。欄の追加、簡単な計算式、承認ルール。構造に触れる変更は確認や /ai-transform/ の相談が残る場合があります。",
    },
    {
      q: "費用は？",
      a: "範囲で決まります。一律の料金はありません。https://zalo.me/0779937633 のZaloで業務を話してください。",
    },
  ],
  closeEyebrow: "次の一歩",
  closeTitle: "実際の業務でOpsを見たいですか？",
  closeSupport:
    "先にサイト上の顧客ケアが必要なら /dolphin-care/。AIの進め方を広く見たいなら /ai-transform/。",
  closeCta: "相談する",
  closeSecondary: "デモをもう一度",
  closeTrust:
    "新しいメニューの覚え方ではありません。用件を伝え、ツールを選んで回します。",
  zaloLabel: "Zaloで相談",
};

const byLocale: Record<Locale, DolphinOpsCopy> = {
  vi,
  en,
  ja,
};

export function getDolphinOpsCopy(locale: Locale): DolphinOpsCopy {
  return byLocale[locale] ?? vi;
}
