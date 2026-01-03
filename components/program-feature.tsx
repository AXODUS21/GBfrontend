import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProgramFeature() {
  return (
    <section className="bg-secondary/20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Support One, Empower Two: Education Access Program
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-4">One Grant. Two Schools. Two Futures.</p>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            One voucher supports students here and abroad, providing tutoring, academic support, or educational supplies.
          </p>
        </div>
        <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <div className="inline-block bg-primary text-primary-foreground rounded-2xl px-8 py-12 mb-8">
              <p className="text-sm font-semibold opacity-75">Impact Model</p>
              <p className="text-4xl font-bold">2x</p>
              <p className="text-sm opacity-75 mt-2">Students Empowered</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/programs">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Learn More <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/sponsor">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 bg-transparent">
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
