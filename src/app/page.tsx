"use client";

import React from "react";

import { Button } from "@/components/Button";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Home(): React.JSX.Element {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return <p>Signed in as {session?.user?.email}</p>;
  }

  return (
    <main>
      <div className={"inline-block bg-black text-inverse p-3 m-5 rounded-xl"}>
        <Button onClick={signIn}>SignIn</Button>
      </div>
    </main>
  );
}
