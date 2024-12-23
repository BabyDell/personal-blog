import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 relative z-50 bg-zinc-900  ">
      <p className="text-xs text-muted-foreground">
        © 2024 Andy Felix. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs text-white relative animate-underline" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs text-white relative animate-underline" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  );
}
