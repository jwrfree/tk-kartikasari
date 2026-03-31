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
  title: "Sedang menimbang TK untuk anak Anda? Lihat kecocokannya, lalu bahas langkah daftarnya dengan sekolah.",
  description:
    "TK Kartikasari melayani keluarga Bantarsari dan sekitarnya yang mencari kelas kecil, guru yang mengenali anak, dan alur komunikasi yang langsung ke sekolah. Di sini Anda bisa melihat seperti apa pagi berjalan, gambaran biaya awal, dan cara memulai tanya kuota atau langkah daftar.",
  secondaryCtaLabel: "Lihat apakah cocok",
  proofItems: [
    { label: "Rasio kecil", value: "1 : 8" },
    { label: "Terdaftar resmi", value: `NPSN ${officialProfile.npsn}` },
    { label: "Langkah daftar", value: "Lewat admin sekolah" },
  ],
};

export const homeFirstWeek = {
  eyebrow: "1. Apakah anak saya bakal nyaman?",
  title: "Di minggu pertama, target kami sederhana: anak mau datang lagi besok.",
  description:
    "Anak tidak langsung dituntut ikut semua kegiatan. Guru membantu masa awal sampai anak tahu siapa yang menyambutnya, di mana ia duduk, kapan ia bermain, dan kapan ia pulang.",
  items: [
    {
      title: "Hari pertama tidak dikejar target",
      description:
        "Kalau anak masih ingin melihat dulu, itu wajar. Guru mengenalkan ruang, teman, dan rutinitas tanpa memaksa anak langsung aktif.",
    },
    {
      title: "Ada guru yang benar-benar mengenali anak",
      description:
        "Guru memperhatikan cara anak masuk kelas, merespons teman, dan menenangkan diri. Dari situ pendekatan pendampingannya bisa lebih pas.",
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
      value: "Masuk pelan-pelan",
      description: "Anak dikenalkan pada guru, ruang kelas, dan urutan pagi sedikit demi sedikit.",
    },
    {
      label: "Pendampingan",
      value: "Guru mengenali anak",
      description: "Guru memperhatikan cara anak masuk kelas, merespons teman, dan menenangkan diri.",
    },
    {
      label: "Komunikasi",
      value: "Kabar dari sekolah",
      description: "Orang tua mendapat kabar singkat, terutama saat anak masih beradaptasi atau ada hal penting.",
    },
  ] satisfies FactItem[],
};

export const homeExperienceCopy = {
  eyebrow: "2. Kesehariannya seperti apa?",
  title: "Pagi di sekolah berjalan dengan urutan yang mudah diikuti anak.",
  description:
    "Sekolah dimulai pukul 07.00 dengan sambutan guru, kegiatan bersama singkat, lalu aktivitas utama. Urutan yang rapi membuat anak lebih cepat paham apa yang sedang terjadi dan apa yang akan dilakukan berikutnya.",
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
    title: "Dari sisi orang tua",
    description:
      "Urutan pagi yang rapi membantu anak tahu apa yang terjadi lebih dulu. Orang tua juga lebih mudah membayangkan bagaimana anak menjalani waktu di sekolah.",
    ratioLabel: "Rasio guru : anak",
    defaultNpsn: "20351273",
  },
  focusCards: [
    {
      title: "Aktif dengan urutan yang rapi",
      description: "Anak bergerak dan bermain, tetapi perpindahan kegiatannya tetap mudah diikuti.",
    },
    {
      title: "Ada waktu bergerak dan mencoba",
      description: "Anak tidak hanya duduk mendengar. Ada waktu untuk bicara, mencoba, dan pulang membawa cerita.",
    },
  ],
};

export const homeParentUpdates = {
  eyebrow: "3. Apa yang orang tua terima setiap hari?",
  title: "Orang tua bisa tahu bagaimana hari anak berjalan di sekolah.",
  description:
    "Saat ada hal penting atau anak masih di masa awal adaptasi, orang tua mendapat kabar tentang kegiatan anak, suasana harinya, dan hal yang sedang dibantu guru.",
  items: [
    {
      title: "Kabar singkat dari guru",
      description: "Isinya ringkas: anak ikut kegiatan apa, bagaimana suasana harinya, dan apakah ada hal yang perlu diperhatikan.",
    },
    {
      title: "Hal yang bisa dilanjutkan di rumah",
      description: "Jika ada kebiasaan atau latihan yang sedang dibantu di sekolah, orang tua mendapat konteks untuk meneruskannya di rumah.",
    },
    {
      title: "Kalau perlu bertanya, jalurnya langsung",
      description: "Saat ada pertanyaan atau kekhawatiran, orang tua tahu harus menghubungi siapa di sekolah.",
    },
  ] satisfies NarrativeItem[],
};

export const homeSchoolFit = {
  eyebrow: "4. Sekolah ini cocok untuk siapa?",
  title: "Untuk keluarga yang mencari kelas kecil, suasana yang lebih tenang, dan alur daftar yang tidak berputar-putar.",
  description:
    "Bagian ini paling relevan untuk orang tua yang ingin anak lebih dulu merasa aman di sekolah, dikenal gurunya, lalu bertumbuh lewat rutinitas yang rapi dari hari ke hari.",
  items: [
    {
      title: "Untuk anak yang masih butuh waktu adaptasi",
      description: "Kami tidak menuntut semua anak langsung berani. Anak boleh masuk pelan-pelan sampai benar-benar merasa aman.",
    },
    {
      title: "Untuk orang tua yang ingin tahu langkahnya dari awal",
      description: "Mulai dari melihat kecocokan, menanyakan status PPDB, sampai membahas dokumen dasar, alurnya dibuat mudah diikuti keluarga.",
    },
    {
      title: "Untuk keluarga yang ingin melihat praktiknya",
      description: "Kami tetap mengikuti standar pendidikan resmi, tetapi yang ditunjukkan ke orang tua adalah apa yang benar-benar dijalani anak di kelas.",
    },
  ] satisfies NarrativeItem[],
};

