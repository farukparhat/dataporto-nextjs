import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WaitlistButton from "@/components/waitlist-button";
import { Separator } from "@/components/ui/separator";
import FlowDiagram from "@/components/flow-diagram";
import { Share2, ArrowRight, Check, Folder } from "lucide-react";
import { DataBricks, Snowflake } from "@/components/brand-icons";
import Link from "next/link";
import Image from "next/image";
import MobileSidebar from "@/components/mobile-sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/icon.png"
              alt="Dataporto"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="text-2xl font-bold text-slate-900">dataporto</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#how-it-works"
              className="text-slate-600 hover:text-slate-900"
            >
              How it Works
            </a>
            <Link href="/blog" className="text-slate-600 hover:text-slate-900">
              Blog
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <MobileSidebar />
            <WaitlistButton>Schedule a Demo</WaitlistButton>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-4">
          <Share2 className="h-4 w-4 mr-2" />
          Data Sharing as a Service
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Governed, Multi-Platform Data Sharing — Without Custom Pipelines
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto">
          Securely share live, governed data with each of your clients in their
          preferred platform — Snowflake, Databricks, or sFTP — with
          client-by-client configuration and lifecycle management.
        </p>

        {/* Platform Icons */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="flex flex-col items-center">
            <Snowflake className="h-12 w-12 text-blue-600 mb-2" />
            <span className="text-sm text-slate-600">Snowflake</span>
          </div>
          <div className="flex flex-col items-center">
            <DataBricks className="h-12 w-12 text-orange-600 mb-2" />
            <span className="text-sm text-slate-600">Databricks</span>
          </div>
          <div className="flex flex-col items-center">
            <Folder className="h-12 w-12 text-green-600 mb-2" />
            <span className="text-sm text-slate-600">sFTP</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WaitlistButton size="lg" className="text-lg px-8">
            Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
          </WaitlistButton>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              How it Works
            </h2>
            <div className="max-w-4xl mx-auto">
              <FlowDiagram />
            </div>
            <div className="max-w-4xl mx-auto mt-8">
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                One connection to your source, one control plane for governance,
                and multiple delivery methods out of the box — Snowflake Data
                Share, Databricks Delta Sharing, and sFTP — without rebuilding
                pipelines for each client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section id="before-after" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Stop building custom pipelines for each client
            </h2>
            <p className="text-lg text-slate-600">
              Replace dozens of fragile pipelines with a single control plane
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Today’s Custom Build */}
            <Card className="p-8">
              <CardTitle className="text-xl mb-3">
                Today’s “Custom Build” Approach
              </CardTitle>
              <CardDescription className="mb-4">
                One‑off pipelines per client
              </CardDescription>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
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
            </Card>

            {/* Pain Points */}
            <Card className="p-8">
              <CardTitle className="text-xl mb-3">Pain Points</CardTitle>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded border">
                  <p className="font-medium">High engineering load</p>
                  <p className="text-sm text-slate-600">
                    Each client becomes a separate project.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded border">
                  <p className="font-medium">Inconsistent governance</p>
                  <p className="text-sm text-slate-600">
                    Controls and masking scattered across code.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded border">
                  <p className="font-medium">Slow onboarding</p>
                  <p className="text-sm text-slate-600">
                    Infra + pipeline + security steps are manual.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded border">
                  <p className="font-medium">Schema change chaos</p>
                  <p className="text-sm text-slate-600">
                    One change breaks many bespoke pipelines.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded border">
                  <p className="font-medium">Siloed monitoring</p>
                  <p className="text-sm text-slate-600">
                    No single view of deliveries and failures.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded border">
                  <p className="font-medium">Platform mismatch</p>
                  <p className="text-sm text-slate-600">
                    Buying Snowflake/Databricks just for one client.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="max-w-6xl mx-auto mt-8">
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    How Dataporto Replaces This
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mt-1 mr-2" />
                      One connection to your source (Snowflake, Databricks,
                      Postgres, AWS, and more)
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mt-1 mr-2" />
                      One control plane for governance, masking, filtering,
                      client permissions
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mt-1 mr-2" />
                      Multiple delivery methods out of the box (Shares or sFTP)
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mt-1 mr-2" />
                      Automated lifecycle management for onboarding, schema
                      changes, revocation
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mt-1 mr-2" />
                      Unified audit and monitoring across all deliveries
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-slate-800">
                    Result:{" "}
                    <span className="text-blue-600">
                      Live, governed client access
                    </span>{" "}
                    in their platform of choice.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Differentiators */}
      <section id="differentiators" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Teams Choose DataPorto
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The only platform that delivers governed, multi-platform data
              sharing without vendor lock-in or custom engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 border-l-4 border-l-green-500">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    No Vendor Lock-in
                  </h3>
                  <p className="text-sm text-slate-600">
                    Works with any data platform — Snowflake, Databricks, or
                    your existing infrastructure. No forced migrations or
                    platform dependencies.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-blue-500">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Client-by-Client Governance
                  </h3>
                  <p className="text-sm text-slate-600">
                    Granular masking, row/column security, and access controls
                    per client. Meet compliance requirements without custom
                    code.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-purple-500">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-purple-100 rounded-lg mr-3">
                  <Check className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Multi-Method Delivery
                  </h3>
                  <p className="text-sm text-slate-600">
                    Single control plane for Snowflake Shares, Databricks Delta
                    Sharing, and sFTP. No need to rebuild for each delivery
                    method.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-orange-500">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-orange-100 rounded-lg mr-3">
                  <Check className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Lifecycle Management
                  </h3>
                  <p className="text-sm text-slate-600">
                    Automated onboarding, schema updates, and revocation
                    workflows. Scale client operations without proportional
                    engineering overhead.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-indigo-500">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Unified Visibility
                  </h3>
                  <p className="text-sm text-slate-600">
                    Single dashboard for audit trails, usage analytics, and
                    delivery status across all clients and platforms. Complete
                    operational transparency.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-teal-500">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-teal-100 rounded-lg mr-3">
                  <Check className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Enterprise Ready
                  </h3>
                  <p className="text-sm text-slate-600">
                    SOC 2 compliance, enterprise SSO, role-based access
                    controls, and API-first architecture for seamless
                    integration.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Context & Competitive Landscape */}
      <section id="market" className="py-20 bg-slate-50">
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
                  DataPorto: The Complete Solution
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Stop Wasting Engineering Resources on Custom Data Sharing
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Free up your engineering team to focus on core product development
            instead of maintaining custom per-client data sharing
            infrastructure. DataPorto handles the complexity so you can focus on
            innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WaitlistButton
              size="lg"
              variant="secondary"
              className="text-lg px-8"
            >
              Modernize your Data Sharing{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </WaitlistButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
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
              <Link href="/privacy" className="text-slate-400 hover:text-white">
                Privacy
              </Link>
              <a href="#" className="text-slate-400 hover:text-white">
                Terms
              </a>
              <a
                href="mailto:hello@dataporto.com"
                className="text-slate-400 hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
          <Separator className="my-8 bg-slate-700" />
          <p className="text-center text-slate-400">
            © 2025 Dataporto. All rights reserved. Multi‑Platform Data Sharing
            as a Service.
          </p>
        </div>
      </footer>
    </div>
  );
}
