import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Heart, ShieldCheck, Globe } from "lucide-react"

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-24 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side: Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-widest text-xs uppercase">Support Our Mission</span>
                <h1 className="text-5xl md:text-6xl font-serif leading-tight">
                  Your contribution <br />
                  <span className="text-primary italic">changes lives.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Every donation directly supports our research, advocacy, and medical interventions to eliminate FGS in
                  Nigeria. Together, we can ensure a healthier future for women and girls.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    icon: Heart,
                    title: "Direct Impact",
                    desc: "Funds go directly to field research and medical support.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Secure Giving",
                    desc: "We use industry-standard encrypted payment gateways.",
                  },
                  {
                    icon: Globe,
                    title: "Global Reach",
                    desc: "Your support helps us scale our models across sub-Saharan Africa.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Donation Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-zinc-200 border border-zinc-100 sticky top-32">
              <form className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["5,000", "10,000", "25,000", "50,000", "100,000"].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className="py-3 px-4 border-2 border-zinc-100 rounded-xl font-bold hover:border-primary hover:text-primary transition-all active:bg-primary/5"
                      >
                        ₦{amount}
                      </button>
                    ))}
                    <input
                      type="text"
                      placeholder="Other"
                      className="py-3 px-4 border-2 border-zinc-100 rounded-xl font-bold focus:outline-none focus:border-primary text-center"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-primary text-white rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-100"
                >
                  Proceed to Payment
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  By donating, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
