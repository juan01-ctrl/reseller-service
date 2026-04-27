import { NextResponse, type NextRequest } from "next/server"
import { SESSION_COOKIE_NAME } from "@/lib/auth/constants"

function hasSessionCookie(request: NextRequest) {
  return Boolean(request.cookies.get(SESSION_COOKIE_NAME)?.value)
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const sessionExists = hasSessionCookie(request)

  if (pathname.startsWith("/api/meta") && pathname !== "/api/meta/oauth/callback" && !sessionExists) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (pathname.startsWith("/dashboard") && !sessionExists) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("next", pathname)
    return NextResponse.redirect(loginUrl)
  }

  if (pathname === "/login" && sessionExists) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/api/meta/:path*"],
}
