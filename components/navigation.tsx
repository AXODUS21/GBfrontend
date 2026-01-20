"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/gbf.png"
              alt="Global Bright Futures Foundation"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              href="/programs"
              className="text-foreground hover:text-primary transition"
            >
              Programs
            </Link>
            <Link
              href="/partnerships"
              className="text-foreground hover:text-primary transition"
            >
              Partnerships
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition"
            >
              About
            </Link>
            <Link
              href="/board-of-directors"
              className="text-foreground hover:text-primary transition"
            >
              Board
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition"
            >
              Contact
            </Link>
            <Link
              href="/sponsor"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition"
            >
              Sponsor
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block text-foreground hover:text-primary py-2"
            >
              Home
            </Link>
            <Link
              href="/programs"
              className="block text-foreground hover:text-primary py-2"
            >
              Programs
            </Link>
            <Link
              href="/partnerships"
              className="block text-foreground hover:text-primary py-2"
            >
              Partnerships
            </Link>
            <Link
              href="/about"
              className="block text-foreground hover:text-primary py-2"
            >
              About
            </Link>
            <Link
              href="/board-of-directors"
              className="block text-foreground hover:text-primary py-2"
            >
              Board
            </Link>
            <Link
              href="/contact"
              className="block text-foreground hover:text-primary py-2"
            >
              Contact
            </Link>
            <Link
              href="/sponsor"
              className="block bg-primary text-primary-foreground px-4 py-2 rounded-lg"
            >
              Sponsor
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
