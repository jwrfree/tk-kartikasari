
// Definisi Tipe Data untuk Kejelasan
export type CostCategory = "Uang Pangkal" | "Biaya Bulanan" | "Opsional";

export interface CostItem {
  _id: string;
  name: string;
  amount: number;
  category: CostCategory;
  description: string;
  includedInCalculator: boolean;
  type: "sekali bayar" | "per bulan" | "opsional";
}

export interface InstallmentProgram {
  title: string;
  description: string;
  options: string[];
  note?: string;
}

export interface RefundPolicyPoint {
  title: string;
  content: string;
}

export interface RefundPolicy {
  title: string;
  points: RefundPolicyPoint[];
}

// Data Struktur Biaya
export const costStructure: CostItem[] = [
  {
    _id: "uang_pangkal",
    name: "Uang Pangkal",
    amount: 4000000,
    category: "Uang Pangkal",
    description: "Biaya pengembangan & investasi fasilitas sekolah. Dibayarkan sekali saat masuk.",
    includedInCalculator: true,
    type: "sekali bayar",
  },
  {
    _id: "spp_juli",
    name: "SPP Bulan Juli",
    amount: 500000,
    category: "Biaya Bulanan",
    description: "Biaya SPP untuk bulan pertama tahun ajaran.",
    includedInCalculator: true,
    type: "per bulan",
  },
  {
    _id: "seragam",
    name: "Paket Seragam",
    amount: 750000,
    category: "Uang Pangkal",
    description: "3 set seragam: harian, olahraga, dan batik.",
    includedInCalculator: true,
    type: "sekali bayar",
  },
    {
    _id: "kegiatan",
    name: "Biaya Kegiatan Tahunan",
    amount: 600000,
    category: "Uang Pangkal",
    description: "Meliputi field trip, perayaan hari besar, dan materi proyek P5.",
    includedInCalculator: true,
    type: "sekali bayar",
  },
  {
    _id: "antar_jemput",
    name: "Layanan Antar-Jemput",
    amount: 350000,
    category: "Opsional",
    description: "Layanan antar-jemput bulanan untuk area Bantarsari dan sekitarnya.",
    includedInCalculator: false,
    type: "opsional",
  },
  {
    _id: "katering",
    name: "Katering Makan Siang",
    amount: 400000,
    category: "Opsional",
    description: "Paket makan siang sehat dan bergizi untuk 20 hari sekolah.",
    includedInCalculator: false,
    type: "opsional",
  },
];

// Data Program Cicilan
export const installmentProgram: InstallmentProgram = {
  title: "Program Cicilan Pembayaran",
  description: "Kami menyediakan beberapa opsi pembayaran uang pangkal untuk meringankan beban finansial Anda. Silakan pilih opsi yang paling sesuai.",
  options: [
    "Pembayaran lunas dengan diskon 5% untuk uang pangkal.",
    "Cicilan 3x selama 3 bulan pertama dengan bunga 0%.",
    "Cicilan 6x dengan biaya administrasi tambahan sebesar 2%.",
  ],
  note: "Untuk informasi lebih lanjut mengenai program cicilan, silakan hubungi administrasi kami.",
};

// Data Kebijakan Pengembalian Dana
export const refundPolicy: RefundPolicy = {
  title: "Kebijakan Pengembalian Dana",
  points: [
    {
      title: "Pembatalan Sebelum Tahun Ajaran Dimulai",
      content: "Jika pembatalan dilakukan 2 minggu sebelum hari pertama sekolah, 75% dari uang pangkal akan dikembalikan. SPP dan biaya seragam dikembalikan penuh.",
    },
    {
      title: "Pembatalan Setelah Tahun Ajaran Dimulai",
      content: "Tidak ada pengembalian uang pangkal jika pembatalan dilakukan setelah tahun ajaran resmi dimulai.",
    },
    {
      title: "Kasus Khusus (Pindah Domisili)",
      content: "Untuk kasus pindah domisili yang dibuktikan dengan surat resmi, kebijakan pengembalian dana dapat didiskusikan secara individual dengan pihak sekolah.",
    },
     {
      title: "Biaya yang Tidak Dapat Dikembalikan",
      content: "Biaya formulir pendaftaran dan biaya kegiatan yang sudah berjalan tidak dapat dikembalikan dalam kondisi apa pun.",
    },
  ],
};

// Saya juga meng-export ulang struktur biaya ringkas untuk halaman PPDB agar tidak error
export const strukturBiaya = {
  total: costStructure.filter(i => i.includedInCalculator).reduce((sum, item) => sum + item.amount, 0),
  komponen: costStructure.filter(i => i.includedInCalculator).map(item => ({
    nama: item.name,
    jumlah: item.amount,
    deskripsi: item.description
  }))
}
