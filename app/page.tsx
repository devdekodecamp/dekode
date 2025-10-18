import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Users,
  Award,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const bgGradientBrand =
  "bg-gradient-to-br from-[#e01414] via-[#760da3] to-[#008cff]";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 lg:px-8 pt-28 pb-16 min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
              Decode Tech,{" "}
              <span className="gradient-text">Unlock Your Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-balance">
              Transform your career with industry-leading tech education. Learn
              from experts, build real projects, and launch your dream career in
              technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://calendly.com/admin-dekodecamp/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className={`${bgGradientBrand} text-white hover:opacity-90 transition-opacity text-lg px-8 h-14`}
                >
                  Schedule a Call
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <Link href="/programs/career-pathways">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 h-14 border-2 bg-transparent"
                >
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What DeKode Offers */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Comprehensive programs designed to take you from beginner to
              industry-ready professional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Code2 className="text-[#760da3]" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Career Pathways
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Structured learning paths tailored to your career goals in
                software development, cloud computing, and more.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Users className="text-[#760da3]" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Expert Mentorship
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn from industry professionals with years of real-world
                experience in leading tech companies.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Rocket className="text-[#760da3]" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Real Projects
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Build portfolio-worthy projects that demonstrate your skills to
                potential employers.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Award className="text-[#760da3]" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Certifications
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Earn industry-recognized certifications including Salesforce
                Salesforce Admin and more.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
                Why Learn With{" "}
                <span className="gradient-text">DeKode Camp</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className="text-[#760da3] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Industry-Relevant Curriculum
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our programs are designed with input from leading tech
                      companies to ensure you learn the most in-demand skills.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className="text-[#760da3] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Hands-On Learning
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Learn by doing with real-world projects, coding
                      challenges, and practical assignments that build your
                      portfolio.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className="text-[#760da3] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Career Support
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      From resume reviews to interview prep, we support you
                      every step of the way to landing your dream job.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className="text-[#760da3] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Flexible Learning
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Study at your own pace with our flexible online programs
                      designed for working professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-sm bg-card">
                <Image
                  src="/placeholder.jpg"
                  alt="DeKode Camp students collaborating"
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Join thousands of students who have transformed their careers with
            DeKode Camp
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact">
              <Button
                size="lg"
                className={`${bgGradientBrand} text-white hover:opacity-90 transition-opacity text-lg px-8 h-14`}
              >
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/programs">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 border-2 bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
