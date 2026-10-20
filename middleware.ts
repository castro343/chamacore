import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const protectedPaths = ['/dashboard', '/groups', '/settings'];
  const isProtected = protectedPaths.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  const hasSupabaseSession = Boolean(request.cookies.get('sb-access-token'));
  const hasLocalSession = Boolean(request.cookies.get('chamacore-session'));

  if (isProtected && !hasSupabaseSession && !hasLocalSession) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/groups/:path*', '/settings/:path*']
};
