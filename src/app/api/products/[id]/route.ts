import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "../../auth/[...nextauth]/options";

type Params = { params: { id: string } };

// FETCH PRODUCT BY ID
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

// DELETE PRODUCT BY ID
export async function DELETE(req: NextRequest, { params }: Params) {
  const { id } = params;
  const session = await getAuthSession();

  try {
    if (session?.user.isAdmin) {
      await prisma.product.delete({ where: { id } });
      return new NextResponse(
        JSON.stringify({ message: "Product successfully deleted" }),
        {
          status: 200,
        }
      );
    } else {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
        status: 403,
      });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "A server error has occurred" }),
      { status: 500 }
    );
  }
}
