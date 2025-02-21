"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
}

interface NavbarProps {
  title: string;
  navLinks: NavLink[];
  onMenuToggle?: (p: boolean) => void;
}

export const defaultNavLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ title, navLinks, onMenuToggle }: NavbarProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (onMenuToggle) {
      onMenuToggle(isMenuOpen);
    }
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
    if (href) {
      router.push(href);
    }
  };

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-black z-50 p-4 border-b border-zinc-800">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl tracking-tight flex items-center ml-2">
          <span className="font-serif">{title}</span>
        </h1>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2 hover:bg-zinc-800 rounded-md transition-colors"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } absolute top-full left-0 right-0 bg-black border-b border-zinc-800
          transition-all duration-300 ease-in-out`}
      >
        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-gray-400 hover:text-white mb-4 transition-colors text-base tracking-wide flex items-center"
            >
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={20}
                height={20}
                priority={true}
                loading="eager"
                style={{ marginRight: "8px" }}
              />
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
