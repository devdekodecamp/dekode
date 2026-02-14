import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "DeKode Camp - Decode Tech, Unlock Your Future",
  description:
    "Transform your career with industry-leading tech education. Learn Salesforce Admin, Salesforce Development, and Full Stack Development from experts. Build real projects and launch your dream career in technology.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DeKode Camp - Decode Tech, Unlock Your Future",
    description:
      "Transform your career with industry-leading tech education programs. Salesforce Admin, Salesforce Developer, and Full Stack Developer training.",
    url: "https://www.dekodecamp.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeKode Camp - Decode Tech, Unlock Your Future",
    description:
      "Transform your career with industry-leading tech education programs.",
  },
  keywords: [
    "DeKode Camp",
    "tech education",
    "Salesforce training",
    "Salesforce Admin",
    "Salesforce Developer",
    "full stack developer bootcamp",
    "coding bootcamp",
    "career transformation",
    "online tech training",
    "Salesforce bootcamp Philippines",
  ],
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
