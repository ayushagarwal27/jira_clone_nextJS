"use client";
import { FC } from "react";
import { usePathname, useRouter } from "next/navigation";
import cx from "classnames";

interface SideNavItemProps {
  id: string;
  title: string;
}

const SideNavItem: FC<SideNavItemProps> = ({ id, title }) => {
  const path = usePathname();
  const boardId = path.split("/")[2];
  const router = useRouter();

  return (
    <div
      className={cx(
        "p-4 hover:bg-blue-300 hover:dark:bg-blue-800 cursor-pointer font-semibold text-sm",
        { "bg-blue-800": boardId === id },
      )}
      onClick={() => {
        router.push(`/board/${id}`);
      }}
    >
      {title}
    </div>
  );
};

export { SideNavItem };
