import CTAButton from "@/components/CTAButton";
import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import { aboutDailyRhythm, aboutExperiencePillars, aboutHeaderHighlights, aboutMetaDescription, aboutMission, aboutStrengths } from "@/content/about";
import { heroVisitCTA, ppdbHeadmasterCTA } from "@/content/cta";
import { officialMilestones, officialProfile } from "@/data/official";
import site from "@/data/site.json";
import { createPageMetadata } from "@/lib/metadata";
import type { Icon as BootstrapIcon } from "react-bootstrap-icons";
import { Award, CalendarHeart, ChatHeart, ClockHistory, EnvelopeHeart, Flag, GeoAlt, HeartPulse, HouseHeart, Icon123, JournalBookmark, JournalCheck, Mortarboard, Palette, People, PersonBadge, PinMap, Puzzle, RocketTakeoff, ShieldCheck, Sunrise, Tree, Whatsapp } from "react-bootstrap-icons";

type ProfileItem = {
  label: string;
  value: string;
  icon: BootstrapIcon;
};

type ProfileGroup = {
  title: string;
  description: string;
  icon: BootstrapIcon;
  items: ProfileItem[];
};

const profileGroups: ProfileGroup[] = [
  {
    title: "Identitas Sekolah",
    description: "Data resmi yang menegaskan legalitas TK Kartikasari.",
    icon: Mortarboard,
    items: [
      { label: "Nama Sekolah", value: site.schoolName, icon: Mortarboard },
      { label: "NPSN", value: officialProfile.npsn, icon: Icon123 },
      { label: "Tanggal Berdiri", value: officialProfile.establishmentDate, icon: CalendarHeart },
      { label: "Kepala Sekolah", value: site.headmaster, icon: PersonBadge },
    ],
  },
  {
    title: "Legalitas & Operasional",
    description: "Landasan hukum dan ritme kegiatan belajar anak.",
    icon: ShieldCheck,
    items: [
      { label: "SK Operasional", value: officialProfile.operationalLicense, icon: ShieldCheck },
      { label: "Kurikulum", value: officialProfile.curriculum, icon: JournalBookmark },
      { label: "Jam Belajar", value: site.openingHours, icon: ClockHistory },
      {
        label: "Lingkungan Belajar",
        value: `${officialProfile.landArea} dengan area bermain luar ruang`,
        icon: Tree,
      },
    ],
  },
  {
    title: "Lokasi & Kontak",
    description: "Cara terhubung dan mengunjungi kami.",
    icon: GeoAlt,
    items: [
      { label: "Alamat", value: site.address, icon: GeoAlt },
      { label: "Wilayah", value: officialProfile.locationArea, icon: PinMap },
      { label: "Email", value: officialProfile.email, icon: EnvelopeHeart },
      { label: "WhatsApp", value: site.whatsapp, icon: Whatsapp },
    ],
  },
];

const highlightIcons: BootstrapIcon[] = [HeartPulse, Award, HouseHeart];
const headerHighlightItems = aboutHeaderHighlights.map((text, index) => ({
  text,
  Icon: highlightIcons[index] ?? HeartPulse,
}));

const experienceIcons: BootstrapIcon[] = [ShieldCheck, Puzzle, ChatHeart];
const experiencePillarsWithIcons = aboutExperiencePillars.map((pillar, index) => ({
  ...pillar,
  Icon: experienceIcons[index] ?? ShieldCheck,
}));

const dailyRhythmIcons: BootstrapIcon[] = [Sunrise, Puzzle, JournalCheck];
const dailyRhythmWithIcons = aboutDailyRhythm.map((item, index) => ({
  ...item,
  Icon: dailyRhythmIcons[index] ?? Sunrise,
}));

const strengthsIcons: BootstrapIcon[] = [HeartPulse, Palette, People];
const strengthsWithIcons = aboutStrengths.map((item, index) => ({
  ...item,
  Icon: strengthsIcons[index] ?? HeartPulse,
}));

const milestoneIcons: BootstrapIcon[] = [Flag, Tree, RocketTakeoff];
const milestoneItems = officialMilestones.map((milestone, index) => ({
  ...milestone,
  Icon: milestoneIcons[index] ?? Flag,
}));

