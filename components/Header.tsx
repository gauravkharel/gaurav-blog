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
      <nav
      className="container mx-auto flex justify-between items-center " 
      // className="flex flex-row justify-between md:gap-4 "
      >
        <Image alt="logo" width={24} height={24} src="/logo.svg" />
        <ul className="hidden md:flex space-x-4">
          {links.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return (
              <li key={link.href} className={`px-4 py-2 font-medium rounded-2xl hover:text-slate-500 ${isActive ? "bg-slate-100 text-slate-500": ' text-slate-300'} `}>
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