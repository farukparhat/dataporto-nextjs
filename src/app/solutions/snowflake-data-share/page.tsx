import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Shield,
  Zap,
  Users,
  Settings,
  Database,
  Cloud,
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-24 text-center">
        <div className="container mx-auto px-4 pt-4 sm:pt-8 text-center">
          <Badge variant="outline" className="text-gray-600">
            <SnowflakeIcon className="h-4 w-4 mr-2" />
            Snowflake Data Share Solutions
          </Badge>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-8 leading-tight tracking-tight max-w-5xl mx-auto">
          The Easiest Way to Enable Snowflake Data Shares
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
          Meet enterprise customer demands for Snowflake Data Shares — whether
          you have Snowflake or not. Dataporto provides the complete control
          plane for governed, scalable data sharing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-16">
          <WaitlistButton size="lg" className={darkButtonClasses}>
            Get Started Today
          </WaitlistButton>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="px-8 py-4 text-lg font-medium rounded-lg"
          >
            <Link href="#scenarios">See How It Works</Link>
          </Button>
        </div>

        {/* Value Proposition */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-gray-50 rounded-xl">
              <Zap className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Zero Engineering Overhead
              </h3>
              <p className="text-gray-600">
                No custom pipeline development. Provision governed Snowflake
                Data Shares with a few clicks.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <Shield className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Enterprise-Grade Governance
              </h3>
              <p className="text-gray-600">
                Client-specific access controls, masking, and compliance out of
                the box.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Works for Any Customer
              </h3>
              <p className="text-gray-600">
                Whether they have Snowflake or not — we handle the complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Scenarios Section */}
      <section id="scenarios" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Two Scenarios, One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dataporto adapts to your infrastructure and your customers' needs.
              Whether they have Snowflake or not, we make data sharing seamless.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Scenario 1: No Snowflake? No Problem */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg w-fit mr-4">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    No Snowflake? No Problem
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Data flows through our managed Snowflake environment
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Database className="h-5 w-5 mr-2 text-blue-600" />
                    How It Works
                  </h4>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                        1
                      </span>
                      <span>
                        Connect your data source (Databricks, Postgres, S3,
                        etc.) to Dataporto
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                        2
                      </span>
                      <span>
                        We automatically ingest and stage your data in our
                        managed Snowflake environment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                        3
                      </span>
                      <span>
                        Provision client-specific Snowflake Data Shares with
                        governance policies
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                        4
                      </span>
                      <span>
                        Clients access data through Snowflake Reader Accounts or
                        their own Snowflake
                      </span>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Benefits
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span>
                        <strong>No Snowflake license required</strong> — we
                        handle all infrastructure
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Zero pipeline maintenance</strong> — fully
                        managed ingestion and staging
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Reader account provisioning</strong> — clients
                        without Snowflake get instant access
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Live, zero-copy data access</strong> — no file
                        exports or stale snapshots
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Instant enterprise credibility</strong> — meet
                        Snowflake demands immediately
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Perfect for:</strong> Companies using Databricks,
                    BigQuery, Postgres, or other platforms who need to deliver
                    Snowflake Data Shares to enterprise clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 2: Bring Your Own Snowflake Account */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-lg w-fit mr-4">
                  <Settings className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Bring Your Own Snowflake Account
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Dataporto as control plane for your existing Snowflake
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-green-600" />
                    How It Works
                  </h4>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                        1
                      </span>
                      <span>
                        Connect Dataporto to your existing Snowflake account
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                        2
                      </span>
                      <span>
                        Use Dataporto's control plane to provision and manage
                        data shares
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                        3
                      </span>
                      <span>
                        Apply client-specific governance, masking, and access
                        controls
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                        4
                      </span>
                      <span>
                        Monitor, update, and govern all shares from a unified
                        dashboard
                      </span>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Benefits
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Keep your existing infrastructure</strong> — no
                        data migration required
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Unified governance layer</strong> — consistent
                        policies across all clients
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Automated lifecycle management</strong> —
                        onboarding, updates, revocation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Advanced monitoring & alerting</strong> — usage
                        analytics and schema change detection
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Multi-platform orchestration</strong> — add
                        Databricks, sFTP alongside Snowflake
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Perfect for:</strong> Companies already using
                    Snowflake who need sophisticated governance, monitoring, and
                    client management for their data shares.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Snowflake Data Shares Matter */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Enterprise Customers Demand Snowflake Data Shares
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Modern enterprises have moved beyond CSV exports and API polling.
              They want real-time, governed access to data in their preferred
              analytics platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Zero-Copy Performance
              </h3>
              <p className="text-gray-600">
                No data movement or duplication. Clients access live data
                directly in Snowflake with instant query performance.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Enterprise Security
              </h3>
              <p className="text-gray-600">
                Built-in encryption, access controls, and audit trails that meet
                enterprise compliance requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-lg w-fit mx-auto mb-4">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Native Integration
              </h3>
              <p className="text-gray-600">
                Seamless integration with existing Snowflake workflows, BI
                tools, and data science environments.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-orange-100 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Scalable Access
              </h3>
              <p className="text-gray-600">
                Support unlimited concurrent users without impacting source
                system performance or incurring data transfer costs.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-red-100 rounded-lg w-fit mx-auto mb-4">
                <Settings className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Granular Control
              </h3>
              <p className="text-gray-600">
                Fine-grained permissions, row-level security, and column masking
                for client-specific data access.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-indigo-100 rounded-lg w-fit mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Real-time Updates
              </h3>
              <p className="text-gray-600">
                Live data synchronization ensures clients always have access to
                the latest information without batch delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Started in Minutes, Not Months
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Traditional Snowflake Data Share implementations take months of
              engineering work. With Dataporto, you're sharing data in minutes.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Connect Your Data
                  </h3>
                  <p className="text-gray-600">
                    Link your existing data sources through our secure
                    connectors. Works with any platform — Databricks, Postgres,
                    S3, BigQuery, and more.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Configure Governance
                  </h3>
                  <p className="text-gray-600">
                    Set up client-specific access controls, data masking, and
                    compliance policies through our intuitive interface.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Share Securely
                  </h3>
                  <p className="text-gray-600">
                    Provision Snowflake Data Shares for your clients with a few
                    clicks. Include Reader Accounts for clients without
                    Snowflake.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Start?
                </h3>
                <p className="text-gray-600 mb-6">
                  Join leading data teams who have eliminated custom pipeline
                  development and reduced time-to-market from months to minutes.
                </p>
                <WaitlistButton size="lg" className={darkButtonClasses}>
                  Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </WaitlistButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Beyond Native Snowflake Sharing
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              While Snowflake offers data sharing capabilities, it lacks the
              governance, lifecycle management, and multi-platform orchestration
              that enterprise vendors need.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Native Snowflake Limitations */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Native Snowflake Sharing Limitations
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                      ✕
                    </span>
                    <span>
                      No unified control plane for multi-client governance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                      ✕
                    </span>
                    <span>
                      Manual lifecycle management and client onboarding
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                      ✕
                    </span>
                    <span>Limited monitoring and usage analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                      ✕
                    </span>
                    <span>
                      No cross-platform orchestration (Databricks, sFTP)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                      ✕
                    </span>
                    <span>Complex setup for non-Snowflake data sources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                      ✕
                    </span>
                    <span>
                      No automated client-specific masking and filtering
                    </span>
                  </li>
                </ul>
              </div>

              {/* Dataporto Advantages */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Dataporto's Complete Solution
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>
                      Unified control plane for all clients and platforms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>
                      Automated client onboarding and lifecycle management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>
                      Comprehensive monitoring, alerting, and usage analytics
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>
                      Multi-platform support (Snowflake + Databricks + sFTP)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>Seamless ingestion from any data source</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>
                      Advanced governance with client-specific policies
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Stop Losing Enterprise Deals Over Data Sharing Requirements
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Enterprise customers expect Snowflake Data Shares. With Dataporto,
              you can meet this demand immediately — regardless of your current
              infrastructure. Connect with our team to see how leading data
              teams are winning more enterprise deals with governed Snowflake
              Data Shares.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <DemoSignupForm className="bg-white p-8 rounded-lg shadow-lg text-black" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
            © 2025 Dataporto. All rights reserved. The Easiest Way to Enable
            Snowflake Data Shares.
          </p>
        </div>
      </footer>
    </div>
  );
}
