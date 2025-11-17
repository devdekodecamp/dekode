"use client";

import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Briefcase,
  Target,
  GraduationCap,
  Rocket,
  FileText,
  Calendar,
  MessageCircle,
  TrendingUp,
  Globe,
  Monitor,
  X,
  ArrowUpRight,
} from "lucide-react";

const ZOHO_FORM_URL =
  "https://forms.zohopublic.com/dekodecamp1/form/SalesforceBootcampApplicationForm/formperma/QCVClT5QfZpxY85MSU0vRq7KYYrjY30Zc_sciJk-iTE";

export default function SalesforceBootcampPage() {
  return (
    <div className="min-h-screen">
      {/* Header - Logo Only */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="DeKode Camp"
                width={200}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Image Only */}
      <section className="py-12 px-4 sm:px-16 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/sign.png"
              alt="Salesforce Admin Bootcamp - Students learning"
              width={1920}
              height={1080}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Section 1 - Headline, Sub-headline, and CTA */}
      <section className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Launch Your Career in Tech: Apply for the{" "}
                <span className="gradient-text">Salesforce Admin Bootcamp</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                A beginner-friendly, high-impact program for students,
                career-shifters, freelancers and non-IT professionals. Next
                batch starts January 2026.
              </p>
            </div>
            <div className="pt-4">
              <a href={ZOHO_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-br from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
                >
                  Apply Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Why Choose a Salesforce Career? */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-balance">
              Why Choose a Salesforce Career?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* High Demand */}
              <Card className="p-8 text-center space-y-4 bg-card hover:shadow-lg transition-shadow">
                <div className="flex justify-center">
                  <div className="relative">
                    <Users className="text-[#e01414]" size={48} />
                    <TrendingUp
                      className="absolute -top-2 -right-2 text-[#e01414] bg-white rounded-full p-1"
                      size={24}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  High Demand
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Over 9 million jobs expected in the Salesforce ecosystem by
                  2026
                </p>
              </Card>

              {/* Global Reach */}
              <Card className="p-8 text-center space-y-4 bg-card hover:shadow-lg transition-shadow">
                <div className="flex justify-center">
                  <Globe className="text-[#008cff]" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Global Reach
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Companies worldwide rely on Salesforce to manage customers,
                  data and growth
                </p>
              </Card>

              {/* No Coding Needed */}
              <Card className="p-8 text-center space-y-4 bg-card hover:shadow-lg transition-shadow">
                <div className="flex justify-center">
                  <div className="relative">
                    <Monitor className="text-[#760da3]" size={48} />
                    <X
                      className="absolute top-0 right-0 text-[#760da3] bg-white rounded-full p-1"
                      size={20}
                      strokeWidth={3}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  No Coding Needed
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Powerful entry point into tech that requires no prior coding
                  experience
                </p>
              </Card>

              {/* Beginner Friendly */}
              <Card className="p-8 text-center space-y-4 bg-card hover:shadow-lg transition-shadow">
                <div className="flex justify-center">
                  <div className="relative">
                    <GraduationCap className="text-[#008cff]" size={48} />
                    <ArrowUpRight
                      className="absolute -bottom-1 -right-1 text-[#008cff] bg-white rounded p-0.5"
                      size={20}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Beginner Friendly
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Step-by-step guidance to build real skills, confidence and
                  career-ready credentials
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - What You'll Get */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                What You'll Get
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="text-[#760da3] flex-shrink-0 mt-1"
                  size={24}
                />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hands-on training in Salesforce Admin fundamentals: data
                  management, automations, reports & dashboards
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="text-[#760da3] flex-shrink-0 mt-1"
                  size={24}
                />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Real-world project work and guided exercises so you can build
                  your portfolio
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="text-[#760da3] flex-shrink-0 mt-1"
                  size={24}
                />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Career coaching and support tailored for students, freelancers
                  and career-shifters
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="text-[#760da3] flex-shrink-0 mt-1"
                  size={24}
                />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  5-week structured learning designed for beginners
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="text-[#760da3] flex-shrink-0 mt-1"
                  size={24}
                />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Official certification support included
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section - Get a Preview of the Bootcamp Details */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Get a Preview of the Bootcamp Details
              </h2>
              <p className="text-xl text-muted-foreground text-balance">
                Transparent pricing, flexible schedule, and valuable inclusions
                — everything you need to start your Salesforce journey.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <Card className="p-6 bg-card space-y-3">
                <h3 className="text-2xl font-semibold text-foreground">
                  Training Fee
                </h3>
                <p className="text-3xl font-bold">
                  ₱50,000{" "}
                  <span className="text-lg font-medium text-muted-foreground">
                    Full Course Fee
                  </span>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Initial Deposit of ₱25,000 upon enrollment — remaining balance
                  must be paid in full on the 4th week of training.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Includes full training, materials, and mentoring.
                </p>
              </Card>

              <Card className="p-6 bg-card space-y-3">
                <h3 className="text-2xl font-semibold text-foreground">
                  Early-Bird Discount
                </h3>
                <p className="text-3xl font-bold">₱5,000 OFF</p>
                <p className="text-muted-foreground leading-relaxed">
                  For the first 10 enrollees! Save your slot early and start
                  your 2026 career strong.
                </p>
              </Card>

              <Card className="p-6 bg-card space-y-3">
                <h3 className="text-2xl font-semibold text-foreground">
                  Certification Cost
                </h3>
                <p className="text-3xl font-bold">$200</p>
                <p className="text-muted-foreground leading-relaxed">
                  Salesforce Certification Exam Fee —{" "}
                  <span className="font-semibold text-foreground">
                    Included!
                  </span>{" "}
                  Your official certification cost is covered in the program.
                </p>
              </Card>
            </div>

            <Card className="p-6 bg-card space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">
                Schedule
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <span className="text-foreground font-medium">
                    Program Duration:
                  </span>{" "}
                  5 weeks
                </li>
                <li>
                  <span className="text-foreground font-medium">Sessions:</span>{" "}
                  Saturdays (10AM - 3PM)
                </li>
                <li>
                  <span className="text-foreground font-medium">
                    Start Date:
                  </span>{" "}
                  January 10, 2026
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Learn at a comfortable pace — perfect for working professionals,
                students, and freelancers.
              </p>
            </Card>

            <div className="text-center space-y-4">
              <p className="text-lg text-muted-foreground">
                Seats are limited for personalized support.
              </p>
              <p className="text-lg text-muted-foreground">
                Apply now to qualify for the early-bird discount and join our
                January 2026 batch!
              </p>
              <a href={ZOHO_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-l from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
                >
                  Apply Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Is This Bootcamp Right for You? */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Is This Bootcamp Right for You?
              </h2>
              <p className="text-xl text-muted-foreground text-balance">
                You're a great fit if you are:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-3 bg-card">
                <div className="flex items-start gap-4">
                  <GraduationCap
                    className="text-[#760da3] flex-shrink-0 mt-1"
                    size={28}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Student or Recent Graduate
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Looking to enter a tech career
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-3 bg-card">
                <div className="flex items-start gap-4">
                  <Briefcase
                    className="text-[#760da3] flex-shrink-0 mt-1"
                    size={28}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Virtual Assistant or Freelancer
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Wanting to upskill and expand your opportunities
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-3 bg-card">
                <div className="flex items-start gap-4">
                  <Users
                    className="text-[#760da3] flex-shrink-0 mt-1"
                    size={28}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Professional Without IT Background
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ready to shift into tech
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-3 bg-card">
                <div className="flex items-start gap-4">
                  <Rocket
                    className="text-[#760da3] flex-shrink-0 mt-1"
                    size={28}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Motivated & Committed
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ready to invest in your growth
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center pt-8">
              <p className="text-lg text-muted-foreground mb-6">
                Ready to apply? Click "Apply Now" to complete the application
                form.
              </p>
              <a href={ZOHO_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-t from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
                >
                  Apply Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - How to Apply & What Happens Next */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                How to Apply & What Happens Next
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Click "Apply Now"
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Click the "Apply Now" button and fill out the application
                    form.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-b from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    We Review Your Application
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We'll review your responses to understand your goals and
                    readiness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-tr from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Interview/Assessment
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Shortlist selected applicants for a quick
                    interview/assessment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-bl from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Enrollment & Onboarding
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Accepted students will be enrolled for the January 2026
                    batch and receive onboarding details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Frequently Asked Questions */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-card px-6 py-2 rounded-lg"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                Do I need any coding or Salesforce experience?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                No. This bootcamp is designed for complete beginners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-card px-6 py-2 rounded-lg"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                What is the commitment required?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                You'll need to commit to full program attendance and complete
                assignments on time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-card px-6 py-2 rounded-lg"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                Is this suitable for people outside Metro Manila (or
                international)?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes. The training is online so learners from anywhere can join.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-card px-6 py-2 rounded-lg"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                What careers can I pursue afterwards?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                You could qualify for roles such as Salesforce Admin, Technical
                Support, Junior Consultant, or enter freelancing with Salesforce
                skills.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Section 7 - Ready to Step into Tech? */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Ready to Step into Tech?
          </h2>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed">
            Applications are open now for the January 2026 bootcamp. We accept a
            limited number of learners to ensure personalized support. Don't
            miss your chance.
          </p>
          <div className="pt-4">
            <a href={ZOHO_FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-tl from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
              >
                Apply Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
