import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const protectedPaths = ['/dashboard', '/groups', '/settings'];
  const isProtected = protectedPaths.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  const sessionCookie = request.cookies.get('chamacore-session');

  if (isProtected && !sessionCookie) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/groups/:path*', '/settings/:path*']
};
