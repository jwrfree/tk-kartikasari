# Audit UX Writing Funnel Orang Tua Lokal

Audit ini menilai funnel utama TK Kartikasari untuk calon orang tua lokal yang datang dari referal atau tautan WhatsApp, lalu ingin cepat memahami kecocokan sekolah dan melanjutkan ke pembahasan pendaftaran.

Audit dilakukan terhadap source repo per **31 Maret 2026**. Fokus audit ini bukan proofreading, tetapi apakah copy sekarang cukup kuat untuk menjawab empat pertanyaan inti:

1. Ini sekolah seperti apa?
2. Cocok untuk siapa?
3. Kenapa layak dipertimbangkan?
4. Langkah berikutnya apa?

## Rubrik Standar

| Lensa | Pertanyaan audit | Sinyal baik | Sinyal bermasalah |
| --- | --- | --- | --- |
| Clarity of value | Apakah manfaat sekolah langsung terbaca dalam 5-10 detik? | Headline cepat menjelaskan fit dan hasil yang dicari orang tua | Headline terasa hangat, tetapi masih abstrak atau terlalu filosofis |
| Audience fit | Apakah bahasanya relevan untuk orang tua lokal sekitar sekolah? | Menjawab kecocokan, biaya, kuota, langkah daftar | Terlalu banyak bicara kunjungan, rute, atau jargon internal |
| Differentiation | Apakah alasan memilih sekolah ini terasa spesifik? | Ada bukti konkret, ritme operasional, fakta yang bisa dibayangkan | Mengandalkan frasa umum seperti "hangat", "jelas", "dekat" tanpa bukti |
| Decision support | Apakah halaman membantu orang tua bergerak ke keputusan? | Urutan informasi memendekkan jalan ke PPDB | Pengguna harus membaca panjang dulu sebelum tahu next step |
| CTA scent and handoff | Apakah tombol dan pesan WhatsApp membentuk intent yang tepat? | Label CTA menyebut kuota, pendaftaran, atau langkah daftar | CTA terlalu umum, terlalu konsultatif, atau mengarah ke tahap yang salah |
| Anxiety reduction | Apakah copy menurunkan kebingungan? | Status, biaya, dokumen, dan jalur kontak jelas | Ada info usang, placeholder, atau langkah yang terasa kabur |
| Secondary institutional trust | Apakah situs tetap terlihat rapi untuk tamu sekunder? | Fakta dasar dan legalitas mudah dicek | Terlihat defensif, inkonsisten, atau terlalu promosi |

## Severity Scale

| Severity | Definisi |
| --- | --- |
| Critical | Mengaburkan nilai utama, membuat funnel salah arah, atau merusak trust secara langsung |
| High | Mengurangi conversion intent atau membuat orang tua ragu untuk lanjut |
| Medium | Copy cukup baik, tetapi masih generik, terlalu panjang, atau kurang spesifik |
| Low | Polish, konsistensi, dan perapian nada |

## Temuan Prioritas

### Critical 1. Funnel utama masih mendorong kunjungan, bukan pembahasan pendaftaran

- **Gejala**: CTA primer di homepage memakai `heroVisit`, onboarding berbunyi "Mulai dari kunjungan, bukan langsung formulir", final CTA kembali ke kunjungan, dan halaman tentang juga mengulang dorongan yang sama.
- **Sumber**: `components/home/HomePageContent.tsx:63-75`, `components/home/HomePageContent.tsx:292-339`, `components/home/HomePageContent.tsx:392-405`, `components/tentang/AboutPageContent.tsx:55-65`, `components/tentang/AboutPageContent.tsx:203-223`, `data/cta.ts:20-25`
- **Dampak ke conversion**: Orang tua lokal yang sudah tahu lokasi diarahkan ke tahap yang tidak selalu mereka butuhkan lebih dulu. Ini menurunkan kualitas inquiry karena niat utama mereka adalah membahas kuota, kelompok yang cocok, dan langkah daftar.
- **Akar masalah**: Funnel mengasumsikan kunjungan adalah tahap universal sebelum percakapan pendaftaran.
- **Rekomendasi**: Geser CTA primer menjadi intent pendaftaran. Kunjungan tetap ada, tetapi diposisikan sebagai langkah kedua atau opsi setelah orang tua cukup tertarik.

### Critical 2. Halaman PPDB menampilkan status yang terlihat usang terhadap tanggal hari ini

