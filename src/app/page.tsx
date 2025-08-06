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
import FlowDiagram from "@/components/FlowDiagram";
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
  Building2,
  FileText,
  Globe,
  Lock,
  TrendingUp,
  Server,
  HardDrive,
  FolderOpen,
  Folder,
} from "lucide-react";
import { DataBricks, Snowflake } from "@/components/brand-icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-slate-900">Dataporto</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#how-it-works"
              className="text-slate-600 hover:text-slate-900"
            >
              How it Works
            </a>
            <a
              href="#ideal-for"
              className="text-slate-600 hover:text-slate-900"
            >
              Ideal For
            </a>
            <a
              href="#why-dataporto"
              className="text-slate-600 hover:text-slate-900"
            >
              Why Dataporto?
            </a>
          </nav>
          <Button>Schedule a Demo</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-4">
          <Share2 className="h-4 w-4 mr-2" />
          Multi-Platform Data Sharing as a Service
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          The Fastest, Easiest, and Most Secure Way to Share Live Data with
          Clients
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto">
          <strong>
            Dataporto delivers multi-platform data sharing as a service
          </strong>{" "}
          — securely share live data with your clients through Snowflake, sFTP,
          or Databricks without building or maintaining custom pipelines.
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
            Schedule a Demo
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
                Dataporto enables you to serve your data to your clients whether
                it&apos;s through sFTP, Snowflake Data Sharing, or Databricks.
                This saves you much needed engineering time to focus on higher
                valued activities rather than building and maintaining custom
                client data sharing pipelines.
                <br />
                <br />
                This is the true value of Dataporto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section id="why-now" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Now?</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg max-w-4xl mx-auto border-l-4 border-blue-500">
              <p className="text-2xl font-semibold text-slate-800 italic">
                &quot;Enterprise clients are demanding flexible, secure data
                sharing options that fit their existing infrastructure.&quot;
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Modern enterprises use diverse data platforms — Snowflake,
              Databricks, traditional file systems, and more. If you can&apos;t
              deliver data in their preferred format, you&apos;re falling behind
              competitors who can.
            </p>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Dataporto gives you{" "}
              <strong>
                enterprise-level data sharing capabilities across multiple
                platforms
              </strong>{" "}
              — without requiring you to build or maintain complex integrations
              yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section id="ideal-for" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Ideal For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="mb-3">SaaS Vendors</CardTitle>
              <CardDescription className="text-base">
                Delivering customer-level analytics or reports to enterprise
                clients
              </CardDescription>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle className="mb-3">Agencies</CardTitle>
              <CardDescription className="text-base">
                Providing live dashboards or metrics to clients without building
                complex infrastructure
              </CardDescription>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle className="mb-3">Franchisors & Platforms</CardTitle>
              <CardDescription className="text-base">
                Data-rich marketplaces needing to share operational data with
                partners
              </CardDescription>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-orange-600 mb-4" />
              <CardTitle className="mb-3">Data Providers</CardTitle>
              <CardDescription className="text-base">
                Selling access to curated data products and industry datasets
              </CardDescription>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Share2 className="h-12 w-12 text-indigo-600 mb-4" />
              <CardTitle className="mb-3">
                Multi-Platform Organizations
              </CardTitle>
              <CardDescription className="text-base">
                Organizations with clients across different data platforms and
                infrastructure needs
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* What Dataporto Does */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What Does Dataporto Do?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="p-8">
                <div className="flex items-center mb-4">
                  <Database className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Connect Your Data</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Connect your existing data source:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Postgres, MySQL
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Snowflake, Databricks, Redshift
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    BigQuery, S3, and more
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Define What to Share
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Define what data to share:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Tables, views, schemas
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Reports and analytics
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <div className="flex items-center mb-4">
                  <Share2 className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Choose Delivery Method
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Select your client&apos;s preferred platform:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Snowflake Data Shares
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    sFTP transfers
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Databricks connectivity
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  We Handle the Rest
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-slate-700">
                      Secure data staging and transformation
                    </p>
                  </div>
                  <div>
                    <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-slate-700">
                      Platform-specific provisioning and access management
                    </p>
                  </div>
                  <div>
                    <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-slate-700">
                      Automated data delivery in your client&apos;s preferred
                      format
                    </p>
                  </div>
                  <div>
                    <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-slate-700">
                      Governance, monitoring, and audit logging
                    </p>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-white rounded-lg border">
                  <p className="text-lg font-semibold text-slate-800">
                    Result:{" "}
                    <span className="text-blue-600">
                      Your clients get live data access
                    </span>{" "}
                    in their platform of choice
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Use Dataporto */}
      <section id="why-dataporto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Use Dataporto?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center space-x-2 mb-4">
                <Snowflake className="h-8 w-8 text-blue-600" />
                <Server className="h-8 w-8 text-orange-600" />
                <HardDrive className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="mb-2">Multi-Platform Support</CardTitle>
              <CardDescription>
                Snowflake Data Sharing, sFTP, Databricks — deliver data how your
                clients want it
              </CardDescription>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <CardTitle className="mb-2">Zero-Code Onboarding</CardTitle>
              <CardDescription>
                Get started quickly without complex technical setup or
                development
              </CardDescription>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="mb-2">Live Data Feeds</CardTitle>
              <CardDescription>
                Share real-time data — not static files or limited dashboards
              </CardDescription>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <CardTitle className="mb-2">Enterprise Expectations</CardTitle>
              <CardDescription>
                Meet client demands for secure, governed data sharing
              </CardDescription>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Lock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="mb-2">Full Governance</CardTitle>
              <CardDescription>
                Complete governance and audit logging for compliance and
                security
              </CardDescription>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="mb-2">Multi-Client Support</CardTitle>
              <CardDescription>
                Support multiple clients with unique permissions and delivery
                preferences
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* What Dataporto Manages */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What Dataporto Manages for You
            </h2>
            <p className="text-xl text-slate-600">
              Complete end-to-end multi-platform data sharing infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6">
              <Database className="h-8 w-8 text-blue-600 mb-3" />
              <CardTitle className="text-lg mb-2">Data Ingestion</CardTitle>
              <CardDescription>
                Secure data ingestion from your existing systems
              </CardDescription>
            </Card>

            <Card className="p-6">
              <Cloud className="h-8 w-8 text-indigo-600 mb-3" />
              <CardTitle className="text-lg mb-2">
                Multi-Platform Staging
              </CardTitle>
              <CardDescription>
                Multi-platform data staging and transformation
              </CardDescription>
            </Card>

            <Card className="p-6">
              <Share2 className="h-8 w-8 text-green-600 mb-3" />
              <CardTitle className="text-lg mb-2">Platform Delivery</CardTitle>
              <CardDescription>
                Platform-specific delivery mechanisms (Snowflake Shares, sFTP,
                Databricks)
              </CardDescription>
            </Card>

            <Card className="p-6">
              <Users className="h-8 w-8 text-purple-600 mb-3" />
              <CardTitle className="text-lg mb-2">Client Management</CardTitle>
              <CardDescription>
                Client provisioning and access management
              </CardDescription>
            </Card>

            <Card className="p-6">
              <Shield className="h-8 w-8 text-red-600 mb-3" />
              <CardTitle className="text-lg mb-2">Access Control</CardTitle>
              <CardDescription>
                Access control, masking, and data partitioning
              </CardDescription>
            </Card>

            <Card className="p-6">
              <FileText className="h-8 w-8 text-orange-600 mb-3" />
              <CardTitle className="text-lg mb-2">Usage Tracking</CardTitle>
              <CardDescription>
                Usage tracking and comprehensive audit logs
              </CardDescription>
            </Card>
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
            Join forward-thinking organizations who are already using our
            multi-platform data sharing service to deliver live, governed data
            to their clients across Snowflake, Databricks, and sFTP — without
            the complexity of building and maintaining custom integrations.
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
              <Database className="h-6 w-6" />
              <span className="text-xl font-bold">Dataporto</span>
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
            © 2025 Dataporto. All rights reserved. Multi-Platform Data Sharing
            as a Service.
          </p>
        </div>
      </footer>
    </div>
  );
}
