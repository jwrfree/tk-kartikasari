import PageHeader from '@/components/layout/PageHeader';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import BiayaClientComponent from './BiayaClientComponent';
import { ArrowRight, CheckCircle, InfoCircle, Telephone } from 'react-bootstrap-icons';
import AnimateIn from '@/components/AnimateIn';
import { getBiayaPageData } from '@/lib/sanity.queries';
import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  const { siteSettings } = await getBiayaPageData();
  return createPageMetadata({
    title: 'Rincian Biaya',
    description: 'Dapatkan informasi lengkap dan transparan mengenai rincian biaya pendidikan di TK Kartikasari, termasuk uang pangkal, SPP, dan opsi pembayaran yang fleksibel.',
    path: '/biaya',
    siteSettings,
  });
}

// Komponen untuk menampilkan satu item kebijakan
const PolicyItem = ({ title, content }: { title: string; content: string }) => (
  <div className="bg-surface p-6 rounded-lg shadow-sm border border-border">
    <h4 className="font-semibold text-lg text-text">{title}</h4>
    <p className="mt-2 text-text-muted">{content}</p>
  </div>
);

export default async function BiayaPage() {
  const { biaya } = await getBiayaPageData();
  const temporaryLabelMap: Record<string, string> = {
    'Uang Pangkal': 'Uang Pangkal (Skema)',
    'SPP Bulan Juli': 'SPP Bulan Juli (Estimasi)',
    'Paket Seragam': 'Paket Seragam (Estimasi)',
    'Biaya Kegiatan Tahunan': 'Biaya Kegiatan Tahunan (Estimasi)',
  };
  const biayaPokok = biaya.costStructure
    .filter((item) => item.includedInCalculator)
    .map((item) => ({
      name: temporaryLabelMap[item.name] ?? `${item.name} (Estimasi)`,
      amount: item.amount,
      description: item.description,
      category: item.type === 'per bulan' ? 'bulanan' : item.type,
    }));
  const installmentProgram = biaya.installmentProgram;
  const refundPolicy = biaya.refundPolicy;

  return (
    <>
      <PageHeader
        eyebrow="Transparansi Biaya"
        title="Investasi Terbaik untuk Masa Depan Anak Anda"
        description="Kami percaya bahwa pendidikan berkualitas harus dapat diakses. Di sini, Anda akan menemukan semua rincian biaya secara transparan tanpa ada yang ditutupi, lengkap dengan simulasi dan berbagai kemudahan pembayaran."
      />

      <PageSection padding="tight">
        <div className="space-y-6">
          <div className="rounded-2xl border border-yellow-300 bg-yellow-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-yellow-900">⚠️ PENTING: BIAYA INI MASIH SKEMA ESTIMASI</h2>
            <p className="mt-3 text-sm sm:text-base text-yellow-900/90">
              Rincian biaya yang tertera di bawah ini adalah <strong>contoh struktur pembiayaan (dummy data)</strong>. Kami sedang memfinalisasi angka resmi untuk TK Kartikasari di Bulaksari, Bantarsari, Cilacap.
            </p>
            <p className="mt-3 text-sm sm:text-base text-yellow-900/90 font-medium">
              Biaya resmi Tahun Ajaran 2024/2025 akan dirilis pada Juli 2024.
            </p>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-surface p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-text">Ingin Tahu Estimasi Biaya Riil Saat Ini?</h3>
            <p className="mt-2 text-text-muted">
              Jangan ragu, silakan hubungi tim administrasi kami. Kami siap memberikan informasi biaya yang paling akurat dan terkini.
            </p>
            <a
              href="https://wa.me/6281234567890"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            >
              <Telephone className="mr-2 h-4 w-4" aria-hidden="true" />
              Hubungi Admin PPDB
            </a>
          </div>
        </div>
      </PageSection>

      {/* Bagian Kalkulator dan Rincian Biaya */}
      <AnimateIn>
        <PageSection>
          <BiayaClientComponent biayaPokok={biayaPokok} />
          <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
            <p className="text-base text-text">
              Ingin membayar dengan lebih ringan?{' '}
              <a
                href="#dukungan-finansial"
                className="inline-flex items-center gap-1 font-semibold text-primary underline-offset-4 hover:underline"
              >
                <span>Lihat Opsi Cicilan dan Diskon Kami di Bawah</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </p>
          </div>
        </PageSection>
      </AnimateIn>

      <AnimateIn>
        <PageSection>
          <SectionHeader
            eyebrow="Perencanaan Menyeluruh"
            title="Perkiraan Anggaran Bulanan Komprehensif (TCOA)"
            description="Kami ingin membantu Anda merencanakan anggaran bulanan secara menyeluruh. Berikut adalah estimasi biaya lain di luar SPP, berdasarkan survei umum di area Bulaksari dan Bantarsari."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text">Transportasi (Antar-Jemput/Pribadi)</h3>
                <p className="mt-2 text-text-muted">Rp 350.000 - Rp 550.000 per bulan</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text">Bekal Makanan/Jajanan Sehat</h3>
                <p className="mt-2 text-text-muted">Rp 250.000 per bulan (jika tidak ada katering)</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text">Perlengkapan Tambahan</h3>
                <p className="mt-2 text-text-muted">Rp 75.000 per bulan (misalnya: alat mewarnai pribadi, tas, sepatu)</p>
              </div>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-text">Total Anggaran Bulanan (Estimasi)</h3>
                <p className="mt-3 text-3xl font-bold text-primary">Rp 975.000 - Rp 1.125.000</p>
                <p className="mt-4 text-sm text-text-muted">
                  Angka ini membantu Anda melihat gambaran besar kebutuhan bulanan anak di luar komponen biaya sekolah.
                </p>
              </div>
              <div className="mt-8 rounded-xl border border-primary bg-primary text-white p-6 text-center">
                <p className="font-semibold text-lg">Perhitungan ini masih estimasi skema.</p>
                <p className="mt-2 text-sm text-primary/90">
                  Untuk konfirmasi biaya riil yang akurat, dan untuk mengajukan cicilan atau bantuan, silakan hubungi Tim Administrasi PPDB kami.
                </p>
                <a
                  href="https://wa.me/6281234567890"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <Telephone className="mr-2 h-4 w-4" aria-hidden="true" />
                  Hubungi Admin PPDB
                </a>
              </div>
            </div>
          </div>
        </PageSection>
      </AnimateIn>

      {/* Bagian Program Cicilan */}
      {installmentProgram && (
        <AnimateIn>
          <PageSection className="bg-surfaceAlt" id="dukungan-finansial">
            <SectionHeader
              eyebrow="Fleksibilitas"
              title="Pilihan Dukungan Finansial & Bantuan Biaya"
            />
            <div className="max-w-4xl mx-auto mt-10">
              <div className="bg-surface p-8 rounded-2xl shadow-lg border border-border">
                <p className="text-center text-lg text-text-muted">
                  Fleksibilitas Pembayaran Uang Pangkal: Pilih opsi yang paling sesuai dengan perencanaan keuangan keluarga Anda.
                </p>
                <ul className="mt-6 space-y-4">
                  {installmentProgram.options?.map((option: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mr-3 mt-1" />
                      <span className="text-text">{option}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                    <h4 className="text-lg font-semibold text-text">Diskon Keluarga (Saudara Kandung)</h4>
                    <p className="mt-2 text-sm text-text-muted">
                      Investasi Anda lebih ringan jika mendaftarkan anak kedua dan seterusnya. Dapatkan diskon X% untuk uang pangkal anak berikutnya.
                    </p>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                    <h4 className="text-lg font-semibold text-text">Keringanan Biaya/Beasiswa (Untuk Kasus Khusus)</h4>
                    <p className="mt-2 text-sm text-text-muted">
                      Kami percaya pendidikan harus dapat diakses. Jika Anda menghadapi kendala finansial, kami memiliki skema bantuan khusus.{' '}
                      <a
                        href="/kontak"
                        className="inline-flex items-center gap-1 font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        <span>Pelajari kriteria dan cara pengajuan</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </p>
                  </div>
                </div>
                {installmentProgram.note && (
                  <div className="mt-8 text-center bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-lg flex items-center justify-center">
                    <InfoCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                    <p className="text-sm">{installmentProgram.note}</p>
                  </div>
                )}
              </div>
            </div>
          </PageSection>
        </AnimateIn>
      )}

      {/* Bagian Kebijakan Refund */}
      {refundPolicy && (
        <AnimateIn>
          <PageSection>
            <SectionHeader
              eyebrow="Kepastian & Kepercayaan"
              title={refundPolicy.title}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10">
              {refundPolicy.points?.map((item: any) => (
                <PolicyItem key={item.title} title={item.title} content={item.content} />
              ))}
            </div>
          </PageSection>
        </AnimateIn>
      )}
    </>
  );
}
