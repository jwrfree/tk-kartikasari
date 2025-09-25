# TK Kartikasari — Website Resmi

**Website Live: [https://tkkartikasari.vercel.app](https://tkkartikasari.vercel.app)**

Selamat datang di repositori resmi website TK Kartikasari Bantarsari. Proyek ini dibangun menggunakan arsitektur modern dengan Next.js (App Router) dan Tailwind CSS untuk memberikan pengalaman pengguna yang cepat, informatif, dan mudah diakses.

Dokumen ini berisi semua yang perlu Anda ketahui tentang proyek, mulai dari fitur, cara kerja, hingga bagaimana cara mengelolanya.

## Status Proyek

**Versi 1.0.0 (Stabil):** Website telah berhasil diluncurkan dan saat ini beroperasi penuh.

- Untuk melihat riwayat perubahan, silakan kunjungi **[CHANGELOG.md](CHANGELOG.md)**.
- Untuk rencana pengembangan fitur di masa depan (v2.0), silakan lihat **[Roadmap.md](docs/roadmap.md)**.

## Fitur Utama

- **Arsitektur Multi-Halaman:** Setiap seksi utama (Tentang, Program, PPDB, dll.) adalah halaman terpisah untuk optimasi SEO dan navigasi yang lebih baik.
- **Desain Responsif:** Tampilan website beradaptasi secara mulus di berbagai perangkat, dari desktop hingga mobile.
- **Manajemen Konten via Data Files:** Konten dinamis seperti Rincian Biaya, Agenda, dan Pengumuman dikelola melalui file JSON (`/data`), memisahkan data dari kode.
- **Blog & Artikel:** Sistem blog yang terintegrasi untuk mempublikasikan berita dan artikel.
- **SEO-Ready:** Dioptimalkan untuk mesin pencari dengan sitemap, `robots.txt`, dan data terstruktur (JSON-LD) untuk setiap halaman.
- **Integrasi Peta:** Google Maps tersemat untuk memudahkan orang tua menemukan lokasi sekolah.

## Struktur & Teknologi

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animasi:** Framer Motion
- **Bahasa:** TypeScript
- **Deployment:** Vercel

## Mengelola Konten Website

Untuk memperbarui konten, Anda tidak perlu mengubah kode di dalam halaman. Cukup edit file yang sesuai di bawah ini:

- **Rincian Biaya:** Edit file `data/biaya.json`.
- **Postingan Blog Baru:** Tambahkan entri baru di file `content/blog.ts`.
- **Jadwal Agenda:** Edit file `data/agenda.json`.
- **Pengumuman:** Edit file `data/pengumuman.json`.
- **Gambar Galeri:** Tambahkan file gambar baru ke folder `public/photos/` dan perbarui `data/galeri.json`.

## Instalasi & Menjalankan Proyek Secara Lokal

Untuk menjalankan proyek ini di komputer Anda:

1.  **Clone repositori:**
    ```bash
    git clone https://github.com/jwrfree/tk-kartikasari.git
    ```
2.  **Masuk ke direktori proyek:**
    ```bash
    cd tk-kartikasari
    ```
3.  **Install semua paket yang dibutuhkan:**
    ```bash
    npm install
    ```
4.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```

    Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
