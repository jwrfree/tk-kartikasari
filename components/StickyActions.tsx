'use client';

import CTAButton from '@/components/CTAButton';
import { useSiteData } from '@/app/providers/SiteDataProvider';
import { Button } from '@/components/ui/Button';

export default function StickyActions() {
  const { siteSettings } = useSiteData();
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden pb-[calc(env(safe-area-inset-bottom,0)+1.5rem)] md:block">
      <div className="container-custom pointer-events-auto">
        <div className="flex flex-col gap-4 rounded-[1.75rem] border border-border/70 bg-surface/95 px-5 py-5 shadow-soft backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold text-primary">Perlu tanya langsung?</p>
            <p className="text-base text-text-muted sm:text-lg">
              Hubungi sekolah untuk cek kuota, menjadwalkan kunjungan, atau melihat rute menuju lokasi.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton ctaKey="generalInquiry" className="w-full sm:w-auto" />
            <Button asChild variant="outline" fullWidth className="sm:w-auto">
              <a href={siteSettings.mapsUrl} target="_blank" rel="noreferrer">
                Petunjuk Arah
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
