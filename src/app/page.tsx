"use client";

import { useState } from "react";
import Navbar, { defaultNavLinks } from "@/components/navbar";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import SplashScreen from "./splash";

const scrollToSection = (
  direction: "up" | "down",
  currentSection: HTMLElement
) => {
  const sections = Array.from(document.querySelectorAll("section"));
  const currentIndex = sections.indexOf(currentSection);

  let targetSection;
  if (direction === "up") {
    // If we're at the first section, go to the last one
    targetSection =
      currentIndex === 0
        ? sections[sections.length - 1]
        : sections[currentIndex - 1];
  } else {
    // If we're at the last section, go to the first one
    targetSection =
      currentIndex === sections.length - 1
        ? sections[0]
        : sections[currentIndex + 1];
  }

  targetSection.scrollIntoView({ behavior: "smooth" });
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Hide main content until splash is complete */}
      <SplashScreen onComplete={() => setIsSplashComplete(true)} />
      <div className={`${isSplashComplete ? "opacity-100" : "opacity-0"}`}>
        <Navbar
          navLinks={defaultNavLinks}
          title="1999"
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
            <h1 className="text-white text-3xl tracking-tight mb-3 flex items-center">
              <span className="font-serif">1999</span>
            </h1>
            <p className="text-gray-400 text-sm tracking-wide mb-8">
              Project • Construction • Consultancy
            </p>
            <nav className="flex flex-col gap-4">
              {defaultNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors tracking-wide flex items-center"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Scrollable Main Content */}
          <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
            <section
              className="h-screen snap-start relative flex flex-col items-end p-6 md:p-12 before:content-[''] before:absolute before:inset-0 md:ml-72 cursor-pointer bg-position-size"
              style={{
                backgroundImage: "url('/p11.webp')",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => (window.location.href = "/projects/sanayi-odasi")}
            >
              <div className="text-white text-sm tracking-tight relative z-10 py-2 px-4 mt-[64px] sm:mt-0 bg-black flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection("up", e.currentTarget.closest("section")!);
                  }}
                  className="p-2 hover:bg-white/20 rounded transition-colors"
                  aria-label="Previous section"
                >
                  <IoIosArrowUp size={20} />
                </button>
                <span className="font-serif">Kocaeli Sanayi Odası B Blok</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection(
                      "down",
                      e.currentTarget.closest("section")!
                    );
                  }}
                  className="p-2 hover:bg-white/20 rounded transition-colors"
                  aria-label="Next section"
                >
                  <IoIosArrowDown size={20} />
                </button>
              </div>
            </section>

            <section
              className="h-screen snap-start relative flex flex-col items-end p-6 md:p-12 before:content-[''] before:absolute before:inset-0 md:ml-72 cursor-pointer bg-position-size"
              style={{
                backgroundImage: "url('/p21.webp')",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => (window.location.href = "/projects/eximbank")}
            >
              <div className="text-white text-sm tracking-tight relative z-10 py-2 px-4 mt-[64px] sm:mt-0 bg-black flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection("up", e.currentTarget.closest("section")!);
                  }}
                  className="p-2 hover:bg-white/20 rounded transition-colors"
                  aria-label="Previous section"
                >
                  <IoIosArrowUp size={20} />
                </button>
                <span className="font-serif">
                  Eximbank Kocaeli İrtibat Ofisi
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection(
                      "down",
                      e.currentTarget.closest("section")!
                    );
                  }}
                  className="p-2 hover:bg-white/20 rounded transition-colors"
                  aria-label="Next section"
                >
                  <IoIosArrowDown size={20} />
                </button>
              </div>
            </section>

            <section
              className="h-screen snap-start relative flex flex-col items-end p-6 md:p-12 before:content-[''] before:absolute before:inset-0 md:ml-72 cursor-pointer bg-position-size"
              style={{
                backgroundImage: "url('/p31.webp')",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => (window.location.href = "/projects/teknopark")}
            >
              <div className="text-white text-sm tracking-tight relative z-10 py-2 px-4 mt-[64px] sm:mt-0 bg-black flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection("up", e.currentTarget.closest("section")!);
                  }}
                  className="p-2 hover:bg-white/20 rounded transition-colors"
                  aria-label="Previous section"
                >
                  <IoIosArrowUp size={20} />
                </button>
                <span className="font-serif">Kocaeli Model Fabrika AŞ</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection(
                      "down",
                      e.currentTarget.closest("section")!
                    );
                  }}
                  className="p-2 hover:bg-white/20 rounded transition-colors"
                  aria-label="Next section"
                >
                  <IoIosArrowDown size={20} />
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
