/** MA Dance CRM discovery — business collect (form 31/08/2026). */

export const maDanceDiscoveryCopy = {
  title: "MA Dance — CRM discovery",
  metaDescription:
    "Tổng hợp nghiệp vụ MA Dance Studio từ form CRM discovery. Không index.",
  barLabel: "CRM discovery · MA Dance",
  source:
    "Form CRM discovery · 1 response · Huỳnh Thị Kim Uyên (Quản lý) · 0374388836 · 31/08/2026",
  lead: "Tổng hợp nghiệp vụ vận hành studio nhảy — không gồm website / portal student–teacher.",
  model:
    "Gói học phí → ghi danh khóa (theo level / khung giờ) → 8 buổi cố định / tháng → điểm danh trừ buổi → (tuỳ) bảo lưu giữ buổi → kết thúc theo lịch tháng. Domain course-based, không spa 1:1.",
  stats: [
    { value: "3", label: "Chi nhánh" },
    { value: "7", label: "Phòng tập" },
    { value: "10–15", label: "Sĩ số / lớp" },
    { value: "8 buổi", label: "Khóa trọn tháng" },
  ],
  branches: [
    {
      branch: "Quận 10",
      rooms: "MI1, MI2 · MON3, MON4",
      note: "MI lớn · MON nhỏ",
    },
    { branch: "Quận 3", rooms: "Room A", note: "~100 m²" },
    {
      branch: "Phú Nhuận",
      rooms: "MI3, MI4",
      note: "MI3 lớn · MI4 nhỏ",
    },
  ],
  branchRule:
    "Khóa cố định chi nhánh, không cố định phòng. Đông → ưu tiên phòng lớn (nêu rõ Phú Nhuận).",
  roles: [
    {
      role: "Quản lý",
      can: "Tạo/sửa khóa, xếp lịch, thu tiền, điểm danh, duyệt bảo lưu",
      cannot: "—",
    },
    {
      role: "Lễ tân",
      can: "Thu tiền quầy + điểm danh",
      cannot: "Không làm full ops khóa",
    },
    {
      role: "Giáo viên",
      can: "Dạy; nghỉ → tự tìm GV backup",
      cannot: "Không xem học phí / SĐT HV",
    },
    {
      role: "HV / PH",
      can: "Xin BL / đổi lớp qua Zalo",
      cannot: "Không tự thao tác trên CRM",
    },
  ],
  courseRequired:
    "Thể loại · Level · Khung giờ · Giáo viên · Ngày khai giảng · Ngày kết thúc · Chi nhánh",
  courseSchedule:
    "Lịch tuần cố định cả khóa. Kết thúc trọn 8 buổi trong tháng theo ngày KG–KT. 1 GV / khóa · 1 GV / buổi.",
  midEnroll: [
    { level: "Begin", rule: "Dừng nhận từ buổi 4–5" },
    { level: "Inter", rule: "Nhận ở các buổi lẻ của khóa" },
    { level: "Advance", rule: "Nhận buổi 1 & buổi 5" },
  ],
  courseRules: [
    { rule: "Hạn ghi danh", value: "Có" },
    {
      rule: "Sĩ số",
      value: "10–15 tùy CN; full → hướng khung giờ khác",
    },
    { rule: "Vào giữa khóa", value: "Được (theo rule level)" },
    { rule: "Hủy buổi (ốm / lễ…)", value: "HV không mất buổi" },
    {
      rule: "Conflict phòng",
      value: "2 khóa cùng giờ → 2 phòng khác nhau",
    },
    {
      rule: "Sinh buổi tự động?",
      value: "Chưa hiểu câu hỏi — cần clarify",
    },
  ],
  students: [
    { item: "Hồ sơ thêm", rule: "Ngày sinh, email" },
    {
      item: "Trẻ em",
      rule: "Điểm danh = tên HV; liên hệ & TT = PH",
    },
    { item: "Nhiều khóa song song", rule: "Có" },
    {
      item: "Đổi lớp",
      rule: "Cuối tháng; giữa khóa = bất khả kháng",
    },
    { item: "Nghỉ / hủy ghi danh", rule: "Giữ hồ sơ trên hệ thống" },
  ],
  teachers: [
    {
      item: "Hồ sơ",
      rule: "Tên, SĐT, email, style dạy, lớp, CN",
    },
    { item: "GV / buổi", rule: "Bắt buộc 1 GV" },
    { item: "GV nghỉ", rule: "Tìm backup dạy thay" },
    { item: "Calendar cá nhân", rule: "Không rõ" },
    { item: "Lương dạy thay", rule: "Chưa nêu" },
  ],
  finance: [
    { item: "Đơn vị bán", rule: "Thu theo gói" },
    { item: "Thanh toán", rule: "Một lần hoặc từng đợt — tùy gói" },
    { item: "Phương thức", rule: "Tiền mặt / CK + ảnh bill" },
    { item: "Cọc", rule: "Chỉ gói 6 tháng & 12 tháng" },
    { item: "Nợ", rule: "Cho vào lớp, thu sau khi học" },
    { item: "Nghỉ không bảo lưu", rule: "Mất buổi, không hoàn" },
    { item: "Báo cáo chủ cần", rule: "Đã thu / nợ — theo chi nhánh" },
  ],
  financeGaps:
    "Học khi chưa đóng đủ (28b) · Giảm giá / referral / học 2 môn (32) · Chi tiết từng gói (1th / 3th / 6th / 12th + số buổi + giá).",
  attendanceDone: [
    "Không học bù.",
    "Điểm danh xong → trừ 1 buổi trong gói/khóa.",
  ],
  qrGap:
    "Chưa trả lời: ai quét, loại QR, cửa sổ giờ, điểm danh tay / sửa sau buổi.",
  calendar: [
    { item: "Đích đẩy lịch", rule: "1 lịch chung trung tâm" },
    { item: "Ai nhận", rule: "Chỉ nội bộ (chủ / GV / NV)" },
    { item: "HV / PH Google Calendar", rule: "Không" },
    {
      item: "Sync buổi vs khóa / Workspace",
      rule: "Trống / không rõ",
    },
  ],
  hold: [
    {
      rule: "Điều kiện gói",
      detail: "≥ 3 tháng: tặng BL · gói ngắn hơn: mua gói BL lẻ",
    },
    {
      rule: "Khi dùng",
      detail: "Đã đóng HP + off dài (quê / du lịch) để không mất buổi",
    },
    { rule: "Duyệt", detail: "HV xin Zalo → Quản lý duyệt" },
    {
      rule: "Đơn vị",
      detail: "Theo thời hạn gói BL + số buổi đang có",
    },
    { rule: "Hết hạn / không học lại", detail: "Trừ buổi" },
    {
      rule: "Ngày lễ / buổi hủy",
      detail: "Không tính vào hạn BL",
    },
    {
      rule: "Sĩ số khi BL",
      detail: "Vẫn giữ chỗ / vẫn tính sĩ số",
    },
    { rule: "Quay lại", detail: "Có hỗ trợ đổi (GV / lịch)" },
  ],
  holdGaps: "Quay lại đúng khóa cũ vs khóa sau (50) · Bảo lưu khi còn nợ (53).",
  followUps: [
    {
      n: "1",
      topic: "Sinh buổi: tự động vs tạo tay",
      why: "Ảnh hưởng engine khóa → session",
    },
    {
      n: "2",
      topic: "Trạng thái buổi thực tế",
      why: "Model status upcoming/ongoing/…",
    },
    {
      n: "3",
      topic: "Đổi giờ / phòng / GV một buổi",
      why: "Ops hàng ngày + điểm danh đã có",
    },
    { n: "4", topic: "Cụm QR 35–38", why: "Scope điểm danh hardware/flow" },
    {
      n: "5",
      topic: "28b / 32 / 53",
      why: "Học thiếu tiền · giảm giá · BL khi nợ",
    },
    {
      n: "6",
      topic: "Catalog gói đang bán",
      why: "Package credits + báo giá",
    },
    {
      n: "7",
      topic: "Chủ vs QL approve",
      why: "ACL giảm giá / nợ / vượt sĩ số",
    },
  ],
  conclusion:
    "MA Dance = studio nhảy đa chi nhánh, bán gói, khóa 8 buổi/tháng cố định CN, phòng linh hoạt, nhận giữa khóa theo level, điểm danh trừ buổi, không học bù, bảo lưu kèm gói (≥3th) do QL duyệt qua Zalo, báo cáo tiền theo chi nhánh. CRM nên neo quanh Course · Session · Package credits · Branch capacity · Role-based ops.",
} as const;
