import type { ReactNode } from "react";
import { PROFILE_IMAGES as IMG } from "@/lib/company-profile/content";
import { assetPath } from "@/lib/asset";
import {
  ProfileCareMock,
  ProfileIntelMock,
  ProfileOpsMock,
} from "@/components/company-profile/ProfileAiMocks";
import {
  CARE_STANDALONE,
  COMBO_PACKAGES,
  SAAS_MONTHLY,
  formatVnd,
} from "@/lib/pricing/dolphin-pricing-policy-2026";

function PageShell({
  page,
  title,
  titleId,
  children,
  plain,
}: {
  page: number;
  title: string;
  titleId: string;
  children: ReactNode;
  plain?: boolean;
}) {
  return (
    <article
      className={plain ? "cp-page cp-page--plain" : "cp-page"}
      aria-labelledby={titleId}
    >
      {!plain ? <div className="cp-page__wash" aria-hidden /> : null}
      <div className="cp-page__body">
        <div className="cp-page__content">
          <header className="cp-hdr">
            <div className="cp-hdr__brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath(IMG.logo)}
                alt=""
                width={22}
                height={22}
                aria-hidden
              />
              <span>Dolphin Software</span>
            </div>
            <span className="cp-hdr__meta">Hồ sơ năng lực 2026</span>
          </header>

          <h2 className="cp-h2" id={titleId}>
            {title}
          </h2>

          {children}
        </div>
      </div>

      <footer className="cp-ftr">
        <span>Dolphin Software – Chỉ làm những gì giúp bạn tăng trưởng</span>
        <span className="cp-ftr__page">{page}</span>
      </footer>
    </article>
  );
}

function CoverPage() {
  return (
    <article className="cp-page cp-page--cover" aria-label="Trang bìa">
      <div className="cp-page__body">
        <div className="cp-cover-top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath(IMG.logoCover)}
            alt="Dolphin Software"
            className="cp-cover-logo"
            width={88}
            height={88}
          />
          <h1 className="cp-cover-title">DOLPHIN SOFTWARE</h1>
          <p className="cp-cover-sub">Hồ sơ năng lực 2026</p>
        </div>
        <blockquote className="cp-cover-quote">
          “Không bán thứ Dolphin có. Chỉ cung cấp thứ khách hàng cần – và thứ đó
          phải giúp tăng khách, tăng doanh thu, phát triển công ty.”
        </blockquote>
        <div className="cp-cover-bottom">
          <p className="cp-cover-focus">
            Giải pháp CRM + AI cho doanh nghiệp dịch vụ
          </p>
          <p className="cp-cover-industries">
            CRM đa ngành · Spa · Nail · Salon · Giáo dục · Clinic · Vận tải · …
          </p>
          <p className="cp-cover-year">2026</p>
        </div>
      </div>
    </article>
  );
}

const TOC_ITEMS = [
  { n: "01", label: "Giới thiệu Dolphin Software", page: 3 },
  { n: "02", label: "Châm ngôn & Giá trị cốt lõi", page: 4 },
  { n: "03", label: "Tệp khách hàng mục tiêu", page: 5 },
  { n: "04", label: "Mô hình dịch vụ & Doanh thu", page: 6 },
  { n: "05", label: "Sản phẩm lõi: CRM", page: 7 },
  { n: "06", label: "Dolphin Care — Chatbot AI (Web / Zalo / Messenger)", page: 8 },
  { n: "07", label: "Dolphin Ops — Chatbox AI trên CRM", page: 9 },
  { n: "08", label: "Intelligence — Agent / workflow AI (add-on)", page: 10 },
  { n: "09", label: "Website & Outsourcing", page: 11 },
  { n: "10", label: "Quy trình làm việc 5 bước", page: 12 },
  { n: "11", label: "Chính sách giá & Bảo hành", page: 13 },
  { n: "12", label: "Case study thực tế", page: 14 },
  { n: "13", label: "Đội ngũ & Cam kết", page: 15 },
  { n: "14", label: "Liên hệ", page: 16 },
] as const;

