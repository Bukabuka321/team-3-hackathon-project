import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/login"}>Login</Link>
    </div>
  );
}
