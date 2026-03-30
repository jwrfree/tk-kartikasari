import Image from 'next/image';
import type { ReactNode } from 'react';

import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

type MediaBandProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
  className?: string;
};

export function MediaBand({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt = '',
  children,
  className,
}: MediaBandProps) {
  return (
    <div className={cn('relative overflow-hidden rounded-[2rem] border border-border/70 bg-surface', className)}>
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(197,106,74,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(215,164,65,0.16),transparent_26%)]"
        aria-hidden="true"
      />
      <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr,0.9fr] lg:p-10">
        <div className="space-y-5">
          {eyebrow ? (
            <Badge tone="surface" size="sm">
              {eyebrow}
            </Badge>
          ) : null}
          <h3 className="max-w-[12ch] text-balance text-3xl font-semibold sm:text-4xl">{title}</h3>
          {description ? (
            <div className="max-w-2xl text-base leading-relaxed text-text-muted">{description}</div>
          ) : null}
          {children}
        </div>
        <div className="relative min-h-[18rem] overflow-hidden rounded-[1.75rem] border border-border/60 bg-foreground">
          {imageSrc ? (
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,239,230,0.1),rgba(245,239,230,0)),radial-gradient(circle_at_top,rgba(215,164,65,0.24),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(197,106,74,0.3),transparent_28%)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Photo Slot</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/85">
              Area ini siap untuk foto suasana sekolah, kelas, atau kegiatan belajar ketika aset dokumentasi sudah
              tersedia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
