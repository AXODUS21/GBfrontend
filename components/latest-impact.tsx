"use client"

import { FadeIn, StaggerChildren, StaggerItem, ScaleIn } from "@/components/motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const impactStories = [
  {
    title: "New Partnership in Manila",
    date: "February 20, 2026",
    location: "Manila, Philippines",
    description: "Expanded our 'Support One, Empower Two' program to three new elementary schools, reaching 150+ additional students.",
    image: "/partner-1.jpg",
  },
  {
    title: "STEM Kits for Wyoming Schools",
    date: "January 15, 2026",
    location: "Casper, WY",
    description: "Distributed 50 comprehensive STEM learning kits to rural schools in Wyoming to support hands-on science education.",
    image: "/partner-2.jpg",
  },
  {
    title: "Fellowship Program Milestone",
    date: "December 10, 2025",
    location: "Global",
    description: "Our Student Fellowship Program has now officially matched 200 college mentors with 500 younger learners.",
    image: "/partner-3.jpg",
  },
]

export default function LatestImpact() {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3 block">
                Up-to-Date Impact
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Our Latest Milestones
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Link href="/programs" className="group flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all duration-300 mb-2">
              View All Programs <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>

        <StaggerChildren className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
          {impactStories.map((story, idx) => (
            <StaggerItem key={idx}>
              <Card className="overflow-hidden border-border/50 hover:shadow-2xl transition-all duration-500 group h-full bg-background">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {story.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {story.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {story.description}
                  </p>
                  <Link href="/about" className="text-sm font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
                    Read Full Story
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
