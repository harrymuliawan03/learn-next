"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  return status === "loading" ? (
    <h1>Loading ...</h1>
  ) : (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
      <button
        onClick={() => {
          if (session?.user) {
            signOut();
          } else {
            signIn();
          }
        }}
      >
        {session?.user ? "Logout" : "Login"}
      </button>
    </main>
  );
}
