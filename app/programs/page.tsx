"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { BookOpen, Code2, Heart, Users, GraduationCap, Package, ArrowRight, School, Globe, CheckCircle, Briefcase, Apple, Handshake, CreditCard, CircleDollarSign, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, TextReveal, StaggerChildren, StaggerItem, MagneticButton, ScaleIn } from "@/components/motion"
import Image from "next/image"


const programCategories = [
  {
    icon: BookOpen,
    title: "Student Learning Support",
    description: "Academic support for student success",
    benefitsTitle: "Programs include:",
    benefits: [
      "Tutoring in core subjects",
      "Academic enrichment and skill-building",
      "Mentoring and learning support",
      "Access to learning resources",
    ],
  },
  {
    icon: Globe,
    title: "Global Learning Partnerships",
    description: "Cross-community education collaboration",
    benefitsTitle: "Programs include:",
    benefits: [
      "School and community partnerships",
      "Support for under-resourced communities",
      "Shared learning programs",
      "Regional and international collaboration",
    ],
  },
  {
    icon: Briefcase,
    title: "Workforce & Career Readiness Pathways",
    description: "Education-to-workforce development support",
    benefitsTitle: "Programs include:",
    benefits: [
      "Tutoring and education support roles (via approved providers)",
      "Leadership and skills development",
      "Career readiness programs",
      "Education-sector experience pathways",
    ],
    footer: "📌 Scholarships, tuition assistance, and fellowships may be available based on funding and eligibility and are administered through approved partners only. No direct cash assistance is provided.",
  },
  {
    icon: Apple,
    title: "Educator Development Pathways",
    description: "Support for educators and future educators",
    benefitsTitle: "Programs include:",
    benefits: [
      "Professional training and development",
      "Tutoring and instructional roles",
      "Mentorship programs",
      "Career transition support",
      "Burnout recovery and re-entry pathways",
    ],
  },
]

