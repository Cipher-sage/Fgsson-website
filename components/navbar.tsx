"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Organogram", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "News", href: "#" },
  { name: "Newsletter", href: "#" },
  { name: "Contact", href: "#" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div
        className={cn(
          "bg-zinc-900 text-white py-2 px-6 flex flex-wrap justify-between items-center text-xs transition-opacity duration-300",
          isScrolled ? "opacity-0 h-0 overflow-hidden py-0" : "opacity-100",
        )}
      >
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            <Mail size={12} /> fgssocietyofnigeria@gmail.com
          </span>
          <span className="flex items-center gap-1">
            <Phone size={12} /> +234 803 605 8782
          </span>
        </div>
        <div className="hidden md:block">Welcome to FGSSN</div>
      </div>

      {/* Main Nav */}
      <nav
        className={cn(
          "px-6 py-4 flex items-center justify-between transition-all duration-300 border-b",
          isScrolled
            ? "bg-background/80 backdrop-blur-md shadow-sm border-border"
            : "bg-transparent border-transparent",
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <span className="font-serif text-xl font-bold tracking-tighter hidden sm:inline-block">FGSSN</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
              {item.name}
            </Link>
          ))}
          <Link
            href="#"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-all"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-foreground p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-6 transition-transform duration-500",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif hover:text-primary"
          >
            {item.name}
          </Link>
        ))}
        <Link
          href="#"
          className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          Get Involved
        </Link>
      </div>
    </header>
  )
}
