import { NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getAuthSession } from "../auth/[...nextauth]/options";

// FETCH ALL ORDERS
export async function GET() {
  const session = await getAuthSession();

  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }

      const orders = prisma.order.findMany({
        where: { userEmail: session.user.email! },
      });
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (error) {
      console.log(error);
      return new NextResponse(
        JSON.stringify({ message: "A server error has occurred" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }
}
