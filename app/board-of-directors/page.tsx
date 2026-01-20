import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { BoardMember } from "@/components/board-member"

export default function BoardOfDirectorsPage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Board of Directors
          </h1>
          <p className="text-lg md:text-xl opacity-95 text-balance">
            Leadership committed to educational equity, transparency, and global impact.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <BoardMember
              name="Ilyne Cendy Root"
              title="Founder & President, Global Bright Futures Foundation Inc."
              shortDescription="Ilyne Cendy Root is an educator, nonprofit leader, and global advocate for educational equity whose work is grounded in lived experience, professional expertise, and a lifelong commitment to service."
              fullDescription="Ilyne Cendy Root is an educator, nonprofit leader, and global advocate for educational equity whose work is grounded in lived experience, professional expertise, and a lifelong commitment to service.

Orphaned at a young age, Ilyne learned early what it meant to navigate life without consistent support. Raised among relatives and managing school responsibilities independently, she developed resilience, resourcefulness, and a deep understanding of the barriers faced by students without stable guidance or resources.

Committed to learning, Ilyne earned a university scholarship and supported herself as a student assistant while pursuing her degree. Throughout her career across the Philippines, Thailand, and the United States, she has led tutoring initiatives, literacy programs, mentorship projects, and school partnerships that expand access to meaningful education pathways.

Today, she leads Global Bright Futures Foundation Inc. with a focus on ethical partnerships, transparent operations, and school-driven programming that supports underserved learners locally and globally."
              highlights={[
                "Founder & President, Global Bright Futures Foundation Inc.",
                "Established and led international education and tutoring initiatives",
                "Developed Support One, Empower Two, a dual-impact education access model",
                "Created literacy, mentorship, and college-support programs",
                "Partnered with schools and community organizations in the U.S. and abroad",
                "Served as School Lead in U.S. elementary education",
              ]}
              imageSrc="/ilyne.jpg"
              imageAlt="Portrait of Ilyne Cendy Root"
            />

            <BoardMember
              name="Joseph Root"
              title="Vice President | Global Bright Futures Foundation Inc."
              shortDescription="Joseph Root provides executive leadership, operational oversight, and strategic support to advance the Foundation's mission of expanding equitable access to education."
              fullDescription="Joseph Root serves as Vice President of Global Bright Futures Foundation Inc., providing executive leadership, operational oversight, and strategic support to advance the Foundation's mission of expanding equitable access to education for underserved learners locally and globally.

In his role, Joseph supports organizational planning, compliance, partner relations, and program implementation, ensuring initiatives remain mission-driven, transparent, and accountable."
              imageSrc="/joseph.jpg"
              imageAlt="Portrait of Joseph Root"
            />

            <BoardMember
              name="Reyshyl Durban"
              title="Board Director | Global Bright Futures Foundation Inc."
              shortDescription="Reyshyl Durban is a servant leader and educator committed to community development, youth mentorship, and values-based education."
              fullDescription="Reyshyl Durban is a dedicated servant leader and educator with a strong commitment to community development, youth mentorship, and values-based education.

Reyshyl contributes insight grounded in leadership, education management, and community-based service, supporting programs that promote equitable access to education and sustainable community impact."
              imageSrc="/placeholder.jpg"
              imageAlt="Portrait of Reyshyl Durban"
            />

            <BoardMember
              name="Verna Jean Vaniza G. Limocon"
              title="Board Director | Global Bright Futures Foundation Inc."
              shortDescription="Verna Jean Vaniza G. Limocon is a licensed educator with 13+ years of teaching experience across the Philippines and the United States."
              fullDescription="Verna Jean Vaniza G. Limocon is a licensed professional educator currently serving in the United States through an international exchange teacher program. With more than 13 years of teaching experience, she brings a cross-cultural perspective and a commitment to advancing education for children from diverse backgrounds."
              imageSrc="/verna.jpg"
              imageAlt="Portrait of Verna Jean Vaniza G. Limocon"
            />

            <BoardMember
              name="Cherry Ann A. Pasalgon"
              title="Board Director | Global Bright Futures Foundation Inc."
              shortDescription="Cherry Ann A. Pasalgon is an educator and child-focused advocate with 15+ years of international teaching and leadership experience."
              fullDescription="Cherry Ann A. Pasalgon is a seasoned educator and child-focused advocate with over 15 years of international teaching and leadership experience across the Philippines, Thailand, the United Arab Emirates, and New Zealand."
              imageSrc="/cherry.jpg"
              imageAlt="Portrait of Cherry Ann A. Pasalgon"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}






