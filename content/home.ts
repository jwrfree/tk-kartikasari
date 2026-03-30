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

type NarrativeItem = {
  title: string;
  description: string;
};

type FactItem = {
  label: string;
  value: string;
  description?: string;
};

export const homeHero = {
  eyebrow: "TK untuk usia 4-6 tahun di Bantarsari",
  title: "Sekolah pertama yang bikin anak cepat nyaman, dan orang tua cepat yakin.",
  description:
    "Kami membantu anak berani masuk kelas, kenal guru, dan menikmati rutinitas sekolah sejak minggu-minggu awal. Orang tua mendapat proses yang jelas, kabar yang rutin, dan kesempatan melihat suasana sekolah langsung sebelum memutuskan.",
  secondaryCtaLabel: "Lihat kegiatan harian",
  proofItems: [
    { label: "Rasio kecil", value: "1 : 8" },
    { label: "Terdaftar resmi", value: `NPSN ${officialProfile.npsn}` },
    { label: "Pendampingan harian", value: "Update singkat untuk orang tua" },
  ],
};

export const homeFirstWeek = {
  eyebrow: "1. Apakah anak saya bakal nyaman?",
  title: "Di minggu pertama, fokus kami bukan membuat anak terlihat pintar. Fokus kami membuat anak mau datang lagi besok.",
  description:
    "Anak tidak langsung dituntut ikut semua kegiatan. Guru membantu transisi pelan-pelan sampai anak tahu siapa yang menyambutnya, di mana ia duduk, kapan ia bermain, dan kapan ia pulang.",
  items: [
    {
      title: "Hari pertama tidak dikejar target",
      description:
        "Kalau anak masih ingin melihat dulu, itu wajar. Guru akan mengenalkan ruang, teman, dan rutinitas tanpa memaksa anak langsung aktif.",
    },
    {
      title: "Ada guru yang benar-benar mengenali anak",
      description:
        "Kami memperhatikan bagaimana anak masuk kelas, merespons teman, dan menenangkan diri. Dari situ guru tahu cara mendampingi yang paling pas.",
    },
    {
      title: "Orang tua tetap tahu perkembangannya",
      description:
        "Di masa adaptasi, orang tua tidak dibiarkan menebak-nebak. Kami memberi kabar singkat tentang bagaimana anak menjalani harinya.",
    },
  ] satisfies NarrativeItem[],
  factItems: [
    {
      label: "Masa adaptasi",
      value: "Pelan tapi jelas",
      description: "Anak tidak dibiarkan bingung menghadapi ritme baru sendirian.",
    },
    {
      label: "Pendampingan",
      value: "Guru mengenali anak",
      description: "Bukan hanya mengajar, tetapi juga membaca kebutuhan transisinya.",
    },
    {
      label: "Komunikasi",
      value: "Kabar singkat harian",
      description: "Orang tua tahu apa yang terjadi tanpa harus menunggu lama.",
    },
  ] satisfies FactItem[],
};

export const homeExperienceCopy = {
  eyebrow: "2. Kesehariannya seperti apa?",
  title: "Sehari di sekolah cukup sederhana: datang, kenal guru, bermain terarah, istirahat, lalu pulang sambil bawa cerita.",
  description:
    "Kami tidak membangun hari sekolah dari istilah rumit. Yang paling penting adalah ritme yang bisa dipahami anak, cukup teratur untuk membuatnya tenang, dan cukup hidup untuk membuatnya antusias datang lagi.",
  parentCollab: {
    title: "Yang diterima orang tua",
    description:
      "Orang tua mendapat gambaran singkat tentang kegiatan anak, perubahan adaptasi, dan hal yang bisa dilanjutkan lagi di rumah.",
  },
};

