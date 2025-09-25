
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Di dunia nyata, di sinilah Anda akan menyimpan data ke database,
    // mengirim email notifikasi, atau mengintegrasikan dengan sistem lain.
    console.log('New PPDB Submission:', formData);

    // Anda juga bisa menambahkan validasi data di sini menggunakan Zod atau library lainnya

    return NextResponse.json({ message: 'Pendaftaran berhasil diterima!', data: formData }, { status: 200 });
  } catch (error) {
    console.error('PPDB API Error:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan saat memproses pendaftaran.' }, { status: 500 });
  }
}
