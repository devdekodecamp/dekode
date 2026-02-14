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
  Star,
  Briefcase,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Build a Portfolio That Gets You Hired as a Salesforce Admin",
  description:
    "Learn how to build a standout Salesforce Admin portfolio that impresses hiring managers. Real project ideas, practical tips, and a step-by-step guide.",
  alternates: { canonical: "/blogs/build-portfolio-that-gets-you-hired" },
  openGraph: {
    title: "Build a Portfolio That Gets You Hired as a Salesforce Admin",
    description: "Learn how to build a standout Salesforce Admin portfolio that impresses hiring managers.",
    url: "https://www.dekodecamp.com/blogs/build-portfolio-that-gets-you-hired",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build a Portfolio That Gets You Hired as a Salesforce Admin",
    description: "Learn how to build a standout Salesforce Admin portfolio that impresses hiring managers.",
  },
  keywords: ["Salesforce portfolio", "Salesforce Admin", "get hired Salesforce", "Salesforce projects", "career tips"],
};

function BlogJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "How to Build a Portfolio That Gets You Hired",
          description: "Learn how to build a standout Salesforce Admin portfolio that impresses hiring managers.",
          datePublished: "2026-01-22",
          dateModified: "2026-01-22",
          author: { "@type": "Organization", name: "DeKode Camp", url: "https://www.dekodecamp.com" },
          publisher: { "@type": "Organization", name: "DeKode Camp", logo: { "@type": "ImageObject", url: "https://www.dekodecamp.com/logo.png" } },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.dekodecamp.com/blogs/build-portfolio-that-gets-you-hired" },
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
              name: "How do I build a Salesforce Admin portfolio?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Build a Salesforce Admin portfolio by working on real business scenarios — volunteer with nonprofits to implement Salesforce for free. For each project, document the business problem you solved, your analysis and recommendations, the Salesforce solution you implemented, and the measurable results and impact. Include visual evidence like screenshots of custom objects, before-and-after workflow diagrams, dashboard screenshots, and user training materials you developed.",
              },
            },
            {
              "@type": "Question",
              name: "What should I include in my Salesforce Admin portfolio?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A standout Salesforce Admin portfolio should include: real business scenario projects (not generic examples), detailed documentation of your process (problem, analysis, solution, results), visual evidence (screenshots, workflow diagrams, dashboards), quantified impact metrics (e.g., 'reduced data entry time by 60%', 'improved lead conversion by 25%'), and a professional website showcasing your certifications and case studies. The STAR method (Situation, Task, Action, Result) is recommended for structuring project descriptions.",
              },
            },
            {
              "@type": "Question",
              name: "Can I become a Salesforce Admin with no tech background?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, you can become a Salesforce Admin with no tech background. Salesforce is known for being accessible to career changers from non-technical fields. For example, teachers, project managers, and other professionals have successfully transitioned by leveraging transferable soft skills like user training, documentation, communication, and stakeholder management. Building a strong portfolio with real-world projects (such as volunteer work for nonprofits) and earning your Salesforce Administrator certification are the key steps to getting hired.",
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
            { "@type": "ListItem", position: 3, name: "Build a Portfolio That Gets You Hired", item: "https://www.dekodecamp.com/blogs/build-portfolio-that-gets-you-hired" },
          ],
        }),
      }}
    />
  );
}