- **Gejala**: Halaman PPDB menyatakan PPDB 2025/2026 ditutup per **5 Juli 2025** dan menyuruh keluarga menunggu informasi 2026/2027.
- **Sumber**: `app/ppdb/page.tsx:47-63`
- **Dampak ke conversion**: Pada **31 Maret 2026**, informasi ini berisiko membuat situs terasa tidak terurus atau tidak mutakhir. Orang tua bisa berhenti percaya sebelum menghubungi sekolah.
- **Akar masalah**: Copy status bersifat hard-coded, bukan netral atau dinamis.
- **Rekomendasi**: Sampai ada status yang benar-benar diperbarui, gunakan copy netral seperti "Konfirmasi status PPDB 2026/2027 langsung ke admin" agar trust tidak rusak oleh tanggal lama.

### Critical 3. Ada CTA biaya yang mengarah ke nomor WhatsApp placeholder

- **Gejala**: Tombol "Hubungi Admin PPDB" di halaman biaya menuju `https://wa.me/6281234567890`.
- **Sumber**: `app/biaya/page.tsx:68-73`
- **Dampak ke conversion**: Ini merusak trust secara langsung. Orang tua bisa salah kontak atau menganggap situs belum selesai.
- **Akar masalah**: Handoff CTA tidak memakai sumber data kontak yang sama dengan komponen CTA lain.
- **Rekomendasi**: Seluruh jalur WhatsApp harus melewati satu sumber kebenaran. Secara UX writing, jangan pernah menjanjikan "jalur langsung ke sekolah" jika link-nya tidak konsisten.

### High 4. Copy terlalu sering berhenti di filosofi dan negasi, bukan jawaban keputusan

- **Gejala**: Banyak headline dan deskripsi memakai pola "bukan X, tetapi Y" atau narasi filosofis seperti "Kami tidak mulai dari target besar", "Program dibaca dari apa yang anak jalani", "Bacalah biaya bersama konteksnya".
- **Sumber**: `content/home.ts:68-77`, `content/home.ts:118-153`, `app/program/page.tsx:33-36`, `components/tentang/AboutPageContent.tsx:68-78`, `app/biaya/page.tsx:113-123`
- **Dampak ke conversion**: Tone terasa hangat, tetapi scanning menjadi lebih lambat. Orang tua harus menerjemahkan sendiri manfaat praktisnya.
- **Akar masalah**: Copy ingin terdengar reflektif dan manusiawi, tetapi kurang cepat masuk ke "apa artinya untuk saya sebagai orang tua".
- **Rekomendasi**: Kurangi pola negasi. Ganti dengan kalimat afirmatif yang menjelaskan kecocokan, hasil, atau langkah konkret.

### High 5. Diferensiasi sudah ada, tetapi belum dibuktikan dengan detail operasional yang mudah dibayangkan

- **Gejala**: Frasa seperti "ritme jelas", "pendampingan dekat", dan "kabar harian" berulang di banyak halaman, tetapi jarang dijelaskan siapa yang memberi kabar, kapan, atau bentuknya seperti apa.
- **Sumber**: `content/home.ts:20-28`, `content/home.ts:55-66`, `content/home.ts:112-153`, `components/tentang/AboutPageContent.tsx:122-153`
- **Dampak ke conversion**: Sekolah terdengar baik, tetapi masih bisa tertukar dengan TK lain yang juga mengaku hangat dan komunikatif.
- **Akar masalah**: Diferensiasi dibangun dari rasa, belum cukup dari bukti.
- **Rekomendasi**: Naikkan bukti operasional sederhana, misalnya rasio, ritme pagi, bentuk update ke orang tua, atau siapa yang menjadi kontak utama.

### High 6. Homepage terlalu panjang sebelum pengguna sampai ke langkah pendaftaran

- **Gejala**: Urutan homepage menaruh banyak narasi pengalaman sebelum blok onboarding, sementara CTA primer tetap kunjungan.
- **Sumber**: `components/home/HomePageContent.tsx:77-290`, `components/home/HomePageContent.tsx:292-339`
- **Dampak ke conversion**: Pengguna harus membaca terlalu jauh sebelum tahu apa yang harus dilakukan bila tertarik.
- **Akar masalah**: Homepage lebih kuat sebagai editorial story daripada landing page conversion.
- **Rekomendasi**: Naikkan blok "kalau tertarik, langkahnya apa" lebih awal. Struktur yang lebih tajam: hero -> cocok untuk siapa -> langkah daftar -> bukti trust -> detail pengalaman.

### High 7. CTA system belum memakai intent taxonomy yang konsisten

