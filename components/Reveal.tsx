"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type Ref,
} from "react";
import { useInView, type UseInViewOptions } from "@/lib/useInView";

export type RevealVariant = "up" | "left" | "right" | "scale" | "title";

const VARIANT_CLASS: Record<RevealVariant, string> = {
  up: "kuct-reveal",
  left: "kuct-reveal kuct-reveal-left",
  right: "kuct-reveal kuct-reveal-right",
  scale: "kuct-reveal kuct-reveal-scale",
  title: "kuct-reveal kuct-reveal-title",
};

type RevealProps = {
  as?: ElementType;
  delay?: number;
  variant?: RevealVariant;
  /** Skip scroll-triggered hide in modals / embedded previews. */
  immediate?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  inViewOptions?: UseInViewOptions;
};

export function Reveal({
  as: Component = "div",
  delay = 0,
  variant = "up",
  immediate = false,
  className = "",
  style,
  children,
  inViewOptions,
  ...rest
}: RevealProps) {
  const { ref, inView } = useInView(inViewOptions);
  const visible = immediate || inView;
  const classes = [VARIANT_CLASS[variant], visible ? "is-inview" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      ref={ref as Ref<HTMLElement>}
      className={classes}
      style={
        {
          ...style,
          "--kuct-reveal-delay": `${delay}ms`,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Component>
  );
}
