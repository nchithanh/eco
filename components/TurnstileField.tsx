"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Script from "next/script";
import {
  getTurnstileSiteKey,
  getTurnstileToken,
  resetTurnstile,
  TURNSTILE_SCRIPT_SRC,
} from "@/lib/turnstile";

export type TurnstileFieldHandle = {
  getToken: () => string;
  reset: () => void;
};

type Props = {
  className?: string;
  /** Re-render when this changes (e.g. modal open). Default always mount. */
  active?: boolean;
};

/**
 * Compact Turnstile widget for lead forms. Parent reads token via ref before submitLead.
 */
export const TurnstileField = forwardRef<TurnstileFieldHandle, Props>(
  function TurnstileField({ className, active = true }, ref) {
    const hostRef = useRef<HTMLDivElement | null>(null);
    const widgetIdRef = useRef<string | null>(null);
    const [scriptReady, setScriptReady] = useState(false);

    useImperativeHandle(ref, () => ({
      getToken: () => getTurnstileToken(widgetIdRef.current),
      reset: () => resetTurnstile(widgetIdRef.current),
    }));

    useEffect(() => {
      if (typeof window !== "undefined" && window.turnstile) {
        setScriptReady(true);
      }
    }, []);

    useEffect(() => {
      if (!active || !scriptReady) return;
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
        size: "flexible",
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
    }, [active, scriptReady]);

    return (
      <>
        {active ? (
          <Script
            src={`${TURNSTILE_SCRIPT_SRC}?render=explicit`}
            strategy="afterInteractive"
            onLoad={() => setScriptReady(true)}
          />
        ) : null}
        <div
          ref={hostRef}
          className={
            className ??
            "cf-turnstile min-h-[65px] w-full overflow-hidden rounded-[10px]"
          }
          aria-label="Cloudflare Turnstile"
        />
      </>
    );
  },
);
