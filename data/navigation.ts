
export type NavItem = {
  label: string;
} & ({
  href: string;
  children?: undefined;
} | {
  href?: undefined;
  children: {
    label: string;
    href: string;
    description: string;
  }[];
});

export const mainNav: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    children: [
      {
        label: "Tentang Kami",
        href: "/tentang",
        description: "Visi, misi, sejarah, dan nilai-nilai sekolah.",
      },
      {
        label: "Program",
        href: "/program",
        description: "Program pendidikan dan kurikulum unggulan kami.",
      },
      {
        label: "Fasilitas",
        href: "/fasilitas",
        description: "Lihat fasilitas pendukung kegiatan belajar.",
      },
    ],
  },
  {
    label: "Info Sekolah",
    children: [
      {
        label: "Blog",
        href: "/blog",
        description: "Artikel dan wawasan seputar pendidikan.",
      },
      {
        label: "Galeri",
        href: "/galeri",
        description: "Momen dan kegiatan yang terdokumentasi.",
      },
      {
        label: "Agenda",
        href: "/agenda",
        description: "Jadwal kegiatan dan acara sekolah.",
      },
      {
        label: "Pengumuman",
        href: "/pengumuman",
        description: "Informasi dan pengumuman penting.",
      },
    ],
  },
  { label: "PPDB", href: "/ppdb" },
  { label: "Biaya", href: "/biaya" },
  { label: "Kontak", href: "/kontak" },
];
