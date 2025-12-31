import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Globe2, Users } from "lucide-react"

export default function SponsorPage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-accent/80 to-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Sponsor a Student</h1>
          <p className="text-lg md:text-xl opacity-95 text-balance max-w-3xl">
            Your sponsorship transforms lives in two locations. Schools independently select students, ensuring
            compliance and maximum impact.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-accent" size={24} />
                </div>
                <CardTitle className="text-foreground">Your Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Your sponsorship funds tutoring, mentorship, and educational programs for deserving students.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-accent" size={24} />
                </div>
                <CardTitle className="text-foreground">2x Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Each sponsorship benefits a matched student abroad through our school partnership model.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe2 className="text-accent" size={24} />
                </div>
                <CardTitle className="text-foreground">Tax Deductible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  All sponsorships are tax-deductible. Receive detailed documentation for your records.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-secondary/20 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Sponsorship Options</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">One-Time Sponsorship</h3>
                  <p className="text-foreground/70">
                    Make a one-time donation of $100, $500, or $1,000 to support a student's educational journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">Recurring Monthly Sponsorship</h3>
                  <p className="text-foreground/70">
                    Commit to monthly donations ($25-$250) for sustained, long-term impact on student development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">Corporate Matching</h3>
                  <p className="text-foreground/70">
                    Ask your employer about corporate matching programs to double your sponsorship impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border-2 border-primary rounded-lg p-6 mb-8">
              <h3 className="font-bold text-foreground mb-3">How Matching Works</h3>
              <p className="text-foreground/70 mb-4">
                Donors do not select specific students to ensure compliance with IRS private benefit rules. Our partner
                schools independently select students most in need of support. This ensures fair, ethical distribution
                of resources and maintains our nonprofit integrity.
              </p>
              <p className="text-foreground/70 text-sm italic">
                Every sponsorship is matched with a student in both a U.S. school and a partner school abroad, creating
                twice the impact.
              </p>
            </div>

            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg mb-4">
              Become a Sponsor Today
            </Button>
            <Button
              variant="outline"
              className="w-full border-accent text-accent hover:bg-accent/5 py-6 text-lg bg-transparent"
            >
              Learn More About the Model
            </Button>
          </div>

          <div className="bg-background rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Tax Information</h3>
            <p className="text-foreground/70 mb-4">
              Global Bright Futures Foundation is a 501(c)(3) nonprofit organization. Your sponsorship donation is
              tax-deductible to the full extent permitted by law.
            </p>
            <p className="text-foreground/70 mb-4">
              <strong>Tax ID:</strong> 12-3456789
            </p>
            <p className="text-foreground/70">
              We'll provide you with a detailed receipt and annual statement for your tax records.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
