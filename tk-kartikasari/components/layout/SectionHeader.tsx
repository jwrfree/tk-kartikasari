import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: ReactNode;
  eyebrowVariant?: "primary" | "secondary" | "surface" | "muted";
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const eyebrowStyles: Record<NonNullable<SectionHeaderProps["eyebrowVariant"]>, string> = {
  primary: "bg-primary/15 text-primary",
  secondary: "bg-secondary/15 text-secondary",
  surface: "bg-white/80 text-secondary",
  muted: "bg-border/40 text-text",
};

export default function SectionHeader({
  eyebrow,
  eyebrowVariant = "primary",
  title,
  description,
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide",
            eyebrowStyles[eyebrowVariant],
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-balance text-3xl font-semibold text-text sm:text-4xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-pretty text-base text-text-muted sm:text-lg",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
