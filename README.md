# TK Kartikasari — Website Resmi

**Website Live: [https://tkkartikasari.vercel.app](https://tkkartikasari.vercel.app)**

Selamat datang di repositori resmi website TK Kartikasari Bantarsari. Proyek ini dibangun menggunakan arsitektur modern dengan Next.js (App Router) dan Tailwind CSS untuk memberikan pengalaman pengguna yang cepat, informatif, dan mudah diakses.

Dokumen ini berisi ringkasan fitur, cara menjalankan proyek, hingga panduan mengelola konten yang sekarang dipusatkan melalui Sanity.

## Status Proyek

**Versi 1.1.0 (Sanity & Reliability Update):** Website beroperasi penuh dengan sumber konten terpusat di Sanity dan lapisan fallback untuk memastikan halaman tetap tampil meski koneksi ke CMS terganggu.

- Untuk melihat riwayat perubahan, silakan kunjungi **[CHANGELOG.md](CHANGELOG.md)**.
- Untuk rencana pengembangan fitur di masa depan (v2.0), silakan lihat **[docs/roadmap.md](docs/roadmap.md)**.

## Fitur Utama

- **Arsitektur Multi-Halaman:** Setiap seksi utama (Tentang, Program, PPDB, dll.) adalah halaman terpisah untuk optimasi SEO dan navigasi yang lebih baik.
- **Konten Terpusat via Sanity:** Semua copy, navigasi, CTA, agenda, galeri, biaya, hingga legalitas diambil dari dokumen `siteContent` Sanity sehingga mudah diperbarui oleh tim non-teknis.
- **Fallback Konten Otomatis:** Jika CMS tidak dapat dijangkau saat build ataupun runtime, website memanfaatkan data cadangan di `lib/fallback-content.ts` agar pengalaman pengguna tetap utuh.
- **Desain Responsif & Konsisten:** Tampilan website beradaptasi secara mulus di berbagai perangkat, dengan tone dan UX writing yang terdokumentasi di [docs/ux-writing-guidelines.md](docs/ux-writing-guidelines.md).
- **Pengalaman Error yang Empatik:** Halaman error global dan halaman 404 khusus menyediakan pesan manusiawi, tombol aksi lanjut, dan link dukungan.
- **Keamanan & SEO:** Middleware memaksa trafik ke HTTPS, metadata per halaman dioptimalkan, dan JSON-LD terstruktur diinjeksikan secara otomatis.
- **Integrasi Peta:** Google Maps tersemat untuk memudahkan orang tua menemukan lokasi sekolah.

## Struktur & Teknologi

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animasi:** Framer Motion
- **Bahasa:** TypeScript
- **CMS:** Sanity (dataset `production`)
- **Deployment:** Vercel dengan middleware redirect HTTPS

## Mengelola Konten Website

Seluruh konten publik bersumber dari dokumen Sanity `siteContent`. Update dapat dilakukan melalui **Sanity Studio** tanpa menyentuh kode.

1. **Jalankan Studio secara lokal** (opsional untuk preview sebelum deploy):
   ```bash
   npx sanity dev --host
   ```
   Studio mengambil konfigurasi dari `sanity.config.ts`.
2. **Masuk ke dokumen `Site Content`** dan perbarui:
   - **Site Settings:** nama sekolah, URL resmi, alamat, kontak WhatsApp, media sosial.
   - **Navigation & CTA:** label menu, tautan internal, teks tombol aksi utama.
   - **Halaman Konten:** hero beranda, program, PPDB, agenda, galeri, testimoni, legalitas, hingga FAQ.
3. **Publish** perubahan untuk menyebarkannya. Build produksi akan membaca data terbaru; selama proses build, fallback lokal memastikan halaman tetap tersaji bila koneksi Sanity bermasalah.

> **Catatan:** Jika Anda menambahkan tipe konten baru di Sanity, sinkronkan tipe tersebut dengan TypeScript di `lib/types/site.ts` dan fallback di `lib/fallback-content.ts`.

Untuk konten blog, gunakan skema `post` di Sanity. Komponen frontend akan otomatis membaca daftar artikel saat fitur blog diaktifkan kembali.

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

### Variabel Lingkungan

Buat file `.env.local` (atau salin `.env`) berisi kredensial berikut. Anda bisa
memakai prefiks `NEXT_PUBLIC_` (dapat diakses di klien) atau versi server-only
(`SANITY_`). Aplikasi akan otomatis memilih nilai yang tersedia.

```bash
# Pilih salah satu gaya penamaan berikut
NEXT_PUBLIC_SANITY_PROJECT_ID="<project-id>"
NEXT_PUBLIC_SANITY_DATASET="production"
# atau
SANITY_PROJECT_ID="<project-id>"
SANITY_DATASET="production"
```

Untuk build produksi, pastikan variabel lingkungan tersebut tersedia di platform
hosting (mis. Vercel Project Settings).

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

## Evolusi Arsitektur & Pilihan Teknologi

Bagian ini mendokumentasikan keputusan arsitektur untuk pengembangan di masa depan, terutama mengenai manajemen data dan backend.

### Latar Belakang

Sebelumnya, konten dinamis seperti rincian biaya dan postingan blog disimpan dalam file statis (`/data`, `/content`). Seiring pertumbuhan kebutuhan, pendekatan tersebut menyulitkan sinkronisasi lintas tim dan menyita waktu saat melakukan pembaruan harian.

### Transisi ke Sanity Headless CMS

Untuk mempercepat iterasi konten tanpa harus melakukan redeploy setiap kali ada perubahan, website ini bermigrasi penuh ke **Sanity** sebagai Headless CMS.

- **Satu Dokumen Terpadu:** Seluruh copy, struktur navigasi, CTA, agenda, galeri, biaya, hingga halaman legal tersimpan dalam dokumen `siteContent`. Hal ini memudahkan tim non-teknis memperbarui informasi secara konsisten.
- **Fallback & Cache:** `SiteDataProvider` memanfaatkan caching Next.js dan fallback lokal sehingga halaman tetap stabil ketika CMS tidak responsif atau saat membangun secara offline.
- **UX Writing Konsisten:** Dokumen [docs/ux-writing-guidelines.md](docs/ux-writing-guidelines.md) memastikan tone yang empatik dan profesional di seluruh halaman, termasuk pada error state.
- **Enforced HTTPS:** Middleware bawaan memastikan semua trafik publik dialihkan ke HTTPS untuk menjaga keamanan pengunjung.

### Langkah Berikutnya

- Mengaktifkan kembali fitur blog publik menggunakan data `post` dari Sanity.
- Menambah validasi otomatis (mis. linting schema atau webhook) agar perubahan konten besar dapat terpantau.
- Mengeksplorasi integrasi Studio Embedded di dashboard internal agar admin dapat mengelola konten langsung dari website.
