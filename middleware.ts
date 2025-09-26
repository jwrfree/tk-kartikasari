
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('session')?.__secret_value || '';

  // If no session cookie, redirect to login
  if (!sessionCookie) {
    if (request.nextUrl.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }

  try {
    // Verify the session cookie. In case the cookie is invalid, it will throw an error.
    await adminAuth.verifySessionCookie(sessionCookie, true /** checkRevoked */);

    // If the user is logged in and tries to access the login page, redirect to admin
    if (request.nextUrl.pathname === '/login') {
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    return NextResponse.next();

  } catch (error) {
    // Session cookie is invalid. Redirect to login.
    if (request.nextUrl.pathname.startsWith('/admin')) {
      const response = NextResponse.redirect(new URL('/login', request.url));
      // Clear the invalid cookie
      response.cookies.delete('session');
      return response;
    }
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*', '/login'],
};
