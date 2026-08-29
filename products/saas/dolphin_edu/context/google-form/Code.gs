/**
 * Tạo Google Form khảo sát nghiệp vụ CRM (Dolphin Edu — trung tâm nhảy).
 * Chạy khi đã đăng nhập nchithanh9999@gmail.com
 *
 * 1. https://script.google.com  → New project
 * 2. Dán file này + appsscript.json (Project Settings → Show appsscript.json)
 * 3. Chọn hàm createCrmDiscoveryForm → Run → cấp quyền
 *    Form đã tạo: chạy flattenCrmDiscoveryForm (không tạo form mới, giữ link khách)
 * 4. Execution log: link điền form + link sửa + Sheet câu trả lời
 *
 * Một trang (section header, không page break) — khách cuộn và sửa tự do.
 */
const LIVE_FORM_ID = "1u_AjP4cfiKD5fbOn7SUkAv31XVsA08fq1LY9BwLnyqY";
function createCrmDiscoveryForm() {
  const form = FormApp.create(
    "Dolphin Edu — Khảo sát nghiệp vụ CRM (trung tâm nhảy)"
  );

  form
    .setDescription(
      "Dolphin cần nắm quy tắc vận hành để triển khai CRM: khóa học, buổi học, học viên, giáo viên, học phí, điểm danh QR, lịch Google, bảo lưu.\n\n" +
        "Không cần biết kỹ thuật. Viết đúng cách trung tâm đang làm. Không rõ thì ghi «chưa có» hoặc «làm tùy lúc».\n\n" +
        "Có file Excel / bảng giá / ảnh lịch tuần: gửi qua Zalo Dolphin (form này không đính kèm file)."
    )
    .setAllowResponseEdits(true)
    .setLimitOneResponsePerUser(false)
    .setProgressBar(false)
    .setCollectEmail(false)
    .setRequireLogin(false)
    .setShowLinkToRespondAgain(true)
    .setConfirmationMessage(
      "Cảm ơn. Nếu có Excel, bảng giá hoặc ảnh lịch tuần, gửi tiếp qua Zalo Dolphin."
    );

  const skip = "Bỏ trống nếu chưa có quy tắc. Không rõ thì ghi: chưa có / làm tùy lúc.";
  const yn = ["Có", "Không", "Làm tùy lúc", "Không rõ"];

  // —— Người trả lời ——
  short_(form, "Tên trung tâm", true);
  short_(form, "Họ tên người điền", true);
  choice_(
    form,
    "Vai trò của bạn tại trung tâm",
    ["Chủ", "Quản lý", "Lễ tân", "Giáo viên", "Khác"],
    "",
    true
  );
  short_(form, "Zalo hoặc số điện thoại liên hệ", true);

  // —— 0. Quản lý ——
  section_(form, "0. Quản lý (cơ sở · phòng · quyền)", "Cơ sở, phòng tập, ai được làm gì trên CRM.");
  para_(form, "1. Có bao nhiêu chi nhánh? Mỗi chi nhánh có những phòng nào?", skip);
  para_(
    form,
    "2. Một lớp có được dạy sang chi nhánh khác không, hay khóa gắn chặt 1 cơ sở + 1 phòng?",
    skip
  );
  para_(
    form,
    "3. Ai được tạo/sửa khóa, xếp lịch, thu tiền, điểm danh, bảo lưu? (chủ / quản lý / lễ tân / giáo viên)",
    skip
  );
  choice_(form, "4. Giáo viên có được xem học phí / SĐT học viên không?", yn, skip);

  // —— 1. Course ——
  section_(form, "1. Course (khóa học)", "Một khóa = nhiều học viên, nhiều buổi.");
  para_(
    form,
    "5. Một khóa gồm những gì bắt buộc? (tên, bộ môn, trình độ, GV, phòng, sĩ số, lịch tuần, ngày bắt đầu, số buổi…)",
    skip
  );
  choice_(form, "6. Khóa có hạn ghi danh (từ ngày–đến ngày) không?", yn, "Hết hạn còn nhận học viên không? Kể thêm ở câu sau nếu cần.");
  para_(form, "6b. Nếu có hạn ghi danh: hết hạn còn nhận học viên không?", skip);
  para_(
    form,
    "7. Sĩ số tối thiểu / tối đa? Lớp đầy thì chờ, từ chối, hay mở thêm khóa?",
    skip
  );
  choice_(form, "8. Học viên ghi danh cả khóa, hay được vào giữa khóa (buổi thứ n)?", [
    "Chỉ cả khóa, từ buổi đầu",
    "Được vào giữa khóa",
    "Làm tùy lúc",
    "Không rõ",
  ]);
  choice_(form, "9. Một khóa 1 giáo viên hay nhiều giáo viên? Có trợ giảng không?", [
    "1 giáo viên",
    "Nhiều giáo viên",
    "Có trợ giảng",
    "Làm tùy lúc",
    "Không rõ",
  ]);
  para_(
    form,
    "10. Lịch tuần có cố định cả khóa không? Có khóa lịch lệch (tuần này T3, tuần sau T5) không?",
    skip
  );
  para_(
    form,
    "11. Kết thúc khóa: đủ số buổi, hay tới ngày kết thúc dù thiếu buổi?",
    skip
  );

  // —— 2. Class ——
  section_(form, "2. Class (buổi học)", "Buổi học sinh từ lịch khóa.");
  choice_(form, "12. Buổi học tự sinh từ lịch khóa, hay nhân viên tạo từng buổi?", [
    "Tự sinh từ lịch khóa",
    "Tạo từng buổi",
    "Cả hai",
    "Không rõ",
  ]);
  para_(
    form,
    "13. Một buổi cần những trường nào? (ngày, giờ, phòng, GV, sĩ số, trạng thái… — kể nếu còn thiếu)",
    skip
  );
  para_(
    form,
    "14. Trạng thái buổi đang dùng: chưa học / đang học / xong / hủy — có thêm trạng thái khác không?",
    skip
  );
  para_(
    form,
    "15. Hủy buổi (GV ốm, lễ, mất điện): học viên được cộng buổi, dời lịch khóa, hay mất buổi?",
    skip
  );
  para_(
    form,
    "16. Đổi giờ / đổi phòng / đổi GV một buổi: ai được đổi? Học viên đã điểm danh buổi đó xử lý ra sao?",
    skip
  );
  para_(
    form,
    "17. Hai khóa cùng giờ cùng phòng có được không? Nếu không, ưu tiên khóa nào?",
    skip
  );

  // —— 3. Student ——
  section_(form, "3. Student (học viên)", "Hồ sơ và ghi danh.");
  para_(
    form,
    "18. Hồ sơ bắt buộc: họ tên, SĐT — còn gì nữa? (ngày sinh, phụ huynh, ghi chú sức khỏe…)",
    skip
  );
  para_(
    form,
    "19. Trẻ em: lưu phụ huynh thế nào? Liên hệ / thanh toán / điểm danh theo ai?",
    skip
  );
  choice_(form, "20. Một học viên học nhiều khóa cùng lúc được không?", yn);
  para_(
    form,
    "21. Học viên đổi khóa / đổi ca giữa chừng: điều kiện? Có tính lại học phí không?",
    skip
  );
  para_(
    form,
    "22. Học viên nghỉ luôn (hủy ghi danh): xóa khỏi khóa, giữ hồ sơ, hay cấm ghi danh lại?",
    skip
  );

  // —— 4. Teacher ——
  section_(form, "4. Teacher (giáo viên)", "Phân công và dạy thay.");
  para_(
    form,
    "23. Giáo viên lưu những gì? (tên, SĐT, bộ môn dạy được, chi nhánh…)",
    skip
  );
  choice_(form, "24. Một buổi bắt buộc 1 giáo viên, hay được nhiều giáo viên?", [
    "Bắt buộc 1 giáo viên",
    "Được nhiều giáo viên",
    "Làm tùy lúc",
    "Không rõ",
  ]);
  para_(
    form,
    "25. Giáo viên nghỉ: chỉ định GV thay hay hủy buổi? Buổi dạy thay có tính lương khác không?",
    skip
  );
  choice_(
    form,
    "26. Giáo viên có cần lịch trên điện thoại (Google Calendar) không, hay chỉ xem trên CRM?",
    ["Cần Google Calendar", "Chỉ xem trên CRM", "Cả hai", "Không rõ"]
  );

  // —— 5. Payment ——
  section_(
    form,
    "5. Payment (học phí)",
    "Kể đúng cách đang thu. Bảng giá gửi Zalo, không đính kèm form."
  );
  para_(
    form,
    "27. Thu theo khóa, tháng, gói buổi, hay từng buổi? (mô tả gói đang bán)",
    skip
  );
  choice_(form, "28. Đóng một lần lúc ghi danh, hay từng đợt?", [
    "Một lần lúc ghi danh",
    "Từng đợt",
    "Cả hai / tùy gói",
    "Không rõ",
  ]);
  choice_(form, "28b. Được học khi chưa đóng đủ không?", yn);
  para_(
    form,
    "29. Hình thức: tiền mặt / chuyển khoản / ví? Có cần mã giao dịch / ảnh bill không?",
    skip
  );
  para_(form, "30. Có cọc giữ chỗ không? Không học thì hoàn hay mất cọc?", skip);
  para_(
    form,
    "31. Nợ: còn cho vào lớp không? Ai được cho nợ, nợ tối đa bao lâu?",
    skip
  );
  para_(
    form,
    "32. Giảm giá / bạn giới thiệu / học 2 môn: ai được duyệt, ghi thế nào?",
    skip
  );
  para_(
    form,
    "33. Nghỉ giữa khóa chưa bảo lưu: hoàn tiền theo buổi còn lại, hay không hoàn?",
    skip
  );
  para_(
    form,
    "34. Chủ cần xem nhanh: đã thu / còn nợ / theo khóa / theo học viên — có cần theo chi nhánh không?",
    skip
  );

  // —— 6. QR ——
  section_(form, "6. Điểm danh QR", "Ai quét, mã nào, vắng / học bù.");
  choice_(form, "35. Ai quét QR?", [
    "Học viên tự quét khi vào",
    "Giáo viên quét",
    "Lễ tân quét",
    "Nhiều người / tùy lúc",
    "Không rõ",
  ]);
  choice_(form, "36. QR là loại nào?", [
    "Mã cố định của học viên",
    "Mã từng buổi học",
    "Mã dán cửa phòng (quét = điểm danh buổi đó)",
    "Chưa chốt / không rõ",
  ]);
  para_(
    form,
    "37. Được điểm danh trước giờ / đúng giờ / sau giờ bao lâu? Trễ có tách «có mặt / trễ» không?",
    skip
  );
  para_(
    form,
    "38. Quên máy / mất QR: điểm danh tay được không? Ai được sửa điểm danh sau buổi?",
    skip
  );
  choice_(form, "39. Vắng: có học bù buổi khác không?", yn, "Nếu có: bù lớp nào, ai duyệt, tối đa mấy buổi? Kể ở câu 39b.");
  para_(form, "39b. Nếu có học bù: bù lớp nào, ai duyệt, tối đa mấy buổi?", skip);
  choice_(
    form,
    "40. Điểm danh xong có trừ 1 buổi trong gói / khóa không, hay chỉ ghi có mặt?",
    ["Trừ 1 buổi trong gói/khóa", "Chỉ ghi có mặt", "Tùy loại lớp", "Không rõ"]
  );

  // —— 7. Google Calendar ——
  section_(form, "7. Google Calendar", "Đồng bộ buổi học ra lịch Google.");
  para_(
    form,
    "41. Lịch đẩy lên Calendar của ai: chủ, từng giáo viên, từng phòng, hay 1 lịch chung trung tâm?",
    skip
  );
  para_(
    form,
    "42. Đẩy từng buổi (class) hay cả khóa? Đổi/hủy buổi trên CRM thì Calendar đổi theo không?",
    skip
  );
  choice_(form, "43. Học viên / phụ huynh có cần nhận lịch Google không, hay chỉ nội bộ?", [
    "Chỉ nội bộ (chủ / GV / nhân viên)",
    "Học viên / phụ huynh cũng nhận",
    "Chưa cần",
    "Không rõ",
  ]);
  para_(
    form,
    "44. Đang dùng Google Workspace / Gmail nào? Mỗi giáo viên một tài khoản hay chung?",
    "Ghi email lịch sẽ dùng, nếu đã có."
  );

  // —— 8. Bảo lưu ——
  section_(
    form,
    "8. Bảo lưu khóa (làm sau — hỏi trước để thiết kế đúng)",
    "Đóng băng buổi còn lại, quay lại khóa sau."
  );
  para_(
    form,
    "45. Bảo lưu được khi nào: đã đóng đủ, đã học tối thiểu N buổi, hay mọi lúc?",
    skip
  );
  para_(
    form,
    "46. Ai duyệt? Học viên xin qua Zalo hay phải quản lý bấm trên CRM?",
    skip
  );
  choice_(form, "47. Bảo lưu theo khóa (đóng băng cả khóa) hay theo số buổi còn lại?", [
    "Cả khóa",
    "Số buổi còn lại",
    "Cả hai / tùy trường hợp",
    "Chưa có quy tắc",
    "Không rõ",
  ]);
  para_(
    form,
    "48. Tối đa bao lâu? Hết hạn không quay lại thì mất buổi / mất tiền / gia hạn?",
    skip
  );
  para_(
    form,
    "49. Thời gian bảo lưu, buổi bị hủy / ngày lễ có tính vào hạn bảo lưu không?",
    skip
  );
  para_(
    form,
    "50. Quay lại: vào đúng khóa cũ (nếu còn chạy), khóa cùng bộ môn khóa sau, hay tự chọn ca?",
    skip
  );
  choice_(form, "51. Đang bảo lưu thì còn hiện trên sĩ số lớp không? Chỗ đó có mở cho học viên khác không?", [
    "Vẫn giữ chỗ / vẫn tính sĩ số",
    "Nhả chỗ cho học viên khác",
    "Làm tùy lúc",
    "Không rõ",
  ]);
  para_(form, "52. Bảo lưu xong có đổi GV / đổi lịch / phụ thu không?", skip);
  choice_(form, "53. Đang nợ học phí thì có được bảo lưu không?", yn);

  para_(
    form,
    "Ghi chú thêm cho Dolphin (việc không được làm sai, mốc muốn dùng thử…)",
    "Không bắt buộc."
  );

  const ss = SpreadsheetApp.create(
    "Dolphin Edu — CRM discovery (câu trả lời form)"
  );
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  const published = form.getPublishedUrl();
  const edit = form.getEditUrl();
  const sheet = ss.getUrl();

  Logger.log("Form (gửi khách điền): " + published);
  Logger.log("Sửa form: " + edit);
  Logger.log("Sheet câu trả lời: " + sheet);
  Logger.log("Chủ sở hữu: chạy script bằng nchithanh9999@gmail.com");

  return { published: published, edit: edit, sheet: sheet };
}

