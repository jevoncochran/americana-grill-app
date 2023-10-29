import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    intentId: string;
  };
};

export async function PUT(req: NextRequest, { params }: Params) {
  const { intentId } = params;

  try {
    await prisma.order.update({
      where: { intent_id: intentId },
      data: { status: "Being prepared!" },
    });

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
