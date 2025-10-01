import { officialMilestones, officialProfile } from "@/data/official";
import type {
  HomeCredential,
  HomeCurriculumPillar,
  HomeFaq,
  HomeHighlight,
  HomeJourneyItem,
  HomeOnboardingStep,
  HomeProgram,
  HomeStat,
  HomeTimelineMilestone,
  HomeAgendaItem,
} from "@/app/types/home";

export const homeHero = {
  badgeSuffix: "Kurikulum Merdeka PAUD",
  title: "Awal Terbaik untuk Si Kecil: Belajar Sambil Ceria di Rumah Kedua Mereka",
  description:
    "Sebagai TK berpengalaman di Bantarsari, kami menggabungkan tradisi pengajaran yang hangat dengan Kurikulum Merdeka. Kami memastikan setiap anak mendapat perhatian personal dalam lingkungan yang aman, sehingga mereka tumbuh percaya diri, kreatif, dan siap untuk jenjang sekolah berikutnya.",
  highlight: {
    title: "Belajar aktif & penuh perhatian",
    description:
      "Kelas kecil dengan guru pendamping personal membantu anak cepat nyaman, bereksplorasi, dan siap melanjutkan ke jenjang berikutnya.",
    ratioLabel: "Rasio guru : anak",
  },
  secondaryCtaLabel: "Info PPDB",
};

export const homeOnboardingCopy = {
  eyebrow: "Mulai dari Sini",
  title: "Alur singkat bergabung bersama TK Kartikasari",
  description:
    "Ikuti empat langkah ringkas ini untuk mengenal sekolah, menyiapkan berkas, dan memastikan kuota sebelum periode pendaftaran tatap muka dibuka.",
  primaryCtaLabel: "Info PPDB 2025/2026",
  steps: [
    {
      key: "routine",
      href: "#pengalaman",
      icon: "🧭",
      title: "Jelajahi Rutinitas & Lingkungan",
      description:
        "Kenali agenda harian, suasana kelas, dan cara kami mendampingi anak agar cepat nyaman.",
      linkLabel: "Lihat pengalaman harian",
    },
    {
      key: "cost",
      href: "/biaya",
      icon: "💡",
      title: "Hitung Investasi Pendidikan",
      description:
        "Pelajari struktur biaya, jadwal pembayaran, dan opsi keringanan agar rencana keluarga tetap nyaman.",
      linkLabel: "Buka rincian biaya",
    },
    {
      key: "documents",
      href: "/ppdb#requirements",
      icon: "🗂️",
      title: "Lengkapi Dokumen Awal",
      description:
        "Siapkan akta kelahiran, KK, dan identitas orang tua agar proses administrasi berjalan mulus.",
      linkLabel: "Lihat daftar dokumen",
    },
    {
      key: "apply",
      href: "/kontak",
      icon: "📍",
      title: "Konfirmasi Kuota & Jadwal",
      description:
        "Hubungi admin TK Kartikasari untuk mengetahui status kuota terbaru, daftar tunggu, dan jadwal pembaruan PPDB.",
      linkLabel: "Hubungi admin sekarang",
    },
  ] satisfies HomeOnboardingStep[],
};

export const homeHighlightsCopy = {
  eyebrow: "Mengapa orang tua mempercayakan anaknya",
  title: "Tiga janji utama kami untuk ketenangan Ayah & Bunda",
  description:
    "Komitmen kami adalah menciptakan lingkungan belajar yang aman secara legal, nyaman untuk anak, dan berakar pada nilai-nilai keindonesiaan.",
};

export const homeCredentialsCopy = {
  eyebrow: "Bukti Kepercayaan Anda",
  title: "Kredensial Resmi dan Perjalanan Panjang yang Teruji",
  description:
    "Seluruh informasi sekolah tersimpan di basis data Kemendikbudristek dan diperkuat oleh sejarah layanan kami untuk keluarga Bantarsari.",
  legalTitle: "Legalitas & Info Resmi",
  timelineTitle: "Jejak Langkah Kami",
};

export const homeCurriculumCopy = {
  eyebrow: "Filosofi Pendidikan Kami",
  title: "Tiga Pilar Kami dalam Membentuk Karakter Anak",
  description:
    "Kami fokus pada tiga area utama untuk memastikan anak tidak hanya pintar, tetapi juga tumbuh menjadi pribadi yang baik, bangga pada budayanya, dan siap untuk belajar lebih lanjut.",
};

