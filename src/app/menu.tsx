"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Menu() {
  const pathname = usePathname(); // Récupère la page actuelle
  const [isOpen, setIsOpen] = useState(false); // État du sous-menu

  const myLink = [
    { name: "Work", path: "/" },
    { name: "About", path: "/about" },
    { name: "My Services", path: "/service" },
    { name: "Projects", path: "/project", hasDropdown: true },
  ];

  const subLinks = [
    { name: "Web Projects", path: "/web_projects" },
    { name: "Mobile Apps", path: "/mobile_projects" },
    { name: "UI/UX Design", path: "/design_projects" },
  ];

  return (
    <div className="flex-1 flex justify-end items-center font-medium gap-5 font-serif relative">
      {myLink.map(({ name, path, hasDropdown }) => (
        <div
          key={path}
          className="relative"
          onMouseEnter={() => hasDropdown && setIsOpen(true)}
          onMouseLeave={() => hasDropdown && setIsOpen(false)}
        >
          {hasDropdown ? (
            <>
              {/* Lien avec sous-menu */}
              <Link
                href={path}
                className={`text-2xl transition-all duration-300 ${
                  pathname === path && "underline"
                }`}
              >
                {name}
              </Link>

              {/* Sous-menu (Affiché au survol) */}
              {isOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white  rounded-md shadow-lg">
                  <ul className="py-2">
                    {subLinks.map(({ name, path }) => (
                      <li key={path}>
                        <Link
                          href={path}
                          className="block px-4 py-1 hover:bg-gray-100 text-2xl font-serif"
                        >
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
              href={path}
              className={`text-2xl transition-all duration-300 ${
                pathname === path && "underline"
              }`}
            >
              {name}
            </Link>
          )}
        </div>
      ))}
      
      <button className="bg-black text-white text-2xl pt-8 pb-8 pl-14 pr-14 rounded-xl">
        <Link href="/contact">Contact Me</Link>
      </button>
    </div>
  );
}
