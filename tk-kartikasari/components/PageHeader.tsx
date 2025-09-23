import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
  actions?: ReactNode;
};

function cx(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  className,
  descriptionClassName,
  actions,
}: PageHeaderProps) {
  return (
    <header className={cx("space-y-3", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{eyebrow}</p>
          <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
          {description ? (
            <p className={descriptionClassName ?? "max-w-2xl text-text-muted"}>{description}</p>
          ) : null}
        </div>
        {actions ? (
          <div className="flex flex-col items-start gap-2 sm:items-end">{actions}</div>
        ) : null}
      </div>
    </header>
  );
}
