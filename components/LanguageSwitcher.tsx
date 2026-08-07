"use client";

import { useEffect, useId, useRef, useState } from "react";
import { LOCALES, type Locale } from "@/lib/i18n/types";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = LOCALES.find((item) => item.code === locale) ?? LOCALES[0];

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const choose = (code: Locale) => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 px-1 py-1.5 text-[inherit] font-medium tracking-[-0.02em] text-[var(--kuct-text)] transition hover:text-[var(--kuct-accent)]"
        aria-label="Language"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{current.name}</span>
        <span aria-hidden className="text-[var(--kuct-text)]">
          {open ? "▴" : "▾"}
        </span>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Language"
          className="absolute right-0 z-50 mt-2 min-w-[11rem] overflow-hidden rounded-lg bg-white py-1 shadow-[0_12px_30px_rgb(26_21_32/0.1)]"
        >
          {LOCALES.map((item) => (
            <li key={item.code} role="option" aria-selected={locale === item.code}>
              <button
                type="button"
                className="flex w-full items-center px-3 py-2 text-left text-xs font-medium text-[var(--kuct-text)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.1)] hover:text-[var(--kuct-accent)]"
                onClick={() => choose(item.code)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
