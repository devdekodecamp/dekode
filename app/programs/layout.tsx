import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Tech Education Programs - Salesforce & Full Stack",
  description:
    "Explore DeKode Camp's comprehensive tech programs: Salesforce Admin, Salesforce Developer, Full Stack Developer, and Career Pathways. From beginner to job-ready.",
  alternates: {
    canonical: "/programs",
  },
  openGraph: {
    title: "DeKode Camp Programs - Salesforce & Full Stack Training",
    description:
      "Explore our comprehensive tech education programs designed to take you from beginner to job-ready professional.",
    url: "https://www.dekodecamp.com/programs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeKode Camp Programs - Salesforce & Full Stack Training",
    description:
      "Explore our comprehensive tech education programs designed to take you from beginner to job-ready professional.",
  },
  keywords: [
    "Salesforce training programs",
    "full stack developer bootcamp",
    "tech education",
    "Salesforce Admin course",
    "coding bootcamp programs",
    "career pathways",
  ],
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
