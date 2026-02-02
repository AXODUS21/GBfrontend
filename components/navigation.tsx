"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/gbf.png"
              alt="Global Bright Futures Foundation"
              width={120}
              height={40}
              className={`h-10 w-auto object-contain transition-all ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["About", "Programs", "Impact", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Impact" ? "/about" : `/${item.toLowerCase()}`}
                className={`text-sm font-medium transition-all hover:opacity-70 ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/sponsor"
              className="bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-bold hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-6 space-y-1">
            {["About", "Programs", "Impact", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Impact" ? "/about" : `/${item.toLowerCase()}`}
                className="block text-foreground py-3 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/sponsor"
              className="block bg-accent text-accent-foreground px-6 py-4 rounded-full text-center text-lg font-bold mt-4"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
