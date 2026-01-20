"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { School } from "lucide-react"

export default function ApplyPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to backend signup/login
    // Get the backend URL from environment or use relative path
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001"
    window.location.href = `${backendUrl}/auth/signup?redirect=apply`
  }, [])

  return (
    <main>
      <Navigation />
      <section className="min-h-screen flex items-center justify-center py-16 md:py-24 bg-background">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-indigo-500/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <School className="text-indigo-600" size={32} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Redirecting...</h2>
              <p className="text-foreground/70">
                Please register as a school to apply for scholarships.
              </p>
              <p className="text-sm text-foreground/50">
                If you're not redirected, <a href={`${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001"}/auth/signup`} className="text-indigo-600 underline">click here</a>.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
      <Footer />
    </main>
  )
}




