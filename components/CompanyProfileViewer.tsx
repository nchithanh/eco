"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { PROFILE_PAGES } from "@/components/company-profile/ProfileDocument";
import { resolveProfileContactPhone } from "@/lib/company-profile/contact-phone";

function CompanyProfileViewerInner() {
  const searchParams = useSearchParams();
  const contactPhone = useMemo(
    () => resolveProfileContactPhone(searchParams.get("sdt")).display,
    [searchParams],
  );

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
            <Page contactPhone={contactPhone} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CompanyProfileViewer() {
  return (
    <Suspense
      fallback={
        <div className="cp-root">
          <div className="cp-viewer" aria-busy="true" />
        </div>
      }
    >
      <CompanyProfileViewerInner />
    </Suspense>
  );
}
