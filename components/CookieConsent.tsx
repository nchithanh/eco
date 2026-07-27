"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/** Stable key — do not version/bump on deploys (would force re-consent). */
const STORAGE_KEY = "kuct-cookie-consent";
const COOKIE_NAME = "kuct_cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 400; // ~13 months

type ConsentValue = "accepted" | "declined";

function isConsentValue(value: string | null | undefined): value is ConsentValue {
  return value === "accepted" || value === "declined";
}

function readCookieConsent(): ConsentValue | null {
  if (typeof document === "undefined") return null;
  try {
    const match = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${COOKIE_NAME}=`));
    if (!match) return null;
    const value = decodeURIComponent(match.split("=").slice(1).join("="));
    return isConsentValue(value) ? value : null;
  } catch {
    return null;
  }
}

function writeCookieConsent(value: ConsentValue) {
  try {
    const secure =
      typeof location !== "undefined" && location.protocol === "https:"
        ? "; Secure"
        : "";
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
  } catch {
    // ignore
  }
}

function readStoredConsent(): ConsentValue | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isConsentValue(stored)) return stored;
    // Legacy one-off values from earlier experiments
    if (stored === "true" || stored === "1" || stored === "yes") return "accepted";
    if (stored === "false" || stored === "0" || stored === "no") return "declined";
  } catch {
    // ignore quota / private mode
  }
  return readCookieConsent();
}

function persistConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // ignore quota / private mode
  }
  writeCookieConsent(value);
}

export function CookieConsent() {
  const { t } = useLocale();
  const c = t.cookie;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "test") return;

    const existing = readStoredConsent();
    if (existing) {
      // Re-sync both stores so a deploy/rebuild never clears a prior choice
      persistConsent(existing);
      setVisible(false);
      return;
    }
    setVisible(true);
  }, []);

  const choose = (value: ConsentValue) => {
    persistConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="kuct-cookie-title"
      aria-describedby="kuct-cookie-body"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[130] flex justify-center p-4 sm:p-6"
    >
      <div className="pointer-events-auto relative w-full max-w-6xl animate-kuct-fade rounded-2xl border border-white/70 bg-white/90 p-5 shadow-[0_1.25rem_3rem_rgba(139,92,246,0.18)] backdrop-blur-xl sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
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
              className="kuct-btn-primary rounded-full px-5 py-2.5 text-sm font-semibold"
              onClick={() => choose("accepted")}
            >
              {c.accept}
            </button>
            <button
              type="button"
              className="kuct-btn-ghost rounded-full px-5 py-2.5 text-sm font-medium"
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
