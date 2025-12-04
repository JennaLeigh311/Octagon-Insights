import Hero from "@/components/hero"
import Testimonies from "@/components/testimonies"
import Camera from "@/components/camera"
import Features from "@/components/features"
import OctaAI from "@/components/octa-ai"
import Privacy from "@/components/privacy"
import Accessibility from "@/components/accessibility"
import ColorOptions from "@/components/color-options"
import Footer from "@/components/footer"

// Made by Jenna Bunescu

// sources: https://medium.com/2359media/why-react-classnames-is-a-lifesaver-and-how-you-should-use-it-if-you-arent-already-b25a44ed5603
// https://react.dev/learn/importing-and-exporting-components
// https://react.dev/learn/typescript
// https://nextjs.org/docs/app/getting-started/server-and-client-components

// for more of the UI with tailwindcss:
// https://tailwindcss.com/docs/display
// https://tailwindcss.com/docs/padding
// https://tailwindcss.com/docs/box-shadow
// https://tailwindcss.com/docs/responsive-design
// https://tailwindcss.com/docs/border-radius

// some help from AI with the configuration


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
