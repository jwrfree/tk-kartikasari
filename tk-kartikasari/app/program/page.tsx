import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";

const classes = [
  {
    name: "Kelas A • Bintang Kecil",
    age: "Usia 4–5 tahun",
    description:
      "Masa peralihan dari playgroup menuju TK yang fokus pada eksplorasi sensorik, bahasa awal, dan kemandirian sederhana.",
    focus: [
      "Pembiasaan rutinitas dan sopan santun sehari-hari",
      "Koordinasi motorik halus melalui aktivitas seni dan konstruksi",
      "Pengayaan kosa kata lewat cerita, lagu, dan permainan peran",
    ],
  },
  {
    name: "Kelas B • Pelangi Ceria",
    age: "Usia 5–6 tahun",
    description:
      "Persiapan menuju sekolah dasar dengan penguatan literasi, numerasi, dan kemampuan sosial memimpin kelompok.",
    focus: [
      "Eksperimen STEAM sederhana dan proyek tematik mingguan",
      "Pembiasaan menulis nama, membaca suku kata, dan berhitung konkret",
      "Latihan presentasi mini untuk membangun rasa percaya diri",
    ],
  },
];

const learningMethods = [
  {
    title: "Sentra tematik",
    description:
      "Setiap hari anak bergiliran di sentra seni, balok, main peran, sains, dan persiapan agar pengalaman belajar kaya dan seimbang.",
  },
  {
    title: "Pendampingan individual",
    description:
      "Guru melakukan observasi harian dan catatan perkembangan sehingga kebutuhan masing-masing anak dapat ditindaklanjuti.",
  },
  {
    title: "Kolaborasi orang tua",
    description:
      "Laporan kegiatan dibagikan melalui WhatsApp dan sesi konsultasi bulanan untuk menyepakati strategi di rumah.",
  },
  {
    title: "Belajar di luar ruang",
    description:
      "Kegiatan berkebun, senam irama, dan eksplorasi lingkungan sekitar menyeimbangkan stimulasi fisik dan sosial anak.",
  },
];

const weeklySchedule = [
  {
    day: "Senin",
    theme: "Pembukaan tema & circle time",
    highlight: "Senam pagi, diskusi nilai moral, dan pengenalan kosa kata baru.",
  },
  {
    day: "Selasa",
    theme: "Eksperimen & sains sederhana",
    highlight: "Percobaan warna, air, atau alam yang memantik rasa ingin tahu.",
  },
  {
    day: "Rabu",
    theme: "Karya kreatif",
    highlight: "Melukis, kolase, hingga dapur mini untuk melatih motorik halus.",
  },
  {
    day: "Kamis",
    theme: "Berhitung dan literasi awal",
    highlight: "Permainan angka, pengenalan huruf, dan membaca cerita interaktif.",
  },
  {
    day: "Jumat",
    theme: "Eksplorasi luar ruang & ekstrakurikuler",
    highlight: "Berkebun, bermain peran, serta pilihan kelas tari, tahfidz, atau musik.",
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Program Pembelajaran"
        title="Program & Kegiatan TK Kartikasari"
        description="Program dirancang untuk menstimulasi seluruh aspek perkembangan anak usia dini dengan pendekatan bermain yang bermakna dan dukungan kolaboratif antara guru serta orang tua."
      />

      <PageSection padding="tight" containerClassName="grid gap-6 lg:grid-cols-2">
        {classes.map((item) => (
          <article key={item.name} className="card space-y-4 p-7">
            <div>
              <h2 className="text-3xl font-semibold">{item.name}</h2>
              <p className="text-base text-text-muted">{item.age}</p>
            </div>
            <p className="text-pretty text-base leading-relaxed text-text-muted">{item.description}</p>
            <ul className="list-disc space-y-2 pl-5 text-base text-text">
              {item.focus.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </PageSection>

      <PageSection padding="tight">
        <div className="card space-y-6 p-7">
          <h2 className="text-3xl font-semibold">Metode Belajar</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {learningMethods.map((method) => (
              <div key={method.title} className="rounded-2xl border border-border/60 bg-white p-6">
                <h3 className="text-xl font-semibold text-secondary">{method.title}</h3>
                <p className="mt-2 text-base text-text-muted">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection padding="tight">
        <div className="card space-y-5 p-7">
          <div>
            <h2 className="text-3xl font-semibold">Jadwal Mingguan</h2>
            <p className="text-base text-text-muted">
              Jadwal fleksibel mengikuti tema, namun pola rutinitas berikut membantu anak merasa aman.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {weeklySchedule.map((item) => (
              <div key={item.day} className="rounded-2xl border border-border/60 bg-secondary/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{item.day}</p>
                <p className="mt-1 text-lg font-semibold text-text">{item.theme}</p>
                <p className="mt-2 text-base text-text-muted">{item.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </>
  );
}
