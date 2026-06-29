import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DRIVEY_HOSTS = new Set([
  "drivey.cubeon-solutions.de",
  "drivey.localhost:3000",
]);

export function proxy(request: NextRequest) {
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";

  if (!DRIVEY_HOSTS.has(host.toLowerCase())) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();

  if (url.pathname === "/" || url.pathname === "/drivey" || url.pathname === "/en") {
    url.pathname = "/drivey";
    return NextResponse.rewrite(url);
  }

  if (url.pathname === "/de" || url.pathname === "/drivey/de") {
    url.pathname = "/drivey/de";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|icon.png|robots.txt|sitemap.xml).*)",
  ],
};
