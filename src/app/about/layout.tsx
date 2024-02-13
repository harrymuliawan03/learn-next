"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AboutLayout({
  children,
  price,
}: {
  children: React.ReactNode;
  price: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      push("/home");
    }
  }, [status]);
  if (status != "loading" && status != "unauthenticated") {
    return (
      <>
        <nav className="fixed left-0 top-20 z-10 h-screen w-60">
          <ul>
            <Link href={"/home"}>
              <li>Home</li>
            </Link>
            <li>About</li>
            <li>Profile</li>
            <li>Login</li>
            <li>Chart</li>
          </ul>
        </nav>
        <div>{price}</div>
        <div>{children}</div>
      </>
    );
  }
  return null;
}
