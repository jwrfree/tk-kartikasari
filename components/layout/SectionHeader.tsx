import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

type SectionHeaderProps = {
  eyebrow?: ReactNode;
  eyebrowVariant?: "primary" | "secondary" | "surface" | "muted";
  eyebrowLeadingVisual?: ReactNode;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export default function SectionHeader({
  eyebrow,
  eyebrowVariant = "primary",
  eyebrowLeadingVisual,
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
        <Badge
          tone={eyebrowVariant}
          size="md"
          leadingVisual={eyebrowLeadingVisual}
          className={cn("uppercase", align === "center" ? "mx-auto" : "")}
        >
          {eyebrow}
        </Badge>
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
