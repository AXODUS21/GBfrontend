import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LegalCompliancePage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance uppercase tracking-tight">Legal & Compliance</h1>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl">
            Global Bright Futures Foundation operates with a commitment to transparency, accountability, and responsible stewardship of all program resources.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-foreground/70 leading-relaxed text-lg italic">
              This page outlines the governance, ethics, funding structure, and program integrity systems that guide all operations.
              All activities are structured to ensure programs are delivered through vetted partners, with funds applied exclusively to approved educational services.
            </p>
          </div>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">GOVERNANCE & ETHICS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-bold text-foreground mb-2">Conflict of Interest Policy</h4>
                <p className="text-foreground/80 leading-relaxed">
                  All board members, staff, and decision-makers are required to disclose any actual, potential, or perceived conflicts of interest. Any disclosed conflicts are reviewed and managed to ensure impartial decision-making and protection of organizational integrity.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Code of Ethics</h4>
                <p className="text-foreground/80 leading-relaxed">
                  All representatives of the organization are expected to act in the best interest of students, schools, and communities served. Decisions must reflect fairness, integrity, and accountability in all program and funding activities.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">ACCOUNTABILITY & SAFEGUARDS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-bold text-foreground mb-2">Whistleblower Protection</h4>
                <p className="text-foreground/80 leading-relaxed">
                  The organization maintains a confidential reporting system for concerns related to ethics, compliance, financial integrity, or program operations. All reports are reviewed through internal oversight procedures, and retaliation against individuals reporting concerns is strictly prohibited.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Program Oversight System</h4>
                <p className="text-foreground/80 leading-relaxed">
                  All programs operate under structured monitoring systems to ensure:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4 mt-3">
                  <li>Funds are used exclusively for approved educational services</li>
                  <li>Service delivery is verified through approved providers</li>
                  <li>Partner organizations meet program standards</li>
                  <li>Outcomes are tracked through aggregated reporting systems</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">FUNDING & PROGRAM DELIVERY MODEL</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-bold text-foreground mb-2">Service-Based Funding Structure</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Global Bright Futures Foundation uses a service-based funding model in which all resources are directed toward the delivery of educational services through vetted schools, community organizations, and approved education providers.
                  <br />
                  <strong className="text-primary">No cash assistance is provided to individuals or institutions.</strong>
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Education Service Voucher System</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Where applicable, program support may be structured through education service vouchers that represent program service allocation only. These vouchers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4 mt-3">
                  <li>Are not cash or financial instruments</li>
                  <li>Are not transferable or redeemable for money</li>
                  <li>Are used exclusively for approved educational services</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">IMPACT MONITORING & REPORTING</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Program performance is tracked through structured aggregate reporting systems, which may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4 mb-4">
                <li>Number of students served</li>
                <li>Educators, tutors, and youth engaged</li>
                <li>School and community partnerships</li>
                <li>Program delivery outcomes</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed italic text-sm">
                This data is used to support transparency, accountability, and continuous program improvement.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">PARTNERSHIP INTEGRITY FRAMEWORK</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                All partners, including schools, community organizations, vendors, and service providers, are vetted based on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Alignment with educational mission and program goals</li>
                <li>Service quality standards and delivery capacity</li>
                <li>Accountability and reporting compliance</li>
                <li>Commitment to student-focused outcomes</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">LEGAL & REGULATORY ALIGNMENT</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                Global Bright Futures Foundation operates in alignment with applicable nonprofit governance standards and regulatory expectations under the Internal Revenue Service.
                The organization maintains internal policies to ensure ethical governance, responsible funding use, and structured program accountability.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
