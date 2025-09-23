import type { HomeHero } from "./types";

export const hero = {
  badgeSuffix: "• Bulaksari",
  title: "Belajar ceria, tumbuh percaya diri bersama sahabat baru setiap hari",
  description:
    "Lingkungan hangat, fasilitas aman, dan kegiatan tematik yang menumbuhkan rasa ingin tahu anak usia dini di Bantarsari, Cilacap.",
  primaryAction: {
    label: "Daftar PPDB & Tur Sekolah",
    message: "Halo Bu Mintarsih, saya ingin menjadwalkan kunjungan dan mendapatkan info PPDB TK Kartikasari.",
  },
  secondaryAction: {
    label: "Lihat program unggulan",
    href: "#program",
  },
  stats: [
    { value: "15+", label: "Tahun mendampingi anak Bulaksari" },
    { value: "8", label: "Kegiatan tematik kreatif setiap minggu" },
    { value: "100%", label: "Pendampingan perkembangan harian" },
  ],
  aside: {
    schedule: {
      title: "Agenda Hari Ini",
      badge: "Tema Pelangi",
      items: [
        { time: "07.00", activity: "Sambutan pagi & permainan pemanasan" },
        { time: "08.30", activity: "Eksperimen warna di laboratorium mini" },
        { time: "10.00", activity: "Bermain air & pasir di taman sensori" },
      ],
    },
    safety: {
      title: "Lingkungan Aman",
      description:
        "Semua area belajar dipantau CCTV, dilengkapi akses kontrol, serta peralatan ramah anak.",
      highlight: {
        icon: "😊",
        text: "Rasio guru : murid 1 : 8",
      },
    },
    focus: {
      title: "Fokus Harian",
      description: "Motorik, bahasa, sosial-emosi, dan kemandirian.",
    },
    menu: {
      title: "Menu Sehat",
      description: "Snack buah segar & susu rendah gula.",
    },
  },
} satisfies HomeHero;
