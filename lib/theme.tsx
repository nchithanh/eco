"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const THEME_IDS = [
  "violet",
  "ocean",
  "forest",
  "coral",
  "slate",
  "black",
] as const;

/** Themes exposed in the UI switcher. */
export const SWITCHER_THEME_IDS = ["violet", "slate"] as const;

export type ThemeId = (typeof THEME_IDS)[number];
export type SwitcherThemeId = (typeof SWITCHER_THEME_IDS)[number];

export const DEFAULT_THEME: ThemeId = "violet";
export const THEME_STORAGE_KEY = "kuct-theme";

export const THEME_SWATCH: Record<ThemeId, string> = {
  violet: "#7c3aed",
  ocean: "#0d9488",
  forest: "#3d8b6e",
  coral: "#e11d48",
  slate: "#3b82f6",
  black: "#18181b",
};

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function isThemeId(value: string | null): value is ThemeId {
  return (THEME_IDS as readonly string[]).includes(value ?? "");
}

export function isSwitcherThemeId(value: string | null): value is SwitcherThemeId {
  return (SWITCHER_THEME_IDS as readonly string[]).includes(value ?? "");
}

/** Resolve stored theme; non-switcher themes fall back to violet. */
export function resolveThemeId(value: string | null): ThemeId {
  if (isSwitcherThemeId(value)) return value;
  return DEFAULT_THEME;
}

function applyThemeAttr(theme: ThemeId) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
      const next = resolveThemeId(stored);
      setThemeState(next);
      applyThemeAttr(next);
      if (stored && stored !== next) {
        window.localStorage.setItem(THEME_STORAGE_KEY, next);
      }
      return;
    } catch {
      // ignore
    }
    applyThemeAttr(DEFAULT_THEME);
  }, []);

  useEffect(() => {
    applyThemeAttr(theme);
  }, [theme]);

  const setTheme = useCallback((next: ThemeId) => {
    const resolved = resolveThemeId(next);
    setThemeState(resolved);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, resolved);
    } catch {
      // ignore
    }
    applyThemeAttr(resolved);
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
