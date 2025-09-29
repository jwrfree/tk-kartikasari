import Link from 'next/link';
import { ArrowRight } from 'react-bootstrap-icons';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-surfaceAlt">
      <div className="content-container flex flex-col items-center justify-center py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-semibold text-secondary shadow-soft backdrop-blur-sm">
          Halaman tidak ditemukan
        </span>
        <h1 className="mt-6 text-balance text-4xl font-bold text-text sm:text-5xl">
          Ups, alamat yang kamu tuju belum tersedia.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-text-muted">
          Bisa jadi tautan yang kamu masukkan salah atau kontennya sudah dipindahkan. Yuk kembali ke beranda atau hubungi kami jika membutuhkan bantuan lebih lanjut.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="btn-primary inline-flex items-center justify-center gap-2">
            Kembali ke beranda
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/kontak" className="btn-secondary inline-flex items-center justify-center gap-2">
            Hubungi tim kami
          </Link>
        </div>
      </div>
    </main>
  );
}
