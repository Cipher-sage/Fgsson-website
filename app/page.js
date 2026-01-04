export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Female Genital Association of Nigeria
          </h1>
          <p className="text-lg md:text-2xl text-white mb-6 drop-shadow">
            Empowering communities, advocating health and education for women across Nigeria.
          </p>
          <a
            href="#about"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-700 text-lg">
          The Female Genital Association of Nigeria is dedicated to improving the lives of women and girls by advocating for health, education, and social awareness across communities.
        </p>
      </section>
    </main>
  )
}
