
import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';

export async function POST(request: Request) {
  try {
    const { idToken } = await request.json();

    // Set session expiration to 5 days.
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    
    // Create the session cookie. This will also verify the ID token.
    const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });

    // Set cookie policy for session cookie.
    const options = { 
      name: 'session', 
      value: sessionCookie, 
      maxAge: expiresIn, 
      httpOnly: true, 
      secure: true 
    };

    // Add the cookie to the response
    const response = NextResponse.json({ status: 'success' });
    response.cookies.set(options.name, options.value, options);

    return response;

  } catch (error) {
    console.error('Session login error:', error);
    return NextResponse.json({ status: 'error', message: 'Failed to create session' }, { status: 401 });
  }
}
