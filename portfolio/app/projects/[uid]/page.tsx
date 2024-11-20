import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Bounded from "@/app/components/Bounded";
import Link from "next/link";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client
    .getByUID("projectpage", uid)
    .catch(() => notFound());

  return (
    <>
      <Bounded className="flex w-full justify-center gap-4 italic text-yellow-700">
        <div className="text-slate-100 relative z-10">
          <Link href="/">Home</Link>
        </div>
        {page.tags.map((tag, index) => (
          <span key={index} className="text-md font-bold">
            {tag}
          </span>
        ))}
      </Bounded>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client
    .getByUID("projectpage", uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("projectpage");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
