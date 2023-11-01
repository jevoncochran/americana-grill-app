import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getAuthSession } from "../auth/[...nextauth]/options";
import { getToken } from "next-auth/jwt";

// FETCH ALL ORDERS
export async function GET() {
  const session = await getAuthSession();

  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }

      const orders = await prisma.order.findMany({
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

// CREATE ORDER
export async function POST(req: NextRequest) {
  const session = await getAuthSession();
  console.log("session: ", session);
  const token = await getToken({ req });
  console.log("token: ", token);

  if (token) {
    try {
      const body = await req.json();

      const order = await prisma.order.create({ data: body });
      return new NextResponse(JSON.stringify(order), { status: 201 });
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
