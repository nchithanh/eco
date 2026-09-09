# Báo giá — Ma Dance (CRM chuyển đổi số)

Dolphin Software · **Chuyển đổi số vận hành** trung tâm nhảy → CRM.  
Cập nhật **2026-09-09**.

**Nguồn nghiệp vụ (as-is):** form CRM discovery (Uyên · Quản lý) + `/demos/ma-dance-discovery/`.  
Discovery = hiện trạng vận hành. Báo giá này = **phạm vi to-be** số hóa thành CRM — **không** copy 1:1 mọi thói quen Zalo/Excel nếu sau này chốt đơn giản hóa.

**Giá từng hạng mục:** điền tạm trên phiếu `/demo/bao-gia-crm-nhay/` · nút **Xuất giá JSON** (`schema: dolphin-quote-ma-dance/v1`) cho agent. Chưa gồm VAT (ghi rõ nếu cần trên giấy gửi khách).

Phiếu In/PDF: `/demo/bao-gia-crm-nhay/`.

---

## Nguyên tắc

| | |
| --- | --- |
| As-is | MA đang làm gì (discovery) |
| To-be | Dolphin số hóa thành CRM theo hạng mục dưới |
| Giá | Điền trên phiếu / xuất JSON |

Không bán Dolphin Ops spa (1 khách : 1 slot) cho deal này.

---

## A. CRM — chuyển đổi vận hành MA

**Giá niêm yết:** 500.000đ/tháng × 12 = **6.000.000đ/năm**  
**Ưu đãi riêng MA Dance:** **5.000.000đ/năm** (một dòng trên gói A — cột trả hàng năm; bảng Tổng không lặp dòng ưu đãi này).  
A1–A14 liệt kê **đủ phạm vi** trên phiếu — **không tách giá**.

| # | Hạng mục | Phạm vi (theo discovery) |
| --- | --- | --- |
| A1 | Nền tảng & phân quyền | 3 chi nhánh · 7 phòng; khóa gắn chi nhánh, phòng linh hoạt; quyền chủ / quản lý / lễ tân / giáo viên (GV không xem học phí & SĐT học viên) |
| A2 | Khóa học & buổi | Thể loại, level, khung giờ, giáo viên, ngày bắt đầu–kết thúc, chi nhánh; lịch tuần cố định; ~8 buổi/tháng; tạo buổi; trạng thái; hủy (HV không mất buổi); đổi giờ/phòng/GV; 1 GV/buổi; không trùng phòng–giờ |
| A3 | Tuyển sinh / ghi danh | Cửa sổ ghi danh; nhận giữa khóa theo level (Begin ~buổi 4–5; Inter buổi lẻ; Advance buổi 1 & 5); sĩ số 10–15; lớp đầy → khung giờ khác; nhiều khóa; đổi lớp cuối tháng / bảo lưu chuyển lớp; nghỉ → giữ hồ sơ |
| A4 | Học viên & phụ huynh | Hồ sơ + ngày sinh, email; trẻ em: điểm danh theo HV, liên hệ & thanh toán theo PH |
| A5 | Giáo viên | Tên, SĐT, email, phong cách dạy, lớp, chi nhánh; nghỉ → giáo viên dự phòng |
| A6 | Gói buổi & trừ buổi | Thu theo gói; điểm danh xong → trừ 1 buổi; **không** học bù; nghỉ không bảo lưu → mất buổi, không hoàn |
| A7 | Thu học phí & công nợ | Đóng 1 lần hoặc từng đợt; tiền mặt / CK + ảnh bill; cọc gói 6 & 12 tháng; nợ → vẫn vào lớp, thu sau; báo cáo theo chi nhánh |
| A8 | Bảo lưu | ≥3 tháng tặng BL / gói ngắn mua BL lẻ; đã đóng HP + nghỉ dài; QL duyệt trên CRM; hạn gói + buổi còn; hết hạn không học → trừ buổi; lễ/hủy không tính hạn BL; giữ chỗ sĩ số; quay lại hỗ trợ đổi GV/lịch |
| A9 | Điểm danh tay | Có mặt / vắng trên CRM (lễ tân / quản lý) |
| A10 | Điểm danh QR | Điểm danh bằng mã QR |
| A11 | Lịch / Google Calendar | Đồng bộ lịch HV/GV với Google Calendar trung tâm. Tài khoản Google của MA; **phí Google (nếu có) ngoài giá Dolphin**. |
| A12 | Promotion / voucher | Quản lý chương trình khuyến mãi, mã giảm giá / voucher |
| A13 | Chăm sóc & thông báo | Chúc mừng sinh nhật HV; gửi tin Zalo / email hàng loạt cho HV hoặc PH. **Phần mềm trong gói A.** Phí Zalo OA, tin lẻ/ZNS, SMTP — khách trả NCC. |
| A14 | Theo dõi doanh thu | Theo dõi và báo cáo doanh thu theo chi nhánh / kỳ (đã thu, còn nợ, theo gói) |

