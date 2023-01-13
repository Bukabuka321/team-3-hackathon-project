import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
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
          <div className="flex w-screen h-screen flex-col items-center justify-center">
            <p className="w-4/12 text-center">
              Signed in as {session.user.name} {session.user.email}
            </p>
            <button
              className="w-20 border-2 rounded-lg border-solid bg-blue-600"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="flex w-screen h-screen flex-col items-center justify-center">
            <p className="w-4/12 text-center">Not sign in</p>
            <button
              className="w-36 border-2 rounded-lg border-solid bg-blue-600"
              onClick={handleSignIn}
            >
              Sign in now!
            </button>
          </div>
        )}
      </main>
    </>
  );
}