const accessPathways = [
  {
    icon: CircleDollarSign,
    title: "Subsidized Programs",
    description: "Reduced-cost services",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Fully Funded Programs",
    description: "No-cost access when funded",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: School,
    title: "School-Based Access",
    description: "Delivered through partner schools",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Globe,
    title: "Community Access",
    description: "Delivered through organizations",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Handshake,
    title: "Sponsored Access",
    description: "Fully funded by partners",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: BarChart3,
    title: "Priority Access",
    description: "Based on demonstrated need",
    color: "from-amber-500 to-amber-600",
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
                Education Access & Workforce Development Program
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="prose prose-lg max-w-none text-foreground/70 text-center space-y-8 mb-16">
              <p className="text-xl leading-relaxed">
                The program expands access to academic support, educator development, and workforce readiness through structured partnerships with schools, community organizations, and approved education providers.
              </p>
              <p className="text-xl leading-relaxed">
                All services are delivered through vetted partners under a service-based funding and accountability framework.
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
                    Educational opportunity is often determined by access to <span className="text-foreground font-semibold">consistent academic support</span> and structured learning pathways.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:border-primary/20 transition-colors duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-accent" size={24} />
                  </div>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center md:text-left">
                    At the same time, many educators, college students, and emerging professionals lack <span className="text-foreground font-semibold">structured opportunities</span> to apply their skills in meaningful education settings.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.6} direction="up">
                <div className="mt-4 p-8 md:p-10 rounded-3xl bg-primary text-primary-foreground text-center shadow-xl shadow-primary/10">
                  <p className="text-xl md:text-2xl font-bold leading-tight">
                    This program addresses both challenges through a coordinated system that connects learners with academic support and creates workforce-aligned education opportunities.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>


      {/* Programs Offered */}
      <section className="section-padding bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Program Impact Areas</h2>
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
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[center_top_-1px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">How the Program Works</h2>
              <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8" />
              <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
                Global Bright Futures Foundation operates through a structured, partner-based delivery model connecting schools, educators, students, and vetted providers.
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-blue-500 via-primary to-amber-500 opacity-20" />

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10" staggerDelay={0.15}>
              {[
                {
                  icon: Users,
                  title: "Partner Identification",
                  description: "Schools and community partners identify student and program needs.",
                  color: "bg-blue-500"
                },
                {
                  icon: CreditCard,
                  title: "Service-Based Allocation",
                  description: "Support is allocated through service-based funding for approved educational services delivered by vetted providers. No cash is distributed.",
                  color: "bg-indigo-500"
                },
                {
                  icon: GraduationCap,
                  title: "Service Delivery",
                  description: "Approved providers deliver tutoring, mentoring, and enrichment programs.",
                  color: "bg-primary"
                },
                {
                  icon: Handshake,
                  title: "Participant Engagement",
                  description: "Students, youth, and educators engage in structured learning and workforce pathways.",
                  color: "bg-emerald-500"
                },
                {
                  icon: CheckCircle,
                  title: "Monitoring & Reporting",
                  description: "Program outcomes are tracked through structured reporting systems for accountability and improvement.",
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

                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors min-h-[3rem] flex items-center justify-center px-2">
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

      {/* Program Access Pathways */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Program Access Pathways</h2>
              <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-8" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                We provide structured access to educational programs through multiple pathways based on funding, eligibility, and partner alignment.
              </p>
            </FadeIn>
          </div>

          {/* Pathways Grid */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20" staggerDelay={0.05}>
            {accessPathways.map((pathway, idx) => {
              const Icon = pathway.icon
              return (
                <StaggerItem key={idx}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full flex items-start gap-5 group"
                    whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.2)" }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${pathway.color} rounded-xl flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{pathway.title}</h3>
                      <p className="text-primary-foreground/70 text-base leading-relaxed">
                        {pathway.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerChildren>

          {/* Voucher System Card */}
          <ScaleIn>
            <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 border border-white/20 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32" />

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8">Voucher-Based Support Model</h3>
                  <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                    Where applicable, support may be structured through education service vouchers ranging from <span className="text-accent font-bold">$500–$3,000</span> or custom allocations.
                  </p>
                </div>

                <div className="space-y-6 bg-white/5 p-8 md:p-10 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                  <p className="font-bold text-xl mb-2">These represent service value only and are:</p>
                  <ul className="space-y-4">
                    {[
                      "non-cash",
                      "non-transferable",
                      "restricted to approved providers"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4 group/item">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 group-hover/item:bg-accent/40 transition-colors">
                          <CheckCircle className="text-accent" size={20} />
                        </div>
                        <span className="text-lg md:text-xl font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScaleIn>

          {/* CTA Button */}
          <FadeIn delay={0.2} className="text-center mt-20">
            <MagneticButton>
              <Link href="https://app.globalbrightfutures.org/">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-8 text-xl font-extrabold rounded-full shadow-[0_20px_50px_rgba(245,158,11,0.3)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 active:scale-95">
                  Apply for Education Support Voucher
                </Button>
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Outcomes</h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                Our model supports a multi-stakeholder impact system:
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {[
              {
                icon: GraduationCap,
                title: "Students",
                description: "Tutoring, mentoring, and academic support that builds confidence and improves learning outcomes.",
                color: "text-blue-500",
                bg: "bg-blue-500/10"
              },
              {
                icon: Users,
                title: "Tutors & Educators",
                description: "Paid and structured opportunities for college students, graduates, and educators to gain experience and develop professional skills.",
                color: "text-indigo-500",
                bg: "bg-indigo-500/10"
              },
              {
                icon: School,
                title: "Partner Schools",
                description: "Expanded academic support services without increasing school staffing costs.",
                color: "text-amber-500",
                bg: "bg-amber-500/10"
              },
              {
                icon: Globe,
                title: "Families & Communities",
                description: "Improved access to learning support that strengthens educational engagement and long-term opportunity.",
                color: "text-emerald-500",
                bg: "bg-emerald-500/10"
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

      {/* Partnership Network */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[center_top_-1px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Partnership Network</h2>
              <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8" />
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                We work with:
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" staggerDelay={0.1}>
            {[
              "Schools and educational institutions",
              "Under-resourced communities globally",
              "Community and nonprofit organizations",
              "Education service providers",
              "Funding partners and sponsors"
            ].map((partner, idx) => (
              <StaggerItem key={idx}>
                <div className="flex items-center gap-4 bg-secondary/40 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle size={24} className="text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-foreground/80 leading-tight">{partner}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.6}>
            <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-8 text-center relative overflow-hidden group max-w-4xl mx-auto">
               <div className="absolute top-0 left-0 w-2 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
               <p className="text-lg md:text-xl italic text-foreground/70 leading-relaxed">
                All partners are vetted for quality, compliance, and delivery standards.
              </p>
            </div>
          </FadeIn>
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
