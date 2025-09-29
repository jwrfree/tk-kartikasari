import PageHeader from '@/components/layout/PageHeader';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import BiayaClientComponent from './BiayaClientComponent';
import { CheckCircle, InfoCircle } from 'react-bootstrap-icons';
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
  const biayaPokok = biaya.costStructure
    .filter((item) => item.includedInCalculator)
    .map((item) => ({
      name: item.name,
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

      {/* Bagian Kalkulator dan Rincian Biaya */}
      <AnimateIn>
        <PageSection>
          <BiayaClientComponent biayaPokok={biayaPokok} />
        </PageSection>
      </AnimateIn>

      {/* Bagian Program Cicilan */}
      {installmentProgram && (
        <AnimateIn>
          <PageSection className="bg-surfaceAlt">
            <SectionHeader
              eyebrow="Fleksibilitas"
              title={installmentProgram.title}
            />
            <div className="max-w-4xl mx-auto mt-10">
              <div className="bg-surface p-8 rounded-2xl shadow-lg border border-border">
                <p className="text-center text-lg text-text-muted">{installmentProgram.description}</p>
                <ul className="mt-6 space-y-4">
                  {installmentProgram.options?.map((option: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mr-3 mt-1" />
                      <span className="text-text">{option}</span>
                    </li>
                  ))}
                </ul>
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
