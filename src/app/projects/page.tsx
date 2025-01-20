"use client";

import { useState } from "react";
import Navbar, { defaultNavLinks } from "@/components/navbar";

const categories = [
  {
    title: "All Categories",
    href: "/projects/all",
    id: "all-categories",
  },
  {
    title: "Installation",
    href: "/projects/installation",
    subcategories: [
      {
        title: "All",
        href: "/projects/installation/all",
        id: "all-installations",
      },
      {
        title: "Partners",
        href: "/projects/installation/partners",
        id: "partners",
      },
    ],
    id: "installation",
  },
  {
    title: "Artwork",
    href: "/projects/artwork",
    id: "artwork",
  },
  {
    title: "Writing",
    href: "/projects/writing",
    id: "writing",
  },
];

export default function Projects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleCategoryClick = (_id: string) => {};

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Mobile Navbar */}
      <Navbar
        navLinks={defaultNavLinks}
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
            {defaultNavLinks.map((link) => (
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

        {/* Main Content */}
        <div
          className={`flex-1 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "transform translate-y-40" : "transform translate-y-0"
          }`}
        >
          <div className="hidden md:block w-72 fixed h-full bg-black p-8 z-50">
            <h1 className="text-white text-3xl tracking-tight mb-3">
              1999 Mimarlık
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
                  className="text-gray-400 hover:text-white transition-colors tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:ml-48 min-h-screen bg-zinc-900 text-white p-6 pt-24 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tight mb-8">
                Projects
              </h1>
              <div>
                {categories.map((category, index) => (
                  <div key={index} className="space-y-3 mb-2 inline-block">
                    <div
                      onClick={() => handleCategoryClick(category.id)}
                      className="cursor-pointer hover:opacity-80"
                    >
                      <h2 className="text-xl font-semibold">
                        {category.title}
                      </h2>
                    </div>

                    {category.subcategories && (
                      <div key={category.id}>
                        {category.subcategories.map((sub, subIndex) => (
                          <div
                            key={subIndex}
                            className="flex items-center space-x-2"
                            onClick={() => handleCategoryClick(sub.id)}
                          >
                            <span className="text-gray-500">•</span>
                            <h3 style={{ marginLeft: 8 }} className="text-lg">
                              {sub.title}
                            </h3>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
