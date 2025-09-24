
export const virtualTour = {
  title: "Jelajahi TK Kartikasari Secara Virtual",
  description: "Rasakan suasana belajar yang ceria dan aman di sekolah kami. Klik untuk memulai tur 360 derajat dan lihat setiap sudut ruang yang kami siapkan untuk tumbuh kembang anak Anda.",
  placeholderText: "Placeholder untuk Video Virtual Tour 360°"
};

export type FasilitasDetail = {
  nama: string;
  deskripsi: string;
  icon: string; // Placeholder for a representative icon
  fitur: string[];
  imgPlaceholder: {
    title: string;
    info: string;
  }
};

export const daftarFasilitas: FasilitasDetail[] = [
  {
    nama: "Ruang Kelas Tematik",
    deskripsi: "Setiap ruang kelas dirancang ceria dan lapang, dengan tema yang berganti secara berkala untuk menstimulasi imajinasi dan menjaga semangat belajar anak.",
    icon: "PencilSquare", 
    fitur: [
      "Pojok baca yang nyaman",
      "Area sentra main peran",
      "Papan tulis interaktif",
      "Sirkulasi udara yang baik"
    ],
    imgPlaceholder: {
        title: "Foto Ruang Kelas",
        info: "Area untuk menampilkan foto high-quality"
    }
  },
  {
    nama: "Playground Outdoor",
    deskripsi: "Area bermain outdoor kami yang aman dan hijau menyediakan ruang bagi anak untuk berlari, memanjat, dan bermain ayunan, mengembangkan motorik kasar mereka.",
    icon: "PuzzleFill",
    fitur: [
      "Perosotan dan ayunan standar SNI",
      "Area pasir kinetik",
      "Taman lalu lintas mini",
      "Permukaan empuk (rubber mat)"
    ],
     imgPlaceholder: {
        title: "Foto Playground",
        info: "Area untuk menampilkan foto high-quality"
    }
  },
  {
    nama: "Perpustakaan Mini",
    deskripsi: "Sebuah sudut yang tenang dan kaya akan buku cerita bergambar untuk menumbuhkan kecintaan anak pada literasi sejak dini.",
    icon: "BookHalf",
    fitur: [
      "Koleksi buku cerita anak",
      "Bean bag dan karpet yang nyaman",
      "Sistem peminjaman buku sederhana",
      "Kegiatan dongeng rutin"
    ],
     imgPlaceholder: {
        title: "Foto Perpustakaan",
        info: "Area untuk menampilkan foto high-quality"
    }
  },
  {
    nama: "Area Berkebun (Green Corner)",
    deskripsi: "Anak-anak belajar tentang sains dan alam secara langsung dengan menanam, merawat, dan memanen tanaman sederhana di kebun sekolah kami.",
    icon: "TreeFill",
    fitur: [
      "Pot dan tanaman yang mudah dirawat",
      "Alat berkebun ukuran anak",
      "Program menanam sayur dan bunga",
      "Komposter mini untuk belajar daur ulang"
    ],
     imgPlaceholder: {
        title: "Foto Area Berkebun",
        info: "Area untuk menampilkan foto high-quality"
    }
  }
];

