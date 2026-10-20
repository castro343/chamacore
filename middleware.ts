import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
  const response = await updateSession(request);

  const { pathname } = request.nextUrl;
  const isProtectedRoute = pathname.startsWith('/dashboard') || pathname.startsWith('/groups') || pathname.startsWith('/settings');

  if (isProtectedRoute && !request.cookies.get('sb-access-token')) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: ['/dashboard/:path*', '/groups/:path*', '/settings/:path*']
};
