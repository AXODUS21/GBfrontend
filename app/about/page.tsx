import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Users, Target, Shield } from "lucide-react";
import { BoardMember } from "@/components/board-member";

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            About Us
          </h1>
          <p className="text-lg md:text-xl opacity-95 text-balance">
            Empowering students locally and globally through school-to-school
            partnerships and educational equity.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Our Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground text-2xl mb-2">
                    Mission Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    Global Bright Futures Foundation empowers underserved
                    learners by expanding access to scholarships, tutoring,
                    mentorship, and innovative educational programs that foster
                    academic growth, opportunity, and lifelong success—locally
                    and globally.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground text-2xl mb-2">
                    Vision Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      We envision a world where every learner regardless of
                      income, location, or circumstance has access to
                      meaningful, high-quality education pathways that unlock
                      potential, strengthen communities, and create lasting
                      opportunity across generations and borders.
                    </p>
                    <p className="text-foreground/70 text-base leading-relaxed border-t border-border pt-4 italic">
                      Through ethical partnerships, innovation, and
                      transparency, education becomes a shared global
                      opportunity not a privilege.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Equity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  We believe every student deserves access to quality education
                  and mentorship, regardless of zip code or economic status.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  We partner with schools, communities, and organizations to
                  create sustainable, collaborative solutions for educational
                  access.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">
                  Accountability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  We maintain transparent, audit-ready operations and prioritize
                  school independence and student welfare above all else.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Board of Directors
            </h2>
            <div className="flex justify-center mb-6">
              <Link
                href="/board-of-directors"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-primary-foreground font-medium hover:bg-primary/90 transition"
              >
                View Board of Directors
              </Link>
            </div>
            <div className="space-y-6">
              <BoardMember
                name="Ilyne Cendy Root"
                title="Founder & President, Global Bright Futures Foundation Inc."
                shortDescription="Ilyne Cendy Root is an educator, nonprofit leader, and global advocate for educational equity whose work is grounded in lived experience, professional expertise, and a lifelong commitment to service. Orphaned at a young age, Ilyne learned early what it meant to navigate life without consistent support, developing resilience and a deep understanding of the barriers faced by students without stable guidance or resources."
                fullDescription="Ilyne Cendy Root is an educator, nonprofit leader, and global advocate for educational equity whose work is grounded in lived experience, professional expertise, and a lifelong commitment to service.

Orphaned at a young age, Ilyne learned early what it meant to navigate life without consistent support. Raised among relatives and managing school responsibilities independently, she developed resilience, resourcefulness, and a deep understanding of the barriers faced by students without stable guidance or resources. Even as a high school student, she took initiative to support herself—learning how determination, creativity, and perseverance can open doors where opportunities are limited.

These formative experiences shaped her unwavering belief that education changes lives when access, mentorship, and support are aligned.

A Life Dedicated to Education and Service

Committed to learning, Ilyne earned a university scholarship and supported herself as a student assistant while pursuing her degree. During this time, she tutored children across diverse learning needs, including students with autism and ADHD—often balancing long travel hours, late-night tutoring, and early mornings for work and study. These experiences reinforced her conviction that personalized educational support is essential for student success.

After graduation, she worked in a Remedial Reading Center before teaching full-time in Thailand. There, she served students during the week and dedicated weekends to tutoring, leading brain development programs, and supporting learners who needed additional academic guidance. Her work deepened her expertise in early childhood education, literacy development, multilingual instruction, and social-emotional learning.

Returning to the Philippines, Ilyne founded Easy to Learn English, providing online instruction to students from Korea, Thailand, Japan, and Russia. She later established a community-based tutorial and learning center focused on individualized instruction and mentorship. Through initiatives such as a youth-led buddy reading program and partnerships with scholar students from the Department of Science and Technology, she helped strengthen literacy, leadership, and teaching skills among both learners and aspiring educators.

Alongside her husband, Ilyne also dedicated time to serving vulnerable populations—supporting homeless children through feeding, mentorship, and educational assistance—guided by the belief that education and compassion must go hand in hand.

From Grassroots Service to Global Impact

