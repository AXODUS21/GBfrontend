import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ImpactSection from "@/components/impact-section"
import ProgramFeature from "@/components/program-feature"
import VoucherSystem from "@/components/voucher-system"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ImpactSection />
      <ProgramFeature />
      <VoucherSystem />
      <Footer />
    </main>
  )
}
