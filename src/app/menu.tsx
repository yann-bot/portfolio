"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname(); // Récupère la page actuelle
  const myLink = [
    { name: "Work", path: "/" },
    { name: "About",    path: "/about" },
    { name: "Our Services", path: "/service" },
    { name: "Projects", path: "/project" },]

  return (
    <div className="flex-1 flex justify-end items-center font-medium gap-5 font-serif">
      {myLink.map(({ name, path }) => (
        <Link
          key={path}
          href={path}
          className={`text-2xl transition-all duration-300 ${pathname === path && "underline "   }`}
        >
          {name}
        </Link>
      ))}

      <button className="bg-black text-white text-2xl pt-8 pb-8 pl-12 pr-12 rounded-xl">
        <Link href="/contact">Contact Me</Link>
      </button>
    </div>
  );
}
