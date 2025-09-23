export type PengumumanItem = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  url: string;
  category: string;
};

export type PengumumanContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  emptyState: string;
  items: PengumumanItem[];
};

export const pengumumanContent: PengumumanContent = {
  hero: {
    eyebrow: "Pengumuman",
    title: "Info Resmi TK Kartikasari",
    description:
      "Pantau kabar terbaru terkait PPDB, agenda orang tua, hingga informasi akademik dan libur sekolah. Daftar berikut akan diperbarui secara berkala.",
  },
  emptyState:
    "Belum ada pengumuman terkini. Silakan kembali beberapa saat lagi atau hubungi sekolah melalui WhatsApp.",
  items: [
    {
      id: "p1",
      title: "Pendaftaran Tahun Ajaran 2025/2026",
      date: "2025-11-15",
      excerpt:
        "Kuota terbatas untuk Kelas A dan B. Silakan hubungi Ibu Mintarsih untuk jadwal observasi.",
      url: "/ppdb",
      category: "PPDB",
    },
    {
      id: "p2",
      title: "Libur Akhir Tahun & Kegiatan Rumah",
      date: "2025-12-20",
      excerpt:
        "Sekolah libur 23 Desember 2025 – 4 Januari 2026. Anak dianjurkan tetap membaca buku cerita dan membantu orang tua di rumah.",
      url: "https://wa.me/6285227227826?text=Halo%20Bu%20Mintarsih%2C%20mohon%20info%20detail%20jadwal%20libur.",
      category: "Informasi",
    },
    {
      id: "p3",
      title: "Jadwal Parenting Class Januari",
      date: "2026-01-05",
      excerpt:
        "Orang tua diundang mengikuti kelas parenting bertema komunikasi positif pada 10 Januari 2026.",
      url: "/agenda",
      category: "Kegiatan Orang Tua",
    },
  ],
};
