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
  DEMO_GATE_PASSWORD,
  DEMO_GATE_STORAGE_KEY,
} from "@/lib/demos/catalog";

type DemoGateProps = {
  children: ReactNode;
};

export function DemoGate({ children }: DemoGateProps) {
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const ok = sessionStorage.getItem(DEMO_GATE_STORAGE_KEY) === "1";
      setUnlocked(ok);
    } catch {
      setUnlocked(false);
    }
    setReady(true);
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password.trim() === DEMO_GATE_PASSWORD) {
      try {
        sessionStorage.setItem(DEMO_GATE_STORAGE_KEY, "1");
      } catch {
        /* ignore quota / private mode */
      }
      setUnlocked(true);
      setError("");
      return;
    }
    setError("Mật khẩu không đúng.");
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
            Khu vực demo khách hàng — không public SEO. Gate phía trình duyệt
            (session), không thay thế bảo mật server.
          </p>
          <form className="demo-gate__form" onSubmit={onSubmit}>
            <label className="demo-gate__label">
              <span>Password</span>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {error ? (
              <p className="demo-gate__error" role="alert">
                {error}
              </p>
            ) : null}
            <button type="submit" className="demo-gate__submit">
              Mở demo
            </button>
          </form>
          <p className="demo-gate__back">
            <Link href={assetPath("/")}>← Về site Dolphin</Link>
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
