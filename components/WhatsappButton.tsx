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
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      aria-label="Hubungi kami via WhatsApp"
    >
      <Whatsapp className="h-8 w-8" />
    </button>
  );
};

export default WhatsAppButton;
