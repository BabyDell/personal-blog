'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { Lightbulb } from "lucide-react";

const navItems = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog-posts", label: "Blog Posts" },
  { href: "/learning-progress", label: "Learning Progress" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <header className={`fixed px-4 lg:px-6 h-14 w-full flex items-center justify-between transition-colors duration-500 z-50 ${scrolled ? 'bg-black text-white' : 'bg-transparent'}`}>
      <Link className="flex items-center justify-center" href="/">
        <Lightbulb className="h-6 w-6" />
        <span className="ml-2 font-Owswald tracking-wider text-xl">Andy Felix</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            className="text-sm font-medium relative animate-underline"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
    <div className="h-14"/>
    </>
  );
}
