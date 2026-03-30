'use client';

import { useEffect } from 'react';
import Link from 'next/link';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CardSurface } from '@/components/ui/CardSurface';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Unhandled application error:', error);
  }, [error]);

  return (
    <main className="min-h-[72vh] px-4 py-24 sm:px-6">
      <div className="mx-auto flex max-w-4xl items-center justify-center">
        <CardSurface tone="gradient" padding="xl" className="w-full text-center">
          <Badge tone="surface" className="mx-auto">
            Terjadi kendala
          </Badge>
          <h1 className="mx-auto mt-6 max-w-[12ch] text-balance text-4xl font-semibold text-text sm:text-5xl">
            Halaman ini sedang tidak bisa dimuat seperti biasa.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-text-muted">
            Anda bisa mencoba memuat ulang. Jika kendala masih muncul, kembali ke beranda atau hubungi sekolah lewat
            halaman kontak.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button type="button" onClick={reset} className="sm:w-auto" fullWidth>
              Muat ulang halaman
            </Button>
            <Button asChild variant="secondary" fullWidth className="sm:w-auto">
              <Link href="/kontak">Buka kontak sekolah</Link>
            </Button>
          </div>
        </CardSurface>
      </div>
    </main>
  );
}
