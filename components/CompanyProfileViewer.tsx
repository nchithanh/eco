"use client";

import { PROFILE_PAGES } from "@/components/company-profile/ProfileDocument";

export function CompanyProfileViewer() {
  return (
    <div className="cp-root">
      <header className="cp-toolbar cp-no-print">
        <div className="cp-toolbar__meta">
          <p className="cp-toolbar__title">Hồ sơ năng lực · 16 tờ ngắn</p>
          <p className="cp-toolbar__hint">
            Khổ 210×180mm · In PDF → “Save as PDF”
          </p>
        </div>
        <div className="cp-toolbar__actions">
          <button
            type="button"
            className="cp-btn"
            onClick={() => window.print()}
          >
            In PDF
          </button>
        </div>
      </header>

      <div className="cp-viewer">
        {PROFILE_PAGES.map((Page, i) => (
          <div key={i} className="cp-stage">
            <Page />
          </div>
        ))}
      </div>
    </div>
  );
}
