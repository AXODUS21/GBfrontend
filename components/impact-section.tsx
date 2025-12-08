import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Globe2, Users } from "lucide-react"

const impacts = [
  {
    icon: BookOpen,
    title: "Education Access",
    description: "Tutoring, scholarships, and learning support for students selected by participating schools.",
  },
  {
    icon: Globe2,
    title: "Global School Pairing",
    description:
      "Each voucher issued to a U.S. school is automatically paired with a partner school abroad, which independently selects its students.",
  },
  {
    icon: Users,
    title: "Training Future Tutors",
    description: "Underprivileged college students gain skills and income through tutoring programs.",
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
