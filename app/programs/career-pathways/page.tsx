import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  Code,
  Laptop,
  Server,
  ArrowRight,
  CheckCircle2,
  Users,
  Cloud,
  BarChart3,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Career Pathways - Structured Tech Learning Tracks",
  description:
    "Explore DeKode Camp's Career Pathways: structured learning tracks for Salesforce Admin, Salesforce Developer, Full Stack, Frontend, and Backend careers. From beginner to job-ready.",
  alternates: { canonical: "/programs/career-pathways" },
  openGraph: {
    title: "Career Pathways | DeKode Camp",
    description: "Structured learning tracks designed to take you from beginner to job-ready in tech.",
    url: "https://www.dekodecamp.com/programs/career-pathways",
    type: "website",
  },
  keywords: ["career pathways", "tech career tracks", "Salesforce careers", "developer career roadmap", "coding bootcamp"],
};

export default function CareerPathwaysPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              Career <span className="gradient-text">Pathways</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              Structured learning tracks designed to take you from beginner to
              job-ready professional in your chosen tech career
            </p>
          </div>
        </div>
      </section>

      {/* Careers You Can Pursue */}
      <section className="py-16 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Careers You Can Pursue
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Choose from multiple high-demand career tracks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 bg-card">
              <Cloud className="text-[#760da3]" size={40} />
              <h3 className="text-2xl font-semibold text-foreground">
                Salesforce Admin
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Master Salesforce administration and get certified to manage and
                configure Salesforce orgs.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  User Management & Security
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Data Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Automation & Workflows
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <BarChart3 className="text-[#760da3]" size={40} />
              <h3 className="text-2xl font-semibold text-foreground">
                Salesforce Analyst
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn to analyze business requirements and design Salesforce
                solutions for organizations.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Business Analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Solution Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Requirements Gathering
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <Database className="text-[#760da3]" size={40} />
              <h3 className="text-2xl font-semibold text-foreground">
                Salesforce Development
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Build custom applications and integrations using Apex, Lightning
                Web Components, and more.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Apex Programming
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Lightning Web Components
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  API Integration
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <Code className="text-[#760da3]" size={40} />
              <h3 className="text-2xl font-semibold text-foreground">
                Full-Stack Development
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Master both frontend and backend development to build complete
                web applications from scratch.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  React, Node.js, Databases
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  API Development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Deployment & DevOps
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <Laptop className="text-[#760da3]" size={40} />
              <h3 className="text-2xl font-semibold text-foreground">
                Frontend Development
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Specialize in creating beautiful, responsive user interfaces and
                exceptional user experiences.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  HTML, CSS, JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  React, Vue, or Angular
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  UI/UX Best Practices
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <Server className="text-[#760da3]" size={40} />
              <h3 className="text-2xl font-semibold text-foreground">
                Backend Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Focus on server-side logic, databases, and APIs that power
                modern applications.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Node.js, Python, or Java
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  Database Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#760da3]" />
                  API Architecture
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Skill Progression Roadmap */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Skill Progression Roadmap
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Choose your career path and follow a structured learning journey
            </p>
          </div>

          <Tabs defaultValue="salesforce-admin" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 h-auto">
              <TabsTrigger
                value="salesforce-admin"
                className="text-xs sm:text-sm md:text-base py-3 px-2"
              >
                <div className="flex items-center gap-2">
                  <Cloud size={16} className="sm:hidden" />
                  <span className="text-center">Salesforce Admin</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="salesforce-developer"
                className="text-xs sm:text-sm md:text-base py-3 px-2"
              >
                <div className="flex items-center gap-2">
                  <Database size={16} className="sm:hidden" />
                  <span className="text-center">Salesforce Developer</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="fullstack-developer"
                className="text-xs sm:text-sm md:text-base py-3 px-2"
              >
                <div className="flex items-center gap-2">
                  <Code size={16} className="sm:hidden" />
                  <span className="text-center">Full Stack Developer</span>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="salesforce-admin" className="space-y-6">
              <div className="text-center mb-8">
                <Cloud className="mx-auto text-[#760da3] mb-4" size={40} />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Salesforce Administrator Roadmap
                </h3>
                <p className="text-muted-foreground">
                  Your path to becoming a certified Salesforce Admin, focused on
                  configuration, automation, and data.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 sm:p-8 bg-card">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      1
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        Platform Foundations
                      </h3>
                      <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Understand CRM basics, the Admin role, and core
                            platform features (Sales & Service Cloud)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Master the data model: Objects, Fields, and
                            Relationships (Lookup vs. Master-Detail)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Configure user access: Profiles, Permission Sets,
                            Page Layouts, and Record Types
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 sm:p-8 bg-card">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      2
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        Automation & Analytics
                      </h3>
                      <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Build powerful process automation using Flow Builder
                            (Record-Triggered, Screen Flows)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Understand legacy automation (Workflow Rules,
                            Process Builder) for maintenance
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Create insightful Reports (Tabular, Summary, Matrix)
                            and build dynamic Dashboards
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 sm:p-8 bg-card">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      3
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        Data & Security
                      </h3>
                      <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Manage data import/export with the Data Import
                            Wizard and Data Loader
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Ensure data quality with Duplicate Management and
                            Validation Rules
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Control data access using Roles, Sharing Rules, and
                            OWDs (Org-Wide Defaults)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 sm:p-8 bg-card">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      4
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        Go-Pro: Projects & Certification
                      </h3>
                      <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Apply your skills by building a portfolio project
                            (e.g., a custom app for a mock business)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            (Optional but recommended) Study for and pass the
                            Salesforce Administrator Certification
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Prepare for interviews by practicing common
                            scenarios and using the STAR method
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="salesforce-developer" className="space-y-6">
              <div className="text-center mb-8">
                <Database className="mx-auto text-[#760da3] mb-4" size={40} />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Salesforce Development Skills Progression
                </h3>
                <p className="text-muted-foreground">
                  A 5-level roadmap to advance from an Admin foundation to a
                  platform expert.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 sm:p-8 bg-card">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      1
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        Beginner Developer (Apex Basics)
                      </h3>
                      <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Learn Apex programming: Variables, loops, classes,
                            and methods
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Write SOQL queries to fetch data and use DML to
                            manipulate records
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Build basic Triggers (Before/After) and write
                            essential Apex test classes
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 sm:p-8 bg-card">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      2
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        Intermediate Developer (UI & Async)
                      </h3>
                      <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Build custom UIs with Lightning Web Components (LWC)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Understand legacy UI for maintenance: Visualforce
                            and Aura Components
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Handle complex logic with asynchronous Apex (Future,
                            Queueable, Batch, Schedulable)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 sm:p-8 bg-card">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      3
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        Advanced Developer (Integration & DevOps)
                      </h3>
                      <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Integrate with external systems using REST/SOAP APIs
                            and callouts
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Master advanced LWC, event handling, and
                            authentication flows (OAuth)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Adopt DevOps practices: Git, SFDX, and CI/CD
                            pipelines (e.g., GitHub Actions, Gearset)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 sm:p-8 bg-card">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      5
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        Expert (Architecture & Specialization)
                      </h3>
                      <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Design scalable solutions using Apex design patterns
                            and event-driven architecture (Platform Events)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Specialize in complex areas like Salesforce CPQ,
                            B2B/B2C Commerce, or Industries (Vlocity)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="fullstack-developer" className="space-y-6">
              <div className="text-center mb-8">
                <Code className="mx-auto text-[#760da3] mb-4" size={40} />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Full Stack Developer Roadmap
                </h3>
                <p className="text-muted-foreground">
                  A technology-agnostic path taking you from frontend basics to
                  backend deployment.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 sm:p-8 bg-card">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      1
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        Frontend Foundations
                      </h3>
                      <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Master the building blocks of the web: HTML, CSS,
                            and JavaScript
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Learn version control with Git and GitHub to manage
                            your code
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 sm:p-8 bg-card">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      2
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        Frontend Frameworks
                      </h3>
                      <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Choose and master one modern JavaScript framework:
                            React, Vue, or Angular
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Learn how to manage packages using npm/yarn and
                            style with CSS frameworks (e.g., Tailwind)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 sm:p-8 bg-card">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      3
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        Backend Development
                      </h3>
                      <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Choose a backend language (e.g., Node.js, Python,
                            Java, or C#)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Learn its primary web framework (e.g., Express.js
                            for Node, Django or Flask for Python)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Understand how to build RESTful APIs for
                            communication between frontend and backend
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 sm:p-8 bg-card">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      4
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        Data & Databases
                      </h3>
                      <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Learn a SQL database (e.g., PostgreSQL or MySQL) to
                            manage relational data
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            (Optional) Explore NoSQL databases (e.g., MongoDB)
                            for unstructured data
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Understand authentication/authorization concepts
                            like JWT (JSON Web Tokens)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 sm:p-8 bg-card">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      5
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        DevOps & Deployment
                      </h3>
                      <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>Learn Linux command-line basics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Understand how to deploy your application to a cloud
                            provider (e.g., AWS, Azure, or GCP)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[#760da3] flex-shrink-0 mt-1 sm:mt-0.5"
                          />
                          <span>
                            Get familiar with CI/CD pipelines (e.g., GitHub
                            Actions) for automated testing and deployment
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How DeKode Prepares You */}
      <section className="py-24 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              How DeKode Prepares You for Real Projects
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              We don't just teach theory—we prepare you for the real world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 space-y-4 bg-card">
              <h3 className="text-2xl font-semibold text-foreground">
                Real-World Projects
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Work on projects that mirror actual industry challenges. Build
                applications that solve real problems and can be showcased in
                your portfolio.
              </p>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <h3 className="text-2xl font-semibold text-foreground">
                Code Reviews
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Receive detailed feedback on your code from experienced
                developers. Learn industry best practices and how to write
                clean, maintainable code.
              </p>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <h3 className="text-2xl font-semibold text-foreground">
                Team Collaboration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Experience working in teams using Git, Agile methodologies, and
                modern collaboration tools—just like in a real development
                environment.
              </p>
            </Card>

            <Card className="p-8 space-y-4 bg-card">
              <h3 className="text-2xl font-semibold text-foreground">
                Industry Mentorship
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Get guidance from professionals currently working in the field.
                Learn insider tips and strategies for success in your chosen
                career path.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
              >
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Opportunities */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Users className="mx-auto text-[#760da3]" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Partner Opportunities
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            We partner with leading tech companies to provide internship and job
            placement opportunities for our graduates. Our hiring partners are
            always looking for talented developers from our programs.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 h-14 border-2 bg-transparent"
            >
              Learn About Partnerships
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
