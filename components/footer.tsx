import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Process Overview */}
        <div className="mb-12 pb-8 border-b border-primary-foreground/20">
          <h3 className="font-bold text-lg mb-4">Process Overview</h3>
          <div className="flex flex-wrap items-center gap-2 text-primary-foreground/80 text-sm">
            <span>Schools select students</span>
            <ArrowRight size={16} className="text-primary-foreground/60" /> 
            <span>Foundation issues vouchers</span>
            <ArrowRight size={16} className="text-primary-foreground/60" />
            <span>Paired schools abroad receive vouchers</span>
            <ArrowRight size={16} className="text-primary-foreground/60" />
            <span>Students receive tutoring, mentorship, or materials</span>
            <ArrowRight size={16} className="text-primary-foreground/60" />
            <span>College fellows supported</span>
            <ArrowRight size={16} className="text-primary-foreground/60" />
            <span>Independent record-keeping</span>
            <ArrowRight size={16} className="text-primary-foreground/60" />
            <span>Foundation administers payments</span>
            <ArrowRight size={16} className="text-primary-foreground/60" />
            <span className="font-medium">Audit-safe and scalable</span>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link
                  href="/programs"
                  className="hover:text-primary-foreground transition"
                >
                  Scholarships
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-primary-foreground transition"
                >
                  Tutor matching
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-primary-foreground transition"
                >
                  SEL & Mentorship
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-primary-foreground transition"
                >
                  STEM
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-primary-foreground transition"
                >
                  Homeschool Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link
                  href="/sponsor"
                  className="hover:text-primary-foreground transition"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-foreground transition"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="hover:text-primary-foreground transition"
                >
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="hover:text-primary-foreground transition"
                >
                  Partner School
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-foreground transition"
                >
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-foreground transition"
                >
                  Board & Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-foreground transition"
                >
                  Financials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-foreground transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Policies</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link
                  href="/policies/code_of_ethics"
                  className="hover:text-primary-foreground transition"
                >
                  Code of Ethics
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/conflict_of_interest_policy"
                  className="hover:text-primary-foreground transition"
                >
                  Conflict of Interest
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/legal_compliance_disclosure"
                  className="hover:text-primary-foreground transition"
                >
                  Legal & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/terms_and_conditions"
                  className="hover:text-primary-foreground transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/whistle_blower_policy"
                  className="hover:text-primary-foreground transition"
                >
                  Whistleblower Policy
                </Link>
              </li>
              <li>
                <a 
                  href="/GBFF IRS 501c3 Determination Letter.pdf"
                  download="GBFF IRS 501c3 Determination Letter.pdf"
                  className="hover:text-primary-foreground transition cursor-pointer"
                > 
                  IRS Determination Letter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail size={18} /> admin@globalbrightfutures.org
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} /> 661 488 9935
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>
                  5830 E 2ND ST, STE 7000 #30800
                  <br />
                  CASPER, WY 82609
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm mb-4 md:mb-0">
            &copy; 2025 Global Bright Futures Foundation. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/gbffinc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/70 transition"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
