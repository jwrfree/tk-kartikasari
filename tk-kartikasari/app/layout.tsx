import type { Metadata } from "next";
import "./globals.css";
import site from "@/data/site.json";
import Link from "next/link";
import { waLink } from "@/lib/utils";
import MobileNav from "@/components/MobileNav";
import { mainNav } from "@/data/navigation";

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
          <header className="sticky top-0 z-40 border-b border-white/40 bg-white/80 backdrop-blur">
            <div className="container flex h-20 items-center justify-between gap-6">
              <Link href="/" className="flex items-center gap-3">
                <img src={site.logo} alt="Logo TK Kartikasari" className="h-12 w-12 rounded-2xl border border-white/70 bg-white p-2 shadow-soft" />
                <div>
                  <p className="text-lg font-semibold text-text">{site.schoolName}</p>
                  <p className="text-sm text-text-muted">Bulaksari, Bantarsari, Cilacap</p>
                </div>
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium text-text-muted md:flex">
                {mainNav.map((item) => (
                  <Link key={item.href} href={item.href} className="transition hover:text-text">
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <Link
                  href="/ppdb"
                  className="hidden rounded-2xl border border-border/80 px-5 py-2.5 text-sm font-semibold text-text hover:border-primary hover:text-primary md:inline-flex"
                >
                  Info PPDB
                </Link>
                <a
                  href={waLink("Halo Bu Mintarsih, saya ingin info PPDB TK Kartikasari.")}
                  className="btn-primary hidden text-sm md:inline-flex"
                >
                  Chat WhatsApp
                </a>
                <Link
                  href="/ppdb"
                  className="inline-flex rounded-2xl border border-border/80 px-4 py-2 text-sm font-semibold text-text hover:border-primary hover:text-primary md:hidden"
                >
                  PPDB
                </Link>
                <MobileNav />
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
                    <p className="text-sm text-text-muted">Belajar ceria, tumbuh percaya diri.</p>
                  </div>
                </Link>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-text-muted">
                  Kami mendampingi anak usia dini untuk mengenal dunia dengan rasa ingin tahu, kemandirian, dan karakter baik dalam lingkungan yang hangat.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-semibold text-text">Navigasi</p>
                <ul className="space-y-3 text-sm text-text-muted">
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
                <ul className="space-y-3 text-sm text-text-muted">
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