export default function BuildPortfolioThatGetsYouHiredPage() {
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
                January 8, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />6 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              How to Build a Portfolio That Gets You Hired
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              An inspiring story from one of our graduates who successfully
              transitioned into Salesforce Admin from education.
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
                  Meet Sarah: From Teacher to Salesforce Admin
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Sarah Martinez spent eight years as a high school teacher
                  before deciding to make a career change. Like many career
                  changers, she was drawn to Salesforce because of its
                  reputation for being accessible to people from non-technical
                  backgrounds. Today, she's a successful Salesforce
                  Administrator at a growing tech company, earning 40% more than
                  her teaching salary.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  "The key to my success wasn't just learning Salesforce," Sarah
                  explains. "It was building a portfolio that showed employers I
                  could solve real business problems. My portfolio got me three
                  job offers within two months of completing my certification."
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What Makes a Portfolio Stand Out
                </h2>

                <Card className="p-6 bg-card mb-6">
                  <div className="flex items-start gap-4">
                    <Star
                      className="text-[#760da3] flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        Real Business Scenarios
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Instead of generic examples, Sarah created solutions for
                        actual business problems. She volunteered with local
                        nonprofits, offering to help them implement Salesforce
                        for free. This gave her real-world experience and
                        compelling portfolio pieces.
                      </p>
                    </div>
                  </div>
                </Card>

                <div className="space-y-6">
                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      1. Document Your Process
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      For each project, Sarah documented:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>The business problem she was solving</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Her analysis and recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>The Salesforce solution she implemented</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Results and impact on the business</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      2. Include Visual Evidence
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Sarah's portfolio included:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>
                          Screenshots of custom objects and fields she created
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Before and after workflow diagrams</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>
                          Dashboard screenshots showing improved reporting
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>User training materials she developed</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      3. Quantify Your Impact
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Sarah made sure to include measurable results:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>
                          "Reduced data entry time by 60% through automation"
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>"Improved lead conversion rate by 25%"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>
                          "Eliminated 15 hours of manual reporting per week"
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>"Achieved 95% user adoption rate"</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Sarah's Portfolio Projects
                </h2>

                <div className="space-y-6">
                  <Card className="p-6 bg-card">
                    <div className="flex items-start gap-4">
                      <Briefcase
                        className="text-[#760da3] flex-shrink-0 mt-1"
                        size={24}
                      />
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          Project 1: Nonprofit Volunteer Management System
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          <strong>Challenge:</strong> A local animal shelter was
                          managing volunteers using spreadsheets, leading to
                          scheduling conflicts and poor communication.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          <strong>Solution:</strong> Sarah implemented a custom
                          Salesforce solution with volunteer records, event
                          management, and automated communication workflows.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          <strong>Results:</strong> 40% increase in volunteer
                          retention, elimination of scheduling conflicts, and 3
                          hours saved per week on administrative tasks.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card">
                    <div className="flex items-start gap-4">
                      <Target
                        className="text-[#760da3] flex-shrink-0 mt-1"
                        size={24}
                      />
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          Project 2: Small Business CRM Implementation
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          <strong>Challenge:</strong> A local marketing agency
                          was losing track of client communications and missing
                          follow-up opportunities.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          <strong>Solution:</strong> Designed and implemented a
                          streamlined CRM with custom objects for campaigns,
                          leads, and opportunities, plus automated follow-up
                          reminders.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          <strong>Results:</strong> 30% increase in client
                          retention, 50% reduction in missed follow-ups, and
                          $15,000 increase in monthly revenue.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Portfolio Presentation Tips
                </h2>

                <div className="space-y-6">
                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Create a Professional Website
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sarah created a simple website using WordPress that
                      showcased her projects. She included a brief bio, her
                      Salesforce certifications, and detailed case studies for
                      each project. The site was clean, professional, and easy
                      to navigate.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Prepare for Portfolio Presentations
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Sarah practiced explaining her projects in simple terms
                      that non-technical stakeholders could understand. She
                      prepared:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>A 2-minute elevator pitch for each project</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Answers to common technical questions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>
                          Lessons learned and what she'd do differently
                        </span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Leverage Your Transferable Skills
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sarah highlighted how her teaching experience made her a
                      better Salesforce Admin. She emphasized her ability to
                      train users, create documentation, and communicate complex
                      concepts clearly. These soft skills set her apart from
                      other candidates.
                    </p>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  The Interview Process
                </h2>

                <Card className="p-6 bg-card mb-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Portfolio Walkthrough
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    During interviews, Sarah walked hiring managers through her
                    portfolio projects. She used the STAR method (Situation,
                    Task, Action, Result) to structure her responses:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-[#760da3] flex-shrink-0 mt-1"
                      />
                      <span>
                        <strong>Situation:</strong> Describe the business
                        context
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-[#760da3] flex-shrink-0 mt-1"
                      />
                      <span>
                        <strong>Task:</strong> Explain your responsibility
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-[#760da3] flex-shrink-0 mt-1"
                      />
                      <span>
                        <strong>Action:</strong> Detail what you did
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-[#760da3] flex-shrink-0 mt-1"
                      />
                      <span>
                        <strong>Result:</strong> Share the outcomes
                      </span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-card">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Technical Demonstrations
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Some interviews included live demonstrations. Sarah prepared
                    by having a demo org ready with her projects and practicing
                    common scenarios like creating a custom field, building a
                    report, or explaining a workflow. She also prepared to
                    discuss Salesforce best practices and limitations.
                  </p>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Key Takeaways
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Sarah's success story demonstrates that a strong portfolio is
                  more valuable than just certifications alone. Here are the key
                  lessons:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-card">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Real Experience Matters
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Volunteer work and side projects provide valuable
                      experience and compelling portfolio pieces.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Document Everything
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Keep detailed records of your projects, including
                      challenges, solutions, and results.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Show Business Impact
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Quantify your results whenever possible. Numbers speak
                      louder than descriptions.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Practice Your Story
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Be ready to explain your projects clearly and confidently
                      in interviews.
                    </p>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Conclusion
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Building a portfolio that gets you hired requires more than
                  just technical skills. It requires real-world experience,
                  clear documentation, and the ability to communicate your value
                  to potential employers.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sarah's journey from teacher to Salesforce Admin shows that
                  with dedication, practical experience, and a well-crafted
                  portfolio, career changers can successfully transition into
                  tech roles. Start building your portfolio today, even if
                  you're still learning. Every project, no matter how small, is
                  a step toward your next career opportunity.
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
            Build Your Own Success Story
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Join our Salesforce Admin program and get the hands-on experience
            you need to build a portfolio that gets you hired.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/programs/salesforce-adm201">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
              >
                Start Building Your Portfolio
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 border-2 bg-transparent"
              >
                Get Career Guidance
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
