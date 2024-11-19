import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Socials from "@/app/components/Social";
import ViewCanvas from "@/slices/Hero/ViewCanvas";

import Header from "./components/Header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luong Hoang",
  description: "Luong Hoang's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100">
      <body className={`${urbanist.className} antialiased`} id="root">
        <Header />
        {children}
        <Socials />
        <ViewCanvas />
      </body>
    </html>
  );
}
