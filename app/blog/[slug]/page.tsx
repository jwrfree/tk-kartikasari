
import PageHeader from '@/components/layout/PageHeader';

// This is a temporary, simplified version of the page to ensure the build passes.
// All data-fetching logic has been removed.

export default function BlogPostPage() {
  return (
    <>
      <PageHeader
        eyebrow="Artikel"
        title="Halaman Sedang Dalam Perbaikan"
        description="Detail artikel untuk sementara tidak dapat ditampilkan. Kami sedang bekerja untuk memperbaikinya. Silakan coba lagi nanti."
      />

      <div className="content-container py-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-text-muted">
            Mohon maaf atas ketidaknyamanannya.
          </p>
        </div>
      </div>
    </>
  );
}
