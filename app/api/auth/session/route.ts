
import { NextResponse } from 'next/server';
import { adminAuth, isFirebaseAdminConfigured } from '@/lib/firebase-admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  if (!isFirebaseAdminConfigured() || !adminAuth) {
    return NextResponse.json(
      { status: 'error', message: 'Otentikasi Firebase Admin tidak dikonfigurasi di backend.' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const idToken = body.idToken as string;

    if (!idToken) {
      return NextResponse.json(
        { status: 'error', message: 'Token ID Firebase tidak ditemukan.' },
        { status: 400 }
      );
    }

    const expiresInMs = 60 * 60 * 24 * 5 * 1000; // 5 hari
    const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn: expiresInMs });

    const cookieMaxAgeSeconds = Math.floor(expiresInMs / 1000);
    const cookieExpires = new Date(Date.now() + expiresInMs);

    const response = NextResponse.json({ status: 'success' });

    response.cookies.set('session', sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: cookieMaxAgeSeconds,
      expires: cookieExpires,
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Gagal membuat sesi:', error);
    return NextResponse.json(
      { status: 'error', message: 'Gagal mengautentikasi pengguna. Token tidak valid atau kedaluwarsa.' },
      { status: 401 }
    );
  }
}
