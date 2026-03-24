import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { LearningSection } from "@/components/learning-section"
import { WhySection } from "@/components/why-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <LearningSection />
      <WhySection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
