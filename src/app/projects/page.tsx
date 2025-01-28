"use client";

import { useState } from "react";
import Navbar, { defaultNavLinks } from "@/components/navbar";
import Image from "next/image";

type Category = {
  title: string;
  href: string;
  id: string;
  subcategories?: {
    title: string;
    href: string;
    id: string;
  }[];
  projects?: {
    title: string;
    href: string;
    id: string;
    index: string;
  }[];
};

export const categories: Category[] = [
  {
    title: "All Categories",
    href: "/projects/all",
    id: "all-categories",
    projects: [
      {
        title: "Kocaeli Sanayi Odası Ek Bina",
        href: "/projects/sanayi-odasi",
        id: "sanayi-odasi",
        index: "1",
      },
    ],
  },
  {
    title: "Projects",
    href: "/projects/projects",
    id: "projects",
  },
  {
    title: "Artworks",
    href: "/projects/artwork",
    id: "artwork",
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
            <div className="min-h-screen p-6 md:p-12">
              <div className="flex flex-row ">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight mb-8">
                    Projects
                  </h1>
                  <div className="grid gap-6">
                    {categories.map((category, index) => (
                      <div key={index} className="space-y-3">
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
                                <h3
                                  style={{ marginLeft: 8 }}
                                  className="text-lg"
                                >
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

                <div className="bg-zinc-800 inline-block text-white ml-8">
                  <h3 className="text-xl font-semibold mb-4">Projects</h3>
                  <ul className="space-y-3">
                    <li className="hover:bg-zinc-700 p-2 rounded cursor-pointer">
                      Project 1
                    </li>
                    <li className="hover:bg-zinc-700 p-2 rounded cursor-pointer">
                      Project 2
                    </li>
                    <li className="hover:bg-zinc-700 p-2 rounded cursor-pointer">
                      Project 3
                    </li>
                    <li className="hover:bg-zinc-700 p-2 rounded cursor-pointer">
                      Project 4
                    </li>
                    <li className="hover:bg-zinc-700 p-2 rounded cursor-pointer">
                      Project 5
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
