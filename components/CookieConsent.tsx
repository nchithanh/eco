"use client";

import { useEffect, useState } from "react";
import {
  persistCookieConsent,
  readStoredCookieConsent,
  type CookieConsentValue,
} from "@/lib/cookie-consent";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function CookieConsent() {
  const { t } = useLocale();
  const c = t.cookie;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "test") return;

    const existing = readStoredCookieConsent();
    if (existing) {
      persistCookieConsent(existing);
      setVisible(false);
      return;
    }
    setVisible(true);
  }, []);

  const choose = (value: CookieConsentValue) => {
    persistCookieConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="kuct-cookie-title"
      aria-describedby="kuct-cookie-body"
      className="kuct-cookie-root pointer-events-none fixed inset-x-0 bottom-0 z-[130] px-6"
    >
      <div className="kuct-cookie-banner pointer-events-auto relative mx-auto w-full max-w-7xl rounded-t-[10px] px-4 py-5 sm:px-6 sm:py-6">
        <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="min-w-0 flex-1">
            <p
              id="kuct-cookie-title"
              className="font-display text-base font-semibold text-[var(--kuct-text)] sm:text-lg"
            >
              {c.title}
            </p>
            <p
              id="kuct-cookie-body"
              className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]"
            >
              {c.body}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <button
              type="button"
              className="kuct-btn-primary rounded-[10px] px-4 py-2.5 text-sm font-semibold"
              onClick={() => choose("accepted")}
            >
              {c.accept}
            </button>
            <button
              type="button"
              className="kuct-btn-ghost"
              onClick={() => choose("declined")}
            >
              {c.decline}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
