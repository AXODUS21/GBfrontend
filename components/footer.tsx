import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Your donation supports students in the US and abroad. 100% tax-deductible.
          </p>
          <Link
            href="/sponsor"
            className="inline-block bg-accent-foreground text-accent px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-foreground/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Donate Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Mission */}
            <div className="md:col-span-1">
              <Image
                src="/gbf.png"
                alt="Global Bright Futures Foundation"
                width={120}
                height={40}
                className="h-10 w-auto object-contain mb-4 brightness-0 invert"
              />
              <p className="text-sm text-background/70 leading-relaxed">
                Empowering students through school-to-school learning partnerships worldwide.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="https://www.facebook.com/gbffinc" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Programs</h3>
              <ul className="space-y-3 text-sm text-background/70">
                <li>
                  <Link href="/programs" className="hover:text-background transition-colors">
                    School Vouchers
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-background transition-colors">
                    Tutoring & Mentorship
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-background transition-colors">
                    Student Fellowship
                  </Link>
                </li>
                <li>
                  <Link href="/apply" className="hover:text-background transition-colors">
                    Apply for Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Organization</h3>
              <ul className="space-y-3 text-sm text-background/70">
                <li>
                  <Link href="/about" className="hover:text-background transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/board-of-directors" className="hover:text-background transition-colors">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="hover:text-background transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-background transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-background/70">
                <li className="flex items-center gap-2">
                  <Mail size={14} />
                  <span>admin@globalbrightfutures.org</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>
                    5830 E 2ND ST, STE 7000 #30800
                    <br />
                    CASPER, WY 82609
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/50">
              © 2025 Global Bright Futures Foundation, Inc. | 501(c)(3) Nonprofit | EIN: [EIN Number]
            </p>
            <div className="flex gap-6 text-xs text-background/50">
              <Link href="/policies/terms_and_conditions" className="hover:text-background transition-colors">
                Terms
              </Link>
              <Link href="/policies/code_of_ethics" className="hover:text-background transition-colors">
                Privacy
              </Link>
              <a
                href="/GBFF IRS 501c3 Determination Letter.pdf"
                download
                className="hover:text-background transition-colors"
              >
                IRS Letter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