function TocPage() {
  return (
    <PageShell page={2} title="Mục lục" titleId="cp-toc" plain>
      <div className="cp-split cp-split--fill cp-split--toc">
        <ol className="cp-toc cp-toc--spread">
          {TOC_ITEMS.map((item) => (
            <li key={item.n}>
              <span className="cp-toc__num">{item.n}</span>
              <span>{item.label}</span>
              <span className="cp-toc__page">{item.page}</span>
            </li>
          ))}
        </ol>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(IMG.fillWide)}
          alt=""
          className="cp-media cp-media--bare cp-media--center"
          aria-hidden
        />
      </div>
    </PageShell>
  );
}

function IntroPage() {
  return (
    <PageShell page={3} title="1. Giới thiệu Dolphin Software" titleId="cp-intro">
      <div className="cp-split cp-split--fill">
        <div className="cp-stack-fill">
          <p className="cp-p">
            <strong>Dolphin Software</strong> cung cấp giải pháp vận hành cho
            doanh nghiệp dịch vụ B2B tại Việt Nam — tập trung{" "}
            <strong>spa, nail, salon, giáo dục, clinic</strong>, mở rộng sang
            F&amp;B, showroom, vận tải và doanh nghiệp cần hệ thống linh hoạt.
          </p>
          <div className="cp-box cp-box--accent" style={{ marginTop: 8 }}>
            <p className="cp-p" style={{ margin: 0, fontSize: "9pt" }}>
              <strong>Định vị:</strong> Không bán danh sách tính năng. Bắt đầu từ
              vấn đề kinh doanh — chỉ xây những gì giúp tăng khách và doanh thu.
            </p>
          </div>
          <div className="cp-pill-row">
            <span className="cp-pill">Problem-first</span>
            <span className="cp-pill">CRM nền tảng</span>
            <span className="cp-pill">AI tăng trưởng</span>
            <span className="cp-pill">Source khi outsource</span>
          </div>
          <h3 className="cp-h3">Chúng tôi khác biệt</h3>
          <ul className="cp-check cp-check--2col" style={{ flex: 1 }}>
            <li>Bắt đầu từ bottleneck vận hành</li>
            <li>CRM thuê bao · AI tăng trưởng</li>
            <li>Website hỗ trợ hiện diện (combo)</li>
            <li>Outsource may đo, giá rõ</li>
            <li>
              Bàn giao source code đầy đủ với gói{" "}
              <strong>may đo / Outsourcing</strong>
            </li>
            <li>SaaS: quyền dùng theo kỳ — không bàn giao source nền tảng</li>
          </ul>
          <div className="cp-stat-row">
            <div className="cp-stat">
              <span className="cp-stat__n">CRM</span>
              <span className="cp-stat__l">Vận hành lõi</span>
            </div>
            <div className="cp-stat">
              <span className="cp-stat__n">AI</span>
              <span className="cp-stat__l">Care · Ops · Intel</span>
            </div>
            <div className="cp-stat">
              <span className="cp-stat__n">36 th</span>
              <span className="cp-stat__l">BH website</span>
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(IMG.about)}
          alt="Logo Dolphin Software"
          className="cp-media cp-media--fill cp-media--logo"
        />
      </div>
    </PageShell>
  );
}

