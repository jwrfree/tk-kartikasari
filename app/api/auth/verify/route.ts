import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';

export async function GET(request: Request) {
  const sessionCookie = request.headers.get('cookie')?.split('=')[1] || '';

  if (!sessionCookie) {
    return NextResponse.json({ status: 'error', message: 'No session cookie found.' }, { status: 401 });
  }

  try {
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true);
    return NextResponse.json({ status: 'success', data: decodedClaims });
  } catch (error) {
    return NextResponse.json({ status: 'error', message: 'Invalid session cookie.' }, { status: 401 });
  }
}
