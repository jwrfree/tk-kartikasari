
export type ProgramDetail = {
  nama: string;
  rentangUsia: string;
  deskripsi: string;
  icon: string; // Placeholder for an icon, e.g., a character or symbol
  timeline: {
    fase: string;
    fokus: string;
  }[];
};

export const programKelas: ProgramDetail[] = [
  {
    nama: "Kelompok A",
    rentangUsia: "Usia 3-4 Tahun",
    icon: "A",
    deskripsi:
      "Program untuk Kelompok A berfokus pada pengenalan konsep dasar, pengembangan keterampilan motorik halus dan kasar, serta stimulasi kreativitas melalui bermain dan kegiatan seni. Anak-anak belajar bersosialisasi dalam lingkungan yang aman dan mendukung.",
    timeline: [
      {
        fase: "Triwulan 1: Aku dan Lingkunganku",
        fokus: "Pengenalan diri, keluarga, dan teman. Eksplorasi lingkungan sekolah.",
      },
      {
        fase: "Triwulan 2: Dunia Binatang dan Tumbuhan",
        fokus: "Mengenal berbagai jenis makhluk hidup, menanam, dan merawat tanaman.",
      },
      {
        fase: "Triwulan 3: Kreativitas dan Seni",
        fokus: "Eksplorasi musik, gerak, dan berbagai media seni rupa.",
      },
    ],
  },
  {
    nama: "Kelompok B",
    rentangUsia: "Usia 4-5 Tahun",
    icon: "B",
    deskripsi:
      "Di Kelompok B, anak-anak dipersiapkan untuk jenjang sekolah dasar dengan penguatan literasi dini, numerasi, dan pemecahan masalah. Pembelajaran berbasis proyek mendorong pemikiran kritis dan kolaborasi.",
    timeline: [
      {
        fase: "Triwulan 1: Sains dan Teknologi Sederhana",
        fokus: "Melakukan percobaan sains sederhana, mengenal konsep teknologi di sekitar.",
      },
      {
        fase: "Triwulan 2: Budayaku, Negeriku",
        fokus: "Mengenal keragaman budaya Indonesia, permainan tradisional, dan hari besar nasional.",
      },
      {
        fase: "Triwulan 3: Proyek Kelulusan",
        fokus: "Merancang dan mempresentasikan proyek kelompok berdasarkan minat anak.",
      },
    ],
  },
];

export const perbandinganKurikulum = [
  {
    fitur: "Pendekatan Belajar",
    kurikulumMerdeka: "Berbasis Proyek & Minat Anak",
    kurikulumKonvensional: "Berbasis Tema & Klasikal",
  },
  {
    fitur: "Peran Guru",
    kurikulumMerdeka: "Fasilitator & Mitra Belajar",
    kurikulumKonvensional: "Instruktur & Sumber Utama Informasi",
  },
  {
    fitur: "Penilaian (Asesmen)",
    kurikulumMerdeka: "Portofolio, Observasi, & Catatan Anekdot",
    kurikulumKonvensional: "Skor, Peringkat, & Hasil Tes Tertulis",
  },
  {
    fitur: "Fokus Pembelajaran",
    kurikulumMerdeka: "Pengembangan Karakter & Kompetensi Holistik",
    kurikulumKonvensional: "Pencapaian Target Akademik (Calistung)",
  },
  {
    fitur: "Fleksibilitas",
    kurikulumMerdeka: "Sangat fleksibel, disesuaikan dengan kebutuhan anak",
    kurikulumKonvensional: "Struktur kaku dan seragam untuk semua anak",
  },
];

export const infografikKurikulum = {
  title: "Memahami Kurikulum Merdeka PAUD dalam 3 Poin",
  points: [
    {
      title: "1. Belajar Sesuai Minat Anak",
      description: "Pembelajaran tidak lagi dipatok oleh tema yang kaku, tetapi digerakkan oleh minat dan pertanyaan anak. Jika anak-anak tertarik pada kupu-kupu, maka seluruh kegiatan belajar akan berpusat pada eksplorasi kupu-kupu.",
    },
    {
      title: "2. Fokus pada Karakter, Bukan Hanya Angka",
      description: "Selain literasi dan numerasi, kurikulum ini sangat menekankan pengembangan karakter Profil Pelajar Pancasila, seperti gotong royong, kemandirian, dan kreativitas. Proses belajar lebih penting daripada hasil akhir.",
    },
    {
      title: "3. Proyek sebagai Sarana Belajar Utama",
      description: "Anak-anak belajar dengan cara 'melakukan', bukan hanya 'mendengarkan'. Melalui proyek-proyek seru (misalnya membuat kebun mini), mereka belajar sains, matematika, kerja sama, dan pemecahan masalah secara terintegrasi.",
    },
  ],
};

