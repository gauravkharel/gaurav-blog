'use client'

import Image from "next/image";
import Link from "next/link";
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/readlist", label: "Reading List" },
];

const Navbar = () => {
  return (
    <header className="bg-slate-600 py-2 sticky">
      <nav className="flex flex-row justify-between md:gap-4 ">
        <Image alt="logo" width={24} height={24} src="/logo.svg" />
        <ul className="flex flex-row gap-3   ">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <span>mode</span>
      </nav>
    </header>
  );
};

export default Navbar;
