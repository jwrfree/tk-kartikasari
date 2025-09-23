import agenda from "@/data/agenda.json";
export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold">Agenda Sekolah</h1>
      <ul className="mt-4 space-y-3">
        {agenda.map((item) => (
          <li key={item.id} className="card p-4">
            <p className="text-sm text-text-muted">{new Date(item.date).toLocaleDateString("id-ID")}</p>
            <h2 className="font-semibold">{item.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}
