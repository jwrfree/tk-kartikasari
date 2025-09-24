
"use client";

import { useState, useMemo } from 'react';

interface Biaya {
  nama: string;
  jumlah: number;
  kategori: string;
}

interface BiayaCalculatorProps {
  biayaPokok: Biaya[];
}

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value);
};

export default function BiayaCalculator({ biayaPokok }: BiayaCalculatorProps) {
  const [bulan, setBulan] = useState(12);

  const { biayaSekaliBayar, biayaBulanan } = useMemo(() => {
    const sekaliBayar = biayaPokok.filter(b => b.kategori === 'sekali bayar');
    const bulanan = biayaPokok.find(b => b.kategori === 'bulanan');
    return { biayaSekaliBayar: sekaliBayar, biayaBulanan: bulanan };
  }, [biayaPokok]);

  const totalSekaliBayar = useMemo(() => {
      return biayaSekaliBayar.reduce((acc, item) => acc + item.jumlah, 0);
  }, [biayaSekaliBayar]);

  const totalBulanan = useMemo(() => {
      return (biayaBulanan?.jumlah || 0) * bulan;
  }, [biayaBulanan, bulan]);

  const totalEstimasi = totalSekaliBayar + totalBulanan;

  return (
    <div className="mt-6">
      {/* Slider */}
      <div>
        <label htmlFor="bulan-slider" className="block text-sm font-medium text-text">
          Durasi SPP Bulanan: <span className="font-bold text-primary">{bulan} bulan</span>
        </label>
        <input 
          id="bulan-slider"
          type="range"
          min="1"
          max="12"
          value={bulan}
          onChange={(e) => setBulan(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
        />
      </div>

      {/* Rincian Kalkulasi */}
      <div className="mt-6 space-y-3 rounded-lg bg-surfaceAlt p-4">
        <h4 className="font-semibold text-text">Rincian Estimasi:</h4>
        <div className="flow-root">
            <ul className="-my-2 divide-y divide-border/60">
                {biayaSekaliBayar.map(item => (
                    <li key={item.nama} className="flex items-center justify-between py-2">
                        <p className="text-sm text-text-muted">{item.nama}</p>
                        <p className="text-sm font-medium text-text-muted">{formatCurrency(item.jumlah)}</p>
                    </li>
                ))}
                <li className="flex items-center justify-between py-2">
                    <p className="text-sm text-text-muted">SPP ({bulan} bulan)</p>
                    <p className="text-sm font-medium text-text-muted">{formatCurrency(totalBulanan)}</p>
                </li>
            </ul>
        </div>
      </div>

      {/* Total Estimasi */}
      <div className="mt-4 flex items-center justify-between rounded-lg bg-primary/10 px-4 py-3">
        <span className="text-lg font-bold text-primary">Total Estimasi Biaya</span>
        <span className="text-xl font-extrabold text-primary">{formatCurrency(totalEstimasi)}</span>
      </div>
    </div>
  );
}
