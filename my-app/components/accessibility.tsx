"use client"

export default function Accessibility() {
  return (
    <section className="min-h-screen w-full bg-white flex items-center justify-center px-4 py-20 relative">
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-blue-50 border border-primary/20">
          <img src="/visual-impair.jpg" alt="Video Call Experience" className="w-full h-full object-cover" />
        </div>

        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Helping the <span className="text-secondary">Vision Impaired</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
          Octagon Insights can help those with reduced vision see the world again. Through advanced AI and computer vision, we're making technology accessible to everyone.
          </p>


          <div className="bg-purple-50 border border-secondary/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-secondary">Key Features:</h3>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">✓</span>
                <span>Vision enhancement technology</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">✓</span>
                <span>Real-time object and text recognition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">✓</span>
                <span>Customizable visual aids</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
