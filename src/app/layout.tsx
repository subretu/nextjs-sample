import NextAuthProvider from "@/app/providers/NextAuth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>s<br />
            <a href="/protected">Protected Page</a>
          </nav>
        </header>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
