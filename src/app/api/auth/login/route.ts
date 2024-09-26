import { connectDatabase } from "@/configs/connectDB";
import { HttpStatusCode } from "@/constants/httpStatusCode.enum";
import { login } from "@/lib/actions/auth.action";
import { loginSchema } from "@/validators/authValidator";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await loginSchema.validate(body);

    connectDatabase();

    const response = await login(body);

    return NextResponse.json(
      {
        message: "Đăng nhập thành công",
        success: true,
        data: response,
      },
      { status: HttpStatusCode.Ok }
    );
  } catch (exception: any) {
    return NextResponse.json(
      {
        message: exception.message,
        success: false,
        data: null,
      },
      { status: HttpStatusCode.InternalServerError }
    );
  }
}
