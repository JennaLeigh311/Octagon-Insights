"use client"

export default function Camera() {
  return (
    <section className="min-h-screen w-full bg-[#b3aaff] flex items-center justify-center px-4 py-20 relative">
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Capture High-Quality Photos and Videos
          </h2>
          <p className="text-lg text-foreground/70 mb-4">
            With new 3K Ultra HD resolution and an ultra-wide 12 MP camera, record sharper videos with richer
            details for moments you can't wait to relive.
          </p>
          <div className="space-y-3 text-foreground/60">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#6e48d8] mt-2 flex-shrink-0"></div>
              <span>3K Ultra HD Resolution</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#6e48d8] mt-2 flex-shrink-0"></div>
              <span>Ultra-Wide 12 MP Camera</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#6e48d8] mt-2 flex-shrink-0"></div>
              <span>Crystal Clear Video Recording</span>
            </div>
          </div>
        </div>

        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border border-primary/20">
          <img src="/sunset.webp" alt="3K Ultra HD Camera" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
