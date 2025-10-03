import Image from "next/image";

import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import { createPageMetadata } from "@/lib/metadata";
import { SANITY_NETWORK_SKIP_MESSAGE, fetchSanityData } from "@/lib/sanity-client";
import { urlFor } from "@/lib/sanity-image";
import { CheckCircle, Image as ImageIcon, PlayCircleFill } from "react-bootstrap-icons";
import AnimateIn from "@/components/AnimateIn";

export const metadata = createPageMetadata({
    title: "Fasilitas Sekolah",
    description: "Lihat lebih dekat fasilitas modern dan aman di TK Kartikasari. Dari ruang kelas tematik, playground outdoor, hingga perpustakaan mini yang nyaman.",
    path: "/fasilitas",
});

type VirtualTour = {
    title?: string;
    description?: string;
    videoUrl?: string;
} | null;

type Facility = {
    _id: string;
    name: string;
    description?: string;
    features?: string[];
    image?: unknown;
};

let hasLoggedFasilitasError = false;
let hasLoggedFasilitasSkip = false;

// Mengambil data dari Sanity
async function getFacilitiesData(): Promise<{ virtualTour: VirtualTour; facilities: Facility[] }> {
    try {
        const virtualTour = await fetchSanityData<VirtualTour>(
            '*[_type == "virtualTour"][0]'
        );
        const facilities = await fetchSanityData<Facility[]>(
            '*[_type == "facility"] | order(_createdAt asc)'
        );

        return {
            virtualTour: virtualTour ?? null,
            facilities: facilities ?? [],
        };
    } catch (error) {
        if (!hasLoggedFasilitasError) {
            console.error('Failed to fetch fasilitas from Sanity:', error);
            hasLoggedFasilitasError = true;
        } else if (
            !hasLoggedFasilitasSkip &&
            error instanceof Error &&
            error.message.includes(SANITY_NETWORK_SKIP_MESSAGE)
        ) {
            console.warn('Skipping fasilitas fetch after previous Sanity network failure.');
            hasLoggedFasilitasSkip = true;
        }
        return { virtualTour: null, facilities: [] };
    }
}

export default async function FasilitasPage() {
    const { virtualTour, facilities } = await getFacilitiesData();

    return (
        <>
            <PageHeader
                eyebrow="Fasilitas Kami"
                title="Lingkungan Belajar yang Aman & Merangsang"
                description="Setiap sudut sekolah kami dirancang untuk mendukung eksplorasi, kreativitas, dan keamanan anak. Jelajahi fasilitas kami yang dirancang khusus untuk para pembelajar cilik."
            />

            {/* Virtual Tour */}
            <AnimateIn>
                <PageSection padding="none">
                    <div className="relative aspect-video w-full rounded-2xl bg-surface flex items-center justify-center border border-border shadow-lg overflow-hidden">
                         {/* Konten Video atau Gambar Latar */}
                         <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('/images/hero-bg.jpg')`}}></div>
                        <div className="absolute inset-0 bg-primary opacity-60"></div>
                        <div className="text-center z-10 p-4">
                            <a href={virtualTour?.videoUrl || '#'} target="_blank" rel="noopener noreferrer" className="block transform hover:scale-105 transition-transform">
                                <PlayCircleFill className="mx-auto h-16 w-16 text-white shadow-md" />
                            </a>
                            <h2 className="mt-4 text-3xl font-bold text-white">{virtualTour?.title || "Jelajahi Sekolah Kami"}</h2>
                            <p className="mt-2 max-w-2xl mx-auto text-lg text-white/80">{virtualTour?.description || "Rasakan suasana belajar yang ceria dan aman di sekolah kami."}</p>
                        </div>
                    </div>
                </PageSection>
            </AnimateIn>

            {/* Galeri Fasilitas */}
            <PageSection>
                 <div className="space-y-16">
                    {facilities.length === 0 ? (
                        <p className="text-center text-text-muted">Data fasilitas belum tersedia untuk saat ini.</p>
                    ) : (
                    facilities.map((facility, index) => (
                        <AnimateIn key={facility._id}>
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center`}>
                                {/* Gambar Fasilitas */}
                                <div className={`relative aspect-square lg:aspect-[4/3] rounded-xl bg-surfaceAlt border border-border flex items-center justify-center overflow-hidden shadow-md ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    {facility.image ? (
                                        <Image
                                            src={urlFor(facility.image).width(800).height(600).url()}
                                            alt={facility.name}
                                            fill
                                            sizes="(min-width: 1024px) 50vw, 100vw"
                                            className="object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    ) : (
                                        <div className="text-center text-text-muted">
                                            <ImageIcon className="mx-auto h-12 w-12" />
                                            <h3 className="mt-2 text-lg font-semibold">Gambar Segera Hadir</h3>
                                        </div>
                                    )}
                                </div>

                                {/* Deskripsi Fasilitas */}
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <h3 className="text-3xl font-bold text-text">{facility.name}</h3>
                                    <p className="mt-3 text-lg text-text-muted leading-relaxed">{facility.description}</p>
                                    {facility.features && facility.features.length > 0 && (
                                        <ul className="mt-6 space-y-3">
                                            {facility.features.map((feature: string) => (
                                                <li key={feature} className="flex items-center text-text">
                                                    <CheckCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </AnimateIn>
                    ))
                    )}
                 </div>
            </PageSection>
        </>
    );
}
