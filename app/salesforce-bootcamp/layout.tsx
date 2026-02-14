import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Salesforce Administrator Bootcamp — Get Certified in 5 Weeks | DeKode Camp",
  description:
    "Beginner-friendly Salesforce Administrator Bootcamp with certification exam included. 5-week hands-on training — perfect for career-shifters & students. Limited seats.",
  alternates: {
    canonical: "/salesforce-bootcamp",
  },
  openGraph: {
    title:
      "Salesforce Administrator Bootcamp — Get Certified in 5 Weeks | DeKode Camp",
    description:
      "Beginner-friendly Salesforce Administrator Bootcamp with certification exam included. 5-week hands-on training for career-shifters & students.",
    url: "https://www.dekodecamp.com/salesforce-bootcamp",
    siteName: "DeKode Camp",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/sign.png",
        width: 1920,
        height: 1080,
        alt: "Salesforce Administrator Bootcamp - Students learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Salesforce Administrator Bootcamp — Get Certified in 5 Weeks | DeKode Camp",
    description:
      "Beginner-friendly Salesforce Administrator Bootcamp with certification exam included. 5-week hands-on training for career-shifters & students.",
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
    "Salesforce Administrator Bootcamp",
    "salesforce administrator bootcamp",
    "Salesforce Admin Bootcamp",
    "Salesforce training",
    "Salesforce certification",
    "Salesforce Admin training",
    "beginner Salesforce training",
    "Salesforce career",
    "tech bootcamp",
    "online Salesforce training",
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Salesforce Administrator Bootcamp",
            description:
              "A beginner-friendly, 5-week hands-on Salesforce Administrator training program with certification exam included. Perfect for students, career-shifters, freelancers, and non-IT professionals.",
            provider: {
              "@type": "Organization",
              name: "DeKode Camp",
              url: "https://www.dekodecamp.com",
            },
            offers: {
              "@type": "Offer",
              price: "50000",
              priceCurrency: "PHP",
              availability: "https://schema.org/InStock",
            },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "Online",
              duration: "P5W",
              startDate: "2026-01-10",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
