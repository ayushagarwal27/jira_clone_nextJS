import { FC } from "react";
import { fetchBoard } from "@/app/actions/board";

interface BoardPageProps {
  params: { id: string };
}

const BoardPage: FC<BoardPageProps> = async ({ params: { id: boardId } }) => {
  const { data } = await fetchBoard(boardId);
  return <div className={"pt-16 sm:ml-[250px]"}>{boardId}</div>;
};

export default BoardPage;
