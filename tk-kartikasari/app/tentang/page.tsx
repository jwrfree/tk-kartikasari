import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import site from "@/data/site.json";

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
    <>
      <PageHeader
        eyebrow="Tentang Sekolah"
        title="TK Kartikasari"
        description={
          <>
            TK Kartikasari hadir sebagai lingkungan bermain-belajar yang hangat bagi anak usia dini di Bantarsari, Cilacap.
            Kami berfokus pada stimulasi kemandirian, kreativitas, dan karakter melalui kegiatan tematik yang menyenangkan.
          </>
        }
      />

      <PageSection id="sambutan" padding="tight" containerClassName="max-w-4xl">
        <div className="card space-y-5 p-8">
          <div>
            <h2 className="text-3xl font-semibold">Sambutan Kepala Sekolah</h2>
            <p className="text-base text-text-muted">Ibu Mintarsih, Kepala TK Kartikasari</p>
          </div>
          <p className="text-pretty text-base leading-relaxed text-text">
            Selamat datang di TK Kartikasari. Kami percaya setiap anak adalah pribadi unik yang layak mendapatkan perhatian
            dan stimulasi yang tepat. Tim pengajar kami hadir untuk menumbuhkan rasa ingin tahu, kreativitas, dan kemandirian
            dalam suasana belajar yang hangat dan aman. Kami mendorong komunikasi harian antara orang tua dan guru agar
            perkembangan anak terpantau dengan baik. Setiap hari di TK Kartikasari adalah kesempatan untuk bermain,
            bereksplorasi, dan bertumbuh bersama.
          </p>
        </div>
      </PageSection>

      <PageSection
        id="profil"
        padding="tight"
        containerClassName="grid gap-6 md:grid-cols-[1.2fr,0.8fr] md:items-start"
      >
        <div className="card space-y-5 p-7">
          <h2 className="text-3xl font-semibold">Profil Sekolah</h2>
          <p className="text-pretty text-base leading-relaxed text-text-muted">
            Kami melayani anak usia 4–6 tahun dengan pendekatan belajar aktif. Lingkungan sekolah dibuat aman dan nyaman
            sehingga anak bebas mengekspresikan diri sambil dibimbing guru berpengalaman.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {profileItems.map((item) => (
              <li key={item.label} className="rounded-2xl border border-border bg-white p-5">
                <p className="text-xs uppercase tracking-wide text-secondary">{item.label}</p>
                <p className="mt-1 text-base font-medium text-text">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="card space-y-4 bg-secondary/5 p-7">
          <h3 className="text-xl font-semibold text-secondary">Pendekatan Kami</h3>
          <p className="text-base text-text-muted">
            Guru dan orang tua membangun komunikasi rutin melalui laporan harian. Aktivitas dipadukan dengan nilai moral,
            pembiasaan ibadah, dan kerja sama kelompok kecil agar setiap anak merasa dihargai.
          </p>
          <p className="text-base text-text-muted">
            Fasilitas meliputi ruang kelas tematik, area bermain outdoor, dan sentra seni yang mendukung eksplorasi anak.
          </p>
        </div>
      </PageSection>

      <PageSection id="visi-misi" padding="tight" containerClassName="grid gap-6 md:grid-cols-2">
        <div className="card space-y-3 p-7">
          <h2 className="text-3xl font-semibold">Visi</h2>
          <p className="text-pretty text-base leading-relaxed text-text-muted">
            Menjadi taman kanak-kanak yang hangat, aman, dan inspiratif, yang menumbuhkan kemandirian, kreativitas, serta
            karakter anak sebagai fondasi pendidikan masa depan.
          </p>
        </div>
        <div className="card space-y-3 p-7">
          <h2 className="text-3xl font-semibold">Misi</h2>
          <ul className="mt-1 list-disc space-y-2 pl-5 text-base leading-relaxed text-text-muted">
            {mission.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </PageSection>
    </>
  );
}