export const homeProgramsCopy = {
  eyebrow: "Program Kurikulum Merdeka",
  title: "Jalur Belajar yang Disesuaikan untuk Setiap Anak",
  description:
    "Guru inti dan guru pendamping berkolaborasi untuk menyeimbangkan pengembangan karakter, kemampuan dasar, dan kegembiraan bermain melalui projek-projek yang relevan dengan dunia anak.",
  preparationSteps: [
    "Observasi minat, gaya belajar, serta diskusi orang tua untuk menentukan kebutuhan utama anak.",
    "Perumusan tujuan pembelajaran Kurikulum Merdeka dan strategi diferensiasi setiap awal tema.",
    "Pameran karya, refleksi projek P5, dan laporan portofolio terstruktur di akhir tema.",
  ],
  stickyReveal: {
    eyebrow: "Sorot Program",
    heading: "Pengalaman belajar yang menyatu dari playgroup hingga TK B",
    description:
      "Setiap kelas dirancang dengan ritme yang lembut, memadukan eksplorasi terstruktur dan bermain bebas supaya anak belajar tanpa kehilangan rasa aman.",
  },
};

export const homeExperienceCopy = {
  eyebrow: "Aktivitas Harian",
  title: "Transisi Lembut yang Menjaga Antusiasme Anak",
  description:
    "Rangkaian kegiatan mengikuti struktur Kurikulum Merdeka PAUD: mulai dari pembiasaan nilai, eksplorasi, hingga refleksi dan asesmen autentik.",
  parentCollab: {
    title: "Kolaborasi dengan Orang Tua",
    description:
      "Orang tua menerima ringkasan harian, refleksi projek P5, dan rekomendasi penguatan karakter untuk diterapkan di rumah.",
  },
};

export const homeDailyAgenda = {
  header: {
    title: "Agenda Kurikulum Merdeka",
    badge: "Projek Profil Pelajar Pancasila",
  },
  items: [
    { time: "07.00", description: "Penyambutan hangat, doa, dan pemetaan emosi anak." },
    { time: "08.30", description: "Diskusi nilai Pancasila dan eksplorasi budaya lokal." },
    { time: "10.00", description: "Sentra pilihan: STEAM, literasi, seni, atau role play terarah." },
  ] satisfies HomeAgendaItem[],
  info: {
    title: "Lingkungan aman & terdata resmi",
    description:
      "Terdaftar dengan NPSN {{npsn}}, area 440 m² terpantau, dan peralatan ramah anak untuk belajar yang nyaman.",
    ratioLabel: "Rasio guru : anak",
    defaultNpsn: "20351273",
  },
  focusCards: [
    {
      title: "Fokus Harian",
      description: "Nilai agama & budi pekerti, jati diri, serta kecakapan literasi sesuai fase fondasi.",
    },
    {
      title: "Asesmen Autentik",
      description: "Jurnal perkembangan, dokumentasi karya, dan umpan balik personal setiap pekan.",
    },
  ],
};

export const homeBlogCopy = {
  eyebrow: "Blog & Berita",
  title: "Tips Parenting dan Kegiatan Sekolah Terbaru",
  description:
    "Ikuti artikel terbaru dari kami untuk mendapatkan wawasan seputar dunia pendidikan anak usia dini dan melihat keseruan kegiatan di TK Kartikasari.",
  emptyTitle: "Belum ada cerita terbaru",
  emptyDescription:
    "Tim kami sedang mempersiapkan artikel yang bisa membantu Ayah dan Bunda. Sementara itu, silakan jelajahi halaman lain atau hubungi kami untuk informasi langsung.",
  emptyPrimaryCta: "Lihat program belajar",
  emptySecondaryCta: "Hubungi kami",
};

export const homeFaqCopy = {
  eyebrow: "Sering Ditanyakan",
  title: "Informasi Penting Seputar Pendaftaran",
  description:
    "Jika ada pertanyaan lain, kami dengan senang hati menjawab melalui WhatsApp ataupun ketika Anda berkunjung langsung.",
};

export const homeFinalCtaCopy = {
  eyebrow: "Siap Bergabung",
  title: "Lihat Langsung Bagaimana Anak-Anak Belajar dengan Gembira",
  description:
    "Kami mengundang Anda untuk merasakan sendiri suasana hangat di kelas kami. Lihat sentra belajar yang interaktif dan temukan bagaimana projek seru kami menumbuhkan kreativitas serta rasa percaya diri anak.",
  secondaryCtaLabel: "Lihat Program Kembali",
};

