import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Linkedin, Twitter } from "lucide-react"

export default function TeamPage() {
  const members = [
    {
      name: "Prof. Olukayode Oladipo",
      role: "Board Chairman",
      image: "/medical-doctor-portrait.png",
      bio: "Expert in clinical epidemiology with over 20 years of research experience.",
    },
    {
      name: "Dr. Fatima Ibrahim",
      role: "Executive Director",
      image: "/female-african-medical-professional.jpg",
      bio: "Specialist in maternal health and tropical disease advocacy.",
    },
    {
      name: "Dr. Samuel Okon",
      role: "Secretary",
      image: "/medical-researcher-portrait.jpg",
      bio: "Focuses on field implementation and community healthcare training.",
    },
    {
      name: "Prof. Zainab Bello",
      role: "Clinical Lead",
      image: "/medical-professor-portrait.jpg",
      bio: "Renowned pathologist leading our FGS diagnostic research unit.",
    },
    {
      name: "Dr. Emmanuel Adeyemi",
      role: "Advocacy Coordinator",
      image: "/health-advocate-portrait.jpg",
      bio: "Bridging the gap between scientific findings and government policy.",
    },
    {
      name: "Mrs. Amaka Nwosu",
      role: "Operations Manager",
      image: "/healthcare-administrator-portrait.jpg",
      bio: "Ensuring efficient delivery of services to rural communities.",
    },
  ]

  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />

      <section className="px-6 py-20">
        <div className="container max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Leadership</span>
            <h1 className="text-5xl md:text-6xl font-serif max-w-2xl leading-[1.1]">
              The dedicated board <br />
              <span className="text-primary italic">behind</span> the mission.
            </h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {members.map((member, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-zinc-100 mb-8 shadow-sm">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-zinc-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-[0ms]"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-zinc-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-[100ms]"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-zinc-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-[200ms]"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary italic">{member.role}</span>
                  <h3 className="text-2xl font-serif">{member.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm pr-6">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
