import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Globe2, FileText } from "lucide-react"

export default function PartnershipPage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary via-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">School Partnerships</h1>
          <p className="text-lg md:text-xl opacity-95 text-balance max-w-3xl">
            Join our global network of schools committed to educational equity and international collaboration.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Partnership Process</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { step: "Application", desc: "Submit your school partnership application" },
              { step: "Voucher Approval", desc: "Review and approve voucher allocation" },
              { step: "School Pairing", desc: "Match with international partner school" },
              { step: "Student Selection", desc: "Schools independently select students" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.step}</h3>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Download templates and guidelines for record-keeping and student selection.
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
                <CardTitle className="text-foreground">Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Both schools maintain independent records of voucher use, sessions, and outcomes for audits.
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
                <CardTitle className="text-foreground">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Partner with schools around the world. Currently operating in US and Philippines.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  View Partners
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-secondary/10 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Key Compliance Principles</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                <p className="text-foreground/70">
                  <strong>School Control:</strong> Both schools independently select students in need. NGO does not
                  participate in student selection.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                <p className="text-foreground/70">
                  <strong>Transparent Records:</strong> Schools maintain audit-ready records of voucher usage, sessions,
                  and outcomes.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                <p className="text-foreground/70">
                  <strong>Payment Processing:</strong> NGO handles payments to approved providers only, ensuring
                  accountability.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                <p className="text-foreground/70">
                  <strong>No Private Benefit:</strong> Resources benefit schools and students, maintaining 501(c)(3)
                  integrity.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Partner?</h3>
            <p className="text-lg mb-8 opacity-95">
              Join schools worldwide in creating meaningful educational impact through international partnerships.
            </p>
            <Link href="/contact">
              <Button className="bg-primary-foreground text-primary hover:bg-opacity-90 px-8 py-3">
                Start Partnership Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
