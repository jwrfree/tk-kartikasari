export type AgendaItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

export type AgendaContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  items: AgendaItem[];
};

export const agendaContent: AgendaContent = {
  hero: {
    eyebrow: "Agenda",
    title: "Agenda Kegiatan TK Kartikasari",
    description:
      "Agenda disusun untuk melibatkan anak dan orang tua dalam pengalaman belajar yang menyenangkan serta penuh kolaborasi. Simpan tanggal penting berikut di kalender keluarga Anda.",
  },
  items: [
    {
      id: "a1",
      title: "Pentas Seni Semester 1",
      date: "2025-12-01",
      time: "08.00 WIB",
      location: "Aula TK Kartikasari",
      description:
        "Penampilan drama mini dan tari kreasi oleh seluruh murid sebagai penutup tema semester 1.",
    },
    {
      id: "a2",
      title: "Outing Class ke Perpustakaan Daerah",
      date: "2026-01-15",
      time: "07.30 WIB",
      location: "Perpustakaan Daerah Cilacap",
      description:
        "Anak diajak mengenal layanan perpustakaan dan mengikuti sesi membaca bersama pustakawan.",
    },
    {
      id: "a3",
      title: "Parenting Class: Komunikasi Positif",
      date: "2026-01-10",
      time: "09.00 WIB",
      location: "Ruang Pertemuan TK Kartikasari",
      description:
        "Diskusi bersama psikolog anak mengenai strategi membangun komunikasi empatik di rumah.",
    },
  ],
};
