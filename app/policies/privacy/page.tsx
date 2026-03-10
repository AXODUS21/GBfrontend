import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Privacy Policy</h1>
          <p className="text-lg md:text-xl opacity-95">
            Effective Date: March 4, 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">1. Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                Global Bright Futures Foundation, Inc. ("we," "our," or "the Foundation") is committed to protecting 
                your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website and use our services.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">2. Information Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                We may collect information that you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Make a donation</li>
                <li>Sign up for our newsletter</li>
                <li>Contact us with an inquiry</li>
                <li>Apply for a program or partnership</li>
              </ul>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                The types of information we may collect include your name, email address, mailing address, 
                phone number, and payment information (processed securely through third-party providers).
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">3. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Process donations and issue tax receipts</li>
                <li>Send updates about our programs and impact</li>
                <li>Respond to your comments and questions</li>
                <li>Improve our website and services</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">4. Information Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                information with trusted service providers who assist us in operating our website, 
                conducting our business, or serving our users, so long as those parties agree to keep 
                this information confidential.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">5. Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal 
                information. However, no method of transmission over the Internet or method of 
                electronic storage is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">6. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <strong>Email:</strong> admin@globalbrightfutures.org
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
