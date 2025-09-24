import type { OfficialTimelineMilestone } from "@/data/official";
import { officialMilestones, officialProfile } from "@/data/official";

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

export type HomeCredential = {
  label: string;
  value: string;
  description: string;
};

export type HomeCurriculumPillar = {
  title: string;
  subtitle: string;
  points: string[];
};

export type HomeTimelineMilestone = OfficialTimelineMilestone;

export const homeHeroDescription =
  "Kami telah membersamai keluarga Bantarsari sejak 1998 dan kini resmi menerapkan Kurikulum Merdeka PAUD untuk membangun Profil Pelajar Pancasila.";

export const homeStats: HomeStat[] = [
  {
    value: `${officialProfile.yearsOperating}+`,
    label: "Tahun mendampingi keluarga Bantarsari sejak 1998",
  },
  {
    value: "PAUD Merdeka",
    label: "Kurikulum resmi dengan Projek Profil Pelajar Pancasila",
  },
  {
    value: "1 : 8",
    label: "Rasio guru dan anak di setiap kelas tematik",
  },
];

export const homeHighlights: HomeHighlight[] = [
  {
    icon: "🛡️",
    title: "Legalitas resmi & komunikasi aman",
    description: `Terdaftar dengan NPSN ${officialProfile.npsn}, SK operasional ${officialProfile.operationalLicense}, dan kanal WhatsApp resmi untuk update harian yang membuat orang tua tenang.`,
  },
  {
    icon: "🤗",
    title: "Transisi adaptif & pendampingan",
    description:
      "Guru menyapa anak satu per satu, memantau emosi, dan rata-rata anak merasa nyaman dalam tiga hari masa pengenalan.",
  },
  {
    icon: "🧠",
    title: "Profil Pelajar Pancasila sejak dini",
    description:
      "Rasio 1:8, projek gotong royong, dan diferensiasi sentra menumbuhkan karakter kebangsaan, literasi, serta kemandirian.",
  },
];

export const homePrograms: HomeProgram[] = [
  {
    name: "Kelas Bintang • Fondasi Merdeka",
    age: "Usia 4–5 tahun",
    description:
      "Kelas transisi dengan fokus adaptasi, kemandirian, serta penguatan nilai agama dan budi pekerti.",
    points: [
      "Projek P5 mini seputar rasa syukur, peduli sesama, dan cinta lingkungan.",
      "Pembelajaran terdiferensiasi untuk gaya belajar visual, auditori, dan kinestetik.",
      "Asesmen observasi harian dibagikan kepada orang tua sebagai portofolio.",
    ],
  },
  {
    name: "Kelas Pelangi • Siap Sekolah Dasar",
    age: "Usia 5–6 tahun",
    description:
      "Penguatan literasi, numerasi, dan kepemimpinan dengan konteks lokal Cilacap dan dunia nyata anak.",
    points: [
      "Projek STEAM berbasis lingkungan pesisir dan budaya daerah.",
      "Latihan presentasi dan diskusi untuk menumbuhkan percaya diri dan kemandirian.",
      "Rencana belajar individual yang diselaraskan dengan keluarga setiap awal tema.",
    ],
  },
  {
    name: "Projek Profil Pelajar Pancasila & Ekstrakurikuler",
    age: "Jumat kreatif & pekan tematik",
    description:
      "Kegiatan kokurikuler yang memperkaya karakter dan bakat melalui pendekatan Kurikulum Merdeka.",
    points: [
      "Pameran hasil projek gotong royong setiap akhir tema.",
      "Pilihan kelas tahfidz, tari, memasak, dan literasi digital dasar.",
      "Kolaborasi komunitas lokal sebagai narasumber inspiratif.",
    ],
  },
];

