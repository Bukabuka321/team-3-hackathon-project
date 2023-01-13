import { getSession, useSession } from "next-auth/react";

const Protected = () => {
  const { data: session, status } = useSession();

  if (session === "unautheticated")
    return (
      <div>
        <h1>Protected!</h1>
      </div>
    );
  return { session };
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
