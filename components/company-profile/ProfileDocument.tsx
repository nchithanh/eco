import type { ReactNode } from "react";
import { PROFILE_IMAGES as IMG } from "@/lib/company-profile/content";
import {
  PROFILE_DEFAULT_PHONE_DISPLAY,
} from "@/lib/company-profile/contact-phone";
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
import {
  POS_PLANS,
  POS_POLICY_META,
} from "@/lib/pricing/dolphin-pos-policy-2026";

export type ProfilePageProps = {
  /** Hotline / Zalo display from `?sdt=` (already resolved). */
  contactPhone?: string;
};
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
        <span className="cp-ftr__page">Trang {page}</span>
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
          phải giúp tăng khách, tăng doanh thu.”
        </blockquote>
        <div className="cp-cover-bottom">
          <p className="cp-cover-focus">
            Cho thuê CRM &amp; POS — vận hành dịch vụ và cửa hàng bán hàng
          </p>
          <p className="cp-cover-industries">
            CRM: Spa · Salon · Clinic · Giáo dục · … · POS: Cafe · Pet · F&amp;B
            · Fashion · …
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
  { n: "05", label: "Sản phẩm lõi: CRM & POS (thuê bao)", page: 7 },
  { n: "06", label: "Dolphin Care — Chatbot AI (Web / Zalo / Messenger)", page: 8 },
  { n: "07", label: "Dolphin Ops — Chatbox AI trên CRM", page: 9 },
  { n: "08", label: "Intelligence — Agent / workflow AI (add-on)", page: 10 },
  { n: "09", label: "Website & gia công phần mềm (bổ sung)", page: 11 },
  { n: "10", label: "Quy trình làm việc 5 bước", page: 12 },
  { n: "11", label: "Chính sách giá CRM", page: 13 },
  { n: "12", label: "Chính sách giá POS", page: 14 },
  { n: "13", label: "Chính sách bảo hành & IP", page: 15 },
  { n: "14", label: "Case study thực tế", page: 16 },
  { n: "15", label: "Đội ngũ & Cam kết", page: 17 },
  { n: "16", label: "Liên hệ", page: 18 },
] as const;

