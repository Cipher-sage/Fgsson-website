export function CTASection() {
  return (
    <section className="py-24 px-6 bg-zinc-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif italic text-pretty">
          Join us in the fight against preventable infectious diseases.
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you are a researcher, a donor, or a volunteer, your contribution helps us move one step closer to a
          Nigeria free of FGS.
        </p>
        <div className="pt-6">
          <button className="bg-white text-zinc-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  )
}
