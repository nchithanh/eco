"use client";

import { assetPath } from "@/lib/asset";
import { BRAND_LOGO_SRC } from "@/lib/brand-logo";
import { CONTACTS } from "@/lib/contacts";
import {
  CLIENT_NAME,
  CRM_SCOPE,
  DEFAULT_QUOTE_DATE,
  PREPARED_BY,
  PREPARED_PHONE,
  formatVnd,
} from "@/lib/quotes/ma-dance-pricing";
import {
  WARRANTY_COMMITMENTS,
  WARRANTY_COVERED,
  WARRANTY_MAINTENANCE,
  WARRANTY_MAINTENANCE_NOTES,
  WARRANTY_OUT,
  WARRANTY_POLICY_META,
  WARRANTY_PRIORITIES,
  WARRANTY_SCOPE_ROWS,
  WARRANTY_SLA_HOURS,
} from "@/lib/pricing/dolphin-warranty-policy-2026";

const PHONE_DISPLAY = "0779 937 633";
const CLIENT_LEGAL = "MA Dance Studio";

const LINE_ITEMS = [
  {
    stt: 1,
    name: "CRM chuyển đổi vận hành MA — Gói CRM Base 12 (12 tháng)",
    amount: 5_400_000,
  },
  {
    stt: 2,
    name: "Website doanh nghiệp (CRM Base 12: giảm 50% khi tick triển khai)",
    amount: 2_250_000,
  },
  { stt: 3, name: "Quản lý tác vụ", amount: 2_000_000 },
  { stt: 4, name: "Đặt phòng tập (thuê studio)", amount: 1_000_000 },
  {
    stt: 5,
    name: "Website theo dõi học viên & giáo viên",
    amount: 3_000_000,
  },
  { stt: 6, name: "Tích hợp thanh toán online", amount: 2_000_000 },
] as const;

const SUBTOTAL = 15_650_000;
const DISCOUNT = -1_565_000;
const TOTAL = 14_085_000;

const PAYMENTS = [
  { phase: "Đợt 1", when: "Khi ký Hợp đồng", pct: "50%", amount: 7_042_500 },
  {
    phase: "Đợt 2",
    when: "Sau khi demo / hoàn thành giai đoạn chính (có Biên bản nghiệm thu từng phần nếu áp dụng)",
    pct: "30%",
    amount: 4_225_500,
  },
  {
    phase: "Đợt 3",
    when: "Khi bàn giao & nghiệm thu theo Điều 4",
    pct: "20%",
    amount: 2_817_000,
  },
] as const;

function formatQuoteDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

