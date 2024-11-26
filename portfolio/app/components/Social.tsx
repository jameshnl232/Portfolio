"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const data = [
  {
    id: 1,
    title: "Instagram",
    url: "https://www.instagram.com/dumpybird/",
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/luong-hoang-ba2aa127b/",
  },
  { id: 3, title: "GitHub", url: "https://github.com/jameshnl232" },
];

const Socials = () => {
  const socialRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      socialRef.current,
      {
        x: 500,
      },
      {
        x: 0,
        duration: 1.5,
        delay: 1.5,
        ease: "power4.out",
      },
    );
  }, [socialRef]);

  return (
    <div
      className="fixed -right-[15rem] bottom-0 z-50 hidden origin-left -rotate-90 gap-5 bg-black/30 p-5 text-lg uppercase text-white/30 backdrop-blur-xl md:flex"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="duration-500 hover:text-cyan-400"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
