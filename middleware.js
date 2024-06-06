// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Allow the requests to /login and /signin
    if (pathname === '/login' || pathname === '/signin') {
        return NextResponse.next();
    }

    // Redirect all other paths to /login
    return NextResponse.redirect(new URL('/login', request.url));
}

// Specify the paths where the middleware should run
export const config = {
    matcher: '/((?!login|signin).*)',
};
