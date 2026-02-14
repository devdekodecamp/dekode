import type { Metadata } from "next";
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
  Bot,
  BrainCircuit,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Agents in the Salesforce Ecosystem",
  description:
    "Discover how AI agents like Einstein Copilot and Agentforce are transforming the Salesforce ecosystem. Learn what this means for admins and developers.",
  alternates: { canonical: "/blogs/ai-agents-salesforce-ecosystem" },
  openGraph: {
    title: "AI Agents in the Salesforce Ecosystem",
    description: "Discover how AI agents are transforming the Salesforce ecosystem and what it means for your career.",
    url: "https://www.dekodecamp.com/blogs/ai-agents-salesforce-ecosystem",
    type: "article",
  },
  keywords: ["AI agents Salesforce", "Einstein Copilot", "Agentforce", "Salesforce AI", "Salesforce automation"],
};

export default function AiAgentsSalesforcePage() {
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
                February 2, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />5 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              The Rise of AI Agents in the Salesforce Ecosystem
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Move over, Chatbots. Autonomous AI Agents are here to revolutionize
              CRM workflows. Here is what every developer needs to know.
            </p>

            <div className="rounded-xl overflow-hidden shadow-2xl mb-12 aspect-video relative">
               <Image 
                 src="/images/blogs/ai-agents-salesforce.png" 
                 alt="AI Agents in Salesforce" 
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
                    Beyond Simple Automation
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  For years, we've relied on Flow and Apex to handle if-this-then-that logic. 
                  But 2026 introduces a new paradigm: <strong>Agency</strong>. 
                  Unlike traditional automation, AI Agents can reason, plan, and execute multi-step tasks involved in complex customer service or sales scenarios without explicit hard-coding for every edge case.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 bg-card border-none shadow-md text-center">
                    <Bot className="text-[#008cff] mb-4 mx-auto" size={32} />
                    <h3 className="text-lg font-semibold mb-2">Autonomous</h3>
                    <p className="text-sm text-muted-foreground">Self-initiating actions based on goals, not just triggers.</p>
                </Card>
                <Card className="p-6 bg-card border-none shadow-md text-center">
                    <BrainCircuit className="text-[#760da3] mb-4 mx-auto" size={32} />
                    <h3 className="text-lg font-semibold mb-2">Reasoning</h3>
                    <p className="text-sm text-muted-foreground">Can analyze unstructured data (emails, calls) to make decisions.</p>
                </Card>
                 <Card className="p-6 bg-card border-none shadow-md text-center">
                    <Workflow className="text-[#e01414] mb-4 mx-auto" size={32} />
                    <h3 className="text-lg font-semibold mb-2">Adaptive</h3>
                    <p className="text-sm text-muted-foreground">Learns from feedback and improves execution paths over time.</p>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  The Developer's Role in an AI World
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Does this mean the end of developers? Far from it. Building reliable AI agents requires a new set of skills:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Prompt Engineering for CRM:</strong> Crafting the right constraints for Agentforce.</li>
                    <li><strong>Guardrails & Security:</strong> Ensuring agents don't hallucinate or leak sensitive data.</li>
                    <li><strong>Tool Creation:</strong> Building the Apex actions and Flow templates that agents "call" to perform work.</li>
                </ul>
              </div>

               <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Preparing for the Shift
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Start by mastering Flow Builder and Apex, as these remain the foundational "limbs" that the AI "brain" uses to interact with your data. Then, dive into Einstein Copilot Studio to understand how to orchestrate these tools.
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
            Future-Proof Your Skills
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Learn how to build the tools that power the AI agents of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/programs/salesforce-developer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity text-lg px-8 h-14"
              >
                Salesforce Dev Program
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
