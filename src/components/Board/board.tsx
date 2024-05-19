"use client";

import React, { FC, useState } from "react";
import { BoardColumn, BoardTicket } from "@prisma/client";
import { Ticket } from "@/components/Board/Ticket";
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from "@hello-pangea/dnd";
import cx from "classnames";
import { updateTicketAtBackend } from "@/app/actions/board";
import { log } from "node:util";

interface BoardTicketWithUser extends BoardTicket {
  assignedUser: { name: string };
}

interface BoardProps {
  boardColumns: BoardColumn[];
  boardTickets: BoardTicketWithUser[];
}

const Board: FC<BoardProps> = ({ boardTickets, boardColumns }) => {
  const [tickets, setTickets] = useState(boardTickets);

  const getTicketForColumn = (columnId: string) => {
    return tickets
      .filter((ticket) => ticket.boardColumnId === columnId)
      .sort((a, b) => a.position - b.position);
  };

  const handleDragEnd: OnDragEndResponder = (result) => {
    const currentTickets = [...tickets];
    const updatedTickets = currentTickets.map((ticket: BoardTicketWithUser) => {
      if (ticket.id === result.draggableId) {
        return {
          ...ticket,
          boardColumnId: result.destination?.droppableId,
          position: result.destination?.index,
        };
      } else if (
        ticket.boardColumnId === result.destination?.droppableId &&
        ticket.position >= result.destination?.index
      ) {
        return {
          ...ticket,
          position: ticket.position + 1,
        };
      } else if (
        ticket.boardColumnId === result.source.droppableId &&
        ticket.position > result.source.index
      ) {
        return {
          ...ticket,
          position: ticket.position - 1,
        };
      }
      return ticket;
    });

    // @ts-ignore
    setTickets(updatedTickets);
    updateTicketAtBackend(updatedTickets);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={"flex flex-col sm:flex-row gap-3"}>
        {boardColumns.map((col) => (
          <Droppable key={col.id} droppableId={col.id}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                className={cx("background-neutral-static grow basis-full p-2", {
                  ["background-board-drop"]: snapshot.isDraggingOver,
                })}
                {...provided.droppableProps}
              >
                <div className="text-subtlest font-semibold text-sm mb-5">
                  {col.label}
                </div>
                <div>
                  {getTicketForColumn(col.id).map((ticket, index) => (
                    <Ticket
                      key={ticket.id}
                      index={index}
                      ticketId={ticket.id}
                      title={ticket.title}
                      assignee={ticket.assignedUser.name}
                      storyPoints={ticket.storyPoints}
                    />
                  ))}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export { Board };
