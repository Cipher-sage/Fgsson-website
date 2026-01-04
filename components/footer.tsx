import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 px-6">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <span className="font-serif text-2xl font-bold tracking-tighter">FGSSoN</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            The Female Genital Schistosomiasis Society of Nigeria is a registered NGO committed to research and
            elimination of FGS.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 border rounded-full hover:bg-primary hover:text-white transition-all">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="p-2 border rounded-full hover:bg-primary hover:text-white transition-all">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="p-2 border rounded-full hover:bg-primary hover:text-white transition-all">
              <Instagram size={18} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Navigation</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                About FGSSoN
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Ongoing Projects
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Medical Research
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                News & Updates
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Get Involved</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Become a Member
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Partner with Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Support our Work
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Media Inquiry
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin size={18} className="text-primary shrink-0" />{" "}
              <span>Abuja, Federal Capital Territory, Nigeria</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-primary shrink-0" /> <span>+234 803 605 8782</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-primary shrink-0" /> <span>fgssocietyofnigeria@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
        <p>© 2025 FGSSN. All Rights Reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
