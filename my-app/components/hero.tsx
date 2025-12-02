"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in-up">
        <img src="/logo.png" alt="logo" className="h-20 w-60 inline-block" />


        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-foreground">
          Discover the New <span className="text-primary-highlight">Octagon Insights</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 mb-8 text-balance max-w-2xl mx-auto">
          Experience the future of vision technology. Capture, connect, and create with cutting-edge AI-powered
          features.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-white hover:bg-[#8778ff] text-black px-14 py-6 rounded-3xl border border-black">
            Shop Now
          </Button>
        </div>

        {/* Hero image placeholder */}
        <div className="relative w-full h-96 md:h-[600px] rounded-2xl overflow-hidden bg-purple-50 border border-primary/20">
          <img src="/eye-octagon.webp" alt="Octagon Insights Product" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
