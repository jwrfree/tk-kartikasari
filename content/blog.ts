
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  tags: string[];
  image: string;
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "7-kegiatan-seru-tk-kartikasari",
    title: "7 Kegiatan Seru yang Membuat Anak Betah Belajar di TK Kartikasari",
    description: "Dari petualangan di kebun hingga eksperimen sains sederhana, lihat bagaimana kami mengubah pembelajaran menjadi permainan yang tak terlupakan.",
    author: "Bu Mintarsih",
    publishedAt: "2024-05-20",
    tags: ["Kegiatan Sekolah", "Kurikulum Merdeka"],
    image: "/images/blog/kegiatan-seru.jpg",
    body: `
      <p>Di TK Kartikasari, kami percaya bahwa belajar harus menyenangkan. Kami merancang berbagai kegiatan yang tidak hanya mendidik tetapi juga merangsang imajinasi dan kreativitas anak. Berikut adalah 7 kegiatan favorit anak-anak di sekolah kami:</p>
      
      <h2>1. Petualangan Kebun Sekolah</h2>
      <p>Anak-anak belajar tentang siklus hidup tanaman dengan menanam, merawat, dan memanen sayuran di kebun mini kami. Ini adalah cara langsung untuk mengenalkan konsep sains dan tanggung jawab.</p>

      <h2>2. Eksperimen Sains Sederhana</h2>
      <p>Setiap minggu, kami mengadakan sesi "Ilmuwan Cilik" di mana anak-anak melakukan eksperimen aman seperti membuat gunung berapi dari soda kue atau mencampur warna. Antusiasme mereka saat melihat reaksi kimia sederhana sangat tak ternilai.</p>

      <h2>3. Hari Budaya Nusantara</h2>
      <p>Sebulan sekali, kami merayakan kekayaan budaya Indonesia. Anak-anak mengenakan pakaian adat, belajar tarian daerah, dan mencicipi makanan tradisional. Ini menumbuhkan rasa cinta tanah air sejak dini.</p>

      <h2>4. Panggung Boneka Karakter</h2>
      <p>Melalui cerita yang dimainkan dengan boneka tangan, kami mengajarkan nilai-nilai seperti kejujuran, empati, dan kerja sama. Anak-anak tidak hanya terhibur tetapi juga menyerap pesan moral dengan mudah.</p>

      <h2>5. Sentra Seni dan Kreasi</h2>
      <p>Dengan berbagai bahan seperti cat air, tanah liat, dan bahan daur ulang, anak-anak bebas mengekspresikan diri. Kegiatan ini penting untuk mengembangkan motorik halus dan imajinasi mereka.</p>

      <h2>6. Kunjungan Edukatif (Field Trip)</h2>
      <p>Kami secara rutin mengadakan kunjungan ke tempat-tempat seperti pemadam kebakaran, perpustakaan daerah, atau peternakan lokal. Pengalaman ini membuka wawasan mereka tentang dunia di sekitar mereka.</p>

      <h2>7. Pesta Air Ceria</h2>
      <p>Saat cuaca panas, tidak ada yang lebih menyenangkan daripada bermain air. Kegiatan ini bukan hanya untuk bersenang-senang, tetapi juga untuk melatih keterampilan motorik kasar dan kerja sama tim.</p>

      <p>Kegiatan-kegiatan ini adalah bagian dari komitmen kami untuk menciptakan lingkungan belajar yang holistik dan menyenangkan, sesuai dengan semangat Kurikulum Merdeka.</p>
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
    image: "/images/blog/bermain-peran.jpg",
    body: `
      <p>Di sudut kelas yang diubah menjadi 'dapur' atau 'rumah sakit', keajaiban terjadi. Anak-anak yang terlibat dalam bermain peran tidak hanya bersenang-senang; mereka sedang membangun keterampilan penting untuk kehidupan. Inilah mengapa sentra bermain peran menjadi bagian tak terpisahkan dari Kurikulum Merdeka di TK Kartikasari.</p>

      <h2>Mengembangkan Keterampilan Sosial dan Emosional</h2>
      <p>Saat bermain peran, anak-anak belajar bernegosiasi ("Sekarang giliranku jadi dokter!"), berempati (menenangkan 'pasien' yang menangis), dan bekerja sama. Mereka belajar memahami perspektif orang lain dan mengelola emosi mereka dalam konteks yang aman.</p>

      <h2>Mendorong Kemampuan Berbahasa dan Berkomunikasi</h2>
      <p>Bermain peran memperkaya kosakata anak. Mereka menggunakan kata-kata yang mungkin tidak mereka gunakan dalam percakapan sehari-hari, seperti "resep," "stetoskop," atau "pelanggan." Mereka juga berlatih menyusun kalimat dan mengekspresikan ide-ide kompleks.</p>

      <h2>Mengasah Keterampilan Memecahkan Masalah</h2>
      <p>Apa yang harus dilakukan jika 'kue' yang mereka buat gosong? Bagaimana cara berbagi mainan jika semua ingin peran yang sama? Skenario-skenario ini adalah latihan memecahkan masalah dalam skala kecil. Anak-anak belajar berpikir kreatif dan mencari solusi bersama.</p>

      <h2>Menghubungkan Pembelajaran dengan Dunia Nyata</h2>
      <p>Bermain peran membantu anak memahami dunia di sekitar mereka. Dengan meniru orang dewasa, mereka memproses dan memahami berbagai profesi, situasi sosial, dan rutinitas harian. Ini membuat pembelajaran menjadi relevan dan bermakna bagi mereka.</p>

      <p>Jadi, saat berikutnya Anda melihat anak Anda asyik berbicara dengan boneka atau 'memasak' daun-daunan, ingatlah bahwa mereka sedang melakukan pekerjaan penting. Mereka sedang belajar, tumbuh, dan mempersiapkan diri untuk masa depan.</p>
    `,
  },
];
