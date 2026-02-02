"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Heart,
  Globe2,
  Users,
  GraduationCap,
  CheckCircle,
  Shield,
} from "lucide-react";
import ZeffyDonation from "@/components/zeffy-donation";
import ZeffyEmbed from "@/components/zeffy-embed";

const suggestedAmounts = [25, 50, 100, 200, 500, 1000];

const ZEFFY_FORM_URL =
  process.env.NEXT_PUBLIC_ZEFFY_FORM_URL ||
  "https://www.zeffy.com/embed/thermometer/donate-to-make-a-difference-21717";

export default function SponsorPage() {
  const [showDonationForm, setShowDonationForm] = useState(false);

  const handleDonateClick = (amount: number, isRecurring: boolean) => {
    if (ZEFFY_FORM_URL) {
      try {
        const url = new URL(ZEFFY_FORM_URL);
        url.searchParams.set("amount", amount.toString());
        if (isRecurring) {
          url.searchParams.set("recurring", "true");
        }
        window.open(url.toString(), "_blank");
      } catch (error) {
        console.error("Invalid Zeffy form URL:", error);
        setShowDonationForm(true);
      }
    } else {
      setShowDonationForm(true);
    }
  };

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/hero.png')`
          }}
        />
        <div className="relative z-10 text-center text-white pt-20 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Gift Changes Lives
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
            100% of your donation goes directly to supporting students. One gift helps learners in the US and abroad.
          </p>
          <Button 
            onClick={() => setShowDonationForm(true)}
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-8 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Donate Now
          </Button>
        </div>
      </section>

      {/* Donation Form */}
      {showDonationForm && (
        <section className="py-16 bg-muted">
          <div className="max-w-2xl mx-auto px-6 lg:px-8">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowDonationForm(false)}
              className="mb-6"
            >
              ← Back
            </Button>
            {ZEFFY_FORM_URL ? (
              <ZeffyEmbed formUrl={ZEFFY_FORM_URL} />
            ) : (
              <ZeffyDonation
                suggestedAmounts={suggestedAmounts}
                onDonateClick={handleDonateClick}
              />
            )}
          </div>
        </section>
      )}

      {/* Impact */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Your Donation Helps
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every dollar creates real impact for students who need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { icon: Users, title: "Students in Need", desc: "Partner schools independently select students with documented educational need." },
              { icon: CheckCircle, title: "Direct Services", desc: "Funds provide tutoring, mentorship, enrichment programs, or educational materials." },
              { icon: Globe2, title: "Doubled Impact", desc: "Each U.S. school voucher triggers a matching voucher for a partner school abroad." },
              { icon: Shield, title: "Full Transparency", desc: "We track every voucher. You can see exactly where your donation goes." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amount Impact */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            What Your Gift Provides
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { amount: "$50", impact: "School supplies for 2 students" },
              { amount: "$200", impact: "10 hours of tutoring" },
              { amount: "$1,000", impact: "Full semester of support for multiple students" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-primary mb-3">{item.amount}</div>
                <p className="text-muted-foreground">{item.impact}</p>
              </div>
            ))}
          </div>
          
          <Button 
            onClick={() => setShowDonationForm(true)}
            className="mt-12 bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-lg font-bold rounded-full shadow-xl"
          >
            Give Today
          </Button>
        </div>
      </section>

      {/* Fellowship */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center flex-shrink-0">
              <GraduationCap size={32} />
            </div>
            <div>
              <span className="text-sm font-bold uppercase tracking-wider opacity-70">Student Fellowship</span>
              <h2 className="text-2xl md:text-3xl font-bold">
                Supporting Future Educators
              </h2>
            </div>
          </div>
          <p className="text-lg opacity-90 leading-relaxed max-w-3xl">
            Your donations also support our Student Fellowship—providing stipends to under-resourced college students while they tutor and mentor younger learners. This creates a sustainable cycle of learning, opportunity, and community development.
          </p>
        </div>
      </section>

      {/* Tax Info */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Global Bright Futures Foundation Inc.</strong> is a 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent permitted by law.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
