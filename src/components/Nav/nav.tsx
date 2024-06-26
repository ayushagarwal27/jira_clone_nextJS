"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import customHook from "@/hooks";
import { NavAvatar } from "@/components/Nav/NavAvatar";
import ThemeToggle from "@/components/Nav/ThemeToggle";
import { NavDataType } from "@/components/Nav/nav.type";
import { useSession } from "next-auth/react";
import { CreateButton } from "@/components/Nav/CreateButton";
import { useRouter } from "next/navigation";

interface NavProps {
  children?: ReactNode;
}

const NavContainer: FC<NavProps> = ({ children }) => {
  const { useWindowDimensions } = customHook;
  const { isDesktop } = useWindowDimensions();
  const [showNav, toggleNav] = useState(true);

  return (
    <div className={"bg-navBg fixed w-screen z-[1]"}>
      {!isDesktop && (
        <HamburgerMenuIcon
          height={30}
          width={30}
          className={"ml-auto my-3 mr-3 text-white cursor-pointer"}
          data-testId={"hamburger_icon"}
          onClick={() => toggleNav(!showNav)}
        />
      )}
      {showNav && children}
    </div>
  );
};

const NavRenderer: FC<NavProps> = ({ children }) => {
  return (
    <div
      className={
        "h-screen sm:h-[60px] flex flex-col items-center sm:flex-row sm:justify-between border-b border-base"
      }
    >
      {children}
    </div>
  );
};

const NavGroup: FC<NavProps> = ({ children }) => {
  return (
    <div
      className={"flex flex-col sm:flex-row sm:justify-between items-center"}
    >
      {children}
    </div>
  );
};

export const NavItem: FC<{
  children: ReactNode;
  authOnly?: boolean;
  isTest?: boolean;
}> = ({ children, authOnly = false, isTest }) => {
  const { status } = useSession();
  if (authOnly && status !== "authenticated") return <></>;
  return (
    <div
      className={
        "text-white background-nav sm:mr-3 p-2 border rounded font-semibold border-none"
      }
    >
      {children}
    </div>
  );
};

export const NavLogo: FC<NavProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div
      className={"text-white sm:ml-3 cursor-pointer"}
      onClick={() => router.push("/")}
    >
      {children}
    </div>
  );
};

export const NavBar: FC<{
  externalNavData?: NavDataType;
  children?: ReactNode;
}> = ({ children, externalNavData = null }) => {
  const [navbarData, setNavBarData] = useState<NavDataType>([]);
  useEffect(() => {
    async function fetchConfig() {
      const data = await fetch("/api/config");
      const { navData } = await data.json();
      setNavBarData(navData);
    }
    if (!externalNavData) {
      fetchConfig();
    } else {
      setNavBarData(externalNavData);
    }
  }, [externalNavData]);

  const navItemMap = {
    logo: NavLogo,
    item: NavItem,
    avatar: NavAvatar,
    themeToggle: ThemeToggle,
    create: CreateButton,
  };
  return (
    <NavContainer>
      <NavRenderer>
        {navbarData?.map((navGroup) => (
          <NavGroup key={navGroup.id}>
            {navGroup?.items?.map((navItem, index) => {
              const Item = navItemMap[navItem.type] || <></>;
              return (
                <Item
                  key={index}
                  authOnly={navItem.authOnly}
                  isTest={externalNavData !== null}
                >
                  {navItem.content ? navItem.content : ""}
                </Item>
              );
            })}
          </NavGroup>
        ))}
      </NavRenderer>
    </NavContainer>
  );
};
