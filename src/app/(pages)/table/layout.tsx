import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Table",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-4 pt-8`}
      >
        {children}
      </div>
  );
}
