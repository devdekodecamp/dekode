import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Code2,
  Briefcase,
} from "lucide-react";

export default function DeveloperTrends2026Page() {
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
                February 4, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />6 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              2026 Developer Trends: Why Salesforce & Full Stack Skills Pay More
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The gap between enterprise platforms and custom code is closing.
              Discover why the "Hybrid Developer" is becoming the most sought-after
              role in the tech industry.
            </p>

            <div className="rounded-xl overflow-hidden shadow-2xl mb-12 aspect-video relative">
               <Image 
                 src="/images/blogs/2026-trends.png" 
                 alt="Future of Development 2026" 
                 fill
                 className="object-cover"
                 priority
               />
            </div>
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
                  The Rise of the Hybrid Developer
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  In 2026, the distinction between "Platform Specialist" and "Code
                  Generalist" is fading. Companies no longer want just a
                  Salesforce Admin or just a React Developer. they want someone
                  who can build a custom Next.js front-end that talks seamlessly
                  to a Salesforce back-end. This is the era of the **Hybrid
                  Developer**.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why This Combination Works
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="p-6 bg-card border-none shadow-md">
                        <TrendingUp className="text-[#e01414] mb-4" size={32} />
                        <h3 className="text-xl font-semibold mb-2">Speed to Market</h3>
                        <p className="text-muted-foreground">Salesforce handles authentication, database, and security out of the box, allowing Full Stack devs to focus on unique UX.</p>
                    </Card>
                    <Card className="p-6 bg-card border-none shadow-md">
                        <Code2 className="text-[#008cff] mb-4" size={32} />
                        <h3 className="text-xl font-semibold mb-2">Customizability</h3>
                        <p className="text-muted-foreground">LWC (Lightning Web Components) and standard web components share the same DNA, making skill transfer seamless.</p>
                    </Card>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 bg-card">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Top 3 Skills Driving High Salaries
                    </h3>
                    <ul className="space-y-4 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <CheckCircle2
                          size={20}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                        <div>
                            <strong className="text-foreground block">Lightning Web Components (LWC)</strong>
                            <span>The bridge between standard web standards and the Salesforce ecosystem. Mastering this means you can work in both worlds.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2
                          size={20}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                         <div>
                            <strong className="text-foreground block">Salesforce API Integration</strong>
                            <span>Building headless apps where Next.js or React serves as the front-end for Salesforce data is a massive trend in 2026.</span>
                        </div>
                      </li>
                       <li className="flex items-start gap-3">
                        <CheckCircle2
                          size={20}
                          className="text-[#760da3] flex-shrink-0 mt-1"
                        />
                         <div>
                            <strong className="text-foreground block">DevOps for Salesforce</strong>
                            <span>Understanding CI/CD pipelines (DX, GitHub Actions) for enterprise deployments is now a baseline requirement.</span>
                        </div>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  The "DeKode" Advantage
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  This convergence is exactly why we designed our curriculum to cover both.
                  A Salesforce Admin certification gets your foot in the door. Adding
                  Full Stack skills kicks that door wide open to senior architect roles.
                </p>
                 <Card className="p-6 bg-gradient-to-br from-[#760da3]/10 to-[#008cff]/10 border-none">
                    <div className="flex items-start gap-4">
                        <Briefcase className="text-[#760da3] mt-1" size={24} />
                        <div>
                            <h4 className="font-semibold text-foreground text-lg">Career Impact</h4>
                            <p className="text-muted-foreground mt-2">
                                Data from 2025 shows that developers with dual proficiency (Salesforce + JS) earn on average **25% more** than their single-specialty counterparts.
                            </p>
                        </div>
                    </div>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Conclusion
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  If you are looking to future-proof your career, don't choose between being an Admin or a Developer. Be both. 
                  The tools have never been more accessible, and the market has never been more hungry for this specific skillset.
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
            Start Your Hybrid Journey
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Learn the skills that will define the next decade of tech.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/programs/full-stack-developer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
              >
                View Full Stack Program
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
