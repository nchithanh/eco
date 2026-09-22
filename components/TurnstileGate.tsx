"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Script from "next/script";
import {
  getTurnstileSiteKey,
  resetTurnstile,
  TURNSTILE_SCRIPT_SRC,
} from "@/lib/turnstile";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type GateProps = {
  open: boolean;
  onVerified: (token: string) => void;
  onCancel: () => void;
};

/**
 * Full-viewport dim layer + centered Turnstile (CF challenge style).
 */
export function TurnstileGate({ open, onVerified, onCancel }: GateProps) {
  const { t } = useLocale();
  const copy = t.turnstileGate;
  const hostRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const onVerifiedRef = useRef(onVerified);
  onVerifiedRef.current = onVerified;

  useEffect(() => {
    if (typeof window !== "undefined" && window.turnstile) {
      setScriptReady(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onCancel]);

  useEffect(() => {
    if (!open || !scriptReady) return;
    const host = hostRef.current;
    const api = typeof window !== "undefined" ? window.turnstile : undefined;
    if (!host || !api) return;

    if (widgetIdRef.current) {
      try {
        api.remove(widgetIdRef.current);
      } catch {
        /* ignore */
      }
      widgetIdRef.current = null;
    }
    host.replaceChildren();
    widgetIdRef.current = api.render(host, {
      sitekey: getTurnstileSiteKey(),
      theme: "light",
      size: "normal",
      callback: (token: string) => {
        const trimmed = (token || "").trim();
        if (!trimmed) return;
        resetTurnstile(widgetIdRef.current);
        onVerifiedRef.current(trimmed);
      },
      "expired-callback": () => {
        resetTurnstile(widgetIdRef.current);
      },
      "error-callback": () => {
        resetTurnstile(widgetIdRef.current);
      },
    });

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          /* ignore */
        }
        widgetIdRef.current = null;
      }
    };
  }, [open, scriptReady]);

  return (
    <>
      <Script
        src={`${TURNSTILE_SCRIPT_SRC}?render=explicit`}
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
      {open ? (
        <div
          className="kuct-turnstile-gate"
          role="dialog"
          aria-modal="true"
          aria-labelledby="kuct-turnstile-gate-title"
        >
          <button
            type="button"
            className="kuct-turnstile-gate__backdrop"
            aria-label={copy.cancel}
            onClick={onCancel}
          />
          <div className="kuct-turnstile-gate__panel">
            <h2
              id="kuct-turnstile-gate-title"
              className="kuct-turnstile-gate__title"
            >
              {copy.title}
            </h2>
            <p className="kuct-turnstile-gate__hint">{copy.hint}</p>
            <div
              ref={hostRef}
              className="kuct-turnstile-gate__widget"
              aria-label="Cloudflare Turnstile"
            />
            <button
              type="button"
              className="kuct-turnstile-gate__cancel"
              onClick={onCancel}
            >
              {copy.cancel}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

type GateApi = {
  /** Opens the overlay; resolves with token or null if cancelled. */
  requestToken: () => Promise<string | null>;
  gate: ReactNode;
};

export function useTurnstileGate(): GateApi {
  const [open, setOpen] = useState(false);
  const resolverRef = useRef<((token: string | null) => void) | null>(null);

  const settle = useCallback((token: string | null) => {
    setOpen(false);
    const resolve = resolverRef.current;
    resolverRef.current = null;
    resolve?.(token);
  }, []);

  const requestToken = useCallback(() => {
    return new Promise<string | null>((resolve) => {
      resolverRef.current = resolve;
      setOpen(true);
    });
  }, []);

  const onVerified = useCallback(
    (token: string) => settle(token),
    [settle],
  );

  const onCancel = useCallback(() => settle(null), [settle]);

  return {
    requestToken,
    gate: (
      <TurnstileGate open={open} onVerified={onVerified} onCancel={onCancel} />
    ),
  };
}
