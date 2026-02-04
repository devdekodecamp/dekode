import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salesforce Admin Bootcamp - Launch Your Career in Tech | DeKode Camp",
  description:
    "Join our beginner-friendly Salesforce Admin Bootcamp starting January 2026. Perfect for students, career-shifters, freelancers, and non-IT professionals. 5-week structured program with hands-on training, real-world projects, and certification support included.",
  alternates: {
    canonical: "/salesforce-bootcamp",
  },
  openGraph: {
    title:
      "Salesforce Admin Bootcamp - Launch Your Career in Tech | DeKode Camp",
    description:
      "Join our beginner-friendly Salesforce Admin Bootcamp starting January 2026. Perfect for students, career-shifters, freelancers, and non-IT professionals. 5-week structured program with hands-on training, real-world projects, and certification support included.",
    url: "https://www.dekodecamp.com/salesforce-bootcamp",
    siteName: "DeKode Camp",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/sign.png",
        width: 1920,
        height: 1080,
        alt: "Salesforce Admin Bootcamp - Students learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Salesforce Admin Bootcamp - Launch Your Career in Tech | DeKode Camp",
    description:
      "Join our beginner-friendly Salesforce Admin Bootcamp starting January 2026. Perfect for students, career-shifters, freelancers, and non-IT professionals.",
    images: ["/sign.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "Salesforce Admin Bootcamp",
    "Salesforce training",
    "Salesforce certification",
    "Salesforce Admin course",
    "beginner Salesforce training",
    "Salesforce career",
    "tech bootcamp",
    "Salesforce Admin January 2026",
    "online Salesforce training",
    "Salesforce bootcamp manila philippines",
    "Salesforce bootcamp philippines",
    "Salesforce training near me",
    "Salesforce bootcamp near me",
    "Salesforce admin training philippines",
    "Salesforce for beginners",
  ],
};

export default function SalesforceBootcampLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
