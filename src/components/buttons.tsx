"use client";

import { signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

// ログインボタン
export const LoginButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => redirect("/auth/signin")}>
      Sign in
    </button>
  );
};

// ログアウトボタン
export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};
