"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { BookOpen, Code2, Heart, Users, GraduationCap, Package, ArrowRight, School, Globe, CheckCircle, Briefcase, Apple, Handshake, CreditCard } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, TextReveal, StaggerChildren, StaggerItem, MagneticButton } from "@/components/motion"
import Image from "next/image"


const programCategories = [
  {
    icon: BookOpen,
    title: "For Students",
    description: "We deliver focused academic support designed to help students improve performance and build confidence in their learning.",
    benefitsTitle: "Students receive:",
    benefits: [
      "One-on-one and small group tutoring",
      "Support in reading, math, and core subjects",
      "Academic mentoring and confidence-building",
      "Access to structured online learning resources",
    ],
    footer: "Partner schools and community programs identify students with the greatest need, ensuring support is delivered equitably and effectively.",
  },
  {
    icon: Globe,
    title: "Global Learning Connections",
    description: "Our impact extends beyond a single community. For every group of students supported in the United States, we expand access to students in under-resourced communities abroad.",
    benefitsTitle: "This approach allows us to:",
    benefits: [
      "Increase access to education across regions",
      "Encourage shared learning and cultural exchange",
      "Strengthen global education support systems",
    ],
  },
  {
    icon: Briefcase,
    title: "For Youth & College Tutors",
    description: "We provide meaningful opportunities for students and graduates to gain experience while supporting others.",
    benefitsTitle: "Participants receive:",
    benefits: [
      "Paid tutoring opportunities",
      "Hands-on teaching and leadership experience",
      "Career readiness and professional skill development",
      "Flexible work that supports their education goals",
    ],
  },
  {
    icon: Apple,
    title: "For Educators",
    description: "We support educators throughout their professional journey.",
    benefitsTitle: "Our program offers:",
    benefits: [
      "Training and classroom readiness support",
      "Flexible, paid tutoring opportunities",
      "Mentorship and ongoing professional development",
      "Support pathways for educators navigating burnout or career transitions",
    ],
  },
]

export default function ProgramsPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-accent/60 text-primary-foreground py-20 md:py-28 relative overflow-hidden gradient-animate">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.05] rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-widest text-primary-foreground/50 mb-4 block">
              Our Programs
            </span>
          </FadeIn>
          <TextReveal
            text="Breaking barriers to learning—empowering students, educators, and future leaders.
