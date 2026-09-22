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

export type TurnstileGateVariant = "viewport" | "chat";

type GateProps = {
  open: boolean;
  /** Quiet refresh: run widget without visible chrome (after already verified this tab focus). */
  quiet?: boolean;
  variant?: TurnstileGateVariant;
  onVerified: (token: string) => void;
  onCancel: () => void;
};

/**
 * Turnstile with dim layer.
 * - viewport: full-page overlay (lead forms)
 * - chat: overlay scoped to the chat drawer; widget sits on the chat panel
 */
export function TurnstileGate({
  open,
  quiet = false,
  variant = "viewport",
  onVerified,
  onCancel,
}: GateProps) {
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
    if (!open || quiet) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, quiet, onCancel]);

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
      size: variant === "chat" ? "flexible" : "normal",
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
  }, [open, scriptReady, variant, quiet]);

  return (
    <>
      <Script
        src={`${TURNSTILE_SCRIPT_SRC}?render=explicit`}
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
      {open ? (
        <div
          className={`kuct-turnstile-gate kuct-turnstile-gate--${variant}${quiet ? " is-quiet" : ""}`}
          role={quiet ? undefined : "dialog"}
          aria-modal={quiet ? undefined : true}
          aria-labelledby={quiet ? undefined : "kuct-turnstile-gate-title"}
          aria-hidden={quiet || undefined}
        >
          {quiet ? (
            <div className="kuct-turnstile-gate__quiet-host" aria-hidden>
              <div ref={hostRef} className="kuct-turnstile-gate__widget" />
            </div>
          ) : (
            <>
              <button
                type="button"
                className="kuct-turnstile-gate__backdrop"
                aria-label={copy.cancel}
                onClick={onCancel}
              />
              <div className="kuct-turnstile-gate__panel">
                {variant === "viewport" ? (
                  <>
                    <h2
                      id="kuct-turnstile-gate-title"
                      className="kuct-turnstile-gate__title"
                    >
                      {copy.title}
                    </h2>
                    <p className="kuct-turnstile-gate__hint">{copy.hint}</p>
                  </>
                ) : (
                  <p
                    id="kuct-turnstile-gate-title"
                    className="kuct-turnstile-gate__hint"
                  >
                    {copy.hint}
                  </p>
                )}
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
            </>
          )}
        </div>
      ) : null}
    </>
  );
}

type GateOptions = {
  variant?: TurnstileGateVariant;
  /**
   * After a successful challenge, refresh tokens quietly until the browser tab
   * is hidden; next send after return shows the interactive overlay again.
   */
  untilTabHide?: boolean;
};

type GateApi = {
  requestToken: () => Promise<string | null>;
  /** True after a successful challenge in this browser-tab focus (until tab hide). */
  focusPassed: boolean;
  gate: ReactNode;
};

export function useTurnstileGate(options: GateOptions = {}): GateApi {
  const variant = options.variant ?? "viewport";
  const untilTabHide = options.untilTabHide ?? false;

  const [open, setOpen] = useState(false);
  const [quiet, setQuiet] = useState(false);
  const [focusPassed, setFocusPassed] = useState(false);
  const resolverRef = useRef<((token: string | null) => void) | null>(null);
  const focusPassedRef = useRef(false);

  useEffect(() => {
    if (!untilTabHide) return;
    const onVis = () => {
      if (document.visibilityState === "hidden") {
        focusPassedRef.current = false;
        setFocusPassed(false);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [untilTabHide]);

  const settle = useCallback((token: string | null) => {
    setOpen(false);
    setQuiet(false);
    const resolve = resolverRef.current;
    resolverRef.current = null;
    resolve?.(token);
  }, []);

  const requestToken = useCallback(() => {
    return new Promise<string | null>((resolve) => {
      resolverRef.current = resolve;
      const canQuiet = untilTabHide && focusPassedRef.current;
      setQuiet(canQuiet);
      setOpen(true);
      if (!canQuiet) return;
      /* If silent refresh stalls, show the interactive overlay on the chat. */
      window.setTimeout(() => {
        if (resolverRef.current !== resolve) return;
        setQuiet(false);
      }, 6_000);
    });
  }, [untilTabHide]);

  const onVerified = useCallback(
    (token: string) => {
      if (untilTabHide) {
        focusPassedRef.current = true;
        setFocusPassed(true);
      }
      settle(token);
    },
    [settle, untilTabHide],
  );

  const onCancel = useCallback(() => settle(null), [settle]);

  return {
    requestToken,
    focusPassed,
    gate: (
      <TurnstileGate
        open={open}
        quiet={quiet}
        variant={variant}
        onVerified={onVerified}
        onCancel={onCancel}
      />
    ),
  };
}
