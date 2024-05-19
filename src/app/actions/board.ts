"use server";

import { prisma } from "@/lib/prisma";
import { BoardTicket } from "@prisma/client";

export async function getAllBoards() {
  return await prisma.board.findMany({
    select: { id: true, title: true },
  });
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
    include: { assignedUser: true },
    skip: skip,
    take: take,
  });

  const data = await Promise.all([board, boardColumns, boardTickets]);

  return {
    data: { board: data[0], boardColumns: data[1], boardTickets: data[2] },
  };
}

export const updateTicketAtBackend = async (ticketsToUpdate: BoardTicket[]) => {
  const transactions = ticketsToUpdate.map((ticket) => {
    return prisma.boardTicket.update({
      where: { id: ticket.id },
      data: { boardColumnId: ticket.boardColumnId, position: ticket.position },
    });
  });
  const updatedTickets = await prisma.$transaction(transactions);
};
