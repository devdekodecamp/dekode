"use client";

import type React from "react";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import Script from "next/script";

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (
          siteKey: string,
          options: { action: string }
        ) => Promise<string>;
      };
    };
  }
}

const RECAPTCHA_SITE_KEY = "6LfMTTAsAAAAACG7wkRkriaB9TPRlg5McqXZoR3X";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState<"idle" | "success" | "error">("idle");
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    try {
      setSubmitting(true);

      // Get reCAPTCHA token
      // Skip reCAPTCHA in development/localhost if not configured
      const isDevelopment = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      let recaptchaToken = "";
      
      if (isDevelopment) {
        // In development, try to get token but don't fail if reCAPTCHA isn't configured for localhost
        try {
          if (window.grecaptcha && window.grecaptcha.enterprise) {
            await new Promise<void>((resolve) => {
              window.grecaptcha.enterprise.ready(async () => {
                try {
                  recaptchaToken = await window.grecaptcha.enterprise.execute(
                    RECAPTCHA_SITE_KEY,
                    { action: "submit" }
                  );
                  resolve();
                } catch (err) {
                  // If localhost isn't in allowed domains, use a bypass token for development
                  console.warn("reCAPTCHA not configured for localhost. Using development bypass.");
                  recaptchaToken = "development-bypass-token";
                  resolve();
                }
              });
            });
          } else {
            recaptchaToken = "development-bypass-token";
          }
        } catch (err) {
          console.warn("reCAPTCHA error in development:", err);
          recaptchaToken = "development-bypass-token";
        }
      } else {
        // Production: require valid reCAPTCHA token
        if (window.grecaptcha && window.grecaptcha.enterprise) {
          await new Promise<void>((resolve) => {
            window.grecaptcha.enterprise.ready(async () => {
              try {
                recaptchaToken = await window.grecaptcha.enterprise.execute(
                  RECAPTCHA_SITE_KEY,
                  { action: "submit" }
                );
                resolve();
              } catch (err) {
                console.error("reCAPTCHA error:", err);
                toast.error("reCAPTCHA verification failed. Please try again.");
                setSubmitting(false);
                return;
              }
            });
          });
        } else {
          toast.error("reCAPTCHA not loaded. Please refresh the page.");
          setSubmitting(false);
          return;
        }
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        setSent("error");
        toast.error(data?.message || "Failed to send message.");
        return;
      }
      setSent("success");
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setSent("error");
      toast.error("Unexpected error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-balance">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Have questions about our programs? We're here to help you start your
            tech journey
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-10 bg-card">
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {sent === "success" && (
                  <Alert className="bg-green-50 border-green-200 text-green-800">
                    <AlertTitle>Message sent</AlertTitle>
                    <AlertDescription>
                      Thanks! We received your message and will respond shortly.
                    </AlertDescription>
                  </Alert>
                )}
                {sent === "error" && (
                  <Alert className="bg-red-50 border-red-200 text-red-800">
                    <AlertTitle>Something went wrong</AlertTitle>
                    <AlertDescription>
                      We couldn’t send your message. Please try again.
                    </AlertDescription>
                  </Alert>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      placeholder="Doe"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      placeholder="John"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+1 (555) 123-4567"
                    className="h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Message (optional)
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your goals and how we can help..."
                    rows={6}
                    className="min-h-40"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-[#e01414] via-[#760da3] to-[#008cff] text-white hover:opacity-90 transition-opacity h-12"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-foreground">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <Mail className="text-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-foreground">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        hello@dekodecamp.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <Phone className="text-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-foreground">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">+63 9770575349</p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Fri, 9am-6pm EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-foreground">
                        Address
                      </h3>
                      <p className="text-muted-foreground">
                        Manila, Philippines
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <Card className="p-8 bg-secondary">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Follow Us
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Stay connected with us on social media for the latest updates,
                  tips, and success stories from our community.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/DeKodeCamp"
                    className="hover:opacity-80 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/facebook-icon.png"
                      alt="Facebook"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/dekodecamp/"
                    className="hover:opacity-80 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/instagram-icon.png"
                      alt="Instagram"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/dekodecamp/"
                    className="hover:opacity-80 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/linkedin-icon.png"
                      alt="LinkedIn"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </a>
                </div>
              </Card>

              {/* Office Hours */}
              <Card className="p-8 bg-card">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Office Hours
                </h3>
                <div className="space-y-1 text-muted-foreground">
                  <div className="grid grid-cols-2 items-center gap-x-4 py-2">
                    <span className="truncate">Monday - Friday</span>
                    <span className="font-medium text-foreground text-right">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="grid grid-cols-2 items-center gap-x-4 py-2 border-t border-border">
                    <span className="truncate">Saturday</span>
                    <span className="font-medium text-foreground text-right">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="grid grid-cols-2 items-center gap-x-4 py-2 border-t border-border">
                    <span className="truncate">Sunday</span>
                    <span className="font-medium text-foreground text-right">
                      Closed
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Schedule a Meeting
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Book a time that works for you to discuss your goals and how we
              can help
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-card rounded-lg overflow-hidden shadow-lg">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/hello-dekodecamp/30min"
              style={{
                minWidth: "320px",
                height: "1000px",
                overflow: "hidden",
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
      <Script
        src="https://www.google.com/recaptcha/enterprise.js?render=6LfMTTAsAAAAACG7wkRkriaB9TPRlg5McqXZoR3X"
        strategy="lazyOnload"
        onLoad={() => setRecaptchaLoaded(true)}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
