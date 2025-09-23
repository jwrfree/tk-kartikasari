export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

export type GaleriContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  items: GalleryItem[];
};

export const galeriContent: GaleriContent = {
  hero: {
    eyebrow: "Galeri",
    title: "Galeri Kegiatan Anak",
    description:
      "Potret kegiatan anak TK Kartikasari dalam suasana belajar yang hangat, aktif, dan menyenangkan. Semua foto dimuat dengan teknik lazy-load agar halaman tetap ringan.",
  },
  items: [
    {
      id: "g1",
      src: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&h=350",
      alt: "Tiga balita makan di meja putih — foto oleh Naomi Shi dari Pexels",
      caption: "Sarapan sehat bersama teman-teman sebelum memulai kegiatan.",
    },
    {
      id: "g2",
      src: "https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg?auto=compress&cs=tinysrgb&h=350",
      alt: "Gadis kecil tersenyum — foto oleh Yan Krukau dari Pexels",
      caption: "Ekspresi ceria saat sesi bercakap dan bernyanyi di kelas.",
    },
    {
      id: "g3",
      src: "https://images.pexels.com/photos/8613121/pexels-photo-8613121.jpeg?auto=compress&cs=tinysrgb&h=350",
      alt: "Anak-anak berkegiatan seni — foto oleh Yan Krukau dari Pexels",
      caption: "Anak-anak bereksperimen dengan warna saat tema seni.",
    },
    {
      id: "g4",
      src: "https://images.pexels.com/photos/8422248/pexels-photo-8422248.jpeg?auto=compress&cs=tinysrgb&h=350",
      alt: "Anak-anak belajar di ruang kelas — foto oleh Pavel Danilyuk dari Pexels",
      caption: "Suasana belajar kelompok kecil yang hangat dan kolaboratif.",
    },
  ],
};
