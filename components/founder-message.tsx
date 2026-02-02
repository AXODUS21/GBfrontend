import Image from "next/image"

export default function FounderMessage() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/ilyne.jpg"
                alt="Ilyne Cendy Root, Founder"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
          </div>
          
          {/* Content */}
          <div>
            <span className="text-sm font-bold text-primary uppercase tracking-wider mb-2 block">
              A Message from Our Founder
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              "Education changed my life"
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Orphaned at a young age, I learned early what it meant to navigate life without consistent support—developing resilience and a deep understanding of the barriers faced by students without stable guidance or resources.
              </p>
              <p>
                That belief has guided every step of my journey as an educator and is the foundation of Global Bright Futures Foundation. Through trusted school partnerships, our programs expand access to tutoring, mentorship, and essential educational resources for students who need them most.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-bold text-foreground text-lg">Ilyne Cendy Root</p>
              <p className="text-muted-foreground">Founder & President</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
