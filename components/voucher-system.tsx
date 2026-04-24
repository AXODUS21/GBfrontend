"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { School, BookOpen, Globe, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerChildren, StaggerItem, ScaleIn, MagneticButton } from "@/components/motion"

const steps = [
  {
    icon: School,
    title: "Schools Apply",
    text: "Partner schools identify students with educational need and apply for vouchers.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: BookOpen,
    title: "Services Delivered",
    text: "Students receive tutoring, mentorship, or educational materials through approved vendors.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Globe,
    title: "Global Matching",
    text: "Each U.S. voucher creates a matching voucher for a partner school abroad.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: CheckCircle,
    title: "Transparent Tracking",
    text: "Schools maintain records. We track every voucher for complete accountability.",
    color: "from-violet-500 to-violet-600",
  },
]

export default function VoucherSystem() {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-widest text-primary-foreground/60 mb-3 block">
              Full Accountability
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              Accountability & Transparency
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              We maintain clear, structured oversight to ensure funds are used responsibly and program services are delivered as intended.
            </p>
          </FadeIn>
        </div>

        {/* Steps Grid with connecting lines */}
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" staggerDelay={0.12}>
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <StaggerItem key={idx}>
                <motion.div
                  className="text-center group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step number */}
                  <div className="text-xs font-bold text-primary-foreground/30 mb-3 tracking-widest">
                    STEP {String(idx + 1).padStart(2, "0")}
                  </div>
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-5 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={28} className="text-white" />
                  </motion.div>
                  <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">{step.text}</p>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerChildren>

        {/* Voucher amounts */}
        <ScaleIn>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 text-center border border-white/20 shadow-xl">
            <h3 className="font-bold text-2xl mb-8">Voucher Denominations</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["$500", "$1,000", "$2,000", "$3,000", "Custom"].map((amount, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 + 0.3, duration: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {amount}
                </motion.div>
              ))}
            </div>
            <p className="text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
              Our model uses service-based funding (no cash), applies funds directly to approved services delivered by vetted providers, and tracks outcomes through aggregate reporting with ongoing monitoring for accountability.
            </p>
          </div>
        </ScaleIn>

        {/* CTA */}
        <FadeIn delay={0.2} className="text-center mt-14">
          <MagneticButton>
            <Link href="https://app.globalbrightfutures.org/">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-lg font-bold rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300">
                Apply for Education Support Voucher
              </Button>
            </Link>
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  )
}
