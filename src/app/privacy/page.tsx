import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/icon.png"
                alt="Dataporto"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="text-2xl font-bold text-slate-900">
                dataporto
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="/#how-it-works"
              className="text-slate-600 hover:text-slate-900"
            >
              How it Works
            </a>
            <Link href="/blog" className="text-slate-600 hover:text-slate-900">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl font-bold text-slate-900 mb-4">
                Privacy Policy
              </CardTitle>
              <p className="text-slate-600">Last Updated: August 27, 2025</p>
            </CardHeader>

            <CardContent className="space-y-8 text-slate-700 leading-relaxed">
              <div>
                <p className="mb-4">
                  DataPorto (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                  is a Data Sharing as a Service platform operated by Wisp AI
                  Labs, Inc. We are committed to protecting your privacy and
                  handling your information responsibly. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard personal
                  information when you use our services.
                </p>
                <p>
                  By using DataPorto, you agree to the practices described in
                  this Privacy Policy.
                </p>
              </div>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  We collect and process the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Account Information:</strong> Name, email address,
                    company, billing information.
                  </li>
                  <li>
                    <strong>Data Provided by Vendors:</strong> Customer data,
                    reports, or tables shared through DataPorto, which may
                    include personal data.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> IP address, device/browser
                    type, operating system, log data, cookies, and service usage
                    metrics.
                  </li>
                  <li>
                    <strong>Communications:</strong> Records of your
                    correspondence with us (support requests, inquiries).
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  2. How We Use Information
                </h2>
                <p className="mb-4">We process personal data to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Provide, operate, and improve DataPorto&apos;s services.
                  </li>
                  <li>Authenticate users and secure access.</li>
                  <li>Process transactions and provide customer support.</li>
                  <li>Monitor, audit, and analyze platform activity.</li>
                  <li>Comply with legal and regulatory obligations.</li>
                </ul>
                <p className="mt-4">
                  We do not sell or rent your personal information.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  3. Legal Basis for Processing (GDPR)
                </h2>
                <p className="mb-4">
                  If you are located in the EU/EEA, we process your personal
                  data under the following legal bases:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Performance of Contract:</strong> To provide
                    services to our vendor clients.
                  </li>
                  <li>
                    <strong>Legitimate Interests:</strong> To maintain security,
                    improve our platform, and communicate with clients.
                  </li>
                  <li>
                    <strong>Consent:</strong> For optional activities, such as
                    marketing communications.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  4. Data Sharing & Subprocessors
                </h2>
                <p className="mb-4">We may share personal data with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Trusted Service Providers</strong> who act as
                    subprocessors (e.g., Snowflake, AWS, Databricks).
                  </li>
                  <li>
                    <strong>Professional Advisors</strong> such as auditors or
                    legal counsel.
                  </li>
                  <li>
                    <strong>Authorities</strong> if required by law or to
                    protect rights and security.
                  </li>
                </ul>
                <p className="mt-4">
                  We maintain contracts with all subprocessors to ensure
                  appropriate safeguards.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  5. International Transfers
                </h2>
                <p>
                  If we transfer personal data outside the EU/EEA, we implement
                  safeguards such as Standard Contractual Clauses (SCCs) or
                  other lawful mechanisms.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  6. Data Retention
                </h2>
                <p className="mb-4">
                  We retain personal data only as long as necessary to fulfill
                  the purposes outlined in this Privacy Policy, comply with
                  legal obligations, resolve disputes, and enforce agreements.
                </p>
                <p>
                  Vendors control the retention of their own client/customer
                  data within DataPorto.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  7. Your Rights (GDPR and Global Privacy Laws)
                </h2>
                <p className="mb-4">
                  If you are an EU/EEA resident, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access, correct, or delete your personal data.</li>
                  <li>Restrict or object to certain processing.</li>
                  <li>Request data portability.</li>
                  <li>Withdraw consent at any time (where applicable).</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at{" "}
                  <a
                    href="mailto:hello@dataporto.com"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    hello@dataporto.com
                  </a>
                  . We will respond in accordance with applicable law.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  8. Security
                </h2>
                <p className="mb-4">
                  We implement technical and organizational measures to protect
                  personal data, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption in transit and at rest.</li>
                  <li>Role-based access controls and MFA.</li>
                  <li>Monitoring, logging, and audit trails.</li>
                  <li>Regular security testing and reviews.</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  9. Children&apos;s Privacy
                </h2>
                <p>
                  DataPorto does not target or knowingly process information
                  from individuals under 16 years old.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  10. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Material
                  changes will be communicated by email or posted on our
                  website.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  11. Contact Us
                </h2>
                <p className="mb-4">
                  If you have questions or concerns about this Privacy Policy,
                  please contact us at:
                </p>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="font-semibold">
                    Wisp AI Labs, Inc. (operator of DataPorto)
                  </p>
                  <p>25180 Huston Street, Stevenson Ranch, California, 91381</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:hello@dataporto.com"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      hello@dataporto.com
                    </a>
                  </p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
