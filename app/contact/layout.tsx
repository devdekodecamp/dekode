import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Have questions about DeKode Camp's Salesforce or full-stack developer programs? Contact us via email, phone, or our contact form. We'd love to hear from you.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact DeKode Camp",
    description:
      "Have questions about our tech education programs? Get in touch with DeKode Camp today.",
    url: "https://www.dekodecamp.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact DeKode Camp",
    description:
      "Have questions about our tech education programs? Get in touch with DeKode Camp today.",
  },
  keywords: [
    "contact DeKode Camp",
    "Salesforce training inquiry",
    "coding bootcamp contact",
    "tech education support",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
