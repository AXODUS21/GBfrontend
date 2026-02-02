import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/hero.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-up">
          Bring Education to Every Child
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
          We connect schools worldwide to provide tutoring, mentorship, and educational resources to students who need them most.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/sponsor">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Donate Now
            </Button>
          </Link>
          <Link href="/programs">
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg font-medium rounded-full bg-transparent"
            >
              Learn More
            </Button>
          </Link>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
