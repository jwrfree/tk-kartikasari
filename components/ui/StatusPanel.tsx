import type { ReactNode } from 'react';

import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

type StatusState = 'open' | 'closed' | 'waitlist';

type StatusPanelProps = {
  state: StatusState;
  title: string;
  description: ReactNode;
  action?: ReactNode;
  className?: string;
};

const stateMap: Record<StatusState, { label: string; className: string }> = {
  open: { label: 'Pendaftaran dibuka', className: 'bg-[#2d6a4f] text-white border-[#2d6a4f]' },
  closed: { label: 'Periode ditutup', className: 'bg-primary/10 text-primary border-primary/20' },
  waitlist: { label: 'Daftar tunggu aktif', className: 'bg-accent/15 text-foreground border-accent/30' },
};

export function StatusPanel({ state, title, description, action, className }: StatusPanelProps) {
  const status = stateMap[state];

  return (
    <section className={cn('rounded-[2rem] border border-border/70 bg-surface p-6 shadow-soft sm:p-8', className)}>
      <div className="space-y-4">
        <Badge className={status.className} tone="outline" size="sm">
          {status.label}
        </Badge>
        <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl">{title}</h2>
        <div className="max-w-3xl text-base leading-relaxed text-text-muted">{description}</div>
        {action ? <div className="pt-2">{action}</div> : null}
      </div>
    </section>
  );
}