Over time, Ilyne expanded her work to include school supply support, student achievement celebrations, disaster relief efforts, and education-based sponsorships. She supported college students with learning tools, training, and service-based opportunities that allowed them to continue their education while contributing meaningfully to their communities.

These experiences led to the development of Support One, Empower Two, a program model rooted in a simple but powerful idea: supporting one learner can create opportunities for others—locally and globally.

This model became the foundation for Global Bright Futures Foundation Inc., a U.S.-based nonprofit organization dedicated to expanding equitable access to education through school-led partnerships, academic support, mentorship, and essential learning resources.

Leadership in Education

After relocating to the United States, Ilyne recognized similar educational gaps—high tutoring costs, limited individualized instruction, and inconsistent academic support for students. In response, she continued working closely with schools and education partners to support students through structured, mission-aligned programs.

She has served as an elementary school teacher and School Lead in Math and Science, contributing to curriculum development, instructional improvement, and teacher mentorship. She continues to pursue professional growth through ongoing training, holds full teaching certification, and is currently pursuing a Master's Degree in School Management.

Across the U.S., the Philippines, and other regions, Ilyne partners with schools, educators, and community organizations that share a commitment to educational equity, transparency, and student-centered support.

A Mission Grounded in Purpose

At the heart of Ilyne's work is a guiding belief: Every learner deserves access to quality education. Every aspiring educator deserves mentorship and opportunity. And communities thrive when knowledge, care, and opportunity are shared.

Her journey—from an orphaned child to international educator and nonprofit founder—reflects the mission of Global Bright Futures Foundation Inc.: to create pathways to learning that are equitable, accountable, and transformative.

Through thoughtful leadership, school-driven programs, and a commitment to transparency, Ilyne continues to work toward a future where education access is not determined by circumstance, but supported by collective action and care."
                highlights={[
                  "Founder & President, Global Bright Futures Foundation Inc.",
                  "Established and led international education and tutoring initiatives",
                  "Developed Support One, Empower Two, a dual-impact education access model",
                  "Created literacy, mentorship, and college-support programs",
                  "Partnered with schools and community organizations in the U.S. and abroad",
                  "Supported college students through education-focused training and service opportunities",
                  "Served as School Lead in U.S. elementary education",
                  "Ongoing professional development and graduate studies in school leadership",
                ]}
                imageSrc="/ilyne.jpg"
                imageAlt="Portrait of Ilyne Cendy Root"
              />
              <BoardMember
                name="Joseph Root"
                title="Vice President | Global Bright Futures Foundation Inc."
                shortDescription="Joseph Root serves as Vice President of Global Bright Futures Foundation Inc., providing executive leadership, operational oversight, and strategic support to advance the Foundation's mission of expanding equitable access to education for underserved learners locally and globally."
                fullDescription="Joseph Root serves as Vice President of Global Bright Futures Foundation Inc., providing executive leadership, operational oversight, and strategic support to advance the Foundation's mission of expanding equitable access to education for underserved learners locally and globally.

A passionate advocate for youth development, Joseph brings years of experience training and mentoring young athletes through motocross and supercross programs. He has guided riders of all skill levels, emphasizing discipline, teamwork, resilience, and goal-setting—skills that directly translate to academic and personal success. His approach to youth sports emphasizes education, mentorship, and life skills, aligning with the Foundation's commitment to innovative, interest-based learning programs that empower young people.

In his role as Vice President, Joseph works closely with the President and Board of Directors to ensure strong governance, ethical stewardship, and long-term sustainability of the Foundation's programs. He supports organizational planning, compliance, partner relations, and program implementation, ensuring all initiatives remain mission-driven, transparent, and accountable to donors, grant funders, and the communities served.

Alongside his wife, Founder and President Ilyne Cendy Root, Joseph has actively supported initiatives providing educational resources, school supplies, mentorship, disaster relief, and outreach to homeless and underserved children. He is dedicated to leveraging youth sports, mentorship, and experiential learning as pathways for education, personal growth, and community empowerment.