export const homeDailyAgenda = {
  header: {
    title: "Contoh ritme satu pagi",
    badge: "Bukan jadwal kaku",
  },
  items: [
    { time: "07.00", description: "Anak datang, disambut guru, lalu masuk kelas tanpa diburu-buru." },
    { time: "08.00", description: "Ada kegiatan bersama, cerita singkat, dan permainan yang membuat anak mulai merasa ikut." },
    { time: "09.15", description: "Anak memilih atau mengikuti kegiatan utama sesuai ritme kelas hari itu." },
  ] satisfies HomeAgendaItem[],
  info: {
    title: "Yang orang tua biasanya rasakan",
    description:
      "Rutinitas yang jelas membuat anak lebih mudah tenang. Dari sisi orang tua, proses ini terasa lebih meyakinkan karena tidak serba mendadak.",
    ratioLabel: "Rasio guru : anak",
    defaultNpsn: "20351273",
  },
  focusCards: [
    {
      title: "Bukan sekadar ramai",
      description: "Kegiatan dibuat aktif, tetapi tetap punya ritme yang mudah diikuti anak.",
    },
    {
      title: "Bukan sekadar duduk belajar",
      description: "Anak bergerak, berbicara, mencoba, lalu pulang dengan pengalaman yang bisa diceritakan.",
    },
  ],
};

export const homeParentUpdates = {
  eyebrow: "3. Apa yang orang tua terima setiap hari?",
  title: "Orang tua tidak perlu menebak-nebak hari anak di sekolah.",
  description:
    "Kepercayaan tumbuh saat orang tua tahu apa yang benar-benar terjadi, bukan hanya mendengar kesan umum seperti 'hari ini baik-baik saja'.",
  items: [
    {
      title: "Kabar singkat yang relevan",
      description: "Bukan laporan panjang, tetapi cukup untuk tahu anak ikut apa, bagaimana suasananya, dan apa yang menonjol hari itu.",
    },
    {
      title: "Titik yang perlu dilanjutkan di rumah",
      description: "Jika ada hal yang sedang dilatih atau perlu diperhatikan, orang tua mendapat konteks yang jelas.",
    },
    {
      title: "Percakapan dengan guru tidak terasa jauh",
      description: "Kalau ada pertanyaan atau kekhawatiran, jalur komunikasinya langsung dan tidak berputar-putar.",
    },
  ] satisfies NarrativeItem[],
};

export const homeSchoolFit = {
  eyebrow: "4. Sekolah ini cocok untuk siapa?",
  title: "Cocok untuk keluarga yang mencari sekolah kecil dengan ritme jelas, bukan sekolah yang ingin terlihat heboh.",
  description:
    "TK Kartikasari cocok untuk orang tua yang ingin anak nyaman dulu, lalu berkembang pelan-pelan dengan pendampingan yang terasa dekat dan proses yang mudah dipahami.",
  items: [
    {
      title: "Cocok jika anak masih butuh waktu adaptasi",
      description: "Kami tidak menuntut semua anak langsung berani. Anak boleh masuk pelan-pelan sampai benar-benar merasa aman.",
    },
    {
      title: "Cocok jika orang tua ingin proses yang jelas",
      description: "Mulai dari kunjungan, status PPDB, hingga kabar harian dibuat seterang mungkin supaya tidak membingungkan keluarga.",
    },
    {
      title: "Cocok jika Anda lebih peduli suasana daripada jargon",
      description: "Kami tetap mengikuti standar pendidikan resmi, tetapi yang kami tunjukkan ke orang tua adalah pengalaman nyata anak di kelas.",
    },
  ] satisfies NarrativeItem[],
};

export const homeHighlightsCopy = {
  eyebrow: "Yang biasanya ingin dipastikan orang tua",
  title: "Sebelum bertanya soal kurikulum, orang tua biasanya ingin memastikan tiga hal ini dulu.",
  description:
    "Apakah anak cepat nyaman, apakah sekolah ini jelas dan resmi, dan apakah orang tua akan benar-benar tahu perkembangan anak sehari-hari.",
};

