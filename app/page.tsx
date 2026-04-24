import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ImpactSection from "@/components/impact-section"
import LatestImpact from "@/components/latest-impact"
import FounderMessage from "@/components/founder-message"
import ProgramFeature from "@/components/program-feature"
import VoucherSystem from "@/components/voucher-system"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ImpactSection />
      <FounderMessage />
      <ProgramFeature />
      <VoucherSystem />
      <LatestImpact />
      <Newsletter />
      <Footer />
    </main>
  )
}
