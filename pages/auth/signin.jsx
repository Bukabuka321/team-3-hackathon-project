import { signIn, useSession } from "next-auth/react";
import redirect from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsGithub, BsTwitter, BsGoogle } from "react-icons/bs";

const providers = [
  { id: 1, name: "github", Icon: BsGithub },
  { id: 2, name: "google", Icon: BsGoogle },
  { id: 3, name: "twitter", Icon: BsTwitter },
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
    <div className="flex w-screen h-screen flex-col items-center justify-center">
      <div>
        <form
          className="flex flex-col mb-2 border-b-2 pb-3 items-center"
          onSubmit={handleSubmit}
        >
          <input
            className="border-solid border-2 mb-2"
            type="email"
            placeholder="Type email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="w-20 border-2 rounded-lg border-solid bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {providers.map(({ name, id, Icon }) => (
        <div key={id} className="flex-wrap">
          <button
            onClick={handleOAuthSignIn(name)}
            className="border-solid border-2 mb-2 w-60 flex flex-wrap justify-around items-center"
          >
            <Icon />
            <p>Sign in with {name}</p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Signin;
