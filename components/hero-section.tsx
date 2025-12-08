import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-accent/80 text-primary-foreground py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          Connecting students globally through school-to-school learning partnerships
        </h1>
        <p className="text-lg md:text-xl mb-8 text-balance opacity-95">
          Schools choose learners, paired globally, transforming lives at both locations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/programs">
            <Button className="bg-primary-foreground text-primary hover:bg-opacity-90 px-8 py-6 text-lg">
              Apply for School Grant
            </Button>
          </Link>
          <Link href="/sponsor">
            <Button
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg bg-transparent"
            >
              Sponsor a Student
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
