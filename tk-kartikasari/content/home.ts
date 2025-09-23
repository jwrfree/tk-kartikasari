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

export type HomeJourney = {
  time: string;
  title: string;
  description: string;
  icon: string;
};

export type HomeFaq = {
  question: string;
  answer: string;
};

export type HomeHeroScheduleItem = {
  time: string;
  activity: string;
};

export type HomeHeroAside = {
  schedule: {
    title: string;
    badge: string;
    items: HomeHeroScheduleItem[];
  };
  safety: {
    title: string;
    description: string;
    highlight: {
      icon: string;
      text: string;
    };
  };
  focus: {
    title: string;
    description: string;
  };
  menu: {
    title: string;
    description: string;
  };
};

export type HomeHero = {
  badgeSuffix: string;
  title: string;
  description: string;
  primaryAction: {
    label: string;
    message: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
  stats: HomeStat[];
  aside: HomeHeroAside;
};

export type HomeTestimonial = {
  id: string;
  quote: string;
  author: string;
};

export type HomeTestimonialSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: HomeTestimonial[];
};

export type HomeContent = {
  hero: HomeHero;
  highlights: {
    eyebrow: string;
    title: string;
    description: string;
    items: HomeHighlight[];
  };
  programs: {
    eyebrow: string;
    title: string;
    description: string;
    guidelines: string[];
    items: HomeProgram[];
  };
  journey: {
    eyebrow: string;
    title: string;
    description: string;
    noteTitle: string;
    noteDescription: string;
    items: HomeJourney[];
  };
  faqs: {
    eyebrow: string;
    title: string;
    description: string;
    cta: {
      label: string;
      message: string;
    };
    items: HomeFaq[];
  };
  testimonials: HomeTestimonialSection;
  closing: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: {
      label: string;
      message: string;
    };
    secondaryAction: {
      label: string;
      href: string;
    };
  };
};

export const homeContent: HomeContent = {
  hero: {
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
  },
  highlights: {
    eyebrow: "Mengapa orang tua memilih kami",
    title: "Sekolah yang menumbuhkan rasa ingin tahu dan karakter positif sejak dini",
    description:
      "Tim pengajar kami merancang pengalaman belajar yang menyeluruh, menyenangkan, dan penuh perhatian.",
    items: [
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
    ],
  },
  programs: {
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
  },
  journey: {
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
  },
  faqs: {
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
  },
  testimonials: {
    eyebrow: "Suara Orang Tua",
    title: "Mereka melihat anak tumbuh lebih percaya diri dan bahagia",
    description:
      "Cerita asli dari keluarga yang mempercayakan proses belajar anaknya di TK Kartikasari.",
    items: [
      {
        id: "t1",
        quote: "Guru-gurunya ramah, sabar, dan sangat peduli perkembangan anak.",
        author: "Ibu Rani — Orang tua Damar",
      },
      {
        id: "t2",
        quote: "Anak saya jadi percaya diri dan berani tampil di depan teman-temannya.",
        author: "Pak Surya — Orang tua Lila",
      },
      {
        id: "t3",
        quote: "Kegiatan sekolahnya kreatif, setiap minggu selalu ada proyek seru yang bisa dibawa pulang.",
        author: "Ibu Wati — Orang tua Raka",
      },
      {
        id: "t4",
        quote: "Komunikasi dengan wali kelas sangat mudah dan informatif, kami merasa dilibatkan.",
        author: "Pak Dedi — Orang tua Salsa",
      },
      {
        id: "t5",
        quote: "Fasilitasnya bersih, aman, dan anak-anak selalu terlihat ceria ketika dijemput.",
        author: "Ibu Mira — Orang tua Zahra",
      },
    ],
  },
  closing: {
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
  },
};
