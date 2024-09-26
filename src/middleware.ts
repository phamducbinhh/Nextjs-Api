import { HttpStatusCode } from "@/constants/httpStatusCode.enum";
import { authMiddleware } from "@/middlewares/api/authMiddleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: '/api/user/:path*',
};

export function middleware(request: Request) {
  const authResult = authMiddleware(request);

  if (!authResult?.isValid) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      { status: HttpStatusCode.Unauthorized }
    );
  }
  return NextResponse.next();
}
