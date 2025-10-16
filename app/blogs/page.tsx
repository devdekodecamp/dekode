import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
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
                  10 Essential Skills Every Developer Needs in 2025
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Discover the most in-demand technical and soft skills that
                  will set you apart in today's competitive job market.
                </p>
                <Button variant="link" className="p-0 h-auto text-[#760da3]">
                  Read More <ArrowRight className="ml-1" size={16} />
                </Button>
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
                  How to Build a Portfolio That Gets You Hired
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn what hiring managers look for in developer portfolios
                  and how to showcase your projects effectively.
                </p>
                <Button variant="link" className="p-0 h-auto text-[#760da3]">
                  Read More <ArrowRight className="ml-1" size={16} />
                </Button>
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
                  Career Change Success: From Teacher to Developer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  An inspiring story from one of our graduates who successfully
                  transitioned into tech from education.
                </p>
                <Button variant="link" className="p-0 h-auto text-[#760da3]">
                  Read More <ArrowRight className="ml-1" size={16} />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Events & Webinars */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Upcoming Events & Webinars
            </h2>
            <p className="text-xl text-muted-foreground">
              Join our free events to learn more about tech careers and our
              programs
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-8 hover:shadow-xl transition-shadow bg-card">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-xl bg-muted flex flex-col items-center justify-center text-foreground">
                    <div className="text-3xl font-bold">25</div>
                    <div className="text-sm">JAN</div>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Video size={16} />
                    <span>Online Webinar</span>
                    <span>•</span>
                    <span>6:00 PM EST</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Breaking Into Tech: A Beginner's Guide
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Join us for a free webinar where we'll discuss the best
                    paths to start your tech career, what skills you need, and
                    how to get your first job in the industry.
                  </p>
                  <Button>Register Now</Button>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow bg-card">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-xl bg-muted flex flex-col items-center justify-center text-foreground">
                    <div className="text-3xl font-bold">02</div>
                    <div className="text-sm">FEB</div>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Video size={16} />
                    <span>Online Webinar</span>
                    <span>•</span>
                    <span>7:00 PM EST</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Salesforce Career Opportunities in 2025
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Discover the growing demand for Salesforce professionals and
                    learn how our ADM201 certification program can help you land
                    a high-paying role.
                  </p>
                  <Button>Register Now</Button>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow bg-card">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-xl bg-muted flex flex-col items-center justify-center text-foreground">
                    <div className="text-3xl font-bold">15</div>
                    <div className="text-sm">FEB</div>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Video size={16} />
                    <span>Online Workshop</span>
                    <span>•</span>
                    <span>6:00 PM EST</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Build Your First Web App: Live Coding Session
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Join our instructors for a hands-on coding workshop where
                    you'll build a complete web application from scratch using
                    modern technologies.
                  </p>
                  <Button>Register Now</Button>
                </div>
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
