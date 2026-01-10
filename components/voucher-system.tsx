import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DollarSign, School, BookOpen, Globe, Users, FileCheck, ArrowRight } from "lucide-react"

const voucherDenominations = [
  { amount: "$500", description: "Educational Materials Only", type: "materials" },
  { amount: "$1,000", description: "Educational Support Services", type: "services" },
  { amount: "$2,000", description: "Educational Support Services", type: "services" },
  { amount: "$3,000", description: "Educational Support Services", type: "services" },
  { amount: "Custom", description: "Educational Support Services", type: "services" },
]

const steps = [
  {
    step: 1,
    title: "NGO Issues Voucher",
    icon: DollarSign,
    color: "bg-blue-500",
    text: "NGO issues vouchers to U.S. schools. Each voucher is earmarked for educational support services or school supplies.",
  },
  {
    step: 2,
    title: "School Selects Students",
    icon: School,
    color: "bg-green-500",
    text: "Schools independently select students based on need. Voucher allocation determines hours of service or quantity of materials per student.",
    note: "Each $200 voucher → ~10 hours tutoring (hours may be divided among students depending on vendor rates).",
  },
  {
    step: 3,
    title: "Students Receive Services",
    icon: BookOpen,
    color: "bg-yellow-500",
    text: "Students receive tutoring, mentorship, academic support, or educational supplies. Schools maintain full records for audit and donor reporting.",
  },
  {
    step: 4,
    title: "Matching Voucher Abroad",
    icon: Globe,
    color: "bg-orange-500",
    text: "Each U.S. voucher triggers a matching voucher abroad. Partner schools select their students independently and provide equivalent services or materials.",
  },
  {
    step: 5,
    title: "Students Abroad Receive Services",
    icon: Users,
    color: "bg-yellow-500",
    text: "Students abroad receive tutoring, mentorship, or educational materials. Schools maintain independent audit-ready records. NGO does not select students.",
  },
]

export default function VoucherSystem() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Education Voucher System</h2>
        </div>

        {/* Voucher Denominations */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Voucher Denominations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {voucherDenominations.map((voucher, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <DollarSign className="text-primary" size={24} />
                    <CardTitle className="text-2xl">{voucher.amount}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-sm">{voucher.description}</p>
                  {voucher.type === "materials" && (
                    <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">
                      Materials Only
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 bg-secondary/10 rounded-xl p-6">
            <h4 className="font-semibold text-foreground mb-3">Approved Usage</h4>
            <ul className="grid md:grid-cols-2 gap-2 text-foreground/70">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Tutoring
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Mentorship
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Educational Materials
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                STEM & SEL Programs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Homeschool Support
              </li>
            </ul>
          </div>
        </div>

        {/* Voucher Program Step Diagram */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">How the Voucher Program Works</h3>
          
          {/* Steps Flow - Desktop */}
          <div className="hidden lg:block">
            <div className="flex items-start gap-2 mb-8 relative">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center relative">
                    <div className={`${step.color} text-white rounded-full w-14 h-14 flex items-center justify-center mb-3 shadow-lg flex-shrink-0`}>
                      <Icon size={24} />
                    </div>
                    <Card className="border-border w-full min-h-[280px]">
                      <CardHeader className="pb-2">
                        <h4 className="font-semibold text-foreground text-center text-xs mb-1">Step {step.step}</h4>
                        <h5 className="font-semibold text-foreground text-center text-xs">{step.title}</h5>
                      </CardHeader>
                      <CardContent className="px-3">
                        <p className="text-xs text-foreground/70 text-center leading-relaxed">{step.text}</p>
                        {step.note && (
                          <p className="text-xs text-foreground/60 italic mt-2 text-center bg-secondary/30 p-2 rounded">
                            {step.note}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                    {idx < steps.length - 1 && (
                      <div className="absolute top-7 left-full w-8 flex items-center justify-center">
                        <ArrowRight className="text-primary" size={20} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Steps Flow - Mobile/Tablet */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx}>
                  <Card className="border-border">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className={`${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0`}>
                          <Icon size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Step {step.step}</h4>
                          <h5 className="font-semibold text-foreground text-sm">{step.title}</h5>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/70 text-sm mb-2">{step.text}</p>
                      {step.note && (
                        <p className="text-xs text-foreground/60 italic mt-2 bg-secondary/30 p-2 rounded">
                          {step.note}
                        </p>
                      )}
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

        {/* Impact / Key Facts */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 md:p-12 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Impact & Key Facts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Flexible Impact</h4>
              <p className="text-sm text-foreground/70">
                Flexible number of students served depending on hours and vendor rates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="text-green-600" size={24} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Dual Impact</h4>
              <p className="text-sm text-foreground/70">
                Dual student impact: U.S. and partner school abroad.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileCheck className="text-blue-600" size={24} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">IRS-Compliant</h4>
              <p className="text-sm text-foreground/70">
                Fully IRS-compliant: donors cannot select students.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileCheck className="text-orange-600" size={24} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Transparent</h4>
              <p className="text-sm text-foreground/70">
                Transparent and audit-ready: NGO tracks vouchers, funding, and payments.
              </p>
            </div>
          </div>
        </div>

        {/* Compliance Note */}
        <div className="bg-secondary/30 rounded-xl p-6 mb-8">
          <p className="text-sm text-foreground/70 text-center">
            <strong className="text-foreground">Compliance Note:</strong> Schools maintain independent student records. The Foundation administers vouchers and payments only to approved educational service providers.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/apply">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Apply for Voucher
            </Button>
          </Link>
          <Link href="/sponsor">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 bg-transparent">
              Donate to Empower Students
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