export function HopDongMa() {
  const quoteDate = formatQuoteDate(DEFAULT_QUOTE_DATE);

  return (
    <div className="hd-root">
      <header className="hd-toolbar hd-no-print">
        <div>
          <p className="hd-toolbar__title">
            Hợp đồng dịch vụ phần mềm · {CLIENT_NAME}
          </p>
          <p className="hd-toolbar__hint">
            SoT nội bộ: Báo giá {quoteDate} · Chính sách BH &amp; HT 2026 · In
            PDF A4 (không URL trên bản ký)
          </p>
        </div>
        <button
          type="button"
          className="hd-btn"
          onClick={() => window.print()}
        >
          In PDF
        </button>
      </header>

      <div className="hd-viewer">
        <article className="hd-doc hd-doc--cover" lang="vi" aria-label="Trang bìa hợp đồng">
          <div className="hd-cover">
            <div className="hd-cover__brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath(BRAND_LOGO_SRC)}
                alt="Dolphin Software"
                className="hd-cover__logo"
                width={72}
                height={72}
              />
              <p className="hd-cover__brand-name">Dolphin Software</p>
            </div>

            <div className="hd-cover__hero">
              <p className="hd-cover__eyebrow">Bản để ký kết · nội bộ</p>
              <h1 className="hd-cover__title">HỢP ĐỒNG DỊCH VỤ PHẦN MỀM</h1>
              <p className="hd-cover__number">Số ………/HĐDV/2026</p>
              <p className="hd-cover__date">
                Ngày …… tháng …… năm 2026
              </p>
            </div>

            <div className="hd-cover__parties">
              <div className="hd-cover__party">
                <p className="hd-cover__party-label">Bên A — Cung cấp dịch vụ</p>
                <p className="hd-cover__party-name">{PREPARED_BY}</p>
                <p className="hd-cover__party-meta">
                  Thương mại: Dolphin Software
                  <br />
                  {PHONE_DISPLAY}
                </p>
              </div>
              <div className="hd-cover__party">
                <p className="hd-cover__party-label">Bên B — Sử dụng dịch vụ</p>
                <p className="hd-cover__party-name">{CLIENT_LEGAL}</p>
                <p className="hd-cover__party-meta">
                  Thương hiệu: {CLIENT_NAME}
                  <br />
                  Người ký / liên hệ: Nguyễn Trung Hiếu
                </p>
              </div>
            </div>

            <div className="hd-cover__annex">
              <p className="hd-cover__annex-title">Tài liệu kèm theo</p>
              <ol className="hd-cover__annex-list">
                <li>Phụ lục 01 — Báo giá &amp; Phạm vi công việc (SOW)</li>
                <li>Phụ lục 02 — Checklist nghiệm thu (UAT)</li>
                <li>Phụ lục 03 — Chính sách Bảo hành &amp; Hỗ trợ 2026</li>
              </ol>
            </div>

            <p className="hd-cover__foot">
              CRM chuyển đổi vận hành {CLIENT_NAME} · Báo giá {quoteDate} ·
              Thanh toán 50 / 30 / 20
            </p>
          </div>
        </article>

        <article className="hd-doc" lang="vi">
          <header className="hd-doc__head">
            <p className="hd-doc__eyebrow">HỢP ĐỒNG DỊCH VỤ SỐ ………/HĐDV/2026</p>
            <p className="hd-doc__title">HỢP ĐỒNG DỊCH VỤ PHẦN MỀM</p>
            <p className="hd-doc__meta">
              Ngày: …… tháng …… năm 2026
              <br />
              Phụ lục: 01 Báo giá &amp; SOW · 02 Checklist UAT · 03 Chính sách
              BH &amp; HT 2026
            </p>
          </header>

          <section className="hd-parties" aria-labelledby="hd-party-a">
            <h2 id="hd-party-a" className="hd-h2">
              BÊN A (Bên cung cấp dịch vụ)
            </h2>
            <ul className="hd-kv">
              <li>
                <span>Họ và tên</span>
                <strong>{PREPARED_BY}</strong>
              </li>
              <li>
                <span>CCCD</span>
                <strong>082200012288</strong>
              </li>
              <li>
                <span>Địa chỉ</span>
                <strong>{CONTACTS.address.label}</strong>
              </li>
              <li>
                <span>Điện thoại</span>
                <strong>{PHONE_DISPLAY}</strong>
              </li>
              <li>
                <span>Tên thương mại</span>
                <strong>Dolphin Software</strong>
              </li>
            </ul>
            <p className="hd-note">
              Bên A là cá nhân hoạt động dưới tên thương mại Dolphin Software —
              không mặc định là pháp nhân độc lập.
            </p>
          </section>

          <section className="hd-parties" aria-labelledby="hd-party-b">
            <h2 id="hd-party-b" className="hd-h2">
              BÊN B (Bên sử dụng dịch vụ)
            </h2>
            <ul className="hd-kv">
              <li>
                <span>Tên doanh nghiệp</span>
                <strong>{CLIENT_LEGAL}</strong>
              </li>
              <li>
                <span>Mã số DN / MST</span>
                <strong>………………………………</strong>
              </li>
              <li>
                <span>Địa chỉ trụ sở</span>
                <strong>………………………………</strong>
              </li>
              <li>
                <span>Người đại diện theo pháp luật</span>
                <strong>………………………………</strong>
              </li>
              <li>
                <span>Chức vụ</span>
                <strong>………………………………</strong>
              </li>
              <li>
                <span>Người ký / liên hệ</span>
                <strong>Nguyễn Trung Hiếu</strong>
              </li>
              <li>
                <span>Điện thoại</span>
                <strong>………………………………</strong>
              </li>
            </ul>
            <p className="hd-note">
              Thương hiệu vận hành trên báo giá / SOW:{" "}
              <strong>{CLIENT_NAME}</strong>. Các trường để trống điền trước khi
              ký.
            </p>
          </section>

          <p className="hd-lead">
            Hai bên thống nhất ký kết Hợp đồng dịch vụ phần mềm với các điều
            khoản sau. Báo giá ngày {quoteDate} được đính kèm tại{" "}
            <strong>Phụ lục 01 — Báo giá và Phạm vi công việc (SOW)</strong>;
            Chính sách Bảo hành &amp; Hỗ trợ 2026 được đính kèm tại{" "}
            <strong>Phụ lục 03</strong>. Các phụ lục này là tài liệu tham chiếu
            không tách rời Hợp đồng.
          </p>

          {/* —— Điều 1 —— */}
          <section aria-labelledby="hd-d1">
            <h2 id="hd-d1" className="hd-h2">
              Điều 1. Đối tượng và phạm vi dịch vụ
            </h2>
            <p>
              <strong>1.1.</strong> Bên A cung cấp cho Bên B dịch vụ phần mềm
              theo trọng tâm{" "}
              <strong>CRM chuyển đổi vận hành {CLIENT_NAME}</strong>, gồm các
              hạng mục đã chốt tại bảng dưới đây và mô tả chi tiết tại{" "}
              <strong>Phụ lục 01 — Báo giá và Phạm vi công việc (SOW)</strong>.
            </p>
            <div className="hd-table-wrap">
              <table className="hd-table">
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Hạng mục</th>
                    <th scope="col">Giá (đ)</th>
                  </tr>
                </thead>
                <tbody>
                  {LINE_ITEMS.map((row) => (
                    <tr key={row.stt}>
                      <td>{row.stt}</td>
                      <td>{row.name}</td>
                      <td className="hd-num">{formatVnd(row.amount)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={2}>
                      <strong>Tạm tính</strong>
                    </td>
                    <td className="hd-num">
                      <strong>{formatVnd(SUBTOTAL)}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Chiết khấu thanh toán trước 10% (theo quy tắc báo giá: tổng
                      trước CK &gt; 15.000.000đ)
                    </td>
                    <td className="hd-num">{formatVnd(DISCOUNT)}</td>
                  </tr>
                  <tr className="hd-table__total">
                    <td colSpan={2}>
                      <strong>TỔNG THANH TOÁN</strong>
                    </td>
                    <td className="hd-num">
                      <strong>{formatVnd(TOTAL)}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>1.2.</strong> Phạm vi CRM Base gồm các hạng mục{" "}
              <strong>A1 → A14</strong> liệt kê tại Phụ lục 01 (trích từ báo giá{" "}
              {quoteDate}).
            </p>
            <p>
              <strong>1.3.</strong> Bên A hỗ trợ chi phí{" "}
              <strong>Domain + Hosting trong 12 tháng đầu</strong> cho Website
              doanh nghiệp (tính từ ngày bàn giao). Sau 12 tháng, chi phí do Bên
              B tự chi trả.
            </p>
            <p>
              <strong>1.4.</strong> Phụ lục 01 là bộ phận không tách rời của Hợp
              đồng. Trường hợp mâu thuẫn giữa Hợp đồng và Phụ lục, nội dung Hợp
              đồng được ưu tiên, trừ khi hai bên thỏa thuận khác bằng văn bản.
            </p>
          </section>

          {/* —— Điều 2 —— */}
          <section aria-labelledby="hd-d2">
            <h2 id="hd-d2" className="hd-h2">
              Điều 2. Giá trị hợp đồng và thanh toán
            </h2>
            <p>
              <strong>2.1.</strong> Tổng giá trị hợp đồng:{" "}
              <strong>{formatVnd(TOTAL)}</strong> (Mười bốn triệu không trăm tám
              mươi lăm nghìn đồng).
            </p>
            <p>
              <strong>2.2.</strong> Bên B thanh toán theo các đợt:
            </p>
            <div className="hd-table-wrap">
              <table className="hd-table">
                <thead>
                  <tr>
                    <th scope="col">Đợt</th>
                    <th scope="col">Thời điểm</th>
                    <th scope="col">Tỷ lệ</th>
                    <th scope="col">Số tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {PAYMENTS.map((p) => (
                    <tr key={p.phase}>
                      <td>{p.phase}</td>
                      <td>{p.when}</td>
                      <td>{p.pct}</td>
                      <td className="hd-num">{formatVnd(p.amount)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              <strong>2.3.</strong> Hình thức: chuyển khoản vào tài khoản cá
              nhân của Bên A ({PREPARED_BY}).
            </p>
            <p>
              <strong>2.4.</strong> Thời gian triển khai của từng giai đoạn bắt
              đầu được tính từ khi Bên A{" "}
              <strong>
                xác nhận đã nhận đủ thanh toán đợt tương ứng và nhận đủ thông
                tin / tài liệu / đầu vào cần thiết từ Bên B
              </strong>
              .
            </p>
            <p>
              <strong>2.5.</strong> Giá trị hợp đồng là số tiền Bên B phải thanh
              toán cho Bên A theo thỏa thuận. Việc kê khai, nộp thuế và chứng từ
              liên quan thực hiện theo quy định pháp luật thuế hiện hành áp dụng
              cho Bên A tại thời điểm phát sinh nghĩa vụ.
            </p>
          </section>

          {/* —— Điều 3 —— */}
          <section aria-labelledby="hd-d3">
            <h2 id="hd-d3" className="hd-h2">
              Điều 3. Thời gian thực hiện và tiến độ
            </h2>
            <p>
              <strong>3.1.</strong> Thời gian triển khai dự kiến và các mốc bàn
              giao được xác định tại <strong>Phụ lục 01</strong> và/hoặc văn bản
              thống nhất sau khi Bên B thanh toán Đợt 1 và cung cấp đủ đầu vào.
            </p>
            <p>
              <strong>3.2.</strong> Bên A thông báo tiến độ định kỳ cho Bên B.
            </p>
            <p>
              <strong>3.3.</strong> Chậm trễ do Bên B không cung cấp đầu vào /
              phản hồi đúng hạn không tính vào thời gian cam kết của Bên A.
            </p>
          </section>

          {/* —— Điều 4 —— */}
          <section aria-labelledby="hd-d4">
            <h2 id="hd-d4" className="hd-h2">
              Điều 4. Bàn giao và nghiệm thu
            </h2>
            <p>
              <strong>4.1.</strong> Bên A chỉ yêu cầu nghiệm thu khi đã hoàn
              thành các hạng mục theo phạm vi Phụ lục 01 đã cam kết cho giai đoạn
              tương ứng.
            </p>
            <p>
              <strong>4.2.</strong> Quy trình:
            </p>
            <ul>
              <li>
                Bên A gửi thông báo sẵn sàng nghiệm thu kèm{" "}
                <strong>Phụ lục 02 — Checklist UAT</strong>.
              </li>
              <li>
                Bên B có <strong>05 ngày làm việc</strong> để kiểm tra và phản
                hồi bằng văn bản (email / Zalo đã thống nhất) các lỗi / điểm chưa
                phù hợp <em>trong phạm vi SOW</em>.
              </li>
              <li>
                Bên A khắc phục lỗi thuộc phạm vi; sau đó hai bên lập Biên bản
                nghiệm thu.
              </li>
            </ul>
            <p>
              <strong>4.3.</strong> Biên bản nghiệm thu ghi rõ: hạng mục đạt;
              lỗi còn tồn tại (nếu có) và hạn khắc phục; bàn giao tài khoản /
              tài liệu / hướng dẫn; ngày bắt đầu tính bảo hành của giai đoạn đó.
            </p>
            <p>
              <strong>4.4.</strong> Hai bên có thể nghiệm thu từng phần; mỗi lần
              nghiệm thu từng phần là căn cứ thanh toán đợt tương ứng.
            </p>
            <p>
              <strong>4.5.</strong> Nếu sau 05 ngày làm việc kể từ khi Bên A gửi
              thông báo sẵn sàng nghiệm thu kèm Checklist UAT mà Bên B không phản
              hồi bằng văn bản về lỗi trong phạm vi SOW, giai đoạn đó được coi là
              đã nghiệm thu để tính tiến độ và bảo hành — trừ khi hai bên thỏa
              thuận gia hạn bằng văn bản trước khi hết hạn.
            </p>
          </section>

          {/* —— Điều 5 —— */}
          <section aria-labelledby="hd-d5">
            <h2 id="hd-d5" className="hd-h2">
              Điều 5. Bảo hành và hỗ trợ
            </h2>
            <p>
              <strong>5.1. Thời hạn</strong> (trích{" "}
              <strong>Phụ lục 03 — Chính sách BH &amp; HT 2026</strong> kèm Hợp
              đồng):
            </p>
            <div className="hd-table-wrap">
              <table className="hd-table">
                <thead>
                  <tr>
                    <th scope="col">Hạng mục</th>
                    <th scope="col">Thời hạn</th>
                    <th scope="col">Hình thức</th>
                  </tr>
                </thead>
                <tbody>
                  {WARRANTY_SCOPE_ROWS.map((row) => (
                    <tr key={row.item}>
                      <td>
                        {row.item}
                        {row.note ? (
                          <>
                            <br />
                            <span className="hd-muted">{row.note}</span>
                          </>
                        ) : null}
                      </td>
                      <td>{row.duration}</td>
                      <td>{row.form}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Áp dụng cho Hợp đồng này: Website doanh nghiệp —{" "}
              <strong>36 tháng</strong> bảo hành kỹ thuật; CRM Base 12 —{" "}
              <strong>trong thời hạn gói 12 tháng</strong>; tích hợp / custom
              nhỏ — <strong>1–3 tháng</strong> sau nghiệm thu (sửa lỗi trong phạm
              vi đã chốt).
            </p>
            <p>
              <strong>5.2. Phạm vi bảo hành / hỗ trợ:</strong>
            </p>
            <ul>
              {WARRANTY_COVERED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>5.3. Ngoài phạm vi</strong> (báo giá riêng nếu Bên B yêu
              cầu):
            </p>
            <ul>
              {WARRANTY_OUT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>5.4. Thời gian phản hồi mục tiêu</strong> (không mặc định
              hỗ trợ 24/7) — chi tiết đầy đủ tại{" "}
              <strong>Phụ lục 03</strong> kèm Hợp đồng này.
            </p>
            <ul>
              {WARRANTY_SLA_HOURS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>Phân loại ưu tiên (tham chiếu Phụ lục 03):</p>
            <ul>
              {WARRANTY_PRIORITIES.map((p) => (
                <li key={p.level}>
                  <strong>
                    {p.level} — {p.title}:
                  </strong>{" "}
                  {p.definition} {p.commit}
                </li>
              ))}
            </ul>
          </section>

          {/* —— Điều 6–7 —— */}
          <section aria-labelledby="hd-d6">
            <h2 id="hd-d6" className="hd-h2">
              Điều 6. Quyền và nghĩa vụ của Bên A
            </h2>
            <ul>
              <li>Thực hiện đúng phạm vi, chất lượng theo Phụ lục 01.</li>
              <li>Bảo mật thông tin và dữ liệu của Bên B theo Điều 9.</li>
              <li>Hỗ trợ kỹ thuật theo Điều 5 và Phụ lục 03.</li>
              <li>
                Thông báo sớm khi phát hiện yêu cầu vượt phạm vi hoặc phụ thuộc
                bên thứ ba.
              </li>
            </ul>
          </section>

          <section aria-labelledby="hd-d7">
            <h2 id="hd-d7" className="hd-h2">
              Điều 7. Quyền và nghĩa vụ của Bên B
            </h2>
            <ul>
              <li>
                Cung cấp đầy đủ, đúng hạn thông tin, nội dung, tài khoản thử
                nghiệm và điều kiện cần thiết.
              </li>
              <li>Thanh toán đúng hạn theo Điều 2.</li>
              <li>
                Chịu trách nhiệm về tính hợp pháp của dữ liệu học viên / khách
                hàng mà Bên B thu thập và nhập vào hệ thống.
              </li>
              <li>
                Sử dụng hệ thống đúng pháp luật; không yêu cầu vượt phạm vi SOW
                mà không có phụ lục bổ sung.
              </li>
            </ul>
          </section>

          {/* —— Điều 8 IP —— */}
          <section aria-labelledby="hd-d8">
            <h2 id="hd-d8" className="hd-h2">
              Điều 8. Quyền sở hữu trí tuệ và quyền sử dụng
            </h2>
            <p>
              <strong>8.1. Dữ liệu và nội dung của Bên B</strong> (học viên, phụ
              huynh, logo, hình ảnh, copy do Bên B cung cấp) thuộc Bên B hoặc chủ
              sở hữu tương ứng. Bên A chỉ được dùng trong phạm vi thực hiện Hợp
              đồng.
            </p>
            <p>
              <strong>8.2. CRM / nền tảng SaaS / framework / thư viện</strong>{" "}
              của Bên A: Bên B được{" "}
              <strong>quyền sử dụng trong thời hạn gói đã thanh toán</strong>{" "}
              theo Hợp đồng này. Hợp đồng{" "}
              <strong>
                không mặc định chuyển giao toàn bộ source code nền tảng CRM
              </strong>{" "}
              cho Bên B.
            </p>
            <p>
              <strong>8.3. Phát triển / tích hợp custom</strong> theo hạng mục
              outsource đã chốt: sau khi Bên B thanh toán đủ và nghiệm thu, Bên A
              bàn giao quyền sử dụng kết quả custom và source code của phần custom
              (nếu có) theo thỏa thuận tại Phụ lục 01 —{" "}
              <strong>không lock-in</strong> đối với phần đã bàn giao đó.
            </p>
            <p>
              <strong>8.4.</strong> Website doanh nghiệp: bàn giao mã nguồn /
              quyền quản trị theo phạm vi đã nghiệm thu; bảo hành kỹ thuật 36
              tháng theo Điều 5.
            </p>
          </section>

          {/* —— Điều 9 Data —— */}
          <section aria-labelledby="hd-d9">
            <h2 id="hd-d9" className="hd-h2">
              Điều 9. Dữ liệu và bảo mật thông tin
            </h2>
            <p>
              <strong>9.1.</strong> Hai bên bảo mật thông tin hợp đồng và hoạt
              động kinh doanh của bên còn lại, trừ yêu cầu của cơ quan nhà nước
              có thẩm quyền.
            </p>
            <p>
              <strong>9.2.</strong> Bên A bảo mật dữ liệu được cung cấp / phát
              sinh khi triển khai–vận hành và chỉ dùng trong phạm vi cần thiết để
              thực hiện Hợp đồng.
            </p>
            <p>
              <strong>9.3.</strong> Bên B chịu trách nhiệm về việc thu thập, lưu
              trữ và xử lý dữ liệu cá nhân của học viên / phụ huynh / khách hàng
              theo quy định pháp luật áp dụng với Bên B.
            </p>
          </section>

          {/* —— Điều 10 Third party —— */}
          <section aria-labelledby="hd-d10">
            <h2 id="hd-d10" className="hd-h2">
              Điều 10. Dịch vụ / nền tảng bên thứ ba
            </h2>
            <p>
              <strong>10.1.</strong> Phí Zalo OA, ZNS / tin nhắn, SMTP, cổng thanh
              toán, Google (Calendar…), domain (sau 12 tháng hỗ trợ), hosting
              (sau 12 tháng), Apple/Google store và NCC khác{" "}
              <strong>không nằm trong giá trị hợp đồng</strong>, trừ khi Phụ lục
              01 quy định khác — khớp nguyên tắc báo giá {quoteDate}.
            </p>
            <p>
              <strong>10.2.</strong> Các khoản phí bên thứ ba do Bên B trực tiếp
              thanh toán hoặc được Bên B chấp thuận để Bên A thanh toán hộ.
            </p>
            <p>
              <strong>10.3.</strong> Bên A không chịu trách nhiệm về sự cố,
              thay đổi API, hoặc ngừng dịch vụ của bên thứ ba nằm ngoài phạm vi
              kiểm soát của Bên A.
            </p>
          </section>

          {/* —— Điều 11 —— */}
          <section aria-labelledby="hd-d11">
            <h2 id="hd-d11" className="hd-h2">
              Điều 11. Tạm ngừng và chấm dứt hợp đồng
            </h2>
            <p>
              <strong>11.1.</strong> Hai bên có thể thỏa thuận chấm dứt trước
              hạn bằng văn bản.
            </p>
            <p>
              <strong>11.2.</strong> Nếu Bên B đơn phương chấm dứt sau khi đã
              thanh toán, Bên A không hoàn lại chi phí đối với phần công việc đã
              thực hiện / đã nghiệm thu từng phần.
            </p>
            <p>
              <strong>11.3.</strong> Bên A có quyền tạm ngừng hoặc chấm dứt sau
              khi đã thông báo bằng văn bản nếu Bên B: không thanh toán đúng hạn;
              không cung cấp đầu vào kéo dài làm trì hoãn dự án; liên tục yêu cầu
              vượt phạm vi mà không ký phụ lục; hoặc sử dụng hệ thống trái pháp
              luật.
            </p>
            <p>
              <strong>11.4.</strong> Nếu Bên A không thực hiện dự án theo thỏa
              thuận mà không có lý do chính đáng, hai bên thương lượng hoàn /
              bù trừ phần chưa thực hiện theo khối lượng đã thanh toán và đã bàn
              giao.
            </p>
          </section>

          {/* —— Điều 12 —— */}
          <section aria-labelledby="hd-d12">
            <h2 id="hd-d12" className="hd-h2">
              Điều 12. Trách nhiệm và giới hạn trách nhiệm
            </h2>
            <p>
              <strong>12.1.</strong> Bên A chịu trách nhiệm khắc phục lỗi thuộc
              phạm vi bảo hành / SOW theo Điều 5.
            </p>
            <p>
              <strong>12.2.</strong> Bên A không chịu trách nhiệm đối với thiệt
              hại phát sinh từ: lỗi / downtime của cổng thanh toán, Zalo, Google,
              hosting/cloud ngoài tầm kiểm soát; dữ liệu do Bên B nhập sai hoặc
              thu thập không hợp pháp; Bên B hoặc bên thứ ba sửa code / cấu hình
              gây lỗi.
            </p>
            <p>
              <strong>12.3.</strong> Trừ trường hợp do lỗi cố ý của Bên A, trách
              nhiệm bồi thường (nếu phát sinh theo thỏa thuận hoặc pháp luật)
              không vượt quá tổng giá trị Hợp đồng đã thanh toán liên quan đến
              hạng mục gây thiệt hại.
            </p>
          </section>

          {/* —— Điều 13–15 —— */}
          <section aria-labelledby="hd-d13">
            <h2 id="hd-d13" className="hd-h2">
              Điều 13. Bất khả kháng
            </h2>
            <p>
              Sự kiện bất khả kháng (thiên tai, dịch bệnh, chiến tranh, quyết
              định của cơ quan nhà nước, sự cố hạ tầng quốc gia…) làm một bên
              không thể thực hiện nghĩa vụ: bên bị ảnh hưởng thông báo sớm và
              được miễn trách nhiệm trong thời gian sự kiện kéo dài; hai bên
              thương lượng gia hạn hoặc chấm dứt hợp lý.
            </p>
          </section>

          <section aria-labelledby="hd-d14">
            <h2 id="hd-d14" className="hd-h2">
              Điều 14. Giải quyết tranh chấp
            </h2>
            <p>
              Ưu tiên thương lượng. Nếu không đạt, tranh chấp được giải quyết tại
              Tòa án nhân dân có thẩm quyền theo pháp luật Việt Nam.
            </p>
          </section>

          <section aria-labelledby="hd-d15">
            <h2 id="hd-d15" className="hd-h2">
              Điều 15. Điều khoản chung
            </h2>
            <p>
              <strong>15.1.</strong> Hợp đồng có hiệu lực kể từ ngày ký và Bên B
              thanh toán Đợt 1.
            </p>
            <p>
              <strong>15.2.</strong> Mọi thay đổi, bổ sung phải bằng Phụ lục văn
              bản có chữ ký hai bên.
            </p>
            <p>
              <strong>15.3.</strong> Hợp đồng lập thành 02 bản có giá trị như
              nhau, mỗi bên giữ 01 bản.
            </p>
            <p>
              <strong>15.4.</strong> Các phụ lục:{" "}
              <strong>01</strong> Báo giá &amp; SOW (gồm A1–A14);{" "}
              <strong>02</strong> Checklist UAT; <strong>03</strong> Chính sách
              BH &amp; HT 2026.
            </p>
          </section>

          <section className="hd-sign" aria-label="Chữ ký">
            <div>
              <p className="hd-sign__party">BÊN A</p>
              <p className="hd-sign__name">{PREPARED_BY}</p>
              <p className="hd-sign__note">
                Cá nhân · thương mại Dolphin Software
                <br />
                (Ký và ghi rõ họ tên)
              </p>
              <div className="hd-sign__space" aria-hidden />
            </div>
            <div>
              <p className="hd-sign__party">BÊN B</p>
              <p className="hd-sign__name">Nguyễn Trung Hiếu</p>
              <p className="hd-sign__note">
                Đại diện {CLIENT_LEGAL}
                <br />
                (Ký và ghi rõ họ tên · chức vụ)
              </p>
              <div className="hd-sign__space" aria-hidden />
            </div>
          </section>

          {/* —— Phụ lục 01 —— */}
          <section className="hd-annex" aria-labelledby="hd-pl01">
            <h2 id="hd-pl01" className="hd-h2">
              Phụ lục 01 — Báo giá &amp; Phạm vi công việc (SOW)
            </h2>
            <p>
              Phụ lục này là bộ phận không tách rời của Hợp đồng. Nội dung trích
              theo báo giá {CLIENT_NAME} ngày {quoteDate}: phạm vi CRM chuyển đổi
              vận hành đã chốt (A1–A14). Tiêu chí nghiệm thu chi tiết theo{" "}
              <strong>Phụ lục 02</strong>. Bảo hành &amp; hỗ trợ theo{" "}
              <strong>Phụ lục 03</strong>.
            </p>
            <h3 className="hd-h3">A1–A14 — Phạm vi CRM</h3>
            <div className="hd-table-wrap">
              <table className="hd-table hd-table--dense">
                <thead>
                  <tr>
                    <th scope="col">Mã</th>
                    <th scope="col">Hạng mục</th>
                    <th scope="col">Mô tả</th>
                  </tr>
                </thead>
                <tbody>
                  {CRM_SCOPE.map((row) => (
                    <tr key={row.id}>
                      <td>
                        <strong>{row.id}</strong>
                      </td>
                      <td>{row.title}</td>
                      <td>{row.body}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="hd-note">
              Phí bên thứ ba (Zalo OA, ZNS, SMTP, Google, cổng thanh toán…) —
              khách trả nhà cung cấp, trừ khi Phụ lục này hoặc thỏa thuận riêng
              quy định khác. Domain + Hosting Website DN: Bên A hỗ trợ 12 tháng
              đầu sau bàn giao.
            </p>
          </section>

          {/* —— Phụ lục 02 —— */}
          <section className="hd-annex" aria-labelledby="hd-pl02">
            <h2 id="hd-pl02" className="hd-h2">
              Phụ lục 02 — Checklist nghiệm thu (UAT)
            </h2>
            <p>
              Phụ lục này là bộ phận không tách rời của Hợp đồng, dùng cho Điều
              4 (Nghiệm thu). Bên A gửi bản checklist đầy đủ khi thông báo sẵn
              sàng nghiệm thu. Khung tối thiểu theo mã A1–A14 tại{" "}
              <strong>Phụ lục 01</strong>:
            </p>
            <ul>
              <li>Đăng nhập / phân quyền theo A1</li>
              <li>Khóa học, buổi, lịch — A2</li>
              <li>Tuyển sinh / ghi danh — A3</li>
              <li>Học viên &amp; phụ huynh — A4</li>
              <li>Giáo viên — A5</li>
              <li>Gói buổi &amp; trừ buổi — A6</li>
              <li>Thu học phí &amp; công nợ — A7</li>
              <li>Bảo lưu — A8</li>
              <li>Điểm danh tay / QR — A9, A10</li>
              <li>Google Calendar — A11 (phụ thuộc tài khoản MA)</li>
              <li>Promotion / voucher — A12</li>
              <li>Chăm sóc &amp; thông báo — A13 (phí Zalo/SMTP ngoài HĐ)</li>
              <li>Theo dõi doanh thu — A14</li>
              <li>Website DN + portal HV/GV + tác vụ + đặt phòng + cổng TT</li>
            </ul>
          </section>

          {/* —— Phụ lục 03 —— */}
          <section className="hd-annex" aria-labelledby="hd-pl03">
            <h2 id="hd-pl03" className="hd-h2">
              Phụ lục 03 — {WARRANTY_POLICY_META.title}
            </h2>
            <p>
              Phụ lục này là bộ phận không tách rời của Hợp đồng, dùng cho Điều
              5 (Bảo hành &amp; hỗ trợ). Nội dung đầy đủ in kèm dưới đây (
              {WARRANTY_POLICY_META.updated}. {WARRANTY_POLICY_META.subtitle}).
            </p>
            <p>
              <strong>{WARRANTY_POLICY_META.badge}</strong>
            </p>

            <h3 className="hd-h3">1. Thời hạn theo loại sản phẩm</h3>
            <div className="hd-table-wrap">
              <table className="hd-table">
                <thead>
                  <tr>
                    <th scope="col">Hạng mục</th>
                    <th scope="col">Thời hạn</th>
                    <th scope="col">Hình thức</th>
                    <th scope="col">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  {WARRANTY_SCOPE_ROWS.map((row) => (
                    <tr key={row.item}>
                      <td>{row.item}</td>
                      <td>{row.duration}</td>
                      <td>{row.form}</td>
                      <td>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="hd-h3">2. Nội dung được bảo hành / hỗ trợ</h3>
            <ul>
              {WARRANTY_COVERED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="hd-h3">3. Ngoài phạm vi bảo hành</h3>
            <ul>
              {WARRANTY_OUT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="hd-h3">4. Gói hỗ trợ dài hạn (tùy chọn, báo giá riêng)</h3>
            <div className="hd-table-wrap">
              <table className="hd-table">
                <thead>
                  <tr>
                    <th scope="col">Gói</th>
                    <th scope="col">Phạm vi</th>
                    <th scope="col">Giá tham chiếu</th>
                  </tr>
                </thead>
                <tbody>
                  {WARRANTY_MAINTENANCE.map((row) => (
                    <tr key={row.name}>
                      <td>
                        <strong>{row.name}</strong>
                      </td>
                      <td>{row.scope}</td>
                      <td className="hd-num">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul>
              {WARRANTY_MAINTENANCE_NOTES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="hd-h3">5. Thời gian phản hồi mục tiêu</h3>
            <ul>
              {WARRANTY_SLA_HOURS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Giờ hành chính mặc định: 08:30–17:30, thứ Hai–thứ Sáu, trừ ngày lễ
              (trừ khi Phụ lục / thỏa thuận riêng quy định khác).
            </p>

            <h3 className="hd-h3">6. Phân loại ưu tiên sự cố</h3>
            <div className="hd-table-wrap">
              <table className="hd-table hd-table--dense">
                <thead>
                  <tr>
                    <th scope="col">Mức</th>
                    <th scope="col">Định nghĩa</th>
                    <th scope="col">Cam kết xử lý</th>
                  </tr>
                </thead>
                <tbody>
                  {WARRANTY_PRIORITIES.map((p) => (
                    <tr key={p.level}>
                      <td>
                        <strong>
                          {p.level} — {p.title}
                        </strong>
                      </td>
                      <td>{p.definition}</td>
                      <td>{p.commit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="hd-h3">7. Cam kết bàn giao / hỗ trợ kèm theo</h3>
            <ul>
              {WARRANTY_COMMITMENTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="hd-note">
              Bản phụ lục này là bản in kèm Hợp đồng — nội dung đầy đủ và có giá
              trị pháp lý khi hai bên ký. Không cần tài liệu web bên ngoài để
              áp dụng Điều 5.
            </p>
          </section>

          <p className="hd-foot">
            HỢP ĐỒNG DỊCH VỤ SỐ ………/HĐDV/2026 · {PREPARED_BY} ({PHONE_DISPLAY ||
              PREPARED_PHONE}) · Dolphin Software
          </p>
        </article>
      </div>
    </div>
  );
}
