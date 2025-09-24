import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageSectionProps = {
  id?: string;
  as?: keyof JSX.IntrinsicElements;
  padding?: "default" | "tight" | "relaxed" | "none";
  container?: boolean;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

const paddingMap: Record<NonNullable<PageSectionProps["padding"]>, string> = {
  default: "py-16 sm:py-20",
  tight: "py-12 sm:py-16",
  relaxed: "py-20 sm:py-24",
  none: "",
};

export default function PageSection({
  id,
  as: Component = "section",
  padding = "default",
  container = true,
  className,
  containerClassName,
  children,
}: PageSectionProps) {
  const paddingClasses = paddingMap[padding];

  const content = container ? (
    <div className={cn("container", containerClassName)}>{children}</div>
  ) : (
    children
  );

  return (
    <Component id={id} className={cn(paddingClasses, className)}>
      {content}
    </Component>
  );
}
