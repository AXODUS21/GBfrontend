"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { BookOpen, Code2, Heart, Users, GraduationCap, Package, ArrowRight, School, Globe, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, TextReveal, StaggerChildren, StaggerItem, MagneticButton } from "@/components/motion"

const programs = [
  {
    icon: BookOpen,
    title: "Scholarships",
    description: "Academic and mentorship support for selected students",
  },
  {
    icon: GraduationCap,
    title: "Student College and youth Fellowship",
    description: "College students mentor younger learners while completing their education",
  },
  {
    icon: Heart,
    title: "Community Mentorship",
    description: "SEL, leadership, and personal development",
  },
  {
    icon: Code2,
    title: "Outreach Initiatives",
    description: "STEM, coding, and digital literacy",
  },
  {
    icon: Package,
    title: "Educational Materials & School Supplies",
    description: "Vouchers fund essential learning resources",
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
            text="Breaking Barriers to Learning, One Student at a Time"
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          />
        </div>
      </section>

      {/* Support One, Empower Two */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Support One, Empower Two: Education Access Program
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="prose prose-lg max-w-none text-foreground/70 space-y-6">
              <p>
                The Support One, Empower Two: Education Access Program is Global Bright Futures Foundation Inc.&apos;s flagship charitable initiative designed to expand equitable access to education for students facing financial and systemic barriers to learning.
              </p>
              <p>
                Through school-driven partnerships, the program provides education access support in the form of tutoring, academic mentoring, educational materials, school supplies, technology-supported learning resources, and student enrichment services. Participating schools independently identify students with the greatest educational need and oversee program participation, ensuring assistance is distributed fairly, transparently, and in alignment with charitable guidelines.
              </p>
              <p>
                Each grant or donation issued to a participating U.S. school is paired with a parallel education access award to a partner school serving students in under-resourced communities abroad. Both schools independently select their students and maintain records of program use, allowing the Foundation to support education access at two sites while preserving accountability and compliance.
              </p>
              <p>
                The program also incorporates a Student Fellowship Program, through which under-resourced college students receive educational training, mentorship experience, and academic support while providing tutoring and learning assistance to younger students. This service-based model strengthens educational outcomes for both groups and promotes college completion, workforce readiness, and leadership development.
              </p>
              <p>
                By addressing academic support, learning resources, and mentorship together, Support One, Empower Two creates a sustainable cycle of learning that benefits students, schools, and communities locally and globally.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">Programs Offered</h2>
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {programs.map((program, idx) => {
              const Icon = program.icon
              return (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full bg-background">
                      <CardHeader>
                        <motion.div
                          className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4"
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="text-primary" size={26} />
                        </motion.div>
                        <CardTitle className="text-foreground text-xl">{program.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/60 leading-relaxed">{program.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Voucher Flow Diagram */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">How the Program Works</h2>
          </FadeIn>
          
          {/* Desktop Flow */}
          <div className="hidden md:block">
            <StaggerChildren className="flex items-center justify-between gap-4 mb-8" staggerDelay={0.15}>
              {[
                { icon: School, label: "U.S. School Voucher", color: "bg-blue-500" },
                { icon: Users, label: "Independent Selection", color: "bg-emerald-500" },
                { icon: Globe, label: "International School Voucher", color: "bg-orange-500" },
                { icon: Users, label: "Independent Selection", color: "bg-emerald-500" },
                { icon: CheckCircle, label: "Tutoring / Mentorship OR Educational Materials Delivered", color: "bg-amber-500" },
              ].map((step, idx, arr) => (
                <StaggerItem key={idx} className="flex-1 flex items-center gap-4">
                  <div className="text-center flex-1">
                    <motion.div
                      className={`${step.color} text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <step.icon size={28} />
                    </motion.div>
                    <Card className="border-border/50 bg-background">
                      <CardHeader className="p-4">
                        <CardTitle className="text-xs text-foreground leading-tight">{step.label}</CardTitle>
                      </CardHeader>
                    </Card>
                  </div>
                  {idx < arr.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.3 }}
                    >
                      <ArrowRight className="text-primary flex-shrink-0" size={24} />
                    </motion.div>
                  )}
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

          {/* Mobile Flow */}
          <div className="md:hidden">
            <StaggerChildren className="space-y-4" staggerDelay={0.1}>
              {[
                { icon: School, label: "U.S. School Voucher", color: "bg-blue-500" },
                { icon: Users, label: "Independent Selection", color: "bg-emerald-500" },
                { icon: Globe, label: "International School Voucher", color: "bg-orange-500" },
                { icon: Users, label: "Independent Selection", color: "bg-emerald-500" },
                { icon: CheckCircle, label: "Tutoring / Mentorship OR Educational Materials Delivered", color: "bg-amber-500" },
              ].map((step, idx, arr) => (
                <StaggerItem key={idx}>
                  <div className="flex items-center gap-4">
                    <div className={`${step.color} text-white rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <step.icon size={24} />
                    </div>
                    <Card className="border-border/50 flex-1 bg-background">
                      <CardHeader className="p-4">
                        <CardTitle className="text-sm text-foreground">{step.label}</CardTitle>
                      </CardHeader>
                    </Card>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowRight className="text-primary/40 rotate-90" size={20} />
                    </div>
                  )}
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
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
              <AccordionItem value="how-schools-apply" className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  How schools apply
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 text-foreground/60">
                    <p>
                      Schools interested in participating in the Support One, Empower Two program can apply by submitting a comprehensive application that includes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>School information and eligibility documentation</li>
                      <li>Description of student selection process and criteria</li>
                      <li>Plan for voucher distribution and usage tracking</li>
                      <li>Commitment to maintain audit-ready records</li>
                    </ul>
                    <p>
                      Applications are reviewed by our team to ensure alignment with charitable guidelines and program objectives. Upon approval, schools receive vouchers paired with a partner school abroad, and both schools independently select their students based on demonstrated need.
                    </p>
                    <div className="pt-4">
                      <Link href="/contact">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-full">
                          Contact Us to Apply
                        </Button>
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-vouchers-paired" className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  How vouchers are paired
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 text-foreground/60">
                    <p>
                      Each grant or donation issued to a participating U.S. school is automatically paired with a parallel education access award to a partner school serving students in under-resourced communities abroad.
                    </p>
                    <p>
                      The Foundation maintains partnerships with schools internationally that share our commitment to equitable education access. When a U.S. school receives a voucher, we coordinate with a partner school abroad to issue a matching voucher of equivalent value.
                    </p>
                    <p>
                      Both schools operate independently—they select their own students based on educational need, manage voucher distribution, and maintain separate records. This dual-site model ensures that every donation creates impact in two locations while maintaining full compliance with charitable guidelines and IRS requirements.
                    </p>
                    <p>
                      The pairing process is managed entirely by the Foundation, and schools are notified of their international partner school upon voucher issuance.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="record-keeping" className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  Record-keeping and audit guidance
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 text-foreground/60">
                    <p>
                      Schools maintain full records of voucher usage, student selection, sessions, and program outcomes for IRS audits and donor reporting. This documentation is essential for compliance and transparency.
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Required Documentation:</h4>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Student Selection Documentation:</strong> Records demonstrating how students were independently selected based on educational need</li>
                        <li><strong>Voucher Redemption Records:</strong> Detailed logs of how vouchers were used and distributed</li>
                        <li><strong>Session Attendance Logs:</strong> For tutoring and mentorship programs, maintain attendance records</li>
                        <li><strong>Program Outcomes & Impact Data:</strong> Documentation of student progress and program effectiveness</li>
                        <li><strong>Vendor/Provider Records:</strong> Information about approved educational service providers used</li>
                      </ul>
                    </div>
                    <p>
                      The Foundation provides templates and guidance to streamline this process. All records must be maintained for a minimum of seven years for audit purposes and should be readily available upon request.
                    </p>
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-4">
                      <p className="text-sm">
                        <strong>Important:</strong> Schools must never share student selection records with donors, as this would violate IRS charitable guidelines. All student selection and voucher allocation decisions are made independently by schools.
                      </p>
                    </div>
                    <div className="pt-4">
                      <Link href="/partnerships">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-full">
                          Download Record-Keeping Templates
                        </Button>
                      </Link>
                    </div>
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
