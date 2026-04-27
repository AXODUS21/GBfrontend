"use client"

import { FadeIn } from "@/components/motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Carousel } from "@ark-ui/react/carousel"

const sliderImages = [
  "/c1.png",
  "/c2.png",
  "/c3.png",
  "/c4.png",
  "/c5.png",
  "/c6.png",
  "/c7.png",
  "/c8.png",
  "/c9.png"
]

export default function LatestImpact() {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3 block">
              Up-to-Date Impact
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Program Reach & Field Impact
            </h2>
          </FadeIn>
        </div>

        {/* Image Slider - Moved from ImpactSection */}
        <FadeIn delay={0.3}>
          <div className="max-w-6xl mx-auto">
            <Carousel.Root
              defaultPage={0}
              slideCount={sliderImages.length}
              className="w-full relative"
            >
              <Carousel.ItemGroup className="overflow-hidden rounded-2xl shadow-sm border bg-background mb-4">
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
                <Carousel.PrevTrigger className="p-2 bg-background hover:bg-muted border rounded-lg transition-colors shrink-0 flex items-center justify-center">
                  <ChevronLeft className="w-5 h-5 text-foreground" />
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

                <Carousel.NextTrigger className="p-2 bg-background hover:bg-muted border rounded-lg transition-colors shrink-0 flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </Carousel.NextTrigger>
              </div>
            </Carousel.Root>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
