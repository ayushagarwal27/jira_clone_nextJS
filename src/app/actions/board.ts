"use server";

import { prisma } from "@/lib/prisma";

export async function getAllBoards() {
  const boards = await prisma.board.findMany({
    select: { id: true, title: true },
  });
  return boards;
}
