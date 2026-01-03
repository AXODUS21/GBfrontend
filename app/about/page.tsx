import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Us</h1>
          <p className="text-lg md:text-xl opacity-95 text-balance">
            Empowering students locally and globally through school-to-school partnerships and educational equity.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">Our Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground text-2xl mb-2">Mission Statement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    Global Bright Futures Foundation empowers underserved learners by expanding access to scholarships, tutoring, mentorship, and innovative educational programs that foster academic growth, opportunity, and lifelong success—locally and globally.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground text-2xl mb-2">Vision Statement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      We envision a world where every learner regardless of income, location, or circumstance has access to meaningful, high-quality education pathways that unlock potential, strengthen communities, and create lasting opportunity across generations and borders.
                    </p>
                    <p className="text-foreground/70 text-base leading-relaxed border-t border-border pt-4 italic">
                      Through ethical partnerships, innovation, and transparency, education becomes a shared global opportunity not a privilege.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Equity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  We believe every student deserves access to quality education and mentorship, regardless of zip code
                  or economic status.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  We partner with schools, communities, and organizations to create sustainable, collaborative solutions
                  for educational access.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Accountability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  We maintain transparent, audit-ready operations and prioritize school independence and student welfare
                  above all else.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-secondary/10 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Governance</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground mb-2">Conflict of Interest Policy</h4>
                <p className="text-foreground/70">
                  Our board members and staff adhere to strict conflict of interest policies to ensure ethical
                  decision-making.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Non-Discrimination Policy</h4>
                <p className="text-foreground/70">
                  We serve all students without regard to race, color, religion, sex, national origin, or disability.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Whistleblower Protection</h4>
                <p className="text-foreground/70">
                  We maintain policies to protect individuals who report suspected misconduct or violations of policy.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border-2 border-primary rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Transparency & Financial Reports</h3>
            <p className="text-foreground/70 mb-6">
              As a 501(c)(3) nonprofit organization, we are committed to full transparency and accountability. Access
              our financial statements and annual reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition">
                Download Form 990
              </button>
              <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition">
                Annual Report 2024
              </button>
              <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition">
                Financial Statements
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
