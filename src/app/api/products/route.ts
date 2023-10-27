import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";

// FETCH ALL PRODUCTS
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(category ? { catSlug: category } : { isFeatured: true }),
      },
    });

    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "A server error has occurred" }),
      { status: 500 }
    );
  }
}