function TocPage() {
  return (
    <PageShell page={2} title="Mục lục" titleId="cp-toc" plain>
      <ol className="cp-toc cp-toc--spread">
        {TOC_ITEMS.map((item) => (
          <li key={item.n}>
            <span className="cp-toc__num">{item.n}</span>
            <span>{item.label}</span>
            <span className="cp-toc__page">{item.page}</span>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}

function IntroPage() {
  return (
    <PageShell page={3} title="1. Giới thiệu Dolphin Software" titleId="cp-intro">
      <div className="cp-split cp-split--fill cp-intro-split">
        <div className="cp-stack-fill">
          <p className="cp-p">
            <strong>Dolphin Software</strong> cho thuê <strong>CRM</strong> cho
            doanh nghiệp dịch vụ và <strong>POS</strong> cho cửa hàng bán hàng.
            Hai dòng sản phẩm tách nhau rõ. Website và gia công phần mềm vẫn
            nhận làm khi anh chị cần — như dịch vụ bổ sung, không phải sản phẩm
            chính.
          </p>
          <div className="cp-box cp-box--accent" style={{ marginTop: 8 }}>
            <p className="cp-p" style={{ margin: 0, fontSize: "9pt" }}>
              <strong>Định vị:</strong> Không bán danh sách tính năng. Bắt đầu từ
              chỗ đang nghẽn — chỉ làm những gì giúp tăng khách và doanh thu.
            </p>
          </div>
          <div className="cp-pill-row" style={{ marginTop: "auto" }}>
            <span className="cp-pill">Problem-first</span>
            <span className="cp-pill">CRM thuê bao</span>
            <span className="cp-pill">POS thuê bao</span>
            <span className="cp-pill">Web / gia công phần mềm</span>
          </div>
        </div>
        <div className="cp-stack-fill">
          <h3 className="cp-h3" style={{ marginTop: 0 }}>
            Chúng tôi khác biệt
          </h3>
          <ul className="cp-check" style={{ flex: 1 }}>
            <li>Bắt đầu từ bottleneck vận hành thực tế</li>
            <li>CRM và POS thuê theo kỳ — lõi doanh thu</li>
            <li>AI Care / Ops gắn CRM khi cần tăng trưởng</li>
            <li>Website và gia công phần mềm nhận làm thêm</li>
            <li>
              Bàn giao source với gói{" "}
              <strong>gia công phần mềm / Outsourcing</strong>
            </li>
            <li>SaaS: quyền dùng theo kỳ — không bàn giao source nền tảng</li>
          </ul>
          <div className="cp-stat-row">
            <div className="cp-stat">
              <span className="cp-stat__n">CRM</span>
              <span className="cp-stat__l">Dịch vụ · lịch · khách</span>
            </div>
            <div className="cp-stat">
              <span className="cp-stat__n">POS</span>
              <span className="cp-stat__l">Quầy · kho · hóa đơn</span>
            </div>
            <div className="cp-stat">
              <span className="cp-stat__n">+</span>
              <span className="cp-stat__l">Web · gia công</span>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function ValuesPage() {
  return (
    <PageShell page={4} title="2. Châm ngôn & Giá trị cốt lõi" titleId="cp-values">
      <blockquote className="cp-quote" style={{ marginBottom: 8, fontSize: "10pt", flexShrink: 0 }}>
        “Không bán thứ Dolphin có. Chỉ cung cấp thứ khách hàng cần – và thứ đó
        phải giúp tăng khách, tăng doanh thu.”
      </blockquote>

      <div className="cp-grid-3" style={{ flexShrink: 0 }}>
        <div className="cp-card cp-card--soft">
          <h4 className="cp-card__title">Problem-first</h4>
          <p className="cp-card__body">
            Bắt đầu từ chỗ đang nghẽn thật — lịch rải, khách trôi, follow thủ
            công — không từ danh sách tính năng.
          </p>
        </div>
        <div className="cp-card cp-card--soft">
          <h4 className="cp-card__title">Tăng trưởng thực</h4>
          <p className="cp-card__body">
            Đo bằng khách mới và doanh thu tăng thêm. Không đo bằng slide đẹp.
          </p>
        </div>
        <div className="cp-card cp-card--soft">
          <h4 className="cp-card__title">Không khóa khách (outsource)</h4>
          <p className="cp-card__body">
            Gói gia công phần mềm / Outsourcing: bàn giao source code + tài liệu
            đầy đủ. SaaS thuê bao: quyền sử dụng theo kỳ — không bàn giao source
            nền tảng.
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
            quyết bài toán cụ thể.
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
      body: "Lịch hẹn dày, khách quay lại, chăm sóc sau dịch vụ.",
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
            <strong>CRM:</strong> spa · salon · nail · clinic · giáo dục · dịch
            vụ khác.
            <br />
            <strong>POS:</strong> cafe · trà sữa · F&amp;B · pet shop · fashion ·
            cửa hàng bán hàng.
          </p>
          <p className="cp-p" style={{ margin: 0, fontSize: "9pt" }}>
            <strong>Khách lý tưởng:</strong> muốn hệ thống thuê bao chạy ngay,
            không cần đội IT phức tạp — quan tâm tăng khách + doanh thu.
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
                  <strong>Giải pháp lõi (thuê bao)</strong>
                </td>
                <td>CRM · Dolphin POS</td>
                <td>
                  CRM: khách · lịch · follow · POS: quầy · kho · hóa đơn · kênh
                  bán
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Tăng trưởng trên CRM</strong>
                </td>
                <td>AI Care / Ops / Intel</td>
                <td>Chăm kênh · thao tác CRM · workflow</td>
              </tr>
              <tr>
                <td>
                  <strong>Dịch vụ bổ sung</strong>
                </td>
                <td>Website / Landing</td>
                <td>Hiện diện số — combo hoặc thuê làm riêng</td>
              </tr>
              <tr>
                <td>
                  <strong>Dịch vụ bổ sung</strong>
                </td>
                <td>Gia công phần mềm / Outsourcing</td>
                <td>Source + tài liệu · giá phạm vi rõ</td>
              </tr>
            </tbody>
          </table>
          <p className="cp-p" style={{ margin: 0, fontSize: "9.5pt" }}>
            <strong>Lõi:</strong> thuê <strong>CRM</strong> hoặc{" "}
            <strong>POS</strong> theo kỳ. <strong>AI</strong> gắn CRM khi cần.{" "}
            <strong>Website và gia công phần mềm</strong> nhận làm thêm — không
            thay sản phẩm thuê bao chính.
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

function CrmPosPage() {
  const crmMonthly =
    SAAS_MONTHLY.find((r) => r.product === "CRM")?.price ?? 500_000;
  const posPopular =
    POS_PLANS.find((p) => p.popular) ?? POS_PLANS[1] ?? POS_PLANS[0];

  return (
    <PageShell
      page={7}
      title="5. Sản phẩm lõi: CRM & POS (thuê bao)"
      titleId="cp-crm-pos"
    >
      <p className="cp-p" style={{ marginBottom: 8, fontSize: "9pt" }}>
        Hai dòng thuê bao chính — <strong>không gộp ICP</strong>. Chọn theo cách
        anh chị kiếm tiền: bán dịch vụ (lịch · khách) hay bán hàng (quầy · kho).
      </p>
      <div className="cp-grid-2 cp-split--fill">
        <div className="cp-card cp-card--fill">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath(IMG.crm)}
            alt="Minh họa CRM vận hành dịch vụ"
            className="cp-media cp-media--card-hero"
          />
          <h3 className="cp-h3" style={{ marginTop: 0 }}>
            CRM — doanh nghiệp dịch vụ
          </h3>
          <ul className="cp-check" style={{ flex: 1 }}>
            <li>Khách · lịch · follow-up tập trung một chỗ</li>
            <li>Giảm Excel / Zalo rời cho spa, salon, clinic, giáo dục…</li>
            <li>Mở rộng Care / Ops / Intelligence trên cùng dữ liệu</li>
          </ul>
          <div
            className="cp-box cp-box--accent"
            style={{ marginTop: 8, padding: "8px 10px" }}
          >
            <p className="cp-p" style={{ margin: 0, fontSize: "8.5pt" }}>
              Thuê theo kỳ — niêm yết từ {formatVnd(crmMonthly)}/tháng. Không bàn
              giao source nền tảng. Combo &amp; web: trang 13.
            </p>
          </div>
        </div>

        <div className="cp-card cp-card--fill">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath(IMG.tech)}
            alt="Minh họa Dolphin POS cửa hàng"
            className="cp-media cp-media--card-hero"
          />
          <h3 className="cp-h3" style={{ marginTop: 0 }}>
            Dolphin POS — cửa hàng bán hàng
          </h3>
          <ul className="cp-check" style={{ flex: 1 }}>
            <li>Hóa đơn · quầy · tồn kho · ca · kênh bán</li>
            <li>ICP: cafe, trà sữa, F&amp;B, pet, fashion, shop bán hàng</li>
            <li>Ba gói theo năm: Cơ Bản · Chuyên nghiệp · Toàn Diện</li>
          </ul>
          <div
            className="cp-box cp-box--accent"
            style={{ marginTop: 8, padding: "8px 10px" }}
          >
            <p className="cp-p" style={{ margin: 0, fontSize: "8.5pt" }}>
              Thuê theo năm — gói phổ biến{" "}
              <strong>{posPopular?.name}</strong> từ{" "}
              {formatVnd(posPopular?.priceYear ?? 0)}
              /năm. Runtime app: theo lộ trình (bảng giá đã công bố để tư vấn).
              Chi tiết:{" "}
              <a href="https://dolphin-software.io.vn/chinh-sach-gia-dolphin-2026/#pos">
                chính sách giá POS
              </a>
              .
            </p>
          </div>
        </div>
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
            <strong>Chatbot AI</strong> chăm sóc khách trên website, Zalo và
            Messenger. Trả lời đúng nghiệp vụ, đặt lịch, ghi lead, gửi insight
            cuối ngày cho admin. Không phải chatbot kịch bản cứng.
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
            <strong>Chatbox AI trên CRM</strong>. Anh chị nói việc cần làm, hệ
            thống chọn đúng tool và mở giao diện (booking, khách, báo cáo). Việc
            nhạy cảm thì người duyệt trước khi chạy.
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
            <strong>Agent / workflow AI</strong> (add-on). Điều phối nhiều bước
            nghiệp vụ, gắn action và human checkpoint. Không phải chatbot kênh
            khách — đó là Dolphin Care.
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
    <PageShell
      page={11}
      title="9. Website & gia công phần mềm (bổ sung)"
      titleId="cp-web"
    >
      <p className="cp-p" style={{ marginBottom: 8, fontSize: "9pt" }}>
        Không phải sản phẩm thuê bao chính. Dolphin <strong>vẫn nhận làm</strong>{" "}
        website và gia công phần mềm theo yêu cầu khi bài toán cần — song song
        hoặc sau khi đã có CRM / POS.
      </p>
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
          <div
            className="cp-box cp-box--accent"
            style={{ marginTop: 8, padding: "8px 10px" }}
          >
            <p className="cp-p" style={{ margin: 0, fontSize: "8.5pt" }}>
              Thuê làm riêng khi cần mặt tiền online; hoặc nhận Website trong
              combo CRM + Care (từ 6 tháng).
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
            Gia công phần mềm / Outsourcing
          </h3>
          <ul className="cp-check" style={{ flex: 1 }}>
            <li>Phạm vi: 10 – 100 triệu</li>
            <li>BH 3 tháng sau nghiệm thu</li>
            <li>
              <strong>Bàn giao source code + tài liệu đầy đủ</strong>
            </li>
            <li>Không khóa hệ thống khách (outsource)</li>
          </ul>
          <div
            className="cp-box cp-box--accent"
            style={{ marginTop: 8, padding: "8px 10px" }}
          >
            <p className="cp-p" style={{ margin: 0, fontSize: "8.5pt" }}>
              <strong>IP:</strong> Chỉ gói gia công phần mềm / Outsourcing bàn
              giao source. SaaS CRM / POS / Care / Ops thuê bao không gồm source
              nền tảng.
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

function PricingCrmPage() {
  return (
    <PageShell
      page={13}
      title="11. Chính sách giá CRM (2026)"
      titleId="cp-price-crm"
    >
      <div className="cp-stack-fill" style={{ justifyContent: "flex-start" }}>
        <p className="cp-p" style={{ marginBottom: 8, fontSize: "9pt" }}>
          Combo <strong>CRM + AI</strong> thanh toán trước theo kỳ. SaaS = quyền
          dùng trong hạn gói (không bàn giao source nền tảng). Giá POS và bảo
          hành: trang 14–15.
        </p>
        <div style={{ width: "100%" }}>
          <table className="cp-table">
            <thead>
              <tr>
                <th>Gói CRM / AI</th>
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
        <p className="cp-p" style={{ marginTop: 10, marginBottom: 0, fontSize: "8.5pt" }}>
          Chi tiết đầy đủ:{" "}
          <a href="https://dolphin-software.io.vn/chinh-sach-gia-dolphin-2026/">
            chính sách giá CRM · AI 2026
          </a>
          .
        </p>
      </div>
    </PageShell>
  );
}

function PricingPosPage() {
  return (
    <PageShell
      page={14}
      title="12. Chính sách giá POS (2026)"
      titleId="cp-price-pos"
    >
      <div className="cp-stack-fill" style={{ justifyContent: "flex-start" }}>
        <p className="cp-p" style={{ marginBottom: 8, fontSize: "9pt" }}>
          <strong>Dolphin POS</strong> — {POS_POLICY_META.lead} Thanh toán{" "}
          {POS_POLICY_META.billingYearLabel.toLowerCase()}.{" "}
          {POS_POLICY_META.statusNote}
        </p>
        <div className="cp-grid-3 cp-pos-plans">
          {POS_PLANS.map((plan) => {
            const features = plan.includesLine
              ? [plan.includesLine, ...plan.features]
              : [...plan.features];
            return (
              <div
                key={plan.id}
                className={
                  plan.popular
                    ? "cp-card cp-card--fill cp-pos-plan cp-pos-plan--popular"
                    : "cp-card cp-card--fill cp-pos-plan"
                }
              >
                <div className="cp-pos-plan__head">
                  <h3 className="cp-h3" style={{ margin: 0 }}>
                    {plan.name}
                  </h3>
                  {plan.badge ? (
                    <span className="cp-pos-plan__badge">{plan.badge}</span>
                  ) : null}
                </div>
                <p className="cp-pos-plan__audience">{plan.audience}</p>
                <p className="cp-pos-plan__price">
                  {formatVnd(plan.priceYear)}
                  <span> / năm</span>
                </p>
                <p className="cp-pos-plan__metric">
                  {POS_POLICY_META.billingYearLabel} · thanh toán trước
                </p>
                <ul className="cp-check cp-pos-plan__features">
                  {features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <p
          className="cp-p"
          style={{ marginTop: 8, marginBottom: 0, fontSize: "8.5pt" }}
        >
          Chi tiết / ngành:{" "}
          <a href="https://dolphin-software.io.vn/chinh-sach-gia-dolphin-2026/#pos">
            chính sách giá POS trên website
          </a>
          . Bảo hành &amp; IP: trang 15.
        </p>
      </div>
    </PageShell>
  );
}

function WarrantyPage() {
  return (
    <PageShell
      page={15}
      title="13. Chính sách bảo hành & IP"
      titleId="cp-warranty"
    >
      <div className="cp-stack-fill" style={{ justifyContent: "center" }}>
        <p className="cp-p" style={{ marginBottom: 10, fontSize: "9pt" }}>
          Phạm vi bảo hành theo loại sản phẩm. SaaS = quyền dùng trong hạn gói;
          gia công / website one-time theo nghiệm thu.
        </p>
        <ul className="cp-check">
          <li>
            Website: <strong>36 tháng</strong> BH kỹ thuật
          </li>
          <li>CRM · POS · AI (SaaS): trong hạn gói đã thanh toán</li>
          <li>Outsource / gia công phần mềm: 3 tháng sau UAT</li>
          <li>
            <strong>Bàn giao source</strong> chỉ với gói gia công phần mềm /
            Outsourcing (và website one-time trong phạm vi đã nghiệm thu)
          </li>
          <li>
            SaaS CRM / POS / Care / Ops: <strong>không</strong> bàn giao source
            nền tảng
          </li>
        </ul>
        <p className="cp-p" style={{ marginTop: 12, marginBottom: 0, fontSize: "8.5pt" }}>
          Chi tiết SLA / Maintenance:{" "}
          <a href="https://dolphin-software.io.vn/chinh-sach-bao-hanh-ho-tro-2026/">
            chính sách bảo hành &amp; hỗ trợ 2026
          </a>
          .
        </p>
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
    <PageShell page={16} title="14. Case study thực tế" titleId="cp-cases">
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
    <PageShell page={17} title="15. Đội ngũ & Cam kết" titleId="cp-team">
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
          <li>
            Outsource / gia công phần mềm: bàn giao source + tài liệu đầy đủ
          </li>
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

function ContactPage({
  contactPhone = PROFILE_DEFAULT_PHONE_DISPLAY,
}: ProfilePageProps = {}) {
  return (
    <PageShell page={18} title="16. Liên hệ" titleId="cp-contact">
      <div className="cp-split cp-split--fill">
        <div className="cp-stack-fill">
          <p className="cp-p" style={{ fontSize: "9.5pt", flexShrink: 0 }}>
            Cho chúng tôi biết bottleneck hiện tại — chỉ đề xuất những gì giúp
            tăng khách, tăng doanh thu.
          </p>
          <div className="cp-contact" style={{ marginTop: 0, flex: 1 }}>
            <h3>Dolphin Software</h3>
            <p>
              Địa chỉ: 2 Hồng Hà, Tân Sơn Hòa, Hồ Chí Minh, Việt Nam
              <br />
              Hotline / Zalo: <strong>{contactPhone}</strong>
              <br />
              Website:{" "}
              <a href="https://dolphin-software.io.vn">
                https://dolphin-software.io.vn
              </a>
            </p>
            <p className="cp-cta">
              Chat Zalo để tư vấn CRM, POS hoặc dịch vụ web / gia công phần mềm
              phù hợp bài toán của anh chị.
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

export const PROFILE_PAGES: Array<
  (props?: ProfilePageProps) => ReactNode
> = [
  CoverPage,
  TocPage,
  IntroPage,
  ValuesPage,
  AudiencePage,
  ModelPage,
  CrmPosPage,
  CarePage,
  OpsPage,
  IntelligencePage,
  WebOutsourcePage,
  ProcessPage,
  PricingCrmPage,
  PricingPosPage,
  WarrantyPage,
  CasesPage,
  TeamPage,
  ContactPage,
];
