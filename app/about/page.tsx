import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { Users, Target, Shield, Heart, Award, Globe } from "lucide-react";
import { BoardMember } from "@/components/board-member";

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      {/* Hero with Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/hero.png')`
          }}
        />
        <div className="relative z-10 text-center text-white pt-20 px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Empowering students locally and globally through school-to-school partnerships.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider mb-2 block">Our Mission</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Expanding Access to Education
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Global Bright Futures Foundation empowers underserved learners by expanding access to scholarships, tutoring, mentorship, and innovative educational programs that foster academic growth, opportunity, and lifelong success—locally and globally.
              </p>
            </div>
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider mb-2 block">Our Vision</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Education Without Borders
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We envision a world where every learner regardless of income, location, or circumstance has access to meaningful, high-quality education pathways that unlock potential and create lasting opportunity across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Target, title: "Equity", desc: "Every student deserves access to quality education regardless of their circumstances." },
              { icon: Users, title: "Partnership", desc: "We collaborate with schools and communities for sustainable, impactful solutions." },
              { icon: Shield, title: "Accountability", desc: "Transparent, audit-ready operations with full IRS compliance." },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Leadership
            </h2>
            <Link
              href="/board-of-directors"
              className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
            >
              View Full Board →
            </Link>
          </div>
          
          <div className="space-y-8">
            <BoardMember
              name="Ilyne Cendy Root"
              title="Founder & President"
              shortDescription="Educator, nonprofit leader, and global advocate for educational equity whose work is grounded in lived experience and lifelong commitment to service."
              fullDescription="Ilyne Cendy Root is an educator, nonprofit leader, and global advocate for educational equity. Orphaned at a young age, she developed resilience and understanding of barriers faced by students without stable guidance. Her journey—from an orphaned child to international educator and nonprofit founder—reflects the mission of Global Bright Futures Foundation Inc."
              imageSrc="/ilyne.jpg"
              imageAlt="Ilyne Cendy Root"
            />
            <BoardMember
              name="Joseph Root"
              title="Vice President"
              shortDescription="Provides executive leadership and operational oversight. Passionate advocate for youth development through mentorship programs."
              fullDescription="Joseph Root serves as Vice President, providing executive leadership, operational oversight, and strategic support to advance the Foundation's mission. A passionate advocate for youth development through sports and mentorship programs."
              imageSrc="/joseph.jpg"
              imageAlt="Joseph Root"
            />
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Committed to Transparency
          </h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            As a 501(c)(3) nonprofit, we maintain full transparency and accountability. Access our financial reports anytime.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-primary-foreground text-primary px-8 py-4 rounded-full font-bold hover:bg-primary-foreground/90 transition-colors">
              Download Form 990
            </button>
            <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary-foreground/10 transition-colors">
              Annual Report
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
