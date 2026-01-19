import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsAndConditionsPage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Terms & Conditions</h1>
          <p className="text-lg md:text-xl opacity-95">
            Effective Date: January 3, 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                By accessing or using the website, services, programs, or donation platforms of Global Bright Futures 
                Foundation, Inc. ("GBFF," "the Foundation," "we," or "us"), you agree to be bound by these Terms & 
                Conditions and all applicable federal, state, and local laws and regulations. If you do not agree, you 
                may not use the website or participate in Foundation programs.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">2. Website Use</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>The website and its content are provided for informational, educational, and charitable purposes 
                    only.</li>
                <li>Users agree not to misuse the website, interfere with its operation, or attempt unauthorized 
                    access to any systems, accounts, or data.</li>
                <li>Users must comply with all applicable laws when using the website.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">3. Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>All donations are voluntary, non-refundable, and must comply with applicable laws.</li>
                <li>GBFF reserves the right to decline or return donations that do not meet legal, ethical, or 
                    regulatory standards.</li>
                <li>Donations may be tax-deductible to the extent allowed by law; consult your tax advisor for local 
                    rules.</li>
                <li>International donations are subject to applicable U.S. regulations, including IRS, OFAC, and 
                    anti-money laundering laws.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">4. Program Participation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Participation in GBFF programs is subject to eligibility requirements, availability, and 
                    compliance with Foundation policies.</li>
                <li>The Foundation reserves the right to modify, suspend, or discontinue programs at its discretion.</li>
                <li>GBFF is <strong>not a school</strong>; it does not maintain student education records. Any student information 
                    provided to GBFF is limited to aggregated or de-identified data only.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">5. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>All website content, including text, graphics, logos, images, and materials, is the property of 
                    GBFF or its licensors.</li>
                <li>Users may not reproduce, distribute, display, or create derivative works without prior written 
                    consent, except as expressly permitted by law.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">6. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>To the fullest extent permitted by law, GBFF shall not be liable for any direct, indirect, 
                    incidental, special, or consequential damages arising from the use of the website, donations, or 
                    participation in programs.</li>
                <li>GBFF is not responsible for damages caused by third-party websites, services, or links.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">7. Third-Party Links and Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>The website may include links to third-party websites or services.</li>
                <li>GBFF does not control, endorse, or assume responsibility for the privacy practices, content, or 
                    terms of such third-party platforms.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">8. Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                These Terms & Conditions are governed by and construed in accordance with the laws of the State of 
                Wyoming and applicable U.S. federal law. Any disputes shall be subject to the exclusive jurisdiction of 
                courts in Wyoming.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">9. Modifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                GBFF reserves the right to update or modify these Terms & Conditions at any time. Updates will be 
                posted on the website with a revised effective date. Continued use of the website or participation in 
                programs constitutes acceptance of the updated Terms & Conditions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