function ValuesPage() {
  return (
    <PageShell page={4} title="2. Châm ngôn & Giá trị cốt lõi" titleId="cp-values">
      <blockquote className="cp-quote" style={{ marginBottom: 8, fontSize: "10pt", flexShrink: 0 }}>
        “Không bán thứ Dolphin có. Chỉ cung cấp thứ khách hàng cần – và thứ đó
        phải giúp tăng khách, tăng doanh thu, phát triển công ty.”
      </blockquote>

      <div className="cp-grid-3" style={{ flexShrink: 0 }}>
        <div className="cp-card cp-card--soft">
          <h4 className="cp-card__title">Problem-first</h4>
          <p className="cp-card__body">
            Bắt đầu từ bottleneck vận hành thực tế — không từ danh sách tính năng.
          </p>
        </div>
        <div className="cp-card cp-card--soft">
          <h4 className="cp-card__title">Tăng trưởng thực</h4>
          <p className="cp-card__body">
            Đo bằng khách mới và doanh thu tăng thêm — không bằng slide đẹp.
          </p>
        </div>
        <div className="cp-card cp-card--soft">
          <h4 className="cp-card__title">Không khóa khách (outsource)</h4>
          <p className="cp-card__body">
            Gói may đo / Outsourcing: bàn giao source code + tài liệu đầy đủ.
            SaaS thuê bao: quyền sử dụng theo kỳ — không bàn giao source nền tảng.
          </p>
        </div>
      </div>

      <div className="cp-split cp-split--fill">
        <div className="cp-box cp-box--accent cp-stack-fill" style={{ justifyContent: "center" }}>
          <h3 className="cp-h3" style={{ marginTop: 0 }}>
            Triết lý làm việc
          </h3>
          <p className="cp-p" style={{ marginBottom: 8, fontSize: "9.5pt" }}>
            Công nghệ chỉ có giá trị khi giúp chủ doanh nghiệp ngủ ngon hơn và
            doanh thu tăng thật. Dolphin từ chối bán thứ “hay” nhưng không giải
            quyết bài toán kinh doanh cụ thể.
          </p>
          <div className="cp-pill-row">
            <span className="cp-pill">PROBLEM</span>
            <span className="cp-pill">UNDERSTAND</span>
            <span className="cp-pill">SOLUTION</span>
            <span className="cp-pill">IMPACT</span>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(IMG.solutions)}
          alt="Kiến trúc giải pháp tối ưu để tăng trưởng"
          className="cp-media cp-media--fill"
        />
      </div>
    </PageShell>
  );
}

