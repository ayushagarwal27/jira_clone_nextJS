"use client";
import React, { FC, ReactNode } from "react";
import { Drawer } from "@material-tailwind/react";
import { Component1Icon } from "@radix-ui/react-icons";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

interface SideNavMobileProps {
  children: ReactNode;
}

const SideNavMobile: FC<SideNavMobileProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const { isDesktop } = useWindowDimensions();

  if (isDesktop) return <></>;

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <>
      <Component1Icon
        height={30}
        width={30}
        className={"text-white absolute z-[2] left-3 top-3"}
        onClick={openDrawer}
      />

      <Drawer
        open={open}
        onClose={closeDrawer}
        className="sidebar-bg"
        placement={"bottom"}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {children}
      </Drawer>
    </>
  );
};

export { SideNavMobile };
