export type HomeStat = {
  value: string;
  label: string;
};

export type HomeHighlight = {
  icon: string;
  title: string;
  description: string;
};

export type HomeProgram = {
  name: string;
  age: string;
  description: string;
  points: string[];
};

export type HomeJourneyItem = {
  time: string;
  title: string;
  description: string;
  icon: string;
};

export type HomeFaq = {
  question: string;
  answer: string;
};

export const homeHeroDescription =
  "Lingkungan hangat, fasilitas aman, dan kegiatan tematik yang menumbuhkan rasa ingin tahu anak usia dini di Bantarsari, Cilacap.";

export const homeStats: HomeStat[] = [
  { value: "15+", label: "Tahun mendampingi anak Bulaksari" },
  { value: "8", label: "Kegiatan tematik kreatif setiap minggu" },
  { value: "100%", label: "Pendampingan perkembangan harian" },
];

export const homeHighlights: HomeHighlight[] = [
  {
    icon: "🎨",
    title: "Belajar sambil berkarya",
    description:
      "Proyek seni, eksperimen sains sederhana, hingga dapur mini membuat anak senang bereksplorasi.",
  },
  {
    icon: "🤝",
    title: "Kolaborasi guru & orang tua",
    description:
      "Laporan perkembangan dikirim rutin dan kelas parenting singkat hadirkan tips mendampingi anak di rumah.",
  },
  {
    icon: "🌱",
    title: "Fokus karakter & kemandirian",
    description:
      "Rutinitas sederhana menumbuhkan rasa tanggung jawab, sopan santun, dan kepercayaan diri.",
  },
];

export const homePrograms: HomeProgram[] = [
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
];

export const homeJourney: HomeJourneyItem[] = [
  {
    time: "07.00",
    title: "Penyambutan ceria",
    description: "Guru menyapa anak satu per satu, memeriksa kesiapan, dan mengajak permainan ringan.",
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
    description: "Setiap hari ada pusat kegiatan berbeda: seni, sains, balok, hingga dapur mini.",
    icon: "🔍",
  },
  {
    time: "10.30",
    title: "Waktu luar ruang",
    description: "Bermain di taman mini, berkebun, dan aktivitas motorik kasar secara aman dan terarah.",
    icon: "🏃",
  },
  {
    time: "11.30",
    title: "Refleksi & doa",
    description: "Anak merangkum pengalaman hari itu, membaca doa, lalu pulang dengan perasaan bahagia.",
    icon: "🙏",
  },
];

export const homeFaqs: HomeFaq[] = [
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
];
