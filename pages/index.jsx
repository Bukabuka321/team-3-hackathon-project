import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <Link href={"/login"}>
        {session ? (
          <p className="w-20 border-2 rounded-lg border-solid bg-blue-600 text-center">
            Sign out
          </p>
        ) : (
          <p className="w-20 border-2 rounded-lg border-solid bg-blue-600 text-center">
            Sign in
          </p>
        )}
      </Link>
      <Link href={"/protected"}>test protected page</Link>
    </div>
  );
}
