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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, desc, price, catSlug, options, img } = body;

    const newProduct = await prisma.product.create({
      data: { title, desc, price, catSlug, options, img },
    });

    return new NextResponse(JSON.stringify(newProduct), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "A server error has occurred" }),
      { status: 500 }
    );
  }
}