- **Gejala**: Label CTA tersebar antara "Chat via WhatsApp", "Jadwalkan Tur Sekolah", "Hubungi Kepala Sekolah", "Tanya langsung via WhatsApp", dan "berkonsultasi".
- **Sumber**: `data/cta.ts:13-58`, `components/StickyActions.tsx:14-24`, `app/kontak/page.tsx:29-35`
- **Dampak ke conversion**: Orang tua tidak mendapat sinyal yang konsisten tentang jenis percakapan apa yang akan terjadi setelah klik.
- **Akar masalah**: CTA disusun per halaman, bukan per intent funnel.
- **Rekomendasi**: Standarkan CTA menjadi tiga intent utama:
  - **Primary**: tanya kuota dan langkah daftar
  - **Secondary**: cek kecocokan atau jadwalkan kunjungan
  - **Support**: tanya biaya atau administrasi

### High 8. Halaman kontak dan sticky action terlalu berat ke logistik kunjungan dan rute

- **Gejala**: Halaman kontak menekankan datang, waktu kunjungan, dan peta. Sticky action juga mempromosikan "Petunjuk Arah".
- **Sumber**: `app/kontak/page.tsx:29-91`, `components/StickyActions.tsx:14-24`
- **Dampak ke conversion**: Untuk orang tua lokal, ini menghabiskan fokus pada pertanyaan yang bukan prioritas utama. Halaman kontak seharusnya memendekkan jalan ke pembahasan pendaftaran.
- **Akar masalah**: Halaman kontak diposisikan sebagai halaman kunjungan, bukan halaman handoff intent.
- **Rekomendasi**: Jadikan kontak sebagai halaman untuk memulai percakapan pendaftaran. Peta tetap tersedia, tetapi turun prioritas.

### Medium 9. Halaman program dan tentang sudah membantu trust, tetapi belum cukup agresif mengarahkan ke keputusan

- **Gejala**: Kedua halaman cukup baik menjelaskan ritme, guru, dan profil sekolah, tetapi CTA utamanya belum secara konsisten mendorong percakapan pendaftaran.
- **Sumber**: `app/program/page.tsx:33-45`, `components/tentang/AboutPageContent.tsx:55-65`, `components/tentang/AboutPageContent.tsx:203-223`
- **Dampak ke conversion**: Orang tua bisa selesai membaca dengan rasa "menarik", tetapi belum terdorong ke tindakan.
- **Akar masalah**: Halaman pendukung trust tidak ditutup dengan CTA berniat tinggi.
- **Rekomendasi**: Tambahkan handoff yang lebih eksplisit seperti "Jika tahap ini terasa cocok untuk anak Anda, tanyakan kuota dan langkah daftar."

### Medium 10. Beberapa kalimat trust terdengar defensif atau terlalu meta

- **Gejala**: Frasa seperti "bukan sekolah yang baru muncul kemarin" atau "bukan langsung formulir" mencoba meyakinkan, tetapi bisa terdengar defensif.
- **Sumber**: `components/tentang/AboutPageContent.tsx:179-184`, `content/home.ts:323-338`
- **Dampak ke conversion**: Trust lebih lemah daripada bila disampaikan lewat fakta yang tenang dan konkret.
- **Akar masalah**: Copy mencoba memenangkan keberatan dengan retorika, bukan bukti.
- **Rekomendasi**: Ganti dengan nada yang lebih tenang dan faktual.

### Low 11. Audience sekunder seperti magang atau studi banding belum punya jalur yang jelas

- **Gejala**: Situs cukup kredibel untuk orang tua, tetapi tidak memberi satu entry point yang rapi untuk kebutuhan institusional.
- **Dampak ke conversion**: Tidak mengganggu funnel utama, tetapi peluang sekunder belum tertangani.
- **Rekomendasi**: Cukup tambahkan satu jalur kecil di halaman kontak atau tentang, tanpa menggeser fokus utama dari orang tua.

## Contoh Rewrite Prioritas

### 1. Homepage hero

**Tujuan**: Menggeser intent dari "lihat-lihat" menjadi "menilai kecocokan lalu mulai bahas pendaftaran".

