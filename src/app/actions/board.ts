"use server";

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function getAllBoards() {
  const boards = await prisma.board.findMany({
    select: { id: true, title: true },
  });
  return boards;
}

export async function fetchBoard(boardId: string, skip = 0, take = 10) {
  if (!boardId) {
    throw Error("Fields are missing");
  }
  const board = prisma.board.findUniqueOrThrow({
    where: { id: boardId },
  });

  const boardColumns = prisma.boardColumn.findMany({
    where: { boardId },
  });

  const boardTickets = prisma.boardTicket.findMany({
    where: { boardId },
    skip: skip,
    take: take,
  });

  const data = await Promise.all([board, boardColumns, boardTickets]);

  return {
    data: { board: data[0], boardColumns: data[1], boardTickets: data[2] },
  };
}
