// // middleware.js
// import { NextResponse } from 'next/server';
// import Cookies from 'cookies';

// export function middleware(request) {
//     const { pathname } = request.nextUrl;
//     const cookies = new Cookies(request);
//     const token = cookies.get('token');

//     // Allow the requests to /login, /signin, /api and static files in /public
//     if (pathname === '/login' || pathname === '/signin' || pathname.startsWith('/api') || pathname.startsWith('/_next/static/') || token) {
//         return NextResponse.next();
//     }

//     // Redirect all other paths to /login
//     return NextResponse.redirect(new URL('/login', request.url));
// }

// // Specify the paths where the middleware should run
// export const config = {
//     matcher: '/((?!login|signin|_next/static/|_next/image).*)',
// };
