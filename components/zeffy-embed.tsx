"use client"

import { useEffect, useRef } from "react"

interface ZeffyEmbedProps {
  formUrl: string
  width?: string
  height?: string
  className?: string
  embedType?: "default" | "thermometer"
}

/**
 * Zeffy Donation Form Embed Component
 * 
 * This component embeds a Zeffy donation form using an iframe.
 * Supports both regular form embeds and thermometer-style embeds.
 * 
 * To get your form URL:
 * 1. Log into your Zeffy dashboard
 * 2. Go to "Donations" > "My forms"
 * 3. Click "Share" next to your form
 * 4. Select "Embed your form in your website"
 * 5. Copy the iframe src URL and use it as the formUrl prop
 * 
 * For thermometer embeds, use embedType="thermometer"
 */
export default function ZeffyEmbed({
  formUrl,
  width = "100%",
  height = "800px",
  className = "",
  embedType = "default",
}: ZeffyEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Listen for messages from Zeffy iframe (for potential future enhancements)
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from Zeffy domain
      if (event.origin.includes("zeffy.com")) {
        // Handle any messages from Zeffy if needed
        console.log("Message from Zeffy:", event.data)
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  // Detect if it's a thermometer embed based on URL
  const isThermometer = embedType === "thermometer" || formUrl.includes("/embed/thermometer/")

  if (isThermometer) {
    return (
      <div
        className={`relative overflow-hidden w-full ${className}`}
        style={{ paddingTop: "120px" }}
      >
        <iframe
          ref={iframeRef}
          title="Donation form powered by Zeffy"
          src={formUrl}
          style={{
            position: "absolute",
            border: "0",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            width: "100%",
            height: "120px",
          }}
          allowTransparency={true}
        />
      </div>
    )
  }

  return (
    <div className={`w-full ${className}`}>
      <iframe
        ref={iframeRef}
        src={formUrl}
        width={width}
        height={height}
        frameBorder="0"
        scrolling="auto"
        className="w-full border-0 rounded-lg"
        title="Zeffy Donation Form"
        allow="payment"
      />
    </div>
  )
}
