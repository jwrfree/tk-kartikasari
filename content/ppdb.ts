
export type PpdbFaq = {
  question: string;
  answer: string;
};

export const ppdbMetaDescription =
  "Pendaftaran siswa baru TK Kartikasari tahun ajaran 2025/2026 telah ditutup. Hubungi admin kami untuk menanyakan daftar tunggu atau informasi periode penerimaan berikutnya.";

export const syaratDanKetentuan = [
  {
    title: "Usia Calon Siswa",
    description: "Minimal 4 tahun untuk Kelompok A dan 5 tahun untuk Kelompok B per 31 Juli 2025.",
  },
  {
    title: "Kelengkapan Dokumen",
    description: "Salinan Akta Kelahiran, Kartu Keluarga, dan KTP Orang Tua untuk kelancaran administrasi.",
  },
  {
    title: "Pas Foto",
    description: "Dua lembar pas foto berwarna ukuran 3x4 untuk keperluan data siswa.",
  },
  {
    title: "Biaya Pendaftaran",
    description: "Pembayaran biaya pendaftaran untuk mengamankan tempat putra/i Anda di kelas.",
  },
];

export const ppdbFaqs: PpdbFaq[] = [
  {
    question: "Bagaimana cara mendaftar?",
    answer:
      "Silakan hubungi admin PPDB melalui WhatsApp untuk menjadwalkan kunjungan. Ayah/Bunda dapat membawa anak sekaligus menyerahkan dokumen saat datang ke sekolah.",
  },
  {
    question: "Apa saja yang termasuk dalam SPP bulanan?",
    answer:
      "SPP mencakup semua kegiatan belajar-mengajar reguler di dalam sentra (kurikulum merdeka), termasuk material dasar bermain dan belajar. Tidak ada biaya tersembunyi untuk kegiatan inti.",
  },
  {
    question: "Apakah biaya pendaftaran bisa dikembalikan?",
    answer:
      "Seluruh biaya pendaftaran dialokasikan langsung untuk proses administrasi dan memastikan kuota tidak terisi oleh calon lain. Oleh karena itu, biaya ini bersifat non-refundable. Kami sarankan untuk memastikan semua informasi sudah sesuai sebelum melakukan pembayaran.",
  },
  {
    question: "Kapan kami akan dihubungi setelah menyerahkan berkas?",
    answer:
      "Tim administrasi akan mengonfirmasi penerimaan berkas dan jadwal tindak lanjut melalui WhatsApp maksimal 1x24 jam pada hari kerja.",
  },
  {
      question: "Apakah ada diskon untuk saudara kandung?",
      answer: "Ya, kami menawarkan diskon 10% untuk SPP anak kedua dan seterusnya yang bersekolah di TK Kartikasari secara bersamaan. Silakan hubungi administrasi untuk info lebih lanjut."
  }
];
