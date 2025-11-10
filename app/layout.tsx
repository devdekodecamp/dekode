import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import Script from "next/script"; // 1. Import next/script
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";
import { ScrollToTop } from "@/components/scroll-to-top";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DeKode Camp - Decode Tech, Unlock Your Future",
  description:
    "Transform your career with industry-leading tech education programs",
  generator: "v0.app",
  other: {
    'google-site-verification': '1fuWZmc3V5sbSViwYpsRKgpNkSNEQVtjCtPSO2NMr_k',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav.png" type="image/png" />
        <link rel="shortcut icon" href="/fav.png" type="image/png">
        </link>
        <meta
          property="og:title"
          content="DeKode Camp - Decode Tech, Unlock Your Future"
        />
        <meta
          property="og:description"
          content="Transform your career with industry-leading tech education programs."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dekodecamp.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DeKode Camp - Decode Tech, Unlock Your Future"
        />
        <meta
          name="twitter:description"
          content="Transform your career with industry-leading tech education programs."
        />
        <meta name="twitter:image" content="/logo.png" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {/* 2. Add the <noscript> tag right after <body> */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=710925395352302&ev=PageView&noscript=1"
          />
        </noscript>

        <ScrollToTop />
        <Suspense fallback={null}>{children}</Suspense>
        <CookieConsent />
        <Analytics />

        {/* 3. Add the main <Script> component at the end of <body> */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '710925395352302');
                fbq('track', 'PageView');
              `,
          }}
        />
      </body>
    </html>
  );
}