export const homeHeroDescription =
  "Membantu anak tumbuh menjadi pribadi yang ceria dan berkarakter Pancasila. Caranya? Lewat pendampingan personal, kegiatan yang sesuai minat anak, dan projek seru yang membangun kemampuan anak sesuai standar pendidikan nasional.";

export const homeStats: HomeStat[] = [
  {
    value: `${officialProfile.yearsOperating}+`,
    label: "Tahun mendampingi keluarga Bantarsari sejak 1998",
  },
  {
    value: "PAUD Merdeka",
    label: "Kurikulum yang membebaskan anak bereksplorasi",
  },
  {
    value: "1 : 8",
    label: "Rasio guru dan anak agar setiap anak diperhatikan",
  },
];

export const homeHighlights: HomeHighlight[] = [
  {
    icon: "🛡️",
    title: "Pilihan Tenang untuk Ayah & Bunda",
    description: `Sekolah kami terdaftar resmi (NPSN: ${officialProfile.npsn}) dan memiliki izin operasional sejak 1998. Ayah dan Bunda juga akan mendapat info harian lewat WhatsApp agar selalu tenang.`,
  },
  {
    icon: "🤗",
    title: "Anak Cepat Nyaman & Berani",
    description:
      "Kami menyambut setiap anak dengan hangat dan memantau suasana hatinya. Rata-rata, anak sudah merasa nyaman dan berani di sekolah dalam tiga hari pertama.",
  },
  {
    icon: "🧠",
    title: "Hati Tetap Indonesia, Siap Mendunia",
    description:
      "Dengan rasio guru dan anak 1:8, kami memastikan setiap anak mendapat perhatian. Kegiatan gotong royong dan pilihan sentra belajar membantu anak tumbuh mandiri, cerdas, dan cinta Indonesia.",
  },
];

export const homePrograms: HomeProgram[] = [
  {
    name: "Kelas A • Fondasi Merdeka",
    age: "Usia 4–5 tahun",
    description:
      "Kelas peralihan yang fokus pada adaptasi, kemandirian, serta menanamkan nilai-nilai baik.",
    points: [
      "Projek seru seputar rasa syukur, peduli sesama, dan cinta lingkungan.",
      "Pilihan kegiatan belajar yang sesuai dengan gaya anak (visual, pendengaran, gerakan).",
      "Laporan harian berupa foto dan cerita singkat dibagikan kepada orang tua.",
    ],
  },
  {
    name: "Kelas B • Siap Sekolah Dasar",
    age: "Usia 5–6 tahun",
    description:
      "Menguatkan kemampuan baca-tulis-hitung (calistung) dan rasa percaya diri dengan konteks dunia anak.",
    points: [
      "Projek sains dan seni yang asyik, seperti merancang bangunan dari bahan daur ulang atau belajar lewat musik dan gerak.",
      "Latihan bercerita dan tampil di depan teman untuk menumbuhkan keberanian.",
      "Rencana belajar yang dibuat khusus untuk setiap anak, disepakati bersama keluarga di setiap awal tema.",
    ],
  },
  {
    name: "Kegiatan Seru Tambahan",
    age: "Jumat kreatif & pekan tematik",
    description:
      "Kegiatan di luar kelas untuk mengasah bakat dan memperkaya karakter anak.",
    points: [
      "Pameran karya bersama setiap akhir tema untuk merayakan hasil belajar anak.",
      "Pilihan kelas seperti mengaji (tahfidz), menari, memasak, dan komputer dasar.",
      "Mengundang narasumber dari lingkungan sekitar (misal: polisi, pemadam kebakaran).",
    ],
  },
];

export const homeJourney: HomeJourneyItem[] = [
  {
    time: "07.00",
    title: "Sambut Pagi Ceria",
    description:
      "Guru menyapa setiap anak, mengecek suhu tubuh, dan mengajak berdoa bersama sebelum mulai bermain.",
    icon: "🌅",
  },
  {
    time: "08.00",
    title: "Lingkar Karakter Pancasila",
    description:
      "Duduk melingkar sambil mendengarkan cerita baik, menyanyikan lagu daerah, dan berbagi rasa bangga menjadi anak Indonesia.",
    icon: "🇮🇩",
  },
  {
    time: "09.15",
    title: "Bermain di Sentra Pilihan",
    description:
      "Anak bebas memilih sentra main yang disuka: seni, sains, balok, atau main peran, sambil ditemani guru.",
    icon: "🧩",
  },
  {
    time: "10.30",
    title: "Eksplorasi di Luar Ruang",
    description:
      "Saatnya berkebun, bermain air, atau melakukan percobaan sederhana untuk lebih peduli pada alam.",
    icon: "🌿",
  },
  {
    time: "11.15",
    title: "Cerita Hari Ini & Pulang",
    description:
      "Anak menceritakan hasil karyanya dengan bangga, menggambar perasaan hari ini di jurnal, lalu menutup hari dengan doa.",
    icon: "📘",
  },
];

