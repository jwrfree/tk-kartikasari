import PageHeader from "@/components/PageHeader";
import site from "@/data/site.json";
import { tentangPageHeader } from "@/data/content";

const profileItems = [
  { label: "Nama Sekolah", value: site.schoolName },
  { label: "Alamat", value: site.address },
  { label: "Kepala Sekolah", value: site.headmaster },
  { label: "WhatsApp", value: site.whatsapp },
  { label: "Jam Buka", value: site.openingHours },
];

const mission = [
  "Menyediakan lingkungan belajar yang ramah anak, aman, dan menyenangkan.",
  "Menumbuhkan rasa ingin tahu, daya cipta, dan kemampuan berkomunikasi.",
  "Mengembangkan keterampilan sosial, emosional, fisik, dan kognitif melalui bermain bermakna.",
  "Mendorong kemitraan aktif antara sekolah, orang tua, dan masyarakat.",
  "Mengintegrasikan nilai-nilai moral dan Pancasila sebagai pedoman perilaku sehari-hari.",
];

export default function Page() {
  return (
    <div className="container py-8 space-y-8">
      <PageHeader
        {...tentangPageHeader}
        className="max-w-3xl"
        descriptionClassName="text-text-muted"
      />

      <section id="sambutan" className="card p-6 space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Sambutan Kepala Sekolah</h2>
          <p className="text-sm text-text-muted">Ibu Mintarsih, Kepala TK Kartikasari</p>
        </div>
        <p className="leading-relaxed text-text">
          Selamat datang di TK Kartikasari. Kami percaya setiap anak adalah pribadi unik yang layak mendapatkan perhatian dan
          stimulasi yang tepat. Tim pengajar kami hadir untuk menumbuhkan rasa ingin tahu, kreativitas, dan kemandirian dalam
          suasana belajar yang hangat dan aman. Kami mendorong komunikasi harian antara orang tua dan guru agar perkembangan
          anak terpantau dengan baik. Setiap hari di TK Kartikasari adalah kesempatan untuk bermain, bereksplorasi, dan
          bertumbuh bersama.
        </p>
      </section>

      <section id="profil" className="grid gap-4 md:grid-cols-[1.2fr,0.8fr] md:items-start">
        <div className="card p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Profil Sekolah</h2>
          <p className="text-text-muted">
            Kami melayani anak usia 4–6 tahun dengan pendekatan belajar aktif. Lingkungan sekolah dibuat aman dan nyaman
            sehingga anak bebas mengekspresikan diri sambil dibimbing guru berpengalaman.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {profileItems.map((item) => (
              <li key={item.label} className="rounded-2xl border border-border bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-secondary">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-text">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-6 space-y-3 bg-secondary/5">
          <h3 className="text-lg font-semibold text-secondary">Pendekatan Kami</h3>
          <p className="text-sm text-text-muted">
            Guru dan orang tua membangun komunikasi rutin melalui laporan harian. Aktivitas dipadukan dengan nilai moral,
            pembiasaan ibadah, dan kerja sama kelompok kecil agar setiap anak merasa dihargai.
          </p>
          <p className="text-sm text-text-muted">
            Fasilitas meliputi ruang kelas tematik, area bermain outdoor, dan sentra seni yang mendukung eksplorasi anak.
          </p>
        </div>
      </section>

      <section id="visi-misi" className="grid gap-4 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold">Visi</h2>
          <p className="mt-3 text-text-muted">
            Menjadi taman kanak-kanak yang hangat, aman, dan inspiratif, yang menumbuhkan kemandirian, kreativitas, serta
            karakter anak sebagai fondasi pendidikan masa depan.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-2xl font-semibold">Misi</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-text-muted">
            {mission.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
