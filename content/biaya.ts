
export const strukturBiaya = {
  komponen: [
    {
      nama: "Biaya Investasi Pendidikan & Fasilitas",
      jumlah: 750000,
      deskripsi: "Investasi awal untuk memastikan anak mendapatkan akses ke semua fasilitas unggulan, materi pembelajaran berkualitas, dan lingkungan belajar yang terus ditingkatkan.",
      termasukKalkulator: true,
      kategori: "sekali bayar"
    },
    {
      nama: "SPP per Bulan",
      jumlah: 80000,
      deskripsi: "Mencakup semua kegiatan belajar-mengajar reguler, material dasar sentra, dan evaluasi berkala.",
      termasukKalkulator: true,
      kategori: "bulanan"
    },
    {
      nama: "Seragam Sekolah (3 Stel)",
      jumlah: 250000,
      deskripsi: "Paket 3 stel seragam yang dirancang untuk kenyamanan, menumbuhkan identitas sekolah, dan rasa kebersamaan di antara siswa.",
      termasukKalkulator: true,
      kategori: "sekali bayar"
    },
    {
      nama: "Buku & Alat Tulis per Tahun",
      jumlah: 150000,
      deskripsi: "Paket buku penunjang kurikulum dan alat tulis dasar untuk satu tahun ajaran.",
      termasukKalkulator: false,
      kategori: "tahunan"
    },
    {
      nama: "Kegiatan Ekstrakurikuler (Opsional)",
      jumlah: 25000,
      deskripsi: "Biaya per ekstrakurikuler per bulan, seperti menari atau melukis. Dipilih sesuai minat.",
      termasukKalkulator: false,
      kategori: "opsional"
    }
  ],
  getBiayaPokok: function() {
    return this.komponen.filter(k => k.termasukKalkulator);
  }
};

export const programCicilan = {
  judul: "Kemudahan Pembayaran",
  deskripsi: "Kami memahami kebutuhan finansial setiap keluarga. Oleh karena itu, kami menyediakan beberapa opsi pembayaran untuk Uang Pangkal:",
  opsi: [
    "Apresiasi lunas: Dapatkan bonus potongan senilai Rp 50.000 untuk pembayaran Uang Pangkal penuh di muka.",
    "Cicilan 2x: 50% saat daftar ulang, 50% di bulan berikutnya.",
    "Cicilan 3x: 40% saat daftar ulang, 30% di bulan berikutnya, dan 30% di bulan ketiga."
  ],
  catatan: "Tujuan kami adalah menemukan solusi terbaik bagi keluarga Anda. Mari berdiskusi untuk memilih skema pembayaran yang paling nyaman."
};

export const kebijakanRefund = {
  judul: "Kebijakan Transparansi & Refund",
  poin: [
    {
      judul: "Biaya Pendaftaran",
      konten: "Biaya pendaftaran (yang merupakan bagian dari Uang Pangkal) tidak dapat dikembalikan (non-refundable) karena langsung dialokasikan untuk proses administrasi dan booking kuota."
    },
    {
      judul: "Pengunduran Diri Setelah Daftar Ulang",
      konten: "Kami memahami rencana dapat berubah. Jika pengunduran diri dilakukan setelah daftar ulang, kami dapat mengembalikan 50% Uang Pangkal selama pemberitahuan dilakukan maksimal 2 minggu sebelum hari pertama sekolah. Setelah itu, Uang Pangkal tidak dapat dikembalikan."
    },
    {
      judul: "SPP Bulanan",
      konten: "SPP yang sudah dibayarkan untuk bulan berjalan tidak dapat dikembalikan. Pembatalan untuk bulan berikutnya harus diinformasikan sebelum tanggal 25 di bulan berjalan."
    },
    {
      judul: "Benefit untuk Keluarga (Diskon Saudara Kandung)",
      konten: "Kami menawarkan diskon 10% untuk SPP anak kedua dan seterusnya yang bersekolah di TK Kartikasari secara bersamaan. Diskon berlaku selama kedua anak aktif bersekolah."
    }
  ]
};
