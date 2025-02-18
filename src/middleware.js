// src/middleware.js
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((auth, req) => {
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const { userId } = auth;
    if (!userId) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
  return NextResponse.next();
});

export const config = {
  matcher: ['/admin/:path*']
};