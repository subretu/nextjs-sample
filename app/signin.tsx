"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}

export const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const callbackUrl = searchParams.get("callbackUrl") || "/";

    try {
      const response = await signIn("credentials", {
        redirect: false,
        id,
        password,
        callbackUrl,
      });
      if (response?.error) {
        console.log(response.error);
      } else {
        router.push(callbackUrl);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="id">ID</label>
          <input
            required
            type="text"
            id="id"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            required
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};