export const homeHighlights: HomeHighlight[] = [
  {
    icon: "Heart",
    title: "Anak lebih mudah tenang saat masuk kelas",
    description:
      "Kami memberi waktu adaptasi yang wajar, mengenalkan rutinitas dengan pelan, dan memastikan anak tahu siapa yang mendampinginya.",
  },
  {
    icon: "ShieldCheck",
    title: "Sekolah ini mudah dicek dan mudah dihubungi",
    description:
      `Data resmi sekolah dapat diverifikasi, jalur komunikasi jelas, dan orang tua tahu harus bertanya ke mana saat butuh kepastian.`,
  },
  {
    icon: "ChatSquareText",
    title: "Orang tua tetap mendapat konteks harian",
    description:
      "Bukan hanya tahu anak berangkat dan pulang, tetapi juga tahu bagaimana hari itu berjalan dan apa yang sedang dilatih di sekolah.",
  },
];

export const homeProgramsCopy = {
  eyebrow: "5. Anak melakukan apa di sekolah?",
  title: "Anak tidak dipaksa belajar dengan ritme yang sama.",
  description:
    "Program kami dibagi berdasarkan fase usia, tetapi yang paling penting adalah bagaimana anak menjalani hari: bergerak, berbicara, mencoba, menunggu giliran, dan pelan-pelan lebih siap mengikuti kegiatan bersama.",
};

export const homePrograms: HomeProgram[] = [
  {
    name: "Kelompok A",
    age: "Usia 4-5 tahun",
    description: "Fase ini cocok untuk anak yang masih belajar nyaman berada di sekolah, mengikuti arahan sederhana, dan mulai terbiasa dengan rutinitas bersama.",
    points: [
      "Anak banyak diajak mengenali kelas, mengikuti kegiatan singkat, dan belajar menyelesaikan aktivitas sederhana sampai selesai.",
      "Permainan dibuat untuk melatih keberanian bicara, menunggu giliran, merapikan alat, dan merasa aman bersama teman.",
      "Orang tua biasanya mulai melihat anak lebih paham ritme pagi dan tidak terlalu tegang saat berangkat sekolah.",
    ],
    forWho: "Untuk anak yang masih butuh pendampingan transisi dan ritme yang tidak terburu-buru.",
    whatChildrenDo: [
      "Mendengarkan cerita pendek, bermain peran, mencoba kegiatan sensorik, dan mengikuti permainan kelompok kecil.",
      "Belajar menyampaikan kebutuhan sederhana, meminta bantuan, dan menyelesaikan aktivitas sampai akhir.",
    ],
    whatParentsNotice: "Anak mulai lebih siap berpisah sebentar dari orang tua dan lebih mudah bercerita tentang sekolah.",
  },
  {
    name: "Kelompok B",
    age: "Usia 5-6 tahun",
    description: "Fase ini cocok untuk anak yang sudah lebih siap mengikuti kegiatan kelompok dan mulai menguatkan dasar literasi, numerasi, serta kemandirian sebelum masuk SD.",
    points: [
      "Anak mengikuti kegiatan yang lebih terarah, tetapi tetap lewat cara yang dekat dengan dunia bermain dan percakapan.",
      "Ada latihan untuk mendengar instruksi, menyampaikan pendapat, mengenal simbol, berhitung konkret, dan menyelesaikan tugas singkat.",
      "Orang tua biasanya melihat anak lebih siap mengikuti rutinitas, lebih berani tampil, dan lebih terbiasa menyelesaikan hal sampai tuntas.",
    ],
    forWho: "Untuk anak yang mulai siap mengikuti kegiatan lebih terarah sebelum masuk sekolah dasar.",
    whatChildrenDo: [
      "Belajar mengenal huruf, angka, pola, dan instruksi sederhana lewat kegiatan yang dekat dengan keseharian anak.",
      "Latihan bercerita, kerja kelompok kecil, dan menyelesaikan aktivitas dengan arahan yang lebih jelas.",
    ],
    whatParentsNotice: "Anak lebih terbiasa mengikuti aturan sederhana, lebih siap duduk fokus, dan lebih berani menjawab atau bercerita.",
  },
  {
    name: "Kegiatan tambahan",
    age: "Jadwal tematik dan hari tertentu",
    description: "Di luar kegiatan inti, anak mendapat pengalaman tambahan yang membuat sekolah terasa hidup, bukan hanya rutinitas kelas yang berulang.",
    points: [
      "Ada kegiatan tematik, karya bersama, dan aktivitas luar ruang yang memberi variasi tanpa membuat anak kewalahan.",
      "Anak mendapat kesempatan mencoba bidang yang berbeda: seni, gerak, kegiatan keagamaan, atau proyek sederhana.",
      "Bagi orang tua, kegiatan tambahan ini membantu melihat minat anak lebih awal tanpa harus memaksa memilih terlalu cepat.",
    ],
    forWho: "Untuk keluarga yang ingin anak mencoba banyak pengalaman tanpa suasana belajar yang terlalu berat.",
    whatChildrenDo: [
      "Mengikuti kegiatan tematik, presentasi karya, atau aktivitas luar ruang yang dekat dengan pengalaman sehari-hari.",
      "Mencoba bidang yang berbeda untuk melihat apa yang paling membuat anak tertarik dan bertahan fokus.",
    ],
    whatParentsNotice: "Anak pulang dengan cerita yang lebih beragam dan mulai terlihat minat yang paling ia sukai.",
  },
];

