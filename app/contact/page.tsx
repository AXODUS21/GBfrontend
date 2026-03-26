"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FadeIn, TextReveal, StaggerChildren, StaggerItem } from "@/components/motion"

export default function ContactPage() {
  const [donationFormData, setDonationFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [partnershipFormData, setPartnershipFormData] = useState({
    name: "",
    email: "",
    schoolName: "",
    phone: "",
    message: "",
  })

  const [activeTab, setActiveTab] = useState<"donation" | "partnership">("donation")

  const handleDonationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setDonationFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePartnershipChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPartnershipFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Donation inquiry submitted:", donationFormData)
    setDonationFormData({ name: "", email: "", phone: "", message: "" })
    alert("Thank you for your donation inquiry! We'll get back to you soon.")
  }

  const handlePartnershipSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Partnership inquiry submitted:", partnershipFormData)
    setPartnershipFormData({ name: "", email: "", schoolName: "", phone: "", message: "" })
    alert("Thank you for your partnership inquiry! We'll get back to you soon.")
  }

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
                    <a href="mailto:admin@globalbrightfutures.org" className="text-primary hover:underline text-foreground/60">
                      admin@globalbrightfutures.org
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
                    <a href="tel:6614889935" className="text-primary hover:underline text-foreground/60">
                      661 488 9935
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
          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Inquiry Forms</h2>
                
                {/* Tab Navigation */}
                <div className="flex gap-1 mb-8 bg-secondary/50 rounded-full p-1 inline-flex">
                  {[
                    { key: "donation" as const, label: "Donation Inquiries" },
                    { key: "partnership" as const, label: "School Partnership" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-5 py-2.5 font-medium text-sm rounded-full transition-all duration-300 ${
                        activeTab === tab.key
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-foreground/60 hover:text-foreground"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Donation Inquiry Form */}
                {activeTab === "donation" && (
                  <motion.form
                    onSubmit={handleDonationSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <label htmlFor="donation-name" className="block font-semibold text-foreground mb-2 text-sm">
                        Full Name
                      </label>
                      <input
                        id="donation-name"
                        name="name"
                        type="text"
                        value={donationFormData.name}
                        onChange={handleDonationChange}
                        required
                        className="w-full px-4 py-3 border border-border/50 rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="donation-email" className="block font-semibold text-foreground mb-2 text-sm">
                        Email Address
                      </label>
                      <input
                        id="donation-email"
                        name="email"
                        type="email"
                        value={donationFormData.email}
                        onChange={handleDonationChange}
                        required
                        className="w-full px-4 py-3 border border-border/50 rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="donation-phone" className="block font-semibold text-foreground mb-2 text-sm">
                        Phone Number (Optional)
                      </label>
                      <input
                        id="donation-phone"
                        name="phone"
                        type="tel"
                        value={donationFormData.phone}
                        onChange={handleDonationChange}
                        className="w-full px-4 py-3 border border-border/50 rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                        placeholder="(661) 488-9935"
                      />
                    </div>

                    <div>
                      <label htmlFor="donation-message" className="block font-semibold text-foreground mb-2 text-sm">
                        Message
                      </label>
                      <textarea
                        id="donation-message"
                        name="message"
                        value={donationFormData.message}
                        onChange={handleDonationChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-border/50 rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none"
                        placeholder="Tell us about your donation inquiry..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300">
                      Submit Donation Inquiry
                    </Button>
                  </motion.form>
                )}

                {/* Partnership Inquiry Form */}
                {activeTab === "partnership" && (
                  <motion.form
                    onSubmit={handlePartnershipSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <label htmlFor="partnership-name" className="block font-semibold text-foreground mb-2 text-sm">
                        Full Name
                      </label>
                      <input
                        id="partnership-name"
                        name="name"
                        type="text"
                        value={partnershipFormData.name}
                        onChange={handlePartnershipChange}
                        required
                        className="w-full px-4 py-3 border border-border/50 rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="partnership-email" className="block font-semibold text-foreground mb-2 text-sm">
                        Email Address
                      </label>
                      <input
                        id="partnership-email"
                        name="email"
                        type="email"
                        value={partnershipFormData.email}
                        onChange={handlePartnershipChange}
                        required
                        className="w-full px-4 py-3 border border-border/50 rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="partnership-school" className="block font-semibold text-foreground mb-2 text-sm">
                        School/Company Name
                      </label>
                      <input
                        id="partnership-school"
                        name="schoolName"
                        type="text"
                        value={partnershipFormData.schoolName}
                        onChange={handlePartnershipChange}
                        required
                        className="w-full px-4 py-3 border border-border/50 rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                        placeholder="Your school name"
                      />
                    </div>

                    <div>
                      <label htmlFor="partnership-phone" className="block font-semibold text-foreground mb-2 text-sm">
                        Phone Number
                      </label>
                      <input
                        id="partnership-phone"
                        name="phone"
                        type="tel"
                        value={partnershipFormData.phone}
                        onChange={handlePartnershipChange}
                        required
                        className="w-full px-4 py-3 border border-border/50 rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                        placeholder="(661) 488-9935"
                      />
                    </div>

                    <div>
                      <label htmlFor="partnership-message" className="block font-semibold text-foreground mb-2 text-sm">
                        Message
                      </label>
                      <textarea
                        id="partnership-message"
                        name="message"
                        value={partnershipFormData.message}
                        onChange={handlePartnershipChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-border/50 rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none"
                        placeholder="Tell us about your school and partnership interest..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300">
                      Submit Partnership Inquiry
                    </Button>
                  </motion.form>
                )}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="bg-secondary/30 rounded-3xl p-8 border border-border/30">
                <h3 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h3>
                <div className="space-y-8">
                  {[
                    { q: "How long does school grant approval take?", a: "Typically 2-3 weeks from complete application submission." },
                    { q: "Can I donate and get a tax deduction?", a: "Yes! We're a 501 nonprofit. All donations are tax-deductible." },
                    { q: "What countries do you operate in?", a: "We currently operate in the US and Philippines, with expansion planned." },
                    { q: "How are students selected?", a: "Schools independently select students based on need and eligibility criteria to ensure compliance." },
                  ].map((faq, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                    >
                      <h4 className="font-bold text-foreground mb-2">{faq.q}</h4>
                      <p className="text-foreground/60 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
