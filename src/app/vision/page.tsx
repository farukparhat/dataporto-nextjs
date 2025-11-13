"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  IconChevronLeft,
  IconChevronRight,
  IconPresentation,
  IconTarget,
  IconBulb,
  IconTrendingUp,
  IconUsers,
  IconCoin,
  IconRocket,
  IconEye,
  IconShare,
  IconDatabase,
  IconCloud,
  IconCheck,
  IconArrowRight,
} from "@tabler/icons-react";
import {
  SnowflakeIcon,
  DatabricksIcon,
  SftpIcon,
} from "@/components/brand-icons";

interface Slide {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export default function VisionPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: "title",
      title: "dataporto",
      icon: <IconPresentation className="h-6 w-6" />,
      content: (
        <div className="text-center space-y-6">
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight">
              dataporto
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-gray-600">
              Multi-Platform Data Sharing as a Service
            </p>
          </div>

          <div className="flex justify-center gap-6 opacity-80 pt-4">
            <SnowflakeIcon className="h-10 w-10" />
            <DatabricksIcon className="h-10 w-10" />
            <SftpIcon className="h-10 w-10" />
          </div>

          <div className="pt-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-blue-200 text-blue-700 bg-blue-50">
              Press Next <IconArrowRight className="ml-2 h-4 w-4" />
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "purpose",
      title: "Company Purpose",
      icon: <IconPresentation className="h-6 w-6" />,
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-6">
              <IconShare className="h-4 w-4 mr-2" />
              Data Sharing as a Service
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              dataporto enables SaaS companies to share governed, large-scale
              data with enterprise clients
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              via Snowflake, Databricks, or sFTP — without building or
              maintaining custom pipelines
            </p>
          </div>

          <div className="flex justify-center items-center gap-12 mt-12 opacity-80">
            <div className="flex flex-col items-center">
              <SnowflakeIcon className="h-12 w-12 mb-3" />
              <span className="text-sm text-gray-600 font-medium">
                Snowflake
              </span>
            </div>
            <div className="flex flex-col items-center">
              <DatabricksIcon className="h-12 w-12 mb-3" />
              <span className="text-sm text-gray-600 font-medium">
                Databricks
              </span>
            </div>
            <div className="flex flex-col items-center">
              <SftpIcon className="h-12 w-12 mb-3" />
              <span className="text-sm text-gray-600 font-medium">sFTP</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "problem",
      title: "Problem",
      icon: <IconTarget className="h-6 w-6" />,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Enterprise Data Delivery Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprises increasingly demand Snowflake or Databricks data
              shares as the default delivery method
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-800">APIs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700">
                  Brittle, expensive to integrate, not warehouse-native
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="text-orange-800">sFTP Feeds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700">
                  Fragile, insecure, difficult to maintain client-by-client
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <CardTitle className="text-yellow-800">
                  Custom Snowflake
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-700">
                  Heavy engineering overhead, slow to implement
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Result</h3>
            <p className="text-gray-700">
              Slow enterprise onboarding, lost deals, wasted engineering
              resources
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "solution",
      title: "Solution",
      icon: <IconBulb className="h-6 w-6" />,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4">
              <IconBulb className="h-4 w-4 mr-2" />
              dataporto Solution
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Data Sharing as a Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One platform to connect, catalog, share, and govern data across
              all enterprise platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center border-2 border-blue-200 bg-blue-50/50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <IconDatabase className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  Ingest directly from vendor databases, warehouses, or storage
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-green-200 bg-green-50/50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <IconEye className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Catalog</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm">
                  Define tables, views, schemas to expose
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-purple-200 bg-purple-50/50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <IconShare className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Share</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">
                  Provision Snowflake Shares, Databricks Delta Shares, or sFTP
                  feeds instantly
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-orange-200 bg-orange-50/50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <IconCheck className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-orange-800">Govern</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 text-sm">
                  Enforce permissions, masking, and audit logging
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Eureka Moment</h3>
            <p className="text-lg mb-4">
              Vendors can now deliver data the way enterprises expect — without
              engineering lift
            </p>
            <Badge variant="outline" className="border-white text-white">
              Control plane for cross-platform data sharing
            </Badge>
          </div>
        </div>
      ),
    },
    {
      id: "why-now",
      title: "Why Now",
      icon: <IconTrendingUp className="h-6 w-6" />,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Perfect Market Timing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The convergence of market forces creates unprecedented opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <IconTrendingUp className="h-5 w-5 mr-2" />
                  Snowflake & Databricks Exploding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Warehouse-native sharing is the new gold standard for
                  enterprise data consumption
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-800">
                  <IconCloud className="h-5 w-5 mr-2" />
                  Data Centralization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Enterprises consolidating all data into centralized warehouses
                  → demand frictionless integration
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-800">
                  <IconDatabase className="h-5 w-5 mr-2" />
                  Valuable SaaS Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  SaaS vendors producing more valuable, granular data than ever
                  → need delivery mechanism
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-800">
                  <IconBulb className="h-5 w-5 mr-2" />
                  Market Gap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  No purpose-built "data sharing as a service" platform exists —
                  until now
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "market",
      title: "Market Potential",
      icon: <IconUsers className="h-6 w-6" />,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Massive Market Opportunity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating a new category: Governed Data Sharing as a Service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-blue-800">
                  Initial Target Market
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    SaaS Vendors & Data Providers
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• CX platforms (Momos, Tattle, OfOne, Medallia)</li>
                    <li>• Analytics vendors</li>
                    <li>• Data marketplaces</li>
                    <li>• Agencies serving enterprise clients</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-800">Market Size</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    $20-30B+
                  </div>
                  <p className="text-sm text-gray-700">
                    Data integration / sharing market
                  </p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="text-sm text-green-800 font-medium text-center">
                    dataporto can create an entirely new category
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">
              Category Creation Opportunity
            </h3>
            <p className="text-lg">
              First-mover advantage in the "Governed Data Sharing as a Service"
              category
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "competition",
      title: "Competition",
      icon: <IconTarget className="h-6 w-6" />,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Competitive Landscape
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current alternatives fall short of enterprise requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-800 text-lg">APIs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-700">
                  Brittle, costly to maintain, not client-friendly
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="text-orange-800 text-lg">sFTP</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-orange-700">
                  Insecure, fragile, poor enterprise adoption
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <CardTitle className="text-yellow-800 text-lg">
                  Custom Setups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-yellow-700">
                  Heavy engineering burden for Snowflake/Databricks
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-gray-50/50">
              <CardHeader>
                <CardTitle className="text-gray-800 text-lg">
                  Adjacent Players
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  Fivetran, Hightouch focus on ingestion/activation, not
                  vendor-to-client sharing
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">dataporto Advantage</h3>
            <p className="text-lg">
              Only end-to-end service for SaaS-to-enterprise governed data
              sharing
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "business-model",
      title: "Business Model",
      icon: <IconCoin className="h-6 w-6" />,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Scalable SaaS Model
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Predictable pricing that scales with customer growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-blue-800">Pricing Model</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <IconCheck className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">SaaS subscription model</span>
                </div>
                <div className="flex items-center">
                  <IconCheck className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">
                    Based on number of client connections
                  </span>
                </div>
                <div className="flex items-center">
                  <IconCheck className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">
                    Number of data products shared
                  </span>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <p className="text-sm text-blue-800 font-medium">
                    Predictable for enterprises, scalable with vendor growth
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-800">
                  Expansion Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <IconArrowRight className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">
                    Premium governance features
                  </span>
                </div>
                <div className="flex items-center">
                  <IconArrowRight className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">
                    Advanced usage analytics
                  </span>
                </div>
                <div className="flex items-center">
                  <IconArrowRight className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">
                    Multi-platform connectors
                  </span>
                </div>
                <div className="flex items-center">
                  <IconArrowRight className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">White-label solutions</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "team",
      title: "Team",
      icon: <IconUsers className="h-6 w-6" />,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Experienced Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise in enterprise data sharing and vendor integrations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">
                  Faruk Parhat - Founder & CEO
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Director of Data Engineering, Restaurant Brands
                    International (RBI)
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <IconCheck className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">
                        Led <strong>80+ vendor integrations</strong> (APIs,
                        sFTP, Snowflake)
                      </span>
                    </div>
                    <div className="flex items-start">
                      <IconCheck className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">
                        Managed data engineering for{" "}
                        <strong>1,000+ stores</strong>
                      </span>
                    </div>
                    <div className="flex items-start">
                      <IconCheck className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">
                        Burger King, Popeyes, Tim Hortons, Firehouse Subs
                      </span>
                    </div>
                    <div className="flex items-start">
                      <IconCheck className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">
                        Microsoft alum, MIT background
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Advisory Network
                  </h4>
                  <p className="text-blue-700">
                    SaaS founders, Snowflake ecosystem leaders
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "financials",
      title: "Financials",
      icon: <IconCoin className="h-6 w-6" />,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Funding & Growth Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic funding to accelerate product development and market
              entry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-800">Current Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Pre-revenue
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Early conversations with design partners
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">
                    Design Partners
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Momos</Badge>
                    <Badge variant="outline">Tattle</Badge>
                    <Badge variant="outline">OfOne</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-blue-800">Planned Raise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    $1.2M
                  </div>
                  <p className="text-sm text-gray-700">Angel round</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-purple-200 bg-purple-50/50 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-purple-800">Use of Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <IconCheck className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-gray-700">
                      Product build (Snowflake + Databricks connectors)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <IconCheck className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-gray-700">SOC 2 compliance</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <IconCheck className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-gray-700">
                      Secure first 5–10 design partners
                    </span>
                  </div>
                  <div className="flex items-center">
                    <IconCheck className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-gray-700">
                      Launch GA + target $100K ARR within 12 months
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "vision",
      title: "Vision",
      icon: <IconRocket className="h-6 w-6" />,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Five-Year Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building the universal data sharing fabric for the enterprise
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Universal Data Sharing Fabric
                </h3>
                <p className="text-lg text-gray-700 text-center mb-6">
                  dataporto becomes the universal data sharing fabric for SaaS
                  vendors and data providers
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <IconCloud className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Multi-Platform
                    </h4>
                    <p className="text-sm text-gray-600">
                      Snowflake, Databricks, Postgres, S3, Redshift
                    </p>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg">
                    <IconUsers className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Default Choice
                    </h4>
                    <p className="text-sm text-gray-600">
                      Enterprises receive governed, zero-copy data feeds
                    </p>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg">
                    <IconRocket className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Category Leader
                    </h4>
                    <p className="text-sm text-gray-600">
                      Data integration, governance, and enterprise delivery
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white p-8 rounded-lg max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Category-Defining Opportunity
            </h3>
            <p className="text-lg mb-4">
              At the intersection of data integration, governance, and
              enterprise delivery
            </p>
            <Badge variant="outline" className="border-white text-white">
              The future of enterprise data sharing
            </Badge>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-50">
      {/* Top bar (minimal) */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto select-none">
          <span className="text-sm font-semibold text-gray-900">dataporto</span>
        </div>
        <div className="pointer-events-auto text-xs text-gray-600">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Slide canvas */}
      <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10">
        <div className="w-full max-w-6xl">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-[82vh] p-8 flex items-center justify-center overflow-hidden">
            <div className="w-full max-w-6xl">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay navigation */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="rounded-full bg-white/80 backdrop-blur border-gray-200"
        >
          <IconChevronLeft className="h-5 w-5" />
        </Button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <Button
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="rounded-full bg-blue-600 text-white hover:bg-blue-600/90"
        >
          <IconChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              currentSlide === index ? "bg-blue-600 w-6" : "bg-gray-300 w-2.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