function AudiencePage() {
  const cards = [
    {
      title: "Spa / Massage",
      body: "Lịch hẹn, khách quay lại, chăm sóc sau dịch vụ.",
      img: IMG.spa,
    },
    {
      title: "Nail / Beauty",
      body: "Booking nhanh, follow-up, giảm bỏ lỡ ngoài giờ.",
      img: IMG.service,
    },
    {
      title: "Salon tóc",
      body: "Khách quen, dịch vụ lặp, nhắc lịch tự động.",
      img: IMG.service,
    },
    {
      title: "Giáo dục",
      body: "Tư vấn khóa, học viên, chăm sóc phụ huynh.",
      img: IMG.edu,
    },
    {
      title: "Clinic",
      body: "Đặt lịch, tư vấn sơ bộ, giảm double-booking.",
      img: IMG.clinic,
    },
  ] as const;

  return (
    <PageShell page={5} title="3. Tệp khách hàng mục tiêu" titleId="cp-aud">
      <div className="cp-grid-5" style={{ flexShrink: 0 }}>
        {cards.map((c) => (
          <div key={c.title} className="cp-card cp-card--soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath(c.img)}
              alt=""
              className="cp-card__icon"
              aria-hidden
            />
            <h4 className="cp-card__title">{c.title}</h4>
            <p className="cp-card__body">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="cp-split cp-split--fill">
        <div className="cp-box cp-box--accent cp-stack-fill" style={{ justifyContent: "center" }}>
          <h3 className="cp-h3" style={{ marginTop: 0 }}>
            Mở rộng
          </h3>
          <p className="cp-p" style={{ fontSize: "9.5pt" }}>
            F&amp;B · Showroom / BĐS · Vận tải · Dịch vụ khác · Doanh nghiệp cần
            hệ thống linh hoạt, giá hợp lý.
          </p>
          <p className="cp-p" style={{ margin: 0, fontSize: "9pt" }}>
            <strong>Khách lý tưởng:</strong> muốn hệ thống chạy ngay, không cần
            đội IT phức tạp, quan tâm tăng khách + doanh thu.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(IMG.industries)}
          alt=""
          className="cp-media cp-media--fill"
          aria-hidden
        />
      </div>
    </PageShell>
  );
}

function ModelPage() {
  return (
    <PageShell page={6} title="4. Mô hình dịch vụ & Doanh thu" titleId="cp-model">
      <div className="cp-split cp-split--fill">
        <div className="cp-stack-fill" style={{ justifyContent: "center" }}>
          <table className="cp-table" style={{ marginBottom: 10 }}>
            <thead>
              <tr>
                <th>Nhóm giải pháp</th>
                <th>Sản phẩm</th>
                <th>Giá trị cho khách</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Giải pháp lõi</strong>
                </td>
                <td>CRM (thuê theo kỳ)</td>
                <td>Vận hành khách · lịch · follow tập trung</td>
              </tr>
              <tr>
                <td>
                  <strong>Giải pháp tăng trưởng</strong>
                </td>
                <td>AI Care / Ops / Intel</td>
                <td>Chăm kênh · thao tác CRM · workflow</td>
              </tr>
              <tr>
                <td>
                  <strong>Hỗ trợ hiện diện số</strong>
                </td>
                <td>Website / Landing</td>
                <td>Tặng hoặc giảm sâu theo combo CRM</td>
              </tr>
              <tr>
                <td>
                  <strong>May đo / Outsourcing</strong>
                </td>
                <td>Phần mềm theo yêu cầu</td>
                <td>Source + tài liệu · giá phạm vi rõ</td>
              </tr>
            </tbody>
          </table>
          <p className="cp-p" style={{ margin: 0, fontSize: "9.5pt" }}>
            <strong>CRM</strong> là nền vận hành · <strong>AI</strong> đẩy tăng
            trưởng · <strong>Website</strong> hỗ trợ hiện diện ·{" "}
            <strong>Outsource</strong> khi cần hệ thống riêng (có bàn giao
            source).
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(IMG.solutions)}
          alt=""
          className="cp-media cp-media--fill"
          aria-hidden
        />
      </div>
    </PageShell>
  );
}

function CrmPage() {
  const crmMonthly = SAAS_MONTHLY.find((r) => r.product === "CRM")?.price ?? 500_000;

  return (
    <PageShell page={7} title="5. Sản phẩm lõi: CRM" titleId="cp-crm">
      <div className="cp-split cp-split--fill">
        <div className="cp-stack-fill">
          <p className="cp-p" style={{ marginBottom: 8 }}>
            Quản lý khách hàng, lịch hẹn và follow-up tập trung —{" "}
            <strong>nền tảng vận hành</strong> cho doanh nghiệp dịch vụ. CRM chạy
            lõi; <strong>Care (Chatbot)</strong> / <strong>Ops (Chatbox)</strong>{" "}
            gắn thêm khi cần tăng trưởng trên cùng dữ liệu khách.
          </p>
          <h3 className="cp-h3">Giá trị nghiệp vụ</h3>
          <ul className="cp-check" style={{ marginBottom: 8 }}>
            <li>Một nơi theo dõi khách, lịch, trạng thái — giảm Excel / Zalo rời</li>
            <li>Follow-up có chủ — ít sót lead và nhắc hẹn</li>
            <li>Phân quyền theo vai trò (lễ tân / quản lý / vận hành)</li>
            <li>Mở rộng Care / Ops / Intelligence khi đã có CRM</li>
          </ul>
          <div className="cp-box cp-box--accent" style={{ padding: "8px 10px" }}>
            <p className="cp-p" style={{ margin: 0, fontSize: "9pt" }}>
              <strong>Mô hình:</strong> SaaS thuê theo kỳ (niêm yết từ{" "}
              {formatVnd(crmMonthly)}
              /tháng) — quyền sử dụng trong hạn gói,{" "}
              <strong>không bàn giao source nền tảng CRM</strong>. Chi tiết gói
              combo &amp; quyền lợi web: trang{" "}
              <strong>11. Chính sách giá &amp; Bảo hành</strong>.
            </p>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(IMG.crm)}
          alt="Minh họa CRM vận hành"
          className="cp-media cp-media--fill"
        />
      </div>
    </PageShell>
  );
}

