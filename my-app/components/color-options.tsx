"use client"

export default function ColorOptions() {
  const colors = [
    { name: "Octa Violet", hex: "#6e48d8" },
    { name: "Ocean Blue", hex: "#1f6feb" },
    { name: "Forest Green", hex: "#238636" },
    { name: "Octa Blue", hex: "#6b99ff" },
    { name: "Midnight Black", hex: "#0d1117" },
    { name: "Custom", hex: "#?????" },
  ]

  return (
    <section className="min-h-screen w-full bg-white flex items-center justify-center px-4 py-20 relative">
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose the Best <span className="text-primary">Insights</span> for You
          </h2>
          <p className="text-lg text-foreground/70">Match the color of your eyes or any color of your preference</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colors.map((color) => (
            <div
              key={color.name}
              className="group bg-white border border-gray-200 hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg"
            >
              <div className="h-40 bg-white flex items-center justify-center relative overflow-hidden border-b border-gray-200">
                <div className="w-20 h-20 rounded-full" style={{ backgroundColor: color.hex }}></div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{color.name}</h3>
                <p className="text-foreground/60 text-sm mb-4 font-mono">{color.hex}</p>
                <button className="w-full py-2 px-4 rounded-lg bg-primary hover:bg-blue-600 text-white font-medium transition-colors">
                  Select Color
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
