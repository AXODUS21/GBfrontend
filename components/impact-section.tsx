"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 2, suffix: "x", label: "Impact Per Donation", description: "Every voucher helps students in the US and abroad" },
  { value: 100, suffix: "%", label: "Tax Deductible", description: "501(c)(3) nonprofit organization" },
  { value: 10, suffix: "+", label: "Hours of Tutoring", description: "Per $200 voucher allocated" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const startTime = Date.now()
          
          const animate = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(easeOut * value))
            
            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(value)
            }
          }
          animate()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
      {count}{suffix}
    </div>
  )
}

export default function ImpactSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every donation creates real, measurable change for students around the world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <h3 className="text-xl font-bold text-foreground mt-4 mb-2">
                {stat.label}
              </h3>
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
