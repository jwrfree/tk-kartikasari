import CTAButton from "@/components/CTAButton";
export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold">PPDB</h1>
      <div className="card p-4 mt-4 space-y-3">
        <p><strong>Cara daftar:</strong></p>
        <ol className="list-decimal pl-5 text-text-muted space-y-1">
          <li>Chat WhatsApp Kepala Sekolah (Ibu Mintarsih).</li>
          <li>Atau datang langsung ke sekolah sesuai jam buka.</li>
          <li>Form online akan menyusul.</li>
        </ol>
        <div className="pt-2"><CTAButton /></div>
      </div>
    </div>
  )
}
