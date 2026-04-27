import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance uppercase tracking-tight">Privacy Policy</h1>
          <p className="text-lg md:text-xl opacity-95">
            Effective Date: April 27, 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">1. Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                Global Bright Futures Foundation, Inc. (“GBFF,” “we,” “our,” or “the Foundation”) is committed to protecting the privacy and security of personal information. This Privacy Policy explains how we collect, use, store, and protect information when you access our website, donate, or participate in our programs or services.
                <br /><br />
                By using our website or services, you consent to the practices described in this Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">2. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                We collect personal information only when it is voluntarily provided to us. This may occur when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4 mb-4">
                <li>Make a donation</li>
                <li>Subscribe to communications or newsletters</li>
                <li>Contact us for inquiries or support</li>
                <li>Apply for programs, partnerships, or services</li>
              </ul>
              <p className="text-foreground/80 mb-4 leading-relaxed font-semibold">
                The types of information collected may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Payment information (processed securely through third-party payment processors; GBFF does not store full payment card data)</li>
              </ul>
              <p className="mt-4 text-foreground/80 leading-relaxed italic text-sm">
                We may also collect non-personal data such as website usage analytics to improve performance and user experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">3. How We Use Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                We use collected information strictly for legitimate nonprofit and operational purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Processing donations and issuing receipts where applicable</li>
                <li>Communicating program updates, announcements, and organizational information</li>
                <li>Responding to inquiries and support requests</li>
                <li>Managing program participation and partnerships</li>
                <li>Improving website functionality and service delivery</li>
                <li>Complying with applicable legal, financial, and regulatory obligations</li>
              </ul>
              <p className="mt-4 text-foreground/80 leading-relaxed font-medium">
                We do not use personal information for unrelated commercial purposes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">4. Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                Global Bright Futures Foundation does not sell, rent, or trade personal information.
                <br /><br />
                We may share limited information only with trusted third-party service providers who assist in:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4 my-4">
                <li>Payment processing</li>
                <li>Website hosting and analytics</li>
                <li>Communication systems</li>
                <li>Operational support services</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                All third-party providers are required to maintain confidentiality and use data solely for authorized services on behalf of GBFF.
                <br /><br />
                We may also disclose information if required to comply with applicable laws, regulations, legal processes, or government requests.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">5. Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                We implement reasonable administrative, technical, and physical safeguards to protect personal information from unauthorized access, disclosure, alteration, or destruction.
                <br /><br />
                While we take appropriate security measures, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">6. Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce agreements.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">7. Children’s Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                Our website and services are intended for general educational and informational purposes. We do not knowingly collect personal information directly from children without appropriate authorization from parents, guardians, schools, or authorized institutions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">8. Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                Depending on your location, you may have rights regarding your personal information, including the ability to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4 my-4">
                <li>Request access to your data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data (where applicable by law)</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                Requests may be submitted using the contact information below.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">9. International Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                If you access our website from outside the United States, you acknowledge that your information may be processed and stored in the United States, where data protection laws may differ from those in your country.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">10. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                We reserve the right to update or modify this Privacy Policy at any time. Updates will be posted on this page with a revised effective date. Continued use of the website constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">11. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
                <br /><br />
                <strong>Email:</strong> info@globalbrightfutures.org
                <br />
                <strong>Address:</strong> 5830 E 2ND ST, STE 7000 #30800, CASPER, WY 82609
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
