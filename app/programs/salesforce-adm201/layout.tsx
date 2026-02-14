import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title:
    "Salesforce Administrator Training & ADM-201 Certification | DeKode Camp",
  description:
    "Master Salesforce Administration in 5 weeks. Hands-on ADM-201 certification prep covering data management, automation, reports & dashboards. Enroll now.",
  alternates: {
    canonical: "/programs/salesforce-adm201",
  },
  openGraph: {
    title:
      "Salesforce Administrator Training & ADM-201 Certification | DeKode Camp",
    description:
      "Master Salesforce Administration in 5 weeks with hands-on ADM-201 certification prep.",
    url: "https://www.dekodecamp.com/programs/salesforce-adm201",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Salesforce Administrator Training & ADM-201 Certification | DeKode Camp",
    description:
      "Master Salesforce Administration in 5 weeks with hands-on ADM-201 certification prep.",
  },
  keywords: [
    "Salesforce ADM-201",
    "Salesforce Admin certification",
    "Salesforce Administrator training",
    "Salesforce Admin training",
    "Salesforce Administrator bootcamp",
    "Salesforce training",
    "Salesforce certification prep",
  ],
};

export default function SalesforceAdm201Layout({
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
            name: "Salesforce Administrator Certification (ADM-201) Program",
            description:
              "5-week hands-on Salesforce Admin certification preparation program. Master data management, security, automation, reports, and Sales & Service Cloud.",
            provider: {
              "@type": "Organization",
              name: "DeKode Camp",
              url: "https://www.dekodecamp.com",
            },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "Online",
              duration: "P5W",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
