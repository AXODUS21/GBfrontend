import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "Tutoring & academic support",
  "Mentorship programs",
  "Educational materials",
  "STEM enrichment",
]

export default function ProgramFeature() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            <span className="text-sm font-bold text-primary uppercase tracking-wider mb-2 block">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              One Gift.
              <br />
              <span className="text-primary">Two Schools.</span>
              <br />
              Lasting Impact.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our unique model pairs U.S. schools with partner schools abroad. Every voucher supports students on both sides—doubling the impact of every donation.
            </p>
            
            <ul className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/programs">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-bold rounded-full">
                  Learn More
                </Button>
              </Link>
              <Link href="/sponsor">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-base font-bold rounded-full bg-transparent">
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative">
              <Image 
                src="/2x.png" 
                alt="Support One, Empower Two" 
                width={500} 
                height={500}
                className="w-full rounded-2xl shadow-2xl"
              />
              {/* Decorative gradient */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
