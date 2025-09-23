"use client";

import CTAButton from "@/components/CTAButton";
import { generalInquiryCTA } from "@/content/cta";
import site from "@/data/site.json";

export default function StickyActions() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 pb-[calc(env(safe-area-inset-bottom,0)+1.5rem)]">
      <div className="container pointer-events-auto">
        <div className="flex flex-col gap-4 rounded-3xl border border-border/70 bg-surface/95 px-5 py-5 shadow-soft backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">Siap membantu orang tua baru</p>
            <p className="text-sm text-text-muted sm:text-base">
              Hubungi Bu Mintarsih atau dapatkan petunjuk arah menuju sekolah kami.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton config={generalInquiryCTA} className="w-full sm:w-auto" />
            <a
              href={site.mapsUrl}
              target="_blank"
              className="btn-outline w-full sm:w-auto"
              rel="noreferrer"
            >
              Petunjuk Arah
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
