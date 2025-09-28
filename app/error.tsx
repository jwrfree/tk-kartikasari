'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Unhandled application error:', error);
  }, [error]);

  return (
    <main className="min-h-[70vh] bg-surfaceAlt">
      <div className="content-container flex flex-col items-center justify-center py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-semibold text-secondary shadow-soft backdrop-blur-sm">
          Terjadi kendala
        </span>
        <h1 className="mt-6 text-balance text-4xl font-bold text-text sm:text-5xl">
          Maaf, sistem kami sedang mengalami gangguan sementara.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-text-muted">
          Tim kami sudah menerima laporan otomatis dan akan segera mengeceknya. Silakan coba muat ulang halaman atau kembali ke beranda.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            Muat ulang halaman
          </button>
          <Link href="/" className="btn-secondary inline-flex items-center justify-center gap-2">
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
