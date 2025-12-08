import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/programs" className="hover:text-primary-foreground transition">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-primary-foreground transition">
                  Tutor Matching
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-primary-foreground transition">
                  SEL & Mentorship
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-primary-foreground transition">
                  STEM Programs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/sponsor" className="hover:text-primary-foreground transition">
                  Sponsor a Student
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-primary-foreground transition">
                  Partner School
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground transition">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-primary-foreground transition">
                  Become a Vendor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition">
                  Financials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail size={18} /> hello@gbf.org
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} /> (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} /> San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm mb-4 md:mb-0">
            &copy; 2025 Global Bright Futures Foundation. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-foreground/70 transition" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-primary-foreground/70 transition" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-primary-foreground/70 transition" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
