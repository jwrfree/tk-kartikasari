import Link from 'next/link';
import { ArrowRight } from 'react-bootstrap-icons';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CardSurface } from '@/components/ui/CardSurface';

export default function NotFound() {
  return (
    <main className="min-h-[72vh] px-4 py-24 sm:px-6">
      <div className="mx-auto flex max-w-4xl items-center justify-center">
        <CardSurface tone="gradient" padding="xl" className="w-full text-center">
          <Badge tone="surface" className="mx-auto">
            Halaman tidak ditemukan
          </Badge>
          <h1 className="mx-auto mt-6 max-w-[12ch] text-balance text-4xl font-semibold text-text sm:text-5xl">
            Alamat yang Anda tuju tidak tersedia.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-text-muted">
            Bisa jadi tautannya salah, kontennya dipindahkan, atau halaman itu sudah tidak dipakai lagi. Kembali ke
            beranda atau hubungi sekolah jika Anda membutuhkan bantuan.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="sm:w-auto" fullWidth>
              <Link href="/" className="inline-flex items-center gap-2">
                <span>Kembali ke beranda</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="secondary" className="sm:w-auto" fullWidth>
              <Link href="/kontak">Hubungi sekolah</Link>
            </Button>
          </div>
        </CardSurface>
      </div>
    </main>
  );
}
