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
  "Program TK Kartikasari memadukan eksplorasi sensorik, literasi awal, dan aktivitas STEAM sederhana untuk menumbuhkan karakter.";

export const programClasses: ProgramClass[] = [
  {
    name: "Kelas A • Bintang Kecil",
    age: "Usia 4–5 tahun",
    description:
      "Masa peralihan dari playgroup menuju TK yang fokus pada eksplorasi sensorik, bahasa awal, dan kemandirian sederhana.",
    focus: [
      "Pembiasaan rutinitas dan sopan santun sehari-hari",
      "Koordinasi motorik halus melalui aktivitas seni dan konstruksi",
      "Pengayaan kosa kata lewat cerita, lagu, dan permainan peran",
    ],
  },
  {
    name: "Kelas B • Pelangi Ceria",
    age: "Usia 5–6 tahun",
    description:
      "Persiapan menuju sekolah dasar dengan penguatan literasi, numerasi, dan kemampuan sosial memimpin kelompok.",
    focus: [
      "Eksperimen STEAM sederhana dan proyek tematik mingguan",
      "Pembiasaan menulis nama, membaca suku kata, dan berhitung konkret",
      "Latihan presentasi mini untuk membangun rasa percaya diri",
    ],
  },
];

export const programLearningMethods: LearningMethod[] = [
  {
    title: "Sentra tematik",
    description:
      "Setiap hari anak bergiliran di sentra seni, balok, main peran, sains, dan persiapan agar pengalaman belajar kaya dan seimbang.",
  },
  {
    title: "Pendampingan individual",
    description:
      "Guru melakukan observasi harian dan catatan perkembangan sehingga kebutuhan masing-masing anak dapat ditindaklanjuti.",
  },
  {
    title: "Kolaborasi orang tua",
    description:
      "Laporan kegiatan dibagikan melalui WhatsApp dan sesi konsultasi bulanan untuk menyepakati strategi di rumah.",
  },
  {
    title: "Belajar di luar ruang",
    description:
      "Kegiatan berkebun, senam irama, dan eksplorasi lingkungan sekitar menyeimbangkan stimulasi fisik dan sosial anak.",
  },
];

export const programWeeklySchedule: WeeklyScheduleItem[] = [
  {
    day: "Senin",
    theme: "Pembukaan tema & circle time",
    highlight: "Senam pagi, diskusi nilai moral, dan pengenalan kosa kata baru.",
  },
  {
    day: "Selasa",
    theme: "Eksperimen & sains sederhana",
    highlight: "Percobaan warna, air, atau alam yang memantik rasa ingin tahu.",
  },
  {
    day: "Rabu",
    theme: "Karya kreatif",
    highlight: "Melukis, kolase, hingga dapur mini untuk melatih motorik halus.",
  },
  {
    day: "Kamis",
    theme: "Berhitung dan literasi awal",
    highlight: "Permainan angka, pengenalan huruf, dan membaca cerita interaktif.",
  },
  {
    day: "Jumat",
    theme: "Eksplorasi luar ruang & ekstrakurikuler",
    highlight: "Berkebun, bermain peran, serta pilihan kelas tari, tahfidz, atau musik.",
  },
];
