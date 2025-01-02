"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog-posts", label: "Blog Posts" },
  { href: "/contact", label: "Contact" },
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
    open: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <>
      <header
        className={`py-8 fixed px-4 lg:px-16 h-14 w-full flex items-center justify-between transition-colors text-white duration-500 z-50 ${
          scrolled ? "bg-zinc-900" : "bg-transparent"
        }`}
      >
        <Link className="flex items-center justify-center" href="/">
          <Lightbulb className="h-6 w-6" />
          <span className="ml-2 font-Owswald tracking-wider text-xl">
            Andy Felix
          </span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="text-md font-semibold relative animate-underline"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="inline-block cursor-pointer focus:outline-none md:hidden"
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div
            className={`w-7 h-[3px] my-1.5 transition-transform duration-300 ${
              isMenuOpen ? "transform translate-y-[9px] -rotate-45" : ""
            } ${scrolled ? "bg-white" : "bg-white"}`}
          />
          <div
            className={`w-7 h-[3px] my-1.5 transition-transform duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            } ${scrolled ? "bg-white" : "bg-white"}`}
          />
          <div
            className={`w-7 h-[3px] my-1.5 transition-transform duration-300 ${
              isMenuOpen ? "transform -translate-y-[9px] rotate-45" : ""
            } ${scrolled ? "bg-white" : "bg-white"}`}
          />
        </button>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-14 left-0 right-0 bg-zinc-900 text-white z-40 md:hidden overflow-hidden"
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