export const homeJourney: HomeJourneyItem[] = [
  {
    time: "07.00",
    title: "Sambutan & refleksi syukur",
    description:
      "Guru menyapa anak satu per satu, melakukan cek kesehatan ringan, dan mengajak doa pembuka.",
    icon: "🌅",
  },
  {
    time: "08.00",
    title: "Sesi Profil Pelajar Pancasila",
    description:
      "Lingkar pagi dengan cerita kebajikan, lagu toleransi, dan diskusi rasa bangga menjadi anak Indonesia.",
    icon: "🇮🇩",
  },
  {
    time: "09.15",
    title: "Eksplorasi diferensiasi",
    description:
      "Anak memilih sentra seni, sains, literasi, atau role play sesuai minat sambil didampingi guru.",
    icon: "🧩",
  },
  {
    time: "10.30",
    title: "Projek luar ruang",
    description:
      "Berkebun, bermain air, dan eksperimen alam untuk menumbuhkan kepedulian lingkungan.",
    icon: "🌿",
  },
  {
    time: "11.15",
    title: "Refleksi & asesmen autentik",
    description:
      "Anak berbagi karya dengan mata berbinar, mencatat hal baru di jurnal emosi, lalu menutup hari dengan doa.",
    icon: "📘",
  },
];

export const homeFaqs: HomeFaq[] = [
  {
    question: "Apa yang membedakan TK Kartikasari?",
    answer:
      "Sejak 1998 kami konsisten menghadirkan lingkungan belajar yang hangat, legal secara resmi, dan kini menjadi pelaksana Kurikulum Merdeka PAUD di Bantarsari.",
  },
  {
    question: "Kurikulum apa yang digunakan?",
    answer:
      "Kami menerapkan Kurikulum Merdeka PAUD dengan Projek Penguatan Profil Pelajar Pancasila, asesmen autentik, dan pembelajaran terdiferensiasi.",
  },
  {
    question: "Bagaimana laporan perkembangan anak diberikan?",
    answer:
      "Guru menyusun catatan observasi harian, portofolio karya, serta laporan perkembangan tiap akhir tema dan semester.",
  },
  {
    question: "Bagaimana proses adaptasi anak baru?",
    answer:
      "Tiga hari masa pengenalan disiapkan dengan guru pendamping, komunikasi harian melalui WhatsApp resmi, dan jadwal fleksibel sesuai kesiapan anak.",
  },
  {
    question: "Seberapa besar keterlibatan orang tua?",
    answer:
      "Orang tua dilibatkan melalui kelas parenting, sesi refleksi projek P5, dan komunikasi rutin melalui kanal resmi sekolah.",
  },
];

export const homeCredentials: HomeCredential[] = [
  {
    label: "NPSN",
    value: officialProfile.npsn,
    description: "Terdaftar di Referensi Data Kemendikbudristek.",
  },
  {
    label: "SK Operasional",
    value: officialProfile.operationalLicense,
    description: "Izin penyelenggaraan sejak 12 Oktober 1998.",
  },
  {
    label: "Kurikulum",
    value: officialProfile.curriculum,
    description: "Implementasi Projek Profil Pelajar Pancasila dan asesmen autentik.",
  },
  {
    label: "Luas Lahan",
    value: officialProfile.landArea,
    description: "Area terkontrol untuk sentra indoor dan taman bermain luar ruang.",
  },
  {
    label: "Kontak Resmi",
    value: officialProfile.email,
    description: "Email sekolah untuk korespondensi dan arsip administrasi.",
  },
];

export const homeCurriculumPillars: HomeCurriculumPillar[] = [
  {
    title: "Nilai Agama & Budi Pekerti",
    subtitle: "Fondasi karakter",
    points: [
      "Projek tematik keagamaan yang mendorong rasa syukur dan empati.",
      "Pembiasaan ibadah, doa, dan sikap sopan santun dalam rutinitas kelas.",
      "Kolaborasi orang tua untuk menguatkan kebiasaan baik di rumah.",
    ],
  },
  {
    title: "Jati Diri & Kebinekaan",
    subtitle: "Profil Pelajar Pancasila",
    points: [
      "Kegiatan mengenal budaya lokal Cilacap dan keberagaman Indonesia.",
      "Projek gotong royong, toleransi, serta kegiatan berbagi dengan komunitas.",
      "Program \"Aku Anak Indonesia\" untuk menumbuhkan rasa bangga dan percaya diri.",
    ],
  },
  {
    title: "Literasi, Numerasi, STEAM & Seni",
    subtitle: "Eksplorasi menyeluruh",
    points: [
      "Pembelajaran terdiferensiasi sesuai kebutuhan dan minat anak.",
      "Eksperimen STEAM sederhana serta literasi digital dasar yang aman.",
      "Asesmen formatif melalui dokumentasi karya dan cerita anak.",
    ],
  },
];

export const homeTimeline: HomeTimelineMilestone[] = officialMilestones;
