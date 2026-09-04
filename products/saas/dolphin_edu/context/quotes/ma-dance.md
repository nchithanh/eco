# Báo giá — Ma Dance

Dolphin Software · CRM trung tâm nhảy + website.  
Chốt 2026-09-03. Chưa gồm VAT (**TODO** nếu ghi trên giấy gửi khách).

Link phiếu (In / PDF): [http://localhost:3000/demo/bao-gia-crm-nhay](http://localhost:3000/demo/bao-gia-crm-nhay/) · production path `/demo/bao-gia-crm-nhay/`.

Gói A (cố định) = CRM + website. Mục B trên phiếu tách **Website** / **CRM** (tick).

| | Hạng mục | Giá (VNĐ) |
| --- | --- | ---: |
| A | CRM quản lý (khóa, buổi, HV, GV, phòng) | 5.000.000 |
| A | Website công khai + admin ảnh/nội dung + blog | 4.500.000 |
| | **Tổng gói A** | **9.500.000** |
| B | Quản lý tác vụ (giao việc, lọc — thay chia việc trên Zalo) | 2.000.000 |
| B | Cổng đăng nhập giáo viên + học viên (chỉ xem) | 3.000.000 |

---

## 1. CRM quản lý — 5.000.000đ

Nội bộ: khóa · buổi · học viên · GV · phòng. Không gồm web, cổng login HV/GV, tác vụ, AI, tiền, lịch Google, book phòng.

### Trong 5tr

- [x] Chi nhánh / cơ sở
- [x] Phòng tập (gán khóa / buổi)
- [x] Tài khoản nhân sự + quyền cơ bản (chủ / quản lý / lễ tân / GV trên CRM)
- [x] Khóa học — bộ môn, GV, phòng, sĩ số, lịch tuần, cửa sổ ghi danh
- [x] Buổi học — sinh từ lịch, trạng thái, hủy, đổi giờ / phòng / GV
- [x] Học viên — hồ sơ, ghi danh, nhiều khóa, đổi ca, nghỉ ghi danh
- [x] Giáo viên — hồ sơ, phân công, dạy thay
- [x] Roster / sĩ số
- [x] Điểm danh tay (có mặt / vắng)
- [x] Chặn trùng phòng–giờ (cơ bản)

### Ngoài 5tr — báo riêng

- [ ] Thanh toán học phí (thu, đợt, cọc, nợ, giảm, hoàn, đối soát)
- [ ] Google Calendar
- [ ] AI Agent CRM 24/7
- [ ] Điểm danh QR
- [ ] Học bù
- [ ] Bảo lưu khóa
- [ ] Booking phòng (thuê studio)
- [ ] Zalo OA vào CRM

---

## 2. Quản lý tác vụ — 2.000.000đ (checklist B)

Module CRM cho nhân sự. Thay chia việc trên Zalo. Không phải Jira đầy đủ.

### Trong 2tr

- [x] Danh sách / bảng tác vụ (việc, mô tả, hạn)
- [x] Giao người nhận (nhân sự CRM)
- [x] Trạng thái: chờ / đang làm / xong / hủy
- [x] Lọc theo người, trạng thái, hạn

### Ngoài 2tr — báo riêng

- [ ] Sprint / epic / story point / workflow kiểu Jira

---

## 3. Website công khai — 4.500.000đ

Site giới thiệu. Không có tài khoản học viên / giáo viên.

### Trong 4,5tr

- [x] Site giới thiệu (đa trang, điện thoại)
- [x] Admin sửa ảnh
- [x] Admin sửa nội dung
- [x] Blog / tin
- [x] Form liên hệ / dẫn Zalo
- [x] SEO nền tảng

### Ngoài 4,5tr — báo riêng

- [ ] Landing chiến dịch thêm
- [ ] Đa ngôn ngữ
- [ ] Thanh toán trên website (nếu không lấy gói shop)

---

## 4. Cổng login GV + HV — 3.000.000đ (checklist B)

Hai vai trò đăng nhập, **chỉ xem**. Cần CRM (và website nếu gắn từ site). Không đóng học phí trên cổng.

### Trong 3tr

- [x] Đăng nhập riêng giáo viên và học viên
- [x] GV xem: lịch dạy, lớp, sĩ số, danh sách HV
- [x] HV xem: khóa đã ghi danh, lịch buổi, thông tin cá nhân
- [x] Chỉ xem — không sửa lịch, không thu tiền trên cổng

### Ngoài 3tr — báo riêng

- [ ] HV xem công nợ / đóng học phí trên cổng
- [ ] HV / GV tự sửa hồ sơ, đổi ca trên cổng

---

## Không nằm trong gói A 9,5tr

| Hạng mục | Ghi chú | Giá |
| --- | --- | --- |
| Web bán hàng đơn giản | Gói Shop niêm yết 7–15tr; mốc dưới nếu lấy | 7.000.000đ (mốc dưới) |
| Dolphin Care | AI trên website công khai | Báo riêng |
| AI Agent CRM 24/7 | AI trong phần mềm quản lý | Báo riêng |

Không bán Dolphin Ops spa (book 1 khách : 1 slot) cho deal này.
