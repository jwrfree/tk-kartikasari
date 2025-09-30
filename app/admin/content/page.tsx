
import { AdminShell } from '@/components/admin/AdminShell';
import { createPageMetadata } from '@/lib/metadata';
import { getGlobalSiteData } from '@/lib/sanity.queries';

export async function generateMetadata() {
  const { siteSettings } = await getGlobalSiteData();
  return createPageMetadata({
    title: 'Kelola Konten',
    description: 'Perbarui teks halaman utama, profil sekolah, dan informasi penting TK Kartikasari melalui panel administrasi.',
    path: '/admin/content',
    siteSettings,
  });
}

export default function ContentManagementPage() {
  return (
    <AdminShell
      title="Kelola Konten"
      description="Perbarui teks halaman utama, profil sekolah, dan informasi penting lainnya."
    >
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">
          Editor konten terpusat akan hadir di sini. Sementara ini, koordinasikan dengan tim
          pengembang untuk memperbarui konten statis melalui berkas Markdown pada repositori.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
          <li>Konten halaman utama berada di folder <code>content/homepage</code>.</li>
          <li>Gunakan format Markdown sederhana agar konsisten dengan tampilan situs.</li>
          <li>Simpan perubahan dan jalankan proses build untuk menerapkan pembaruan.</li>
        </ul>
      </div>
    </AdminShell>
  );
}
