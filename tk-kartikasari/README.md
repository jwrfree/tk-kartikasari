# TK Kartikasari — Next.js (App Router)

## Quick Start
```bash
npm install
npm run dev
```

## Pages
- / (Beranda)
- /tentang
- /program
- /ppdb
- /galeri
- /pengumuman
- /agenda
- /kontak

## Content
- Konten halaman disusun di folder `/content/*.ts` dalam bentuk objek TypeScript bertipe kuat (hero, highlight, FAQ, dsb).
- Data situs umum seperti alamat sekolah tetap berada di `/data/site.json` dan `/data/navigation.ts`.
- Gambar galeri sementara pakai URL Pexels. Ganti ke `/public/photos/*.webp` bila sudah siap foto asli.

## Notes
- Animasi pakai `framer-motion` di beranda & testimoni.
- CTA WhatsApp & Petunjuk Arah tersedia di sticky bar.
- Schema.org siap di `/lib/schema.ts` (opsional injeksi).
