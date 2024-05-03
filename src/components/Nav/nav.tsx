"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import customHook from "@/hooks";
import { NavAvatar } from "@/components/Nav/NavAvatar";

interface NavProps {
  children?: ReactNode;
}

const NavContainer: FC<NavProps> = ({ children }) => {
  const { isDesktop } = customHook.useWindowDimensions();
  const [showNav, toggleNav] = useState(true);

  return (
    <div className={"bg-navBg fixed w-screen"}>
      {!isDesktop && (
        <HamburgerMenuIcon
          height={30}
          width={30}
          className={"ml-auto my-3 mr-3 text-white cursor-pointer"}
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

const NavItem: FC<NavProps> = ({ children }) => {
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

const NavLogo = () => {
  return <div className={"text-white"}>Jira Clone</div>;
};

export const NavBar: FC<NavProps> = ({ children }) => {
  return (
    <NavContainer>
      <NavRenderer>
        <NavGroup>
          <NavLogo />
        </NavGroup>
        <NavGroup>
          <NavItem>Your Work</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>Filters</NavItem>
        </NavGroup>{" "}
        <NavGroup>
          <NavAvatar />
        </NavGroup>
      </NavRenderer>
    </NavContainer>
  );
};
