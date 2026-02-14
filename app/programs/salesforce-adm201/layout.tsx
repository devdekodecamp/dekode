import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Salesforce Admin Certification (ADM-201) Program",
  description:
    "Get certified as a Salesforce Administrator with DeKode Camp's 5-week hands-on training program. Master data management, security, automation, reports, and Sales & Service Cloud.",
  alternates: {
    canonical: "/programs/salesforce-adm201",
  },
  openGraph: {
    title: "Salesforce Admin (ADM-201) Program | DeKode Camp",
    description:
      "Get certified as a Salesforce Administrator with our hands-on 5-week training program.",
    url: "https://www.dekodecamp.com/programs/salesforce-adm201",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce Admin (ADM-201) Program | DeKode Camp",
    description:
      "Get certified as a Salesforce Administrator with our hands-on 5-week training program.",
  },
  keywords: [
    "Salesforce ADM-201",
    "Salesforce Admin certification",
    "Salesforce training",
    "Salesforce Admin bootcamp",
    "Salesforce certification prep",
  ],
};

export default function SalesforceAdm201Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
