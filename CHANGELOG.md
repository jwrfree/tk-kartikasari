# Riwayat Perubahan (Changelog)

Semua perubahan penting pada proyek ini akan didokumentasikan di file ini.

Format file ini didasarkan pada [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), dan proyek ini mengikuti [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - Rilis Awal

Ini adalah rilis publik pertama yang stabil dari website TK Kartikasari.

### Added (Fitur Baru)

-   **Struktur Proyek Awal:** Dibuat menggunakan Next.js 14 (App Router), TypeScript, dan Tailwind CSS.
-   **Halaman Utama:** Desain komprehensif yang menampilkan informasi kunci tentang sekolah, program, dan kegiatan harian.
-   **Halaman Program:** Penjelasan detail mengenai Kelompok A, Kelompok B, dan kegiatan ekstrakurikuler.
-   **Halaman PPDB (Pendaftaran):** Informasi lengkap mengenai pendaftaran siswa baru, termasuk syarat & ketentuan, FAQ, dan alur pendaftaran.
-   **Halaman Kontak:** Peta lokasi interaktif dari Google Maps dan detail kontak sekolah.
-   **Sistem Konten Statis:** Semua konten dinamis (biaya, blog, FAQ) dikelola melalui file TypeScript di direktori `/content`, memisahkan data dari logika tampilan.
-   **Optimasi SEO:** Implementasi sitemap, `robots.txt`, dan metadata standar untuk meningkatkan visibilitas di mesin pencari.
-   **Deployment:** Website di-deploy secara otomatis dan di-hosting melalui Vercel.
