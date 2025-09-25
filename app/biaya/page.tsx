
import FaqAccordion from "@/components/FaqAccordion";
import InfoCard from "@/components/InfoCard";
import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import { kebijakanRefund, programCicilan, strukturBiaya } from "@/content/biaya";
import { createPageMetadata } from "@/lib/metadata";
import { formatRupiah } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Biaya Pendidikan",
  description:
    "Informasi lengkap mengenai biaya pendidikan di TK Kartikasari. Dapatkan rincian biaya pendaftaran, SPP, dan komponen lainnya.",
  path: "/biaya",
});

export default function BiayaPage() {
  const faqItems = kebijakanRefund.poin.map(item => ({
    question: item.judul,
    answer: item.konten,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Biaya Pendidikan"
        title="Investasi Terbaik untuk Masa Depan Anak"
        description="Kami percaya bahwa pendidikan berkualitas harus dapat diakses. Temukan rincian biaya pendidikan yang transparan dan kompetitif di TK Kartikasari."
      />

      {/* Rincian Biaya */}
      <PageSection>
        <SectionHeader
          eyebrow="Detail Biaya"
          title="Komponen Biaya Pendidikan"
          description="Berikut adalah rincian biaya untuk tahun ajaran yang akan datang. Kami berkomitmen pada transparansi tanpa biaya tersembunyi."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {strukturBiaya.komponen.map((item) => (
            <InfoCard
              key={item.nama}
              title={item.nama}
            >
              <p className="text-2xl font-bold text-primary">{formatRupiah(item.jumlah)}</p>
              <p className="mt-2 text-sm">{item.deskripsi}</p>
            </InfoCard>
          ))}
        </div>
      </PageSection>

      {/* Opsi Pembayaran */}
      <PageSection className="bg-surfaceAlt">
        <SectionHeader
          eyebrow="Fleksibilitas"
          title={programCicilan.judul}
          description={programCicilan.deskripsi}
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
           <InfoCard title="Bayar Lunas">
             Dapatkan diskon khusus Rp 200.000 untuk pembayaran uang pangkal secara lunas.
           </InfoCard>
           <InfoCard title="Cicilan 2x">
              Bayar 50% saat daftar ulang dan 50% di bulan berikutnya.
           </InfoCard>
           <InfoCard title="Cicilan 3x">
              Bayar 40% saat daftar ulang, lalu 30% di dua bulan berikutnya.
           </InfoCard>
        </div>
         <p className="mt-8 text-center text-text-muted">{programCicilan.catatan}</p>
      </PageSection>
      
      {/* Kebijakan & FAQ */}
      <PageSection>
         <SectionHeader
          eyebrow="Transparansi"
          title="Kebijakan & Informasi Penting"
          description="Jawaban atas pertanyaan umum seputar biaya, pengembalian dana, dan diskon."
        />
        <div className="mt-10 mx-auto max-w-4xl">
            <FaqAccordion items={faqItems} />
        </div>
      </PageSection>
    </>
  );
}
