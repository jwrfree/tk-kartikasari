import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    const forwardedProto = request.headers.get('x-forwarded-proto');
    const forwardedProtoValues = forwardedProto
      ?.split(',')
      .map((value) => value.trim().toLowerCase())
      .filter(Boolean);
    const forwardedHeader = request.headers.get('forwarded');
    const forwardedHeaderProtocols = forwardedHeader
      ?.split(',')
      .map((part) =>
        part
          .split(';')
          .map((section) => section.trim())
          .find((section) => section.startsWith('proto='))
          ?.split('=')[1]
          ?.toLowerCase(),
      )
      .filter((value): value is string => Boolean(value));
    const isForwardedHttps = Boolean(
      forwardedProtoValues?.includes('https') || forwardedHeaderProtocols?.includes('https'),
    );
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
