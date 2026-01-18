import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { BookOpen, Code2, Heart, Users, GraduationCap, Package, ArrowRight, School, Globe, CheckCircle } from "lucide-react"

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

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Breaking Barriers to Learning, One Student at a Time</h1>
        </div>
      </section>

      {/* Support One, Empower Two Program Description */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-balance">
            Support One, Empower Two: Education Access Program
          </h2>
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <p>
              The Support One, Empower Two: Education Access Program is Global Bright Futures Foundation Inc.'s flagship charitable initiative designed to expand equitable access to education for students facing financial and systemic barriers to learning.
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
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Programs Offered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, idx) => {
              const Icon = program.icon
              return (
                <Card key={idx} className="border-border hover:shadow-lg transition">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-foreground text-xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70">{program.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Voucher Flow Diagram */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">How the Program Works</h2>
          
          {/* Desktop Flow */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="flex-1 text-center">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <School size={28} />
                </div>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-sm text-foreground">U.S. School Voucher</CardTitle>
                  </CardHeader>
                </Card>
              </div>
              
              <ArrowRight className="text-primary flex-shrink-0" size={32} />
              
              <div className="flex-1 text-center">
                <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users size={28} />
                </div>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-sm text-foreground">Independent Selection</CardTitle>
                  </CardHeader>
                </Card>
              </div>
              
              <ArrowRight className="text-primary flex-shrink-0" size={32} />
              
              <div className="flex-1 text-center">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Globe size={28} />
                </div>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-sm text-foreground">International School Voucher</CardTitle>
                  </CardHeader>
                </Card>
              </div>
              
              <ArrowRight className="text-primary flex-shrink-0" size={32} />
              
              <div className="flex-1 text-center">
                <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users size={28} />
                </div>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-sm text-foreground">Independent Selection</CardTitle>
                  </CardHeader>
                </Card>
              </div>
              
              <ArrowRight className="text-primary flex-shrink-0" size={32} />
              
              <div className="flex-1 text-center">
                <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle size={28} />
                </div>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xs text-foreground leading-tight">
                      Tutoring / Mentorship OR<br />Educational Materials Delivered
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="md:hidden space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <School size={24} />
              </div>
              <Card className="border-border flex-1">
                <CardHeader>
                  <CardTitle className="text-sm text-foreground">U.S. School Voucher</CardTitle>
                </CardHeader>
              </Card>
            </div>
            
            <div className="flex justify-center">
              <ArrowRight className="text-primary rotate-90" size={24} />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Users size={24} />
              </div>
              <Card className="border-border flex-1">
                <CardHeader>
                  <CardTitle className="text-sm text-foreground">Independent Selection</CardTitle>
                </CardHeader>
              </Card>
            </div>
            
            <div className="flex justify-center">
              <ArrowRight className="text-primary rotate-90" size={24} />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Globe size={24} />
              </div>
              <Card className="border-border flex-1">
                <CardHeader>
                  <CardTitle className="text-sm text-foreground">International School Voucher</CardTitle>
                </CardHeader>
              </Card>
            </div>
            
            <div className="flex justify-center">
              <ArrowRight className="text-primary rotate-90" size={24} />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Users size={24} />
              </div>
              <Card className="border-border flex-1">
                <CardHeader>
                  <CardTitle className="text-sm text-foreground">Independent Selection</CardTitle>
                </CardHeader>
              </Card>
            </div>
            
            <div className="flex justify-center">
              <ArrowRight className="text-primary rotate-90" size={24} />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} />
              </div>
              <Card className="border-border flex-1">
                <CardHeader>
                  <CardTitle className="text-sm text-foreground leading-tight">
                    Tutoring / Mentorship OR Educational Materials Delivered
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="how-schools-apply" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                How schools apply
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2 text-foreground/70">
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
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                        Contact Us to Apply
                      </Button>
                    </Link>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-vouchers-paired" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                How vouchers are paired
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2 text-foreground/70">
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

            <AccordionItem value="record-keeping" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                Record-keeping and audit guidance
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2 text-foreground/70">
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
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      <strong>Important:</strong> Schools must never share student selection records with donors, as this would violate IRS charitable guidelines. All student selection and voucher allocation decisions are made independently by schools.
                    </p>
                  </div>
                  <div className="pt-4">
                    <Link href="/partnerships">
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                        Download Record-Keeping Templates
                      </Button>
                    </Link>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </main>
  )
}
