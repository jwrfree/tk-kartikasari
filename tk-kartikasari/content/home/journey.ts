import type { HomeJourney } from "./types";

export const journey = {
  eyebrow: "Suasana belajar harian",
  title: "Jadwal penuh aktivitas yang menstimulasi seluruh aspek perkembangan anak",
  description:
    "Guru kami menyiapkan transisi yang mulus dari aktivitas indoor ke outdoor sehingga anak tetap bersemangat hingga waktu pulang.",
  noteTitle: "Kolaborasi dengan orang tua",
  noteDescription:
    "Orang tua mendapatkan ringkasan kegiatan dan foto terbaik anak setiap hari melalui kanal komunikasi khusus.",
  items: [
    {
      time: "07.00",
      title: "Penyambutan ceria",
      description:
        "Guru menyapa anak satu per satu, memeriksa kesiapan, dan mengajak permainan ringan.",
      icon: "🌞",
    },
    {
      time: "08.00",
      title: "Lingkar pagi",
      description:
        "Anak berbagi cerita, bernyanyi, dan belajar nilai moral sederhana bersama teman-teman.",
      icon: "🗣️",
    },
    {
      time: "09.00",
      title: "Eksplorasi proyek",
      description:
        "Setiap hari ada pusat kegiatan berbeda: seni, sains, balok, hingga dapur mini.",
      icon: "🔍",
    },
    {
      time: "10.30",
      title: "Waktu luar ruang",
      description:
        "Bermain di taman mini, berkebun, dan aktivitas motorik kasar secara aman dan terarah.",
      icon: "🏃",
    },
    {
      time: "11.30",
      title: "Refleksi & doa",
      description:
        "Anak merangkum pengalaman hari itu, membaca doa, lalu pulang dengan perasaan bahagia.",
      icon: "🙏",
    },
  ],
} satisfies HomeJourney;
