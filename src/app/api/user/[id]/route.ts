/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectDatabase } from "@/configs/connectDB";
import { HttpStatusCode } from "@/constants/httpStatusCode.enum";
import {
  deleteUserList,
  getUserById,
  updateUserService,
} from "@/lib/actions/user.action";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    connectDatabase();

    const response = await getUserById(params.id);

    return NextResponse.json(
      {
        message: "Get details user success",
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
export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    connectDatabase();

    await deleteUserList(params.id);

    return NextResponse.json(
      {
        message: "Delete user success",
        success: true,
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

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const body = await request.json();

    connectDatabase();

    await updateUserService(body, params.id);

    return NextResponse.json(
      {
        message: "Update news user success",
        success: true,
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
