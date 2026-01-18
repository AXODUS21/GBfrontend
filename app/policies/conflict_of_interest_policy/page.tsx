import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConflictOfInterestPolicyPage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Conflict of Interest Policy</h1>
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
                This Conflict of Interest Policy ensures that all decisions and actions of Global Bright Futures 
                Foundation, Inc. (the "Corporation") are made solely in the best interests of the Corporation and 
                its charitable mission, without improper influence from personal, financial, or business interests. 
                This policy is intended to comply with IRS requirements, state nonprofit law, and expectations 
                of grantors, banks, auditors, and regulators.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">2. Covered Persons</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                This policy applies to all directors, officers, key employees, staff members, contractors in 
                decision-making roles, and volunteers with substantial authority.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">3. Definition of Conflict of Interest</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                A conflict of interest exists when a Covered Person has a direct or indirect personal, financial, 
                or business interest that could compromise—or appear to compromise—their objectivity, 
                independence, or fiduciary duty to the Corporation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">4. Disclosure Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3 text-foreground/80 ml-4">
                <li>
                  <strong>Initial and Annual Disclosure:</strong> All Covered Persons must complete a written Conflict of 
                  Interest Disclosure upon appointment or engagement and annually thereafter.
                </li>
                <li>
                  <strong>Ongoing Duty to Disclose:</strong> Covered Persons must promptly disclose any actual or 
                  potential conflict as soon as it arises.
                </li>
                <li>
                  <strong>Recordkeeping:</strong> All disclosures shall be maintained as part of the Corporation's official 
                  records.
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">5. Procedures for Addressing Conflicts</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3 text-foreground/80 ml-4">
                <li>
                  <strong>Recusal:</strong> A Covered Person with a conflict must recuse themselves from all discussions, 
                  deliberations, decisions, and votes related to the matter.
                </li>
                <li>
                  <strong>Determination:</strong> The Board of Directors or an authorized committee shall determine 
                  whether a conflict exists.
                </li>
                <li>
                  <strong>Approval of Related-Party Transactions:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>All related-party transactions must be reviewed and approved in advance by 
                        disinterested members of the Board.</li>
                    <li>Approval must be based on a determination that the transaction is fair, reasonable, 
                        and in the best interest of the Corporation.</li>
                  </ul>
                </li>
                <li>
                  <strong>Documentation:</strong> All disclosures, recusals, determinations, and approvals must be fully 
                  documented in Board or committee minutes.
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">6. Violations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                Failure to disclose a conflict or comply with this policy may result in corrective action, 
                including removal from position, termination of engagement, or other remedies permitted by 
                law.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
