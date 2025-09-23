import data from "@/data/pengumuman.json";
export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold">Pengumuman</h1>
      <div className="mt-4 space-y-3">
        {data.map((item) => (
          <a key={item.id} href={item.url} className="card p-4 block hover:bg-gray-50">
            <p className="text-sm text-text-muted">{new Date(item.date).toLocaleDateString("id-ID")}</p>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-text-muted">{item.excerpt}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
