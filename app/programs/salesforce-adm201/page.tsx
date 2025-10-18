"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Cloud,
  CheckCircle2,
  Clock,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import { EnrollmentModal } from "@/components/enrollment-modal";
import { useState } from "react";

export default function SalesforceADM201Page() {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="text-[#760da3]" size={48} />
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                <span className="gradient-text">Salesforce Admin</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              Become a certified Salesforce Administrator with our comprehensive
              Salesforce Admin certification preparation program
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center space-y-4 bg-card">
              <Clock className="mx-auto text-[#760da3]" size={40} />
              <h3 className="text-2xl font-semibold text-foreground">
                4 Weeks
              </h3>
              <p className="text-muted-foreground">Self-paced learning</p>
            </Card>

            <Card className="p-8 text-center space-y-4 bg-card">
              <Users className="mx-auto text-[#760da3]" size={40} />
              <h3 className="text-2xl font-semibold text-foreground">
                Live Sessions
              </h3>
              <p className="text-muted-foreground">
                Weekly instructor-led classes
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 bg-card">
              <Award className="mx-auto text-[#760da3]" size={40} />
              <h3 className="text-2xl font-semibold text-foreground">
                Certification
              </h3>
              <p className="text-muted-foreground">
                Salesforce Admin exam preparation
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              What You'll Learn
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Master all the skills needed to pass the Salesforce Admin
              certification exam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <CheckCircle2
                className="text-[#760da3] flex-shrink-0 mt-1"
                size={24}
              />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Salesforce Fundamentals
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Understand the Salesforce platform, navigation, and core
                  concepts
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
                  Data Management
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Import, export, and manage data effectively in Salesforce
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
                  Security & Access
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Configure user access, profiles, roles, and sharing settings
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
                  Automation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create workflows, process builder flows, and approval
                  processes
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
                  Reports & Dashboards
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build custom reports and interactive dashboards for data
                  visualization
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
                  Sales & Service Cloud
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Configure and customize Sales Cloud and Service Cloud features
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Who It's For
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              This program is perfect for various professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 bg-card">
              <h3 className="text-2xl font-semibold text-foreground">
                Career Shifters
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Looking to transition into a high-demand tech role with no prior
                Salesforce experience required
              </p>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <h3 className="text-2xl font-semibold text-foreground">
                Business Analysts
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Want to add Salesforce administration skills to enhance your
                business analysis capabilities
              </p>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <h3 className="text-2xl font-semibold text-foreground">
                IT Professionals
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Seeking to expand your skill set with one of the most in-demand
                cloud platforms
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Duration & Format */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Duration & Format
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Flexible learning designed for working professionals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-10 space-y-6 bg-card">
              <h3 className="text-2xl font-semibold text-foreground">
                Program Duration
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-[#760da3] flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>4 weeks of comprehensive training</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-[#760da3] flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>6 hours per week commitment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-[#760da3] flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>Lifetime access to course materials</span>
                </li>
              </ul>
            </Card>

            <Card className="p-10 space-y-6 bg-card">
              <h3 className="text-2xl font-semibold text-foreground">
                Learning Format
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-[#760da3] flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>Self-paced video lessons and tutorials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-[#760da3] flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>Weekly live instructor-led sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-[#760da3] flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>Hands-on exercises in Salesforce sandbox</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Ready to Become a Certified Salesforce Administrator?
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Join our next cohort and start your journey to Salesforce Admin
            certification
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => setEnrollModalOpen(true)}
              className="bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
            >
              Enroll Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 border-2 bg-transparent"
              >
                Request More Info
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <EnrollmentModal
        open={enrollModalOpen}
        onOpenChange={setEnrollModalOpen}
      />
    </div>
  );
}
