import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Users, Globe, MapPin, Building2, CheckCircle2 } from "lucide-react"

export default function AboutUsPage() {
  const stats = [
    { label: "Patient Records", value: "1k+", icon: Users },
    { label: "Geo-Political Zones", value: "5+", icon: Globe },
    { label: "States Covered", value: "36+", icon: MapPin },
    { label: "LGAs Impacted", value: "773+", icon: Building2 },
  ]

  const values = [
    "Integrity in Research",
    "Empowerment of Women",
    "Sustainable Healthcare",
    "Collaborative Advocacy",
    "Clinical Excellence",
    "Data-Driven Decisions",
  ]

  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 py-20 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <img src="/modern-medical-lab-team.jpg" alt="Background" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Who we are</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-[1.1]">
              Pioneering the fight against <span className="text-primary italic">neglected</span> tropical diseases.
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
              Founded on the principles of clinical excellence and community advocacy, FGSSN is Nigeria's leading
              authority on Female Genital Schistosomiasis.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Reimagined Fun Facts */}
      <section className="py-24 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white border border-border p-10 rounded-3xl group hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <div className="text-4xl font-serif mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 px-6 bg-zinc-100">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-serif mb-8">Our core mission.</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  To eliminate FGS and related infectious diseases and cancers in Nigeria and the world over through
                  robust scientific research, community-led advocacy, and specialized medical training.
                </p>
                <p>
                  We believe that every girl and woman deserves access to specialized diagnostics and treatment,
                  regardless of their geographic location or economic status.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-serif mb-8 text-primary italic">Our values.</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span className="font-medium text-zinc-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 px-6 border-t border-border">
        <div className="container max-w-7xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-12 block">
            Our strategic partners
          </span>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50 hover:opacity-100 transition-opacity">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-zinc-200 rounded-full mb-3" />
                <span className="text-[10px] font-bold uppercase tracking-tighter">Bridges to Development</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
