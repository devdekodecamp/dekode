import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"
import { ScrollToTop } from "@/components/scroll-to-top"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "DeKode Camp - Decode Tech, Unlock Your Future",
  description: "Transform your career with industry-leading tech education programs",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <ScrollToTop />
        <Suspense fallback={null}>{children}</Suspense>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
