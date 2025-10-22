"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        setIsHidden(false);
        setLastScrollY(currentY);
        return;
      }
      if (mobileMenuOpen) {
        // Keep nav visible while menu is open
        setIsHidden(false);
        setLastScrollY(currentY);
        return;
      }
      if (currentY <= 10) {
        setIsHidden(false);
      } else if (currentY > lastScrollY + 5) {
        // Scrolling down
        setIsHidden(true);
      } else if (currentY < lastScrollY - 5) {
        // Scrolling up
        setIsHidden(false);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } md:translate-y-0`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="DeKode Camp"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2">
                Programs
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    programsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {programsOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-56 bg-background border border-border rounded-lg shadow-lg py-2">
                    <Link
                      href="/programs/salesforce-adm201"
                      className="block px-4 py-3 text-foreground hover:bg-secondary transition-colors"
                    >
                      Salesforce Admin
                    </Link>
                    <Link
                      href="/programs/salesforce-developer"
                      className="block px-4 py-3 text-foreground hover:bg-secondary transition-colors"
                    >
                      Salesforce Developer
                    </Link>
                    <Link
                      href="/programs/full-stack-developer"
                      className="block px-4 py-3 text-foreground hover:bg-secondary transition-colors"
                    >
                      Full Stack Developer
                    </Link>
                    <Link
                      href="/programs/career-pathways"
                      className="block px-4 py-3 text-foreground hover:bg-secondary transition-colors"
                    >
                      Career Pathways
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {/* End of change */}
            <Link
              href="/blogs"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Blogs
            </Link>
            <Link href="/contact">
              <Button className="bg-gradient-brand text-white hover:opacity-90 transition-opacity">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4">
            <Link
              href="/"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="space-y-2">
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors font-medium"
              >
                Programs
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    programsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {programsOpen && (
                <div className="pl-4 space-y-2">
                  <Link
                    href="/programs/salesforce-adm201"
                    className="block text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Salesforce Admin
                  </Link>
                  <Link
                    href="/programs/salesforce-developer"
                    className="block text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Salesforce Development
                  </Link>
                  <Link
                    href="/programs/full-stack-developer"
                    className="block text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Full Stack Developer
                  </Link>
                  <Link
                    href="/programs/career-pathways"
                    className="block text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Career Pathways
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/blogs"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-brand text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
