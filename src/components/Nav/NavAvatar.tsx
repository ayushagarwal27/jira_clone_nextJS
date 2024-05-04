"use client";

import React, { FC, useState } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { signIn, useSession, signOut } from "next-auth/react";

const NavAvatar: FC = () => {
  const { data: session, status } = useSession();
  const [showPopup, togglePopup] = useState(false);
  const isLoading = status === "loading";
  const isLoggedIn = status === "authenticated";
  return (
    <div className={"relative sm:mr-3"}>
      {isLoading && (
        <Avatar.Root className="inline-flex h-[40px] w-[40px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
          <Avatar.Fallback className="animate-pulse skeleton w-full h-full" />
        </Avatar.Root>
      )}

      {!isLoading && isLoggedIn && (
        <Avatar.Root className="inline-flex h-[40px] w-[40px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src={session?.user?.image || ""}
            alt="profile picture"
            onClick={() => togglePopup(!showPopup)}
          />
          <Avatar.Fallback className="animate-pulse skeleton w-full h-full" />
          <Avatar.Image />
        </Avatar.Root>
      )}

      {!isLoading && !isLoggedIn && (
        <button
          className={"text-inverse button-brand p-2 rounded-sm cursor-pointer"}
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
      {showPopup && (
        <button
          className={
            "absolute text-inverse button-brand right-2 p-2 rounded-sm top-full cursor-pointer"
          }
          onClick={() => signOut()}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export { NavAvatar };
