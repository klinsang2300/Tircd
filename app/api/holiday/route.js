import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET() {

  try {
    const users = await prisma.HOLIDAY_M.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { message: 'Failed to fetch users', error: error.message },
      { status: 500 }
    );
  }
}