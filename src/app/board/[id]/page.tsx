import { FC } from "react";
import { fetchBoard } from "@/app/actions/board";
import { Board } from "@/components/Board";

interface BoardPageProps {
  params: { id: string };
}

const BoardPage: FC<BoardPageProps> = async ({ params: { id: boardId } }) => {
  const {
    data: { boardTickets, boardColumns },
  } = await fetchBoard(boardId);
  return (
    <div className={"pt-16 px-0 sm:px-3 sm:ml-[250px]"}>
      <Board boardColumns={boardColumns} boardTickets={boardTickets} />
    </div>
  );
};

export default BoardPage;
