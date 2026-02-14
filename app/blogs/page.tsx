import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Blog - Salesforce & Tech Career Insights",
  description:
    "Stay up-to-date with the latest Salesforce trends, developer career advice, and tech education insights from DeKode Camp's expert instructors.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "DeKode Camp Blog - Salesforce & Tech Career Insights",
    description:
      "Stay up-to-date with the latest Salesforce trends, developer career advice, and tech education insights.",
    url: "https://www.dekodecamp.com/blogs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeKode Camp Blog - Salesforce & Tech Career Insights",
    description:
      "Stay up-to-date with the latest Salesforce trends, developer career advice, and tech education insights.",
  },
  keywords: [
    "Salesforce blog",
    "tech career advice",
    "developer trends",
    "Salesforce admin tips",
    "LWC tutorials",
    "coding bootcamp blog",
  ],
};
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
            {/* 2nd New Blog Post - AI Agents */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow bg-card">
              <div className="h-48 relative">
                   <Image 
                     src="/images/blogs/ai-agents-salesforce.png" 
                     alt="AI Agents in Salesforce" 
                     fill
                     className="object-cover"
                   />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    Feb 2, 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />5 min read
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  The Rise of AI Agents in the Salesforce Ecosystem
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Move over, Chatbots. Autonomous AI Agents are here to revolutionize
                  CRM workflows. Here is what every developer needs to know.
                </p>
                <Link href="/blogs/ai-agents-salesforce-ecosystem">
                  <Button variant="link" className="p-0 h-auto text-[#760da3]">
                    Read More <ArrowRight className="ml-1" size={16} />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 3rd New Blog Post - LWC */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow bg-card">
               <div className="h-48 relative">
                   <Image 
                     src="/images/blogs/mastering-lwc.png" 
                     alt="Mastering LWC" 
                     fill
                     className="object-cover"
                   />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    Jan 28, 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />7 min read
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Mastering Lightning Web Components: Your Ticket to High-Impact Roles
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Why LWC skills are the single biggest differentiator for Salesforce Developers
                  in 2026 and how to bridge the gap from Admin to Dev.
                </p>
                <Link href="/blogs/mastering-lwc-enterprise-dev">
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
