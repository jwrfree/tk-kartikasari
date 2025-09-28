import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    const proto = request.headers.get('x-forwarded-proto');

    if (proto === 'http') {
      const url = request.nextUrl.clone();
      url.protocol = 'https';
      return NextResponse.redirect(url, 308);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/|.*\\.(?:js|css|png|jpg|jpeg|gif|ico|svg|webp|avif|map|txt|xml)).*)'],
};
