import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/header";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      {/* Terms and Conditions Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl font-bold text-slate-900 mb-4">
                Terms and Conditions
              </CardTitle>
              <p className="text-slate-600">Last Updated: September 4, 2025</p>
            </CardHeader>

            <CardContent className="space-y-8 text-slate-700 leading-relaxed">
              <div>
                <p className="mb-4">
                  Welcome to DataPorto! These Terms and Conditions
                  (&quot;Terms&quot;) govern your access to and use of the
                  DataPorto platform, products, and services
                  (&quot;Services&quot;). Please read these Terms carefully
                  before using our Services. By accessing or using DataPorto,
                  you agree to be bound by these Terms. If you do not agree, you
                  may not use our Services.
                </p>
              </div>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  1. About DataPorto
                </h2>
                <p>
                  DataPorto (&quot;Company,&quot; &quot;we,&quot;
                  &quot;us,&quot; &quot;our&quot;) provides Data Sharing as a
                  Service (DSaaS), enabling vendors to securely share data with
                  their clients through platforms such as Snowflake, Databricks,
                  sFTP, and other supported methods.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  2. Eligibility
                </h2>
                <p className="mb-4">
                  By using our Services, you represent that you are:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>At least 18 years old, and</li>
                  <li>
                    Authorized to enter into binding agreements on behalf of
                    your organization.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  3. Account Registration
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    You must register an account to access certain features of
                    the Services.
                  </li>
                  <li>
                    You are responsible for safeguarding your login credentials
                    and for all activity under your account.
                  </li>
                  <li>
                    You must provide accurate and complete information during
                    registration and keep it up to date.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  4. Use of Services
                </h2>
                <p className="mb-4">You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Services only for lawful business purposes.</li>
                  <li>
                    Not misuse, reverse engineer, or attempt to gain
                    unauthorized access to the Services.
                  </li>
                  <li>
                    Ensure that any data you upload, share, or connect complies
                    with applicable laws, contractual obligations, and your
                    organization&apos;s policies.
                  </li>
                  <li>
                    Maintain and own the rights to any data you share through
                    our Services.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  5. Data Ownership and Sharing
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    You retain all rights to your data. DataPorto does not claim
                    ownership over customer data.
                  </li>
                  <li>
                    By using the Services, you grant DataPorto a limited right
                    to process, store, and transfer your data solely to deliver
                    the Services.
                  </li>
                  <li>
                    Clients accessing your shared data through Snowflake or
                    other supported platforms must comply with these Terms and
                    any additional agreements you establish.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  6. Privacy
                </h2>
                <p>
                  Our handling of data is governed by our{" "}
                  <strong>Privacy Policy</strong>. By using the Services, you
                  consent to the collection, processing, and use of your data as
                  described in the Privacy Policy.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  7. Fees and Payments
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Some Services may require payment. Pricing and payment terms
                    will be provided separately.
                  </li>
                  <li>
                    All fees are non-refundable unless otherwise stated in
                    writing.
                  </li>
                  <li>You are responsible for any applicable taxes.</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  8. Service Availability
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    We strive to provide reliable and continuous Services but do
                    not guarantee uninterrupted availability.
                  </li>
                  <li>
                    We may suspend or limit Services for maintenance, upgrades,
                    or security reasons.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  9. Intellectual Property
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    DataPorto owns all rights, titles, and interests in the
                    Services, including software, designs, and branding.
                  </li>
                  <li>
                    You may not copy, modify, distribute, or create derivative
                    works of our intellectual property without written consent.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  10. Compliance and Restrictions
                </h2>
                <p className="mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Use the Services to share unlawful, harmful, or infringing
                    content.
                  </li>
                  <li>
                    Violate export control laws or other regulatory
                    requirements.
                  </li>
                  <li>
                    Use the Services in a way that could disrupt or harm
                    DataPorto&apos;s systems or other customers.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  11. Disclaimers
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    The Services are provided &quot;as is&quot; and &quot;as
                    available.&quot;
                  </li>
                  <li>
                    We disclaim all warranties, express or implied, including
                    merchantability, fitness for a particular purpose, and
                    non-infringement.
                  </li>
                  <li>
                    We do not guarantee that the Services will be error-free,
                    secure, or meet all your requirements.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  12. Limitation of Liability
                </h2>
                <p className="mb-4">To the fullest extent permitted by law:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    DataPorto shall not be liable for any indirect, incidental,
                    or consequential damages.
                  </li>
                  <li>
                    Our total liability for any claim related to the Services
                    will not exceed the amount paid by you to us in the twelve
                    (12) months prior to the claim.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  13. Indemnification
                </h2>
                <p className="mb-4">
                  You agree to indemnify and hold harmless DataPorto, its
                  affiliates, and employees from any claims, damages, or
                  liabilities arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use of the Services,</li>
                  <li>Your violation of these Terms, or</li>
                  <li>Your data or content shared through the Services.</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  14. Termination
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may stop using the Services at any time.</li>
                  <li>
                    We may suspend or terminate your access if you violate these
                    Terms or if required by law.
                  </li>
                  <li>
                    Upon termination, your right to use the Services ends
                    immediately, but certain obligations (e.g., payment,
                    confidentiality, indemnification) will survive.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  15. Changes to Terms
                </h2>
                <p>
                  We may update these Terms from time to time. If we make
                  material changes, we will notify you (e.g., via email or
                  platform notice). Continued use of the Services after changes
                  constitutes acceptance of the revised Terms.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  16. Governing Law and Dispute Resolution
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    These Terms are governed by the laws of{" "}
                    <strong>[Insert Jurisdiction, e.g., Delaware, USA]</strong>.
                  </li>
                  <li>
                    Any disputes will be resolved through binding arbitration or
                    courts located in <strong>[Insert Jurisdiction]</strong>.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  17. Contact Us
                </h2>
                <p className="mb-4">
                  If you have questions about these Terms, please contact us at:
                </p>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="font-semibold">
                    DataPorto (Wisp AI Labs, Inc.)
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:legal@dataporto.com"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      legal@dataporto.com
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      href="https://dataporto.com"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://dataporto.com
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
