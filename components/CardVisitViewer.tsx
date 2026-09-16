"use client";

import { BRAND_LOGO_SRC } from "@/lib/brand-logo";
import { assetPath } from "@/lib/asset";
import { CONTACTS } from "@/lib/contacts";
import { SITE_URL } from "@/lib/seo";

const PHONE_DISPLAY = "0779 937 633";
const SITE_HOST = "dolphin-software.io.vn";

function IconPhone() {
  return (
    <svg className="cv-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
      />
    </svg>
  );
}

function IconWeb() {
  return (
    <svg className="cv-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.9 9h-3.2a15 15 0 0 0-1.3-5 8 8 0 0 1 4.5 5zM12 4c.9 0 2.2 1.8 2.9 5H9.1C9.8 5.8 11.1 4 12 4zM4.1 11h3.2a15 15 0 0 0 1.3 5 8 8 0 0 1-4.5-5zm3.2-2H4.1a8 8 0 0 1 4.5-5 15 15 0 0 0-1.3 5zM12 20c-.9 0-2.2-1.8-2.9-5h5.8c-.7 3.2-2 5-2.9 5zm2.9-7H9.1a13 13 0 0 1-.1-2h5.9a13 13 0 0 1-.1 2zm1.5 5a15 15 0 0 0 1.3-5h3.2a8 8 0 0 1-4.5 5z"
      />
    </svg>
  );
}

function IconPin() {
  return (
    <svg className="cv-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
      />
    </svg>
  );
}

export function CardVisitViewer() {
  return (
    <div className="cv-root">
      <header className="cv-toolbar cv-no-print">
        <div>
          <p className="cv-toolbar__title">Danh thiếp · Dolphin Software</p>
          <p className="cv-toolbar__hint">
            Khổ 90×54mm · In PDF → “Save as PDF” (mặt trước + mặt sau) · Gợi ý:
            Couche 300gsm cán mờ
          </p>
        </div>
        <button
          type="button"
          className="cv-btn"
          onClick={() => window.print()}
        >
          In PDF
        </button>
      </header>

      <div className="cv-viewer">
        <div className="cv-no-print">
          <p className="cv-label">Mặt trước</p>
        </div>
        <div className="cv-stage">
          <article
            className="cv-card cv-card--front"
            aria-label="Danh thiếp mặt trước"
          >
            <div className="cv-card__body">
              <div className="cv-front-top">
                <div className="cv-brand">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetPath(BRAND_LOGO_SRC)}
                    alt=""
                    className="cv-brand__logo"
                    width={36}
                    height={36}
                    aria-hidden
                  />
                  <div>
                    <p className="cv-person__name">
                      Nguyễn Chí Thành - Dolphin Software
                    </p>
                    <p className="cv-person__role">
                      Founder · Software Architect
                    </p>
                    <p className="cv-brand__tag">
                      Công nghệ vận hành cho SMB
                    </p>
                  </div>
                </div>
                <p className="cv-tagline">
                  Spa · Salon · Education · Clinic · Services
                  <span className="cv-tagline__indent">
                    Website · CRM · Vận hành · AI
                  </span>
                </p>
              </div>

              <div className="cv-front-bottom">
                <ul className="cv-contacts">
                  <li>
                    <IconPhone />
                    <a className="cv-contacts__value" href={CONTACTS.zalo}>
                      {PHONE_DISPLAY}
                    </a>
                  </li>
                  <li>
                    <IconWeb />
                    <a
                      className="cv-contacts__value cv-contacts__value--web"
                      href={SITE_URL}
                    >
                      {SITE_HOST}
                    </a>
                  </li>
                  <li>
                    <IconPin />
                    <span className="cv-contacts__value cv-contacts__value--muted">
                      Ho Chi Minh City, Vietnam
                    </span>
                  </li>
                </ul>
                <div className="cv-qr-block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetPath("/card-visit/qr-company-profile.svg")}
                    alt="Quét để xem Hồ sơ năng lực"
                    className="cv-qr"
                    width={64}
                    height={64}
                  />
                  <p className="cv-qr-label">Quét để xem Hồ sơ năng lực</p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="cv-no-print">
          <p className="cv-label">Mặt sau</p>
        </div>
        <div className="cv-stage">
          <article
            className="cv-card cv-card--back"
            aria-label="Danh thiếp mặt sau"
          >
            <div className="cv-card__body">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath(BRAND_LOGO_SRC)}
                alt=""
                className="cv-back-logo"
                width={56}
                height={56}
                aria-hidden
              />
              <p className="cv-back-brand">Dolphin Software</p>
              <p className="cv-back-quote">
                “Không ép doanh nghiệp theo phần mềm.
                <span className="cv-back-quote__indent">
                  Điều chỉnh công nghệ theo doanh nghiệp.”
                </span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
