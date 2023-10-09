import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const ticket = request.cookies.get('ticket');

  if (!ticket) return NextResponse.redirect(new URL('/', request.url));
};

export const config = {
  matcher: '/get/:path*',
};