function CarePage() {
  return (
    <PageShell
      page={8}
      title="6. Dolphin Care — Chatbot AI (Web / Zalo / Messenger)"
      titleId="cp-care"
    >
      <div className="cp-split cp-split--fill cp-split--ai-product">
        <div className="cp-stack-fill">
          <p className="cp-p">
            <strong>Chatbot AI</strong> chăm sóc khách trên{" "}
            <strong>website / Zalo / Messenger</strong> — hiểu ngữ cảnh, đặt lịch,
            ghi lead, và tổng hợp phân tích data cuối ngày.
          </p>
          <ul className="cp-check" style={{ flex: 1 }}>
            <li>Chăm sóc đa kênh: Web · Zalo · Messenger</li>
            <li>Trả lời 24/7 · capture lead &amp; đặt lịch</li>
            <li>Tổng hợp &amp; phân tích data cuối ngày</li>
            <li>Insight gửi admin mỗi ngày</li>
            <li>Không phải chatbot kịch bản cứng</li>
          </ul>
          <div className="cp-ai-price-block">
            <p className="cp-ai-price">1.000.000đ / tháng</p>
            <ul className="cp-ai-price-list">
              {CARE_STANDALONE.map((row) => (
                <li key={row.term}>
                  Thuê lẻ <strong>{row.term}</strong>: {formatVnd(row.price)}
                  {row.discount ? ` (−${row.discount})` : ""} · TB{" "}
                  {formatVnd(row.avgMonthly)}/th
                </li>
              ))}
            </ul>
            <p className="cp-ai-price-note">
              Thuê lẻ Care: khách đã có CRM — không tặng Website. SaaS Care =
              quyền dùng theo kỳ (không bàn giao source nền tảng).
            </p>
          </div>
        </div>
        <ProfileCareMock />
      </div>
    </PageShell>
  );
}

function OpsPage() {
  return (
    <PageShell
      page={9}
      title="7. Dolphin Ops — Chatbox AI trên CRM"
      titleId="cp-ops"
    >
      <div className="cp-split cp-split--fill cp-split--ai-product">
        <div className="cp-stack-fill">
          <p className="cp-p">
            <strong>Chatbox AI trên CRM</strong> — nói việc cần làm, hệ thống
            chọn đúng tool và mở giao diện CRM (booking, khách, báo cáo).
          </p>
          <ul className="cp-check" style={{ flex: 1 }}>
            <li>Chatbox AI gắn trực tiếp trong CRM</li>
            <li>Booking · Customer 360 · báo cáo</li>
            <li>Admin chỉnh form / tool trong chat</li>
            <li>Xác nhận hành động nhạy cảm</li>
            <li>Thao tác được các chức năng trên CRM</li>
          </ul>
          <div className="cp-ai-price-block">
            <p className="cp-ai-price">1.000.000đ / tháng</p>
            <ul className="cp-ai-price-list">
              <li>
                Trả trước <strong>6 tháng</strong>: {formatVnd(6_000_000)}
              </li>
              <li>
                Trả trước <strong>12 tháng</strong>: {formatVnd(12_000_000)}
              </li>
            </ul>
            <p className="cp-ai-price-note">
              Gói 6 tháng khi bán kèm CRM (theo chính sách giá 2026).
            </p>
          </div>
        </div>
        <ProfileOpsMock />
      </div>
    </PageShell>
  );
}

function IntelligencePage() {
  return (
    <PageShell
      page={10}
      title="8. Intelligence — Agent / workflow AI (add-on)"
      titleId="cp-intel"
    >
      <div className="cp-split cp-split--fill cp-split--ai-product">
        <div className="cp-stack-fill">
          <p className="cp-p">
            <strong>Agent / workflow AI</strong> (add-on) — điều phối nhiều bước
            nghiệp vụ, gắn action và human checkpoint.{" "}
            <strong>Không phải</strong> chatbot kênh khách (Web / Zalo /
            Messenger — đó là Dolphin Care).
          </p>
          <ul className="cp-check" style={{ flex: 1 }}>
            <li>Workflow theo quy trình nghiệp vụ</li>
            <li>Agent + action kết nối hệ thống</li>
            <li>Human checkpoint bước nhạy cảm</li>
            <li>Mở rộng khi vận hành đã sẵn sàng</li>
          </ul>
          <div className="cp-ai-price-block">
            <p className="cp-ai-price">2.000.000đ / tháng</p>
            <ul className="cp-ai-price-list">
              <li>
                Trả trước <strong>6 tháng</strong>: {formatVnd(12_000_000)}
              </li>
              <li>
                Trả trước <strong>12 tháng</strong>: {formatVnd(24_000_000)}
              </li>
            </ul>
            <p className="cp-ai-price-note">
              Add-on khi đã có gói CRM (theo chính sách giá 2026).
            </p>
          </div>
        </div>
        <ProfileIntelMock />
      </div>
    </PageShell>
  );
}

