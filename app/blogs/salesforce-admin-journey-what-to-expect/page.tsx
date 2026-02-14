import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Users,
  BookOpen,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Salesforce Admin Journey: What to Expect",
  description:
    "A complete guide to the Salesforce Admin career journey. Learn what to expect at every stage, from certification to landing your first role and beyond.",
  alternates: { canonical: "/blogs/salesforce-admin-journey-what-to-expect" },
  openGraph: {
    title: "Salesforce Admin Journey: What to Expect",
    description: "A complete guide to the Salesforce Admin career journey — from certification to landing your first role.",
    url: "https://www.dekodecamp.com/blogs/salesforce-admin-journey-what-to-expect",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce Admin Journey: What to Expect",
    description: "A complete guide to the Salesforce Admin career journey — from certification to landing your first role.",
  },
  keywords: ["Salesforce Admin journey", "Salesforce career path", "Salesforce certification", "Salesforce job", "admin career"],
};

function BlogJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "The Salesforce Admin Journey: What to Expect",
          description: "A complete guide to the Salesforce Admin career journey — from certification to landing your first role.",
          datePublished: "2026-01-25",
          dateModified: "2026-01-25",
          author: { "@type": "Organization", name: "DeKode Camp", url: "https://www.dekodecamp.com" },
          publisher: { "@type": "Organization", name: "DeKode Camp", logo: { "@type": "ImageObject", url: "https://www.dekodecamp.com/logo.png" } },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.dekodecamp.com/blogs/salesforce-admin-journey-what-to-expect" },
        }),
      }}
    />
  );
}

function FaqJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How long does it take to become a Salesforce Admin?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Becoming a Salesforce Admin typically takes 9-12 months, broken into three phases: Foundation Building (Months 1-3) where you learn platform fundamentals like navigation, core objects, data models, and basic reporting; Skill Development (Months 4-8) for advanced configuration, automation with Flow Builder, validation rules, and security controls; and Certification & Portfolio Building (Months 9-12) where you prepare for the Salesforce Administrator certification and build a portfolio of real projects.",
              },
            },
            {
              "@type": "Question",
              name: "What does a Salesforce Admin career path look like?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A Salesforce Admin career path offers four main advancement tracks: Senior Administrator (leading complex implementations and mentoring junior admins), Salesforce Development (transitioning to Apex, Lightning Web Components, and custom integrations), Solution Architect (designing enterprise-level solutions across multiple Salesforce clouds), or Consultant (working with multiple clients to optimize their Salesforce implementations). Hiring managers look for technical competency, business understanding, communication skills, and continuous learning.",
              },
            },
            {
              "@type": "Question",
              name: "What do hiring managers look for in Salesforce Admin candidates?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Hiring managers look for four key qualities in Salesforce Admin candidates: Technical Competency (ability to handle real-world scenarios and discuss specific projects), Business Understanding (translating business requirements into technical Salesforce solutions), Communication Skills (training users and explaining technical concepts to non-technical stakeholders), and Continuous Learning (staying current with Salesforce's three annual releases through Trailhead, certifications, and community involvement).",
              },
            },
          ],
        }),
      }}
    />
  );
}

function BreadcrumbJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dekodecamp.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.dekodecamp.com/blogs" },
            { "@type": "ListItem", position: 3, name: "Salesforce Admin Journey: What to Expect", item: "https://www.dekodecamp.com/blogs/salesforce-admin-journey-what-to-expect" },
          ],
        }),
      }}
    />
  );
}

