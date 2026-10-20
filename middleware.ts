import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export async function middleware(request: NextRequest) {
  const supabase = createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  const protectedPaths = ['/dashboard', '/groups', '/settings'];
  const path = request.nextUrl.pathname;
  const isProtected = protectedPaths.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));

  if (isProtected && !user) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/groups/:path*', '/settings/:path*']
};
