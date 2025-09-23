import type { Metadata } from "next";
import "./globals.css";
import site from "@/data/site.json";
import Link from "next/link";
import { waLink } from "@/lib/utils";
import MobileNav from "@/components/MobileNav";
import DesktopNav from "@/components/DesktopNav";

export const metadata: Metadata = {
  title: "TK Kartikasari Bulaksari Bantarsari Cilacap — Taman Kanak-kanak",
  description:
    "Lingkungan aman, hangat, dan menstimulasi untuk anak usia dini di Bulaksari, Bantarsari, Cilacap. Info PPDB via WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-surfaceAlt text-text font-sans">
        <div className="relative min-h-screen">
          <header className="sticky top-0 z-50 border-b border-white/60 bg-white/90 shadow-sm backdrop-blur">
            <div className="container">
              <div className="relative flex w-full items-center gap-3 py-3 md:gap-5 md:py-4">
                <Link
                  href="/"
                  className="flex shrink-0 items-center gap-3 text-text transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-white shadow-soft">
                    <img src={site.logo} alt="Logo TK Kartikasari" className="h-8 w-8 object-contain" />
                  </span>
                  <span className="flex min-w-0 flex-col leading-tight">
                    <span className="truncate text-base font-semibold md:text-lg">{site.schoolName}</span>
                    <span className="hidden text-xs text-text-muted sm:inline">Bulaksari, Bantarsari, Cilacap</span>
                  </span>
                </Link>
                <DesktopNav />
                <div className="ml-auto flex flex-1 items-center justify-end gap-2 sm:gap-3 lg:ml-0 lg:flex-none">
                  <Link
                    href="/ppdb"
                    className="hidden rounded-full border border-border/70 px-4 py-2 text-sm font-semibold text-text transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:inline-flex"
                  >
                    Info PPDB
                  </Link>
                  <a
                    href={waLink("Halo Bu Mintarsih, saya ingin info PPDB TK Kartikasari.")}
                    className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:brightness-[1.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:inline-flex"
                  >
                    Chat WhatsApp
                  </a>
                  <Link
                    href="/ppdb"
                    className="inline-flex items-center rounded-full border border-border/70 px-3 py-2 text-sm font-semibold text-text transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:hidden"
                  >
                    PPDB
                  </Link>
                  <MobileNav />
                </div>
              </div>
            </div>
          </header>
          <main>{children}</main>
          <footer className="mt-24 bg-white py-16">
            <div className="container grid gap-12 md:grid-cols-[1.2fr,1fr,1fr]">
              <div>
                <Link href="/" className="flex items-center gap-3 text-text">
                  <img src={site.logo} alt="Logo TK Kartikasari" className="h-12 w-12 rounded-2xl border border-border/80 bg-surface p-2 shadow-soft" />
                  <div>
                    <p className="text-lg font-semibold">{site.schoolName}</p>
                    <p className="text-base text-text-muted">Belajar ceria, tumbuh percaya diri.</p>
                  </div>
                </Link>
                <p className="mt-5 max-w-md text-base leading-relaxed text-text-muted">
                  Kami mendampingi anak usia dini untuk mengenal dunia dengan rasa ingin tahu, kemandirian, dan karakter baik dalam lingkungan yang hangat.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-semibold text-text">Navigasi</p>
                <ul className="space-y-3 text-base text-text-muted">
                  <li>
                    <a href="#program" className="transition hover:text-primary">
                      Program Unggulan
                    </a>
                  </li>
                  <li>
                    <Link href="/galeri" className="transition hover:text-primary">
                      Galeri Kegiatan
                    </Link>
                  </li>
                  <li>
                    <Link href="/pengumuman" className="transition hover:text-primary">
                      Pengumuman
                    </Link>
                  </li>
                  <li>
                    <Link href="/agenda" className="transition hover:text-primary">
                      Agenda Sekolah
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-semibold text-text">Kontak</p>
                <ul className="space-y-3 text-base text-text-muted">
                  <li>{site.address}</li>
                  <li>Jam buka: {site.openingHours}</li>
                  <li>
                    WhatsApp: <a href={waLink("Halo Bu Mintarsih, saya ingin info PPDB TK Kartikasari.")} className="text-primary transition hover:text-primary/80">{site.whatsapp}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container mt-10 border-t border-border/70 pt-6 text-xs text-text-muted">
              © {new Date().getFullYear()} {site.schoolName}. Semua hak cipta dilindungi.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
