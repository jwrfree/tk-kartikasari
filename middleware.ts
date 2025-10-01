import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    const forwardedProto = request.headers.get('x-forwarded-proto');
    const normalizedForwardedProto = forwardedProto
      ?.split(',')[0]
      ?.trim()
      .toLowerCase();
    const isForwardedHttps = normalizedForwardedProto === 'https';
    const isRequestHttps = request.nextUrl.protocol === 'https:';

    if (!isForwardedHttps && !isRequestHttps) {
      const url = request.nextUrl.clone();
      url.protocol = 'https:';
      return NextResponse.redirect(url, 308);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/|.*\\.(?:js|css|png|jpg|jpeg|gif|ico|svg|webp|avif|map|txt|xml)).*)'],
};
