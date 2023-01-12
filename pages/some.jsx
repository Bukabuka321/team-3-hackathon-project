import Link from "next/link";

const signOutPage = () => {
  return (
    <div className="flex w-screen h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline">You are signed out!</h1>
      <Link href={"/"}>Go to main page</Link>
    </div>
  );
};

export default signOutPage;
