import React, { FC } from "react";
import { BoardColumn, BoardTicket } from "@prisma/client";
import { Ticket } from "@/components/Board/Ticket";

interface BoardTicketWithUser extends BoardTicket {
  assignedUser: { name: string };
}

interface BoardProps {
  boardColumns: BoardColumn[];
  boardTickets: BoardTicketWithUser[];
}

const Board: FC<BoardProps> = ({ boardTickets, boardColumns }) => {
  const getTicketForColumn = (columnId: string) => {
    return boardTickets.filter((ticket) => ticket.boardColumnId === columnId);
  };
  return (
    <div className={"flex flex-col sm:flex-row gap-3"}>
      {boardColumns.map((col) => (
        <div
          key={col.id}
          className={"background-neutral-static grow basis-full p-2"}
        >
          <div className="text-subtlest font-semibold text-sm mb-5">
            {col.label}
          </div>
          <div>
            {getTicketForColumn(col.id).map((ticket) => (
              <Ticket
                key={ticket.id}
                title={ticket.title}
                assignee={ticket.assignedUser.name}
                storyPoints={ticket.storyPoints}
              />
            ))}
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export { Board };
