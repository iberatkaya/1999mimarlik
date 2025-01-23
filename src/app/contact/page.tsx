"use client";

import { useState } from "react";
import Navbar, { defaultNavLinks } from "@/components/navbar";
import Image from "next/image";

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-black">
      <Navbar
        title="1999 Mimarlık"
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
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={32}
              height={32}
              style={{ marginRight: "4px" }}
            />
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
              Contact Information
            </h1>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Address</h2>
                <p className="text-gray-400">
                  Karabas Mah. Salim Dervisoglu Cad. Fuar içi, Sanayi Odasi,
                  <br />
                  Izmit / Kocaeli
                  <br />
                  Turkey
                </p>
                {/* Google Maps iframe */}
                <div className="mt-4 w-full md:w-[70%] aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5403645082843!2d29.936742711735814!3d40.76076023450964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4568a5555555%3A0x9593ffebc22d9857!2sKocaeli%20Chamber%20of%20Industry!5e0!3m2!1sen!2sus!4v1737593234900!5m2!1sen!2sus"
                    width="100%"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Email</h2>
                <a
                  href="mailto:info@1999mimarlik.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@1999mimarlik.com
                </a>
                <br />
                <a
                  href="mailto:aygun@1999mimarlik.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  aygun@1999mimarlik.com
                </a>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Phone</h2>
                <a
                  href="tel:+905313189431"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +90 531 318 94 31
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
