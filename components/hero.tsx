import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Overlays */}
      <div className="absolute inset-0 z-0">
        <Image src="/medical-research-nigeria-health.jpg" alt="FGSSN Mission" fill className="object-cover grayscale" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-primary/5" />
      </div>

      <div className="container relative z-10 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="space-y-2">
            <span className="text-primary font-bold tracking-widest text-xs uppercase block">
              Female Genital Schistosomiasis Society of Nigeria
            </span>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1]">
              Our mission is to <span className="text-primary italic">eliminate</span> FGS.
            </h1>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Dedicated to eradicating Female Genital Schistosomiasis and related infectious diseases and cancers in
            Nigeria and globally.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Get In Touch With Us <ArrowRight size={18} />
            </button>
            <button className="border border-foreground/20 text-foreground px-8 py-4 rounded-full font-bold hover:bg-foreground/5 transition-all">
              Learn Our History
            </button>
          </div>
        </div>

        <div className="hidden lg:block relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
          <Image src="/african-medical-professional-smiling.jpg" alt="Medical Support" fill className="object-cover" />
          <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur p-6 rounded-xl border border-white/20 shadow-xl max-w-[240px]">
            <p className="text-xs uppercase tracking-widest font-bold text-primary mb-1">Our Reach</p>
            <p className="text-2xl font-serif leading-none mb-2">36 States</p>
            <p className="text-xs text-muted-foreground leading-tight">
              Providing advocacy and research across all regions of Nigeria.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
