import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Video } from "lucide-react";

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-balance">
            Blog & <span className="gradient-text">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Stay updated with the latest tech insights, learning resources, and
            upcoming events
          </p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground">
              Insights and tips from our instructors and industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* New Blog Post */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow bg-card">
              <div className="h-48 relative">
                  <Image 
                    src="/images/blogs/2026-trends.png" 
                    alt="2026 Developer Trends" 
                    fill
                    className="object-cover"
                  />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    Feb 4, 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />6 min read
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  2026 Developer Trends: Why Salesforce & Full Stack Skills Pay More
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The gap between enterprise platforms and custom code is closing.
                  Discover why the "Hybrid Developer" is becoming the most sought-after...
                </p>
                <Link href="/blogs/2026-developer-trends-salesforce-fullstack">
                  <Button variant="link" className="p-0 h-auto text-[#760da3]">
                    Read More <ArrowRight className="ml-1" size={16} />
                  </Button>
                </Link>
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow bg-card">
              <div className="h-48 bg-gradient-to-br from-[#e01414]/20 via-[#760da3]/20 to-[#008cff]/20" />
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    Jan 15, 2025
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />5 min read
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  10 Essential Skills Every Salesforce Admin Needs in 2025
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Discover the most in-demand technical and soft skills that
                  will set you apart in today's competitive Salesforce job
                  market.
                </p>
                <Link href="/blogs/essential-salesforce-admin-skills-2025">
                  <Button variant="link" className="p-0 h-auto text-[#760da3]">
                    Read More <ArrowRight className="ml-1" size={16} />
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow bg-card">
              <div className="h-48 bg-gradient-to-br from-[#008cff]/20 via-[#760da3]/20 to-[#e01414]/20" />
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    Jan 12, 2025
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />7 min read
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  The Salesforce Admin Journey: What to Expect
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn what hiring managers look for in Salesforce Admin
                  portfolios and how to showcase your projects effectively.
                </p>
                <Link href="/blogs/salesforce-admin-journey-what-to-expect">
                  <Button variant="link" className="p-0 h-auto text-[#760da3]">
                    Read More <ArrowRight className="ml-1" size={16} />
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow bg-card">
              <div className="h-48 bg-gradient-to-br from-[#760da3]/20 via-[#e01414]/20 to-[#008cff]/20" />
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    Jan 8, 2025
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />6 min read
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  How to Build a Portfolio That Gets You Hired
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  An inspiring story from one of our graduates who successfully
                  transitioned into Salesforce Admin from education.
                </p>
                <Link href="/blogs/build-portfolio-that-gets-you-hired">
                  <Button variant="link" className="p-0 h-auto text-[#760da3]">
                    Read More <ArrowRight className="ml-1" size={16} />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Want to Contribute?
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            We're always looking for guest writers and speakers. Share your tech
            journey with our community.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
            >
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
