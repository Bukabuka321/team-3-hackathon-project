import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useState } from "react";

const providers = [
  { id: 1, name: "github" },
  { id: 2, name: "google" },
  { id: 3, name: "twitter" },
];

const Signin = () => {
  const { data: session, status } = useSession();

  const { push } = useRouter();

  const [email, setEmail] = useState("");

  if (status === "loading") {
    return <p>Checking authotication...</p>;
  }
  if (session) {
    setTimeout(() => {
      push("/");
    }, 3000);
    return <p>You are alredy signed in! Redirecting </p>;
  }

  const handleOAuthSignIn = (provider) => () => {
    signIn(provider);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return false;
    }
    signIn({ email, redirect: false });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
      {providers.map(({ name, id }) => (
        <div key={id} className="flex-wrap">
          <button
            onClick={handleOAuthSignIn(name)}
            className="border-orange-600 border-solid border-2 mb-2"
          >
            <p>Sign in with {name}</p>
          </button>
        </div>
      ))}
    </>
  );
};

export default Signin;
