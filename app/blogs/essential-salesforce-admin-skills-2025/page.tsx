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
} from "lucide-react";

export default function EssentialSalesforceAdminSkills2025Page() {
  return (
    <div className="min-h-screen">
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
                January 15, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />5 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              10 Essential Skills Every Salesforce Admin Needs in 2025
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the most in-demand technical and soft skills that will
              set you apart in today's competitive Salesforce job market.
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
                  Introduction
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  As we navigate through 2025, the Salesforce ecosystem
                  continues to evolve rapidly. For aspiring and current
                  Salesforce Administrators, staying ahead means mastering both
                  foundational skills and emerging technologies. This
                  comprehensive guide outlines the 10 essential skills that will
                  make you indispensable in the Salesforce job market.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Technical Skills
                </h2>

                <div className="space-y-6">
                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      1. Advanced Flow Builder Mastery
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Flow Builder has become the cornerstone of Salesforce
                      automation. Modern admins must be proficient in:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>
                          Record-Triggered Flows for complex business logic
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Screen Flows for guided user experiences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Flow formulas and decision elements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Error handling and debugging techniques</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      2. Data Management & Analytics
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Data is the lifeblood of any Salesforce org. Essential
                      skills include:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>
                          Advanced reporting with complex filters and formulas
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Dashboard creation and management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>
                          Data import/export using Data Loader and Import Wizard
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Data quality management and deduplication</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      3. Security & Access Management
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Security expertise is crucial for protecting sensitive
                      business data:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Profile and Permission Set configuration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Role hierarchy and sharing rules</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Field-level security and validation rules</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Org-wide defaults and data visibility</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      4. Customization & Configuration
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The ability to customize Salesforce to meet business
                      needs:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Custom objects, fields, and relationships</span>
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
                        <span>Custom tabs and apps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Lightning App Builder basics</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      5. Integration Fundamentals
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Understanding how Salesforce connects with other systems:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>REST and SOAP API basics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Webhook configuration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>Connected Apps and OAuth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <span>AppExchange package management</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Soft Skills & Business Acumen
                </h2>

                <div className="space-y-6">
                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      6. Business Process Analysis
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Understanding business requirements and translating them
                      into Salesforce solutions. This includes gathering
                      requirements, documenting processes, and recommending best
                      practices for implementation.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      7. Communication & Training
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Effectively communicating with stakeholders, conducting
                      user training sessions, and creating documentation. Strong
                      written and verbal communication skills are essential for
                      success.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      8. Change Management
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Managing organizational change when implementing new
                      Salesforce features or processes. This includes user
                      adoption strategies, resistance management, and ensuring
                      smooth transitions.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      9. Problem-Solving & Troubleshooting
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The ability to diagnose issues, debug problems, and find
                      creative solutions. This includes understanding Salesforce
                      limits, performance optimization, and systematic
                      troubleshooting approaches.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      10. Continuous Learning & Adaptability
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Staying current with Salesforce releases, new features,
                      and industry trends. The Salesforce platform evolves
                      rapidly, and successful admins must be committed to
                      ongoing education and skill development.
                    </p>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Conclusion
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Mastering these 10 essential skills will position you as a
                  valuable Salesforce Administrator in 2025. Remember that while
                  technical skills are important, soft skills like communication
                  and business acumen often differentiate good admins from great
                  ones. Focus on building a well-rounded skill set that combines
                  technical expertise with strong business understanding.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Start by identifying which skills you need to develop most
                  urgently, create a learning plan, and practice regularly. The
                  Salesforce ecosystem offers numerous resources, including
                  Trailhead, community forums, and certification programs to
                  help you on your journey.
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
            Ready to Master These Skills?
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Join our Salesforce Admin program and learn these essential skills
            with hands-on projects and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/programs/salesforce-adm201">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
              >
                Start Learning
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 border-2 bg-transparent"
              >
                Get More Info
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
