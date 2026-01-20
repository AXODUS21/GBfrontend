"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface BoardMemberProps {
  name: string
  title: string
  shortDescription: string
  fullDescription: string
  highlights?: string[]
  imageSrc?: string
  imageAlt?: string
}

export function BoardMember({
  name,
  title,
  shortDescription,
  fullDescription,
  highlights,
  imageSrc,
  imageAlt,
}: BoardMemberProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="border-border">
      <CardHeader>
        {imageSrc && (
          <div className="mb-4 flex justify-center">
            <div className="h-32 w-32 overflow-hidden rounded-full border border-border bg-muted">
              <img
                src={imageSrc}
                alt={imageAlt || `${name} portrait`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        )}
        <CardTitle className="text-foreground text-xl">{name}</CardTitle>
        <p className="text-primary font-medium text-sm">{title}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-foreground/80 leading-relaxed">
            {isExpanded ? (
              <div className="space-y-4">
                <p>{fullDescription}</p>
                {highlights && highlights.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-foreground mb-3">Selected Leadership Highlights</h4>
                    <ul className="space-y-2 list-disc list-inside text-foreground/70">
                      {highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <p>{shortDescription}</p>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-1" size={16} />
              </>
            ) : (
              <>
                Learn More <ChevronDown className="ml-1" size={16} />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}