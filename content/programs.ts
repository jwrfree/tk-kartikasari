import type { LearningMethod, ProgramClass, WeeklyScheduleItem } from '@/lib/types/site';

export const programsMetaDescription =
  'Program TK Kartikasari membantu anak usia 4-6 tahun menjalani sekolah pertama dengan kelas yang lebih tenang, kegiatan yang sesuai usia, dan arahan yang mudah diikuti.';

export const programClasses: ProgramClass[] = [
  {
    name: 'Kelompok A',
    age: 'Usia 4-5 tahun',
    description:
      'Untuk anak yang masih belajar nyaman berada di sekolah, mengikuti kegiatan singkat, dan mulai mengenal rutinitas bersama.',
    focus: [
      'Masuk kelas dengan lebih tenang, mengenal guru, dan mengikuti permainan singkat bersama teman.',
      'Belajar merapikan alat, menunggu giliran, meminta bantuan, dan menyelesaikan aktivitas sederhana.',
      'Lebih cepat kembali tenang saat bingung atau malu karena guru membantu masa transisinya dengan sabar.',
    ],
    forWho: 'Untuk anak yang masih butuh waktu adaptasi dan ritme yang tidak terburu-buru.',
    whatChildrenDo: [
      'Mendengarkan cerita pendek, bermain peran, mencoba aktivitas sensorik, dan ikut permainan kelompok kecil.',
      'Belajar mengikuti arahan sederhana tanpa suasana yang terlalu menekan.',
    ],
    whatParentsNotice: 'Anak mulai lebih paham rutinitas pagi dan lebih siap berpisah sebentar dari orang tua.',
  },
  {
    name: 'Kelompok B',
    age: 'Usia 5-6 tahun',
    description:
      'Untuk anak yang mulai siap mengikuti kegiatan lebih terarah sambil menguatkan kesiapan dasar sebelum masuk sekolah dasar.',
    focus: [
      'Mengenal huruf, angka, pola, dan instruksi sederhana lewat kegiatan yang dekat dengan dunia anak.',
      'Berlatih bercerita, bekerja dalam kelompok kecil, dan menyelesaikan aktivitas sampai tuntas.',
      'Tetap belajar lewat pengalaman yang aktif dan konkret tanpa dikejar tekanan akademik yang terlalu cepat.',
    ],
    forWho:
      'Untuk anak yang sudah mulai siap duduk fokus lebih lama dan mengikuti kegiatan kelompok dengan lebih mantap.',
    whatChildrenDo: [
      'Mengikuti kegiatan yang lebih terarah, tetapi tetap lewat permainan, percakapan, dan aktivitas konkret.',
      'Belajar menyampaikan pendapat, menjawab pertanyaan, dan memulai tugas sederhana sendiri.',
    ],
    whatParentsNotice:
      'Anak lebih siap mengikuti rutinitas, lebih berani menjawab, dan lebih terbiasa menyelesaikan tugas kecil.',
  },
];

export const programLearningMethods: LearningMethod[] = [
  {
    title: 'Setiap anak boleh berkembang dengan temponya',
    description:
      'Guru menyesuaikan ritme kegiatan dengan kesiapan anak. Yang sudah siap tetap tertantang, yang masih adaptasi tidak langsung tertinggal.',
  },
  {
    title: 'Kemajuan dilihat dari kebiasaan sehari-hari',
    description:
      'Guru melihat bagaimana anak ikut kegiatan, merespons arahan, dan menyelesaikan aktivitas dari minggu ke minggu.',
  },
  {
    title: 'Orang tua tetap mendapat konteks',
    description:
      'Yang dibagikan ke orang tua adalah hal yang benar-benar perlu diketahui tentang keseharian anak di sekolah.',
  },
  {
    title: 'Kegiatan dekat dengan keseharian anak',
    description:
      'Belajar dibangun dari cerita, permainan, percobaan sederhana, kegiatan kelompok, dan aktivitas yang mudah dipahami anak.',
  },
];

export const programWeeklySchedule: WeeklyScheduleItem[] = [
  {
    day: 'Senin',
    theme: 'Masuk ritme minggu baru',
    highlight: 'Anak menata ulang rutinitas, mendengar arahan awal minggu, dan masuk ke kegiatan bersama.',
  },
  {
    day: 'Selasa',
    theme: 'Banyak mencoba',
    highlight: 'Hari yang cocok untuk eksplorasi, percobaan sederhana, dan kegiatan yang mengundang rasa ingin tahu.',
  },
  {
    day: 'Rabu',
    theme: 'Berkarya dan bercerita',
    highlight: 'Anak mengolah ide lewat gambar, musik, permainan peran, atau aktivitas tangan.',
  },
  {
    day: 'Kamis',
    theme: 'Menguatkan kesiapan dasar',
    highlight:
      'Ada kegiatan yang membantu anak lebih siap mendengar instruksi, mengenal simbol, dan menyelesaikan aktivitas.',
  },
  {
    day: 'Jumat',
    theme: 'Menutup minggu dengan pengalaman berbeda',
    highlight:
      'Biasanya ada kegiatan tematik, karya bersama, atau aktivitas tambahan yang membuat minggu terasa lengkap.',
  },
];
