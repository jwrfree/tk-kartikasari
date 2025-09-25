
export type PpdbFaq = {
  question: string;
  answer: string;
};

export const ppdbMetaDescription =
  "Pendaftaran siswa baru TK Kartikasari tahun ajaran 2024/2025 telah dibuka. Daftar online sekarang melalui formulir pendaftaran kami yang mudah dan cepat. Kuota terbatas!";

export const syaratDanKetentuan = [
  {
    title: "Usia Calon Siswa",
    description: "Minimal 4 tahun untuk Kelompok A dan 5 tahun untuk Kelompok B per 31 Juli 2024.",
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
    question: "Bagaimana cara mendaftar secara online?",
    answer:
      "Cukup klik tombol 'Daftar Sekarang' di halaman ini, isi formulir data anak dan orang tua, lalu lakukan konfirmasi. Prosesnya hanya membutuhkan waktu sekitar 5-10 menit.",
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
    question: "Kapan saya akan dihubungi setelah mengirim formulir?",
    answer:
      "Salah satu perwakilan kami akan menghubungi Ayah/Bunda secara personal melalui WhatsApp dalam 1x24 jam pada hari kerja untuk memverifikasi data dan menjawab pertanyaan awal.",
  },
  {
      question: "Apakah ada diskon untuk saudara kandung?",
      answer: "Ya, kami menawarkan diskon 10% untuk SPP anak kedua dan seterusnya yang bersekolah di TK Kartikasari secara bersamaan. Silakan hubungi administrasi untuk info lebih lanjut."
  }
];
