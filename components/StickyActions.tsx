'use client';

import CTAButton from '@/components/CTAButton';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function StickyActions() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden pb-[calc(env(safe-area-inset-bottom,0)+1.5rem)] md:block">
      <div className="container-custom pointer-events-auto">
        <div className="flex flex-col gap-4 rounded-[1.75rem] border border-border/70 bg-surface/95 px-5 py-5 shadow-soft backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold text-primary">Siap membahas pendaftaran?</p>
            <p className="text-base text-text-muted sm:text-lg">
              Tanyakan kuota, kelompok yang cocok, dan langkah daftar. Jika perlu, kunjungan bisa dijadwalkan setelah
              itu.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton ctaKey="generalInquiry" className="w-full sm:w-auto" />
            <Button asChild variant="outline" fullWidth className="sm:w-auto">
              <Link href="/biaya">Lihat biaya awal</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
