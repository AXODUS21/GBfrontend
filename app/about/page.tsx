"use client"

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { Users, Target, Shield } from "lucide-react";
import { BoardMember } from "@/components/board-member";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn, StaggerChildren, StaggerItem, TextReveal, DrawLine, ScaleIn, MagneticButton } from "@/components/motion";

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main>
      <Navigation />

      {/* Hero with Parallax */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url('/hero.png')`,
            y: bgY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        <div className="absolute inset-0 grain pointer-events-none" />

        <motion.div
          className="relative z-10 text-center text-white pt-20 px-6"
          style={{ opacity: textOpacity }}
        >
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-widest text-white/60 mb-4 block">
              Our Story
            </span>
          </FadeIn>
          <TextReveal
            text="About Us"
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          />
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Empowering students locally and globally through school-to-school partnerships.
            </p>
          </FadeIn>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20">
            <FadeIn direction="left">
              <div>
                <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3 block">Our Mission</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                  Expanding Access to Education
                </h2>
                <DrawLine className="w-12 h-0.5 bg-accent mb-6" />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Global Bright Futures Foundation empowers underserved learners by expanding access to scholarships, tutoring, mentorship, and innovative educational programs that foster academic growth, opportunity, and lifelong success—locally and globally.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div>
                <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3 block">Our Vision</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                  Education Without Borders
                </h2>
                <DrawLine className="w-12 h-0.5 bg-accent mb-6" delay={0.15} />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  We envision a world where every learner regardless of income, location, or circumstance has access to meaningful, high-quality education pathways that unlock potential and create lasting opportunity across generations.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                The principles that guide everything we do.
              </p>
            </FadeIn>
          </div>
          
          <StaggerChildren className="grid md:grid-cols-3 gap-12" staggerDelay={0.12}>
            {[
              { icon: Target, title: "Equity", desc: "Every student deserves access to quality education regardless of their circumstances." },
              { icon: Users, title: "Partnership", desc: "We collaborate with schools and communities for sustainable, impactful solutions." },
              { icon: Shield, title: "Accountability", desc: "Transparent, audit-ready operations with full IRS compliance." },
            ].map((value, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="text-center group"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <value.icon className="text-primary" size={32} />
                  </motion.div>
                  <h3 className="font-bold text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Leadership and Governance
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                Leadership and governance ensure responsible oversight of programs, partnerships, and organizational operations.
              </p>
              <Link
                href="/board-of-directors"
                className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
              >
                View Full Leadership →
              </Link>
            </FadeIn>
          </div>
          
          <div className="space-y-8">
            <FadeIn>
              <BoardMember
                name="Ilyne Cendy Root"
                title="Founder & President"
                shortDescription="Ilyne Cendy Root is an education professional and nonprofit executive with experience in instructional leadership, program development, and cross-cultural education initiatives."
                fullDescription="Ilyne Cendy Root is an education professional and nonprofit executive with experience in instructional leadership, program development, and cross-cultural education initiatives across the Philippines, Thailand, and the United States. Her focus includes building ethical, school-aligned partnerships and ensuring that all programs operate under structured, transparent, and accountable systems."
                imageSrc="/ilyne.jpg"
                imageAlt="Ilyne Cendy Root"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <BoardMember
                name="Joseph Root"
                title="Vice President"
                shortDescription="Joseph Root provides executive and operational leadership, supporting organizational planning, program coordination, and partnership development."
                fullDescription="Joseph Root provides executive and operational leadership for Global Bright Futures Foundation Inc., supporting organizational planning, program coordination, and partnership development. He works closely with executive leadership to ensure effective program implementation, compliance alignment, and operational consistency across initiatives."
                imageSrc="/joseph.jpg"
                imageAlt="Joseph Root"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Accountability & Transparency
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto text-center">
              We maintain clear, structured oversight to ensure funds are used responsibly and program services are delivered as intended.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.15}>
            <div className="flex justify-center mb-10">
              <motion.a
                href="https://app.candid.org/profile/16509371/global-bright-futures-foundation-inc-41-2810962/?pkId=0b067e55-2a04-462c-8f3f-fc2e3d05c211"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-48 bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="https://widgets.guidestar.org/prod/v1/pdp/transparency-seal/16509371/svg" 
                  alt="Candid/GuideStar Transparency Seal"
                  className="w-full h-auto"
                />
              </motion.a>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton>
                <button className="bg-primary-foreground text-primary px-8 py-4 rounded-full font-bold hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg">
                  Download Form 990
                </button>
              </MagneticButton>
              <MagneticButton>
                <button className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300">
                  Annual Report
                </button>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
