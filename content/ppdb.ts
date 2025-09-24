export type PpdbStep = string;

export type PpdbFaq = {
  question: string;
  answer: string;
};

export const ppdbMetaDescription =
  "Ikuti langkah PPDB TK Kartikasari dan hubungi Ibu Mintarsih melalui WhatsApp untuk jadwal kunjungan serta konsultasi.";

export const ppdbSteps: PpdbStep[] = [
  "Hubungi Ibu Mintarsih melalui WhatsApp untuk mengatur jadwal kunjungan sekolah.",
  "Datang ke TK Kartikasari sesuai jadwal yang disepakati untuk observasi singkat.",
  "Lengkapi formulir data anak dan diskusi kebutuhan khusus bersama guru.",
  "Lakukan pembayaran administrasi awal sesuai informasi dari sekolah.",
];

export const ppdbFaqs: PpdbFaq[] = [
  {
    question: "Kapan pendaftaran dibuka?",
    answer:
      "Pendaftaran dibuka sepanjang tahun ajaran berjalan. Kuota terbatas sehingga kami sarankan menghubungi sekolah lebih awal.",
  },
  {
    question: "Dokumen apa saja yang perlu dibawa?",
    answer:
      "Fotokopi akta kelahiran anak, kartu keluarga, kartu identitas orang tua, dan buku imunisasi (jika ada).",
  },
  {
    question: "Apakah ada biaya formulir?",
    answer:
      "Tidak ada biaya formulir. Pembayaran dilakukan setelah anak dinyatakan diterima dan menyepakati jadwal masuk.",
  },
  {
    question: "Apakah ada program trial class?",
    answer:
      "Ada. Orang tua dapat meminta jadwal percobaan satu hari untuk memastikan anak nyaman sebelum resmi bergabung.",
  },
];
