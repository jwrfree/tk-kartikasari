import type { ComponentPropsWithoutRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const cardSurfaceVariants = cva(
  "rounded-3xl border shadow-soft backdrop-saturate-150",
  {
    variants: {
      tone: {
        translucent: "border-white/60 bg-white/60 backdrop-blur-lg",
        soft: "border-white/70 bg-white/70 backdrop-blur-xl",
        gradient: "border-white/70 bg-gradient-to-br from-primary/10 via-white to-secondary/10 backdrop-blur-xl",
        outline: "border-white/60 bg-transparent",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-7",
        xl: "p-8",
      },
    },
    defaultVariants: {
      tone: "translucent",
      padding: "md",
    },
  },
);

export type CardSurfaceProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof cardSurfaceVariants>;

export function CardSurface({ className, tone, padding, ...props }: CardSurfaceProps) {
  return <div className={cn(cardSurfaceVariants({ tone, padding }), className)} {...props} />;
}
