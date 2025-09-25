const ESTABLISHMENT_YEAR = 1998;
const currentYear = new Date().getFullYear();

export const officialProfile = {
  name: "TK Kartikasari",
  npsn: "20351273",
  establishmentDate: "12 Oktober 1998",
  establishmentYear: ESTABLISHMENT_YEAR,
  yearsOperating: currentYear - ESTABLISHMENT_YEAR,
  operationalLicense: "078/103.21/ /DS/1998",
  landArea: "440 m²",
  curriculum: "PAUD Merdeka (Kurikulum Merdeka)",
  email: "kartikasaribts@gmail.com",
  latitude: -7.52608,
  longitude: 108.906379,
  locationArea: "Bantarsari, Cilacap",
};

export type OfficialTimelineMilestone = {
  year: string;
  title: string;
  description: string;
};

export const officialMilestones: OfficialTimelineMilestone[] = [
  {
    year: "1998",
    title: "🎉 Langkah pertama",
    description:
      "Dimulai dari tekad guru lokal menghadirkan pendidikan terbaik, kami mengantongi SK operasional 078/103.21/ /DS/1998 dan membuka kelas pertama untuk keluarga Bantarsari.",
  },
  {
    year: "2012",
    title: "🌿 Penguatan sentra belajar",
    description:
      "Memaksimalkan lahan 440 m² menjadi sentra tematik, taman bermain yang hijau, serta area bermain di luar ruangan agar anak bebas bereksperimen.",
  },
  {
    year: "2024",
    title: "🚀 Implementasi Kurikulum Merdeka",
    description:
      "Seluruh guru menuntaskan pelatihan PAUD Merdeka dan menjalankan Projek Profil Pelajar Pancasila yang relevan dengan kehidupan anak.",
  },
];