export const homeCredentialsCopy = {
  eyebrow: "Apa buktinya sekolah ini serius?",
  title: "Yang paling sering dicari orang tua kami taruh terbuka di sini.",
  description:
    "Legalitas, identitas sekolah, dan jejak perjalanannya tidak kami sembunyikan di bagian bawah. Orang tua bisa melihat data penting sebelum memutuskan datang.",
  legalTitle: "Fakta sekolah",
  timelineTitle: "Perjalanan sekolah",
};

export const homeCredentials: HomeCredential[] = [
  {
    label: "NPSN",
    value: officialProfile.npsn,
    description: "Data resmi sekolah yang bisa dicek kembali oleh orang tua.",
  },
  {
    label: "SK Operasional",
    value: officialProfile.operationalLicense,
    description: "Menunjukkan bahwa sekolah ini berjalan dengan dasar yang jelas.",
  },
  {
    label: "Jam Belajar",
    value: "07.00-13.00",
    description: "Orang tua bisa membayangkan ritme harian anak sejak awal.",
  },
  {
    label: "Kontak Resmi",
    value: officialProfile.email ?? "Admin sekolah",
    description: "Jalur komunikasi tidak berhenti di satu nomor pribadi saja.",
  },
  {
    label: "Wilayah",
    value: officialProfile.locationArea ?? "Bantarsari dan sekitarnya",
    description: "Menegaskan posisi sekolah di lingkungan yang dilayani.",
  },
];

export const homeCurriculumCopy = {
  eyebrow: "Apa yang dibawa anak pulang dari sekolah?",
  title: "Bukan hanya hasil karya, tetapi juga ritme, kebiasaan, dan keberanian kecil yang makin terlihat.",
  description:
    "Kami tetap mengikuti acuan pendidikan resmi, tetapi yang lebih penting bagi orang tua adalah perubahan yang bisa dirasakan dari hari ke hari.",
};

export const homeCurriculumPillars: HomeCurriculumPillar[] = [
  {
    title: "Anak lebih paham rutinitas",
    subtitle: "Kebiasaan harian",
    points: [
      "Lebih siap berangkat, lebih tahu kapan mendengar, kapan bermain, dan kapan merapikan.",
      "Mulai mengenal pola kegiatan dan tidak terlalu mudah bingung saat berganti aktivitas.",
      "Pulang dengan ritme yang lebih stabil dan bisa diceritakan di rumah.",
    ],
  },
  {
    title: "Anak lebih berani berinteraksi",
    subtitle: "Sosial dan emosi",
    points: [
      "Belajar menyapa, menunggu giliran, menyampaikan kebutuhan, dan bermain bersama teman.",
      "Guru membantu anak yang masih pemalu untuk masuk ke situasi sosial dengan lebih tenang.",
      "Keberanian tumbuh lewat pengalaman kecil yang diulang, bukan lewat tekanan.",
    ],
  },
  {
    title: "Anak lebih siap ikut kegiatan",
    subtitle: "Kesiapan belajar",
    points: [
      "Mulai terbiasa mendengar instruksi singkat dan menyelesaikan aktivitas sampai selesai.",
      "Belajar mengenal simbol, cerita, angka, dan pola lewat kegiatan yang dekat dengan dunia anak.",
      "Kesiapan belajar tumbuh sambil jalan, bukan dikejar sekaligus.",
    ],
  },
];

