export type PpdbFaq = {
  question: string;
  answer: string;
};

export type PpdbContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  steps: {
    title: string;
    description: string;
    items: string[];
    cta: {
      label: string;
      message: string;
    };
  };
  form: {
    title: string;
    description: string;
    disclaimer: string;
  };
  faqs: {
    title: string;
    items: PpdbFaq[];
  };
};

export const ppdbContent: PpdbContent = {
  hero: {
    eyebrow: "PPDB",
    title: "Penerimaan Peserta Didik Baru",
    description:
      "Kami menyambut keluarga baru yang ingin bergabung dengan TK Kartikasari. Silakan ikuti alur pendaftaran berikut atau hubungi langsung kepala sekolah melalui WhatsApp.",
  },
  steps: {
    title: "Cara Pendaftaran",
    description: "Panduan singkat agar proses pendaftaran berjalan lancar.",
    items: [
      "Hubungi Ibu Mintarsih melalui WhatsApp untuk mengatur jadwal kunjungan sekolah.",
      "Datang ke TK Kartikasari sesuai jadwal yang disepakati untuk observasi singkat.",
      "Lengkapi formulir data anak dan diskusi kebutuhan khusus bersama guru.",
      "Lakukan pembayaran administrasi awal sesuai informasi dari sekolah.",
    ],
    cta: {
      label: "Chat Kepala Sekolah",
      message: "Halo Bu Mintarsih, saya ingin mendapatkan info lengkap PPDB TK Kartikasari.",
    },
  },
  form: {
    title: "Formulir Online",
    description:
      "Isi data singkat berikut untuk mempercepat proses pendaftaran. Setelah dikirim, WhatsApp akan terbuka otomatis dan tim kami akan menindaklanjuti.",
    disclaimer:
      "Data yang terkirim bersifat rahasia dan hanya digunakan untuk keperluan administrasi PPDB TK Kartikasari.",
  },
  faqs: {
    title: "FAQ Pendaftaran",
    items: [
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
    ],
  },
};