export const homeHighlightsCopy = {
  eyebrow: "Yang perlu dipastikan di awal",
  title: "Tiga hal yang biasanya dicek orang tua sebelum menghubungi sekolah.",
  description:
    "Apakah anak bisa cepat nyaman, apakah sekolahnya jelas dan resmi, dan apakah orang tua akan mendapat kabar yang berguna tentang keseharian anak.",
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
  title: "Program dibagi mengikuti tahap usia dan kesiapan anak.",
  description:
    "Orang tua bisa melihat perbedaannya dari kegiatan harian: bagaimana anak bergerak, berbicara, mencoba, menunggu giliran, dan bertahap lebih siap ikut kegiatan bersama.",
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
  title: "Data sekolah yang paling sering dicari orang tua bisa dicek di sini.",
  description:
    "Legalitas, identitas sekolah, dan jejak perjalanannya kami tampilkan terbuka supaya orang tua bisa mengecek dulu sebelum melanjutkan percakapan.",
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
  title: "Kalau sudah pas, langkah berikutnya bisa langsung dimulai.",
  description:
    "Lihat dulu ritme sekolahnya, cek biaya intinya, siapkan dokumen dasar, lalu hubungi admin sekolah untuk menanyakan kuota dan langkah daftar yang paling sesuai.",
  primaryCtaLabel: "Lihat status PPDB",
  steps: [
    {
      key: "routine",
      href: "#kegiatan-harian",
      icon: "Compass",
      title: "Lihat dulu kegiatan hariannya",
      description: "Periksa apakah urutan paginya sesuai dengan kebutuhan anak dan ritme keluarga Anda.",
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
      description: "Tanyakan status kuota, langkah pendaftaran, atau dokumen yang perlu disiapkan lebih dulu.",
      linkLabel: "Hubungi admin",
    },
  ] satisfies HomeOnboardingStep[],
};

export const homeVisitExpectation = {
  eyebrow: "Apa yang terjadi saat kunjungan?",
  title: "Setelah berkunjung, orang tua seharusnya pulang dengan gambaran yang lebih jelas.",
  description:
    "Saat datang, keluarga sebaiknya bisa melihat ruang kelas, merasakan ritme pagi, bertemu guru, dan tahu langkah berikutnya tanpa perlu bertanya berulang-ulang.",
  items: [
    "Anda bisa melihat seperti apa ruang kelas dan ritme anak selama di sekolah.",
    "Anda bisa bertanya langsung tentang adaptasi anak, kegiatan harian, dan komunikasi dengan guru.",
    "Anda tahu dokumen apa yang perlu disiapkan serta siapa yang harus dihubungi setelah pulang.",
  ],
};

export const homeBlogCopy = {
  eyebrow: "Cerita sekolah dan catatan untuk orang tua",
  title: "Tulisan yang membantu orang tua memahami kegiatan sekolah.",
  description:
    "Blog dipakai untuk membagikan cerita kegiatan, tips sederhana, dan konteks yang membantu orang tua mengenal cara sekolah ini bekerja.",
  emptyTitle: "Belum ada cerita terbaru",
  emptyDescription:
    "Saat artikel baru belum tersedia, keluarga tetap bisa melihat program, biaya, atau langsung bertanya ke sekolah.",
  emptyPrimaryCta: "Lihat program belajar",
  emptySecondaryCta: "Hubungi kami",
};

export const homeFaqCopy = {
  eyebrow: "Pertanyaan sebelum menghubungi sekolah",
  title: "Jawaban singkat untuk hal-hal yang paling sering ditanyakan orang tua.",
  description:
    "Kalau setelah membaca ini masih ada yang belum pasti, hubungi sekolah untuk menanyakan kuota, kelompok yang sesuai, dan langkah berikutnya.",
};

export const homeFinalCtaCopy = {
  eyebrow: "Kalau masih menimbang-nimbang",
  title: "Kalau sudah dapat gambaran, lanjutkan ke pertanyaan yang paling penting.",
  description:
    "Mulai dari kuota, kelompok yang sesuai, biaya terbaru, dan dokumen dasar. Setelah itu baru lebih mudah menentukan apakah perlu kunjungan atau sudah siap lanjut.",
  secondaryCtaLabel: "Lihat cara menghubungi sekolah",
};

export const homeHeroDescription =
  "Lihat kecocokan TK Kartikasari untuk anak Anda, pahami biaya awal, lalu bahas kuota dan langkah pendaftaran langsung dengan sekolah.";

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
      "Setelah menanyakan kuota dan kebutuhan anak lebih dulu. Jika informasinya sudah sesuai, keluarga bisa menjadwalkan kunjungan untuk melihat kelas, ritme sekolah, dan bertemu guru.",
  },
  {
    question: "Kalau kuota sedang penuh, apa yang bisa saya lakukan?",
    answer:
      "Hubungi admin untuk menanyakan status terbaru, kemungkinan daftar tunggu, dan kapan informasi periode berikutnya diumumkan.",
  },
];

export const homeTimeline: HomeTimelineMilestone[] = officialMilestones;
