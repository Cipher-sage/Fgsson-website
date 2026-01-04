export function StatsSection() {
  const stats = [
    { number: "01", label: "Research", desc: "Conducting ground-breaking clinical studies on FGS prevalence." },
    { number: "02", label: "Advocacy", desc: "Influencing policy at federal and state levels for better diagnostics." },
    { number: "03", label: "Education", desc: "Training healthcare workers to recognize and treat FGS accurately." },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 border-t border-border pt-12">
          {stats.map((stat) => (
            <div key={stat.number} className="group cursor-default">
              <span className="text-6xl font-serif text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                {stat.number}
              </span>
              <h3 className="text-2xl font-serif mb-4 mt-2">{stat.label}</h3>
              <p className="text-muted-foreground leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
