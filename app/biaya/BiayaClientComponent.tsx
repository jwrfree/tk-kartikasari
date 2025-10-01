'use client';

import { useState, useMemo, useEffect } from 'react';
import { formatRupiah } from '@/utils/currency';

// Definisikan tipe untuk properti komponen
interface BiayaPokok {
  name: string;
  amount: number;
  description: string;
  category: string;
}

interface BiayaClientComponentProps {
  biayaPokok: BiayaPokok[];
}

export default function BiayaClientComponent({ biayaPokok }: BiayaClientComponentProps) {
  const [sppBulan, setSppBulan] = useState(12);
  const [isHighlightingTotal, setIsHighlightingTotal] = useState(false);

  const biayaSekaliBayar = useMemo(() => 
    biayaPokok.filter(b => b.category === 'sekali bayar'), 
    [biayaPokok]
  );

  const biayaBulanan = useMemo(() => 
    biayaPokok.find(b => b.category === 'bulanan'), 
    [biayaPokok]
  );

  const totalSekaliBayar = useMemo(() => 
    biayaSekaliBayar.reduce((acc, item) => acc + item.amount, 0), 
    [biayaSekaliBayar]
  );

  const totalBulanan = useMemo(() => 
    biayaBulanan ? biayaBulanan.amount * sppBulan : 0, 
    [biayaBulanan, sppBulan]
  );

  const totalEstimasi = totalSekaliBayar + totalBulanan;

  useEffect(() => {
    setIsHighlightingTotal(true);
    const timeoutId = window.setTimeout(() => setIsHighlightingTotal(false), 300);
    return () => window.clearTimeout(timeoutId);
  }, [totalEstimasi]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      {/* Kolom Rincian Biaya */}
      <div>
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-text">Rincian Skema Biaya Pokok (Estimasi)</h3>
          <p className="text-lg text-text-muted mt-2">Gambaran struktur biaya sementara yang kami gunakan sebagai acuan awal sebelum angka resmi diterbitkan.</p>
        </div>
        <div className="space-y-4">
          {biayaPokok.map((item) => (
            <div key={item.name} className="rounded-xl border border-border bg-surface p-5 shadow-sm">
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-semibold text-text">{item.name}</h4>
                <span className="text-lg font-bold text-primary whitespace-nowrap ml-4">{formatRupiah(item.amount)}</span>
              </div>
              <p className="mt-2 text-sm text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Kolom Kalkulator Estimasi */}
      <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 sticky top-24">
        <h3 className="text-2xl font-bold text-text text-center">Simulasi Skema Biaya 1 Tahun Pertama</h3>
        <p className="text-text-muted text-center mt-2">Gunakan kalkulator ini untuk memahami estimasi awal sebelum kami merilis angka final.</p>

        <div className="mt-8">
          {/* Rincian Kalkulasi */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-text-muted">Total Biaya Sekali Bayar</span>
              <span className="font-semibold text-text">{formatRupiah(totalSekaliBayar)}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-text-muted">Total SPP ({sppBulan} bulan)</span>
              <span className="font-semibold text-text">{formatRupiah(totalBulanan)}</span>
            </div>
            <div className="my-4">
                <label htmlFor="sppRange" className="block text-sm font-medium text-text-muted mb-2">Ubah durasi pembayaran SPP:</label>
                <input 
                    id="sppRange"
                    type="range" 
                    min="1" 
                    max="12" 
                    value={sppBulan} 
                    onChange={(e) => setSppBulan(Number(e.target.value))} 
                    className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer"
                />
            </div>
          </div>

          {/* Total Estimasi */}
          <div className="mt-6 pt-6 border-t border-primary/20">
             <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-text">Estimasi Total Tahun Pertama</span>
                <span
                  className={`text-2xl font-bold text-primary transition-opacity duration-300 ${
                    isHighlightingTotal ? 'opacity-80' : 'opacity-100'
                  }`}
                >
                  {formatRupiah(totalEstimasi)}
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
