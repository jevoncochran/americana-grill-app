import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

type Params = { params: { id: string } };

export async function GET(req: NextRequest, { params }: Params) {
  const { id } = params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "A server error has occurred" }),
      { status: 500 }
    );
  }
}