Joseph's leadership philosophy is rooted in the belief that education and personal development thrive when interest-based engagement, mentorship, and ethical leadership come together. Through his service at Global Bright Futures Foundation, he continues to champion programs that connect learning to real-world experiences, inspire underserved youth, and create opportunities for empowerment, achievement, and lifelong success."
                imageSrc="/joseph.jpg"
                imageAlt="Portrait of Joseph Root"
              />
              <BoardMember
                name="Reyshyl Durban"
                title="Board Director | Global Bright Futures Foundation Inc."
                shortDescription="Reyshyl Durban is a dedicated servant leader and educator with a strong commitment to community development, youth mentorship, and values-based education. Raised in Negros Occidental as a pastor's child, Reyshyl grew up actively engaged in church and community outreach, including children's feeding programs and youth development initiatives."
                fullDescription="Reyshyl Durban is a dedicated servant leader and educator with a strong commitment to community development, youth mentorship, and values-based education. Raised in Negros Occidental as a pastor's child, Reyshyl grew up actively engaged in church and community outreach, including children's feeding programs and youth development initiatives. These early experiences fostered a passion for service, leadership, and creative expression through music, the arts, and teaching, which Reyshyl used to engage and mentor children across diverse communities.

At the age of 16, Reyshyl assumed a formal leadership role as Children's Ministry Head for World International Ministry, gaining early experience in program coordination, volunteer leadership, and child-centered outreach. Guided by a calling to serve, Reyshyl later relocated to Cebu to pursue theological studies at Visayan Wesleyan Bible School, earning a Bachelor's Degree in Theology. Alongside ministry preparation, Reyshyl supported community needs through home-based tutoring, youth convention speaking engagements, and Values Education instruction, integrating education with character formation.

Reyshyl's professional path evolved naturally into the education sector, where teaching and mentorship could be sustained and expanded. After joining a tutorial and learning center, Reyshyl brought extensive experience working with learners of varying ages, academic levels, and learning needs. This dedication and competence led to advancement into a management role, overseeing teacher training and development, student assessment processes, and parent communication to ensure high-quality, student-centered educational services.

In a leadership capacity, Reyshyl played a key role in implementing mission-driven scholarship and work-study initiatives, providing public high school students with academic support, mentorship, and practical work experience. These programs helped students earn allowances while remaining engaged in learning, and supported broader community efforts such as school supply assistance and feeding programs.

As a Board Director of Global Bright Futures Foundation Inc., Reyshyl contributes valuable insight grounded in faith-informed leadership, education management, and community-based service. Reyshyl is deeply committed to advancing programs that promote equitable access to education, holistic student development, and sustainable community impact.

Reyshyl's service is guided by a core belief shared by the Foundation: that education, when grounded in purpose and compassion, has the power to transform lives and strengthen communities."
                imageSrc="/reyshyl.jpg"
                imageAlt="Portrait of Reyshyl Durban"
              />
              <BoardMember
                name="Verna Jean Vaniza G. Limocon"
                title="Board Director | Global Bright Futures Foundation Inc."
                shortDescription="Verna Jean Vaniza G. Limocon is a licensed professional educator currently serving in the United States through an international exchange teacher program. With more than 13 years of teaching experience, including 11 years in the Philippines and 2 years in the United States, she brings a strong cross-cultural perspective and a deep commitment to advancing education for children from diverse backgrounds."
                fullDescription="Verna Jean Vaniza G. Limocon is a licensed professional educator currently serving in the United States through an international exchange teacher program. With more than 13 years of teaching experience, including 11 years in the Philippines and 2 years in the United States, she brings a strong cross-cultural perspective and a deep commitment to advancing education for children from diverse backgrounds.

Education, for Verna, is more than a profession—it is a lifelong calling. She believes that every child has inherent worth and potential and deserves access to quality learning opportunities, encouragement, and support. This belief shapes her work as an educator and leader, guiding her to support not only academic achievement, but also the development of confidence, character, and emotional well-being.

Verna's dedication to students extends beyond the classroom. She has actively supported underserved learners by providing school supplies, learning materials, and financial assistance to help reduce barriers to education. In partnership with her family, she also helps organize annual summer learning and enrichment programs in rural communities, where children receive foundational instruction in reading, writing, and creative skills in a safe and nurturing environment. These programs also provide meals, educational materials for the upcoming school year, and certificates that recognize each child's progress and achievements.

