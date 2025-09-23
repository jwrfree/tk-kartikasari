import type { HomeFaqs } from "./types";

export const faqs = {
  eyebrow: "Pertanyaan populer",
  title: "Informasi penting seputar pendaftaran dan kegiatan sekolah",
  description:
    "Jika ada pertanyaan lain, kami dengan senang hati menjawab melalui WhatsApp ataupun ketika Anda berkunjung langsung.",
  cta: {
    label: "Tanya langsung via WhatsApp",
    message: "Halo Bu Mintarsih, saya ingin menanyakan informasi mengenai TK Kartikasari.",
  },
  items: [
    {
      question: "Apa keunggulan utama TK Kartikasari?",
      answer:
        "Kami menghadirkan lingkungan belajar yang hangat, aman, dan kaya stimulasi. Guru-guru berpengalaman mendampingi anak dengan pendekatan personal agar setiap potensi tumbuh maksimal.",
    },
    {
      question: "Bagaimana proses penerimaan peserta didik baru?",
      answer:
        "Cukup hubungi Bu Mintarsih melalui WhatsApp untuk jadwal observasi. Orang tua dapat mengisi formulir, konsultasi kebutuhan anak, lalu mengikuti sesi pengenalan kelas.",
    },
    {
      question: "Apakah sekolah menyediakan laporan perkembangan?",
      answer:
        "Ya. Laporan harian singkat dibagikan lewat grup komunikasi, sedangkan laporan perkembangan lengkap diberikan setiap akhir tema dan semester.",
    },
    {
      question: "Bagaimana keterlibatan orang tua di sekolah?",
      answer:
        "Kami rutin mengadakan kelas parenting singkat, hari kunjungan orang tua, dan kolaborasi proyek sehingga keluarga terlibat aktif dalam proses belajar anak.",
    },
  ],
} satisfies HomeFaqs;
