# Informasi Website TK Kartikasari

Dokumen ini merangkum status terbaru website TK Kartikasari Bantarsari, sumber konten, hingga prinsip komunikasi yang digunakan di seluruh pengalaman pengguna.

## Ringkasan Produk

- **URL Produksi:** https://tkkartikasari.vercel.app
- **Framework:** Next.js 14 App Router dengan Tailwind CSS.
- **Konten:** Dikelola terpusat lewat Sanity dokumen `siteContent` dengan fallback lokal.
- **Target Audiens:** Orang tua murid PAUD/TK di wilayah Bantarsari dan sekitarnya.
- **Tujuan Utama:** Menyediakan informasi program, biaya, agenda, dan jalur komunikasi cepat (WhatsApp) dalam bahasa Indonesia yang ramah.

## Sumber Data & Arsitektur Konten

- **Sanity Project:** `hovhivsj` (dataset `production`).
- **Entry Utama:** `siteContent` – menyimpan site settings, navigasi, CTA, konten halaman (beranda, tentang, program, PPDB, agenda, galeri, testimoni, legalitas) serta copy UX writing.
- **Fallback Lokal:** File `lib/fallback-content.ts` menjamin halaman tetap tersaji saat koneksi CMS terputus.
- **Skema & Tipe Data:** Didefinisikan di `sanity/schemas/siteContent.ts` dan `lib/types/site.ts` untuk menjaga konsistensi frontend.
- **Blog:** Menggunakan tipe `post` di Sanity; publikasi dapat diaktifkan kembali ketika kanal artikel siap.

## Pengalaman Pengguna & Komunikasi

- **Halaman Error:** `app/error.tsx` menampilkan pesan manusiawi dengan opsi kembali ke beranda atau menghubungi sekolah.
- **Halaman Tidak Ditemukan:** `app/not-found.tsx` memandu pengguna untuk mencari halaman yang tepat atau membuka menu utama.
- **Tone UX Writing:** Profesional, hangat, dan suportif sesuai panduan di `docs/ux-writing-guidelines.md`.
- **CTA Utama:** Tombol WhatsApp dan ajakan kunjungan sekolah hadir secara konsisten melalui `SiteDataProvider`.

## Operasional & Deployment

- **Hosting:** Vercel.
- **Keamanan:** Middleware `middleware.ts` memaksa redirect ke HTTPS di produksi.
- **Monitoring Build:** Jika Sanity tidak responsif saat build, Next.js tetap menyajikan halaman menggunakan fallback dan mencatat peringatan di log.
- **Pengelolaan Konten:** Gunakan `npx sanity dev --host` untuk mengakses Studio secara lokal sebelum mem-publish perubahan.

## Kontak & Kepemilikan Konten

- **Penanggung jawab konten:** Kepala sekolah & tim admin TK Kartikasari.
- **Pembaharuan berkala:** Minimal setiap awal semester untuk biaya, kurikulum, dan agenda besar.
- **Permintaan dukungan teknis:** Hubungi maintainer melalui issue GitHub atau email internal sekolah.