function WebOutsourcePage() {
  return (
    <PageShell page={11} title="9. Website & Outsourcing" titleId="cp-web">
      <div className="cp-grid-2 cp-split--fill">
        <div className="cp-card cp-card--fill">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath(IMG.web)}
            alt="Mock website doanh nghiệp Dolphin Software (minh họa)"
            className="cp-media cp-media--card-hero cp-media--ui-mock"
          />
          <p className="cp-ui-caption">Illustrative UI · Website</p>
          <h3 className="cp-h3" style={{ marginTop: 0 }}>
            Website / Landing
          </h3>
          <ul className="cp-check" style={{ flex: 1 }}>
            <li>Landing: 1.500.000đ</li>
            <li>Website DN: 4.500.000đ</li>
            <li>
              Combo CRM + Care 6 tháng+ → <strong>tặng Website</strong>
            </li>
            <li>
              BH kỹ thuật <strong>36 tháng</strong>
            </li>
          </ul>
          <div className="cp-box cp-box--accent" style={{ marginTop: 8, padding: "8px 10px" }}>
            <p className="cp-p" style={{ margin: 0, fontSize: "8.5pt" }}>
              Combo <strong>CRM + Dolphin Care</strong> (AI chatbot) từ 6 tháng →{" "}
              <strong>tặng Website</strong>.
            </p>
          </div>
        </div>

        <div className="cp-card cp-card--fill">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath(IMG.tech)}
            alt=""
            className="cp-media cp-media--card-hero"
            aria-hidden
          />
          <h3 className="cp-h3" style={{ marginTop: 0 }}>
            Outsourcing
          </h3>
          <ul className="cp-check" style={{ flex: 1 }}>
            <li>Phạm vi: 10 – 100 triệu</li>
            <li>BH 3 tháng sau nghiệm thu</li>
            <li>
              <strong>Bàn giao source code + tài liệu đầy đủ</strong>
            </li>
            <li>Không khóa hệ thống khách (outsource)</li>
          </ul>
          <div className="cp-box cp-box--accent" style={{ marginTop: 8, padding: "8px 10px" }}>
            <p className="cp-p" style={{ margin: 0, fontSize: "8.5pt" }}>
              <strong>IP:</strong> Chỉ gói may đo / Outsourcing bàn giao source.
              SaaS CRM/Care/Ops thuê bao không gồm source nền tảng.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function ProcessPage() {
  const steps = [
    {
      n: 1,
      title: "Lắng nghe & Khám phá",
      body: "Bottleneck, mục tiêu, ngân sách, thời gian.",
      deliv: "Tóm tắt vấn đề đã thống nhất",
    },
    {
      n: 2,
      title: "Lập kế hoạch & Báo giá",
      body: "Phạm vi, milestone, chi phí, bàn giao.",
      deliv: "Proposal + timeline + báo giá",
    },
    {
      n: 3,
      title: "Phát triển theo Sprint",
      body: "UI, tính năng, tích hợp — demo sớm.",
      deliv: "Bản build từng sprint",
    },
    {
      n: 4,
      title: "Kiểm thử & UAT",
      body: "Nghiệm thu cùng khách trước production.",
      deliv: "Checklist UAT + lỗi đã xử lý",
    },
    {
      n: 5,
      title: "Bàn giao & Đồng hành",
      body: "Deploy, hướng dẫn, hỗ trợ sau live.",
      deliv: "Deploy, guide, BH; source nếu outsource",
    },
  ] as const;

  return (
    <PageShell page={12} title="10. Quy trình làm việc 5 bước" titleId="cp-process">
      <div className="cp-split cp-split--fill">
        <div className="cp-timeline" style={{ margin: 0 }}>
          {steps.map((s) => (
            <div key={s.n} className="cp-tl">
              <div className="cp-tl__num">{s.n}</div>
              <div>
                <h4 className="cp-tl__title">{s.title}</h4>
                <p className="cp-tl__body">{s.body}</p>
                <p className="cp-tl__deliv">Deliverable: {s.deliv}</p>
              </div>
            </div>
          ))}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(IMG.approach)}
          alt=""
          className="cp-media cp-media--fill"
          aria-hidden
        />
      </div>
    </PageShell>
  );
}

