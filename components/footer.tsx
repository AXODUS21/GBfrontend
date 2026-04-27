"use client"

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Facebook, Heart, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerChildren, StaggerItem, MagneticButton } from "@/components/motion";

export default function Footer() {
  return (
    <>
      {/* Get Involved Section */}
      <section className="section-padding bg-gradient-to-br from-accent via-accent to-accent/90 relative overflow-hidden gradient-animate">
        {/* Decorations */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground">
                Get Involved
              </h2>
            </FadeIn>
          </div>

          <StaggerChildren className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {/* Partner With Us */}
            <StaggerItem>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl h-full flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-accent-foreground">
                  <Globe size={32} />
                </div>
                <h3 className="text-2xl font-bold text-accent-foreground mb-8">
                  For schools and community organizations
                </h3>
                <MagneticButton className="w-full mt-auto">
                  <Link
                    href="/join"
                    className="block w-full bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-foreground/90 transition-all duration-300 shadow-xl"
                  >
                    Partner With Us
                  </Link>
                </MagneticButton>
              </div>
            </StaggerItem>

            {/* Apply for Programs */}
            <StaggerItem>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl h-full flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-accent-foreground">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold text-accent-foreground mb-8">
                  For schools and students seeking support
                </h3>
                <MagneticButton className="w-full mt-auto">
                  <Link
                    href="/join"
                    className="block w-full bg-white text-accent px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all duration-300 shadow-xl border border-white/20"
                  >
                    Apply for Programs
                  </Link>
                </MagneticButton>
              </div>
            </StaggerItem>

            {/* Fund Programs */}
            <StaggerItem>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl h-full flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-accent-foreground">
                  <Heart size={32} />
                </div>
                <h3 className="text-2xl font-bold text-accent-foreground mb-8">
                  For funders, corporations, and donors
                </h3>
                <MagneticButton className="w-full mt-auto">
                  <Link
                    href="/sponsor"
                    className="block w-full bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-foreground/90 transition-all duration-300 shadow-xl"
                  >
                    Fund Programs
                  </Link>
                </MagneticButton>
              </div>
            </StaggerItem>
          </StaggerChildren>
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
                We partner with schools and communities to deliver education programs through vetted providers using service-based funding. No cash assistance is provided to individuals.
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
                
                {/* Transparency Seal */}
                <motion.a
                  href="https://app.candid.org/profile/16509371/global-bright-futures-foundation-inc-41-2810962/?pkId=0b067e55-2a04-462c-8f3f-fc2e3d05c211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-[100px] opacity-70 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src="https://widgets.guidestar.org/prod/v1/pdp/transparency-seal/16509371/svg" 
                    alt="Candid/GuideStar Transparency Seal"
                    className="w-full h-auto"
                  />
                </motion.a>
              </div>
            </StaggerItem>

            {/* Column 1: Programs */}
            <StaggerItem>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-5 text-background/90">Programs</h3>
              <ul className="space-y-3 text-sm text-background/50">
                {[
                  { label: "Program Overview", href: "/programs" },
                  { label: "Tutoring & Mentorship", href: "/join" },
                  { label: "Educator & Career Pathways", href: "/join" },
                  { label: "Learning Resources & Support", href: "/join" },
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

            {/* Column 2: Get Involved */}
            <StaggerItem>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-5 text-background/90">Get Involved</h3>
              <ul className="space-y-3 text-sm text-background/50">
                {[
                  { label: "Apply for Support", href: "/join" },
                  { label: "Apply for Vendor", href: "https://app.globalbrightfutures.org/auth/vendor-signup" },
                  { label: "School Partnership", href: "https://app.globalbrightfutures.org/auth/signup" },
                  { label: "Fund Program", href: "/sponsor" },
                  { label: "Contact Us", href: "/contact" },
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

            {/* Column 3: Organization */}
            <StaggerItem>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-5 text-background/90">Organization</h3>
              <ul className="space-y-3 text-sm text-background/50">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Leadership", href: "/board-of-directors" },
                  { label: "Legal and Compliance", href: "/policies/legal_compliance_disclosure" },
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


          </StaggerChildren>

          {/* Bottom bar */}
          <FadeIn>
            <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-background/40">
                © 2025 Global Bright Futures Foundation, Inc. | U.S. 501(c)(3) nonprofit (EIN: 41-2810962). U.S. donations tax-deductible where permitted. International tax rules may vary.
              </p>
              <div className="flex gap-6 text-xs text-background/40">
                <Link href="/policies/terms_and_conditions" className="hover:text-background transition-colors duration-300">
                  Terms
                </Link>
                <Link href="/policies/privacy" className="hover:text-background transition-colors duration-300">
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
