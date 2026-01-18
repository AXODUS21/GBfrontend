import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CodeOfEthicsPage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Code of Ethics</h1>
          <p className="text-lg md:text-xl opacity-95">
            Effective Date: January 3, 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">1. Purpose</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                The Code of Ethics establishes standards of conduct to promote integrity, accountability, 
                transparency, and compliance in all activities of Global Bright Futures Foundation, Inc.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">2. Applicability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                This Code applies to all directors, officers, employees, contractors, and volunteers of the 
                Corporation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">3. Ethical Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                All covered individuals shall:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Act honestly, ethically, and in good faith in all matters involving the Corporation.</li>
                <li>Exercise fiduciary duties of care, loyalty, and obedience to the Corporation's charitable 
                    mission.</li>
                <li>Comply with all applicable federal, state, and local laws, regulations, and internal 
                    policies.</li>
                <li>Safeguard the Corporation's assets, funds, records, and intellectual property.</li>
                <li>Protect confidential information relating to students, families, donors, partners, and 
                    personnel.</li>
                <li>Avoid misuse of position, information, or resources for personal benefit.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">4. Reporting Obligations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                All covered individuals have a duty to promptly report suspected misconduct, violations of law, 
                or breaches of this Code in accordance with the Whistleblower Policy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">5. Enforcement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                Violations of this Code may result in disciplinary action, up to and including removal from 
                office, termination of employment or volunteer service, restitution, and referral to appropriate 
                authorities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