function PricingPage() {
  return (
    <PageShell page={13} title="11. Chính sách giá & Bảo hành (2026)" titleId="cp-price">
      <div className="cp-stack-fill" style={{ justifyContent: "flex-start" }}>
        <p className="cp-p" style={{ marginBottom: 8, fontSize: "9pt" }}>
          Bảng combo chính thức — thanh toán trước theo kỳ. SaaS = quyền dùng
          trong hạn gói (không bàn giao source nền tảng).
        </p>
        <div style={{ marginBottom: 12, width: "100%" }}>
          <table className="cp-table">
            <thead>
              <tr>
                <th>Gói</th>
                <th>Thành phần</th>
                <th>Kỳ</th>
                <th>Trả trước</th>
                <th>Web</th>
              </tr>
            </thead>
            <tbody>
              {COMBO_PACKAGES.map((p) => (
                <tr key={p.no}>
                  <td>
                    <strong>{p.name}</strong>
                    {p.badge ? ` · ${p.badge}` : ""}
                  </td>
                  <td style={{ fontSize: "8.5pt" }}>{p.components}</td>
                  <td>{p.term}</td>
                  <td className="cp-num">{formatVnd(p.prepaid)}</td>
                  <td style={{ fontSize: "8.5pt" }}>{p.webSupport}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="cp-h3">Bảo hành &amp; IP</h3>
        <ul className="cp-check">
          <li>
            Website: <strong>36 tháng</strong> BH kỹ thuật
          </li>
          <li>CRM + AI (SaaS): trong hạn gói đã thanh toán</li>
          <li>Outsource / may đo: 3 tháng sau UAT</li>
          <li>
            <strong>Bàn giao source</strong> chỉ với gói may đo / Outsourcing
            (và website one-time trong phạm vi đã nghiệm thu)
          </li>
        </ul>
      </div>
    </PageShell>
  );
}

function CasesPage() {
  const cases = [
    {
      title: "Billiard",
      problem: "Giấy/Excel, thất thoát ca.",
      solution: "Bản đồ bàn, timer, tổng kết ca.",
      result:
        "Giảm gần như toàn bộ lệch ca / sót sổ; tiết kiệm ~1 giờ chốt sổ mỗi ngày.",
    },
    {
      title: "Sân cầu lông",
      problem: "Gọi hỏi chỗ, chồng lịch.",
      solution: "Web + lịch trống + quy trình đặt.",
      result:
        "Giảm rõ cuộc gọi hỏi chỗ trống; đặt lịch chính xác hơn, ít chồng khung giờ.",
    },
    {
      title: "Spa / Beauty",
      problem: "Bỏ lỡ ngoài giờ, follow thủ công.",
      solution: "Booking + Care (Chatbot) 24/7.",
      result:
        "Tăng ~25–30% booking phát sinh khung 22h–8h sáng (kênh chatbot ngoài giờ).",
    },
    {
      title: "Clinic & Ticket",
      problem: "Double-booking, thanh toán rời.",
      solution: "Luồng đặt + thanh toán thống nhất.",
      result: "Tăng tỷ lệ hoàn tất đặt chỗ; ít double-booking hơn trước khi live.",
    },
    {
      title: "Edu",
      problem: "Lead tư vấn rời Zalo/Excel, sót follow học viên.",
      solution: "CRM học viên + Care tư vấn / đặt lịch.",
      result: "Giảm sót lead follow; pipeline tư vấn theo dõi được theo tuần.",
    },
    {
      title: "Nha khoa",
      problem: "Chồng lịch khám, hỏi ngoài giờ bỏ lỡ.",
      solution: "Booking + Care (Chatbot) 24/7 trên kênh sẵn có.",
      result: "Đặt chỗ ổn định hơn; ít cuộc gọi hỏi lặp ngoài giờ.",
    },
  ] as const;

  return (
    <PageShell page={14} title="12. Case study thực tế" titleId="cp-cases">
      <ol className="cp-case-process" aria-label="6 case study">
        {cases.map((c) => (
          <li key={c.title} className="cp-case-process__step">
            <span className="cp-case-process__label">{c.title}</span>
          </li>
        ))}
      </ol>
      <div className="cp-case-grid cp-case-grid--3 cp-split--fill">
        {cases.map((c) => (
          <div key={c.title} className="cp-case">
            <h4>{c.title}</h4>
            <p>
              <strong>Vấn đề:</strong> {c.problem}
            </p>
            <p>
              <strong>Giải pháp:</strong> {c.solution}
            </p>
            <p>
              <strong>Kết quả:</strong> {c.result}
            </p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function TeamPage() {
  return (
    <PageShell page={15} title="13. Đội ngũ & Cam kết" titleId="cp-team">
      <div className="cp-stack-fill" style={{ justifyContent: "center", maxWidth: "42rem" }}>
        <div className="cp-founder">
          <p className="cp-founder__role">Founder / Solution Architect</p>
          <h3 className="cp-h3" style={{ marginTop: 2, marginBottom: 6 }}>
            Nguyễn Chí Thành
          </h3>
          <p className="cp-p" style={{ marginBottom: 6, fontSize: "9pt" }}>
            Hơn 7 năm backend trên sản phẩm live (Marathon, Myspa, Splus) —
            team lead, xử lý sự cố production, thiết kế hệ thống. Tư duy
            production áp vào mọi dự án Dolphin Software.
          </p>
          <div className="cp-pill-row" style={{ marginTop: 0 }}>
            <span className="cp-pill">Go / Node</span>
            <span className="cp-pill">Cloud / DevOps</span>
            <span className="cp-pill">CRM · AI Agent</span>
          </div>
        </div>
        <h3 className="cp-h3">Cam kết</h3>
        <ul className="cp-check">
          <li>Outsource / may đo: bàn giao source + tài liệu đầy đủ</li>
          <li>SaaS: quyền dùng theo kỳ — không bàn giao source nền tảng</li>
          <li>Checklist UAT trước bàn giao</li>
          <li>Đào tạo 1–2 buổi tùy gói</li>
          <li>Hỗ trợ sau bàn giao theo SLA</li>
          <li>Chỉ làm việc tăng khách &amp; doanh thu</li>
        </ul>
        <blockquote
          className="cp-quote"
          style={{ marginTop: 8, fontSize: "9.5pt", marginBottom: 0 }}
        >
          Không bán công nghệ vì công nghệ. Bán kết quả kinh doanh.
        </blockquote>
      </div>
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell page={16} title="14. Liên hệ" titleId="cp-contact">
      <div className="cp-split cp-split--fill">
        <div className="cp-stack-fill">
          <p className="cp-p" style={{ fontSize: "9.5pt", flexShrink: 0 }}>
            Cho chúng tôi biết bottleneck hiện tại — chỉ đề xuất những gì giúp
            tăng khách, tăng doanh thu và phát triển công ty.
          </p>
          <div className="cp-contact" style={{ marginTop: 0, flex: 1 }}>
            <h3>Dolphin Software</h3>
            <p>
              Địa chỉ: 2 Hồng Hà, Tân Sơn Hòa, Hồ Chí Minh, Việt Nam
              <br />
              Hotline / Zalo: <strong>0779 937 633</strong>
              <br />
              Website:{" "}
              <a href="https://dolphin-software.io.vn">
                https://dolphin-software.io.vn
              </a>
            </p>
            <p className="cp-cta">
              Chat Zalo để tư vấn combo CRM + AI phù hợp vận hành của bạn.
            </p>
          </div>
          <div className="cp-end" style={{ paddingTop: 8, flexShrink: 0 }}>
            <p>— Kết thúc Hồ sơ năng lực —</p>
            <p>Dolphin Software © 2026</p>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(IMG.philosophy)}
          alt=""
          className="cp-media cp-media--fill"
          aria-hidden
        />
      </div>
    </PageShell>
  );
}

export const PROFILE_PAGES = [
  CoverPage,
  TocPage,
  IntroPage,
  ValuesPage,
  AudiencePage,
  ModelPage,
  CrmPage,
  CarePage,
  OpsPage,
  IntelligencePage,
  WebOutsourcePage,
  ProcessPage,
  PricingPage,
  CasesPage,
  TeamPage,
  ContactPage,
] as const;
