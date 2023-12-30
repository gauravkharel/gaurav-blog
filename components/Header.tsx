'use client'

import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from 'next/navigation';

const links = [
  { href: "/home", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/blog", name: "Blog" },
  { href: "/readlist", name: "Reading List" },
];

const Navbar = () => {
  const pathname = usePathname()
  return (
    <header className="py-2 sticky dark:bg-slate-500">
      <nav className="flex flex-row justify-between md:gap-4 ">
        <Image alt="logo" width={24} height={24} src="/logo.svg" />
        <ul className="flex flex-row gap-6 py-1 text-lg  ">
          {links.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return (
              <li key={link.href} className={`px-4 py-2 rounded-2xl bg-gray-50 hover:bg-gray-200 ${isActive ? "bg-slate-200": 'bg-gray-50'} `}>
                <Link className="dark:text-pink-100 " href={link.href}>
                  {link.name}
                </Link>
              </li>
            )
          }
          )}
        </ul>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;