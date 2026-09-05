"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";

export type RevealVariant = "up" | "left" | "right" | "scale" | "title";

type RevealProps = {
  as?: ElementType;
  delay?: number;
  variant?: RevealVariant;
  /** Kept for API compatibility; reveal-on-scroll is disabled site-wide. */
  immediate?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  /** @deprecated No-op — scroll reveal disabled. */
  inViewOptions?: unknown;
};

/** Layout wrapper — scroll fade/slide is off; children render immediately. */
export function Reveal({
  as: Component = "div",
  className = "",
  style,
  children,
  delay: _delay,
  variant: _variant,
  immediate: _immediate,
  inViewOptions: _inViewOptions,
  ...rest
}: RevealProps) {
  return (
    <Component className={className || undefined} style={style} {...rest}>
      {children}
    </Component>
  );
}
