import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session } = useSession();

  const { push, asPath } = useRouter();

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/some" });
    push(data.url);
  };

  const handleSignIn = () => push(`/auth/signin?callbackUrl=${asPath}`);
  return (
    <>
      <main>
        {session ? (
          <div className="flex flex-col ">
            <p className="text-green-400 underline w-40">
              Sign in as {session.user.name} {session.user.email}
            </p>
            <button className="w-40" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        ) : (
          <div className="w-screen h-screen">
            <p className={"text-green-400 underline"}>Not sign in</p>
            <button onClick={handleSignIn}>Sign in now!</button>
          </div>
        )}
      </main>
    </>
  );
}
