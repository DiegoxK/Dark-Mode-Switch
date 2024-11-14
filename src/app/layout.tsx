import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Framer testing",
  description: "uwu",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col justify-center">
        <TRPCReactProvider>
          <nav className="flex gap-2 p-4">
            <Link href="/">Animations</Link>
            <Link href="/variants">Variants</Link>
            <Link href="/scroll">Scroll</Link>
            <Link href="/keyframes">Keyframes</Link>
            <Link href="/morphing">Morphing</Link>
            <Link href="/switch">Switch</Link>
          </nav>
          <main className="flex grow flex-col items-center justify-center">
            {children}
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
