import type { ReactNode } from "react";

import { CardSurface } from "@/components/ui/CardSurface";
import { Button } from "@/components/ui/Button";

type InfoCardProps = {
  title: string;
  children: ReactNode;
  actionLabel?: string;
  actionHref?: string;
};

export default function InfoCard({ title, children, actionLabel, actionHref }: InfoCardProps) {
  return (
    <CardSurface tone="soft" padding="md" className="space-y-3">
      <h3 className="text-lg font-semibold text-text">{title}</h3>
      <div className="text-sm text-text-muted">{children}</div>
      {actionHref ? (
        <Button asChild size="sm" variant="outline">
          <a href={actionHref} target="_blank" rel="noreferrer">
            {actionLabel}
          </a>
        </Button>
      ) : null}
    </CardSurface>
  );
}
