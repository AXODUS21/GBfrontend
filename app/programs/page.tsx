import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Code2, Heart, Users } from "lucide-react"

const programs = [
  {
    icon: BookOpen,
    title: "Tutoring Scholarships",
    description: "Support for students chosen by participating schools, providing access to qualified tutors.",
  },
  {
    icon: Users,
    title: "College Teaching Fellowship",
    description: "Train underprivileged college students to tutor younger learners, creating a pipeline of educators.",
  },
  {
    icon: Heart,
    title: "Community Mentorship",
    description: "SEL, leadership, and emotional growth programs designed for holistic student development.",
  },
  {
    icon: Code2,
    title: "STEM & Digital Literacy",
    description: "Outreach initiatives and coding programs to prepare students for future opportunities.",
  },
]

export default function ProgramsPage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Programs</h1>
          <p className="text-lg md:text-xl opacity-95 text-balance max-w-3xl">
            Comprehensive educational initiatives designed to empower students and create lasting impact through school
            partnerships.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, idx) => {
              const Icon = program.icon
              return (
                <Card key={idx} className="border-border">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-foreground text-2xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 text-lg">{program.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary/10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">How Schools Apply</h2>

          <div className="space-y-6 mb-12">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Step 1: Review Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Understand the eligibility criteria and program requirements for your school district or charter
                  school.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Step 2: Submit Application</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Complete the school grant application and submit documentation of student selection process.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Step 3: Receive Approval</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Upon approval, your school receives vouchers paired with a partner school abroad.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Step 4: Select Students & Redeem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Your school independently selects eligible students. Students redeem vouchers with approved providers.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 border-2 border-primary rounded-xl p-8 mb-8">
            <h3 className="font-bold text-lg mb-4 text-foreground">Record-Keeping Requirements</h3>
            <p className="text-foreground/70 mb-4">
              Schools maintain full records of voucher usage, sessions, and outcomes for IRS audits and donor reporting.
              We provide templates to streamline this process.
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li>✓ Student selection documentation</li>
              <li>✓ Voucher redemption records</li>
              <li>✓ Session attendance logs</li>
              <li>✓ Program outcomes & impact data</li>
            </ul>
          </div>

          <div className="flex gap-4 justify-center">
            <Link href="/partnerships">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6">
                Download Templates
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 px-8 py-6 bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
