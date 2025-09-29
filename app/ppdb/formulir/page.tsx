'use client'

import Link from 'next/link';
import { Whatsapp } from 'react-bootstrap-icons';

export default function PpdbFormPage() {
  // TODO: Replace with the actual WhatsApp number
  const whatsappNumber = '6281234567890';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="bg-surfaceAlt">
      <div className="content-container py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Pendaftaran via WhatsApp
          </h1>
          <p className="mt-4 text-lg text-text-muted">
            Untuk mendaftar, silakan hubungi kami langsung melalui WhatsApp.
          </p>
          <div className="mt-8">
            <Link href={whatsappLink} className="btn-primary inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              <Whatsapp className="h-5 w-5" />
              Chat via WhatsApp
            </Link>
          </div>
           <div className="mt-8">
            <Link href="/" className="text-sm font-semibold leading-6 text-text-muted">
                Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
