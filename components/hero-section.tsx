"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FadeIn, TextReveal, MagneticButton } from "@/components/motion"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: bgY }}
      >
        <Image
          src="/hero.png"
          alt="Global Bright Futures Foundation Hero"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

      {/* Grain texture */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-[10%] w-2 h-2 bg-accent/40 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-[15%] w-3 h-3 bg-primary-foreground/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 bg-accent/30 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-[60%] right-[25%] w-2 h-2 bg-white/15 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center text-white pt-20"
        style={{ y: textY, opacity, scale }}
      >
        {/* Overline badge */}
        <FadeIn delay={0.2}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/90 tracking-wide">
              Official 501(c)(3) Nonprofit Advocacy
            </span>
          </div>
        </FadeIn>

        <TextReveal
          text="Empowering Global Education with a 3-Way Impact Model"
          as="h1"
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.05] tracking-tight"
        />
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton>
              <Link href="/sponsor">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-lg font-bold rounded-full shadow-2xl hover:shadow-accent/25 hover:-translate-y-1 transition-all duration-300 border border-accent/20">
                  Donate Now and Apply for Support
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/programs">
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-7 text-lg font-medium rounded-full bg-white/5 backdrop-blur-sm transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </MagneticButton>
          </div>
        </FadeIn>


      </motion.div>
    </section>
  )
}
