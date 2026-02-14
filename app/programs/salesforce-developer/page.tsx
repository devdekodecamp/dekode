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
  Zap,
  Globe,
  CheckCircle2,
  Star,
  BookOpen,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Salesforce Developer Program (Coming Soon)",
  description:
    "Master Salesforce development with Apex, Lightning Web Components, and API integrations. DeKode Camp's 16-week program takes you from beginner to advanced developer.",
  alternates: { canonical: "/programs/salesforce-developer" },
  openGraph: {
    title: "Salesforce Developer Program | DeKode Camp",
    description: "Master Apex, LWC, and Salesforce integrations in 16 weeks. Coming Soon.",
    url: "https://www.dekodecamp.com/programs/salesforce-developer",
    type: "website",
  },
  keywords: ["Salesforce Developer program", "Apex training", "LWC course", "Salesforce development", "Platform Developer certification"],
};

export default function SalesforceDeveloperPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-br from-[#e01414]/5 via-[#760da3]/5 to-[#008cff]/5">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              <span className="gradient-text">Salesforce Developer</span> –{" "}
              <span className="text-muted-foreground">Coming Soon</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Master the art of Salesforce development with Apex, Lightning Web
              Components, and custom integrations. Build powerful applications
              that extend Salesforce's capabilities.
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
              Our comprehensive Salesforce Development program will take you
              from beginner to advanced developer, covering all essential
              technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-card hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#760da3]/10 flex items-center justify-center">
                  <Code className="text-[#760da3]" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Apex Programming
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Master Salesforce's proprietary programming language for
                building custom business logic and data manipulation.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#760da3] flex-shrink-0"
                  />
                  <span>Classes, triggers, and batch processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#760da3] flex-shrink-0"
                  />
                  <span>SOQL and SOSL queries</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#760da3] flex-shrink-0"
                  />
                  <span>Exception handling and testing</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#008cff]/10 flex items-center justify-center">
                  <Globe className="text-[#008cff]" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Lightning Web Components
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Build modern, responsive user interfaces using Salesforce's
                Lightning Web Components framework.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#008cff] flex-shrink-0"
                  />
                  <span>Component lifecycle and events</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#008cff] flex-shrink-0"
                  />
                  <span>Wire service and imperative calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#008cff] flex-shrink-0"
                  />
                  <span>Custom styling and theming</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#e01414]/10 flex items-center justify-center">
                  <Zap className="text-[#e01414]" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Integrations & APIs
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Connect Salesforce with external systems using REST and SOAP
                APIs, webhooks, and middleware solutions.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#e01414] flex-shrink-0"
                  />
                  <span>REST and SOAP API integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#e01414] flex-shrink-0"
                  />
                  <span>Webhook implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#e01414] flex-shrink-0"
                  />
                  <span>Middleware and ETL processes</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Program Curriculum
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured learning path designed to take you from Salesforce
              basics to advanced development skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#760da3]/10 flex items-center justify-center">
                  <BookOpen className="text-[#760da3]" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Foundation Phase
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#760da3] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Salesforce Fundamentals
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Platform overview, data model, and basic configuration
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#760da3] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Apex Basics
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Variables, data types, control structures, and classes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#760da3] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Database Operations
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      SOQL, SOSL, DML operations, and data relationships
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#008cff]/10 flex items-center justify-center">
                  <Target className="text-[#008cff]" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Advanced Phase
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#008cff] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Lightning Web Components
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Modern UI development with LWC framework
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#008cff] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Integration Development
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      APIs, webhooks, and external system connections
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#008cff] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    6
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Advanced Topics
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Batch processing, async operations, and performance
                      optimization
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Career Outcomes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Upon completion, you'll be ready for high-demand Salesforce
              Developer roles with competitive salaries and growth
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#760da3]/10 flex items-center justify-center mx-auto mb-4">
                <Award className="text-[#760da3]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Salesforce Development
              </h3>
              <p className="text-muted-foreground text-sm">
                Build custom applications and extend Salesforce functionality
              </p>
            </Card>

            <Card className="p-6 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#008cff]/10 flex items-center justify-center mx-auto mb-4">
                <Code className="text-[#008cff]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Technical Architect
              </h3>
              <p className="text-muted-foreground text-sm">
                Design enterprise-level Salesforce solutions and integrations
              </p>
            </Card>

            <Card className="p-6 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#e01414]/10 flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#e01414]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Lead Developer
              </h3>
              <p className="text-muted-foreground text-sm">
                Lead development teams and mentor junior developers
              </p>
            </Card>

            <Card className="p-6 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#760da3]/10 flex items-center justify-center mx-auto mb-4">
                <Star className="text-[#760da3]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Consultant
              </h3>
              <p className="text-muted-foreground text-sm">
                Work with multiple clients on diverse Salesforce projects
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#760da3]/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="text-[#760da3]" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Duration
              </h3>
              <p className="text-muted-foreground">
                16 weeks of intensive training with hands-on projects and
                real-world scenarios
              </p>
            </Card>

            <Card className="p-8 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#008cff]/10 flex items-center justify-center mx-auto mb-6">
                <Users className="text-[#008cff]" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Class Size
              </h3>
              <p className="text-muted-foreground">
                Small cohorts of 15-20 students for personalized attention and
                collaboration
              </p>
            </Card>

            <Card className="p-8 bg-card text-center">
              <div className="w-16 h-16 rounded-full bg-[#e01414]/10 flex items-center justify-center mx-auto mb-6">
                <Award className="text-[#e01414]" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Certification
              </h3>
              <p className="text-muted-foreground">
                Prepare for Salesforce Platform Developer I and II
                certifications
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Be the First to Know
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Get notified when our Salesforce Developer program launches. Early
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
