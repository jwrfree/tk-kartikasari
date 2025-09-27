import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminAuth } from '@/lib/firebase-admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  if (!adminAuth) {
    return NextResponse.json({ status: 'error', message: 'Firebase admin is not configured.' }, { status: 500 });
  }

  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;

  if (!sessionCookie) {
    return NextResponse.json({ status: 'error', message: 'Missing session cookie' }, { status: 401 });
  }

  try {
    await adminAuth.verifySessionCookie(sessionCookie, true /** checkRevoked */);
    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Session verification error:', error);
    return NextResponse.json({ status: 'error', message: 'Invalid session' }, { status: 401 });
  }
}
