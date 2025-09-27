
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('session')?.value || '';

  // If no session cookie, redirect to login
  if (!sessionCookie) {
    if (request.nextUrl.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }

  try {
    const verifyUrl = new URL('/api/auth/verify', request.url);
    const verifyResponse = await fetch(verifyUrl, {
      method: 'GET',
      headers: {
        cookie: request.headers.get('cookie') ?? '',
      },
      cache: 'no-store',
    });

    if (!verifyResponse.ok) {
      throw new Error('Session verification failed');
    }

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
