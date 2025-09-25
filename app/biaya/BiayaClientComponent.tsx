
'use client'

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatRupiah } from '@/utils/currency';
import { InfoCircle } from 'react-bootstrap-icons';

// Definisikan tipe untuk properti komponen
interface BiayaPokok {
  nama: string;
  jumlah: number;
  deskripsi: string;
  kategori: string;
}

interface BiayaClientComponentProps {
  biayaPokok: BiayaPokok[];
}

export default function BiayaClientComponent({ biayaPokok }: BiayaClientComponentProps) {
  const [sppBulan, setSppBulan] = useState(12);

  const biayaSekaliBayar = useMemo(() => 
    biayaPokok.filter(b => b.kategori === 'sekali bayar'), 
    [biayaPokok]
  );

  const biayaBulanan = useMemo(() => 
    biayaPokok.find(b => b.kategori === 'bulanan'), 
    [biayaPokok]
  );

  const totalSekaliBayar = useMemo(() => 
    biayaSekaliBayar.reduce((acc, item) => acc + item.jumlah, 0), 
    [biayaSekaliBayar]
  );

  const totalBulanan = useMemo(() => 
    biayaBulanan ? biayaBulanan.jumlah * sppBulan : 0, 
    [biayaBulanan, sppBulan]
  );

  const totalEstimasi = totalSekaliBayar + totalBulanan;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      {/* Kolom Rincian Biaya */}
      <div>
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-text">Rincian Biaya Pokok</h3>
          <p className="text-lg text-text-muted mt-2">Biaya esensial untuk memulai pendidikan di TK Kartikasari.</p>
        </div>
        <div className="space-y-4">
          {biayaPokok.map((item) => (
            <div key={item.nama} className="rounded-xl border border-border bg-surface p-5 shadow-sm">
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-semibold text-text">{item.nama}</h4>
                <span className="text-lg font-bold text-primary whitespace-nowrap ml-4">{formatRupiah(item.jumlah)}</span>
              </div>
              <p className="mt-2 text-sm text-text-muted">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Kolom Kalkulator Estimasi */}
      <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 sticky top-24">
        <h3 className="text-2xl font-bold text-text text-center">Simulasi Biaya 1 Tahun Pertama</h3>
        <p className="text-text-muted text-center mt-2">Perkirakan total investasi pendidikan anak Anda.</p>

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
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={totalEstimasi}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl font-bold text-primary"
                  >
                    {formatRupiah(totalEstimasi)}
                  </motion.span>
                </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
