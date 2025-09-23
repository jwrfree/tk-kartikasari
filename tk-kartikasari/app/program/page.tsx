export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold">Program</h1>
      <div className="grid gap-4 mt-4 sm:grid-cols-2">
        <div className="card p-4">
          <h2 className="font-semibold">Kelas A (4–5 tahun)</h2>
          <ul className="list-disc pl-5 text-text-muted mt-2 space-y-1">
            <li>Motorik kasar & halus</li>
            <li>Bahasa & komunikasi</li>
            <li>Interaksi sosial</li>
          </ul>
        </div>
        <div className="card p-4">
          <h2 className="font-semibold">Kelas B (5–6 tahun)</h2>
          <ul className="list-disc pl-5 text-text-muted mt-2 space-y-1">
            <li>Kesiapan sekolah dasar</li>
            <li>Literasi & numerasi awal</li>
            <li>Proyek bermain bermakna</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
