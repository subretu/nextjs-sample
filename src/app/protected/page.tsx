import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/buttons";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }
  console.log("認証ずみ");
  return (
    <div>
      <h1>Protected Content</h1>
      <p>Welcome, {session.user?.name}!</p>
      <LogoutButton></LogoutButton>
    </div>
  );
}
