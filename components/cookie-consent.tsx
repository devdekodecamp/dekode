"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookie-consent");
    if (!hasAccepted) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <Card className="relative max-w-4xl mx-auto p-6 md:p-8 bg-card border-2 shadow-2xl">
        <button
          aria-label="Close cookie banner"
          className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted/60 transition-colors"
          onClick={() => setShowConsent(false)}
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              We value your privacy
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site
              traffic, and personalize content. By clicking "Accept All", you
              consent to our use of cookies.{" "}
              <Link
                href="/privacy-policy#cookies"
                className="text-[#760da3] hover:underline font-medium"
              >
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              onClick={acceptCookies}
              className="bg-gradient-brand text-white hover:opacity-90 transition-opacity"
            >
              Accept All
            </Button>
            <Button onClick={declineCookies} variant="outline">
              Decline
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
