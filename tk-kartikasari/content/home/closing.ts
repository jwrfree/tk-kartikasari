import type { HomeClosing } from "./types";

export const closing = {
  eyebrow: "Siap bergabung",
  title: "Jadwalkan tur sekolah dan rasakan langsung keceriaan anak-anak TK Kartikasari",
  description:
    "Kami membuka sesi kunjungan setiap Senin dan Kamis. Tim kami akan menemani Anda berkeliling kelas, taman bermain, hingga ruang kegiatan khusus.",
  primaryAction: {
    label: "Jadwalkan kunjungan",
    message: "Halo Bu Mintarsih, saya ingin menjadwalkan tur sekolah TK Kartikasari.",
  },
  secondaryAction: {
    label: "Lihat program kembali",
    href: "#program",
  },
} satisfies HomeClosing;
