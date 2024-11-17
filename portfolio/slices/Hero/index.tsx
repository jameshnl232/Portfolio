"use client";

import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useRef } from "react";
import Bounded from "@/app/components/Bounded";
import Shapes from "./Shapes";
import { View } from "@react-three/drei";
import { Bubbles } from "@/slices/Hero/Bubbles";
import CrystalSpinner from "@/slices/Hero/CrystalSpinner";

gsap.registerPlugin(useGSAP);

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */

const renderLetters = (name: KeyTextField, key: string) => {
  if (!name) return null;

  return name.split("").map((letter, index) => (
    <span
      key={index}
      className={`name-animation name-animation-${key} inline-block opacity-0`}
    >
      {letter}
    </span>
  ));
};

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const container = useRef(null);
  const view = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,

            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          },
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    },
    { scope: container },
  ); // <-- scope is for selector text (optional)

  return (
    <>
      <View
        ref={view}
        className="hero-scene absolute top-0 -mb-[100vh] hidden min-h-screen w-full md:block"
      >
        <Shapes />
        <Bubbles speed={3} repeat={true} count={300} />
      </View>
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        ref={container}
        className=""
      >
        <div className="grid min-h-screen w-full grid-cols-1 items-center justify-center md:grid-cols-4">
          <div className="col-span-2 md:row-start-1">
            <h1
              className="w-full flex-col items-center pb-20 text-center text-[3rem] font-extrabold leading-none tracking-tighter md:text-4xl lg:text-[clamp(2rem,12vmin,5rem)]"
              aria-label={
                slice.primary.firstname + " " + slice.primary.lastname
              }
            >
              <div className="flex h-full items-center justify-center gap-5 sm:mb-20">
                <span className="block text-yellow-400">
                  {renderLetters(slice.primary.firstname, "first")}
                </span>
                <span className="-mt-[.2rem] block text-purple-500">
                  {renderLetters(slice.primary.lastname, "last")}
                </span>
              </div>
              <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-purple-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-100 md:text-3xl">
                {slice.primary.tagline}
              </span>
            </h1>
          </div>
          <div className="relative -z-10 row-start-1 mt-9 aspect-square h-full w-full sm:z-10 sm:pb-[10rem] md:col-span-2 md:mt-0">
            <CrystalSpinner />
          </div>
        </div>
      </Bounded>
    </>
  );
};

export default Hero;
