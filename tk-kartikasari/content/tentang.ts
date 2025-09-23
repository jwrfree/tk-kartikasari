import site from "@/data/site.json";

export type TentangProfileItem = {
  label: string;
  value: string;
};

export type TentangContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  greeting: {
    title: string;
    subtitle: string;
    message: string;
  };
  profile: {
    title: string;
    description: string;
    items: TentangProfileItem[];
    approachTitle: string;
    approachParagraphs: string[];
  };
  visionMission: {
    visionTitle: string;
    vision: string;
    missionTitle: string;
    missionPoints: string[];
  };
};

export const tentangContent: TentangContent = {
  hero: {
    eyebrow: "Tentang Sekolah",
    title: "TK Kartikasari",
    description:
      "TK Kartikasari hadir sebagai lingkungan bermain-belajar yang hangat bagi anak usia dini di Bantarsari, Cilacap. Kami berfokus pada stimulasi kemandirian, kreativitas, dan karakter melalui kegiatan tematik yang menyenangkan.",
  },
  greeting: {
    title: "Sambutan Kepala Sekolah",
    subtitle: "Ibu Mintarsih, Kepala TK Kartikasari",
    message:
      "Selamat datang di TK Kartikasari. Kami percaya setiap anak adalah pribadi unik yang layak mendapatkan perhatian dan stimulasi yang tepat. Tim pengajar kami hadir untuk menumbuhkan rasa ingin tahu, kreativitas, dan kemandirian dalam suasana belajar yang hangat dan aman. Kami mendorong komunikasi harian antara orang tua dan guru agar perkembangan anak terpantau dengan baik. Setiap hari di TK Kartikasari adalah kesempatan untuk bermain, bereksplorasi, dan bertumbuh bersama.",
  },
  profile: {
    title: "Profil Sekolah",
    description:
      "Kami melayani anak usia 4–6 tahun dengan pendekatan belajar aktif. Lingkungan sekolah dibuat aman dan nyaman sehingga anak bebas mengekspresikan diri sambil dibimbing guru berpengalaman.",
    items: [
      { label: "Nama Sekolah", value: site.schoolName },
      { label: "Alamat", value: site.address },
      { label: "Kepala Sekolah", value: site.headmaster },
      { label: "WhatsApp", value: site.whatsapp },
      { label: "Jam Buka", value: site.openingHours },
    ],
    approachTitle: "Pendekatan Kami",
    approachParagraphs: [
      "Guru dan orang tua membangun komunikasi rutin melalui laporan harian. Aktivitas dipadukan dengan nilai moral, pembiasaan ibadah, dan kerja sama kelompok kecil agar setiap anak merasa dihargai.",
      "Fasilitas meliputi ruang kelas tematik, area bermain outdoor, dan sentra seni yang mendukung eksplorasi anak.",
    ],
  },
  visionMission: {
    visionTitle: "Visi",
    vision:
      "Menjadi taman kanak-kanak yang hangat, aman, dan inspiratif, yang menumbuhkan kemandirian, kreativitas, serta karakter anak sebagai fondasi pendidikan masa depan.",
    missionTitle: "Misi",
    missionPoints: [
      "Menyediakan lingkungan belajar yang ramah anak, aman, dan menyenangkan.",
      "Menumbuhkan rasa ingin tahu, daya cipta, dan kemampuan berkomunikasi.",
      "Mengembangkan keterampilan sosial, emosional, fisik, dan kognitif melalui bermain bermakna.",
      "Mendorong kemitraan aktif antara sekolah, orang tua, dan masyarakat.",
      "Mengintegrasikan nilai-nilai moral dan Pancasila sebagai pedoman perilaku sehari-hari.",
    ],
  },
};
