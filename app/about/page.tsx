import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Eye, Lightbulb, ArrowRight, Sprout, Users, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-balance">
            About <span className="gradient-text">DeKode Camp</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Empowering the next generation of tech professionals through innovative education
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              DeKode Camp was founded with a simple yet powerful mission: to make quality tech education accessible to
              everyone, regardless of their background or location. We believe that technology is the great equalizer,
              and with the right training and support, anyone can build a successful career in tech.
            </p>
            <p>
              What started as a small coding bootcamp has grown into a comprehensive learning platform serving thousands
              of students worldwide. Our programs have helped career changers, recent graduates, and working
              professionals alike achieve their goals and land roles at leading tech companies.
            </p>
            <p>
              Today, we continue to innovate and expand our offerings, always staying ahead of industry trends to ensure
              our students learn the most relevant and in-demand skills. Our commitment to excellence and student
              success remains at the heart of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Mission, Vision & Values</h2>
            <p className="text-xl text-[#760da3] font-medium">What Drives Us</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mission Card */}
            <Card className="p-10 space-y-6 bg-card border-2">
              <h3 className="text-3xl font-bold text-foreground">Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To make learning tech simple, inclusive, and enjoyable—empowering anyone to start, shift, or grow their
                career in the digital world.
              </p>
            </Card>

            {/* Vision Card */}
            <Card className="p-10 space-y-6 bg-gradient-brand border-0">
              <h3 className="text-3xl font-bold text-white">Vision</h3>
              <p className="text-lg text-white leading-relaxed">
                A world where everyone, regardless of background, can understand technology and use it to build a
                brighter, more fulfilling future.
              </p>
            </Card>

            {/* What Drives Us - Values */}
            <Card className="p-10 space-y-6 bg-card">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Sprout className="text-[#760da3]" size={24} />
                  <span className="text-lg font-semibold text-foreground">GROWTH</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-[#760da3]" size={24} />
                  <span className="text-lg font-semibold text-foreground">INCLUSIVITY</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lightbulb className="text-[#760da3]" size={24} />
                  <span className="text-lg font-semibold text-foreground">INNOVATION</span>
                </div>
                <div className="flex items-center gap-3">
                  <Eye className="text-[#760da3]" size={24} />
                  <span className="text-lg font-semibold text-foreground">CLARITY</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="text-[#760da3]" size={24} />
                  <span className="text-lg font-semibold text-foreground">EMPOWERMENT</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* DeKode Approach */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">The DeKode Approach</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Our unique methodology combines theory with practice for optimal learning outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 space-y-4 bg-card">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-[#760da3] font-bold text-xl">
                1
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Learn</h3>
              <p className="text-muted-foreground leading-relaxed">
                Master fundamental concepts through engaging video lessons, interactive tutorials, and comprehensive
                documentation.
              </p>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-[#760da3] font-bold text-xl">
                2
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Build</h3>
              <p className="text-muted-foreground leading-relaxed">
                Apply your knowledge by building real-world projects that solve actual problems and demonstrate your
                skills.
              </p>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-[#760da3] font-bold text-xl">
                3
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Launch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get career support, interview preparation, and job placement assistance to launch your tech career
                successfully.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/programs">
              <Button
                size="lg"
                className="bg-gradient-brand text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
              >
                Explore Our Programs
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Lightbulb className="mx-auto text-[#760da3]" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Have Questions?</h2>
          <p className="text-xl text-muted-foreground text-balance">
            We're here to help you make the right decision for your career
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-brand text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
            >
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
