"use client";

import React, { FC } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { signIn, useSession } from "next-auth/react";

const NavAvatar: FC = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const isLoggedIn = status === "authenticated";
  console.log(session?.user?.image);
  return (
    <div>
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
          />
          <Avatar.Fallback className="animate-pulse skeleton w-full h-full" />
          <Avatar.Image />
        </Avatar.Root>
      )}

      {!isLoading && !isLoggedIn && (
        <button className={"text-white m-auto"} onClick={() => signIn()}>
          SignIn
        </button>
      )}
    </div>
  );
};

export { NavAvatar };
