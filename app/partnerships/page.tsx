import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, CheckCircle2, Globe2, Users, ArrowRight } from "lucide-react"

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

export default function PartnershipPage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary via-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Partner With Us to Transform Education</h1>
          <p className="text-lg md:text-xl opacity-95 text-balance max-w-4xl">
            Schools independently select students for tutoring, mentorship, or educational materials and school supplies. Partner schools abroad do the same. Guidance and templates are provided to ensure all record-keeping is IRS-compliant and audit-ready.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">Partnership Process</h2>

          {/* Desktop Steps - Horizontal */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 mb-12">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx} className="relative">
                  <Card className="border-border h-full hover:shadow-lg transition">
                    <CardHeader>
                      <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                        {idx + 1}
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-foreground text-center text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/70 text-center">{step.description}</p>
                    </CardContent>
                  </Card>
                  {idx < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="text-primary" size={24} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Mobile Steps - Vertical */}
          <div className="md:hidden space-y-6 mb-12">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx}>
                  <Card className="border-border">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                          {idx + 1}
                        </div>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <CardTitle className="text-foreground">{step.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/70">{step.description}</p>
                    </CardContent>
                  </Card>
                  {idx < steps.length - 1 && (
                    <div className="flex justify-center my-4">
                      <ArrowRight className="text-primary rotate-90" size={24} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resources & Compliance */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Resources & Support</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Documentation Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Download templates and guidelines for record-keeping and student selection. All templates are designed to ensure IRS compliance and audit readiness.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  Download Templates
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Compliance Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Both schools maintain independent records of voucher use, sessions, and outcomes for audits. We provide comprehensive guidance to ensure compliance.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  Audit Guidelines
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe2 className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Global Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Partner with schools around the world. Currently operating in US and Philippines, with expansion planned.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Key Compliance Principles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-foreground mb-1">School Control</p>
                    <p className="text-sm text-foreground/70">
                      Both schools independently select students in need. NGO does not participate in student selection.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Transparent Records</p>
                    <p className="text-sm text-foreground/70">
                      Schools maintain audit-ready records of voucher usage, sessions, and outcomes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Payment Processing</p>
                    <p className="text-sm text-foreground/70">
                      NGO handles payments to approved providers only, ensuring accountability and compliance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-foreground mb-1">No Private Benefit</p>
                    <p className="text-sm text-foreground/70">
                      Resources benefit schools and students, maintaining 501(c)(3) integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner?</h3>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              Join schools worldwide in creating meaningful educational impact through international partnerships. Start your partnership inquiry today.
            </p>
            <Link href="/contact">
              <Button className="bg-primary-foreground text-primary hover:bg-opacity-90 px-8 py-6 text-lg">
                Partnership Inquiry Form
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
