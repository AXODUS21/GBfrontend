"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle, Loader2 } from "lucide-react"

interface ZeffyDonationProps {
  zeffyFormUrl?: string
  suggestedAmounts?: number[]
  onDonateClick?: (amount: number, isRecurring: boolean) => void
}

export default function ZeffyDonation({
  zeffyFormUrl,
  suggestedAmounts = [5, 10, 25, 50, 75, 100, 200, 500],
  onDonateClick,
}: ZeffyDonationProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [donationType, setDonationType] = useState<"one-time" | "recurring">("one-time")
  const [isLoading, setIsLoading] = useState(false)

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount)
    if (!amount || amount <= 0) {
      alert("Please select or enter a donation amount")
      return
    }

    setIsLoading(true)

    // If Zeffy form URL is provided, redirect to it with amount parameter
    if (zeffyFormUrl) {
      const url = new URL(zeffyFormUrl)
      url.searchParams.set("amount", amount.toString())
      if (donationType === "recurring") {
        url.searchParams.set("recurring", "true")
      }
      window.open(url.toString(), "_blank")
      setIsLoading(false)
    } else if (onDonateClick) {
      onDonateClick(amount, donationType === "recurring")
      setIsLoading(false)
    } else {
      // Fallback: show alert if no configuration
      alert("Zeffy donation form URL is not configured. Please contact the administrator.")
      setIsLoading(false)
    }
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground text-xl mb-4">Make a Donation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Suggested Amounts */}
        <div>
          <Label className="text-foreground mb-3 block">Select Amount</Label>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-3">
            {suggestedAmounts.map((amount) => (
              <Button
                key={amount}
                type="button"
                variant={selectedAmount === amount ? "default" : "outline"}
                className={`${
                  selectedAmount === amount
                    ? "bg-primary text-primary-foreground"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                } py-6 text-lg font-semibold`}
                onClick={() => handleAmountSelect(amount)}
              >
                ${amount}
              </Button>
            ))}
          </div>
          <div className="mt-3">
            <Label htmlFor="custom-amount" className="text-foreground mb-2 block">
              Or enter custom amount
            </Label>
            <Input
              id="custom-amount"
              type="number"
              min="1"
              step="0.01"
              placeholder="Enter amount"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        {/* Donation Type */}
        <div>
          <Label className="text-foreground mb-3 block">Donation Type</Label>
          <RadioGroup
            value={donationType}
            onValueChange={(value) => setDonationType(value as "one-time" | "recurring")}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-time" id="one-time" />
              <Label htmlFor="one-time" className="cursor-pointer text-foreground">
                One-time
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="recurring" id="recurring" />
              <Label htmlFor="recurring" className="cursor-pointer text-foreground">
                Monthly Recurring
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Zeffy Form Embed (if URL provided) */}
        {zeffyFormUrl && (
          <div className="mt-6">
            <div className="bg-secondary/10 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-green-600" size={20} />
                <p className="text-sm font-semibold text-foreground">Secure Donation via Zeffy</p>
              </div>
              <p className="text-xs text-foreground/70">
                Your donation is processed securely through Zeffy. All donations are tax-deductible.
              </p>
            </div>
          </div>
        )}

        {/* Donate Button */}
        <Button
          onClick={handleDonate}
          disabled={isLoading || (!selectedAmount && !customAmount)}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-semibold"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            "Donate Now"
          )}
        </Button>

        {/* Tax Information */}
        <div className="bg-primary/5 border-2 border-primary rounded-xl p-4 text-center">
          <p className="text-sm font-semibold text-foreground mb-1">
            All donations are tax-deductible to the extent allowed by law.
          </p>
          <p className="text-xs text-foreground/70">
            Global Bright Futures Foundation Inc. is a 501(c)(3) nonprofit organization.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
