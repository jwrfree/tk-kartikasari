import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminAuth, isFirebaseAdminConfigured } from '@/lib/firebase-admin';
import { isLocalAuthConfigured } from '@/lib/local-auth';
import { verifyLocalSessionToken } from '@/lib/local-session';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;

  if (!sessionCookie) {
    return NextResponse.json({ status: 'error', message: 'Missing session cookie' }, { status: 401 });
  }

  try {
    if (isFirebaseAdminConfigured() && adminAuth) {
      await adminAuth.verifySessionCookie(sessionCookie, true /** checkRevoked */);
      return NextResponse.json({ status: 'success', type: 'firebase' });
    }

    if (!isLocalAuthConfigured()) {
      return NextResponse.json(
        { status: 'error', message: 'Authentication is not configured.' },
        { status: 500 }
      );
    }

    const payload = verifyLocalSessionToken(sessionCookie);

    if (!payload) {
      return NextResponse.json({ status: 'error', message: 'Invalid session' }, { status: 401 });
    }

    return NextResponse.json({ status: 'success', type: 'local' });
  } catch (error) {
    console.error('Session verification error:', error);
    return NextResponse.json({ status: 'error', message: 'Invalid session' }, { status: 401 });
  }
}