**Cộng A:** **5.000.000đ/năm** (sau ưu đãi MA; niêm yết 6.000.000đ/năm)

---

## Onboarding & Setup

| | |
| --- | --- |
| Niêm yết | **2.000.000đ – 3.000.000đ** (setup web + CRM + import data) — thu 1 lần |
| **Ưu đãi Dolphin** | **500.000đ** (một lần) |
| Phiếu | Mục riêng, mặc định chọn; key `onboarding-setup`. **Giá trên phiếu đã khóa** (readonly). |

---

## B. Mặt ngoài & mở rộng (không thuộc lõi as-is lớp–gói)

Giá điền trên phiếu (có thể tick). Sample JSON: [`ma-dance-quote.sample.json`](./ma-dance-quote.sample.json).

| # | Key | Hạng mục | Phạm vi / value | Giá gợi ý |
| --- | --- | --- | --- | ---: |
| B1 | website | Website công khai | Site giới thiệu — **không** login HV/GV | **4.500.000đ** (1 lần) |
| B1 | portal | Website theo dõi học viên & giáo viên | Đăng nhập theo dõi lịch / lớp / khóa / hồ sơ; xem promotion, video, tài liệu MA — chỉ xem; không thu tiền | **3.000.000đ** (1 lần) |
| B1 | domain | Phí tên miền VNNIC | Đăng ký/duy trì theo kỳ | **550.000đ/năm** |
| B1 | ecom | Website bán hàng cơ bản | Catalog / giỏ — ngoài as-is lớp. **Mặc định không tick** trên phiếu. | **4.500.000đ/năm** |
| B1 | **ai-marketing-omnichannel** | **Combo AI Tuyển Sinh & Trực Page 24/7 (Đa kênh)** | Phạm vi: Dolphin Care đa kênh 24/7. Trên phiếu: **1 dòng** + checkbox **6 tháng / 12 tháng** (chọn một) trong cột phạm vi. Tick kỳ hạn → tick hàng; bỏ hết kỳ hạn → bỏ chọn. Tick hàng chưa chọn kỳ hạn → mặc định **12 tháng**. Cột tháng = đơn giá theo kỳ hạn (không cộng tổng khi prepaid). Gói 6 tháng **mắc hơn 10%** so với đơn giá 12 tháng (~3,33%/tháng). | **900.000đ/tháng** (12th) · prepaid **10.800.000đ / 12 tháng**. Gói 6 tháng: **990.000đ/tháng** · **5.940.000đ** (900k × 6 × 1,10) |
| B2 | tasks | Quản lý tác vụ | Giao việc / hạn / trạng thái | **2.000.000đ** (1 lần) |
| B2 | payment-online | Tích hợp thanh toán online | Cổng online trên CRM (khác thu tay A7) | **2.000.000đ** (1 lần) |
| B2 | booking-room | Đặt phòng tập (thuê studio) | Khác gán phòng lớp | **1.000.000đ** (1 lần) |
| B2 | **ai-ops-assistant** | **Combo AI Trợ Lý Vận Hành & Chăm Sóc Lớp Học** | Voice/text → form; cảnh báo hết buổi/nợ; AI FAQ trên portal. Cùng UI kỳ hạn 6/12 như combo tuyển sinh. Gói 6 tháng **mắc hơn 10%** so với đơn giá 12 tháng. | **1.000.000đ/tháng** (12th) · prepaid **12.000.000đ / 12 tháng**. Gói 6 tháng: **1.100.000đ/tháng** · **6.600.000đ** (1tr × 6 × 1,10) |
| B2 | **dolphin-intelligent-alert** | **Dolphin Intelligent — cảnh báo & xử lý dữ liệu** | Giám sát data cuối ngày; phát hiện vấn đề; đề xuất giải pháp; admin chọn → hệ thống tự xử lý | **2.000.000đ/tháng** (không bán theo năm) |

