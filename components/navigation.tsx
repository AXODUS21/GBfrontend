"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Sponsor", href: "/sponsor" },
  { label: "Join Us", href: "/contact" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Determine scroll direction and threshold
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    // Determine if page is scrolled
    setScrolled(latest > 20);
  });

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out ${
          scrolled ? "bg-background shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/gbf.png"
                  alt="Global Bright Futures Foundation"
                  width={120}
                  height={40}
                  className={`h-10 w-auto object-contain transition-all duration-300 ${
                    scrolled ? "" : "brightness-0 invert"
                  }`}
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx + 0.3, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-white/10 ${
                      scrolled ? "text-foreground hover:bg-foreground/5" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4, type: "spring" }}
                className="ml-4"
              >
                <Link
                  href="/sponsor"
                  className="bg-accent text-accent-foreground px-7 py-3 rounded-full text-sm font-bold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-block"
                >
                  Donate Now
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={`md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                isOpen
                  ? "text-white"
                  : scrolled
                  ? "text-foreground"
                  : "text-white"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/80"
            />

            {/* Menu Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                  },
                }}
                className="space-y-2 w-full max-w-sm text-center"
              >
                {navLinks.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                      },
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block text-white text-3xl font-bold py-4 hover:text-white/70 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                    },
                  }}
                  className="pt-6"
                >
                  <Link
                    href="/sponsor"
                    className="inline-block bg-accent text-accent-foreground px-10 py-5 rounded-full text-xl font-bold shadow-2xl"
                    onClick={() => setIsOpen(false)}
                  >
                    Donate Now
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
