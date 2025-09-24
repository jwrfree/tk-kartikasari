import { officialMilestones, officialProfile } from "@/data/official";
import type {
  HomeCredential,
  HomeCurriculumPillar,
  HomeFaq,
  HomeHighlight,
  HomeJourneyItem,
  HomeProgram,
  HomeStat,
  HomeTimelineMilestone,
} from "@/app/types/home";

export const homeHeroDescription =
  "Membantu anak tumbuh menjadi pribadi yang ceria dan berkarakter Pancasila. Caranya? Lewat pendampingan personal, kegiatan yang sesuai minat anak, dan projek seru yang hasilnya sesuai arahan Kemendikbudristek.";

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
    name: "Kelas Bintang • Fondasi Merdeka",
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
    name: "Kelas Pelangi • Siap Sekolah Dasar",
    age: "Usia 5–6 tahun",
    description:
      "Menguatkan kemampuan baca-tulis-hitung (calistung) dan rasa percaya diri dengan konteks dunia anak.",
    points: [
      "Projek STEAM (Sains, Teknologi, Engineering, Seni, Matematika) berbasis lingkungan sekitar.",
      "Latihan bercerita dan tampil di depan teman untuk menumbuhkan keberanian.",
      "Rencana belajar personal yang disepakati bersama keluarga di setiap awal tema.",
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
    title: "Main di Sudut Belajar",
    description:
      "Anak bebas memilih sudut main yang disuka: seni, sains, balok, atau main peran, sambil ditemani guru.",
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
