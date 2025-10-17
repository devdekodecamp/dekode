import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Code,
  Laptop,
  Server,
  ArrowRight,
  CheckCircle2,
  Users,
  Cloud,
  BarChart3,
  Database,
} from "lucide-react";

export default function CareerPathwaysPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              Career <span className="gradient-text">Pathways</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              Structured learning tracks designed to take you from beginner to
              job-ready professional in your chosen tech career
            </p>
          </div>
        </div>
      </section>

      {/* Careers You Can Pursue */}
      <section className="py-16 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Careers You Can Pursue
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Choose from multiple high-demand career tracks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 bg-card">
              <Cloud className="text-[#760da3]" size={40} />
              <h3 className="text-2xl font-semibold text-foreground">
                Salesforce Admin
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Master Salesforce administration and get certified to manage and
                configure Salesforce orgs.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  User Management & Security
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Data Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Automation & Workflows
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <BarChart3 className="text-[#760da3]" size={40} />
              <h3 className="text-2xl font-semibold text-foreground">
                Salesforce Analyst
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn to analyze business requirements and design Salesforce
                solutions for organizations.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Business Analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Solution Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Requirements Gathering
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <Database className="text-[#760da3]" size={40} />
              <h3 className="text-2xl font-semibold text-foreground">
                Salesforce Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Build custom applications and integrations using Apex, Lightning
                Web Components, and more.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Apex Programming
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Lightning Web Components
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  API Integration
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <Code className="text-[#760da3]" size={40} />
              <h3 className="text-2xl font-semibold text-foreground">
                Full-Stack Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Master both frontend and backend development to build complete
                web applications from scratch.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  React, Node.js, Databases
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  API Development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Deployment & DevOps
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <Laptop className="text-[#760da3]" size={40} />
              <h3 className="text-2xl font-semibold text-foreground">
                Frontend Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Specialize in creating beautiful, responsive user interfaces and
                exceptional user experiences.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  HTML, CSS, JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  React, Vue, or Angular
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  UI/UX Best Practices
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <Server className="text-[#760da3]" size={40} />
              <h3 className="text-2xl font-semibold text-foreground">
                Backend Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Focus on server-side logic, databases, and APIs that power
                modern applications.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Node.js, Python, or Java
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Database Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  API Architecture
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Skill Progression Roadmap */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Skill Progression Roadmap
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              A clear path from beginner to advanced professional
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 bg-card">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Foundations (Weeks 1-4)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Learn programming fundamentals, version control with Git,
                    and basic web development concepts. Build your first simple
                    projects.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Core Skills (Weeks 5-12)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Master your chosen technology stack, learn best practices,
                    and build intermediate projects that demonstrate your
                    growing skills.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Advanced Topics (Weeks 13-20)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dive into advanced concepts, learn testing, deployment, and
                    optimization. Work on complex, real-world projects.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Career Launch (Weeks 21-24)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Build your capstone project, polish your portfolio, prepare
                    for interviews, and get ready to land your first tech role.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How DeKode Prepares You */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              How DeKode Prepares You for Real Projects
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              We don't just teach theory—we prepare you for the real world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 space-y-4 bg-card">
              <h3 className="text-2xl font-semibold text-foreground">
                Real-World Projects
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Work on projects that mirror actual industry challenges. Build
                applications that solve real problems and can be showcased in
                your portfolio.
              </p>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <h3 className="text-2xl font-semibold text-foreground">
                Code Reviews
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Receive detailed feedback on your code from experienced
                developers. Learn industry best practices and how to write
                clean, maintainable code.
              </p>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <h3 className="text-2xl font-semibold text-foreground">
                Team Collaboration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Experience working in teams using Git, Agile methodologies, and
                modern collaboration tools—just like in a real development
                environment.
              </p>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <h3 className="text-2xl font-semibold text-foreground">
                Industry Mentorship
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Get guidance from professionals currently working in the field.
                Learn insider tips and strategies for success in your chosen
                career path.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
              >
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Opportunities */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Users className="mx-auto text-[#760da3]" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Partner Opportunities
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            We partner with leading tech companies to provide internship and job
            placement opportunities for our graduates. Our hiring partners are
            always looking for talented developers from our programs.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 h-14 border-2 bg-transparent"
            >
              Learn About Partnerships
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
