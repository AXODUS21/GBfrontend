import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LegalComplianceDisclosurePage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Legal & Compliance Disclosures</h1>
          <p className="text-lg md:text-xl opacity-95">
            Public Website Disclosures
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">Anti-Discrimination & Equal Opportunity Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                Global Bright Futures Foundation, Inc. is committed to providing equal opportunity in all of its programs, 
                services, and operations. The Foundation does not discriminate on the basis of race, color, national origin, sex, 
                age, disability, religion, or any other status protected by applicable law. This policy applies to all program 
                participants, beneficiaries, employees, volunteers, contractors, and partners.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">Foreign Donations Disclosure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                Global Bright Futures Foundation, Inc. may accept donations from individuals, organizations, and institutions 
                located outside the United States. All international contributions are accepted in compliance with applicable 
                U.S. laws and regulations, including Internal Revenue Service (IRS) requirements, Office of Foreign Assets 
                Control (OFAC) regulations, and applicable anti-money laundering laws. Tax deductibility of contributions is 
                determined by the donor's country of residence and applicable tax laws.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">Tax-Exempt Status Disclosure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                Global Bright Futures Foundation, Inc. is a U.S.-based nonprofit public charity recognized as tax-exempt under 
                Section 501(c)(3) of the Internal Revenue Code. Contributions are tax-deductible to the extent permitted by law.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">Privacy & Data Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                The Foundation is committed to protecting the privacy and confidentiality of donors, students, families, and 
                partners. Personal information is collected and used solely for lawful organizational purposes and in accordance 
                with the Foundation's Privacy Policy and applicable data protection laws.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">Governance & Accountability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                The Foundation operates under a Board of Directors that provides independent oversight. All major financial 
                transactions, contracts, and grant-related activities are subject to Board review and approval in accordance with 
                established governance policies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">Availability of Governing Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                Governing documents, including bylaws, conflict of interest disclosures, and governance policies, are 
                maintained by the Foundation and are available to grantors, regulators, auditors, and financial institutions upon 
                request.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
