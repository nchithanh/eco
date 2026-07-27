"use client";

import { useEffect } from "react";
import { LazyImage } from "@/components/LazyImage";
import { assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { getWorkDetailUi } from "@/lib/works-details";

export const BILLIARD_DESIGN_SRC = "/design/billiard-homepage.jpg";

export function DesignViewerModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { locale } = useLocale();
  const d = getWorkDetailUi(locale);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-[#1e1b2e]/55 backdrop-blur-sm"
        aria-label={d.viewerClose}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={d.viewerLabel}
        className="relative z-10 flex max-h-[min(94svh,60rem)] w-full max-w-4xl flex-col overflow-hidden rounded-[1.5rem] border border-white/70 bg-[var(--kuct-bg)] shadow-[0_1.5rem_4rem_rgba(30,27,46,0.4)]"
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/50 bg-white/55 px-4 py-3 backdrop-blur-xl sm:px-5">
          <p className="min-w-0 truncate text-sm font-semibold text-[var(--kuct-text)]">
            {d.viewerLabel}
          </p>
          <button
            type="button"
            className="kuct-btn-ghost shrink-0 rounded-full px-4 py-2 text-sm font-medium"
            onClick={onClose}
          >
            {d.viewerClose}
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto bg-[#1e1b2e]/6">
          <div className="relative mx-auto w-full max-w-3xl">
            <LazyImage
              src={assetPath(BILLIARD_DESIGN_SRC)}
              alt={d.mockupAlt}
              width={1200}
              height={4800}
              className="h-auto w-full"
              sizes="(max-width: 896px) 100vw, 48rem"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
