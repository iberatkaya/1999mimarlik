"use client";

import { useState } from "react";
import Navbar, { defaultNavLinks } from "@/components/navbar";
import Image from "next/image";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-black">
      <Navbar
        title="1999"
        navLinks={defaultNavLinks}
        onMenuToggle={setIsMenuOpen}
      />

      <div
        className={`flex-1 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-y-40" : "transform translate-y-0"
        }`}
      >
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
        <div className="md:ml-48 min-h-screen bg-zinc-900 text-white p-6 pt-24 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight mb-8">About</h1>
            <div className=" w-full md:w-[70%]">
              <p className="text-gray-400">
                Nasuh Mert Aygün was born in 1999 in İzmit. He completed his
                primary education in İzmit and secondary education at Kocaeli
                Science High School, and attended the Department of Architecture
                at Kocaeli University&apos;s Faculty of Architecture and Design.
                In order to be a part of a different culture and educational
                approach at the university, he studied for a semester at
                Universita degli Studi di Sassari in Alghero, Sardinia, Italy in
                2020. After returning to Turkey, he continued his career by
                establishing 1999 Architects in 2025 after gaining experience in
                different projects in various public and private workplaces.
              </p>
              <br />
              <p className="text-gray-400">
                In addition to the projects he worked on, he continued his
                interest in various art fields and founded the architectural
                e-magazine called Archithats. He published various publications
                in this magazine for four years and achieved readability in many
                different countries around the world. His digital artworks were
                also exhibited in various exhibitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
