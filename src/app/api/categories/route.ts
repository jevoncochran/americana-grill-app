import { NextResponse } from "next/server";

export async function GET() {
  //   try {

  //   } catch (error) {
  //     return new Response(JSON.stringify(error), { status: 500 });
  //   }
  return new NextResponse("Hello", { status: 200 });
}
