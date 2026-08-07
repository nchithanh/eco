"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
 SWITCHER_THEME_IDS,
 THEME_SWATCH,
 useTheme,
 type ThemeId,
} from "@/lib/theme";

/** Set to `true` when theme switcher should be visible again. */
const THEME_SWITCHER_ENABLED = false;

export function ThemeSwitcher() {
 if (!THEME_SWITCHER_ENABLED) return null;

 const { t } = useLocale();
 const { theme, setTheme } = useTheme();
 const [open, setOpen] = useState(false);
 const rootRef = useRef<HTMLDivElement>(null);
 const listId = useId();
 const labels = t.theme;

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

 const choose = (id: ThemeId) => {
 setTheme(id);
 setOpen(false);
 };

 return (
 <div ref={rootRef} className="relative">
 <button
 type="button"
 className="inline-flex items-center gap-1.5 rounded-[10px] border-white/60 bg-white/40 px-2.5 py-1 text-xs font-semibold tracking-wide text-[var(--kuct-text)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-[0_8px_18px_rgb(26_21_32/0.07)]"
 aria-label={labels.aria}
 aria-haspopup="listbox"
 aria-expanded={open}
 aria-controls={listId}
 onClick={() => setOpen((value) => !value)}
 >
 <span
 aria-hidden
 className="size-3 rounded-full ring-1 ring-black/10"
 style={{ background: THEME_SWATCH[theme] }}
 />
 <span className="hidden sm:inline">{labels[theme]}</span>
 <span aria-hidden className="text-[var(--kuct-muted)]">
 {open ? "▴" : "▾"}
 </span>
 </button>

 {open && (
 <ul
 id={listId}
 role="listbox"
 aria-label={labels.aria}
 className="absolute right-0 z-50 mt-2 min-w-[11rem] overflow-hidden rounded-lg border-white/70 bg-white/95 py-1 shadow-[0_12px_30px_rgb(26_21_32/0.10)] backdrop-blur-xl"
 >
 {SWITCHER_THEME_IDS.map((id) => (
 <li key={id} role="option" aria-selected={theme === id}>
 <button
 type="button"
 className={
 theme === id
 ? "kuct-menu-item flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs font-semibold text-[var(--kuct-accent)]"
 : "kuct-menu-item flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs font-semibold text-[var(--kuct-muted)]"
 }
 onClick={() => choose(id)}
 >
 <span
 aria-hidden
 className="size-3.5 rounded-full ring-1 ring-black/10"
 style={{ background: THEME_SWATCH[id] }}
 />
 <span className="flex-1">{labels[id]}</span>
 </button>
 </li>
 ))}
 </ul>
 )}
 </div>
 );
}
