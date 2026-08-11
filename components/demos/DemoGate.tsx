"use client";

import {
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import { assetPath } from "@/lib/asset";
import {
  DEMO_GATE_STORAGE_KEY,
  fetchDemoGateStatus,
  unlockDemoGate,
} from "@/lib/demos/gate-api";

type DemoGateProps = {
  children: ReactNode;
};

export function DemoGate({ children }: DemoGateProps) {
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const remote = await fetchDemoGateStatus();
      if (cancelled) return;
      if (remote) {
        try {
          sessionStorage.setItem(DEMO_GATE_STORAGE_KEY, "1");
        } catch {
          /* ignore */
        }
        setUnlocked(true);
      }
      setReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setPending(true);
    setError("");
    const result = await unlockDemoGate(password);
    setPending(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    try {
      sessionStorage.setItem(DEMO_GATE_STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setUnlocked(true);
    // Reload so Worker-proxied HTML requests send the new cookie.
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  if (!ready) {
    return (
      <div className="demo-gate" aria-busy="true">
        <p className="demo-gate__loading">Đang tải…</p>
      </div>
    );
  }

  if (!unlocked) {
    return (
      <div className="demo-gate">
        <div className="demo-gate__card">
          <p className="demo-gate__eyebrow">Dolphin Software · Demo vault</p>
          <h1 className="demo-gate__title">Nhập mật khẩu để xem demo</h1>
          <p className="demo-gate__lead">
            Vault được bảo vệ trên Cloudflare Worker. Mật khẩu không nằm trong
            mã trang tĩnh.
          </p>
          <form className="demo-gate__form" onSubmit={onSubmit}>
            <label className="demo-gate__label">
              Mật khẩu
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                required
              />
            </label>
            {error ? (
              <p className="demo-gate__error" role="alert">
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              className="demo-gate__submit"
              disabled={pending}
            >
              {pending ? "Đang mở…" : "Mở vault"}
            </button>
          </form>
          <p className="demo-gate__back">
            <Link href={assetPath("/")}>← Về trang chủ</Link>
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
