"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type Ref,
} from "react";
import { useInView, type UseInViewOptions } from "@/lib/useInView";

export type RevealVariant = "up" | "left" | "right" | "scale";

const VARIANT_CLASS: Record<RevealVariant, string> = {
  up: "kuct-reveal",
  left: "kuct-reveal kuct-reveal-left",
  right: "kuct-reveal kuct-reveal-right",
  scale: "kuct-reveal kuct-reveal-scale",
};

type RevealProps = {
  as?: ElementType;
  delay?: number;
  variant?: RevealVariant;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  inViewOptions?: UseInViewOptions;
};

export function Reveal({
  as: Component = "div",
  delay = 0,
  variant = "up",
  className = "",
  style,
  children,
  inViewOptions,
  ...rest
}: RevealProps) {
  const { ref, inView } = useInView(inViewOptions);
  const classes = [VARIANT_CLASS[variant], inView ? "is-inview" : "", className]
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
