import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import PageSection from "./PageSection";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  eyebrowClassName?: string;
  className?: string;
  children?: ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
  eyebrowClassName,
  className,
  children,
}: PageHeaderProps) {
  return (
    <PageSection padding="tight">
      <header
        className={cn(
          "space-y-5",
          align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
          className,
        )}
      >
        {eyebrow ? (
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.28em] text-secondary",
              eyebrowClassName,
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-balance text-4xl font-semibold text-text sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="text-pretty text-base leading-relaxed text-text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </header>
    </PageSection>
  );
}
