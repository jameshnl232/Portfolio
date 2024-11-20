"use client";

import { Content, KeyTextField } from "@prismicio/client";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

type Props = {
  navbarItems: Content.NavbarDocument;
};

export default function Navbar({ navbarItems }: Props) {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="z-50 relative mx-4 mt-4 flex items-center justify-between rounded-3xl bg-slate-300/60 px-4 py-3 backdrop-blur-2xl md:px-6">
      <NameLogo name={navbarItems.data.name} />

      <div className="hidden items-center space-x-6 md:flex">
        {navbarItems.data.navbaritems.map((item) => (
          <NavItem
            key={item.section}
            onClick={() =>
              item.section && scrollToSection(item.section.toLowerCase())
            }
          >
            <div
              className={clsx(
                "group relative block overflow-hidden rounded px-3 font-bold text-slate-900",
              )}
            >
              <span
                className={clsx(
                  "absolute inset-0 -z-10 h-full translate-y-12 rounded bg-purple-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                  "translate-y-15",
                )}
              />
              {item.section}
            </div>
          </NavItem>
        ))}
        <Button
          onClick={() => scrollToSection("contact")}
          text={navbarItems.data.contact_cta}
        />
      </div>

      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-16 z-50 w-full bg-white py-2 shadow-md md:hidden">
          {navbarItems.data.navbaritems.map((item) => (
            <NavItem
              key={item.section}
              onClick={() =>
                item.section && scrollToSection(item.section.toLowerCase())
              }
              className="w-full"
            >
              <div
                className={clsx(
                  "group relative block w-full overflow-hidden rounded px-3 font-bold text-slate-900",
                )}
              >
                <span
                  className={clsx(
                    "absolute inset-0 -z-10 h-full translate-y-12 rounded bg-purple-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                    "translate-y-15",
                  )}
                />
                {item.section}
              </div>
            </NavItem>
          ))}
          <div className="flex w-full items-center justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              text={navbarItems.data.contact_cta}
              className="text-slate-900"
            />
          </div>
        </div>
      )}
    </nav>
  );
}

function NameLogo({ name }: { name: KeyTextField }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter text-slate-300"
    >
      {name}
    </Link>
  );
}

function NavItem({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={clsx(
        className,
        "text-md block px-4 py-2 font-medium transition-colors md:inline-block",
        "text-slate-100 hover:text-blue-600",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
