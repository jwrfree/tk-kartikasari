import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-surfaceAlt">
      <div className="content-container flex flex-col items-center justify-center py-24 text-center">
        <Badge tone="surface" className="text-secondary">
          Halaman tidak ditemukan
        </Badge>
        <h1 className="mt-6 text-balance text-4xl font-bold text-text sm:text-5xl">
          Ups, alamat yang kamu tuju belum tersedia.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-text-muted">
          Bisa jadi tautan yang kamu masukkan salah atau kontennya sudah dipindahkan. Yuk kembali ke beranda atau hubungi kami jika membutuhkan bantuan lebih lanjut.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild className="sm:w-auto" fullWidth>
            <Link href="/">
              Kembali ke beranda
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="secondary" className="sm:w-auto" fullWidth>
            <Link href="/kontak">Hubungi tim kami</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
