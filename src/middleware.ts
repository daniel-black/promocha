import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/promocodes', '/dashboard'] as const;

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const cookie = request.headers.get('cookie');
  const accessToken = cookie?.split('=')[1];
  const isProtectedRoute = protectedRoutes.some(p => path.startsWith(p)); 

  if (isProtectedRoute && accessToken === '') {
    // without the query param, the url doesn't change
    return NextResponse.redirect(new URL('/sign-up?redirected=true', request.url));
  };

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|favicon.ico).*)',
  ],
};