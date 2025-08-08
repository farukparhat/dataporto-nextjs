import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import FlowDiagram from "@/components/FlowDiagram";
import {
  Database,
  Share2,
  ArrowRight,
  Check,
  Building2,
  Globe,
  Folder,
  Anchor,
} from "lucide-react";
import { DataBricks, Snowflake } from "@/components/brand-icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Anchor className="h-6 w-6" />
            <span className="text-2xl font-bold text-slate-900">dataporto</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#how-it-works"
              className="text-slate-600 hover:text-slate-900"
            >
              How it Works
            </a>
            <a
              href="#before-after"
              className="text-slate-600 hover:text-slate-900"
            >
              Before & After
            </a>
            <a
              href="#differentiators"
              className="text-slate-600 hover:text-slate-900"
            >
              Differentiators
            </a>
            <a href="#market" className="text-slate-600 hover:text-slate-900">
              Market
            </a>
          </nav>
          <Button>Schedule Demo</Button>
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
          Securely share live, governed data with each client in their preferred
          platform — Snowflake, Databricks, or sFTP — with client-by-client
          configuration and lifecycle management.
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
          <Button size="lg" className="text-lg px-8">
            Schedule Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
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
              Before & After
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
              DataPorto’s Differentiators
            </h2>
            <p className="text-lg text-slate-600">Why teams choose Dataporto</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 text-slate-700">
              <li className="flex">
                <Check className="h-5 w-5 text-green-600 mt-1 mr-2" />
                No lock‑in — works even if you don’t use Snowflake or
                Databricks.
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-600 mt-1 mr-2" />
                Client‑by‑client governance with masking and row/column
                security.
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-600 mt-1 mr-2" />
                Multi‑method delivery from a single control plane (Shares or
                sFTP).
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-600 mt-1 mr-2" />
                Lifecycle management for onboarding, schema updates, and
                revocation.
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-600 mt-1 mr-2" />
                Unified audit and usage visibility across all shares.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Market Context & Competitive Landscape */}
      <section id="market" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Market Context & Trends
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Enterprise clients expect live, governed access to vendor data —
              not CSV dumps. Platforms compete for data collaboration dominance
              while sovereignty and compliance pressures make client-by-client
              governance non‑optional. Data products are the new norm.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6">
              <CardTitle className="mb-2">Native Platform Sharing</CardTitle>
              <CardDescription className="mb-2">
                Snowflake Data Share, Databricks Delta Sharing
              </CardDescription>
              <p className="text-sm text-slate-600">
                Assumes vendor uses their platform; no cross‑platform
                orchestration or lifecycle management.
              </p>
            </Card>
            <Card className="p-6">
              <CardTitle className="mb-2">ETL/ELT & Pipelines</CardTitle>
              <CardDescription className="mb-2">
                Fivetran, Airbyte, Matillion
              </CardDescription>
              <p className="text-sm text-slate-600">
                Move data, but don’t provision governed client access.
              </p>
            </Card>
            <Card className="p-6">
              <CardTitle className="mb-2">Marketplaces</CardTitle>
              <CardDescription className="mb-2">
                Snowflake Marketplace, AWS Data Exchange
              </CardDescription>
              <p className="text-sm text-slate-600">
                Oriented to public distribution; not client‑specific shares.
              </p>
            </Card>
            <Card className="p-6">
              <CardTitle className="mb-2">SFTP/Legacy</CardTitle>
              <CardDescription className="mb-2">
                Manual setups, hosted FTP
              </CardDescription>
              <p className="text-sm text-slate-600">
                Lacks governance, version control, and automation.
              </p>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-10">
            <div className="p-6 bg-white rounded-lg border">
              <p className="text-slate-800 text-lg">
                <strong>Solution:</strong> DataPorto is the single platform that
                orchestrates multi‑source, multi‑destination, client‑specific
                data sharing with built‑in governance and monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Share Data the Way Clients Expect It?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Deliver live, governed data to clients across Snowflake, Databricks,
            and sFTP — without the complexity of building and maintaining custom
            integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Sharing Data <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Anchor className="h-6 w-6" />
              <span className="text-xl font-bold">dataporto</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
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
