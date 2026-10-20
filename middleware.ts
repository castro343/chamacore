import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from './middleware';

export async function middleware(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: ['/dashboard/:path*', '/settings/:path*']
};
