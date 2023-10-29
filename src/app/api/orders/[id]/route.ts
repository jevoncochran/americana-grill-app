import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

type Params = { params: { id: string } };

export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = params;
  const body = await req.json();

  try {
    await prisma.order.update({ where: { id }, data: { status: body } });
    return new NextResponse(
      JSON.stringify({ message: "Order has been updated" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "A server error has occurred" }),
      { status: 500 }
    );
  }
}