export default function SalesforceAdminJourneyPage() {
  return (
    <div className="min-h-screen">
      <BlogJsonLd />
      <FaqJsonLd />
      <BreadcrumbJsonLd />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/blogs">
              <Button
                variant="ghost"
                className="mb-6 text-[#760da3] hover:text-[#760da3]"
              >
                <ArrowLeft className="mr-2" size={16} />
                Back to Blog
              </Button>
            </Link>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                January 12, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />7 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              The Salesforce Admin Journey: What to Expect
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Learn what hiring managers look for in Salesforce Admin portfolios
              and how to showcase your projects effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Your Salesforce Admin Career Path
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Embarking on a Salesforce Administrator career is an exciting
                  journey filled with opportunities for growth, learning, and
                  impact. Whether you're transitioning from another field or
                  looking to advance in your current role, understanding what to
                  expect will help you navigate this path with confidence.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Phase 1: Foundation Building (Months 1-3)
                </h2>

                <Card className="p-6 bg-card mb-6">
                  <div className="flex items-start gap-4">
                    <BookOpen
                      className="text-[#760da3] flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        Learning the Basics
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Your journey begins with understanding the Salesforce
                        platform fundamentals:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={16}
                            className="text-[#760da3] flex-shrink-0 mt-1"
                          />
                          <span>Salesforce navigation and user interface</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={16}
                            className="text-[#760da3] flex-shrink-0 mt-1"
                          />
                          <span>
                            Core objects (Accounts, Contacts, Opportunities,
                            Leads)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={16}
                            className="text-[#760da3] flex-shrink-0 mt-1"
                          />
                          <span>Data model and relationships</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={16}
                            className="text-[#760da3] flex-shrink-0 mt-1"
                          />
                          <span>Basic reporting and dashboards</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card">
                  <div className="flex items-start gap-4">
                    <Users
                      className="text-[#760da3] flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        Community Engagement
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Join the Salesforce community early in your journey.
                        Participate in user groups, attend virtual events, and
                        connect with other admins. The Salesforce community is
                        incredibly supportive and will be invaluable throughout
                        your career.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Phase 2: Skill Development (Months 4-8)
                </h2>

                <div className="space-y-6">
                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Advanced Configuration
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      As you progress, you'll dive deeper into Salesforce
                      configuration:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Custom objects and fields</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Page layouts and record types</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Validation rules and workflows</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Security and access controls</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Automation Mastery
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Learn to automate business processes:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Flow Builder for complex automation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Process Builder for legacy automation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Approval processes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Email templates and alerts</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Phase 3: Certification & Portfolio (Months 9-12)
                </h2>

                <Card className="p-6 bg-card mb-6">
                  <div className="flex items-start gap-4">
                    <Award
                      className="text-[#760da3] flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        Salesforce Administrator Certification
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        The Salesforce Administrator certification validates
                        your skills and knowledge. This credential is highly
                        valued by employers and can significantly boost your
                        career prospects.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Preparation typically takes 2-3 months of focused study,
                        including hands-on practice in Trailhead and taking
                        practice exams.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Building Your Portfolio
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Create a portfolio that showcases your skills:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-[#760da3] flex-shrink-0 mt-1"
                      />
                      <span>Document projects you've completed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-[#760da3] flex-shrink-0 mt-1"
                      />
                      <span>Create screenshots of customizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-[#760da3] flex-shrink-0 mt-1"
                      />
                      <span>Write case studies explaining your solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-[#760da3] flex-shrink-0 mt-1"
                      />
                      <span>Include testimonials from users or managers</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What Hiring Managers Look For
                </h2>

                <div className="space-y-6">
                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Technical Competency
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Employers want to see that you can handle real-world
                      scenarios. Be prepared to discuss specific projects,
                      challenges you've solved, and how you approach
                      problem-solving in Salesforce.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Business Understanding
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The best Salesforce Admins understand not just the
                      platform, but how it supports business objectives.
                      Demonstrate your ability to translate business
                      requirements into technical solutions.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Communication Skills
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You'll work with users across all levels of the
                      organization. Strong communication skills, both written
                      and verbal, are essential for training users and
                      explaining technical concepts to non-technical
                      stakeholders.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Continuous Learning
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Salesforce releases new features three times a year. Show
                      that you're committed to staying current with platform
                      updates and continuing your education through Trailhead,
                      certifications, and community involvement.
                    </p>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Career Growth Opportunities
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  As a Salesforce Administrator, you have multiple paths for
                  career advancement:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-card">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Senior Administrator
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Lead complex implementations, mentor junior admins, and
                      take on more strategic responsibilities.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Salesforce Development
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Transition to development by learning Apex, Lightning Web
                      Components, and custom integrations.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Solution Architect
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Design enterprise-level solutions and work with multiple
                      Salesforce clouds and integrations.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Consultant
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Work with multiple clients, helping them optimize their
                      Salesforce implementations and processes.
                    </p>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Conclusion
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The Salesforce Administrator journey is both challenging and
                  rewarding. Success requires dedication, continuous learning,
                  and a genuine passion for helping businesses leverage
                  technology effectively.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Remember that every expert was once a beginner. Focus on
                  building a strong foundation, gaining hands-on experience, and
                  connecting with the community. With persistence and the right
                  approach, you can build a successful and fulfilling career as
                  a Salesforce Administrator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Start Your Salesforce Admin Journey Today
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Join our comprehensive Salesforce Admin program and get the skills,
            certification, and portfolio you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/programs/salesforce-adm201">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
              >
                Begin Your Journey
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 border-2 bg-transparent"
              >
                Ask Questions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
