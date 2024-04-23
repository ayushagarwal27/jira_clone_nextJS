import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { schema } from "@/schema/moveTicket";

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { position, boardId, boardColumnId, ticketId } = body;

  const response = schema.safeParse(body);

  if (!response.success) {
    return NextResponse.json(
      { error: { message: "Fields are missing or passed incorrect" } },
      { status: 400 },
    );
  }

  const ticketData = await prisma.boardTicket.update({
    where: { id: ticketId },
    data: { boardId, position, boardColumnId },
  });
  try {
    return NextResponse.json(
      {
        data: { ticketData },
      },
      { status: 200 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: { message: "something went wrong" } },
      { status: 500 },
    );
  }
}
