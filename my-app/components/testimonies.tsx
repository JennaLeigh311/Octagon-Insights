"use client"

export default function Testimonies() {
  return (
    <section className="min-h-screen w-full bg-white flex items-center justify-center px-4 py-20 relative">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Client Testimonies
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            How Insights have changed lives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="group bg-blue-50 border border-primary/20 hover:border-primary/50 rounded-2xl p-8 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3">Kendall Jenner</h3>
            <p className="text-foreground/70">
              "They look so real, none of my friends could tell I was wearing Insights, and they've drastically enhanced my life experience"
            </p>
          </div>

          <div className="group bg-purple-50 border border-secondary/20 hover:border-secondary/50 rounded-2xl p-8 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3">Christiano Ronaldo</h3>
            <p className="text-foreground/70">
              "It's like I can see into the future - my footballs fly and curve better with Octo AI's real-time visual analysis"
            </p>
          </div>

          <div className="group bg-indigo-50 border border-accent/20 hover:border-accent/50 rounded-2xl p-8 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3">Roberto Alfonso</h3>
            <p className="text-foreground/70">"I thought my eyesight was gone forever, but with Insights I was finally able to see my daughter's face again"</p>
          </div>
        </div>
      </div>
    </section>
  )
}
