"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FadeIn, StaggerChildren, StaggerItem, MagneticButton } from "@/components/motion"

const features = [
  "Tutoring & academic support",
  "Mentorship programs",
  "Educational materials",
  "STEM enrichment",
]

export default function ProgramFeature() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={sectionRef} className="section-padding bg-background overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            <FadeIn>
              <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3 block">
                How It Works
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                One Gift.
                <br />
                <span className="text-gradient">Two Schools.</span>
                <br />
                Lasting Impact.
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Our unique model pairs U.S. schools with partner schools abroad. Every voucher supports students on both sides—doubling the impact of every donation.
              </p>
            </FadeIn>
            
            <StaggerChildren className="space-y-4 mb-10" staggerDelay={0.1}>
              {features.map((feature, idx) => (
                <StaggerItem key={idx} direction="left">
                  <div className="flex items-center gap-4 group">
                    <motion.div
                      className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <CheckCircle className="text-primary" size={18} />
                    </motion.div>
                    <span className="text-foreground font-medium text-lg">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
            
            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <Link href="/programs">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      Learn More
                    </Button>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/sponsor">
                    <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-base font-bold rounded-full bg-transparent transition-all duration-300">
                      Donate Now
                    </Button>
                  </Link>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
          
          {/* Image with Parallax */}
          <FadeIn direction="right" className="order-1 md:order-2">
            <div className="relative">
              <motion.div style={{ y: imageY }}>
                <Image 
                  src="/2x.png" 
                  alt="Support One, Empower Two" 
                  width={500} 
                  height={500}
                  className="w-full rounded-3xl shadow-2xl shadow-primary/10"
                />
              </motion.div>
              {/* Decorative gradient */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 to-accent/15 rounded-[2rem] -z-10 blur-sm" />
              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full float" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/15 rounded-full float-delayed" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
