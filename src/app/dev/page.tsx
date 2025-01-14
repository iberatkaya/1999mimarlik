'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default anchor behavior
    setIsMenuOpen(false); // Close the menu
    
    // Get the href and navigate to the page
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
    if (href) {
      router.push(href);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-black z-50 p-4 border-b border-zinc-800">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl tracking-tight">
            1999 Mimarlık
          </h1>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 hover:bg-zinc-800 rounded-md transition-colors"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
            absolute top-full left-0 right-0 bg-black border-b border-zinc-800
            transition-all duration-300 ease-in-out`}
        >
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white py-3 transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content with Animation */}
      <div 
        className={`flex-1 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'transform translate-y-40' : 'transform translate-y-0'
        }`}
      >
        {/* Fixed Sidebar - hidden on mobile */}
        <div className="hidden md:block w-72 fixed h-full bg-black p-8">
          <h1 className="text-white text-3xl tracking-tight mb-3">
            1999 Mimarlık
          </h1>
          <h2 className="text-gray-400 text-base tracking-wide leading-relaxed mb-12">
            Creating distinctive spaces through innovative design and sustainable
            architecture.
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

        {/* Scrollable Main Content - adjusted margins for mobile */}
        <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
          {/* Add top padding on mobile for navbar */}
          <section className="h-screen snap-start bg-zinc-900 flex items-center justify-center p-6 md:p-12 mt-14 md:mt-0">
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
              Section 1
            </h2>
          </section>
          <section className="h-screen snap-start bg-zinc-800 flex items-center justify-center p-6 md:p-12">
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
              Section 2
            </h2>
          </section>
          <section className="h-screen snap-start bg-zinc-700 flex items-center justify-center p-6 md:p-12">
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
              Section 3
            </h2>
          </section>
          <section className="h-screen snap-start bg-zinc-600 flex items-center justify-center p-12">
            <h2 className="text-white text-5xl font-bold tracking-tight">
              Section 4
            </h2>
          </section>
          <section className="h-screen snap-start bg-zinc-500 flex items-center justify-center p-12">
            <h2 className="text-white text-5xl font-bold tracking-tight">
              Section 5
            </h2>
          </section>
        </div>
      </div>
    </div>
  );
}
