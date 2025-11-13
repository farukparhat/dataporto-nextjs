"use client";

import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { ArrowRight } from "lucide-react";
import WaitlistButton from "@/components/waitlist-button";

const faqData = [
  {
    question: "Do I need a Snowflake account to use dataporto?",
    answer:
      "No. That's the beauty of dataporto — we run the Snowflake infrastructure for you. Your clients can receive data in their own Snowflake accounts or via Reader Accounts we provision for them.",
  },
  {
    question: "What types of data sources can I connect?",
    answer:
      "You can connect databases (Postgres, MySQL, SQL Server, Redshift, BigQuery), cloud storage (S3, GCS, Azure Blob), or even existing warehouses (Snowflake, Databricks). We're continuously adding more integrations.",
  },
  {
    question: "How is this different from just sending CSVs or APIs?",
    answer:
      "CSV exports and APIs are brittle, slow, and hard to scale per client. dataporto gives your clients live, zero-copy warehouse access — the format enterprises now expect. It's instant, governed, and always up to date.",
  },
  {
    question: "Is the data secure?",
    answer:
      "Yes. dataporto is built with enterprise-grade security: encrypted at rest and in transit, strict IAM controls, row/column masking, and full audit logging. SOC 2 compliance is on our roadmap.",
  },
  {
    question: "What if my client doesn't have Snowflake?",
    answer:
      "No problem. We can provision a free Snowflake Reader Account for them, or deliver the same governed data via Databricks Delta Sharing or sFTP feeds.",
  },
  {
    question: "How hard is onboarding?",
    answer:
      "Onboarding is zero-code. Connect your source, define what data to share, and dataporto takes care of staging, provisioning, and governance. Most vendors go live in hours, not weeks.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We price based on the number of clients you share data with and the volume of data processed. No upfront Snowflake contract or engineering overhead required.",
  },
  {
    question: "Who is dataporto for?",
    answer:
      "SaaS vendors who deliver analytics to enterprise customers, agencies providing client-specific metrics and dashboards, data providers selling curated datasets, and platforms that want governed, multi-client data access at scale.",
  },
  {
    question: "Can I revoke or update access once it's shared?",
    answer:
      "Yes. You stay in full control. dataporto makes it easy to update, revoke, or expire shares on a per-client basis at any time.",
  },
];

interface FAQSectionProps {
  darkButtonClasses: string;
}

export default function FAQSection({ darkButtonClasses }: FAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about dataporto and how it can transform
            your data sharing operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`${
                  index !== faqData.length - 1 ? "border-b border-gray-100" : ""
                } transition-all duration-200 hover:bg-gray-50/30`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between group cursor-pointer focus:outline-none focus:bg-gray-50/50 transition-all duration-200"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-6 group-hover:text-blue-600 transition-colors leading-relaxed">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-all duration-200">
                    {openFAQ === index ? (
                      <IconChevronUp className="h-4 w-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    ) : (
                      <IconChevronDown className="h-4 w-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6 bg-gray-50/50">
                    <div className="border-l-4 border-blue-200 pl-6 ml-2">
                      <p className="text-gray-700 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help you understand how dataporto can
                transform your data sharing operations.
              </p>
              <WaitlistButton size="lg" className={darkButtonClasses}>
                Schedule a Call <ArrowRight className="ml-2 h-5 w-5" />
              </WaitlistButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
