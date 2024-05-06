import { NextRequest, NextResponse } from "next/server";
import { get } from "@vercel/edge-config";

export async function GET(request: NextRequest) {
  try {
    const navData = await get("navData");

    return NextResponse.json({ navData });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: { message: "something went wrong" } },
      { status: 500 },
    );
  }
}