The impact of this outreach has been significant, with children and families expressing a strong desire for continued learning opportunities. In response, these efforts have expanded to reach additional remote and underserved areas, bringing educational support, encouragement, and hope to more communities.

As a Director of Global Bright Futures Foundation Inc., Verna contributes her experience, compassion, and commitment to educational equity. She is especially passionate about programs that empower students while also supporting college learners who serve as mentors and tutors—creating a sustainable cycle of learning, opportunity, and shared growth.

Through her leadership, Verna is dedicated to advancing the Foundation's mission of expanding access to education for underserved learners in the United States and abroad. She believes that when children are supported through education, entire communities are strengthened and brighter futures become possible."
                imageSrc="/verna.jpg"
                imageAlt="Portrait of Verna Jean Vaniza G. Limocon"
              />
              <BoardMember
                name="Cherry Ann A. Pasalgon"
                title="Board Director | Global Bright Futures Foundation Inc."
                shortDescription="Cherry Ann A. Pasalgon is a seasoned educator and child-focused advocate with over 15 years of international teaching and leadership experience across the Philippines, Thailand, the United Arab Emirates, and New Zealand. She holds a Bachelor of Elementary Education with a specialization in English from West Visayas State University and is a Licensed Professional Teacher under the Philippine Regulation Commission (PRC License No. 1025496)."
                fullDescription="Cherry Ann A. Pasalgon is a seasoned educator and child-focused advocate with over 15 years of international teaching and leadership experience across the Philippines, Thailand, the United Arab Emirates, and New Zealand. She holds a Bachelor of Elementary Education with a specialization in English from West Visayas State University and is a Licensed Professional Teacher under the Philippine Regulation Commission (PRC License No. 1025496).

Throughout her career, Cherry Ann has served in a wide range of educational settings, including early childhood education, primary advisory roles, and foundation stage management. She is recognized for creating inclusive, developmentally appropriate, and research-informed learning environments that support the academic, social, and emotional growth of young learners.

Cherry Ann brings strong expertise in curriculum development, differentiated instruction, and learner-centered teaching practices, with a particular focus on nurturing critical thinking, language development, and confidence in diverse student populations. Her leadership experience includes collaborating with faculty and staff, strengthening parent engagement, implementing student safety and risk-assessment protocols, and organizing enriching academic and community-based programs.

Beyond the classroom, Cherry Ann is deeply committed to education equity and child welfare. She actively supports nonprofit initiatives that expand access to quality education and promote safe, nurturing learning environments for children from underserved communities. Her professional philosophy aligns with globally recognized child-focused principles that emphasize equity, protection, inclusion, and community-driven support for learners.

As a Board Director of Global Bright Futures Foundation Inc., Cherry Ann provides guidance grounded in both educational expertise and international perspective. She supports the Foundation's mission to expand educational access, strengthen school-based support systems, and ensure that programs are ethically implemented, culturally responsive, and aligned with the needs of children and communities served.

Her dedication reflects a shared belief at the heart of Global Bright Futures Foundation: that every child deserves the opportunity to learn, grow, and thrive through safe, high-quality, and equitable educational experiences."
                imageSrc="/cherry.jpg"
                imageAlt="Portrait of Cherry Ann A. Pasalgon"
              />
            </div>
          </div>

          <div className="bg-secondary/10 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Governance
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground mb-2">
                  Conflict of Interest Policy
                </h4>
                <p className="text-foreground/70">
                  Our board members and staff adhere to strict conflict of
                  interest policies to ensure ethical decision-making.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">
                  Non-Discrimination Policy
                </h4>
                <p className="text-foreground/70">
                  We serve all students without regard to race, color, religion,
                  sex, national origin, or disability.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">
                  Whistleblower Protection
                </h4>
                <p className="text-foreground/70">
                  We maintain policies to protect individuals who report
                  suspected misconduct or violations of policy.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border-2 border-primary rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Transparency & Financial Reports
            </h3>
            <p className="text-foreground/70 mb-6">
              As a 501(c)(3) nonprofit organization, we are committed to full
              transparency and accountability. Access our financial statements
              and annual reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition">
                Download Form 990
              </button>
              <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition">
                Annual Report 2024
              </button>
              <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition">
                Financial Statements
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
