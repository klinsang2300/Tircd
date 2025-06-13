
import { NextResponse } from 'next/server';

import { getSession, SESSION_COOKIE_NAME } from './lib/auth';


const protectedRoutes = ['/time'];

const publicRoutesIfLoggedIn = ['/login', '/register'];

export async function middleware(request) {
  const session = await getSession();
  const currentPath = request.nextUrl.pathname;


  if (protectedRoutes.some(route => currentPath.startsWith(route))) {
    if (!session) {
      const redirectUrl = new URL('/login', request.url);
      redirectUrl.searchParams.set('redirect', currentPath);
      return NextResponse.redirect(redirectUrl);
    }
  }


  if (publicRoutesIfLoggedIn.includes(currentPath)) {
    if (session) {
      return NextResponse.redirect(new URL('/time', request.url));
    }
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/time/:path*', '/login', '/register'],
};