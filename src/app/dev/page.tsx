"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

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
            {/* Content with Navigation Arrows */}
            <div className="text-white text-sm tracking-tight relative z-10 py-2 px-2 mt-[64px] sm:mt-0 bg-black max-w-[320px] whitespace-normal flex items-center gap-2">
              <button
                onClick={(e) =>
                  scrollToSection("up", e.currentTarget.closest("section")!)
                }
                className="p-2 hover:bg-white/20 rounded transition-colors"
                aria-label="Previous section"
              >
                <IoIosArrowUp size={20} />
              </button>
              Kocaeli Serbest Bölgesi Akyacht Genişleme Projesi Temel İnşaat
              <button
                onClick={(e) =>
                  scrollToSection("down", e.currentTarget.closest("section")!)
                }
                className="p-2 hover:bg-white/20 rounded transition-colors"
                aria-label="Next section"
              >
                <IoIosArrowDown size={20} />
              </button>
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
            <div className="text-white text-sm tracking-tight relative z-10 py-2 px-4 mt-[64px] sm:mt-0 bg-black flex items-center gap-2">
              <button
                onClick={(e) =>
                  scrollToSection("up", e.currentTarget.closest("section")!)
                }
                className="p-2 hover:bg-white/20 rounded transition-colors"
                aria-label="Previous section"
              >
                <IoIosArrowUp size={20} />
              </button>
              İzmit Kapanca Otel
              <button
                onClick={(e) =>
                  scrollToSection("down", e.currentTarget.closest("section")!)
                }
                className="p-2 hover:bg-white/20 rounded transition-colors"
                aria-label="Next section"
              >
                <IoIosArrowDown size={20} />
              </button>
            </div>
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
            <div className="text-white text-sm tracking-tight relative z-10 py-2 px-4 mt-[64px] sm:mt-0 bg-black flex items-center gap-2">
              <button
                onClick={(e) =>
                  scrollToSection("up", e.currentTarget.closest("section")!)
                }
                className="p-2 hover:bg-white/20 rounded transition-colors"
                aria-label="Previous section"
              >
                <IoIosArrowUp size={20} />
              </button>
              Kocaeli Sanayi Odası Ek Bina
              <button
                onClick={(e) =>
                  scrollToSection("down", e.currentTarget.closest("section")!)
                }
                className="p-2 hover:bg-white/20 rounded transition-colors"
                aria-label="Next section"
              >
                <IoIosArrowDown size={20} />
              </button>
            </div>
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
            <div className="text-white text-sm tracking-tight relative z-10 py-2 px-4 mt-[64px] sm:mt-0 bg-black flex items-center gap-2">
              <button
                onClick={(e) =>
                  scrollToSection("up", e.currentTarget.closest("section")!)
                }
                className="p-2 hover:bg-white/20 rounded transition-colors"
                aria-label="Previous section"
              >
                <IoIosArrowUp size={20} />
              </button>
              Kocaeli Serbest Bölge Hangar 3
              <button
                onClick={(e) =>
                  scrollToSection("down", e.currentTarget.closest("section")!)
                }
                className="p-2 hover:bg-white/20 rounded transition-colors"
                aria-label="Next section"
              >
                <IoIosArrowDown size={20} />
              </button>
            </div>
          </section>
          <section className="h-screen snap-start bg-zinc-500 flex flex-col items-end p-6 md:p-12">
            <div className="text-white text-sm tracking-tight relative z-10 py-2 px-4 mt-[64px] sm:mt-0 bg-black flex items-center gap-2">
              <button
                onClick={(e) =>
                  scrollToSection("up", e.currentTarget.closest("section")!)
                }
                className="p-2 hover:bg-white/20 rounded transition-colors"
                aria-label="Previous section"
              >
                <IoIosArrowUp size={20} />
              </button>
              Section 5
              <button
                onClick={(e) =>
                  scrollToSection("down", e.currentTarget.closest("section")!)
                }
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
  );
}
