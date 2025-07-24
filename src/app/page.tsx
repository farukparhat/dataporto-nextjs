import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Database,
  Share2,
  Shield,
  Users,
  ArrowRight,
  Check,
  BarChart3,
  Cloud,
  Zap,
  Target,
  DollarSign,
  Lock,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Database className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900">DataPorto</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-slate-600 hover:text-slate-900">
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-slate-600 hover:text-slate-900"
            >
              How it Works
            </a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900">
              Pricing
            </a>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-4">
          Data Distribution Platform
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Make Your Data <span className="text-blue-600">Self-Serve</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
          Enable customers to set up and manage automated data feeds through
          their preferred protocols. No more brittle APIs or manual data
          exports.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8">
            Watch Demo
          </Button>
        </div>

        {/* Supported Protocols */}
        <div className="mt-16">
          <p className="text-slate-500 mb-6">
            Supported Data Sharing Protocols
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="text-sm py-2 px-4">
              Snowflake Data Share
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              Databricks Delta Share
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              sFTP / FTP
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              OneDrive
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              Google Drive
            </Badge>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Now?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Two major trends have converged to create the perfect opportunity
              for data distribution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="p-8">
              <Cloud className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">
                Cloud Data Warehouse Adoption
              </h3>
              <p className="text-slate-600">
                Enterprises have massively adopted cloud data warehouses like
                Snowflake, BigQuery, and Databricks. Data is no longer trapped
                in on-prem systems — it&apos;s queryable, scalable, and
                API-accessible.
              </p>
            </Card>

            <Card className="p-8">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">
                Real-time Data Collaboration Demand
              </h3>
              <p className="text-slate-600">
                The demand for real-time, governed data collaboration across
                organizations has exploded. The old way — APIs, CSVs, FTPs — is
                too slow, brittle, and insecure.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Badge variant="default" className="text-lg py-2 px-6">
              Now is the first time infrastructure, expectations, and
              opportunity have aligned
            </Badge>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <Target className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-3xl font-bold mb-4">For Investors</h3>
              <p className="text-lg text-slate-600">
                Data is the new API — and companies are realizing they
                can&apos;t build partnerships, revenue streams, or client
                stickiness without a data-sharing strategy. We&apos;re enabling
                the next layer of the cloud data stack:{" "}
                <strong>data distribution</strong>.
              </p>
            </div>

            <div>
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-3xl font-bold mb-4">For Customers</h3>
              <p className="text-lg text-slate-600">
                Clients expect self-serve, up-to-date data from vendors. Instead
                of building brittle APIs or dashboards, vendors can now offer{" "}
                <strong>direct, governed access to the raw truth</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              A multi-tenant SaaS platform for secure data sharing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vendors */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center text-2xl">
                  <Database className="h-8 w-8 text-blue-600 mr-3" />
                  Vendors (Your Customers)
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Upload or replicate their data into Snowflake
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Define what they want to share and with whom
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Monitor usage, revoke access, manage clients
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Clients */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center text-2xl">
                  <Users className="h-8 w-8 text-purple-600 mr-3" />
                  Clients (Data Consumers)
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Get secure, live, read-only access to data
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Access through their own Snowflake accounts
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Or via managed Reader Accounts
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-slate-600">
              Built on Snowflake&apos;s enterprise-grade infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="mb-2">Secure Sharing</CardTitle>
              <CardDescription>
                Zero-copy data sharing with enterprise-grade security
              </CardDescription>
            </Card>

            <Card className="p-6 text-center">
              <Lock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="mb-2">Fine-grained Access</CardTitle>
              <CardDescription>
                RBAC and schema-level access control per customer
              </CardDescription>
            </Card>

            <Card className="p-6 text-center">
              <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="mb-2">Usage Tracking</CardTitle>
              <CardDescription>
                Monitor compute usage and bill accordingly
              </CardDescription>
            </Card>

            <Card className="p-6 text-center">
              <Share2 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="mb-2">Marketplace Ready</CardTitle>
              <CardDescription>
                Publish datasets on Snowflake Data Exchange
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-slate-600">
              Enable various data monetization strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardTitle className="mb-3">B2B Analytics Platform</CardTitle>
              <CardDescription>
                Deliver insights/data directly into client Snowflake accounts
              </CardDescription>
            </Card>

            <Card className="p-6">
              <CardTitle className="mb-3">Data Aggregator</CardTitle>
              <CardDescription>
                Sell industry or benchmarking data to subscribers
              </CardDescription>
            </Card>

            <Card className="p-6">
              <CardTitle className="mb-3">API-less Reporting</CardTitle>
              <CardDescription>
                Offer data &quot;feeds&quot; to clients without building APIs
              </CardDescription>
            </Card>

            <Card className="p-6">
              <CardTitle className="mb-3">Data Monetization</CardTitle>
              <CardDescription>
                Let vendors resell their own data via your platform
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Flexible Pricing
            </h2>
            <p className="text-xl text-slate-600">
              Choose the model that works for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <CardTitle className="text-lg mb-2">Per Client Seat</CardTitle>
              <CardDescription>
                Charge vendors for each client they share with
              </CardDescription>
            </Card>

            <Card className="p-6 text-center">
              <Cloud className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <CardTitle className="text-lg mb-2">Storage & Compute</CardTitle>
              <CardDescription>Markup on infrastructure costs</CardDescription>
            </Card>

            <Card className="p-6 text-center">
              <Zap className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <CardTitle className="text-lg mb-2">Premium Features</CardTitle>
              <CardDescription>
                Alerts, dashboards, transformations
              </CardDescription>
            </Card>

            <Card className="p-6 text-center">
              <BarChart3 className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <CardTitle className="text-lg mb-2">Usage-based</CardTitle>
              <CardDescription>
                Based on query volume or rows scanned
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the next layer of the cloud data stack and enable seamless data
            distribution for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 text-white border-white hover:bg-white hover:text-blue-600"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Database className="h-6 w-6" />
              <span className="text-xl font-bold">DataPorto</span>
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
            © 2024 DataPorto. All rights reserved. Enabling the next layer of
            the cloud data stack.
          </p>
        </div>
      </footer>
    </div>
  );
}
