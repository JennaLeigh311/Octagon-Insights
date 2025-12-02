"use client"

export default function Privacy() {
  return (
    <section className="min-h-screen w-full bg-[#b3aaff] flex items-center justify-center px-4 py-20 relative">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Other's Privacy
          </h2>
          <p className="text-lg text-foreground/70">We're committed to transparency and control</p>
        </div>

        <div className="bg-blue-50 border border-primary/30 rounded-2xl p-8 md:p-12">
          <div className="flex gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Capture Indicator LED</h3>
              <p className="text-foreground/70">
                The Capture LED inside the iris lets others know when you use your eyes to take photos and record
                videos. Everyone around you will be aware when you're capturing content, ensuring full transparency.
              </p>
            </div>
          </div>

          <div className="space-y-3 text-foreground/70 ml-0 md:ml-24">
            <div className="flex items-start gap-2">
              <span className="text-primary mt-1">●</span>
              <span>Visual indicator of recording activity</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary mt-1">●</span>
              <span>Complete transparency with others</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary mt-1">●</span>
              <span>Respect for everyone's privacy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
