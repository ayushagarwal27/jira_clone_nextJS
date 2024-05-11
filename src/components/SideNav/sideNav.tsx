import { getAllBoards } from "@/app/actions/board";

export const SideNav = async () => {
  const boardsData = await getAllBoards();
  return (
    <div className={"fixed w-full sm:w-[250px] bg-amber-200"}>
      {boardsData.map((board) => (
        <p>{board.title}</p>
      ))}
    </div>
  );
};
