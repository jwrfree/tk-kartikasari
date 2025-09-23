import type { HomePrograms } from "./types";

export const programs = {
  eyebrow: "Program unggulan",
  title: "Tiga jalur belajar yang disesuaikan dengan tahap tumbuh kembang anak",
  description:
    "Setiap kelas dipandu guru inti dan guru pendamping dengan rasio kecil. Kami menyeimbangkan stimulasi akademik, karakter, dan kegiatan bermain bebas.",
  guidelines: [
    "Observasi minat dan kebutuhan anak sebelum penempatan kelas.",
    "Rencana belajar individual yang dikirim ke orang tua di awal tema.",
    "Evaluasi menyenangkan melalui pameran karya dan pertunjukan kecil.",
  ],
  items: [
    {
      name: "Kelas Bintang",
      age: "Usia 4-5 tahun",
      description:
        "Kurikulum bermain terpadu untuk mengenal huruf, angka, dan kemampuan sosial dasar.",
      points: [
        "Senam pagi dan circle time menyenangkan",
        "Eksplorasi sensorik dan role play",
        "Pengenalan literasi melalui cerita dan lagu",
      ],
    },
    {
      name: "Kelas Pelangi",
      age: "Usia 5-6 tahun",
      description:
        "Persiapan menuju SD dengan proyek tematik dan kegiatan memecahkan masalah sederhana.",
      points: [
        "Proyek STEAM mingguan",
        "Pembiasaan menulis dan berhitung ringan",
        "Field trip edukatif ke lingkungan sekitar",
      ],
    },
    {
      name: "Ekstrakurikuler Ceria",
      age: "Setiap Jumat",
      description:
        "Pilihan kelas tambahan seperti tari, tahfidz, dan kreativitas memasak untuk menyalurkan minat anak.",
      points: [
        "Dipandu instruktur ramah dan tersertifikasi",
        "Pertunjukan kecil tiap akhir tema",
        "Terbuka untuk kolaborasi dengan komunitas",
      ],
    },
  ],
} satisfies HomePrograms;