**Đã gỡ (không còn trên phiếu):** `content-daily`, `ai-care-web-marketing`, `ai-care-web-zalo-mess`, `ai-care-student-teacher`, `crm-chat-fast`, `crm-chat-247`. Combo AI giữ 1 key (`ai-marketing-omnichannel`, `ai-ops-assistant`) + field JSON `term`: `"6"` | `"12"` | `null`. Legacy `-6m` / `-12m` map về key gốc khi load localStorage cũ.

**Totals (JSON):** `crmAddOnsOnce` = tổng **once** các mục B đã tick (không hardcode 0). `once` / `year` / `due*` sau discount 10% khi `once + year > 20.000.000`.

**Ưu đãi:** CRM 6tr → **5tr/năm** (gói A); Onboarding 2–3tr → **500k** (mục setup). Bảng Tổng chỉ dòng giảm 10% khi 1 lần + năm > 20tr.

---

## Chất lượng · bàn giao · bảo hành (trên phiếu, không tách giá)

Bố cục tham khảo phiếu ecom; nội dung theo CRM lớp — **không** copy timeline tháng, lịch thanh toán %, hay giá Maintenance ecom.

| Mục | Nội dung |
| --- | --- |
| Cam kết chất lượng | Checklist UAT (A + B đã tick); preview trước go-live; phạm vi đã chốt (đổi lớn → báo giá thêm); bàn giao tài liệu; đào tạo chủ/nhân viên |
| Quy trình bàn giao | 1 Chốt phạm vi → 2 Setup/import → 3 Preview/UAT → 4 Đào tạo + nghiệm thu + go-live (lịch ngày chốt khi ký) |
| Bảo hành website | **36 tháng** chỉnh sửa / nâng cấp cơ bản (nếu chọn B1 website / portal / bán hàng) |
| Bảo hành CRM | Sửa lỗi trong thời hạn gói năm đã thanh toán |
| AI | Điều chỉnh thông tin trả lời miễn phí (nếu chọn combo) |
| Ngoài bảo hành | Tính năng mới, đổi nghiệp vụ sau nghiệm thu, tích hợp bên thứ ba mới, lỗi Zalo/Google/cổng/hạ tầng ngoài Dolphin — **báo riêng** |
| Quyền lợi vận hành | Hosting miễn phí; ổn định; bảo mật; backup; Zalo trực tiếp; xuất data khi dừng HĐ; cập nhật quy trình; voucher giới thiệu 30% |
| **Chi phí ngoài giá Dolphin** | Zalo OA (gói + tin lẻ/ZNS); Fanpage/Meta; SMTP; Google (A11); phí giao dịch cổng (khác 2tr tích hợp B). **Không cộng tổng phiếu.** |

---

## Ngoài phạm vi chuyển đổi mặc định (trừ khi chốt thêm)

- Học bù (MA **không** học bù)
- Booking thuê phòng studio công khai (khác gán phòng lớp)
- Dolphin Ops spa matching
- Sprint/epic kiểu Jira
- Thanh toán online trên cổng HV (khác thu trên CRM nội bộ A7 và khác hạng mục **tích hợp thanh toán online** B nếu tick)

---

## Follow-up còn mở (ảnh hưởng chi tiết A2 / A7 / A8 / A10)

1. Sinh buổi: tự động vs tạo tay  
2. Trạng thái buổi thực tế  
3. Đổi giờ/phòng/GV sau khi đã điểm danh  
4. Cụm QR 35–38  
5. Học khi chưa đóng đủ · giảm giá/referral · BL khi còn nợ  
6. Catalog gói đang bán (1/3/6/12th + số buổi)  
7. Chủ vs QL approve giảm giá / nợ / vượt sĩ số  

---

## Lịch sử chốt giá (tham chiếu — không còn là gói mặc định)

Trước 2026-09-06 từng ghi gói A 9,5tr (CRM 5tr + web 4,5tr) và B (tác vụ 2tr, portal 3tr). **Đã thay** bằng gói A 5tr + mục B điền trên phiếu. Từ **2026-09-07** gói A = **5tr/năm** (không còn giá 1 lần).
