"use client"

export default function Features() {
  return (
    <section className="min-h-screen w-full bg-[#b3aaff] flex items-center justify-center px-4 py-20 relative">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Built for Modern Living
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Every feature designed to enhance your daily experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="group bg-blue-50 border border-primary/20 hover:border-primary/50 rounded-2xl p-8 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3">Share POV</h3>
            <p className="text-foreground/70">
              Add a new perspective to photos, videos, and video calls by using the Insights camera to share what you see
            </p>
          </div>

          <div className="group bg-purple-50 border border-secondary/20 hover:border-secondary/50 rounded-2xl p-8 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3">AI Assistant</h3>
            <p className="text-foreground/70">
              Enhance your awareness, support productivity on the go, and bring an extra layer of intelligence to your life
            </p>
          </div>

          <div className="group bg-indigo-50 border border-accent/20 hover:border-accent/50 rounded-2xl p-8 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3">Privacy</h3>
            <p className="text-foreground/70">Neurally connected to browse apps, the internet, and your own camera roll and documents with full privacy and zero risk</p>
          </div>
        </div>
      </div>
    </section>
  )
}