"
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          />
        </div>
      </section>

      {/* Support One, Empower Two */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[center_top_-1px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Support One, Empower Two™
              </h2>
              <p className="text-xl md:text-2xl font-medium text-foreground/80">
                Education Access & Workforce Pathways Program
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.2}>
            <div className="prose prose-lg max-w-none text-foreground/70 text-center space-y-8 mb-16">
              <p className="text-xl leading-relaxed">
                The Support One, Empower Two™ program expands access to quality education while creating meaningful opportunities for tutors and educators.
              </p>
              <p className="text-xl leading-relaxed">
                Through a flexible online model, we connect students, schools, vendors and mentors to deliver personalized learning support where it’s needed most.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-background rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl">
                <Image
                  src="/program.png"
                  alt="Support One, Empower Two Program"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* Programs Offered */}
      <section className="section-padding bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Programs Offered</h2>
              <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
            </div>
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 gap-8" staggerDelay={0.1}>
            {programCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="h-full"
                  >
                    <Card className="border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full bg-background/80 backdrop-blur-sm overflow-hidden flex flex-col">
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4 mb-2">
                          <motion.div
                            className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0"
                            whileHover={{ rotate: 10, scale: 1.1 }}
                          >
                            <Icon className="text-primary" size={28} />
                          </motion.div>
                          <CardTitle className="text-2xl font-bold text-foreground leading-tight">
                            {category.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col gap-6">
                        <p className="text-foreground/70 text-lg leading-relaxed">
                          {category.description}
                        </p>
                        
                        <div className="space-y-4">
                          <h4 className="font-bold text-primary flex items-center gap-2 uppercase tracking-wider text-xs">
                            <CheckCircle size={14} />
                            {category.benefitsTitle}
                          </h4>
                          <ul className="space-y-3">
                            {category.benefits.map((benefit, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-3 text-foreground/80 group">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors flex-shrink-0" />
                                <span className="leading-snug">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {category.footer && (
                          <div className="mt-auto pt-6 border-t border-border/50 italic text-foreground/60 text-sm leading-relaxed">
                            {category.footer}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* How the Program Works */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">How the Program Works</h2>
              <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
            </div>
          </FadeIn>
          
          {/* Steps Wrapper */}
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500 via-primary to-amber-500 opacity-20" />
            
            <StaggerChildren className="grid md:grid-cols-4 gap-8 relative z-10" staggerDelay={0.15}>
              {[
                { 
                  icon: School, 
                  title: "Schools Partner With GBFF", 
                  description: "Schools identify students who need academic support",
                  color: "bg-blue-500" 
                },
                { 
                  icon: CreditCard, 
                  title: "Funding Support Is Applied", 
                  description: "GBFF provides Education Support Voucher Credits (service-based)",
                  color: "bg-indigo-500" 
                },
                { 
                  icon: Handshake, 
                  title: "Instruction Is Delivered", 
                  description: "Services are provided through our approved partner",
                  color: "bg-primary" 
                },
                { 
                  icon: GraduationCap, 
                  title: "Students Receive Support", 
                  description: "Tutoring, enrichment, and mentorship programs are delivered",
                  color: "bg-amber-500" 
                },
              ].map((step, idx) => (
                <StaggerItem key={idx}>
                  <div className="text-center group">
                    <motion.div
                      className={`${step.color} text-white rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-xl relative`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-background border-2 border-border rounded-full flex items-center justify-center text-xs font-bold text-foreground shadow-sm">
                        {idx + 1}
                      </div>
                      <step.icon size={40} />
                    </motion.div>
                    
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed px-2">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Our Results */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Results</h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                Our model creates a triple impact across the educational ecosystem.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
            {[
              {
                icon: BookOpen,
                title: "For Students",
                description: "Students receive the support they need to succeed",
                color: "text-blue-500",
                bg: "bg-blue-500/10"
              },
              {
                icon: Briefcase,
                title: "For Tutors",
                description: "Tutors gain experience, income and build their future",
                color: "text-indigo-500",
                bg: "bg-indigo-500/10"
              },
              {
                icon: Apple,
                title: "For Educators",
                description: "Educators stay inspired, supported and engaged",
                color: "text-amber-500",
                bg: "bg-amber-500/10"
              },
            ].map((result, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-background rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 text-center group h-full flex flex-col items-center">
                  <div className={`${result.bg} ${result.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <result.icon size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{result.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {result.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">Frequently Asked Questions</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="what-are-voucher-credits" className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  What are Education Support Voucher Credits?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 text-foreground/60">
                    <p>
                      Global Bright Futures Foundation Inc. provides Tutoring Service Credits (Voucher Credits), a nonprofit-supported funding mechanism designed to help schools expand access to academic support services at reduced cost.
                    </p>
                    <p>These credits:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Are applied directly to approved tutoring services</li>
                      <li>Are delivered through approved vendors</li>
                      <li>Are used for tutoring, enrichment, and intervention programs</li>
                      <li>Are not redeemable as cash or transferable funds</li>
                    </ul>
                    <p>Schools may use these credits to expand:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Academic tutoring</li>
                      <li>Intervention support</li>
                      <li>Enrichment programs</li>
                      <li>Summer and after-school learning</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-schools-use" className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  How do schools use Voucher Credits?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 text-foreground/60">
                    <p>
                      Voucher Credits are applied directly toward instructional services provided through our approved education partner, Smart Brain TLC Inc. or other approved vendor.
                    </p>
                    <p>
                      Schools determine student eligibility and program participation, while Global Bright Futures Foundation Inc. supports cost reduction, coordination, and program expansion through nonprofit funding mechanisms.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="are-they-free" className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  Are Voucher Credits free or do schools pay for them?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 text-foreground/60">
                    <p>
                      Global Bright Futures Foundation Inc. offers Tutoring Service Credits (Voucher Credits) in two formats:
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Fully Funded (Grant-Supported Credits)</h4>
                      <p>
                        Some Voucher Credits are fully funded through nonprofit or grant support. These are provided at no cost to schools and are used to expand tutoring, intervention, enrichment, and learning support services.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Cost-Shared (Subsidized Model)</h4>
                      <p>
                        Some Voucher Credits are partially subsidized. In this model, Global Bright Futures Foundation Inc. reduces the overall service cost through nonprofit support, while the school contributes a portion of the funding.
                      </p>
                    </div>
                    <p>This model allows schools to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Expand services within existing budgets</li>
                      <li>Serve more students</li>
                      <li>Access higher levels of tutoring support at reduced rates</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-used" className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  How Voucher Credits Are Used?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 text-foreground/60">
                    <p>All Voucher Credits:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Are applied directly to approved tutoring or educational services</li>
                      <li>Are delivered through Smart Brain TLC Inc.</li>
                      <li>Are used for tutoring, enrichment, and intervention programs</li>
                      <li>Are not redeemable as cash or transferable funds</li>
                    </ul>
                    <p>Schools use credits for:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Academic tutoring</li>
                      <li>Intervention support</li>
                      <li>Enrichment programs</li>
                      <li>Summer and after-school learning</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="why-different-types" className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  Why are there different types of Voucher Credits?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 text-foreground/60">
                    <p>Different credit types allow schools to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Access fully funded support when grant funding is available</li>
                      <li>Use cost-shared options when expanding beyond available funding</li>
                      <li>Scale services gradually and sustainably based on student need</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="global-programs" className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  Do you support global programs?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 text-foreground/60">
                    <p>
                      Yes. For every U.S. school supported, we extend services to a partner school in an under-resourced community.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
