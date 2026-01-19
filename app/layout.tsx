import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Get the base URL for Open Graph images
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://globalbrightfutures.org'

export const metadata: Metadata = {
  title: "Global Bright Futures Foundation | School-to-School Partnerships",
  description: "Empowering students locally and globally through school-to-school learning partnerships",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Global Bright Futures Foundation | School-to-School Partnerships",
    description: "Empowering students locally and globally through school-to-school learning partnerships",
    url: baseUrl,
    siteName: "Global Bright Futures Foundation",
    images: [
      {
        url: `${baseUrl}/preview.png`,
        width: 1200,
        height: 630,
        alt: "Global Bright Futures Foundation - 3-Way Impact Model",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Bright Futures Foundation | School-to-School Partnerships",
    description: "Empowering students locally and globally through school-to-school learning partnerships",
    images: [`${baseUrl}/preview.png`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
