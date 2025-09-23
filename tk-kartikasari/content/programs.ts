export type ProgramClass = {
  name: string;
  age: string;
  description: string;
  focus: string[];
};

export type LearningMethod = {
  title: string;
  description: string;
};

export type WeeklyScheduleItem = {
  day: string;
  theme: string;
  highlight: string;
};

export const programsMetaDescription =
  "Program TK Kartikasari menerapkan Kurikulum Merdeka PAUD, Projek Profil Pelajar Pancasila, dan pendampingan terdiferensiasi untuk anak usia dini di Bantarsari.";

export const programClasses: ProgramClass[] = [
  {
    name: "Kelas A • Fondasi Profil Pelajar Pancasila",
    age: "Usia 4–5 tahun",
    description:
      "Fokus adaptasi, pengenalan nilai agama, dan kemandirian melalui projek tematik yang menyenangkan.",
    focus: [
      "Pembiasaan doa, gratitude journal sederhana, dan merapikan alat setelah bermain.",
      "Eksplorasi sensorik dan motorik halus di sentra seni, konstruksi, dan sains mini.",
      "Cerita kontekstual untuk memperkaya kosa kata, ekspresi emosi, dan empati.",
    ],
  },
  {
    name: "Kelas B • Transisi Siap Sekolah Dasar",
    age: "Usia 5–6 tahun",
    description:
      "Penguatan literasi, numerasi, dan kepemimpinan sesuai capaian Kurikulum Merdeka dan kebutuhan lokal.",
    focus: [
      "Projek STEAM bertema lingkungan pesisir, budaya Cilacap, dan teknologi sederhana.",
      "Latihan menulis nama, membaca suku kata, serta berhitung konkret melalui permainan.",
      "Presentasi mini, diskusi kelompok, dan refleksi diri untuk membangun percaya diri.",
    ],
  },
];

export const programLearningMethods: LearningMethod[] = [
  {
    title: "Pembelajaran terdiferensiasi",
    description:
      "Menyesuaikan konten, proses, dan produk belajar sesuai kesiapan, minat, serta gaya belajar anak.",
  },
  {
    title: "Asesmen autentik & portofolio",
    description:
      "Observasi harian, catatan anekdot, dan portofolio digital yang dibagikan teratur kepada orang tua.",
  },
  {
    title: "Kolaborasi orang tua",
    description:
      "Pertemuan coaching, kanal komunikasi resmi, dan refleksi projek P5 menjaga kesinambungan di rumah.",
  },
  {
    title: "Projek Profil Pelajar Pancasila",
    description:
      "Tema gotong royong, toleransi, dan cinta lingkungan diwujudkan dalam projek mingguan anak.",
  },
];

export const programWeeklySchedule: WeeklyScheduleItem[] = [
  {
    day: "Senin",
    theme: "Pembukaan tema & Profil Pelajar Pancasila",
    highlight: "Lingkar pagi, perumusan tujuan tema, dan penguatan nilai karakter.",
  },
  {
    day: "Selasa",
    theme: "Eksplorasi sains & lingkungan",
    highlight: "Eksperimen alam, observasi kebun, dan dokumentasi temuan anak.",
  },
  {
    day: "Rabu",
    theme: "Karya budaya & STEAM",
    highlight: "Kreasi seni, musik daerah, dan teknologi sederhana berbasis kearifan lokal.",
  },
  {
    day: "Kamis",
    theme: "Literasi & numerasi kontekstual",
    highlight: "Permainan bahasa, membaca cerita, dan berhitung konkret dalam kehidupan sehari-hari.",
  },
  {
    day: "Jumat",
    theme: "Projek P5 & ekstrakurikuler",
    highlight: "Gotong royong, showcase karya, serta pilihan tahfidz, tari, atau kelas memasak.",
  },
];
