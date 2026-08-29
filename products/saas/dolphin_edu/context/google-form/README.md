# Google Form — khảo sát nghiệp vụ CRM

Form discovery cho khách trung tâm nhảy. **Không phải** runtime app.

Chủ form: `nchithanh9999@gmail.com`

Form **một trang** (tiêu đề nhóm = section header, không page break) để khách cuộn / sửa tự do.

## Link đang dùng

- Điền (gửi khách): https://docs.google.com/forms/d/e/1FAIpQLScAoKwf0NckdctKyUnxS1y8KPiCUGWGSJVEOu3fsGXIK67q0Q/viewform
- Sửa: https://docs.google.com/forms/d/1u_AjP4cfiKD5fbOn7SUkAv31XVsA08fq1LY9BwLnyqY/edit
- Sheet: https://docs.google.com/spreadsheets/d/1BT9q-J5u8wsphmYFp74wg__t7mwfXB5108UKQIsnUFA/edit

## Bỏ phân trang form hiện tại (giữ link khách)

1. Mở project Apps Script đã chạy lúc tạo form.
2. Dán lại [`Code.gs`](./Code.gs).
3. Chọn **`flattenCrmDiscoveryForm`** → **Run** (không chọn `createCrmDiscoveryForm`).

## Tạo form mới (chỉ khi cần form khác)

Chạy `createCrmDiscoveryForm` sẽ **tạo form mới** + link mới.

## Gửi khách

Chỉ gửi **link điền**. Không gửi link sửa.

Khách không cần tài khoản Google. File Excel / bảng giá gửi Zalo, không upload trên form.
