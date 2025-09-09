import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import FlowDiagram from "@/components/flow-diagram";
import { ArrowRight, Check, Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import WaitlistButton from "@/components/waitlist-button";
import ScreenshotWindow from "@/components/screenshot-window";
import FeatureScreenshot from "@/components/feature-screenshot";
import { IconShare } from "@tabler/icons-react";
import {
  SnowflakeIcon,
  DatabricksIcon,
  SftpIcon,
  AwsSvg,
  DataBricksSvg,
  PostgresSvg,
} from "@/components/brand-icons";
import DemoSignupForm from "@/components/demo-signup-form";
import DeploymentTabs from "@/components/deployment-tabs";
import DataSharingMethods from "@/components/data-sharing-methods";
import FAQSection from "@/components/faq-section";

export default function Home() {
  // Standardized button styles
  const darkButtonClasses =
    "bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-lg";

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-24 text-center">
        <div className="container mx-auto px-4 pt-4 sm:pt-8 text-center">
          <Badge variant="outline" className="text-gray-600 ">
            <IconShare className="h-4 w-4 mr-2" /> Multi-Platform Data Sharing
            as a Service
          </Badge>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-8 leading-tight tracking-tight max-w-5xl mx-auto">
          Unlock Enterprise-Grade Data Sharing for Your Customers
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
          With Dataporto, you can support Snowflake, Databricks, and sFTP data
          sharing right away — for your biggest customers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
          <WaitlistButton size="lg" className={darkButtonClasses}>
            Talk to Our Team
          </WaitlistButton>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="px-8 py-4 text-lg font-medium rounded-lg"
          >
            <Link href="/#how-it-works">See how it works</Link>
          </Button>
        </div>

        {/* Trust Bar */}
        <div className="w-full border-t border-b border-gray-200 py-4 mb-8 sm:mb-16 bg-gray-50/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 opacity-60">
              <span className="text-sm text-gray-600 font-medium">
                Built on
              </span>
              <div className="flex items-center gap-8 flex-wrap justify-center">
                <div className="flex items-center">
                  <SnowflakeIcon className="h-5 w-5 grayscale brightness-0 opacity-60" />
                  <span className="ml-2 text-sm text-gray-600 font-medium">
                    Snowflake
                  </span>
                </div>
                <div className="flex items-center">
                  <DataBricksSvg className="h-5 w-5 grayscale brightness-0 opacity-60" />
                  <span className="ml-2 text-sm text-gray-600 font-medium">
                    Databricks
                  </span>
                </div>
                <div className="flex items-center">
                  <AwsSvg className="h-5 w-5 grayscale brightness-0 opacity-60" />
                  <span className="ml-2 text-sm text-gray-600 font-medium">
                    AWS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Screenshot */}
        <div className="max-w-6xl mx-auto mt-8 sm:mt-16 sm:px-4">
          <div className="relative">
            {/* Background blur effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-3xl blur-3xl transform scale-110"></div>

            {/* Main container with perspective */}
            <div className="relative perspective-1000">
              {/* Data Shares Screenshot */}
              <div className="transform rotate-x-2 rotate-y-3 hover:rotate-x-1 hover:rotate-y-2 transition-transform duration-700 ease-out animate-[tiltIn_1.2s_ease-out_0.5s_both]">
                <ScreenshotWindow
                  src="/screenshot-app-data-shares.png"
                  alt="Dataporto Data Shares - Client data sharing management"
                  url="dataporto.com/app/data-shares"
                  urlShort="data-shares"
                  priority
                  overlayIntensity="light"
                />
              </div>
            </div>

            {/* Enhanced floating elements for visual appeal */}
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 bg-blue-100 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-20 h-20 md:w-32 md:h-32 bg-purple-100 rounded-full blur-xl opacity-40 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 md:w-16 md:h-16 bg-indigo-100 rounded-full blur-lg opacity-30 animate-pulse delay-500"></div>
            <div className="absolute top-1/4 -right-6 w-14 h-14 md:w-20 md:h-20 bg-cyan-100 rounded-full blur-xl opacity-50 animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Platform Integration Logos */}
        <div className="flex justify-center items-center gap-12 mt-16 opacity-60">
          <div className="flex flex-col items-center w-16">
            <SnowflakeIcon className="h-8 w-8 mb-2" />
            <span className="text-sm text-gray-500 font-medium text-center">
              Snowflake
            </span>
          </div>
          <div className="flex flex-col items-center w-16">
            <DatabricksIcon className="h-8 w-8 mb-2" />
            <span className="text-sm text-gray-500 font-medium text-center">
              Databricks
            </span>
          </div>
          <div className="flex flex-col items-center w-16">
            <SftpIcon className="h-8 w-8 mb-2" />
            <span className="text-sm text-gray-500 font-medium text-center">
              sFTP
            </span>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              There&apos;s a smarter way to share data
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Connect your sources, configure governance policies, then deliver
              to any platform with a single control plane.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <FlowDiagram />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              Provision per-client access across Snowflake, Databricks, or sFTP
              with secure, isolated data delivery — no custom pipelines
              required.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Catalog → Share → Govern
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The complete data sharing platform built around three core
              pillars: know what you have, deliver it flexibly, and keep control
              at every step.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Catalog */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="mb-6">
                <FeatureScreenshot
                  src="/screenshot-app-catalog.png"
                  alt="Dataporto Data Catalog - Browse and manage all your data sources"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Catalog
                </h3>
                <p className="text-gray-600 font-medium mb-4">
                  Know what you have and control it
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Source Connectivity:</strong> Plug into databases,
                      warehouses, lakes (RDS, S3, Snowflake, Databricks,
                      BigQuery)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Data Catalog:</strong> Auto-discovery of tables,
                      schemas, and views
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Data Contracts:</strong> Define schemas, SLAs, and
                      expiration rules
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Metadata & Lineage:</strong> Track data origins
                      and sharing destinations
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Share */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="mb-6">
                <FeatureScreenshot
                  src="/screenshot-app-data-shares.png"
                  alt="Dataporto Data Shares - Manage client data sharing configurations"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Share
                </h3>
                <p className="text-gray-600 font-medium mb-4">
                  Deliver the data the way clients want it
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Multiple Delivery Options:</strong> Snowflake Data
                      Share, Databricks Delta Share, sFTP
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Zero-Copy Access:</strong> Native shares without
                      duplication
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Client Provisioning:</strong> Reader accounts or
                      managed endpoints with permissions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Live Sync:</strong> Near real-time updates from
                      source systems
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Govern */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="mb-6">
                <FeatureScreenshot
                  src="/screenshot-app-govern.png"
                  alt="Dataporto Governance - Control access and stay compliant"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Govern
                </h3>
                <p className="text-gray-600 font-medium mb-4">
                  Keep control and stay compliant
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Access Control:</strong> Role-based access,
                      client-specific filters and masking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Usage Auditing:</strong> Comprehensive logs of
                      access patterns
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Data Expiration:</strong> Time-bound shares with
                      instant revocation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Schema Safety:</strong> Alerts and versioning to
                      prevent pipeline breaks
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Supporting Features */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Supporting Features
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Monitoring & Alerts
                </h4>
                <p className="text-sm text-gray-600">
                  Detect pipeline breaks, schema drift, or stale data
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Billing & Metering
                </h4>
                <p className="text-sm text-gray-600">
                  Track data usage for monetization or chargebacks
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Developer API
                </h4>
                <p className="text-sm text-gray-600">
                  Full automation for engineering-heavy teams
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">
                  White-label Portal
                </h4>
                <p className="text-sm text-gray-600">
                  Let clients self-serve through a branded UI
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <WaitlistButton size="lg" className={darkButtonClasses}>
              Book a Call <ArrowRight className="ml-2 h-5 w-5" />
            </WaitlistButton>
          </div>
        </div>
      </section>

      {/* Data Sharing Methods Section */}
      <section id="data-sharing-methods" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Three Ways to Deliver Data
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Support your clients' preferred data consumption methods with a
              single platform. From zero-copy Snowflake shares to traditional
              sFTP delivery, Dataporto adapts to each client's technical
              requirements and infrastructure.
            </p>
          </div>

          <DataSharingMethods />

          <div className="text-center mt-12">
            <WaitlistButton size="lg" className={darkButtonClasses}>
              Explore Data Sharing Options{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </WaitlistButton>
          </div>
        </div>
      </section>

      {/* Enable Snowflake Data Shares Section */}
      <section id="snowflake-shares" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Trophy className="h-4 w-4 mr-2" />
              Most Popular Use Case
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enable Snowflake Data Shares
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Many vendors today store data in Databricks, Postgres, BigQuery,
              or other platforms, but their enterprise clients increasingly
              demand Snowflake Data Shares. With Dataporto, vendors can meet
              this demand — even if they don&apos;t have a Snowflake account.
            </p>
            <div className="mt-6">
              <span className="inline-flex items-center border border-gray-200 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                Don&apos;t use Snowflake? No Problem
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What You Get
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Secure data ingestion and staging from any platform
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Governed Snowflake Data Shares with client-specific controls
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Snowflake Reader Accounts for clients without Snowflake
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Live, zero-copy data access in the format clients expect
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                  <span>No custom pipeline development or maintenance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How It Works
              </h3>
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    1. Ingest & Stage Your Data
                  </h4>
                  <p className="text-gray-600">
                    Connect Dataporto to your data source, whether its
                    Databricks, AWS S3, or another data stack.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    2. Provision Governed Shares
                  </h4>
                  <p className="text-gray-600">
                    Use Dataporto to provision Snowflake Shares for your clients
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    3. Clients Get Live Access
                  </h4>
                  <p className="text-gray-600">
                    Zero-copy data access in Snowflake with full governance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <WaitlistButton size="lg" className={darkButtonClasses}>
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </WaitlistButton>
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section id="deployment" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Deployment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dataporto adapts to your security and compliance requirements.
              Choose the setup that fits your business.
            </p>
          </div>

          <DeploymentTabs />

          <div className="text-center mt-12">
            <WaitlistButton size="lg" className={darkButtonClasses}>
              Discuss Your Requirements <ArrowRight className="ml-2 h-5 w-5" />
            </WaitlistButton>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section id="before-after" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stop Building Custom Pipelines for Each Client
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Replace dozens of fragile pipelines with a single control plane
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Today&apos;s Custom Build */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Today&apos;s &quot;Custom Build&quot; Approach
              </h3>
              <p className="text-gray-600 mb-6">One‑off pipelines per client</p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  Gather client requirements (e.g., S3 parquet, nightly sFTP
                  CSV, live Snowflake Share)
                </li>
                <li>
                  Spin up infrastructure — Databricks, AWS (S3, IAM), FTP
                  servers and permissions
                </li>
                <li>
                  Build and schedule pipelines — Glue, Airflow, jobs, custom
                  scripts per client
                </li>
                <li>
                  Manage changes manually — update schema logic and embedded
                  governance per pipeline
                </li>
                <li>Monitor and troubleshoot pipelines individually</li>
              </ol>
            </div>

            {/* Pain Points */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Pain Points
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">
                    High engineering load
                  </p>
                  <p className="text-sm text-gray-600">
                    Each client becomes a separate project.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">
                    Inconsistent governance
                  </p>
                  <p className="text-sm text-gray-600">
                    Controls and masking scattered across code.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">
                    Slow onboarding
                  </p>
                  <p className="text-sm text-gray-600">
                    Infra + pipeline + security steps are manual.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">
                    Schema change chaos
                  </p>
                  <p className="text-sm text-gray-600">
                    One change breaks many bespoke pipelines.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">
                    Siloed monitoring
                  </p>
                  <p className="text-sm text-gray-600">
                    No single view of deliveries and failures.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">
                    Platform mismatch
                  </p>
                  <p className="text-sm text-gray-600">
                    Buying Snowflake/Databricks just for one client.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-16">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    How Dataporto Replaces This
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                      <span>
                        One connection to your source (Snowflake, Databricks,
                        Postgres, AWS, and more)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                      <span>
                        One control plane for governance, masking, filtering,
                        client permissions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                      <span>
                        Multiple delivery methods out of the box (Shares or
                        sFTP)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                      <span>
                        Automated lifecycle management for onboarding, schema
                        changes, revocation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                      <span>
                        Unified audit and monitoring across all deliveries
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-xl font-semibold text-gray-900 leading-relaxed">
                    Result:{" "}
                    <span className="text-gray-700">
                      Live, governed client access
                    </span>{" "}
                    in their platform of choice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Differentiators */}
      <section id="governance" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Teams Choose Dataporto
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The only platform that delivers governed, multi-platform data
              sharing without vendor lock-in or custom engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="mb-4">
                <div className="p-3 bg-gray-100 rounded-lg w-fit mb-4">
                  <Check className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  No Vendor Lock-in
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Works with any data platform — Snowflake, Databricks, or your
                  existing infrastructure. No forced migrations or platform
                  dependencies.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="mb-4">
                <div className="p-3 bg-gray-100 rounded-lg w-fit mb-4">
                  <Check className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Client-by-Client Governance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Granular masking, row/column security, and access controls per
                  client. Meet compliance requirements without custom code.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="mb-4">
                <div className="p-3 bg-gray-100 rounded-lg w-fit mb-4">
                  <Check className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Multi-Method Delivery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Single control plane for Snowflake Shares, Databricks Delta
                  Sharing, and sFTP. No need to rebuild for each delivery
                  method.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="mb-4">
                <div className="p-3 bg-gray-100 rounded-lg w-fit mb-4">
                  <Check className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Lifecycle Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Automated onboarding, schema updates, and revocation
                  workflows. Scale client operations without proportional
                  engineering overhead.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="mb-4">
                <div className="p-3 bg-gray-100 rounded-lg w-fit mb-4">
                  <Check className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Unified Visibility
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Single dashboard for audit trails, usage analytics, and
                  delivery status across all clients and platforms. Complete
                  operational transparency.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="mb-4">
                <div className="p-3 bg-gray-100 rounded-lg w-fit mb-4">
                  <Check className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Enterprise Ready
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  SOC 2 compliance, enterprise SSO, role-based access controls,
                  and API-first architecture for seamless integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Context & Competitive Landscape */}
      <section id="market" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The Evolution of Data Sharing
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Enterprises have escalating demands for data access — from weekly
              batch files to real-time feeds. Some clients require traditional
              FTP delivery while others expect modern direct-to-warehouse
              sharing. Engineering teams struggle to maintain custom pipelines
              for each client, diverting resources from core product development
              and innovation.
            </p>
          </div>

          {/* Competitive Landscape */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Why Current Solutions Fall Short
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 border-l-4 border-l-red-500">
                <CardTitle className="mb-2 text-red-700">
                  Native Platform Sharing
                </CardTitle>
                <CardDescription className="mb-2">
                  Snowflake Data Share, Databricks Delta Sharing
                </CardDescription>
                <p className="text-sm text-slate-600">
                  Platform lock-in, no cross-platform orchestration, limited
                  lifecycle management, and vendor dependency.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-orange-500">
                <CardTitle className="mb-2 text-orange-700">
                  ETL/ELT & Pipelines
                </CardTitle>
                <CardDescription className="mb-2">
                  Fivetran, Airbyte, Matillion
                </CardDescription>
                <p className="text-sm text-slate-600">
                  Data movement without governance, no client-specific access
                  controls, and complex custom development for each client.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-yellow-500">
                <CardTitle className="mb-2 text-yellow-700">
                  Marketplaces
                </CardTitle>
                <CardDescription className="mb-2">
                  Snowflake Marketplace, AWS Data Exchange
                </CardDescription>
                <p className="text-sm text-slate-600">
                  Public distribution focus, no client-specific governance,
                  limited customization, and platform-specific limitations.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-gray-500">
                <CardTitle className="mb-2 text-gray-700">
                  SFTP/Legacy
                </CardTitle>
                <CardDescription className="mb-2">
                  Manual setups, hosted FTP
                </CardDescription>
                <p className="text-sm text-slate-600">
                  No governance, manual processes, security risks, no version
                  control, and operational overhead.
                </p>
              </Card>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="p-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Dataporto: The Complete Solution
                </h3>
                <p className="text-lg text-blue-100 mb-6">
                  The only platform that orchestrates multi-source,
                  multi-destination, client-specific data sharing with built-in
                  governance, monitoring, and lifecycle management — without
                  vendor lock-in.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-white/20 rounded-full">
                    Multi-Platform Support
                  </span>
                  <span className="px-3 py-1 bg-white/20 rounded-full">
                    Client-by-Client Governance
                  </span>
                  <span className="px-3 py-1 bg-white/20 rounded-full">
                    Enterprise Security
                  </span>
                  <span className="px-3 py-1 bg-white/20 rounded-full">
                    No Vendor Lock-in
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection darkButtonClasses={darkButtonClasses} />

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Stop Wasting Engineering Resources on Custom Data Sharing
              Infrastructure
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Free up your engineering team to focus on core product development
              instead of maintaining custom per-client data sharing
              infrastructure. Dataporto handles the complexity so you can focus
              on innovation.
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
              <Image
                src="/icon.png"
                alt="Dataporto"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="text-xl font-bold">dataporto</span>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </a>
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
            © 2025 Dataporto. All rights reserved. Multi‑Platform Data Sharing
            as a Service.
          </p>
        </div>
      </footer>
    </div>
  );
}