function section_(form, title, help) {
  const item = form.addSectionHeaderItem();
  item.setTitle(title);
  if (help) item.setHelpText(help);
  return item;
}

/** Form đang gửi khách: bỏ phân trang, giữ nguyên link điền. */
function flattenCrmDiscoveryForm() {
  const form = FormApp.openById(LIVE_FORM_ID);
  form.setProgressBar(false);

  const items = form.getItems();
  for (let i = items.length - 1; i >= 0; i--) {
    const item = items[i];
    if (item.getType() !== FormApp.ItemType.PAGE_BREAK) continue;
    const pb = item.asPageBreakItem();
    const title = pb.getTitle();
    const help = pb.getHelpText();
    const idx = item.getIndex();
    form.deleteItem(item);
    const header = form.addSectionHeaderItem();
    header.setTitle(title);
    if (help) header.setHelpText(help);
    form.moveItem(header.getIndex(), idx);
  }

  Logger.log("Đã gộp 1 trang. Link khách giữ nguyên: " + form.getPublishedUrl());
}

function para_(form, title, help) {
  const item = form.addParagraphTextItem();
  item.setTitle(title);
  if (help) item.setHelpText(help);
  item.setRequired(false);
  return item;
}

function short_(form, title, required) {
  const item = form.addTextItem();
  item.setTitle(title);
  item.setRequired(!!required);
  return item;
}

function choice_(form, title, options, help, required) {
  const item = form.addMultipleChoiceItem();
  item.setTitle(title);
  if (help) item.setHelpText(help);
  item.setChoiceValues(options);
  item.showOtherOption(true);
  item.setRequired(!!required);
  return item;
}
