'use client'

import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

const links = [
  { href: "/home", name: "Home" },
  { href: "/about", name: "About" },
];

const Navbar = () => {
  const pathname = usePathname()
  return (
    <header className="py-3 sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href={'/'} className="hidden md:flex group relative">
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              alt="logo"
              width={28}
              height={28}
              src="/TETRIS.svg"
              className="filter group-hover:drop-shadow-[0_0_8px_rgba(100,210,255,0.6)] dark:group-hover:drop-shadow-[0_0_8px_rgba(100,150,255,0.8)]"
            />
          </motion.div>

          {/* Tooltip - Positioned Below */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200  px-3 py-1 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 whitespace-nowrap">
            Tetris by <span className="text-blue-500 dark:text-cyan-400">Anja van Staden</span>
          </div>
        </Link>



        <ul className="flex space-x-1 sm:space-x-2">
          {links.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return (
              <motion.li
                key={link.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 font-medium rounded-full transition-all duration-300 ${isActive ?
                    "text-black dark:text-white" :
                    "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-800/50 rounded-full mix-blend-multiply dark:mix-blend-screen"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
                
              </motion.li>
            )
          })}
        </ul>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ModeToggle />
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;