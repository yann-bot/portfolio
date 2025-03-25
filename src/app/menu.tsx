"use client";

import { HiOutlineBars2 } from "react-icons/hi2";
import { BsXLg } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Bouton Menu */}
      <button onClick={() => setIsOpen(true)} className="text-3xl">
        <HiOutlineBars2 />
      </button>

      {/* Menu mobile (plein écran) */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          {/* Logo en haut */}
          <div className="absolute top-5 left-5  text-3xl    font-serif">
            Yann D.O
          </div>

          {/* Bouton pour fermer */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-3xl"
          >
            <BsXLg />
          </button>

          {/* Navigation */}
          <nav className="flex flex-col items-center gap-8 text-black text-3xl">
            <Link href="/" onClick={() => setIsOpen(false)}>Work</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/service" onClick={() => setIsOpen(false)}>My Services</Link>
            <Link href="/new-folder" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-black text-white py-2 px-6 rounded-lg">
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default function Menu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const myLink = [
    { name: "Work", path: "/" },
    { name: "About", path: "/about" },
    { name: "My Services", path: "/service" },
    { name: "Projects", path: "/new-folder", hasDropdown: true },
  ];

  const subLinks = [
    { name: "Web Projects", path: "/web_projects" },
    { name: "Mobile Apps", path: "/mobile_projects" },
    { name: "UI/UX Design", path: "/design_projects" },
  ];

  return (
    <div className="flex-1">
      {/* Menu Desktop */}
      <div className="hidden lg:flex lg:justify-end lg:items-center lg:font-medium lg:gap-5 lg:font-serif lg:relative">
        {myLink.map((item) => (
          <div
            key={item.path}
            className="relative"
            onMouseEnter={() => item.hasDropdown && setIsOpen(true)}
            onMouseLeave={() => item.hasDropdown && setIsOpen(false)}
          >
            {item.hasDropdown ? (
              <>
                <Link
                  href={item.path}
                  className={`lg:text-2xl lg:transition-all lg:duration-300 ${
                    pathname === item.path && "underline"
                  }`}
                  onClick={(e) => e.preventDefault()}
                >
                  {item.name}
                </Link>

                {/* Sous-menu (Affiché au survol) */}
                {isOpen && (
                  <div className="lg:absolute lg:right-0 lg:mt-1 lg:w-48 lg:bg-white lg:rounded-md lg:shadow-lg">
                    <ul className="py-2">
                      {subLinks.map(({ name, path }) => (
                        <li key={path}>
                          <Link href={path} className="lg:text-2xl lg:transition-all lg:duration-300">
                            {name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.path}
                className={`lg:text-2xl lg:transition-all lg:duration-300 ${
                  pathname === item.path && "underline"
                }`}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}

        <button className="lg:bg-black lg:text-white lg:text-2xl lg:pt-8 lg:pb-8 lg:pl-14 lg:pr-14 lg:rounded-xl">
          <Link href="/contact">Contact Me</Link>
        </button>
      </div>

      {/* Menu Mobile */}
      <div className="lg:hidden flex justify-end">
        <MobileMenu />
      </div>
    </div>
  );
}
