import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhistleblowerPolicyPage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Whistleblower Policy</h1>
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
                The Whistleblower Policy provides a secure, confidential, and lawful mechanism for reporting suspected 
                wrongdoing, while protecting individuals who report concerns in good faith from retaliation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">2. Reportable Conduct</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                This policy applies to concerns involving, but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Fraud, theft, embezzlement, or misuse of charitable funds or assets</li>
                <li>Violations of federal, state, or local laws or regulations</li>
                <li>Violations of Corporation policies or ethical standards</li>
                <li>Gross mismanagement, abuse of authority, or unethical conduct</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">3. Reporting Procedures</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3 text-foreground/80 ml-4">
                <li>
                  Reports may be made in writing, by email, or verbally to the President or Secretary of the Corporation.
                </li>
                <li>
                  If the concern involves the President, the report shall be submitted directly to the Board of Directors or 
                  the Chair of the Board.
                </li>
                <li>
                  Reports may be made anonymously; however, providing contact information may assist in the 
                  investigation.
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">4. Confidentiality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                The Corporation shall maintain confidentiality to the fullest extent permitted by law. Information will be shared 
                only on a need-to-know basis to conduct a proper investigation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">5. Investigation and Resolution</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3 text-foreground/80 ml-4">
                <li>All reports shall be promptly reviewed and investigated by the Board or a designated independent 
                    committee.</li>
                <li>Investigations shall be conducted objectively, thoroughly, and in good faith.</li>
                <li>Appropriate corrective or remedial actions shall be taken based on investigative findings.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">6. Non-Retaliation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                No director, officer, employee, contractor, or volunteer who reports a concern in good faith shall be subject to 
                retaliation, harassment, or adverse action. Retaliation constitutes a serious policy violation and may result in 
                disciplinary action.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
