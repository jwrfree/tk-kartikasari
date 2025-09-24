
import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import { createPageMetadata } from "@/lib/metadata";
import { daftarFasilitas, virtualTour } from "@/content/fasilitas";
import { CheckCircle, Image as ImageIcon, PlayCircleFill } from "react-bootstrap-icons";

export const metadata = createPageMetadata({
    title: "Fasilitas Sekolah",
    description: "Lihat lebih dekat fasilitas modern dan aman di TK Kartikasari. Dari ruang kelas tematik, playground outdoor, hingga perpustakaan mini yang nyaman.",
    path: "/fasilitas",
});

export default function FasilitasPage() {
    return (
        <>
            <PageHeader 
                eyebrow="Fasilitas Kami"
                title="Lingkungan Belajar yang Aman & Merangsang"
                description="Setiap sudut sekolah kami dirancang untuk mendukung eksplorasi, kreativitas, dan keamanan anak. Jelajahi fasilitas kami yang dirancang khusus untuk para pembelajar cilik."
            />

            {/* Placeholder Virtual Tour */}
            <PageSection padding="none">
                <div className="relative aspect-video w-full rounded-2xl bg-surface flex items-center justify-center border border-border shadow-lg overflow-hidden">
                    <div className="text-center z-10">
                        <PlayCircleFill className="mx-auto h-16 w-16 text-white shadow-md" />
                        <h2 className="mt-4 text-3xl font-bold text-white">{virtualTour.title}</h2>
                        <p className="mt-2 max-w-2xl mx-auto text-lg text-white/80">{virtualTour.description}</p>
                    </div>
                    <div className="absolute inset-0 bg-primary opacity-60"></div>
                    {/* You can place a background image here */}
                    <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('/images/hero-bg.jpg')`}}></div>
                </div>
            </PageSection>

            {/* Galeri Fasilitas */}
            <PageSection>
                 <div className="space-y-16">
                    {daftarFasilitas.map((fasilitas, index) => (
                        <div key={fasilitas.nama} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                            {/* Placeholder Gambar */}
                            <div className={`relative aspect-square lg:aspect-video rounded-xl bg-surfaceAlt border-2 border-dashed border-border flex items-center justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="text-center text-text-muted">
                                    <ImageIcon className="mx-auto h-12 w-12" />
                                    <h3 className="mt-2 text-lg font-semibold">{fasilitas.imgPlaceholder.title}</h3>
                                    <p className="text-sm">{fasilitas.imgPlaceholder.info}</p>
                                </div>
                            </div>

                            {/* Deskripsi Fasilitas */}
                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                <h3 className="text-3xl font-bold text-text">{fasilitas.nama}</h3>
                                <p className="mt-3 text-lg text-text-muted leading-relaxed">{fasilitas.deskripsi}</p>
                                <ul className="mt-6 space-y-3">
                                    {fasilitas.fitur.map(fitur => (
                                        <li key={fitur} className="flex items-center text-text">
                                            <CheckCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                                            <span>{fitur}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                 </div>
            </PageSection>
        </>
    );
}
