/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectDatabase } from "@/configs/connectDB";
import { HttpStatusCode } from "@/constants/httpStatusCode.enum";
import { getUserList } from "@/lib/actions/user.action";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    connectDatabase();

    const response = await getUserList();

    return NextResponse.json(
      {
        message: "Get list user success",
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
