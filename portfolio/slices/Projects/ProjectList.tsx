/* eslint-disable @next/next/no-async-client-component */
"use client";

import { useEffect, useRef, useState } from "react";
import { asImageSrc, Content, isFilled } from "@prismicio/client";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

type Props = {
  items: Content.ProjectpageDocument[];
  fallbackImage: Content.ProjectsSlice["primary"]["fallbackimage"];
};

export default function ProjectList({ items, fallbackImage }: Props) {
  const component = useRef<HTMLUListElement | null>(null); // Specify the type for the ref

  const revealRef = useRef(null);
  const [currentItem, setCurrentItem] = useState<null | number>(null);
  const [hovering, setHovering] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const contentImages = items.map((item) => {
    const image = isFilled.image(item.data.hoverimage)
      ? item.data.hoverimage
      : fallbackImage;
    return asImageSrc(image, {
      fit: "crop",
      w: 220,
      h: 320,
      exp: -10,
    });
  });

  const onMouseEnter = (index: number) => {
    console.log("hovering");
    if (!hovering) setHovering(true);
    setCurrentItem(index);
  };

  const onMouseLeave = () => {
    setHovering(false);
    setCurrentItem(null);
  };

  // Preload images
  useEffect(() => {
    contentImages.forEach((url) => {
      if (!url) return;
      const img = new Image();
      img.src = url;
    });
  }, [contentImages]);

  useGSAP(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!component.current || !revealRef.current) return;

      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2));

      lastMousePos.current = { x: e.clientX, y: e.clientY };

      if (hovering) {
        gsap.to(revealRef.current, {
          duration: 0.5,
          x: e.clientX - component.current.getBoundingClientRect().left + 50,
          y: e.clientY - component.current.getBoundingClientRect().top - 50,
          rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1), // Apply rotation based on speed and direction
        });
        gsap.to(revealRef.current, {
          opacity: hovering ? 1 : 0,
          visibility: "visible",
          ease: "power3.out",
          duration: 0.4,
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [hovering]);

  return (
    <>
      <ul
        ref={component}
        onMouseLeave={onMouseLeave}
        className="grid "
      >
        {items.map((project, index) => (
          <li
            key={index}
            className="list-item"
            onMouseEnter={() => onMouseEnter(index)}
          >
            <a
              href={`${project.url}`}
              className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
              aria-label={project.data.title || ""}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{project.data.title}</span>
                <div className="flex gap-3 text-yellow-400">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-lg font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                <span>View Project</span> <ArrowUpRight size={14} />
              </span>
            </a>
          </li>
        ))}

        {/* Hover element */}
        <div
          className="hover-reveal pointer-events-none absolute left-0 top-0 z-10 h-[320px] w-[220px] rounded-lg bg-cover bg-center opacity-0 transition-[background] duration-300"
          style={{
            backgroundImage:
              currentItem !== null ? `url(${contentImages[currentItem]})` : "",
          }}
          ref={revealRef}
        ></div>
      </ul>
    </>
  );
}