export const homeOnboardingCopy = {
  eyebrow: "Kalau cocok, langkah saya apa?",
  title: "Mulai dari kunjungan, bukan langsung formulir.",
  description:
    "Untuk sekolah pertama, keluarga biasanya perlu lihat suasana dulu. Karena itu, alurnya kami buat sederhana: lihat kegiatannya, pahami biayanya, siapkan dokumen dasar, lalu konfirmasi ke admin.",
  primaryCtaLabel: "Lihat status PPDB",
  steps: [
    {
      key: "routine",
      href: "#kegiatan-harian",
      icon: "Compass",
      title: "Lihat dulu kegiatan hariannya",
      description: "Pastikan ritme sekolahnya terasa cocok untuk anak dan keluarga Anda.",
      linkLabel: "Lihat kegiatan harian",
    },
    {
      key: "cost",
      href: "/biaya",
      icon: "Wallet",
      title: "Cek gambaran biayanya",
      description: "Lihat struktur biaya pokok dulu sebelum menanyakan angka resminya ke sekolah.",
      linkLabel: "Lihat halaman biaya",
    },
    {
      key: "documents",
      href: "/ppdb#requirements",
      icon: "FileText",
      title: "Siapkan dokumen dasar",
      description: "Akta lahir, KK, identitas orang tua, dan dokumen lain yang biasanya diminta saat pendaftaran.",
      linkLabel: "Lihat daftar dokumen",
    },
    {
      key: "apply",
      href: "/kontak",
      icon: "MapPin",
      title: "Hubungi admin untuk langkah berikutnya",
      description: "Tanyakan status PPDB, jadwal kunjungan, atau kemungkinan daftar tunggu jika kuota sedang penuh.",
      linkLabel: "Hubungi admin",
    },
  ] satisfies HomeOnboardingStep[],
};

export const homeVisitExpectation = {
  eyebrow: "Apa yang terjadi saat kunjungan?",
  title: "Kunjungan seharusnya membantu orang tua menilai suasana, bukan membuat bingung.",
  description:
    "Saat datang, keluarga sebaiknya bisa melihat ruang kelas, merasakan ritme sekolah, bertemu orang yang akan mendampingi anak, dan tahu langkah berikutnya dengan jelas.",
  items: [
    "Anda bisa melihat seperti apa ruang kelas dan ritme anak selama di sekolah.",
    "Anda bisa bertanya langsung tentang adaptasi anak, kegiatan harian, dan komunikasi dengan guru.",
    "Anda tahu dokumen apa yang perlu disiapkan serta siapa yang harus dihubungi setelah pulang.",
  ],
};

export const homeBlogCopy = {
  eyebrow: "Cerita sekolah dan catatan untuk orang tua",
  title: "Tulisan yang membantu orang tua memahami sekolah, bukan sekadar mengisi halaman.",
  description:
    "Blog dipakai untuk membagikan cerita kegiatan, tips sederhana, dan konteks yang membantu orang tua mengenal cara sekolah ini bekerja.",
  emptyTitle: "Belum ada cerita terbaru",
  emptyDescription:
    "Saat artikel baru belum tersedia, keluarga tetap bisa melihat program, biaya, atau langsung bertanya ke sekolah.",
  emptyPrimaryCta: "Lihat program belajar",
  emptySecondaryCta: "Hubungi kami",
};

export const homeFaqCopy = {
  eyebrow: "Pertanyaan yang biasanya muncul sebelum datang",
  title: "Jawaban singkat untuk hal-hal yang paling sering ditanyakan orang tua.",
  description:
    "Kalau setelah membaca ini Anda masih ragu, langkah terbaik tetap datang atau bertanya langsung ke sekolah.",
};

