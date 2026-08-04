"use client";

import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_COOKIE_NAME,
  COOKIE_CONSENT_STORAGE_KEY,
} from "@/lib/cookie-consent";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const STORAGE_KEY = COOKIE_CONSENT_STORAGE_KEY;
const COOKIE_NAME = COOKIE_CONSENT_COOKIE_NAME;
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
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[130]"
    >
      <div className="kuct-cookie-banner pointer-events-auto relative w-full rounded-t-2xl px-4 py-5 sm:px-6 sm:py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
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
