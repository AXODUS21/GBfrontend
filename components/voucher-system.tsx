import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DollarSign } from "lucide-react"

const vouchers = [
  { amount: 75, description: "Sessions & Support" },
  { amount: 100, description: "Tutoring Programs" },
  { amount: 200, description: "STEM & SEL Programs" },
  { amount: 500, description: "Comprehensive Package" },
]

export default function VoucherSystem() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Education Voucher System</h2>
          <p className="text-lg text-foreground/70 text-balance">
            Flexible funding options designed to support various educational needs. Vouchers are issued directly to
            schools who maintain full records for compliance and transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {vouchers.map((voucher, idx) => (
            <Card key={idx} className="border-border hover:shadow-lg transition">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <DollarSign className="text-primary" size={24} />
                  <CardTitle className="text-3xl">{voucher.amount}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{voucher.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/10 rounded-xl p-8 mb-8">
          <h3 className="font-semibold text-foreground mb-4">Approved Usage</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-foreground/70">
            <li>✓ 1:1 Tutoring</li>
            <li>✓ STEM & SEL Programs</li>
            <li>✓ Homeschool Support</li>
            <li>✓ Mentorship Programs</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/programs">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Apply for Voucher</Button>
          </Link>
          <Link href="/partnerships">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 bg-transparent">
              View Approved Vendors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