export const homeFaqs: HomeFaq[] = [
  {
    question: "Apa bedanya TK Kartikasari dengan yang lain?",
    answer:
      "Sejak 1998, kami menciptakan lingkungan belajar yang hangat seperti di rumah, terdaftar secara resmi, dan kini menjadi salah satu sekolah penggerak Kurikulum Merdeka di Bantarsari.",
  },
  {
    question: "Kurikulumnya seperti apa?",
    answer:
      "Kami memakai Kurikulum Merdeka. Artinya, anak-anak lebih banyak diajak bereksplorasi lewat projek seru, dan cara belajarnya disesuaikan dengan minat dan kesiapan setiap anak.",
  },
  {
    question: "Bagaimana cara saya tahu perkembangan anak?",
    answer:
      "Setiap hari, guru akan mengirimkan cerita singkat dan foto kegiatan anak. Kami juga ada laporan resmi berupa portofolio karya anak di setiap akhir tema dan semester.",
  },
  {
    question: "Bagaimana jika anak saya pemalu atau sulit beradaptasi?",
    answer:
      "Jangan khawatir. Tiga hari pertama adalah masa perkenalan. Akan ada satu guru yang mendampingi anak secara khusus, dan kami akan terus berkomunikasi dengan Ayah/Bunda lewat WhatsApp.",
  },
  {
    question: "Apakah orang tua perlu terlibat di sekolah?",
    answer:
      "Tentu, kami sangat senang jika orang tua terlibat! Ada kelas parenting, sesi berbagi saat anak selesai projek, dan diskusi rutin dengan guru untuk mendukung tumbuh kembang anak.",
  },
];

export const homeCredentials: HomeCredential[] = [
  {
    label: "NPSN",
    value: officialProfile.npsn,
    description: "Terdaftar di database resmi Kemendikbudristek.",
  },
  {
    label: "SK Operasional",
    value: officialProfile.operationalLicense,
    description: "Izin resmi penyelenggaraan pendidikan sejak 1998.",
  },
  {
    label: "Kurikulum Acuan",
    value: officialProfile.curriculum,
    description: "Menerapkan Kurikulum Merdeka dan Projek Profil Pelajar Pancasila.",
  },
  {
    label: "Luas Lahan",
    value: officialProfile.landArea,
    description: "Area aman untuk bermain di dalam dan di luar ruangan.",
  },
  {
    label: "Kontak Resmi",
    value: officialProfile.email,
    description: "Email resmi untuk keperluan surat-menyurat dan administrasi.",
  },
];

export const homeCurriculumPillars: HomeCurriculumPillar[] = [
  {
    title: "Hati yang Baik & Sopan Santun",
    subtitle: "Dasar dari segalanya",
    points: [
      "Kegiatan rutin yang menanamkan rasa syukur, empati, dan peduli sesama.",
      "Membiasakan ibadah, doa, dan tata krama dalam kegiatan sehari-hari.",
      "Kerja sama dengan orang tua untuk melanjutkan kebiasaan baik di rumah.",
    ],
  },
  {
    title: "Bangga Jadi Anak Indonesia",
    subtitle: "Mengenal akar budaya",
    points: [
      "Mengenal budaya lokal Cilacap dan keberagaman Indonesia lewat permainan.",
      "Projek gotong royong, menghargai perbedaan, dan berbagi dengan lingkungan sekitar.",
      "Program \"Aku Anak Hebat\" untuk membangun rasa percaya diri dan kemandirian.",
    ],
  },
  {
    title: "Calistung & Kreativitas",
    subtitle: "Bekal siap sekolah dasar",
    points: [
      "Belajar baca, tulis, hitung (calistung) lewat cara yang asyik dan sesuai minat anak.",
      "Percobaan sains sederhana, pengenalan komputer, dan kegiatan seni yang aman.",
      "Perkembangan anak dinilai dari hasil karyanya dan cerita yang ia sampaikan.",
    ],
  },
];

export const homeTimeline: HomeTimelineMilestone[] = officialMilestones;
