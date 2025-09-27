'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AdminShell } from '@/components/admin/AdminShell';
import { slugify } from '@/utils/slugify';
import { sanityClient } from '@/lib/sanity-client';
import { getPosts, Post } from '@/lib/blog';

interface FormState {
  title: string;
  slug: string;
  date: string;
  body: string;
  coverImageFile: File | null;
}

const getInitialFormState = (): FormState => ({
  title: '',
  slug: '',
  date: new Date().toISOString().split('T')[0],
  body: '',
  coverImageFile: null,
});

export default function BlogManagementPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [form, setForm] = useState<FormState>(() => getInitialFormState());
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info' | null>(null);
  const bodyImageInputRef = useRef<HTMLInputElement | null>(null);
  const titleFieldId = useId();
  const slugFieldId = useId();
  const dateFieldId = useId();
  const coverFieldId = useId();
  const bodyFieldId = useId();

  const fetchPosts = useCallback(async () => {
    const fetchedPosts = await getPosts();
    setPosts(fetchedPosts);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const resetForm = useCallback(() => {
    setForm(getInitialFormState());
    setCoverPreview(null);
  }, []);

  useEffect(() => {
    if (!form.coverImageFile) {
      setCoverPreview(null);
      return;
    }
    const url = URL.createObjectURL(form.coverImageFile);
    setCoverPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [form.coverImageFile]);

  useEffect(() => {
    if (!message || messageType === 'error') return;
    const timeout = setTimeout(() => {
      setMessage(null);
      setMessageType(null);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [message, messageType]);

  const handleTitleChange = useCallback((value: string) => {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: prev.slug || slugify(value),
    }));
  }, []);

  const uploadFile = useCallback(async (file: File) => {
    try {
      const asset = await sanityClient.assets.upload('image', file);
      return asset.url;
    } catch (error) {
      console.error('Image upload failed:', error);
      throw new Error('Gagal mengunggah gambar.');
    }
  }, []);

  const handleBodyImageUpload = useCallback(() => {
    bodyImageInputRef.current?.click();
  }, []);

  const handleBodyImageChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      try {
        setMessage('Mengunggah gambar konten...');
        setMessageType('info');
        const imageUrl = await uploadFile(file);
        setForm((prev) => ({
          ...prev,
          body: `${prev.body}\n\n![Deskripsi gambar](${imageUrl})\n\n`,
        }));
        setMessage('Gambar berhasil ditambahkan ke konten.');
        setMessageType('success');
      } catch (error) {
        console.error(error);
        setMessage('Gagal mengunggah gambar konten.');
        setMessageType('error');
      } finally {
        event.target.value = '';
      }
    },
    [uploadFile]
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitting(true);
      setMessage(null);
      setMessageType(null);

      try {
        if (!form.title || !form.slug || !form.date || !form.body) {
          throw new Error('Harap lengkapi seluruh field yang wajib diisi.');
        }

        const normalizedSlug = slugify(form.slug);
        const slugAlreadyExists = posts.some((post) => post.slug === normalizedSlug);
        if (slugAlreadyExists) {
          throw new Error('Slug sudah digunakan. Gunakan slug lain agar URL unik.');
        }

        let imageAsset;
        if (form.coverImageFile) {
          const image = await sanityClient.assets.upload('image', form.coverImageFile);
          imageAsset = {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: image._id,
            },
          };
        }

        await sanityClient.create({
          _type: 'post',
          title: form.title,
          slug: { _type: 'slug', current: normalizedSlug },
          date: form.date,
          content: form.body,
          mainImage: imageAsset,
        });

        resetForm();
        fetchPosts(); // Refresh the posts list
        setMessage('Postingan berhasil disimpan.');
        setMessageType('success');
      } catch (error: any) {
        console.error(error);
        setMessage(error.message || 'Terjadi kesalahan saat menyimpan data.');
        setMessageType('error');
      } finally {
        setIsSubmitting(false);
      }
    },
    [form, posts, fetchPosts, resetForm]
  );

  const handleDelete = useCallback(async (postId: string) => {
    const confirmation = confirm('Apakah Anda yakin ingin menghapus postingan ini?');
    if (!confirmation) return;

    try {
      await sanityClient.delete(postId);
      fetchPosts(); // Refresh the posts list
      setMessage('Postingan berhasil dihapus.');
      setMessageType('success');
    } catch (error) {
      console.error(error);
      setMessage('Gagal menghapus postingan.');
      setMessageType('error');
    }
  }, [fetchPosts]);

  return (
    <AdminShell
      title="Blog & Kegiatan"
      description="Kelola berita sekolah, unggah dokumentasi, dan atur jadwal publikasi."
    >
      <div className="space-y-12">
        {message && (
          <div
            className={`rounded-lg border p-4 text-sm ${
              messageType === 'error'
                ? 'border-red-200 bg-red-50 text-red-700'
                : messageType === 'success'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border-primary/20 bg-primary/5 text-primary'
            }`}
          >
            {message}
          </div>
        )}

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Tambah Postingan Baru</h2>
          <p className="mt-2 text-sm text-slate-600">
            Lengkapi formulir berikut untuk mempublikasikan berita atau dokumentasi kegiatan.
            Semua konten mendukung format Markdown sehingga mudah untuk menambahkan gambar dan
            penekanan teks.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor={titleFieldId}>
                Judul*
              </label>
              <input
              type="text"
              id={titleFieldId}
              value={form.title}
              onChange={(event) => handleTitleChange(event.target.value)}
              placeholder="Misal: Kegiatan Karnaval Sekolah"
              className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor={slugFieldId}>
              Slug URL*
            </label>
            <input
              type="text"
              id={slugFieldId}
              value={form.slug}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  slug: slugify(event.target.value),
                }))
              }
              placeholder="kegiatan-karnaval-sekolah"
              className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
            <p className="mt-2 text-sm text-gray-500">Slug digunakan sebagai bagian dari URL. Hanya huruf kecil, angka, dan tanda hubung.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor={dateFieldId}>
                Tanggal Publikasi*
              </label>
              <input
                type="date"
                id={dateFieldId}
                value={form.date}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    date: event.target.value,
                  }))
                }
                className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor={coverFieldId}>
                Gambar Cover
              </label>
              <input
                type="file"
                accept="image/*"
                id={coverFieldId}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    coverImageFile: event.target.files?.[0] ?? null,
                  }))
                }
                className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {coverPreview && (
                <div className="mt-4">
                  <p className="mb-2 text-sm text-gray-600">Pratinjau cover:</p>
                  <div className="relative h-48 w-full overflow-hidden rounded-md">
                    <Image src={coverPreview} alt="Pratinjau cover" fill className="object-cover" unoptimized />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700" htmlFor={bodyFieldId}>
                Konten Utama*
              </label>
              <button
                type="button"
                onClick={handleBodyImageUpload}
                className="rounded-md border border-primary px-3 py-1 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
              >
                + Tambah Gambar ke Konten
              </button>
            </div>
            <textarea
              value={form.body}
              id={bodyFieldId}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  body: event.target.value,
                }))
              }
              placeholder={
                'Tulis cerita kegiatan di sini dalam format Markdown.\n\nContoh menambahkan gambar: ![Deskripsi](https://url-gambar.com)'
              }
              className="min-h-[240px] w-full rounded-md border border-gray-300 p-3 font-mono text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
            <input
              ref={bodyImageInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleBodyImageChange}
            />
            <p className="mt-2 text-sm text-gray-500">Konten menggunakan format Markdown. Anda dapat menambahkan heading, daftar, dan lainnya.</p>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100"
              disabled={isSubmitting}
              onClick={() => {
                resetForm();
                setMessage(null);
                setMessageType(null);
              }}
            >
              Reset
            </button>
            <button
              type="submit"
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Menyimpan...' : 'Simpan Postingan'}
            </button>
          </div>
          </form>
        </section>

        <section>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">Daftar Postingan</h2>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Total {posts.length} postingan
            </p>
          </div>
          {posts.length === 0 ? (
            <p className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500">
              Belum ada data postingan. Silakan tambah postingan baru untuk mengisi daftar ini.
            </p>
          ) : (
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-slate-600">Judul</th>
                    <th className="px-4 py-3 font-semibold text-slate-600">Tanggal</th>
                    <th className="px-4 py-3 font-semibold text-slate-600">Slug</th>
                    <th className="px-4 py-3 text-right font-semibold text-slate-600">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {posts.map((post) => (
                    <tr key={post._id} className="bg-white transition hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-900">{post.title}</td>
                      <td className="px-4 py-3 text-slate-600">
                        {new Date(post.date).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </td>
                      <td className="px-4 py-3 text-slate-500">{post.slug}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="rounded-md border border-primary px-3 py-1 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Lihat
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDelete(post._id)}
                            className="rounded-md border border-red-200 px-3 py-1 text-sm font-medium text-red-600 transition hover:bg-red-50"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </AdminShell>
  );
}
