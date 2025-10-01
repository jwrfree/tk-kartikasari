# Design System Assessment

## Ringkasan Eksekutif
- **Fondasi desain sudah dimulai**: repo sudah memiliki token warna, radius, dan shadow yang terdefinisi di Tailwind serta beberapa utilitas global seperti `.btn` dan `.card` untuk konsistensi dasar.【F:tailwind.config.js†L12-L60】【F:app/globals.css†L42-L108】
- **Implementasi belum konsisten**: banyak komponen halaman masih menulis kelas Tailwind berulang secara manual, mem-bypass komponen reuse seperti `CardSurface`, dan mengandalkan kombinasi kelas yang tidak distandarkan.【F:components/home/sections/HeroSection.tsx†L32-L78】【F:components/tentang/AboutPageContent.tsx†L67-L282】【F:components/reactbits/StickyScrollReveal.tsx†L61-L148】
- **Sistem varian belum lengkap**: peta varian pada `CTAButton` merujuk ke kelas (`btn-ghost`) yang belum ada, sementara elemen lain menggunakan kelas varian tanpa basis `.btn`, menandakan sistem tombol belum tuntas dan rawan regresi.【F:components/CTAButton.tsx†L33-L63】【F:app/globals.css†L82-L108】【F:app/error.tsx†L12-L33】

## Observasi Terperinci

### 1. Token & Foundations
- Tailwind sudah diperluas dengan warna brand (`primary`, `secondary`, `accent`), tipografi, radius, dan shadow yang dapat dijadikan dasar design system.【F:tailwind.config.js†L12-L60】
- Global stylesheet mendeklarasikan utilitas `.container`, `.card`, `.btn`, dan `.input`, namun variasi warna/ukuran tombol masih terbatas dan tidak semuanya terhubung ke komponen React.【F:app/globals.css†L42-L108】

### 2. Reusability & Componentization
- Komponen `CardSurface` sudah menyediakan varian `tone` dan `padding`, tetapi sebagian besar kartu di halaman "Tentang" dan komponen `StickyScrollReveal` masih memakai kombinasi kelas manual (`card h-full ... bg-white/60 p-7 ...`). Ini menyulitkan orkestrasi gaya saat tokens berubah.【F:components/ui/CardSurface.tsx†L7-L36】【F:components/tentang/AboutPageContent.tsx†L124-L220】【F:components/reactbits/StickyScrollReveal.tsx†L61-L148】
- `PageSection` memberi pengaturan padding standar, namun hampir setiap section masih menambahkan background, border, dan grid secara manual. Variasi umum (misalnya section dengan background gradasi, section dengan layout grid sticky) belum diabstraksi sebagai varian sehingga kode antar halaman tetap berulang.【F:components/layout/PageSection.tsx†L19-L40】【F:components/tentang/AboutPageContent.tsx†L67-L282】

### 3. Konsistensi Buttons & Actions
- `CTAButton` menggunakan peta varian ke kelas `.btn-*`, tetapi hanya `.btn-primary`, `.btn-secondary`, dan `.btn-outline` yang tersedia; `.btn-ghost` belum didefinisikan sehingga konfigurasi varian bisa memunculkan UI tidak bergaya.【F:components/CTAButton.tsx†L33-L63】【F:app/globals.css†L82-L108】
- Komponen lain (misalnya halaman error) langsung memakai `className="btn-primary"` pada elemen `<button>` tanpa menyertakan kelas dasar `.btn`, sehingga hilang spacing dan focus ring standar yang berada di `.btn`. Ini menandakan tidak ada komponen tombol tunggal yang dipakai lintas aplikasi.【F:app/error.tsx†L12-L33】【F:app/globals.css†L82-L93】

### 4. Variants & Theming
- Banyak section memerlukan variasi serupa (badge dengan blur, kartu dengan gradient overlay, list numbering), tetapi belum ada API varian (mis. `SectionHeader` varian layout, `Badge` component) untuk mengatur style secara deklaratif. Akibatnya, state view seperti highlight stats di Hero atau list misi di Tentang didefinisikan ulang per section.【F:components/home/sections/HeroSection.tsx†L32-L78】【F:components/tentang/AboutPageContent.tsx†L67-L258】
- Sistem layout tidak menyediakan token spacing antar section selain padding standar. Pengaturan jarak (mis. `mt-12`, `space-y-6`) tersebar di banyak tempat, menyulitkan scaling ketika desain berubah.【F:components/home/sections/ProgramsSection.tsx†L21-L49】【F:components/home/sections/HighlightsSection.tsx†L17-L39】

## Rekomendasi
1. **Perluas primitives menjadi komponen**: buat komponen `Badge`, `SectionContainer`, `Card` berbasis `CardSurface` sehingga pattern seperti kartu dengan blur atau badge bulat bisa dikendalikan via props alih-alih kelas manual.【F:components/ui/CardSurface.tsx†L7-L36】【F:components/tentang/AboutPageContent.tsx†L124-L220】
2. **Standarisasi sistem tombol**: definisikan seluruh varian di CSS (`.btn-ghost`, disabled state sekunder, ukuran), lalu bungkus dalam komponen React tunggal untuk dipakai di `CTAButton` maupun tombol halaman (error, form, dsb).【F:components/CTAButton.tsx†L33-L63】【F:app/error.tsx†L12-L33】
3. **Tambah varian pada section helpers**: perluas `PageSection` atau buat `SectionPattern` untuk pola background umum (gradient, bordered, neutral) dan layout (grid dua kolom, sticky). Ini akan mengurangi duplikasi `className` dan mempermudah scaling saat menambah halaman baru.【F:components/layout/PageSection.tsx†L19-L40】【F:components/tentang/AboutPageContent.tsx†L67-L282】
4. **Dokumentasikan design tokens**: selaraskan penamaan token Tailwind dengan dokumentasi (mis. mapping warna primer/sekunder ke brand) dan buat pedoman penggunaan agar tim konten/marketing tahu varian mana untuk CTA utama vs sekunder.【F:tailwind.config.js†L12-L60】【F:app/globals.css†L82-L108】
5. **Audit konfigurasi CTA**: pastikan data CTA tidak mengaktifkan varian yang belum tersedia, atau fallback otomatis ke varian yang valid. Ini mencegah tampilan rusak saat copywriter menambah CTA baru di CMS.【F:components/CTAButton.tsx†L33-L63】

Dengan memperkuat primitives dan varian di atas, situs akan lebih mudah dipelihara, reusable, dan siap berkembang tanpa harus menulis ulang kelas Tailwind di setiap halaman.