export const metadata = createPageMetadata({
  title: "Tentang",
  description: aboutMetaDescription,
  path: "/tentang",
});

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Sekolah"
        title={`${officialProfile.yearsOperating}+ Tahun Menguatkan Profil Pelajar Pancasila di Bantarsari`}
        description={
          <>
            Berawal dari mimpi sederhana pendidik Bantarsari, TK Kartikasari membuka pintu pada
            {" "}
            {officialProfile.establishmentDate}. Kami tumbuh bersama keluarga dengan dukungan NPSN
            {" "}
            {officialProfile.npsn} serta SK operasional {officialProfile.operationalLicense} yang menjaga transparansi
            layanan.
            {" "}
            Setiap hari kami merawat lingkungan belajar seluas {officialProfile.landArea} agar tetap hangat dan aman
            sambil menerapkan Kurikulum Merdeka PAUD melalui projek bermakna bersama keluarga.
          </>
        }
      >
        <div className="flex flex-wrap gap-3 pt-4">
          {headerHighlightItems.map(({ text, Icon: IconComponent }) => (
            <span
              key={text}
              className="inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-white/60 px-4 py-2 text-sm font-medium text-secondary backdrop-blur-sm backdrop-saturate-150 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary/10"
            >
              <IconComponent className="h-4 w-4 text-secondary" aria-hidden="true" />
              <span>{text}</span>
            </span>
          ))}
        </div>
      </PageHeader>

      <PageSection
        id="cerita"
        padding="relaxed"
        className="bg-gradient-to-br from-secondary/10 via-white to-primary/10"
        containerClassName="grid gap-8 md:grid-cols-[1.1fr,0.9fr]"
      >
        <article className="card relative overflow-hidden space-y-6 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" aria-hidden="true" />
          <div className="relative space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">Cerita Kami</p>
              <h2 className="text-3xl font-semibold text-text">26 Tahun Bertumbuh Bersama Keluarga Bantarsari</h2>
            </div>
            <p className="text-base leading-relaxed text-text-muted">
              Dimulai dari ruang belajar sederhana pada 1998, pendiri kami menyapa anak satu per satu dan menyiapkan
              kegiatan yang membuat mereka merasa di rumah. Sentra belajar dibentuk agar rasa ingin tahu alami anak
              bertemu dengan tujuan perkembangan yang jelas.
            </p>
            <p className="text-base leading-relaxed text-text-muted">
              Kini sebagian besar guru merupakan warga Bantarsari. Mereka mengenal keluarga murid, menyiapkan area
              transisi yang hangat, dan memastikan setiap sudut memenuhi standar Kemendikbudristek sehingga anak dapat
              bereksplorasi dengan aman.
            </p>
            <p className="text-base leading-relaxed text-text-muted">
              Implementasi Kurikulum Merdeka PAUD membuat guru leluasa menyesuaikan strategi dengan kebutuhan tiap anak.
              Kami menyeimbangkan Projek Profil Pelajar Pancasila, pembelajaran terdiferensiasi, dan asesmen autentik
              agar anak merasa dihargai sekaligus tertantang.
            </p>
            <ul className="grid gap-3 pt-2 sm:grid-cols-3">
              {experiencePillarsWithIcons.map(({ title, description, Icon: IconComponent }) => (
                <li
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/60 p-4 transition-all duration-300 backdrop-blur-lg backdrop-saturate-150 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg"
                >
                  <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                    <IconComponent className="h-4 w-4" aria-hidden="true" />
                    <span>{title}</span>
                  </span>
                  <p className="text-sm text-text-muted">{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
        <div className="space-y-6">
          <div className="card space-y-4 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-text">Pendampingan berbasis Kurikulum Merdeka</h3>
            <p className="text-base leading-relaxed text-text-muted">
              Guru melakukan observasi berkala, menyusun asesmen autentik, dan menyampaikan catatan positif kepada
              orang tua. Setiap anak mendapatkan rencana belajar terdiferensiasi yang menumbuhkan rasa percaya diri.
            </p>
            <p className="text-base leading-relaxed text-text-muted">
              Seluruh catatan perkembangan tersimpan rapi sebagai portofolio sehingga guru dan keluarga dapat
              memantau kemajuan karakter, literasi, dan numerasi secara terpadu.
            </p>
          </div>
          <div className="card space-y-4 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-text">Kemitraan Aktif dengan Orang Tua</h3>
            <p className="text-base leading-relaxed text-text-muted">
              Kami mengundang orang tua terlibat dalam agenda mingguan, sesi refleksi Projek P5, serta perayaan
              komunitas. Kolaborasi ini memastikan nilai Profil Pelajar Pancasila terus hidup di rumah.
            </p>
            <p className="text-base leading-relaxed text-text-muted">
              Informasi harian dibagikan melalui kanal resmi sehingga keluarga dapat melanjutkan cerita dan kebiasaan
              baik bersama anak setelah pulang.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="profil"
        padding="tight"
        containerClassName="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]"
      >
        <div className="space-y-6">
          <div className="card space-y-6 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-3xl font-semibold">Profil Sekolah</h2>
            <p className="text-base leading-relaxed text-text-muted">
              Selama {officialProfile.yearsOperating}+ tahun terdaftar di Kemendikbudristek, kami tumbuh bersama keluarga
              Bantarsari. Informasi berikut membantu orang tua mengenal identitas, operasional, dan cara berkunjung.
            </p>
            <div className="space-y-5">
              {profileGroups.map(({ title, description, icon: GroupIcon, items }) => (
                <section
                  key={title}
                  className="rounded-2xl border border-white/60 bg-white/60 p-5 transition-all duration-300 backdrop-blur-lg backdrop-saturate-150 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                        <GroupIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="text-xl font-semibold text-text">{title}</h3>
                    </div>
                    <p className="text-sm text-text-muted sm:text-right">{description}</p>
                  </div>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {items.map(({ label, value, icon: ItemIcon }) => (
                      <li key={label} className="flex gap-3">
                        <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                          <ItemIcon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-wide text-secondary">{label}</p>
                          <p className="mt-1 text-sm font-medium text-text">{value}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
          <div className="card relative overflow-hidden p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <div
              className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-white/50 to-primary/10"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">Perjalanan Singkat</p>
              <div className="relative mt-5 pl-2">
                <span className="pointer-events-none absolute left-[18px] top-0 bottom-0 w-px bg-secondary/20" aria-hidden="true" />
                <ul className="space-y-6">
                  {milestoneItems.map(({ year, title, description, Icon: IconComponent }) => (
                    <li key={year} className="relative pl-12">
                      <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
                        {year}
                      </span>
                      <div className="rounded-2xl border border-white/60 bg-white/70 p-4 backdrop-blur-lg backdrop-saturate-150">
                        <div className="flex items-center gap-2 text-secondary">
                          <IconComponent className="h-5 w-5" aria-hidden="true" />
                          <span className="text-sm font-semibold">{title}</span>
                        </div>
                        <p className="mt-2 text-sm text-text-muted">{description}</p>
                      </div>
                    </li>
                  ))}\
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card space-y-5 bg-secondary/5 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-secondary">Ritme Sehari di TK Kartikasari</h3>
          <p className="text-base leading-relaxed text-text-muted">
            Rutinitas Kurikulum Merdeka yang lembut dan konsisten membantu anak merasa aman sambil memupuk tanggung jawab kecil.
          </p>
          <ul className="space-y-4">
            {dailyRhythmWithIcons.map(({ title, description, Icon: IconComponent }, index) => (
              <li
                key={title}
                className="group flex gap-4 rounded-2xl border border-white/60 bg-white/60 p-4 transition-all duration-300 backdrop-blur-lg backdrop-saturate-150 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-sm font-semibold text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <IconComponent className="h-5 w-5 text-secondary" aria-hidden="true" />
                    <h4 className="font-semibold text-text">{title}</h4>
                  </div>
                  <p className="text-sm text-text-muted">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageSection id="keunggulan" padding="tight">
        <div className="space-y-10">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-semibold text-text">Mengapa Orang Tua Memilih TK Kartikasari</h2>
            <p className="text-base leading-relaxed text-text-muted">
              Legalitas lengkap, pengalaman panjang, dan Kurikulum Merdeka yang konsisten membuat orang tua merasa
              tenang. Berikut tiga hal yang paling sering diapresiasi keluarga yang telah bergabung.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {strengthsWithIcons.map(({ title, description, Icon: IconComponent }) => (
              <article
                key={title}
                className="card h-full space-y-4 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-semibold text-text">{title}</h3>
                </div>
                <p className="text-base leading-relaxed text-text-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection
        id="visi-misi"
        padding="tight"
        containerClassName="grid gap-6 md:grid-cols-2"
      >
        <div className="card space-y-4 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-3xl font-semibold">Visi</h2>
          <p className="text-base leading-relaxed text-text-muted">
            Menjadi taman kanak-kanak yang penuh kasih, aman, dan inspiratif untuk menumbuhkan kreativitas serta karakter
            mulia anak sebagai bekal masa depan.
          </p>
        </div>
        <div className="card space-y-4 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-3xl font-semibold">Misi</h2>
          <ul className="space-y-3 text-base leading-relaxed text-text-muted">
            {aboutMission.map((point) => (
              <li
                key={point}
                className="rounded-2xl border border-white/60 bg-white/60 p-4 transition-all duration-300 backdrop-blur-lg backdrop-saturate-150 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageSection padding="relaxed">
        <div className="card border-none bg-gradient-to-br from-secondary via-secondary/90 to-primary p-10 text-white shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_60px_-15px_rgba(96,93,255,0.45)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold">Siap Mengenal TK Kartikasari Lebih Dekat?</h2>
              <p className="max-w-2xl text-base leading-relaxed text-white/85">
                Kami dengan senang hati menyambut kunjungan keluarga untuk melihat langsung suasana belajar. Mari jadwalkan
                pertemuan atau mulai proses pendaftaran agar anak dapat tumbuh di lingkungan yang penuh perhatian.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <CTAButton config={ppdbHeadmasterCTA} />
              <CTAButton config={heroVisitCTA} />
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
