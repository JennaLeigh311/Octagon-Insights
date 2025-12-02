import Hero from "@/components/hero"
import Testimonies from "@/components/testimonies"
import Camera from "@/components/camera"
import Features from "@/components/features"
import OctaAI from "@/components/octa-ai"
import Privacy from "@/components/privacy"
import Accessibility from "@/components/accessibility"
import ColorOptions from "@/components/color-options"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-background">
      <Hero />
      <Features />
      <Testimonies />
      <Camera />
      <Accessibility />
      <Privacy />
      <OctaAI />
      <ColorOptions />
      <Footer />
    </main>
  )
}
