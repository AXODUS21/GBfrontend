"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

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
    // Handle form submission
    console.log("Donation inquiry submitted:", donationFormData)
    // Reset form
    setDonationFormData({ name: "", email: "", phone: "", message: "" })
    alert("Thank you for your donation inquiry! We'll get back to you soon.")
  }

  const handlePartnershipSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Partnership inquiry submitted:", partnershipFormData)
    // Reset form
    setPartnershipFormData({ name: "", email: "", schoolName: "", phone: "", message: "" })
    alert("Thank you for your partnership inquiry! We'll get back to you soon.")
  }

  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get in Touch</h1>
          <p className="text-lg md:text-xl opacity-95 text-balance">
            Have questions? We'd love to hear from you. Reach out to our team.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:admin@globalbrightfutures.org"
                  className="text-primary hover:underline text-foreground/70"
                >
                  admin@globalbrightfutures.org
                </a>
                <p className="text-foreground/70 text-sm mt-2">We respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:6614889935" className="text-primary hover:underline text-foreground/70">
                  661 488 9935
                </a>
                <p className="text-foreground/70 text-sm mt-2">Mon-Fri, 9 AM - 6 PM PT</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Mailing Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  5830 E 2ND ST, STE 7000 #30800<br />
                  CASPER, WY 82609
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Social Media */}
          <div className="mb-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Connect With Us</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/gbffinc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition"
                aria-label="Facebook"
              >
                <Facebook className="text-primary" size={24} />
              </a>
            </div>
          </div>

          {/* Inquiry Forms */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Inquiry Forms</h2>
              
              {/* Tab Navigation */}
              <div className="flex gap-2 mb-6 border-b border-border">
                <button
                  onClick={() => setActiveTab("donation")}
                  className={`px-4 py-2 font-semibold transition ${
                    activeTab === "donation"
                      ? "text-primary border-b-2 border-primary"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  Donation Inquiries
                </button>
                <button
                  onClick={() => setActiveTab("partnership")}
                  className={`px-4 py-2 font-semibold transition ${
                    activeTab === "partnership"
                      ? "text-primary border-b-2 border-primary"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  School Partnership Inquiries
                </button>
              </div>

              {/* Donation Inquiry Form */}
              {activeTab === "donation" && (
                <form onSubmit={handleDonationSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="donation-name" className="block font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      id="donation-name"
                      name="name"
                      type="text"
                      value={donationFormData.name}
                      onChange={handleDonationChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="donation-email" className="block font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      id="donation-email"
                      name="email"
                      type="email"
                      value={donationFormData.email}
                      onChange={handleDonationChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="donation-phone" className="block font-semibold text-foreground mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="donation-phone"
                      name="phone"
                      type="tel"
                      value={donationFormData.phone}
                      onChange={handleDonationChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(661) 488-9935"
                    />
                  </div>

                  <div>
                    <label htmlFor="donation-message" className="block font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="donation-message"
                      name="message"
                      value={donationFormData.message}
                      onChange={handleDonationChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your donation inquiry..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3">
                    Submit Donation Inquiry
                  </Button>
                </form>
              )}

              {/* Partnership Inquiry Form */}
              {activeTab === "partnership" && (
                <form onSubmit={handlePartnershipSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="partnership-name" className="block font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      id="partnership-name"
                      name="name"
                      type="text"
                      value={partnershipFormData.name}
                      onChange={handlePartnershipChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="partnership-email" className="block font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      id="partnership-email"
                      name="email"
                      type="email"
                      value={partnershipFormData.email}
                      onChange={handlePartnershipChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="partnership-school" className="block font-semibold text-foreground mb-2">
                      School Name
                    </label>
                    <input
                      id="partnership-school"
                      name="schoolName"
                      type="text"
                      value={partnershipFormData.schoolName}
                      onChange={handlePartnershipChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your school name"
                    />
                  </div>

                  <div>
                    <label htmlFor="partnership-phone" className="block font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      id="partnership-phone"
                      name="phone"
                      type="tel"
                      value={partnershipFormData.phone}
                      onChange={handlePartnershipChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(661) 488-9935"
                    />
                  </div>

                  <div>
                    <label htmlFor="partnership-message" className="block font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="partnership-message"
                      name="message"
                      value={partnershipFormData.message}
                      onChange={handlePartnershipChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your school and partnership interest..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3">
                    Submit Partnership Inquiry
                  </Button>
                </form>
              )}
            </div>

            <div className="bg-secondary/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-foreground mb-2">How long does school grant approval take?</h4>
                  <p className="text-foreground/70">Typically 2-3 weeks from complete application submission.</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Can I donate and get a tax deduction?</h4>
                  <p className="text-foreground/70">
                    Yes! We're a 501(c)(3) nonprofit. All donations are tax-deductible.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">What countries do you operate in?</h4>
                  <p className="text-foreground/70">
                    We currently operate in the US and Philippines, with expansion planned.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">How are students selected?</h4>
                  <p className="text-foreground/70">
                    Schools independently select students based on need and eligibility criteria to ensure compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