export const homeFinalCtaCopy = {
  eyebrow: "Kalau masih menimbang-nimbang",
  title: "Datang lihat dulu. Keputusan soal sekolah pertama memang sebaiknya tidak diambil dari brosur saja.",
  description:
    "Kunjungan membantu orang tua menilai apakah suasananya cocok, apakah orang-orangnya terasa meyakinkan, dan apakah anak terlihat bisa menjalani hari dengan nyaman di sini.",
  secondaryCtaLabel: "Tanya dulu lewat kontak",
};

export const homeHeroDescription =
  "Sekolah pertama yang membantu anak cepat nyaman dan membantu orang tua cepat yakin lewat proses yang jelas, pendampingan harian, dan suasana belajar yang bisa dilihat langsung.";

export const homeStats: HomeStat[] = [
  {
    value: `${officialProfile.yearsOperating}+`,
    label: "Tahun sekolah ini mendampingi keluarga sekitar",
  },
  {
    value: "1 : 8",
    label: "Rasio kecil untuk membantu anak lebih mudah dikenali",
  },
  {
    value: "Update harian",
    label: "Orang tua tetap tahu bagaimana hari anak berjalan",
  },
];

export const homeJourney: HomeJourneyItem[] = [
  {
    time: "07.00",
    title: "Datang dan disambut",
    description: "Anak masuk kelas dengan bantuan guru, bukan dibiarkan menyesuaikan diri sendiri.",
    icon: "sunrise",
  },
  {
    time: "08.00",
    title: "Kegiatan bersama singkat",
    description: "Ada cerita, sapaan, atau permainan kecil supaya anak mulai merasa ikut.",
    icon: "circle",
  },
  {
    time: "09.15",
    title: "Kegiatan utama",
    description: "Anak bermain, mencoba, atau mengerjakan aktivitas sesuai ritme kelas hari itu.",
    icon: "play",
  },
  {
    time: "10.30",
    title: "Istirahat dan bergerak",
    description: "Anak punya jeda supaya hari sekolah tidak terasa menekan.",
    icon: "leaf",
  },
  {
    time: "11.15",
    title: "Pulang sambil bawa cerita",
    description: "Hari ditutup dengan kegiatan akhir yang membuat anak punya sesuatu untuk diceritakan di rumah.",
    icon: "book",
  },
];

export const homeFaqs: HomeFaq[] = [
  {
    question: "Kalau anak saya pemalu, apakah dia akan dipaksa ikut semua kegiatan?",
    answer:
      "Tidak. Di masa awal, guru membantu anak masuk ke ritme kelas pelan-pelan. Yang paling kami jaga adalah agar anak tidak merasa takut datang lagi ke sekolah besok.",
  },
  {
    question: "Bagaimana saya tahu anak saya baik-baik saja di sekolah?",
    answer:
      "Orang tua mendapat kabar singkat tentang kegiatan dan suasana anak. Kalau ada hal yang perlu diteruskan di rumah atau dibicarakan lebih lanjut, kami sampaikan dengan jelas.",
  },
  {
    question: "Apakah sekolah ini terlalu fokus akademik untuk usia TK?",
    answer:
      "Tidak. Anak tetap belajar mengenal huruf, angka, dan kebiasaan dasar, tetapi caranya lewat kegiatan yang sesuai usia dan tidak membuat anak tertekan.",
  },
  {
    question: "Kapan waktu terbaik untuk datang berkunjung?",
    answer:
      "Sebelum mendaftar. Dengan datang lebih dulu, orang tua bisa melihat suasana kelas, ritme sekolah, dan bertanya langsung soal adaptasi anak maupun proses PPDB.",
  },
  {
    question: "Kalau kuota sedang penuh, apa yang bisa saya lakukan?",
    answer:
      "Hubungi admin untuk menanyakan status terbaru, kemungkinan daftar tunggu, dan kapan informasi periode berikutnya diumumkan.",
  },
];

export const homeTimeline: HomeTimelineMilestone[] = officialMilestones;
