"use client"

export default function OctaAI() {
  return (
    <section className="min-h-screen w-full bg-white flex items-center justify-center px-4 py-20 relative">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="bg-indigo-50 border border-accent/30 rounded-3xl p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-indigo-100 mb-6">
                <p className="text-sm font-medium text-accent">Octa AI App</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Manage Everything in One Place</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Use the Octa AI app to manage your eyes, customize settings, share photos and interact with your Octa AI
                assistant. Discover new features and tips from other users all in one place. The Octa AI app is required
                to support your Insight experience.
              </p>

            </div>

            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-white border border-accent/20">
              <img src="/ai-app.png" alt="Octa AI App" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
