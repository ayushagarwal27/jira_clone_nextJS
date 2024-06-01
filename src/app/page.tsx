"use client";

import React from "react";
import { useSession } from "next-auth/react";
import clx from "classnames";

export default function Home(): React.JSX.Element {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";
  return (
    <main
      className={clx(
        "pt-16 flex items-center justify-center flex-col h-[800px] dark:text-white text-black",
        { "ml-[250px]": isAuthenticated },
      )}
    >
      <h1 className={"text-3xl "}>{"Welcome to Jira Board 🎉"}</h1>
      <p className={"mt-4"}>
        {`Let's start by `}
        {isAuthenticated ? "clicking on board links" : "logging you in"}
      </p>
    </main>
  );
}
