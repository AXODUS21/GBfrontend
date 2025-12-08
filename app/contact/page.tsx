"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
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
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">hello@gbf.org</p>
                <p className="text-foreground/70 text-sm">We respond within 24 hours</p>
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
                <p className="text-foreground/70">(555) 123-4567</p>
                <p className="text-foreground/70 text-sm">Mon-Fri, 9 AM - 6 PM PT</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">San Francisco, CA</p>
                <p className="text-foreground/70 text-sm">United States</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message..."
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3">
                  Send Message
                </Button>
              </form>
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
