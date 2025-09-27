
import { NextResponse } from 'next/server';
import { adminAuth, isFirebaseAdminConfigured } from '@/lib/firebase-admin';
import {
  isLocalAuthConfigured,
  verifyLocalAdminCredentials,
} from '@/lib/local-auth';
import { createLocalSessionToken } from '@/lib/local-session';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const rawBody = await request.json().catch(() => null);
    const body =
      rawBody && typeof rawBody === 'object'
        ? (rawBody as Record<string, unknown>)
        : null;

    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const password = typeof body?.password === 'string' ? body.password : '';

    // Set session expiration to 5 days.
    const expiresInMs = 60 * 60 * 24 * 5 * 1000;
    const cookieMaxAgeSeconds = Math.floor(expiresInMs / 1000);
    const cookieExpires = new Date(Date.now() + expiresInMs);

    if (isFirebaseAdminConfigured() && adminAuth) {
      const idToken = typeof body?.idToken === 'string' ? body.idToken : '';

      if (!idToken) {
        return NextResponse.json(
          { status: 'error', message: 'Missing Firebase ID token.' },
          { status: 400 }
        );
      }

      // Create the session cookie. This will also verify the ID token.
      const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn: expiresInMs });

      const response = NextResponse.json({ status: 'success', type: 'firebase' });
      response.cookies.set('session', sessionCookie, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: cookieMaxAgeSeconds,
        expires: cookieExpires,
      });

      return response;
    }

    if (!isLocalAuthConfigured()) {
      return NextResponse.json(
        { status: 'error', message: 'Local authentication is not configured.' },
        { status: 500 }
      );
    }

    if (!email || !password) {
      return NextResponse.json(
        { status: 'error', message: 'Email dan password wajib diisi.' },
        { status: 400 }
      );
    }

    if (!verifyLocalAdminCredentials(email, password)) {
      return NextResponse.json(
        { status: 'error', message: 'Email atau password salah.' },
        { status: 401 }
      );
    }

    const sessionToken = createLocalSessionToken({
      email,
      role: 'admin',
      exp: Date.now() + expiresInMs,
    });

    const response = NextResponse.json({ status: 'success', type: 'local' });
    response.cookies.set('session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: cookieMaxAgeSeconds,
      expires: cookieExpires,
    });

    return response;

  } catch (error) {
    console.error('Session login error:', error);
    return NextResponse.json({ status: 'error', message: 'Failed to create session' }, { status: 401 });
  }
}
