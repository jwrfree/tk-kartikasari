export type PpdbFaq = {
  question: string;
  answer: string;
};

export const ppdbMetaDescription =
  "Lihat status PPDB TK Kartikasari, pahami dokumen yang perlu disiapkan, dan hubungi admin untuk jadwal kunjungan atau daftar tunggu.";

export const syaratDanKetentuan = [
  {
    title: "Usia calon siswa",
    description: "Minimal 4 tahun untuk Kelompok A dan 5 tahun untuk Kelompok B pada tahun ajaran yang dituju.",
  },
  {
    title: "Dokumen dasar keluarga",
    description: "Siapkan akta kelahiran, kartu keluarga, dan identitas orang tua agar proses administrasi tidak terputus di tengah jalan.",
  },
  {
    title: "Foto anak",
    description: "Biasanya sekolah memerlukan pas foto untuk kebutuhan data dan administrasi awal.",
  },
  {
    title: "Konfirmasi biaya dan kuota",
    description: "Sebelum menyerahkan berkas lengkap, pastikan status kuota dan biaya terbaru sudah dikonfirmasi ke admin.",
  },
];

export const ppdbFaqs: PpdbFaq[] = [
  {
    question: "Apakah saya harus datang dulu sebelum mendaftar?",
    answer:
      "Sebaiknya ya. Kunjungan membantu orang tua melihat suasana sekolah, mengenal guru, dan memastikan ritmenya cocok untuk anak sebelum melanjutkan proses administrasi.",
  },
  {
    question: "Kalau kuota sedang penuh, apa yang bisa saya lakukan?",
    answer:
      "Hubungi admin untuk menanyakan status terbaru, kemungkinan daftar tunggu, dan kapan informasi periode berikutnya akan diumumkan.",
  },
  {
    question: "Dokumen apa yang sebaiknya disiapkan lebih dulu?",
    answer:
      "Mulailah dari akta lahir, kartu keluarga, dan identitas orang tua. Dengan begitu, saat sekolah meminta dokumen lanjutan, keluarga tidak perlu terburu-buru.",
  },
  {
    question: "Kapan saya akan mendapat kabar setelah bertanya atau menyerahkan berkas?",
    answer:
      "Tim administrasi biasanya memberi konfirmasi melalui WhatsApp pada hari kerja. Jika ada jeda, keluarga tetap bisa menanyakan ulang ke kontak resmi sekolah.",
  },
  {
    question: "Apakah saya bisa bertanya soal biaya sebelum mendaftar?",
    answer:
      "Tentu. Justru itu langkah yang baik. Keluarga sebaiknya memahami gambaran biaya dulu sebelum melanjutkan ke keputusan pendaftaran.",
  },
];
