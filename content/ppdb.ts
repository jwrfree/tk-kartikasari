
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
    description: "Fotokopi Akta Kelahiran, Kartu Keluarga, dan KTP Orang Tua (masing-masing 1 lembar).",
  },
  {
    title: "Pas Foto",
    description: "Menyerahkan pas foto anak berwarna ukuran 3x4 sebanyak 2 lembar.",
  },
  {
    title: "Biaya Pendaftaran",
    description: "Melakukan pembayaran biaya pendaftaran untuk booking kuota.",
  },
];

export const rincianBiaya = [
    {
        name: "Biaya Pendaftaran",
        amount: "Rp 150.000",
        note: "Sekali bayar, untuk administrasi dan kuota."
    },
    {
        name: "SPP Bulanan",
        amount: "Rp 100.000",
        note: "Termasuk semua kegiatan sentra dan material belajar."
    },
    {
        name: "Uang Seragam",
        amount: "Rp 450.000",
        note: "3 stel (olahraga, batik, harian) kain kualitas premium."
    },
    {
        name: "Uang Kegiatan Tahunan",
        amount: "Rp 500.000",
        note: "Untuk field trip, perayaan hari besar, dan material khusus."
    }
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
      "Biaya pendaftaran yang sudah dibayarkan tidak dapat dikembalikan, karena langsung dialokasikan untuk proses administrasi awal dan booking kuota agar tidak diambil calon lain.",
  },
  {
    question: "Kapan saya akan dihubungi setelah mengirim formulir?",
    answer:
      "Tim kami akan menghubungi Anda melalui WhatsApp dalam 1x24 jam pada hari kerja setelah Anda berhasil mengirimkan formulir pendaftaran online untuk verifikasi data.",
  },
  {
      question: "Apakah ada diskon untuk saudara kandung?",
      answer: "Ya, kami menawarkan diskon 10% untuk SPP anak kedua dan seterusnya yang bersekolah di TK Kartikasari secara bersamaan. Silakan hubungi administrasi untuk info lebih lanjut."
  }
];
