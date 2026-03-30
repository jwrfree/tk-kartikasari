'use client';

import { Whatsapp } from 'react-bootstrap-icons';
import { useCTAButton, useSiteData } from '@/app/providers/SiteDataProvider';

const WhatsAppButton = () => {
  const { siteSettings } = useSiteData();
  const generalInquiry = useCTAButton('generalInquiry');
  const phoneNumber = siteSettings.whatsapp.startsWith('0')
    ? `62${siteSettings.whatsapp.substring(1)}`
    : siteSettings.whatsapp;
  const message = generalInquiry?.message ?? 'Halo, saya ingin mendapatkan informasi mengenai TK Kartikasari.';

  const handleClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 inline-flex min-h-[3.5rem] items-center justify-center gap-2 rounded-full border border-white/70 bg-[#2d6a4f] px-5 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-[#245640]"
      aria-label="Hubungi kami via WhatsApp"
    >
      <Whatsapp className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
