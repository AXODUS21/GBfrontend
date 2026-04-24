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
  BookOpen,
  Briefcase,
  School,
} from "lucide-react";
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
              Every donation goes directly toward student tutoring and support, while also creating opportunities for youth tutors and educators. One gift impacts learners in the U.S. and globally.
            </p>
          </FadeIn>
          <FadeIn delay={0.7} className="w-full max-w-2xl mx-auto mt-4">
            <div className="relative overflow-hidden h-[600px] w-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
              <iframe 
                title='Donation form powered by Zeffy' 
                className="absolute inset-0 w-full h-full border-0"
                src='https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-21717' 
                allowPaymentRequest 
                allowTransparency={true}
                scrolling="no"
              />
            </div>
          </FadeIn>
        </motion.div>
      </section>

      {/* Why This Matters */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why This Matters
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Addressing the gap between student support and educator opportunities.
              </p>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              <FadeIn delay={0.2} direction="up">
                <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:border-primary/20 transition-colors duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="text-primary" size={24} />
                  </div>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center md:text-left">
                    Many students fall behind not because of ability—but because they <span className="text-foreground font-semibold">lack support.</span>
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:border-primary/20 transition-colors duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-accent" size={24} />
                  </div>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center md:text-left">
                    At the same time, many aspiring educators and graduates <span className="text-foreground font-semibold">lack opportunities.</span>
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.6} direction="up">
                <div className="mt-4 p-8 md:p-10 rounded-3xl bg-primary text-primary-foreground text-center shadow-xl shadow-primary/10">
                  <p className="text-xl md:text-2xl font-bold leading-tight">
                    We bring both together to create a stronger, more connected learning system.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* Donation Impact */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Donation Changes Lives
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Your contribution helps solve all these challenges through one integrated program.
              </p>
            </FadeIn>
          </div>

          <StaggerChildren className="grid md:grid-cols-2 gap-12" staggerDelay={0.1}>
            {[
              { 
                icon: BookOpen, 
                title: "For Students", 
                desc: "Your support helps students succeed by providing tutoring in reading and math, mentoring, and access to learning resources that build confidence." 
              },
              { 
                icon: Briefcase, 
                title: "For Tutors and Educators", 
                desc: "Your support creates paid opportunities for college students, graduates, and educators to gain experience, build skills, and grow in their careers." 
              },
              { 
                icon: School, 
                title: "For Partner Schools", 
                desc: "Your support helps schools serve more students without adding costs by expanding tutoring and academic programs where they are needed most." 
              },
              { 
                icon: Users, 
                title: "For Families and Communities", 
                desc: "Your support makes learning more accessible, keeps students engaged, and strengthens families and communities through better education opportunities." 
              },
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
              { amount: "$200", impact: "Our model uses service-based funding (no cash), applies funds directly to approved services." },
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

      {/* Brighter Futures */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight max-w-6xl mx-auto">
              Every contribution large or small helps open doors to learning, opportunity, and brighter futures.
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* Tax Info */}
      <section className="py-14 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Global Bright Futures Foundation Inc.</strong> is a 501(c)(3) nonprofit organization (EIN: 41-2810962). All donations are tax-deductible to the full extent permitted by law.
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
