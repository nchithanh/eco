/** Static UI mocks for /company-profile/ AI pages — no motion. */

export function ProfileCareMock() {
  return (
    <div className="cp-ui-mock cp-ui-mock--care" aria-hidden>
      <div className="cp-care-phone">
        <header className="cp-care-phone__hdr">
          <div className="cp-care-phone__avatar" />
          <div>
            <p className="cp-care-phone__name">Dolphin Care</p>
            <p className="cp-care-phone__sub">Spa · Booking</p>
          </div>
          <span className="cp-care-phone__online">Online</span>
        </header>
        <div className="cp-care-phone__chat">
          <div className="cp-bubble cp-bubble--user">
            Chiều mai còn slot massage không ạ? 🙏
          </div>
          <div className="cp-bubble cp-bubble--bot">
            Có ạ 😊 Còn <strong>14:00 · 15:30 · 17:00</strong>. Bạn nghiêng khung
            nào?
          </div>
          <div className="cp-bubble cp-bubble--user">15:30 đi — mình hơi muộn</div>
          <div className="cp-bubble cp-bubble--bot">
            Okie 15:30! ✨ Cho mình xin <strong>tên + SĐT</strong> để giữ chỗ và
            gửi Zalo nhé?
          </div>
          <div className="cp-bubble cp-bubble--user">Lan · 0901 234 567</div>
          <div className="cp-bubble cp-bubble--bot">
            Đã giữ lịch cho Lan lúc 15:30 🎉 Gửi Zalo xác nhận + ghi CRM luôn.
            <br />
            Bonus: gói 60&apos; + dầu 10% nếu book trước 24h — chốt luôn không
            chị? 😉
          </div>
          <div className="cp-bubble cp-bubble--user">Chốt luôn gói đó đi 😄</div>
          <div className="cp-bubble cp-bubble--bot">
            Xong! ✅ Đã lên CRM · nhắc Zalo trước 1 giờ. Hẹn gặp Lan chiều mai
            nhé 🐬
          </div>
        </div>
        <div className="cp-care-phone__input">Type a message…</div>
        <p className="cp-care-phone__flow">
          Context → Gather → Book → Upsell → Zalo/CRM → Follow-up
        </p>
      </div>
      <p className="cp-ui-caption">Illustrative UI · Dolphin Care</p>
    </div>
  );
}

export function ProfileOpsMock() {
  return (
    <div className="cp-ui-mock cp-ui-mock--ops" aria-hidden>
      <div className="cp-ops-app">
        <header className="cp-ops-app__chrome">
          <span className="cp-ops-app__dot" />
          <span className="cp-ops-app__dot" />
          <span className="cp-ops-app__dot" />
          <span className="cp-ops-app__title">Dolphin Ops · Agent CRM</span>
        </header>
        <div className="cp-ops-app__body cp-ops-app__body--chat">
          <div className="cp-ops-chat">
            <div className="cp-bubble cp-bubble--user">
              Đặt lịch cho Lan thứ Bảy này giúp 😅
            </div>
            <div className="cp-bubble cp-bubble--bot">
              Hiểu rồi 👍 Đang mở tool <strong>Booking</strong>…
            </div>
            <div className="cp-bubble cp-bubble--bot">
              Thấy slot trống <strong>15:30 · Massage 60&apos;</strong>. Form đã
              điền sẵn — bạn chỉ cần bấm xác nhận (bước nhạy cảm, mình không tự
              chốt 😉).
            </div>
            <div className="cp-bubble cp-bubble--user">Ok, xác nhận đi</div>
            <div className="cp-bubble cp-bubble--bot">
              Xong ✅ Lịch vào CRM · nhắc staff. Muốn mình gợi ý upsell dầu thơm
              cho lần này không? 😏
            </div>
          </div>
          <div className="cp-ops-form">
            <p className="cp-ops-form__title">Đặt lịch · đã sẵn</p>
            <label>
              Khách
              <span>Lan</span>
            </label>
            <label>
              Ngày
              <span>Thứ Bảy</span>
            </label>
            <label>
              Giờ
              <span>15:30</span>
            </label>
            <label>
              Dịch vụ
              <span>Massage 60&apos;</span>
            </label>
            <button type="button" tabIndex={-1}>
              ✓ Xác nhận đặt lịch
            </button>
          </div>
        </div>
      </div>
      <p className="cp-ui-caption">Illustrative UI · Dolphin Ops</p>
    </div>
  );
}

export function ProfileIntelMock() {
  return (
    <div className="cp-ui-mock cp-ui-mock--intel" aria-hidden>
      <div className="cp-intel-panel">
        <header className="cp-intel-panel__hdr">
          <span>Dolphin Intelligence</span>
          <span className="cp-intel-panel__badge">Workflow</span>
        </header>
        <div className="cp-intel-chat">
          <div className="cp-bubble cp-bubble--bot">
            🔔 Lead mới từ web: <strong>Minh</strong> hỏi gói 12 buổi…
          </div>
          <div className="cp-bubble cp-bubble--bot">
            Đã enrich + gán owner · QL chi nhánh Q1. Score nóng 🔥 — đề xuất gọi
            trong 15 phút.
          </div>
          <div className="cp-bubble cp-bubble--user">Ok, soạn tin Zalo giúp</div>
          <div className="cp-bubble cp-bubble--bot">
            Draft sẵn ✍️ “Chào Minh, còn 2 suất level Begin tuần này…” — chờ bạn
            duyệt rồi gửi (human checkpoint).
          </div>
          <div className="cp-bubble cp-bubble--user">Duyệt, gửi đi 🚀</div>
          <div className="cp-bubble cp-bubble--bot">
            Đã gửi ✅ Lên follow-up D+1. Cuối ngày mình gom insight: 12 lead · 3
            chốt · bottleneck = phản hồi chậm buổi tối 😅
          </div>
        </div>
        <ol className="cp-intel-steps cp-intel-steps--compact">
          <li>
            <span>01</span> Sự kiện
          </li>
          <li>
            <span>02</span> Action
          </li>
          <li>
            <span>03</span> Logic
          </li>
          <li>
            <span>04</span> Checkpoint
          </li>
          <li className="is-on">
            <span>05</span> Insight
          </li>
        </ol>
      </div>
      <p className="cp-ui-caption">Illustrative UI · Intelligence</p>
    </div>
  );
}