- **Headline usulan**: `Sedang menimbang TK untuk anak Anda? Lihat kecocokannya, lalu bahas langkah daftarnya dengan sekolah.`
- **Supporting copy usulan**: `TK Kartikasari cocok untuk keluarga Bantarsari dan sekitarnya yang mencari sekolah kecil, ritme jelas, dan guru yang membantu anak pelan-pelan nyaman ikut kegiatan. Di sini Anda bisa melihat gambaran harian, biaya awal, dan langkah pendaftaran tanpa menebak-nebak.`
- **CTA primer usulan**: `Tanya kuota & langkah daftar`
- **Pesan WhatsApp usulan**: `Halo Bu Mintarsih, saya orang tua calon murid TK Kartikasari. Saya ingin menanyakan kuota, kelompok yang cocok untuk anak saya, dan langkah pendaftaran berikutnya.`
- **CTA sekunder usulan**: `Lihat apakah sekolah ini cocok`

### 2. Sticky action

- **Judul usulan**: `Siap membahas pendaftaran?`
- **Body usulan**: `Tanyakan kuota, kelompok yang cocok, dan langkah daftar. Jika perlu, kunjungan bisa dijadwalkan setelah itu.`
- **Primary CTA usulan**: `Tanya kuota sekarang`
- **Secondary CTA usulan**: `Lihat biaya awal`

### 3. PPDB status panel

**Tujuan**: Menjaga trust sampai data periode benar-benar diperbarui.

- **Title usulan**: `Konfirmasi status PPDB 2026/2027 langsung ke admin.`
- **Description usulan**: `Status kuota dapat berubah. Hubungi admin untuk mengetahui apakah pendaftaran masih dibuka, apakah ada daftar tunggu, dan langkah yang bisa Anda lakukan sekarang.`
- **Action usulan**: `Cek status PPDB`

### 4. Halaman biaya

- **Headline usulan**: `Lihat gambaran biaya dulu, lalu konfirmasi angka terbaru sebelum mendaftar.`
- **Supporting copy usulan**: `Halaman ini membantu keluarga memahami komponen utama dan estimasi tahun pertama. Untuk angka terbaru, skema pembayaran, atau kaitannya dengan kuota, lanjutkan ke admin sekolah.`
- **CTA usulan**: `Tanya biaya & kuota`
- **Pesan WhatsApp usulan**: `Halo Bu Mintarsih, saya ingin menanyakan biaya terbaru, status kuota, dan langkah pendaftaran TK Kartikasari.`

### 5. Halaman kontak

- **Headline usulan**: `Jika Anda sudah tertarik, gunakan halaman ini untuk mulai membahas pendaftaran.`
- **Supporting copy usulan**: `Hubungi sekolah untuk menanyakan kuota, kelompok yang cocok, biaya terbaru, atau langkah administrasi. Jika memang diperlukan, kunjungan bisa dijadwalkan setelah itu.`
- **CTA primer usulan**: `Bahas pendaftaran via WhatsApp`

## Keputusan Per Halaman

| Halaman | Keputusan | Alasan ringkas |
| --- | --- | --- |
| `/` | `rewrite + reorder` | Pesan hangat, tetapi funnel terlalu panjang dan CTA utama belum tepat |
| `/ppdb` | `rewrite` | Halaman paling dekat ke keputusan, tetapi status saat ini terlihat usang |
| `/biaya` | `rewrite` | Sudah membantu perencanaan, tetapi CTA dan trust masih lemah |
| `/kontak` | `reorder + rewrite` | Terlalu fokus ke kunjungan dan peta, belum menjadi handoff pendaftaran |
| `/tentang` | `keep + rewrite` | Fondasi trust kuat, tetapi beberapa kalimat terlalu meta dan CTA belum optimal |
| `/program` | `keep + rewrite` | Penjelasan fit cukup baik, tetapi penutup ke keputusan masih kurang tajam |
| CTA layer | `rewrite` | Perlu taxonomy intent yang konsisten lintas halaman |

## Template Rekomendasi Rewrite

Gunakan format ini untuk rewrite berikutnya supaya review tetap konsisten:

```md
### [Nama blok]
- Goal:
- Audience:
- User question yang harus terjawab:
- Current problem:
- Keep:
- Rewrite:
- CTA label:
- CTA message:
- Expected behavior after reading:
```

## Prioritas Eksekusi Setelah Audit

1. Benahi semua CTA dan pesan WhatsApp agar intent utamanya adalah pembahasan pendaftaran.
2. Amankan trust dengan memperbarui atau menetralkan status PPDB yang sudah lewat tanggalnya.
3. Hapus semua link kontak placeholder dan samakan handoff ke satu sumber data sekolah.
4. Ringkas homepage agar blok langkah daftar muncul lebih awal.
5. Rewrite halaman kontak agar fungsi utamanya menjadi handoff ke admin, bukan orientasi rute.
