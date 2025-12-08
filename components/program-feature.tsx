import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProgramFeature() {
  return (
    <section className="bg-secondary/20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Enroll One, Empower Two</h2>
            <p className="text-xl text-foreground/70 mb-8 text-balance">
              One Grant. Two Schools. Our innovative model ensures that every school grant creates impact in two
              locations.
            </p>
            <ol className="space-y-4 mb-8">
              <li className="flex items-start gap-4">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </span>
                <span className="text-foreground/80">U.S. school applies for a grant/voucher</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </span>
                <span className="text-foreground/80">
                  NGO issues voucher to the U.S. school and paired Philippine school
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </span>
                <span className="text-foreground/80">Both schools independently select students in need</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </span>
                <span className="text-foreground/80">
                  Students redeem vouchers for approved tutoring and mentorship programs
                </span>
              </li>
            </ol>
            <Link href="/programs">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Learn More <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl aspect-square flex items-center justify-center">
            <div className="text-center p-8">
              <div className="inline-block bg-primary text-primary-foreground rounded-2xl px-8 py-12">
                <p className="text-sm font-semibold opacity-75">Impact Model</p>
                <p className="text-4xl font-bold">2x</p>
                <p className="text-sm opacity-75 mt-2">Students Empowered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
