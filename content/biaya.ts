
export const strukturBiaya = {
  komponen: [
    {
      nama: "Uang Pangkal (Formulir & Pembangunan)",
      jumlah: 3500000,
      deskripsi: "Dibayarkan sekali saat penerimaan siswa baru. Sudah termasuk biaya administrasi dan pengembangan fasilitas.",
      termasukKalkulator: true,
      kategori: "sekali bayar"
    },
    {
      nama: "SPP per Bulan",
      jumlah: 350000,
      deskripsi: "Mencakup semua kegiatan belajar-mengajar reguler, material dasar sentra, dan evaluasi berkala.",
      termasukKalkulator: true,
      kategori: "bulanan"
    },
    {
      nama: "Seragam Sekolah (3 Stel)",
      jumlah: 450000,
      deskripsi: "Terdiri dari seragam harian, seragam olahraga, dan seragam khusus (misal: baju adat).",
      termasukKalkulator: true,
      kategori: "sekali bayar"
    },
    {
      nama: "Buku & Alat Tulis per Tahun",
      jumlah: 250000,
      deskripsi: "Paket buku penunjang kurikulum dan alat tulis dasar untuk satu tahun ajaran.",
      termasukKalkulator: false,
      kategori: "tahunan"
    },
    {
      nama: "Kegiatan Ekstrakurikuler (Opsional)",
      jumlah: 150000,
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
    "Pembayaran lunas (cash) dengan diskon khusus Rp 200.000.",
    "Cicilan 2x: 50% saat daftar ulang, 50% di bulan berikutnya.",
    "Cicilan 3x: 40% saat daftar ulang, 30% di bulan berikutnya, dan 30% di bulan ketiga."
  ],
  catatan: "Silakan hubungi bagian administrasi kami untuk mendiskusikan opsi pembayaran yang paling sesuai untuk Anda."
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
      konten: "Jika siswa mengundurkan diri setelah melakukan pembayaran Uang Pangkal, pengembalian dana dapat diproses sebesar 50% jika pengunduran diri dilakukan maksimal 2 minggu sebelum hari pertama sekolah. Setelah itu, Uang Pangkal tidak dapat dikembalikan."
    },
    {
      judul: "SPP Bulanan",
      konten: "SPP yang sudah dibayarkan untuk bulan berjalan tidak dapat dikembalikan. Pembatalan untuk bulan berikutnya harus diinformasikan sebelum tanggal 25 di bulan berjalan."
    },
    {
      judul: "Diskon Saudara Kandung",
      konten: "Kami menawarkan diskon 10% untuk SPP anak kedua dan seterusnya yang bersekolah di TK Kartikasari secara bersamaan. Diskon berlaku selama kedua anak aktif bersekolah."
    }
  ]
};

