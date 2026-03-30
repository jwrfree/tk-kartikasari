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

  const biayaSekaliBayar = useMemo(() => biayaPokok.filter((b) => b.category === 'sekali bayar'), [biayaPokok]);

  const biayaBulanan = useMemo(() => biayaPokok.find((b) => b.category === 'bulanan'), [biayaPokok]);

  const totalSekaliBayar = useMemo(
    () => biayaSekaliBayar.reduce((acc, item) => acc + item.amount, 0),
    [biayaSekaliBayar],
  );

  const totalBulanan = useMemo(() => (biayaBulanan ? biayaBulanan.amount * sppBulan : 0), [biayaBulanan, sppBulan]);

  const totalEstimasi = totalSekaliBayar + totalBulanan;

  useEffect(() => {
    setIsHighlightingTotal(true);
    const timeoutId = window.setTimeout(() => setIsHighlightingTotal(false), 300);
    return () => window.clearTimeout(timeoutId);
  }, [totalEstimasi]);

  return (
    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-text">Rincian skema biaya pokok</h3>
          <p className="mt-2 text-base text-text-muted">
            Komponen ini membantu Anda melihat biaya mana yang dibayar di awal dan mana yang berjalan bulanan.
          </p>
        </div>
        <div className="space-y-4">
          {biayaPokok.map((item) => (
            <div key={item.name} className="rounded-[1.4rem] border border-border/70 bg-surface p-5 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-lg font-semibold text-text">{item.name}</h4>
                <span className="ml-4 whitespace-nowrap text-lg font-semibold text-primary">
                  {formatRupiah(item.amount)}
                </span>
              </div>
              <p className="mt-2 text-sm text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sticky top-28 rounded-[1.8rem] border border-border/70 bg-surface p-8 shadow-soft">
        <h3 className="text-center text-2xl font-semibold text-text">Simulasi skema biaya tahun pertama</h3>
        <p className="mt-2 text-center text-text-muted">
          Gunakan kalkulator ini untuk membaca gambaran awal, lalu konfirmasi ke admin bila Anda membutuhkan angka
          terbaru.
        </p>

        <div className="mt-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-text-muted">Total Biaya Sekali Bayar</span>
              <span className="font-semibold text-text">{formatRupiah(totalSekaliBayar)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-muted">Total SPP ({sppBulan} bulan)</span>
              <span className="font-semibold text-text">{formatRupiah(totalBulanan)}</span>
            </div>
            <div className="my-4">
              <label htmlFor="sppRange" className="mb-2 block text-sm font-medium text-text-muted">
                Ubah hitungan bulan SPP:
              </label>
              <input
                id="sppRange"
                type="range"
                min="1"
                max="12"
                value={sppBulan}
                onChange={(e) => setSppBulan(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-primary/20"
              />
            </div>
          </div>

          <div className="mt-6 border-t border-border/70 pt-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-text">Estimasi total tahun pertama</span>
              <span
                className={`text-2xl font-semibold text-primary transition-opacity duration-300 ${
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
