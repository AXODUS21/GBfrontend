"use client"

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerChildren, StaggerItem, MagneticButton } from "@/components/motion";

export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section className="section-padding bg-gradient-to-br from-accent via-accent to-accent/90 relative overflow-hidden gradient-animate">
        {/* Decorations */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-5">
              Ready to Make a Difference?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-accent-foreground/80 mb-10 max-w-xl mx-auto">
              Your donation supports students in the US and abroad. 100% tax-deductible.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <MagneticButton>
              <Link
                href="/sponsor"
                className="inline-block bg-foreground text-background px-10 py-5 rounded-full font-bold text-lg hover:bg-foreground/90 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1"
              >
                Donate Now
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <StaggerChildren className="grid md:grid-cols-4 gap-12 mb-16" staggerDelay={0.08}>
            {/* Logo & Mission */}
            <StaggerItem className="md:col-span-1">
              <Image
                src="/gbf.png"
                alt="Global Bright Futures Foundation"
                width={120}
                height={40}
                className="h-10 w-auto object-contain mb-5 brightness-0 invert"
              />
              <p className="text-sm text-background/60 leading-relaxed">
                Empowering students through school-to-school learning partnerships worldwide.
              </p>
              <div className="flex gap-3 mt-6">
                <motion.a
                  href="https://www.facebook.com/gbffinc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center text-background/60 hover:text-background hover:bg-background/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook size={18} />
                </motion.a>
              </div>
            </StaggerItem>

            {/* Programs */}
            <StaggerItem>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-5 text-background/90">Programs</h3>
              <ul className="space-y-3 text-sm text-background/50">
                {[
                  { label: "School Vouchers", href: "/programs" },
                  { label: "Tutoring & Mentorship", href: "/programs" },
                  { label: "Student Fellowship", href: "/programs" },
                  { label: "Apply for Support", href: "/apply" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-background transition-colors duration-300 inline-block hover:translate-x-1 transform"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            {/* About */}
            <StaggerItem>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-5 text-background/90">Organization</h3>
              <ul className="space-y-3 text-sm text-background/50">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Leadership", href: "/board-of-directors" },
                  { label: "Partners", href: "/partnerships" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-background transition-colors duration-300 inline-block hover:translate-x-1 transform"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            {/* Contact */}
            <StaggerItem>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-5 text-background/90">Contact</h3>
              <ul className="space-y-4 text-sm text-background/50">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={14} />
                  </div>
                  <span>admin@globalbrightfutures.org</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} />
                  </div>
                  <span>
                    5830 E 2ND ST, STE 7000 #30800
                    <br />
                    CASPER, WY 82609
                  </span>
                </li>
              </ul>
            </StaggerItem>
          </StaggerChildren>

          {/* Bottom bar */}
          <FadeIn>
            <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-background/40">
                © 2025 Global Bright Futures Foundation, Inc. | 501(c)(3) Nonprofit | EIN: [EIN Number]
              </p>
              <div className="flex gap-6 text-xs text-background/40">
                <Link href="/policies/terms_and_conditions" className="hover:text-background transition-colors duration-300">
                  Terms
                </Link>
                <Link href="/policies/code_of_ethics" className="hover:text-background transition-colors duration-300">
                  Privacy
                </Link>
                <a
                  href="/GBFF IRS 501c3 Determination Letter.pdf"
                  download
                  className="hover:text-background transition-colors duration-300"
                >
                  IRS Letter
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </footer>
    </>
  );
}
