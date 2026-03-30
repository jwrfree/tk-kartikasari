'use client';

import Link from 'next/link';

import { useSiteData } from '@/app/providers/SiteDataProvider';
import { Button } from '@/components/ui/Button';

const legalLinks = [
  { name: 'Kebijakan Privasi', href: '/kebijakan-privasi' },
  { name: 'Syarat dan Ketentuan', href: '/syarat-dan-ketentuan' },
  { name: 'Disklaimer', href: '/disklaimer' },
];

export default function Footer() {
  const { siteSettings, navigation } = useSiteData();

  const exploreLinks = navigation.flatMap((item) => {
    if ('children' in item && item.children) {
      return item.children.map((child) => ({ name: child.label, href: child.href }));
    }

    if ('href' in item && item.href) {
      return [{ name: item.label, href: item.href }];
    }

    return [];
  });

  return (
    <footer className="border-t border-border/70 bg-surfaceAlt" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-custom py-16 sm:py-20">
        <div className="editorial-grid items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="eyebrow">TK Kartikasari</p>
              <h3 className="max-w-[12ch] text-3xl font-semibold">
                Anak lebih cepat nyaman, orang tua lebih mudah yakin.
              </h3>
              <p className="max-w-xl text-base leading-relaxed text-text-muted">
                Lihat suasana belajar, pahami program, dan cek jalur pendaftaran tanpa harus menebak-nebak langkah
                berikutnya.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/kontak">Hubungi Sekolah</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/ppdb">Cek Status PPDB</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">Jelajahi</p>
              <ul className="mt-4 space-y-3">
                {exploreLinks.slice(0, 6).map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-foreground/80 transition hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">Kontak</p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                <li>{siteSettings.address}</li>
                <li>{siteSettings.whatsapp}</li>
                {siteSettings.email ? <li>{siteSettings.email}</li> : null}
                <li>{siteSettings.openingHours}</li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">Legal</p>
              <ul className="mt-4 space-y-3">
                {legalLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-foreground/80 transition hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/70 pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteSettings.schoolName}. Seluruh hak cipta dilindungi.
          </p>
          <p>Bantarsari, Cilacap</p>
        </div>
      </div>
    </footer>
  );
}
