'use client';

import { Whatsapp } from 'react-bootstrap-icons';

const WhatsAppButton = () => {
  const phoneNumber = '6285161725482'; // Ganti dengan nomor WhatsApp sekolah Anda
  const message = 'Halo, saya tertarik untuk mendaftar di TK Kartikasari. Bisakah saya mendapatkan informasi lebih lanjut?';

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
