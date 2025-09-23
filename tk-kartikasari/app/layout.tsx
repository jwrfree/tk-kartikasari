import type { Metadata } from "next";
import "./globals.css";
import site from "@/data/site.json";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TK Kartikasari Bulaksari Bantarsari Cilacap — Taman Kanak-kanak",
  description:
    "Lingkungan aman, hangat, dan menstimulasi untuk anak usia dini di Bulaksari, Bantarsari, Cilacap. Info PPDB via WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-border">
          <div className="container flex items-center gap-3 h-16">
            <img src={site.logo} alt="Logo TK Kartikasari" className="h-10 w-10" />
            <div className="flex-1">
              <p className="font-semibold">TK Kartikasari</p>
              <p className="text-sm text-text-muted">Bulaksari, Bantarsari, Cilacap</p>
            </div>
            <nav className="hidden sm:flex gap-4 text-sm">
              <Link href="/">Beranda</Link>
              <Link href="/program">Program</Link>
              <Link href="/ppdb">PPDB</Link>
              <Link href="/galeri">Galeri</Link>
              <Link href="/pengumuman">Pengumuman</Link>
              <Link href="/agenda">Agenda</Link>
              <Link href="/kontak">Kontak</Link>
            </nav>
            <Link href="/kontak" className="btn btn-primary ml-3">Kontak</Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-12 py-8 border-t border-border">
          <div className="container text-sm">
            <p className="font-medium">TK Kartikasari</p>
            <p>{site.address}</p>
            <p>Jam buka: {site.openingHours}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
