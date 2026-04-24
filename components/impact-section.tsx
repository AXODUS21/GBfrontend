"use client"

import { FadeIn, StaggerChildren, StaggerItem, CountUp, DrawLine } from "@/components/motion"
import { Carousel } from "@ark-ui/react/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const stats = [
  { value: 3, suffix: "x", text: "3x Impact / Students. Educators. Communities" },
  { value: 10000, suffix: "+", text: "Serving 10000+ students annually" },
  { value: 80, suffix: "+", text: "Supporting 80+ youth, tutors and educators" },
  { value: 10, suffix: "+", text: "10+ School and Community Partners" },
]

const sliderImages = [
  "/c1.png",
  "/c2.png",
  "/c3.png",
  "/c4.png",
  "/c5.png",
  "/c6.png",
  "/c7.png",
  "/c8.png"
]

export default function ImpactSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3 block">
              Our Reach
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Our Impact in Numbers
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              One investment creates multiple impacts—helping more students learn, giving tutors opportunities, and supporting educators.
            </p>
          </FadeIn>
          <DrawLine className="w-16 h-0.5 bg-accent mx-auto mt-8" delay={0.4} />
        </div>
        
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-24" staggerDelay={0.15}>
          {stats.map((stat, idx) => (
            <StaggerItem key={idx}>
              <div className="text-center group flex flex-col items-center justify-center h-full">
                <div className="relative inline-block my-2">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-5xl md:text-6xl font-bold text-primary"
                  />
                  {/* Subtle glow behind number */}
                  <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {stat.text && (
                  <p className="text-muted-foreground leading-relaxed mt-2 font-medium">
                    {stat.text}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Image Slider */}
        <FadeIn delay={0.3}>
          <div className="max-w-6xl mx-auto">
            <Carousel.Root
              defaultPage={0}
              slideCount={sliderImages.length}
              className="w-full relative"
            >
              <Carousel.ItemGroup className="overflow-hidden rounded-2xl shadow-sm border bg-muted/20 mb-4">
                {sliderImages.map((img, index) => (
                  <Carousel.Item key={index} index={index}>
                    <div className="relative aspect-video">
                      <Image 
                        src={img} 
                        alt={`Impact image ${index + 1}`} 
                        fill 
                        className="object-cover transition-transform duration-700" 
                        sizes="(max-width: 1200px) 100vw, 1200px"
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel.ItemGroup>

              <div className="flex items-center gap-4">
                <Carousel.PrevTrigger className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors shrink-0 flex items-center justify-center">
                  <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </Carousel.PrevTrigger>

                <Carousel.IndicatorGroup className="flex gap-2 overflow-x-auto scrollbar-hide flex-1 px-2 justify-center">
                  {sliderImages.map((img, index) => (
                    <Carousel.Indicator
                      key={index}
                      index={index}
                      className="shrink-0 border-2 border-transparent data-[state=current]:border-primary rounded-md overflow-hidden cursor-pointer transition-all hover:border-gray-300 h-16 w-24 relative"
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </Carousel.Indicator>
                  ))}
                </Carousel.IndicatorGroup>

                <Carousel.NextTrigger className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors shrink-0 flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </Carousel.NextTrigger>
              </div>
            </Carousel.Root>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
