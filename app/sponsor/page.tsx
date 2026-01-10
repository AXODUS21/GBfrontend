"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Heart, Globe2, Users, GraduationCap, DollarSign, CheckCircle, ArrowRight, Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"

const suggestedAmounts = [5, 10, 25, 50, 75, 100, 200, 500]

export default function SponsorPage() {
  const [showDonationForm, setShowDonationForm] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState<"one-time" | "recurring">("one-time")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
  })

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
    setShowDonationForm(true)
  }

  const handleCustomAmount = () => {
    setSelectedAmount(null)
    setShowDonationForm(true)
  }

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const amount = selectedAmount || parseFloat(customAmount)
    if (!amount || amount <= 0) {
      toast.error("Please enter a valid donation amount")
      setIsSubmitting(false)
      return
    }

    if (!donorInfo.name || !donorInfo.email) {
      toast.error("Please fill in all required fields")
      setIsSubmitting(false)
      return
    }

    try {
      const { data, error } = await supabase
        .from("donations")
        .insert([
          {
            donor_name: donorInfo.name,
            donor_email: donorInfo.email,
            amount: amount,
            donation_type: donationType,
            payment_status: "pending", // Will be updated when payment is processed
          },
        ])
        .select()

      if (error) throw error

      toast.success("Donation submitted successfully! We'll process your payment and send a confirmation email.")
      
      // Reset form
      setDonorInfo({ name: "", email: "" })
      setSelectedAmount(null)
      setCustomAmount("")
      setShowDonationForm(false)
    } catch (error: any) {
      console.error("Error submitting donation:", error)
      toast.error(error.message || "Failed to submit donation. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-accent/80 to-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance flex items-center gap-3">
            <span className="text-5xl">💙</span>
            <span>Change Two Lives With One Gift</span>
          </h1>
          <div className="max-w-3xl space-y-4 text-lg md:text-xl opacity-95">
            <p>
              Every child deserves the chance to learn, grow, and dream of a brighter future. Yet for millions of students—both in the United States and around the world—financial barriers limit access to tutoring, mentorship, and even basic educational materials.
            </p>
            <p className="font-semibold">
              Your generosity makes a difference.
            </p>
            <p>
              When you donate to Global Bright Futures Foundation Inc., your gift supports students selected by trusted partner schools—ensuring help reaches those who need it most while remaining ethical, transparent, and fully compliant with U.S. nonprofit laws.
            </p>
          </div>
        </div>
      </section>

      {/* How Your Donation Works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-balance flex items-center justify-center gap-3">
            <span className="text-4xl">🌍</span>
            <span>How Your Donation Works</span>
          </h2>
          
          <div className="space-y-6 mb-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Participating schools identify students with documented educational need</h3>
                    <p className="text-foreground/70">Schools independently select students based on demonstrated need, ensuring ethical distribution and compliance.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Donations fund education access vouchers issued directly to schools</h3>
                    <p className="text-foreground/70">Your contribution is converted into vouchers that schools can apply toward approved educational services and materials.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Schools apply vouchers toward:</h3>
                    <ul className="list-disc list-inside space-y-1 text-foreground/70 ml-4">
                      <li>Tutoring and academic support</li>
                      <li>Mentorship and enrichment programs</li>
                      <li>Educational materials and school supplies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Globe2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Each U.S. school is paired with a partner school abroad—doubling impact</h3>
                    <p className="text-foreground/70">Your donation automatically creates a matching voucher for a partner school serving students in under-resourced communities internationally.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 border-2 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Donors do not select individual students, preserving dignity and ensuring IRS compliance</h3>
                    <p className="text-foreground/70">Schools independently select students based on need, ensuring fair distribution and maintaining our nonprofit integrity and tax-exempt status.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supporting the Next Generation of Educators */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-balance flex items-center justify-center gap-3">
            <span className="text-4xl">🎓</span>
            <span>Supporting the Next Generation of Educators</span>
          </h2>
          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary" size={32} />
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 text-lg">
                  Donations also support under-resourced college students through our College Teaching Fellowship, providing stipends while they tutor and mentor younger learners.
                </p>
                <p className="text-foreground/70 mt-4">
                  This service-based model creates a sustainable cycle of learning that benefits both college students and younger learners, promoting college completion, workforce readiness, and leadership development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-balance flex items-center justify-center gap-3">
            <span className="text-4xl">💵</span>
            <span>Ways to Give</span>
          </h2>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-xl mb-4">Suggested Donation Amounts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-6">
                {suggestedAmounts.map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    variant="outline"
                    onClick={() => handleAmountSelect(amount)}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 text-lg font-semibold"
                  >
                    ${amount}
                  </Button>
                ))}
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={handleCustomAmount}
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 text-lg font-semibold"
              >
                Custom Amount
              </Button>
            </CardContent>
          </Card>

          <div className="bg-secondary/10 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500/10 rounded-full w-10 h-10 flex items-center justify-center">
                <CheckCircle className="text-green-600" size={20} />
              </div>
              <h3 className="font-semibold text-foreground text-lg">One-time or recurring donations</h3>
            </div>
            <p className="text-foreground/70 ml-[52px]">
              Choose to make a one-time donation or set up a recurring monthly contribution for sustained impact.
            </p>
          </div>

          <div className="bg-primary/5 border-2 border-primary rounded-xl p-8 text-center mb-8">
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              All donations are tax-deductible to the extent allowed by law.
            </p>
            <p className="text-lg text-foreground/80 font-medium">
              One gift. Two schools. Lasting impact.
            </p>
          </div>

          {/* Donation Form */}
          {showDonationForm && (
            <Card className="border-primary/20 border-2 mb-8">
              <CardHeader>
                <CardTitle className="text-foreground">Complete Your Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDonationSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="donor-name">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="donor-name"
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="donor-email">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="donor-email"
                      type="email"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="donation-type">Donation Type</Label>
                    <Select value={donationType} onValueChange={(value: "one-time" | "recurring") => setDonationType(value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-time">One-time</SelectItem>
                        <SelectItem value="recurring">Recurring (Monthly)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="donation-amount">
                      Donation Amount ($) <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="donation-amount"
                      type="number"
                      min="1"
                      step="0.01"
                      value={selectedAmount ? selectedAmount.toString() : customAmount}
                      onChange={(e) => {
                        const value = e.target.value
                        if (value) {
                          setCustomAmount(value)
                          setSelectedAmount(null)
                        } else {
                          setCustomAmount("")
                        }
                      }}
                      required
                      placeholder="Enter amount"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Submit Donation"
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setShowDonationForm(false)
                        setSelectedAmount(null)
                        setCustomAmount("")
                        setDonorInfo({ name: "", email: "" })
                      }}
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                  </div>

                  <p className="text-sm text-foreground/70 text-center">
                    Note: Payment processing will be implemented in the next phase. This form records your donation intent.
                  </p>
                </form>
              </CardContent>
            </Card>
          )}

          {/* CTA Buttons */}
          {!showDonationForm && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowDonationForm(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
              >
                Donate Now
              </Button>
              <Link href="/programs">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg bg-transparent w-full sm:w-auto"
                >
                  Learn How Your Gift Works
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Tax Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Global Bright Futures Foundation Inc. is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the full extent permitted by law.
              </p>
              <p className="text-foreground/70 mb-4">
                We'll provide you with a detailed receipt and annual statement for your tax records upon request.
              </p>
              <div className="bg-background rounded-lg p-4 mt-4">
                <p className="text-sm text-foreground/70">
                  <strong className="text-foreground">Note:</strong> Please consult with a tax professional for specific advice regarding your donation's tax implications.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
