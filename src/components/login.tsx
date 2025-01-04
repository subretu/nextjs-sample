import React from "react";
import { useSession, signIn } from "next-auth/react";

export default function LoginForm() {
  //const { data: session, status } = useSession();

  return (
    <div>
      <p>あなたはログインしていません</p>
      <button onClick={() => signIn("google", {}, { prompt: "login" })}>
        Googleでログイン
      </button>
    </div>
  );
}
