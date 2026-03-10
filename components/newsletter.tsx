"use client"

import { FadeIn, MagneticButton } from "@/components/motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="section-padding bg-background relative overflow-hidden border-t border-border/50">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="bg-primary/5 rounded-[2rem] p-8 md:p-12 border border-primary/10 shadow-xl overflow-hidden relative">
          {/* Subtle decoration */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
          
          <div className="text-center mb-10">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Stay Updated on Our Impact
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Join our community to receive monthly updates on how your support is changing lives around the world.
              </p>
            </FadeIn>
          </div>

          {!submitted ? (
            <FadeIn delay={0.2}>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full bg-background border-primary/20 focus:border-primary h-12 px-6"
                />
                <MagneticButton>
                  <Button 
                    type="submit" 
                    className="rounded-full bg-primary hover:bg-primary/90 px-8 h-12 font-bold shadow-lg"
                  >
                    Subscribe <Send size={18} className="ml-2" />
                  </Button>
                </MagneticButton>
              </form>
            </FadeIn>
          ) : (
            <FadeIn>
              <div className="text-center py-4 text-primary font-bold flex flex-col items-center gap-3">
                <CheckCircle2 size={48} className="animate-bounce" />
                <span className="text-xl">Thank you for joining us!</span>
                <p className="text-muted-foreground font-normal">You've been successfully added to our newsletter.</p>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  )
}
