"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "/dev" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Mobile Navbar */}
      <Navbar
        navLinks={navLinks}
        title="1999 Mimarlık"
        onMenuToggle={setIsMenuOpen}
      />

      {/* Main Content with Animation */}
      <div
        className={`flex-1 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-y-40" : "transform translate-y-0"
        }`}
      >
        {/* Fixed Sidebar - hidden on mobile */}
        <div className="hidden md:block w-72 fixed h-full bg-black p-8 z-50">
          <h1 className="text-white text-3xl tracking-tight mb-3">
            1999 Mimarlık
          </h1>
          <h2 className="text-gray-400 text-base tracking-wide leading-relaxed mb-12">
            Creating distinctive spaces through innovative design and
            sustainable architecture.
          </h2>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Scrollable Main Content */}
        <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
          {/* Add top padding on mobile for navbar */}
          <section
            className="h-screen snap-start relative flex flex-col items-end p-6 md:p-12 before:content-[''] before:absolute before:inset-0 before:bg-black/40"
            style={{
              backgroundImage: "url('/p1.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Content */}
            <div className="text-white text-sm tracking-tight relative z-10 py-2 px-2 mt-[64px] sm:mt-0 bg-black max-w-[320px] whitespace-normal">
              Kocaeli Serbest Bölgesi Akyacht Genişleme Projesi Temel İnşaat
            </div>
          </section>
          <section
            className="h-screen snap-start relative flex flex-col items-end p-6 md:p-12 before:content-[''] before:absolute before:inset-0 before:bg-black/40"
            style={{
              backgroundImage: "url('/p2.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-white text-sm tracking-tight relative z-10 py-2 px-4 mt-[64px] sm:mt-0 bg-black">
              İzmit Kapanca Otel
            </h2>
          </section>
          <section
            className="h-screen snap-start relative flex flex-col items-end p-6 md:p-12 before:content-[''] before:absolute before:inset-0 before:bg-black/40"
            style={{
              backgroundImage: "url('/p3.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-white text-sm tracking-tight relative z-10 py-2 px-4 mt-[64px] sm:mt-0 bg-black">
              Kocaeli Sanayi Odası Ek Bina
            </h2>
          </section>
          <section
            className="h-screen snap-start relative flex flex-col items-end p-6 md:p-12 before:content-[''] before:absolute before:inset-0 before:bg-black/40"
            style={{
              backgroundImage: "url('/p4.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-white text-sm tracking-tight relative z-10 py-2 px-4 mt-[64px] sm:mt-0 bg-black">
              Kocaeli Serbest Bölge Hangar 3
            </h2>
          </section>
          <section className="h-screen snap-start bg-zinc-500 flex flex-col items-end p-6 md:p-12">
            <h2 className="text-white text-sm tracking-tight relative z-10 py-2 px-4 mt-[64px] sm:mt-0 bg-black">
              Section 5
            </h2>
          </section>
        </div>
      </div>
    </div>
  );
}
