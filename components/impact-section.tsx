"use client"

import { FadeIn, StaggerChildren, StaggerItem, CountUp, DrawLine } from "@/components/motion"

const stats = [
  { value: 2, suffix: "x", label: "Impact Per Donation", description: "Every voucher helps students in the US and abroad" },
  { value: 100, suffix: "%", label: "Tax Deductible", description: "501(c)(3) nonprofit organization" },
  { value: 10, suffix: "+", label: "Hours of Tutoring", description: "Per $200 voucher allocated" },
]

export default function ImpactSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3 block">
              Our Reach
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Our Impact in Numbers
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every donation creates real, measurable change for students around the world.
            </p>
          </FadeIn>
          <DrawLine className="w-16 h-0.5 bg-accent mx-auto mt-8" delay={0.4} />
        </div>
        
        <StaggerChildren className="grid md:grid-cols-3 gap-12 md:gap-8" staggerDelay={0.15}>
          {stats.map((stat, idx) => (
            <StaggerItem key={idx}>
              <div className="text-center group">
                <div className="relative inline-block mb-4">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary"
                  />
                  {/* Subtle glow behind number */}
                  <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mt-4 mb-3">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
