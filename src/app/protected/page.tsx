"use client";

import { useSession, signOut } from "next-auth/react";

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  console.log(status);
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {session.user?.name}!</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
