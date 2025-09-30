
import Link from 'next/link';
import { AdminShell } from '@/components/admin/AdminShell';
import { createPageMetadata } from '@/lib/metadata';
import { getGlobalSiteData } from '@/lib/sanity.queries';

const quickLinks = [
  {
    href: '/admin/content',
    title: 'Kelola Konten',
    description: 'Perbarui hero, profil sekolah, dan informasi penting lainnya.',
    cta: 'Buka editor konten',
  },
  {
    href: '/admin/blog',
    title: 'Blog & Kegiatan',
    description: 'Tambah dokumentasi kegiatan terbaru beserta foto pendukung.',
    cta: 'Kelola berita',
  },
];

export async function generateMetadata() {
  const { siteSettings } = await getGlobalSiteData();
  return createPageMetadata({
    title: 'Dasbor Admin',
    description: 'Kelola konten TK Kartikasari mulai dari informasi utama hingga blog kegiatan dalam satu dasbor terpadu.',
    path: '/admin',
    siteSettings,
  });
}

export default function AdminPage() {
  return (
    <AdminShell
      title="Dasbor Utama"
      description="Kelola seluruh informasi TK Kartika Sari dari satu tempat."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {quickLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-indigo-700">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
            <span className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-600">
              {item.cta}
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5.5 3.5L10.5 8L5.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        ))}
        <div className="flex flex-col justify-between rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-slate-600">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Butuh modul baru?</h3>
            <p className="mt-2 text-sm">
              Hubungi pengembang untuk menambahkan modul administrasi lainnya seperti manajemen
              galeri, pendaftaran PPDB, atau laporan keuangan.
            </p>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Tips: susun checklist internal agar pembaruan informasi sekolah tetap konsisten.
          </p>
        </div>
      </div>
    </AdminShell>
  );
}
