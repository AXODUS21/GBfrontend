import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Globe2, GraduationCap } from "lucide-react"

const impacts = [
  {
    icon: BookOpen,
    title: "Education Access",
    description: "High-quality tutoring, mentorship, education access awards, and learning resources for students independently selected by participating schools.",
  },
  {
    icon: Globe2,
    title: "Global School Pairing",
    description:
      "Each U.S. school voucher is paired with a partner school abroad. Schools independently identify and support students based on educational needs.",
  },
  {
    icon: GraduationCap,
    title: "Student Fellowship",
    description: "Under-resourced students gain teaching experience, mentorship, leadership skills, and financial support while completing their education.",
  },
]

export default function ImpactSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {impacts.map((impact, idx) => {
            const Icon = impact.icon
            return (
              <Card key={idx} className="border-border hover:shadow-lg transition">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-foreground">{impact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">{impact.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
