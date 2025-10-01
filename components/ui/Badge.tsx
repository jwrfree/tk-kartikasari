import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full font-semibold tracking-wide",
  {
    variants: {
      tone: {
        primary: "bg-primary/15 text-primary",
        secondary: "bg-secondary/15 text-secondary",
        surface: "border border-white/60 bg-white/60 text-secondary backdrop-blur-sm backdrop-saturate-150",
        muted: "bg-border/40 text-text",
        outline: "border border-border/60 bg-transparent text-text",
      },
      size: {
        sm: "px-3 py-1 text-[0.65rem]",
        md: "px-4 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      tone: "primary",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends ComponentPropsWithoutRef<"span">,
    VariantProps<typeof badgeVariants> {
  leadingVisual?: ReactNode;
}

export function Badge({
  className,
  tone,
  size,
  leadingVisual,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ tone, size }), className)} {...props}>
      {leadingVisual ? <span aria-hidden="true">{leadingVisual}</span> : null}
      {children}
    </span>
  );
}

export { badgeVariants };
