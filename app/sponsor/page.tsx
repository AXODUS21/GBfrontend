"use client";

import { useState, useRef } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Heart,
  Globe2,
  Users,
  GraduationCap,
  CheckCircle,
  Shield,
} from "lucide-react";
import ZeffyDonation from "@/components/zeffy-donation";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn, TextReveal, StaggerChildren, StaggerItem, ScaleIn, MagneticButton, HoverLift } from "@/components/motion";

const suggestedAmounts = [25, 50, 100, 200, 500, 1000];

const ZEFFY_FORM_URL =
  process.env.NEXT_PUBLIC_ZEFFY_FORM_URL ||
  "https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-21717";

export default function SponsorPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleDonateClick = (amount: number, isRecurring: boolean) => {
    if (ZEFFY_FORM_URL) {
      try {
        const url = new URL(ZEFFY_FORM_URL);
        if (amount > 0) {
          url.searchParams.set("amount", amount.toString());
        }
        if (isRecurring) {
          url.searchParams.set("recurring", "true");
        }
        window.open(url.toString(), "_blank");
      } catch (error) {
        console.error("Invalid Zeffy form URL:", error);
        window.open("https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-21717", "_blank");
      }
    } else {
      window.open("https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-21717", "_blank");
    }
  };

  return (
    <main>
      <Navigation />

      {/* Hero with Parallax */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url('/hero.png')`,
            y: bgY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        <div className="absolute inset-0 grain pointer-events-none" />

        <motion.div
          className="relative z-10 text-center text-white pt-20 px-6 max-w-4xl mx-auto"
          style={{ opacity: textOpacity }}
        >
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
              <Heart size={14} className="text-accent" />
              <span className="text-sm font-medium text-white/90">100% Tax Deductible</span>
            </div>
          </FadeIn>
          <TextReveal
            text="Your Gift Changes Lives"
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          />
          <FadeIn delay={0.5}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
              100% of your donation goes directly to supporting students. One gift helps learners in the US and abroad.
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <MagneticButton>
              <Button
                onClick={() => handleDonateClick(0, false)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:shadow-accent/25 hover:-translate-y-1 transition-all duration-300"
              >
                Donate Now
              </Button>
            </MagneticButton>
          </FadeIn>
        </motion.div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How Your Donation Helps
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Every dollar creates real impact for students who need it most.
              </p>
            </FadeIn>
          </div>

          <StaggerChildren className="grid md:grid-cols-2 gap-12" staggerDelay={0.1}>
            {[
              { icon: Users, title: "Students in Need", desc: "Partner schools independently select students with documented educational need." },
              { icon: CheckCircle, title: "Direct Services", desc: "Funds provide tutoring, mentorship, enrichment programs, or educational materials." },
              { icon: Globe2, title: "Doubled Impact", desc: "Each U.S. school voucher triggers a matching voucher for a partner school abroad." },
              { icon: Shield, title: "Full Transparency", desc: "We track every voucher. You can see exactly where your donation goes." },
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="flex gap-5 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                  >
                    <item.icon className="text-primary" size={24} />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Amount Impact */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14">
              What Your Gift Provides
            </h2>
          </FadeIn>
          
          <StaggerChildren className="grid sm:grid-cols-3 gap-8" staggerDelay={0.12}>
            {[
              { amount: "$50", impact: "School supplies for 2 students" },
              { amount: "$200", impact: "10 hours of tutoring" },
              { amount: "$1,000", impact: "Full semester of support for multiple students" },
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="bg-background p-10 rounded-3xl shadow-lg shadow-primary/5 border border-border/50 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold text-gradient mb-4">{item.amount}</div>
                  <p className="text-muted-foreground leading-relaxed">{item.impact}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          
          <FadeIn delay={0.3} className="mt-14">
            <MagneticButton>
              <Button
                onClick={() => handleDonateClick(0, false)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-lg font-bold rounded-full shadow-xl transition-all duration-300"
              >
                Give Today
              </Button>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      {/* Fellowship */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex items-center gap-6 mb-8">
              <motion.div
                className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center flex-shrink-0"
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                <GraduationCap size={32} />
              </motion.div>
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-primary-foreground/60">Student Fellowship</span>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Supporting Future Educators
                </h2>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-3xl">
              Your donations also support our Student Fellowship—providing stipends to under-resourced college students while they tutor and mentor younger learners. This creates a sustainable cycle of learning, opportunity, and community development.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tax Info */}
      <section className="py-14 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Global Bright Futures Foundation Inc.</strong> is a 501 nonprofit organization. All donations are tax-deductible to the full extent permitted by law.
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
