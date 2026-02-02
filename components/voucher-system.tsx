"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, ChevronUp, School, BookOpen, Globe, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: School,
    title: "Schools Apply",
    text: "Partner schools identify students with educational need and apply for vouchers.",
  },
  {
    icon: BookOpen,
    title: "Services Delivered",
    text: "Students receive tutoring, mentorship, or educational materials through approved vendors.",
  },
  {
    icon: Globe,
    title: "Global Matching",
    text: "Each U.S. voucher creates a matching voucher for a partner school abroad.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Tracking",
    text: "Schools maintain records. We track every voucher for complete accountability.",
  },
]

export default function VoucherSystem() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            100% Transparent
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We track every dollar. You can see exactly where your donation goes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <Icon size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm opacity-80">{step.text}</p>
              </div>
            )
          })}
        </div>

        {/* Voucher amounts */}
        <div className="bg-primary-foreground/10 rounded-2xl p-8 text-center">
          <h3 className="font-bold text-xl mb-6">Voucher Denominations</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {["$500", "$1,000", "$2,000", "$3,000", "Custom"].map((amount, idx) => (
              <div key={idx} className="bg-primary-foreground/10 px-6 py-3 rounded-full">
                <span className="font-bold">{amount}</span>
              </div>
            ))}
          </div>
          <p className="text-sm opacity-70 max-w-xl mx-auto">
            Each $200 provides approximately 10 hours of tutoring. Schools maintain independent records for full IRS compliance.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/apply">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-lg font-bold rounded-full shadow-xl">
              Apply for a Voucher
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
