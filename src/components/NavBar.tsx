"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lightbulb, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog-posts", label: "Blog Posts" },
  { href: "/learning-progress", label: "Learning Progress" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <>
      <header
        className={`fixed px-4 lg:px-6 h-14 w-full flex items-center justify-between transition-colors duration-500 z-50 ${
          scrolled ? "bg-black text-white" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-center md:justify-start md:w-1/3">
          <Link className="flex items-center justify-center" href="/">
            <Lightbulb className="h-6 w-6" />
            <span className="ml-2 font-Owswald tracking-wider text-xl">
              Andy Felix
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="text-sm font-medium relative animate-underline mx-2"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden flex items-center justify-end ">
        <button
              onClick={() => setIsMenuOpen(prevState => !prevState)}
              className="p-2 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isMenuOpen ? "open" : "closed"}
              initial={{ rotate: 0 }}
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              exit={{ rotate: 0 }}
              transition={{ duration: 0.4 }}
            >
              {isMenuOpen ? (
                <X
                  className="hover:scale-105 transition duration-500"
                  size={30}
                />
              ) : (
                <Menu
                  className="hover:scale-105 transition duration-500"
                  size={30}
                />
              )}
            </motion.div>
          </AnimatePresence>
          </button>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-14 left-0 right-0 bg-black text-white z-40 md:hidden overflow-hidden"
          >
            <nav className="flex flex-col items-center py-4">
              {navItems.map((item, i) => (
                <motion.div key={item.href} custom={i} variants={itemVariants}>
                  <Link
                    className="text-sm font-medium relative animate-underline my-2 block"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-14" />
    </>
  );
}
