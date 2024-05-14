import { getAllBoards } from "@/app/actions/board";
import { SideNavItem } from "@/components/SideNav/sideNavItem";
import { SideNavSeparator } from "@/components/SideNav/sideNavSeparator";
import { auth } from "@/lib/auth";
import cx from "classnames";
import { FC } from "react";

interface SideNavProps {
  isMobileView: boolean;
}

export const SideNav: FC<SideNavProps> = async ({ isMobileView }) => {
  const session = await auth();

  if (!session) {
    return <></>;
  }

  const boardsData = await getAllBoards();
  return (
    <div
      className={cx("w-full sm:w-[250px] sidebar-bg", {
        ["hidden sm:block fixed h-[calc(100vh-60px)] mt-[60px]"]: !isMobileView,
      })}
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
