import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Users,
  Award,
  Code,
  Database,
  Globe,
  Smartphone,
  CheckCircle2,
  Star,
  BookOpen,
  Target,
  Server,
  Palette,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Full Stack Developer Program (Coming Soon)",
  description:
    "Master frontend and backend development with DeKode Camp's 18-week Full Stack Developer program. Learn React, Node.js, databases, Docker, and deploy real projects.",
  alternates: { canonical: "/programs/full-stack-developer" },
  openGraph: {
    title: "Full Stack Developer Program | DeKode Camp",
    description: "Master frontend and backend development in 18 weeks. Coming Soon.",
    url: "https://www.dekodecamp.com/programs/full-stack-developer",
    type: "website",
  },
  keywords: ["full stack developer program", "React bootcamp", "Node.js training", "web development course", "coding bootcamp"],
};

export default function FullStackDeveloperPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-br from-[#e01414]/5 via-[#760da3]/5 to-[#008cff]/5">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              <span className="gradient-text">Full Stack Developer</span> –{" "}
              <span className="text-muted-foreground">Coming Soon</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Master both frontend and backend development to build complete web
              applications. Learn modern technologies and frameworks to become a
              versatile developer.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              disabled
              className="bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14 opacity-50 cursor-not-allowed"
            >
              Coming Soon
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 border-2 bg-transparent"
              >
                Get Notified
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              What You'll Learn
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive Full Stack Development program covers both
              frontend and backend technologies, giving you the skills to build
              complete web applications from scratch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-card hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#008cff]/10 flex items-center justify-center">
                  <Globe className="text-[#008cff]" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Frontend Development
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Build responsive, interactive user interfaces using modern
                JavaScript frameworks and libraries.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#008cff] flex-shrink-0"
                  />
                  <span>React.js and Next.js frameworks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#008cff] flex-shrink-0"
                  />
                  <span>HTML5, CSS3, and JavaScript ES6+</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#008cff] flex-shrink-0"
                  />
                  <span>Responsive design and UI/UX principles</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#e01414]/10 flex items-center justify-center">
                  <Server className="text-[#e01414]" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Backend Development
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Create robust server-side applications, APIs, and database
                systems that power modern web applications.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#e01414] flex-shrink-0"
                  />
                  <span>Node.js and Express.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#e01414] flex-shrink-0"
                  />
                  <span>RESTful API design and development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#e01414] flex-shrink-0"
                  />
                  <span>Authentication and security</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#760da3]/10 flex items-center justify-center">
                  <Database className="text-[#760da3]" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Database & DevOps
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Master database design, deployment strategies, and DevOps
                practices for scalable applications.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#760da3] flex-shrink-0"
                  />
                  <span>SQL and NoSQL databases</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#760da3] flex-shrink-0"
                  />
                  <span>Docker and containerization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#760da3] flex-shrink-0"
                  />
                  <span>Cloud deployment and CI/CD</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn the most in-demand technologies used by top companies
              worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#008cff]/10 flex items-center justify-center mx-auto mb-4">
                <Code className="text-[#008cff]" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Frontend
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>React.js</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </Card>

            <Card className="p-6 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#e01414]/10 flex items-center justify-center mx-auto mb-4">
                <Server className="text-[#e01414]" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Backend
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>FastAPI</li>
              </ul>
            </Card>

            <Card className="p-6 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#760da3]/10 flex items-center justify-center mx-auto mb-4">
                <Database className="text-[#760da3]" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Database
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>Prisma ORM</li>
              </ul>
            </Card>

            <Card className="p-6 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#008cff]/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="text-[#008cff]" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                DevOps
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Docker</li>
                <li>AWS</li>
                <li>Vercel</li>
                <li>GitHub Actions</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Program Curriculum
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured learning path designed to take you from beginner to
              full-stack developer in 18 weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#008cff]/10 flex items-center justify-center">
                  <BookOpen className="text-[#008cff]" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Foundation Phase (Weeks 1-8)
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#008cff] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      HTML, CSS, JavaScript
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Web fundamentals and modern JavaScript
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#008cff] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      React.js Development
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Component-based UI development
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#008cff] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Node.js & Express
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Server-side JavaScript development
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#008cff] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Database Design
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      SQL, NoSQL, and data modeling
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#e01414]/10 flex items-center justify-center">
                  <Target className="text-[#e01414]" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Advanced Phase (Weeks 9-18)
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e01414] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Full Stack Integration
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Connecting frontend and backend
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e01414] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    6
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Authentication & Security
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      JWT, OAuth, and security best practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e01414] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    7
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      DevOps & Deployment
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Docker, cloud platforms, and CI/CD
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e01414] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    8
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Capstone Project
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Build and deploy a complete application
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Career Outcomes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Upon completion, you'll be ready for high-demand full-stack
              developer roles with competitive salaries and growth
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#008cff]/10 flex items-center justify-center mx-auto mb-4">
                <Code className="text-[#008cff]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Full Stack Developer
              </h3>
              <p className="text-muted-foreground text-sm">
                Build complete web applications from frontend to backend
              </p>
            </Card>

            <Card className="p-6 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#e01414]/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="text-[#e01414]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Frontend Developer
              </h3>
              <p className="text-muted-foreground text-sm">
                Specialize in creating beautiful, responsive user interfaces
              </p>
            </Card>

            <Card className="p-6 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#760da3]/10 flex items-center justify-center mx-auto mb-4">
                <Server className="text-[#760da3]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Backend Developer
              </h3>
              <p className="text-muted-foreground text-sm">
                Focus on server-side logic, APIs, and database systems
              </p>
            </Card>

            <Card className="p-6 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#008cff]/10 flex items-center justify-center mx-auto mb-4">
                <Star className="text-[#008cff]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Technical Lead
              </h3>
              <p className="text-muted-foreground text-sm">
                Lead development teams and architect complex systems
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#008cff]/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="text-[#008cff]" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Duration
              </h3>
              <p className="text-muted-foreground">
                18 weeks of intensive training with hands-on projects and
                real-world applications
              </p>
            </Card>

            <Card className="p-8 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#e01414]/10 flex items-center justify-center mx-auto mb-6">
                <Users className="text-[#e01414]" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Class Size
              </h3>
              <p className="text-muted-foreground">
                Small cohorts of 12-15 students for personalized attention and
                collaboration
              </p>
            </Card>

            <Card className="p-8 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#760da3]/10 flex items-center justify-center mx-auto mb-6">
                <Award className="text-[#760da3]" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Portfolio
              </h3>
              <p className="text-muted-foreground">
                Build 5+ portfolio projects including a capstone application
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Be the First to Know
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Get notified when our Full Stack Developer program launches. Early
            registrants will receive special pricing and exclusive access.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
              >
                Get Notified
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/programs">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 border-2 bg-transparent"
              >
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
