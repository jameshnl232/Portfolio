"use client";

import Bounded from "@/app/components/Bounded";
import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="about relative z-30 min-h-screen"
    >

      <div id="about" className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="mb-8 text-center lg:mb-0 lg:w-1/2 lg:text-left">
            <Heading size="xl">
              <div className="heading">{slice.primary.heading}</div>
            </Heading>
            <div className="description text-slate-300 lg:!text-xl">
              <PrismicRichText field={slice.primary.description} />
            </div>
            <div className="flex w-full items-center justify-center py-5 lg:justify-start">
              <Link href={`${slice.primary.buttonlink}`} className="">
                <Button text={slice.primary.buttontext} />
              </Link>
            </div>
          </div>
          <div className="avatar relative w-1/2 p-5">
            <div className="absolute inset-0 z-30 scale-90 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 lg:ml-4 lg:mt-4 lg:scale-100"></div>
            <div className="relative z-50 mx-auto aspect-square w-full overflow-hidden rounded-full transition-transform duration-300 ease-in-out hover:scale-105 md:w-80 lg:w-full">
              <PrismicNextImage
                field={slice.primary.avatar}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="z-50 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default About;
