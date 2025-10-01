"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Unhandled application error:', error);
  }, [error]);

  return (
    <main className="min-h-[70vh] bg-surfaceAlt">
      <div className="content-container flex flex-col items-center justify-center py-24 text-center">
        <Badge tone="surface" className="text-secondary">
          Terjadi kendala
        </Badge>
        <h1 className="mt-6 text-balance text-4xl font-bold text-text sm:text-5xl">
          Maaf, sistem kami sedang mengalami gangguan sementara.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-text-muted">
          Tim kami sudah menerima laporan otomatis dan akan segera mengeceknya. Silakan coba muat ulang halaman atau kembali ke beranda.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button type="button" onClick={reset} className="sm:w-auto" fullWidth>
            Muat ulang halaman
          </Button>
          <Button asChild variant="secondary" fullWidth className="sm:w-auto">
            <Link href="/">Kembali ke beranda</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
