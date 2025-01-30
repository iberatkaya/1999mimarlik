"use client";

import { useState } from "react";
import Navbar, { defaultNavLinks } from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Mobile Navbar */}
      <Navbar
        navLinks={defaultNavLinks}
        title="1999 Mimarlık"
        onMenuToggle={setIsMenuOpen}
      />

      <div
        className={`flex-1 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-y-40" : "transform translate-y-0"
        }`}
      >
        <div className="hidden md:block w-72 fixed h-full bg-black p-8 z-50">
          <h1 className="text-white text-3xl tracking-tight mb-3 flex items-center">
            <span className="font-['Arial']">1999 Mimarlık</span>
          </h1>
          <h2 className="text-gray-400 text-base tracking-wide leading-relaxed mb-12">
            Creating distinctive spaces through innovative design and
            sustainable architecture.
          </h2>
          <nav className="flex flex-col gap-4">
            {defaultNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors tracking-wide flex items-center"
              >
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  width={24}
                  height={24}
                  priority={true}
                  loading="eager"
                  style={{ marginRight: "6px" }}
                />
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:ml-48 min-h-screen bg-zinc-900 text-white p-6 pt-24 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 md:p-12">
              <div className="flex flex-row ">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight mb-8">
                    Projects
                  </h1>
                  <div className="grid gap-6"></div>
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer mb-4">
                    <Link href="/projects/sanayi-odasi" className="text-lg">
                      Kocaeli Sanayi Odası Ek Bina
                    </Link>
                  </div>
                  {/* <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <Link href="/projects/kapanca-otel" className="text-lg">
                      İzmit Kapanca Otel
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
