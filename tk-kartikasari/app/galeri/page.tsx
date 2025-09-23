import data from "@/data/galeri.json";
export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold">Galeri Kegiatan</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
        {data.map((item) => (
          <img key={item.id} src={item.src} alt={item.alt} className="rounded-xl border border-border" loading="lazy" />
        ))}
      </div>
    </div>
  )
}
