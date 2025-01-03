import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sample Taro",
      credentials: {
        id: {
          label: "Id",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const matched =
          credentials?.id === "id" && credentials?.password === "password";
        if (matched) {
          return {
            id: "29472084752894723890248902",
          };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
