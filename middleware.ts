import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the user is authenticated
  const isAuthenticated = request.cookies.has('auth_token')

  // Get the current path
  const path = request.nextUrl.pathname

  // List of public paths that don't require authentication
  const publicPaths = ['/login']

  // If the user is not authenticated and trying to access a protected route
  if (!isAuthenticated && !publicPaths.includes(path)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If the user is authenticated and trying to access login page
  if (isAuthenticated && publicPaths.includes(path)) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Handle the root path for authenticated users
  if (isAuthenticated && path === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 