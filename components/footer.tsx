import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Image
              src="/logo.png"
              alt="DeKode Camp"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
            <p className="text-muted-foreground leading-relaxed">
              Empowering the next generation of tech professionals through
              innovative education and hands-on learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-foreground">
              Programs
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/programs/career-pathways"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Career Pathways
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/salesforce-adm201"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Salesforce Admin
                </Link>
              </li>

              <li>
                <Link
                  href="/programs/salesforce-developer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Salesforce Development
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/full-stack-developer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Full Stack Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-foreground">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <span>hello@dekodecamp.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <span>+63 9770575349</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>Manila, Philippines</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-muted-foreground text-sm">
            <p>
              © {new Date().getFullYear()} DeKode Camp. All rights reserved.
            </p>
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
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
                width={32}
                height={32}
                className="w-8 h-8"
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
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>{" "}
            <a
              href="https://www.linkedin.com/company/dekodecamp/"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin-icon.png"
                alt="LinkedIn"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
