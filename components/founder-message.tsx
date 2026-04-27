"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FadeIn, DrawLine } from "@/components/motion"

export default function FounderMessage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const decorScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <section className="section-padding bg-secondary/50 relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image with Parallax */}
          <FadeIn direction="left" className="relative">
            <motion.div
              className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10"
              style={{ y: imageY }}
            >
              <Image
                src="/ilyne.jpg"
                alt="Ilyne Cendy Root, Founder"
                fill
                className="object-cover"
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
            
            {/* Decorative elements with scroll animation */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-36 h-36 bg-accent/15 rounded-full -z-10"
              style={{ scale: decorScale }}
            />
            <motion.div
              className="absolute -top-8 -left-8 w-28 h-28 bg-primary/10 rounded-full -z-10 float"
              style={{ scale: decorScale }}
            />
            {/* Small accent dot */}
            <div className="absolute top-4 right-4 w-4 h-4 bg-accent rounded-full float-delayed" />
          </FadeIn>
          
          {/* Content */}
          <div>
            <FadeIn direction="right">
              <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3 block">
                A Message from Our Founder
              </span>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                <span className="text-primary">“</span>Education has the power to change lives and open access to opportunity.<span className="text-primary">”</span>
              </h2>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg italic border-l-4 border-primary/20 pl-6 mb-8">
                <p>
                  Global Bright Futures Foundation was created to expand educational support through structured partnerships that connect students with tutoring, mentorship, and essential learning resources.
                </p>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Through collaboration with schools and education partners, our programs help expand access to learning opportunities for students who need additional academic support.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.3}>
              <div className="mt-10">
                <DrawLine className="w-16 h-0.5 bg-accent mb-6" />
                <p className="font-bold text-foreground text-xl">Ilyne Cendy Root</p>
                <p className="text-muted-foreground mt-1">Founder & President</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
