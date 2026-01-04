import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />

      {/* Intro Section - Modern minimal layout */}
      <section className="py-24 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif">A comprehensive approach for a healthier future.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                FGS affects millions of women and girls in sub-Saharan Africa. Our society acts as a bridge between
                scientific research and field implementation, ensuring that those affected receive the diagnosis and
                care they deserve.
              </p>
              <div className="pt-4">
                <button className="text-primary font-bold flex items-center gap-2 group">
                  Discover Our Impact <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
            <div className="bg-zinc-100 aspect-video rounded-3xl relative overflow-hidden group shadow-2xl">
              <img
                src="/modern-medical-lab-team.jpg"
                alt="Research Team"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
