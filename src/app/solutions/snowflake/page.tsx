import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import FlowDiagram from "@/components/flow-diagram";
import {
  ArrowRight,
  Shield,
  Settings,
  Database,
  Cloud,
  Users,
  Check,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import WaitlistButton from "@/components/waitlist-button";
import { SnowflakeIcon } from "@/components/brand-icons";
import DemoSignupForm from "@/components/demo-signup-form";

export default function SnowflakeDataShareSolution() {
  const darkButtonClasses =
    "bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-lg";

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Header Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="text-gray-600 mb-8">
            <SnowflakeIcon className="h-4 w-4 mr-2" />
            Snowflake Data Share Solutions
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            Snowflake Data Sharing Made Simple
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            dataporto makes it effortless to share governed data with your
            clients — even if you don't have Snowflake.
          </p>
          <WaitlistButton size="lg" className={darkButtonClasses}>
            Start Your Journey
          </WaitlistButton>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              More and more enterprise clients expect Snowflake Data Shares. But
              setting up and managing Snowflake yourself can be time-consuming
              and complex.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>dataporto gives you two easy paths:</strong>
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  No Snowflake?
                </h3>
                <p className="text-gray-600">
                  Use dataporto's managed Snowflake.
                </p>
              </div>
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Already on Snowflake?
                </h3>
                <p className="text-gray-600">
                  Use dataporto as your control plane.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenario Section - Side by Side */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Scenario 1: No Snowflake */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gray-100 rounded-lg w-fit mr-4">
                  <Shield className="h-8 w-8 text-gray-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    No Snowflake? No Problem.
                  </h2>
                  <p className="text-lg font-medium text-gray-600">
                    Use dataporto's Managed Snowflake
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Don't have a Snowflake account? dataporto stages your data in
                our secure, enterprise-grade Snowflake environment so you can
                start sharing immediately.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Secure staging in dataporto's managed Snowflake
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Governed shares created instantly
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Reader accounts provisioned for clients without Snowflake
                  </span>
                </li>
              </ul>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-gray-700 text-sm font-medium">
                  <strong>Perfect for:</strong> Fastest way to deliver
                  Snowflake-native shares — without owning Snowflake.
                </p>
              </div>
            </div>

            {/* Scenario 2: Bring Your Own Snowflake */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gray-100 rounded-lg w-fit mr-4">
                  <Settings className="h-8 w-8 text-gray-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Bring Your Own Snowflake
                  </h2>
                  <p className="text-lg font-medium text-gray-600">
                    dataporto as Your Control Plane
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Already using Snowflake? dataporto simplifies client data
                sharing by acting as your control plane for provisioning and
                governance.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Automate share lifecycle: create, update, revoke
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Enforce row/column-level security and auditing
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Manage multiple client shares from a single interface
                  </span>
                </li>
              </ul>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-gray-700 text-sm font-medium">
                  <strong>Perfect for:</strong> Keep your Snowflake — let
                  dataporto handle the complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Result: Enterprise-Grade Data Sharing Without the Headache
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              No matter which scenario you choose, your clients get{" "}
              <strong>live, zero-copy data access</strong> in Snowflake — with
              built-in governance, auditing, and scalability.
            </p>
          </div>

          {/* Interactive flow diagram */}
          <div className="max-w-5xl mx-auto mb-16">
            <FlowDiagram />
          </div>

          {/* Key benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Live Data Access
              </h3>
              <p className="text-gray-600 text-sm">
                Real-time, zero-copy access to your latest data
              </p>
            </div>
            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Built-in Governance
              </h3>
              <p className="text-gray-600 text-sm">
                Enterprise-grade security and compliance controls
              </p>
            </div>
            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Infinite Scalability
              </h3>
              <p className="text-gray-600 text-sm">
                Support unlimited clients without performance impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Share Data the Way Your Clients Expect?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Whether you have Snowflake or not, dataporto makes enterprise data
              sharing simple. Talk to our team to see how we can help you meet
              client demands immediately.
            </p>
            <WaitlistButton size="lg" className={darkButtonClasses}>
              Start Your Journey
            </WaitlistButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <SnowflakeIcon className="h-6 w-6" />
              <span className="text-xl font-bold">dataporto</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">
                Snowflake Data Share Solutions
              </span>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </Link>
              <a
                href="mailto:hello@dataporto.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <p className="text-center text-gray-400">
            © 2025 dataporto. All rights reserved. Snowflake Data Sharing Made
            Simple.
          </p>
        </div>
      </footer>
    </div>
  );
}
