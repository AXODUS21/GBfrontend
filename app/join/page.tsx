"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { toast } from "sonner"
import { 
  FileText, 
  CheckCircle2, 
  Globe2, 
  Users, 
  ArrowRight, 
  School, 
  Building2, 
  Users2, 
  GraduationCap, 
  BarChart3, 
  ShieldCheck, 
  Zap,
  Briefcase,
  Heart,
  TrendingUp,
  LayoutDashboard
} from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, TextReveal, StaggerChildren, StaggerItem } from "@/components/motion"

const steps = [
  {
    title: "Application Submission",
    description: "Submit your school partnership application with required documentation",
    icon: FileText,
  },
  {
    title: "Voucher Approval",
    description: "Review and approve voucher allocation based on program guidelines",
    icon: CheckCircle2,
  },
  {
    title: "Paired School Assignment",
    description: "Receive assignment to a partner school abroad for coordinated impact",
    icon: Globe2,
  },
  {
    title: "Independent Student Selection",
    description: "Schools independently select students based on documented educational need",
    icon: Users,
  },
]

export default function JoinPage() {
  const [formData, setFormData] = useState({
    category: "",
    reason: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    let targetEmail = "info@globalbrightfutures.org"
    if (formData.category === "School Partnership") {
      targetEmail = "partnership@globalbrightfutures.org"
    } else if (formData.category === "Join as Educators and Tutors") {
      targetEmail = "educators@globalbrightfutures.org"
    } else if (formData.category === "Students & Families Support") {
      targetEmail = "families@globalbrightfutures.org"
    }
    
    const subject = encodeURIComponent(`Application: ${formData.category}`)
    const bodyText = `Applicant Email: ${formData.email}\n\nCategory: ${formData.category}\n\nReason for applying:\n${formData.reason}`
    const body = encodeURIComponent(bodyText)
    
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`
    
    toast.success("Opening your email client...")
    
    // Optional: reset form
    setFormData({ category: "", reason: "", email: "" })
  }

  return (
    <main className="bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent/60 text-primary-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="text-sm font-bold uppercase tracking-widest text-primary-foreground/50 mb-4 block">
                Join & Get Support
              </span>
              <TextReveal
                text="Collaborative pathways to join our mission and receive support."
                as="h1"
                className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl"
              />
              <p className="text-xl opacity-90 max-w-3xl leading-relaxed">
                Whether you are a school, district, business, organization, or family, joining Global Bright Futures Foundation Inc. helps expand access to education and support services.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <Card className="bg-background/95 backdrop-blur-sm border-border/50 text-foreground shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Apply for Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleApplySubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email Address:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-3 py-2 border border-border/50 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium mb-1">I am interested in:</label>
                      <select 
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleFormChange}
                        required
                        className="w-full px-3 py-2 border border-border/50 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="Students & Families Support">Students & Families Support</option>
                        <option value="Join as Educators and Tutors">Join as Educators and Tutors</option>
                        <option value="School Partnership">School Partnership</option>
                        <option value="Support the Program">Support the Program</option>
                        <option value="Request More Information">Request More Information</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium mb-1">Reason for applying:</label>
                      <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleFormChange}
                        required
                        rows={4}
                        placeholder="Tell us why you are applying..."
                        className="w-full px-3 py-2 border border-border/50 rounded-md bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                      ></textarea>
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full text-base py-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Apply Now"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Multi-Audience Tabs */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="schools" className="w-full">
            <div className="flex justify-center mb-12 overflow-x-auto pb-4 md:pb-0">
              <TabsList className="bg-secondary/50 p-1 h-auto grid grid-cols-2 md:grid-cols-4 w-full md:w-auto gap-1">
                <TabsTrigger value="schools" className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <School className="w-4 h-4 mr-2" />
                  Schools & Districts
                </TabsTrigger>
                <TabsTrigger value="corporate" className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Building2 className="w-4 h-4 mr-2" />
                  Corporate Partners
                </TabsTrigger>
                <TabsTrigger value="families" className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Users2 className="w-4 h-4 mr-2" />
                  Families
                </TabsTrigger>
                <TabsTrigger value="educators" className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Educators & Tutors
                </TabsTrigger>
              </TabsList>
            </div>

            {/* --- Schools & Districts Tab --- */}
            <TabsContent value="schools" className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Join Our Network?</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    Schools benefit from a structured, cost-efficient academic support system that scales with their needs.
                  </p>
                  <StaggerChildren className="grid gap-4">
                    {[
                      "Reduced tutoring costs through subsidized service credits",
                      "Expanded student support without increasing staff workload",
                      "Flexible online implementation (MTSS, intervention, enrichment)",
                      "Access to trained tutors and educators",
                      "Alignment with school improvement and funding priorities"
                    ].map((item, i) => (
                      <StaggerItem key={i} className="flex items-start gap-3 bg-secondary/30 p-4 rounded-xl border border-border/50">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-foreground/80">{item}</span>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </div>
                
                <div className="space-y-8 bg-primary/5 p-8 md:p-12 rounded-[2.5rem] border border-primary/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Priority Access Advantage</h3>
                  </div>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="font-bold text-primary text-xl">01</div>
                      <p className="text-foreground/70"><strong className="text-foreground block">Priority Access</strong> Partner schools receive priority access to grant-funded programs.</p>
                    </li>
                    <li className="gap-4 flex">
                      <div className="font-bold text-primary text-xl">02</div>
                      <p className="text-foreground/70"><strong className="text-foreground block">Early Placement</strong> Early placement in fully funded tutoring initiatives.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="font-bold text-primary text-xl">03</div>
                      <p className="text-foreground/70"><strong className="text-foreground block">Expanded Capacity</strong> Expanded program capacity before new partner onboarding.</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <BarChart3 className="text-primary mb-2" size={32} />
                    <CardTitle>Outcomes You Can Expect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-border/50">
                      <span className="text-foreground/70">Academic Improvement</span>
                      <span className="font-bold text-primary">70%+</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border/50">
                      <span className="text-foreground/70">Participation Rate</span>
                      <span className="font-bold text-primary">80%+</span>
                    </div>
                    <p className="text-sm text-foreground/60 pt-2">
                      Increased student confidence, engagement, and expanded access to services.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-background/50 backdrop-blur-sm md:col-span-2">
                  <CardHeader>
                    <ShieldCheck className="text-primary mb-2" size={32} />
                    <CardTitle>Compliance & Accountability</CardTitle>
                  </CardHeader>
                  <CardContent className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" />
                        <span className="text-sm font-medium">Service-based funding</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" />
                        <span className="text-sm font-medium">Approved vendors only</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" />
                        <span className="text-sm font-medium">Aggregate reporting only</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" />
                        <span className="text-sm font-medium">Privacy protected (No PII)</span>
                      </div>
                    </div>
                    <p className="sm:col-span-2 text-sm text-foreground/60 italic">
                      Our model is designed for district approval and audit safety. No student personal data is stored by GBFF.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Partnership Process Steps (Existing Content Integrated) */}
              <div className="pt-8">
                <h3 className="text-2xl font-bold mb-12 text-center">The Join & Support Process</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {steps.map((step, idx) => {
                    const Icon = step.icon
                    return (
                      <div key={idx} className="relative group">
                        <Card className="h-full border-border/50 hover:border-primary/50 transition-colors">
                          <CardHeader className="pb-2">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                              <Icon className="text-primary" size={20} />
                            </div>
                            <CardTitle className="text-lg">{step.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-foreground/60">{step.description}</p>
                          </CardContent>
                        </Card>
                        {idx < steps.length - 1 && (
                          <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-primary/30">
                            <ArrowRight size={20} />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </TabsContent>

            {/* --- Corporate & Business Partners Tab --- */}
            <TabsContent value="corporate" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold">Invest in Education & Workforce Development</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    Partnering with GBFF allows organizations to support both education access and future workforce development.
                  </p>
                  <div className="grid gap-4">
                    {[
                      "Sponsor tutoring programs for schools and communities",
                      "Support workforce pathways for students and graduates",
                      "Align with ESG, CSR, and education impact goals",
                      "Demonstrate measurable community impact"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-secondary/30 p-4 rounded-xl border border-border/50">
                        <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                        <span className="text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-border/50 bg-primary text-primary-foreground">
                    <CardHeader>
                      <LayoutDashboard size={24} className="mb-2" />
                      <CardTitle className="text-lg">What You Receive</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2 opacity-90">
                      <p>• Impact reports</p>
                      <p>• Brand visibility</p>
                      <p>• Employee engagement</p>
                    </CardContent>
                  </Card>
                  <Card className="border-border/50 bg-accent text-accent-foreground">
                    <CardHeader>
                      <TrendingUp size={24} className="mb-2" />
                      <CardTitle className="text-lg">Scalable Impact</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2 opacity-90">
                      <p>• Student tutoring access</p>
                      <p>• Tutor work experience</p>
                      <p>• Educator support</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* --- Families Tab --- */}
            <TabsContent value="families" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold">Support Your Child’s Learning</h2>
                <p className="text-lg text-foreground/70">
                  We provide accessible, structured academic support designed to help students succeed.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 text-left">
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="text-red-500" size={20} />
                        Family Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-foreground/70">
                      <p>✔ Personalized tutoring support</p>
                      <p>✔ Flexible online learning options</p>
                      <p>✔ Access to enrichment resources</p>
                      <p>✔ Sponsored or subsidized programs</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20 bg-primary/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="text-primary" size={20} />
                        Sponsored Access
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-foreground/70">
                      <p>✔ Fully funded tutoring (when available)</p>
                      <p>✔ Subsidized academic support</p>
                      <p>✔ Expanded learning opportunities</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* --- Educators Tab --- */}
            <TabsContent value="educators" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-secondary/30 p-8 md:p-12 rounded-[2.5rem] order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-6">Participants receive:</h3>
                  <div className="space-y-4">
                    {[
                      "Paid tutoring opportunities",
                      "Real-world teaching experience",
                      "Professional development and mentorship",
                      "Flexible work aligned with career goals"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary" size={20} />
                        <span className="text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6 order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold">Build Experience While Making Impact</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    We create pathways for educators, students, and graduates to grow professionally through meaningful impact.
                  </p>
                  <Link href="/contact" className="inline-block">
                    <Button className="rounded-full px-8 h-12">Join our Educator Network</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Unified Impact Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">One Partnership. Multiple Outcomes.</h2>
            <p className="text-xl opacity-80 max-w-2xl mx-auto">
              Every partnership supports a wider ecosystem of educational success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: Users2, text: "Students gaining academic support" },
              { icon: Briefcase, text: "Tutors gaining workforce experience" },
              { icon: GraduationCap, text: "Educators receiving professional opportunities" },
              { icon: School, text: "Schools expanding access to services" },
              { icon: Globe2, text: "Global communities receiving support" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <item.icon size={32} />
                </div>
                <p className="text-sm font-medium leading-tight px-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Model Works (Brief highlight) */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background border border-border/50 rounded-3xl p-8 md:p-12 grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold">Why This Model Works</h3>
            </div>
            <div className="md:col-span-3 grid sm:grid-cols-2 gap-6">
              <p className="text-foreground/70 flex gap-2">
                <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-1" />
                Reduces cost while expanding services
              </p>
              <p className="text-foreground/70 flex gap-2">
                <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-1" />
                Combines tutoring + workforce development
              </p>
              <p className="text-foreground/70 flex gap-2">
                <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-1" />
                Supports local schools and global communities
              </p>
              <p className="text-foreground/70 flex gap-2">
                <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-1" />
                Scales easily across districts and programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Join Us?</h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join Global Bright Futures Foundation Inc. in creating a more equitable and accessible educational future for all.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://app.globalbrightfutures.org/" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:px-8 h-14 text-lg rounded-full shadow-lg hover:shadow-primary/20">
                Apply for School Support
              </Button>
            </Link>
            <Link href="/sponsor" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:px-8 h-14 text-lg rounded-full border-primary text-primary hover:bg-primary/5">
                Start Sponsorship
              </Button>
            </Link>
            <Link href="/programs" className="w-full sm:w-auto">
              <Button size="lg" variant="ghost" className="w-full sm:px-8 h-14 text-lg rounded-full hover:bg-secondary/50">
                Explore Programs
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

