import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { BoardMember } from "@/components/board-member"

export default function BoardOfDirectorsPage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Leadership and Governance
          </h1>
          <p className="text-lg md:text-xl opacity-95 text-balance max-w-2xl">
            Responsible oversight of programs, partnerships, and organizational operations to ensure ethical, transparent, and accountable delivery of services.
          </p>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Executive Leadership</h2>
          <div className="grid gap-12 lg:grid-cols-2">
            <BoardMember
              name="Ilyne Cendy Root"
              title="Founder & President"
              shortDescription="Ilyne Cendy Root is an education professional and nonprofit executive with experience in instructional leadership, program development, and cross-cultural education initiatives."
              fullDescription="Ilyne Cendy Root is an education professional and nonprofit executive with experience in instructional leadership, program development, and cross-cultural education initiatives across the Philippines, Thailand, and the United States.

Her leadership experience includes designing and implementing structured tutoring, literacy, and mentorship programs in partnership with schools and community organizations. She has also served in U.S. elementary education in instructional and academic leadership roles.

As Founder and President, she is responsible for overall strategic direction, program development, and organizational oversight. Her focus includes building ethical, school-aligned partnerships and ensuring that all programs operate under structured, transparent, and accountable systems."
              imageSrc="/ilyne.jpg"
              imageAlt="Portrait of Ilyne Cendy Root"
            />

            <BoardMember
              name="Joseph Root"
              title="Vice President"
              shortDescription="Joseph Root provides executive and operational leadership, supporting organizational planning, program coordination, and partnership development."
              fullDescription="Joseph Root provides executive and operational leadership for Global Bright Futures Foundation Inc., supporting organizational planning, program coordination, and partnership development.

He works closely with executive leadership to ensure effective program implementation, compliance alignment, and operational consistency across initiatives. His role includes supporting governance processes, partner coordination, and organizational systems that ensure accountability and structured delivery of services."
              imageSrc="/joseph.jpg"
              imageAlt="Portrait of Joseph Root"
            />
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Board of Directors</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The Board of Directors provides independent governance and oversight to ensure the Foundation operates in alignment with its mission, ethical standards, and applicable nonprofit regulations under the Internal Revenue Service. The Board is responsible for reviewing organizational performance, ensuring accountability in program delivery, and supporting long-term strategic direction.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-8 text-foreground">Board Members</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BoardMember
              name="Reyshyl Durban"
              title="Board Director"
              shortDescription="Reyshyl Durban provides leadership in education management, youth development, and community-based programming."
              fullDescription="Reyshyl Durban provides leadership in education management, youth development, and community-based programming. She supports governance oversight and contributes experience in instructional leadership and program coordination."
              imageSrc="/reyshyl.jpg"
              imageAlt="Portrait of Reyshyl Durban"
            />

            <BoardMember
              name="Verna Jean Vaniza G. Limocon"
              title="Board Director"
              shortDescription="A licensed educator with over 13 years of teaching experience in the Philippines and the United States."
              fullDescription="A licensed educator with over 13 years of teaching experience in the Philippines and the United States, Verna contributes expertise in classroom instruction, cross-cultural education, and student development."
              imageSrc="/verna.jpg"
              imageAlt="Portrait of Verna Jean Vaniza G. Limocon"
            />

            <BoardMember
              name="Cherry Ann A. Pasalgon"
              title="Board Director"
              shortDescription="An experienced international educator with over 15 years of teaching experience across multiple countries."
              fullDescription="An experienced international educator with over 15 years of teaching experience across multiple countries—Thailand, the United Arab Emirates, and New Zealand. Cherry Ann provides expertise in early childhood education, mentorship, curriculum development, and inclusive learning environments."
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
