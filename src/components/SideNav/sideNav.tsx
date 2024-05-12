import { getAllBoards } from "@/app/actions/board";
import { SideNavItem } from "@/components/SideNav/sideNavItem";
import { SideNavSeparator } from "@/components/SideNav/sideNavSeparator";
import { auth } from "@/lib/auth";

export const SideNav = async () => {
  const session = await auth();

  if (!session) {
    return <></>;
  }

  const boardsData = await getAllBoards();
  return (
    <div
      className={
        "fixed w-full sm:w-[250px]  sidebar-bg h-[calc(100vh-60px)] mt-[60px]"
      }
    >
      {boardsData.map(({ id, title }) => (
        <>
          <SideNavItem id={id} title={title} key={id} />
          <SideNavSeparator />
        </>
      ))}
    </div>
  );
};
