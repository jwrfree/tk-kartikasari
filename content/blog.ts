import { calculateReadingTime } from "@/lib/utils";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  tags: string[];
  image: string;
  body: string;
  readingTime: number; // Added readingTime
};

const blogData = [
  {
    slug: "7-kegiatan-seru-tk-kartikasari",
    title: "7 Kegiatan Belajar Seru di TK Kartikasari Sesuai Kurikulum Merdeka",
    description: "Temukan 7 kegiatan belajar inovatif di TK Kartikasari, dari kebun sekolah hingga sentra bermain peran, yang dirancang sesuai Kurikulum Merdeka untuk menumbuhkan kreativitas dan cinta belajar.",
    author: "Bu Mintarsih",
    publishedAt: "2024-05-20",
    tags: ["Kegiatan Sekolah", "Kurikulum Merdeka", "Pendidikan Anak Usia Dini"],
    image: "/images/blog/kegiatan-seru.jpg",
    body: `
      <p>Di TK Kartikasari, kami percaya bahwa belajar adalah sebuah petualangan yang menyenangkan. Mengacu pada prinsip <strong>Kurikulum Merdeka</strong>, kami merancang beragam kegiatan yang tidak hanya mendidik tetapi juga merangsang imajinasi, kreativitas, dan keterampilan sosial anak. Berikut adalah 7 kegiatan favorit yang membuat anak-anak selalu antusias di sekolah kami:</p>
      
      <h2>1. Petualangan Kebun Sekolah</h2>
      <p>Anak-anak tidak hanya belajar teori tentang tanaman, tetapi langsung praktik menanam, merawat, hingga memanen sayuran sederhana seperti bayam dan kangkung di <a href=\"/fasilitas\">fasilitas</a> kebun mini kami. Kegiatan ini adalah cara nyata untuk mengenalkan konsep sains alam, siklus kehidupan, kesabaran, dan tanggung jawab.</p>

      <h2>2. Eksperimen Sains Sederhana</h2>
      <p>Setiap minggu, ruang kelas kami berubah menjadi laboratorium \'Ilmuwan Cilik\'. Anak-anak melakukan eksperimen aman dan menakjubkan seperti membuat \'gunung meletus\' dari soda kue, menciptakan pelangi susu, atau mengamati benda yang tenggelam dan terapung. Rasa ingin tahu mereka terpacu secara maksimal!</p>

      <h2>3. Hari Budaya Nusantara</h2>
      <p>Sebulan sekali, kami merayakan kekayaan budaya Indonesia. Anak-anak dengan bangga mengenakan pakaian adat, belajar tarian daerah sederhana, dan mencicipi makanan tradisional. Ini adalah cara kami menumbuhkan rasa cinta tanah air dan menghargai keberagaman sejak dini.</p>

      <h2>4. Panggung Boneka Karakter</h2>
      <p>Melalui cerita interaktif yang dimainkan dengan boneka tangan, kami mengajarkan nilai-nilai fundamental seperti kejujuran, empati, pentingnya berbagi, dan kerja sama. Anak-anak tidak hanya terhibur, tetapi juga menyerap pesan moral dengan cara yang dekat dengan dunia mereka.</p>

      <h2>5. Sentra Seni dan Kreasi</h2>
      <p>Di sentra seni, tidak ada kata \'salah\'. Dengan beragam media seperti cat air, tanah liat, hingga bahan daur ulang, anak-anak bebas mengekspresikan imajinasi mereka. Kegiatan ini sangat penting untuk melatih motorik halus, koordinasi mata dan tangan, serta kepercayaan diri. Cek <a href=\"/program\">program kami</a> untuk melihat integrasinya dalam kurikulum.</p>

      <h2>6. Kunjungan Edukatif (Field Trip)</h2>
      <p>Belajar tidak terbatas di dalam kelas. Kami secara rutin mengadakan kunjungan ke tempat-tempat inspiratif seperti pemadam kebakaran, perpustakaan daerah, atau sentra kerajinan lokal. Setiap kunjungan memiliki tujuan pembelajaran yang jelas dan tentunya, standar keamanan yang ketat.</p>

      <h2>7. Pesta Air Ceria</h2>
      <p>Saat cuaca mendukung, area bermain kami menjadi tempat \'Pesta Air Ceria\'. Lebih dari sekadar bermain, kegiatan ini dirancang untuk melatih keterampilan motorik kasar, keseimbangan, dan yang terpenting, kerja sama tim dalam suasana yang penuh tawa.</p>

      <p>Tujuh kegiatan ini hanyalah sebagian kecil dari komitmen kami untuk menciptakan lingkungan belajar yang holistik, aktif, dan menyenangkan. Kami percaya metode ini membangun fondasi yang kuat bagi anak untuk cinta belajar seumur hidup. Ingin melihat langsung keseruannya? <a href=\"/ppdb\">Daftarkan anak Anda</a> atau <a href=\"/kontak\">hubungi kami</a> untuk jadwal kunjungan sekolah.</p>
    `,
  },
  {
    slug: "tips-memilih-tk-berkualitas",
    title: "5 Tips Memilih TK Berkualitas untuk Buah Hati Anda",
    description: "Memilih sekolah pertama untuk anak adalah keputusan besar. Gunakan 5 tips praktis ini untuk menemukan TK yang tepat sesuai kebutuhan keluarga Anda.",
    author: "Tim PPDB",
    publishedAt: "2024-05-15",
    tags: ["Parenting", "PPDB"],
    image: "/images/blog/memilih-tk.jpg",
    body: `
      <p>Memilih Taman Kanak-Kanak (TK) yang tepat adalah langkah penting dalam perjalanan pendidikan anak Anda. Lingkungan yang positif dan mendukung di usia dini dapat membentuk dasar yang kuat untuk masa depan mereka. Berikut adalah 5 tips untuk membantu Anda membuat keputusan yang tepat:</p>
      
      <h2>1. Perhatikan Kualifikasi dan Rasio Guru</h2>
      <p>Guru adalah jantung dari setiap sekolah. Pastikan guru memiliki kualifikasi di bidang pendidikan anak usia dini. Tanyakan juga tentang rasio guru dan murid. Rasio yang lebih kecil memungkinkan perhatian yang lebih personal untuk setiap anak.</p>

      <h2>2. Amati Lingkungan Sekolah</h2>
      <p>Saat Anda berkunjung, perhatikan kebersihan, keamanan, dan keceriaan lingkungan. Apakah area bermainnya aman? Apakah ruang kelasnya terorganisir dan penuh dengan karya anak-anak? Lingkungan fisik sangat memengaruhi pengalaman belajar anak.</p>

      <h2>3. Pahami Kurikulum yang Digunakan</h2>
      <p>Tanyakan tentang kurikulum yang diterapkan. Kurikulum Merdeka, misalnya, berfokus pada pembelajaran berbasis proyek dan pengembangan karakter. Pastikan pendekatan sekolah sejalan dengan nilai-nilai yang Anda anut.</p>

      <h2>4. Libatkan Anak dalam Proses</h2>
      <p>Ajak anak Anda saat melakukan tur sekolah. Perhatikan bagaimana mereka bereaksi terhadap lingkungan dan berinteraksi dengan guru dan anak-anak lain. Kenyamanan anak Anda adalah prioritas utama.</p>

      <h2>5. Tanyakan Tentang Komunikasi Sekolah dan Orang Tua</h2>
      <p>Sekolah yang baik menjaga jalur komunikasi yang terbuka dengan orang tua. Tanyakan bagaimana sekolah melaporkan perkembangan anak, seberapa sering pertemuan orang tua diadakan, dan bagaimana mereka menangani masukan atau kekhawatiran dari orang tua.</p>

      <p>Dengan mempertimbangkan kelima faktor ini, Anda akan lebih percaya diri dalam memilih TK yang tidak hanya berkualitas tetapi juga terasa seperti rumah kedua bagi buah hati Anda.</p>
    `,
  },
  {
    slug: "pentingnya-sentra-bermain-peran",
    title: "Mengapa Sentra Bermain Peran Penting untuk Anak Usia Dini?",
    description: "Bermain dokter-dokteran atau masak-masakan lebih dari sekadar permainan. Temukan bagaimana sentra bermain peran (role playing) mengasah keterampilan sosial dan kognitif anak.",
    author: "Bu Mintarsih",
    publishedAt: "2024-05-10",
    tags: ["Kurikulum Merdeka", "Parenting"],
    image: "/images/blog/bermain-peran-baru.jpg",
    body: `
      <p>Di sentra bermain peran yang diubah menjadi \'dapur\' atau \'rumah sakit\', keajaiban terjadi. Anak-anak yang terlibat dalam bermain peran tidak hanya bersenang-senang; mereka sedang membangun keterampilan penting untuk kehidupan. Inilah mengapa sentra bermain peran menjadi bagian tak terpisahkan dari Kurikulum Merdeka di TK Kartikasari.</p>

      <h2>Mengembangkan Keterampilan Sosial dan Emosional</h2>
      <p>Saat bermain peran, anak-anak belajar bernegosiasi (\"Sekarang giliranku jadi dokter!\"), berempati (menenangkan \'pasien\' yang menangis), dan bekerja sama. Mereka belajar memahami perspektif orang lain dan mengelola emosi mereka dalam konteks yang aman.</p>

      <h2>Mendorong Kemampuan Berbahasa dan Berkomunikasi</h2>
      <p>Bermain peran memperkaya kosakata anak. Mereka menggunakan kata-kata yang mungkin tidak mereka gunakan dalam percakapan sehari-hari, seperti \"resep,\" \"stetoskop,\" atau \"pelanggan.\" Mereka juga berlatih menyusun kalimat dan mengekspresikan ide-ide kompleks.</p>

      <h2>Mengasah Keterampilan Memecahkan Masalah</h2>
      <p>Apa yang harus dilakukan jika \'kue\' yang mereka buat gosong? Bagaimana cara berbagi mainan jika semua ingin peran yang sama? Skenario-skenario ini adalah latihan memecahkan masalah dalam skala kecil. Anak-anak belajar berpikir kreatif dan mencari solusi bersama.</p>

      <h2>Menghubungkan Pembelajaran dengan Dunia Nyata</h2>
      <p>Bermain peran membantu anak memahami dunia di sekitar mereka. Dengan meniru orang dewasa, mereka memproses dan memahami berbagai profesi, situasi sosial, dan rutinitas harian. Ini membuat pembelajaran menjadi relevan dan bermakna bagi mereka.</p>

      <p>Jadi, saat berikutnya Anda melihat anak Anda asyik berbicara dengan boneka atau \'memasak\' daun-daunan, ingatlah bahwa mereka sedang melakukan pekerjaan penting. Mereka sedang belajar, tumbuh, dan mempersiapkan diri untuk masa depan.</p>
    `,
  },
];

export const blogPosts: BlogPost[] = blogData.map(post => ({
  ...post,
  readingTime: calculateReadingTime(post.body),
}));
