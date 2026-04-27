"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone, MapPin, Facebook } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FadeIn, TextReveal, StaggerChildren, StaggerItem } from "@/components/motion"
import { SmartIntakeHeroCard } from "@/components/smart-intake-form"

export default function ContactPage() {

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-accent/60 text-primary-foreground py-20 md:py-28 relative overflow-hidden gradient-animate">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.05] rounded-full blur-3xl translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-widest text-primary-foreground/50 mb-4 block">
              Reach Out
            </span>
          </FadeIn>
          <TextReveal
            text="Get in Touch"
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          />
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
              Have questions? We&apos;d love to hear from you. Reach out to our team.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information Cards */}
          <StaggerChildren className="grid md:grid-cols-3 gap-6 mb-20" staggerDelay={0.1}>
            {[
              {
                icon: Mail,
                title: "Email",
                content: (
                  <>
                    <a href="mailto:info@globalbrightfutures.org" className="text-primary hover:underline text-foreground/60">
                      info@globalbrightfutures.org
                    </a>
                    <p className="text-foreground/50 text-sm mt-2">We respond within 24 hours</p>
                  </>
                ),
              },
              {
                icon: Phone,
                title: "Phone",
                content: (
                  <>
                    <a href="tel:8186392006" className="text-primary hover:underline text-foreground/60">
                      818 639 2006
                    </a>
                    <p className="text-foreground/50 text-sm mt-2">Mon-Fri, 9 AM - 6 PM PT</p>
                  </>
                ),
              },
              {
                icon: MapPin,
                title: "Mailing Address",
                content: (
                  <p className="text-foreground/60">
                    5830 E 2ND ST, STE 7000 #30800<br />
                    CASPER, WY 82609
                  </p>
                ),
              },
            ].map((card, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 bg-background">
                    <CardHeader>
                      <motion.div
                        className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4"
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <card.icon className="text-primary" size={24} />
                      </motion.div>
                      <CardTitle className="text-foreground">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>{card.content}</CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Social Media */}
          <FadeIn className="mb-20 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-5">Connect With Us</h3>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://www.facebook.com/gbffinc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                aria-label="Facebook"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="text-primary" size={24} />
              </motion.a>
            </div>
          </FadeIn>

          {/* Inquiry Forms */}
          <div className="grid lg:grid-cols-3 gap-16">
            <FadeIn direction="left" className="lg:col-span-2">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Inquiry Forms</h2>
                <Card className="border-border/50 bg-background shadow-xl overflow-hidden">
                  <CardHeader className="bg-primary/5 border-b border-border/50">
                    <CardTitle className="text-xl">Smart Intake Form</CardTitle>
                    <p className="text-sm text-foreground/60">Select your category to get started with the right team</p>
                  </CardHeader>
                  <CardContent className="pt-8">
                    <SmartIntakeHeroCard />
                  </CardContent>
                </Card>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15} className="lg:col-span-1">
              <div className="bg-secondary/30 rounded-3xl p-8 border border-border/30">
                <h3 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {[
                    { 
                      id: "faq-1",
                      q: "What are Education Support Voucher Credits?", 
                      a: (
                        <div className="space-y-2">
                          <p>Global Bright Futures Foundation Inc. provides Tutoring Service Credits (Voucher Credits), a nonprofit-supported funding mechanism designed to help schools expand access to academic support services at reduced cost.</p>
                          <p>These credits: Are applied directly to approved tutoring services, delivered through approved vendors, used for tutoring, enrichment, and intervention programs, and are not redeemable as cash or transferable funds.</p>
                          <p>Schools may use these credits to expand: Academic tutoring, Intervention support, Enrichment programs, Summer and after-school learning.</p>
                        </div>
                      )
                    },
                    { 
                      id: "faq-2",
                      q: "How do schools use Voucher Credits?", 
                      a: (
                        <div className="space-y-2">
                          <p>Voucher Credits are applied directly toward instructional services provided through our approved education partner, Smart Brain TLC Inc. or other approved vendor.</p>
                          <p>Schools determine student eligibility and program participation, while Global Bright Futures Foundation Inc. supports cost reduction, coordination, and program expansion through nonprofit funding mechanisms.</p>
                        </div>
                      )
                    },
                    { 
                      id: "faq-3",
                      q: "Are Voucher Credits free or do schools pay for them?", 
                      a: (
                        <div className="space-y-2">
                          <p>Global Bright Futures Foundation Inc. offers Tutoring Service Credits (Voucher Credits) in two formats:</p>
                          <p><strong>Fully Funded (Grant-Supported Credits)</strong><br/>Some Voucher Credits are fully funded through nonprofit or grant support. These are provided at no cost to schools and are used to expand tutoring, intervention, enrichment, and learning support services.</p>
                          <p><strong>Cost-Shared (Subsidized Model)</strong><br/>Some Voucher Credits are partially subsidized. In this model, Global Bright Futures Foundation Inc. reduces the overall service cost through nonprofit support, while the school contributes a portion of the funding.</p>
                          <p>This model allows schools to: Expand services within existing budgets, Serve more students, Access higher levels of tutoring support at reduced rates.</p>
                        </div>
                      )
                    },
                    { 
                      id: "faq-4",
                      q: "How Voucher Credits Are Used?", 
                      a: (
                        <div className="space-y-2">
                          <p>All Voucher Credits: Are applied directly to approved tutoring or educational services, delivered through Smart Brain TLC Inc., used for tutoring, enrichment, and intervention programs, and are not redeemable as cash or transferable funds.</p>
                          <p>Schools use credits for: Academic tutoring, Intervention support, Enrichment programs, Summer and after-school learning.</p>
                        </div>
                      )
                    },
                    { 
                      id: "faq-5",
                      q: "Why are there different types of Voucher Credits?", 
                      a: (
                        <div className="space-y-2">
                          <p>Different credit types allow schools to: Access fully funded support when grant funding is available, Use cost-shared options when expanding beyond available funding, Scale services gradually and sustainably based on student need.</p>
                        </div>
                      )
                    },
                    { 
                      id: "faq-6",
                      q: "Do you support global programs?", 
                      a: <p>Yes. For every U.S. school supported, we extend services to a partner school in an under-resourced community.</p>
                    },
                  ].map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="text-foreground/60 leading-relaxed text-sm pt-2">
                          {faq.a}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
