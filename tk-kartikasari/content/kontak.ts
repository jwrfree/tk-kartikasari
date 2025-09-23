import site from "@/data/site.json";

export type KontakInfoItem = {
  label: string;
  value: string;
};

export type KontakContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  info: KontakInfoItem[];
  cta: {
    label: string;
    message: string;
  };
  visit: {
    title: string;
    paragraphs: string[];
  };
  map: {
    title: string;
    description: string;
  };
};

export const kontakContent: KontakContent = {
  hero: {
    eyebrow: "Kontak",
    title: "Hubungi TK Kartikasari",
    description:
      "Kami siap membantu informasi seputar PPDB, jadwal kunjungan sekolah, maupun kebutuhan administrasi lainnya. Gunakan detail di bawah ini atau langsung hubungi kami melalui WhatsApp.",
  },
  info: [
    { label: "Alamat", value: site.address },
    { label: "WhatsApp", value: site.whatsapp },
    { label: "Kepala Sekolah", value: site.headmaster },
    { label: "Jam Buka", value: site.openingHours },
  ],
  cta: {
    label: "Chat via WhatsApp",
    message: "Halo Bu Mintarsih, saya ingin berkonsultasi mengenai TK Kartikasari.",
  },
  visit: {
    title: "Cara Berkunjung",
    paragraphs: [
      "Silakan informasikan kedatangan Anda terlebih dahulu agar kami dapat menyiapkan guru pendamping. Parkir tersedia di halaman sekolah dan lingkungan sekitar.",
      "Untuk kebutuhan administrasi seperti legalisir rapor atau permohonan surat, mohon bawa fotokopi dokumen yang diperlukan.",
    ],
  },
  map: {
    title: "Lokasi di Peta",
    description:
      "Gunakan peta interaktif berikut untuk menentukan rute terbaik menuju TK Kartikasari di Bulaksari, Cilacap.",
  },
};
