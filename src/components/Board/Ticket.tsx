"use client";
import React, { FC } from "react";
import { Draggable } from "@hello-pangea/dnd";

interface TicketProps {
  title: string;
  index: number;
  assignee: string;
  storyPoints: number | null;
  ticketId: string;
}

const Ticket: FC<TicketProps> = ({
  ticketId,
  index,
  title,
  assignee,
  storyPoints,
}) => {
  return (
    <Draggable draggableId={ticketId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className="m-1 h-[200px] background-card p-3 rounded cursor-pointer relative"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>{title}</div>
          {assignee && (
            <div className="absolute top-2 right-2 rounded-full background-avatar text-white h-10 w-10 text-sm flex items-center justify-center font-semibold">
              {assignee[0]}
            </div>
          )}
          {storyPoints && (
            <div className="absolute bottom-2 left-2 rounded-full background-box text-white h-7 w-7 text-sm flex items-center justify-center">
              {storyPoints}
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

export { Ticket };
