
import Link from 'next/link';

export default function AdminPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="mb-8 text-4xl font-bold">Admin Panel</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/admin/content">
          <div className="block rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <h2 className="mb-2 text-2xl font-semibold">Content Management</h2>
            <p className="text-gray-600">Edit the text content of your website&apos;s pages.</p>
          </div>
        </Link>
        <Link href="/admin/blog">
          <div className="block rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <h2 className="mb-2 text-2xl font-semibold">Blog &amp; Kegiatan</h2>
            <p className="text-gray-600">Buat postingan baru, unggah gambar, dan kelola berita terbaru.</p>
          </div>
        </Link>
        {/* Other admin sections can be added here in the future */}
      </div>
    </main>
  );
}
