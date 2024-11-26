import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Socials from "@/app/components/Social";
import ViewCanvas from "@/slices/Hero/ViewCanvas";
import { createClient } from "@/prismicio";

const urbanist = Urbanist({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    icons: {
      icon: "./Dumpybird.ico",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-indigo-900 text-white">
      <body className={`${urbanist.className} antialiased`} id="root">
        {children}
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />

        <Socials />
        <ViewCanvas />
      </body>
    </html>
  );
}
