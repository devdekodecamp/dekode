import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Cloud, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-balance">
            Our <span className="gradient-text">Programs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Choose from our comprehensive programs designed to take you from
            beginner to job-ready professional
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Career Pathways */}
            <Card className="p-10 space-y-6 hover:shadow-xl transition-shadow bg-card">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center">
                <Briefcase className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Career Pathways
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive learning tracks designed to prepare you for
                specific tech careers with structured progression and real-world
                projects.
              </p>
              <Link href="/programs/career-pathways">
                <Button className="bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity">
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </Card>

            {/* Salesforce ADM201 */}
            <Card className="p-10 space-y-6 hover:shadow-xl transition-shadow bg-card">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center">
                <Cloud className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Salesforce ADM201
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get certified as a Salesforce Administrator with our
                comprehensive ADM201 certification preparation program.
              </p>
              <Link href="/programs/salesforce-adm201">
                <Button className="bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity">
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              What You'll Gain
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Every program includes these essential components for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <CheckCircle2
                className="text-[#760da3] flex-shrink-0 mt-1"
                size={24}
              />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Expert Instruction
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn from industry professionals with years of real-world
                  experience
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
                  Hands-On Projects
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build a portfolio of real-world projects to showcase your
                  skills
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
                  Resume reviews, interview prep, and job placement assistance
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
                  Study at your own pace with lifetime access to course
                  materials
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
                  Community Access
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join a supportive community of learners and alumni
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
                  Certification Prep
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Prepare for industry-recognized certifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Choose a program and begin your journey to a successful tech career
            today
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
            >
              Contact Us to Enroll
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
