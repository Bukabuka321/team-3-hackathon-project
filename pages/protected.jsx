import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Protected = () => {
  const { push } = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      push("/auth/signin");
    },
  });

  if (status === "loading") {
    return <h1>Loading....</h1>;
  }

  if (session === null || session === undefined) {
    return (
      <div>
        <h1>Protected!</h1>
        <h2>
          Please
          <button className="w-24 border-2 rounded-lg border-solid bg-blue-600 text-center">
            <Link href={"/login"}>log in</Link>
          </button>
        </h2>
      </div>
    );
  }
  return <>all good</>;
};
export const getSereverSideProps = async (ctx) => {
  const session = await getSession(ctx);

  return {
    props: {
      session,
    },
  };
};

export default Protected;
