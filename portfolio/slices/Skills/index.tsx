"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";
import { Circle } from "lucide-react";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `Skills`.
 */
export type SkillsProps = SliceComponentProps<Content.SkillsSlice>;

/**
 * Component for "Skills" Slices.
 */
const Skills = ({ slice }: SkillsProps): JSX.Element => {
  const component = React.useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true, // pin the trigger element while active
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        },
      );
    },
    {
      scope: component,
    },
  );

  return (
    <>
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="skills relative z-30"
      >
        <div id="skills" className="container mx-auto min-h-screen px-4">
          <Heading size="xl" className="mb-8 lg:mb-12">
            <div className="heading">{slice.primary.heading}</div>
          </Heading>
          <div className="text-muted-foreground mb-10 text-lg md:text-xl">
            {slice.primary.description}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {slice.primary.techstack.map((item, index) => (
              <div
                key={index}
                className="rounded-lg bg-slate-700 p-6 shadow-md transition-all hover:bg-slate-500"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
                    <svg
                      className="text-primary-foreground h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div className="text-xl font-semibold">{item.techitem}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Bounded>
      <div ref={component} className="component mt-[5rem] overflow-hidden">
        {slice.primary.skillsset.map(({ skillitem, tech_color }, index) => (
          <div
            key={index}
            className="tech-row flex items-center justify-center gap-4 text-slate-700"
            aria-label={skillitem || ""}
          >
            {Array.from({ length: 15 }, (_, index) => (
              <React.Fragment key={index}>
                <span
                  className={
                    "tech-item text-8xl font-extrabold uppercase tracking-tighter"
                  }
                  style={{
                    color: index === 7 && tech_color ? tech_color : "inherit",
                  }}
                >
                  {skillitem}
                </span>
                <span className="text-3xl">
                  <Circle />
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
