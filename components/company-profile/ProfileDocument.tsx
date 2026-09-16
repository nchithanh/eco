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
  { n: "06", label: "Dolphin Care (AI)", page: 8 },
  { n: "07", label: "Dolphin Ops (AI)", page: 9 },
  { n: "08", label: "Intelligence (AI)", page: 10 },
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
            <span className="cp-pill">No lock-in</span>
          </div>
          <h3 className="cp-h3">Chúng tôi khác biệt</h3>
          <ul className="cp-check cp-check--2col" style={{ flex: 1 }}>
            <li>Bắt đầu từ bottleneck vận hành</li>
            <li>CRM duy trì · AI tăng trưởng</li>
            <li>Website kích cầu (combo)</li>
            <li>Outsource chất lượng, giá rõ</li>
            <li>Bàn giao source code đầy đủ</li>
            <li>Không khóa hệ thống khách</li>
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
          alt="Minh họa giải pháp công nghệ Dolphin"
          className="cp-media cp-media--fill"
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
          <h4 className="cp-card__title">Không khóa khách</h4>
          <p className="cp-card__body">
            Bàn giao source code + tài liệu. Không lock-in.
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
                <th>Vai trò</th>
                <th>Sản phẩm</th>
                <th>Mục tiêu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Duy trì</strong>
                </td>
                <td>CRM</td>
                <td>Vận hành recurring</td>
              </tr>
              <tr>
                <td>
                  <strong>Tăng trưởng</strong>
                </td>
                <td>AI Care / Ops / Intel</td>
                <td>Lead · scale</td>
              </tr>
              <tr>
                <td>
                  <strong>Kích cầu</strong>
                </td>
                <td>Website / Landing</td>
                <td>Tặng kèm combo</td>
              </tr>
              <tr>
                <td>
                  <strong>Ngách</strong>
                </td>
                <td>Outsourcing</td>
                <td>Production, giá rõ</td>
              </tr>
            </tbody>
          </table>
          <p className="cp-p" style={{ margin: 0, fontSize: "9.5pt" }}>
            <strong>CRM</strong> giữ doanh thu ổn định · <strong>AI</strong> đẩy
            tăng trưởng · <strong>Website</strong> kích cầu ·{" "}
            <strong>Outsource</strong> khi cần hệ thống riêng.
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
          <p className="cp-p" style={{ marginBottom: 6 }}>
            Quản lý khách hàng, lịch hẹn và follow-up tập trung — nền tảng vận
            hành. CRM chạy lõi; <strong>Care / Ops</strong> gắn thêm khi cần tăng
            trưởng.
          </p>
          <p className="cp-p" style={{ marginBottom: 4, fontSize: "9pt" }}>
            <strong>Niêm yết:</strong> CRM {formatVnd(crmMonthly)} / tháng · đơn
            lẻ chỉ bán gói 12 tháng. Gói 6 tháng khi kèm Care hoặc Ops.
          </p>
          <div style={{ margin: "4px 0 6px", overflowX: "auto" }}>
            <table className="cp-table cp-table--dense">
              <thead>
                <tr>
                  <th>Gói</th>
                  <th>Thành phần</th>
                  <th>Kỳ</th>
                  <th>Trả trước</th>
                </tr>
              </thead>
              <tbody>
                {COMBO_PACKAGES.map((p) => (
                  <tr key={p.no}>
                    <td>
                      <strong>{p.name}</strong>
                      {p.badge ? ` · ${p.badge}` : ""}
                    </td>
                    <td style={{ fontSize: "7.5pt" }}>{p.components}</td>
                    <td>{p.term}</td>
                    <td className="cp-num">{formatVnd(p.prepaid)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cp-p" style={{ margin: 0, fontSize: "7.5pt", color: "var(--cp-muted)" }}>
            Từ CRM + Care 6 → tặng Website khi triển khai. CRM Base 12: tặng
            Landing hoặc −50% Website. SoT: chính sách giá 2026.
          </p>
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
    <PageShell page={8} title="6. Dolphin Care" titleId="cp-care">
      <div className="cp-split cp-split--fill cp-split--ai-product">
        <div className="cp-stack-fill">
          <p className="cp-p">
            AI chăm sóc khách trên <strong>website / Zalo / Messenger</strong> —
            hiểu ngữ cảnh, đặt lịch, ghi lead, và tổng hợp phân tích data cuối
            ngày.
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
          </div>
        </div>
        <ProfileCareMock />
      </div>
    </PageShell>
  );
}

function OpsPage() {
  return (
    <PageShell page={9} title="7. Dolphin Ops" titleId="cp-ops">
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
    <PageShell page={10} title="8. Intelligence" titleId="cp-intel">
      <div className="cp-split cp-split--fill cp-split--ai-product">
        <div className="cp-stack-fill">
          <p className="cp-p">
            AI workflow / agent nâng cao (add-on) — điều phối nhiều bước, gắn
            action và human checkpoint khi cần.
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
            <li>Source code + tài liệu</li>
            <li>Không lock-in</li>
          </ul>
          <div className="cp-box cp-box--accent" style={{ marginTop: 8, padding: "8px 10px" }}>
            <p className="cp-p" style={{ margin: 0, fontSize: "8.5pt" }}>
              Phù hợp khi cần hệ thống riêng, giá rõ, chất lượng chạy thực tế.
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
      deliv: "Source, admin, guide, bảo hành",
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
      <div className="cp-split cp-split--fill">
        <div className="cp-stack-fill" style={{ justifyContent: "center" }}>
          <table className="cp-table" style={{ marginBottom: 8 }}>
            <thead>
              <tr>
                <th>Gói</th>
                <th>Nội dung</th>
                <th>Trước</th>
                <th>Web</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CRM Base 12</td>
                <td>CRM 12 tháng</td>
                <td>5.4tr</td>
                <td>Landing / −50% Web</td>
              </tr>
              <tr>
                <td>CRM + Care 6</td>
                <td>CRM + Care 6 th</td>
                <td>9tr</td>
                <td>Tặng Website</td>
              </tr>
              <tr>
                <td>CRM + Care 12</td>
                <td>CRM + Care 12 th</td>
                <td>16.2tr</td>
                <td>Tặng Website</td>
              </tr>
              <tr>
                <td>Full Growth</td>
                <td>CRM + Care + Ops</td>
                <td>15 / 27tr</td>
                <td>Tặng Website</td>
              </tr>
            </tbody>
          </table>
          <h3 className="cp-h3">Bảo hành</h3>
          <ul className="cp-check">
            <li>
              Website: <strong>36 tháng</strong>
            </li>
            <li>CRM + AI: trong hạn gói</li>
            <li>Outsource: 3 tháng sau UAT</li>
            <li>Không lock-in · bàn giao source</li>
          </ul>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(IMG.solCrm)}
          alt=""
          className="cp-media cp-media--fill"
          aria-hidden
        />
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
      result: "Ít bỏ sót, theo dõi real-time.",
    },
    {
      title: "Sân cầu lông",
      problem: "Gọi hỏi chỗ, chồng lịch.",
      solution: "Web + lịch trống + quy trình đặt.",
      result: "Ít gọi hỏi, đặt chính xác hơn.",
    },
    {
      title: "Spa / Beauty",
      problem: "Bỏ lỡ ngoài giờ, follow thủ công.",
      solution: "Booking + Care 24/7.",
      result: "Tăng đặt ngoài giờ.",
    },
    {
      title: "Clinic & Ticket",
      problem: "Double-booking, thanh toán rời.",
      solution: "Luồng đặt + thanh toán thống nhất.",
      result: "Tăng hoàn tất đặt chỗ.",
    },
    {
      title: "Edu",
      problem: "Lead tư vấn rời Zalo/Excel, sót follow học viên.",
      solution: "CRM học viên + Care tư vấn / đặt lịch.",
      result: "Ít sót lead, follow rõ hơn.",
    },
    {
      title: "Nha khoa",
      problem: "Chồng lịch khám, hỏi ngoài giờ bỏ lỡ.",
      solution: "Booking + Care 24/7 trên kênh sẵn có.",
      result: "Đặt chỗ ổn định, ít gọi hỏi lặp.",
    },
  ] as const;

  return (
    <PageShell page={14} title="12. Case study thực tế" titleId="cp-cases">
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
      <div className="cp-split cp-split--fill">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p className="cp-p">
            Kinh nghiệm vận hành SaaS / edtech đã chạy production.
          </p>
          <ul className="cp-check">
            <li>Bàn giao source + tài liệu đầy đủ</li>
            <li>Không lock-in</li>
            <li>Checklist UAT trước bàn giao</li>
            <li>Đào tạo 1–2 buổi tùy gói</li>
            <li>Hỗ trợ sau bàn giao theo SLA</li>
            <li>Chỉ làm việc tăng khách &amp; doanh thu</li>
          </ul>
          <blockquote className="cp-quote" style={{ marginTop: 8, fontSize: "9.5pt", marginBottom: 0 }}>
            Không bán công nghệ vì công nghệ. Bán kết quả kinh doanh.
          </blockquote>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(IMG.closing)}
          alt=""
          className="cp-media cp-media--fill"
          aria-hidden
        />
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
