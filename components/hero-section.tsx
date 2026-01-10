import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-accent/80 text-primary-foreground py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          Connecting Students Globally Through School-to-School Learning Partnerships
        </h1>
        <p className="text-lg md:text-xl mb-8 text-balance opacity-95 max-w-3xl mx-auto">
          Every child deserves access to quality education. Your support helps provide tutoring, mentorship, and essential educational materials and school supplies to students with demonstrated need in the United States and abroad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/apply">
            <Button className="bg-primary-foreground text-primary hover:bg-opacity-90 px-8 py-6 text-lg">
              Apply for School Voucher
            </Button>
          </Link>
          <Link href="/sponsor">
            <Button
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg bg-transparent"
            >
              Donate to Empower Students
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
