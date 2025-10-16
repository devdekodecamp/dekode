import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section className="space-y-4" id="cookies">
              <h2 className="text-3xl font-bold text-foreground">
                Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to collect
                information about your browsing activities. Cookies are small
                data files stored on your device that help us improve your
                experience, analyze site traffic, and personalize content.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  Cookie Policy
                </h3>
                <p>
                  Cookies help us remember your preferences, understand how you
                  use our site, and improve our services. Some cookies are
                  essential for the website to function properly, while others
                  are optional and used for analytics or personalization.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Essential cookies: Required for core functionality like
                    security and network management.
                  </li>
                  <li>
                    Analytics cookies: Help us analyze traffic and usage to
                    improve the site.
                  </li>
                  <li>
                    Preference cookies: Remember your settings such as theme and
                    language.
                  </li>
                </ul>
                <p>
                  You can accept or decline cookies using the banner on our
                  site, and you can also manage cookies through your browser
                  settings. Declining optional cookies may affect certain
                  features but will not prevent you from using the site.
                </p>
              </div>
              <p>
                You can control cookies through your browser settings and
                opt-out of certain tracking technologies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Introduction
              </h2>
              <p>
                At DeKode Camp, we are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Information We Collect
              </h2>
              <p>
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Name, email address, and contact information when you register
                  for our programs
                </li>
                <li>Payment information when you enroll in paid courses</li>
                <li>
                  Profile information and learning progress within our platform
                </li>
                <li>
                  Communications you send to us, including support requests and
                  feedback
                </li>
              </ul>
              <p className="mt-4">
                We also automatically collect certain information when you visit
                our website:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Device information, browser type, and operating system</li>
                <li>IP address and location data</li>
                <li>
                  Pages visited, time spent on pages, and navigation patterns
                </li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our educational services</li>
                <li>Process your enrollment and payments</li>
                <li>
                  Send you course updates, newsletters, and promotional
                  materials
                </li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>
                  Detect, prevent, and address technical issues or fraudulent
                  activity
                </li>
                <li>
                  Comply with legal obligations and enforce our terms of service
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Information Sharing and Disclosure
              </h2>
              <p>
                We do not sell your personal information. We may share your
                information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Service providers who assist in operating our platform and
                  delivering services
                </li>
                <li>Payment processors to handle transactions securely</li>
                <li>
                  Analytics providers to help us understand usage patterns
                </li>
                <li>
                  Law enforcement or regulatory authorities when required by law
                </li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Your Rights and Choices
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Disable cookies through your browser settings</li>
                <li>Request a copy of your data</li>
                <li>Object to certain processing of your information</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at
                privacy@dekodecamp.com or through our contact form.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Children's Privacy
              </h2>
              <p>
                Our services are not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13. If you believe we have collected information
                from a child under 13, please contact us immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date. We encourage you
                to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li>Email: privacy@dekodecamp.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Tech Street, San Francisco, CA 94105</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
