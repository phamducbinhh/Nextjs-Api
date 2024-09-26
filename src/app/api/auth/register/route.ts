import { connectDatabase } from "@/configs/connectDB";
import { HttpStatusCode } from "@/constants/httpStatusCode.enum";
import { register } from "@/lib/actions/auth.action";
import { registerSchema } from "@/validators/authValidator";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await registerSchema.validate(body);

    connectDatabase();

    const response = await register(body);

    return NextResponse.json(
      {
        message: "Đăng ký tài khoản thành công",
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
