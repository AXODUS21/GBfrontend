import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsAndConditionsPage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance uppercase tracking-tight">Terms & Conditions</h1>
          <p className="text-lg md:text-xl opacity-95">
            Effective Date: April 27, 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                By accessing or using the website, services, programs, or donation platforms of Global Bright Futures Foundation, Inc. (“GBFF,” “the Foundation,” “we,” or “us”), you agree to be bound by these Terms & Conditions and all applicable federal, state, and local laws and regulations. If you do not agree, you must discontinue use of the website and services.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">2. Website Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                The website and its content are provided for informational, educational, and charitable purposes only.
                <br /><br />
                Users agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Misuse or disrupt the website or services</li>
                <li>Attempt unauthorized access to systems, accounts, or data</li>
                <li>Violate any applicable laws while using the website</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">3. Donations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                All donations are voluntary and non-refundable, except where required by law.
                GBFF reserves the right to decline, return, or restrict donations that do not meet legal, ethical, or compliance requirements.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Donations may be tax-deductible in the United States to the extent permitted by law. Donors should consult a qualified tax advisor for specific eligibility under applicable regulations.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                For international donors, tax deductibility depends on the laws of the donor’s country. GBFF does not guarantee tax deductibility outside the United States.
              </p>
              <p className="text-foreground/80 leading-relaxed font-medium">
                All donations are subject to applicable U.S. laws and regulations, including IRS requirements, anti-money laundering laws, and applicable sanctions regulations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">4. Program Participation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Participation in GBFF programs is subject to eligibility requirements, program availability, and compliance with Foundation policies.
                The Foundation reserves the right to modify, suspend, or discontinue any program at its discretion.
              </p>
              <p className="text-foreground/80 leading-relaxed italic">
                GBFF is not a school and does not issue academic records or maintain student education records. Any student-related information collected is limited to program administration, aggregated reporting, or de-identified data where applicable.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">5. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                All website content, including text, graphics, logos, images, and materials, is the property of GBFF or its licensors.
                No content may be reproduced, distributed, or modified without prior written consent, except where permitted by law.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">6. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                To the fullest extent permitted by law, GBFF shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of the website, donations, or program participation.
                GBFF is not responsible for content, policies, or actions of third-party websites or services linked through the platform.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">7. Third-Party Links</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                The website may contain links to third-party websites or services. GBFF does not control or assume responsibility for third-party content, privacy practices, or terms of use.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">8. Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                These Terms & Conditions are governed by the laws of the State of Wyoming and applicable U.S. federal law. Any disputes shall be resolved in courts located in Wyoming, unless otherwise required by law.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">9. Modifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                GBFF reserves the right to update or modify these Terms & Conditions at any time. Updates will be posted on the website with a revised effective date. Continued use of the website or services constitutes acceptance of the updated Terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
