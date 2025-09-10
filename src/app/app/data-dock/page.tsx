"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  IconAnchor,
  IconServer,
  IconCloud,
  IconDatabase,
  IconFolder,
  IconUsers,
  IconSettings,
  IconEye,
  IconCode,
  IconShare,
  IconPlug,
  IconClock,
  IconShield,
  IconCheck,
  IconExternalLink,
  IconCopy,
  IconDownload,
  IconRefresh,
} from "@tabler/icons-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import AnimatedTabs, { TabOption } from "@/components/ui/tabs-animated";

// Connection type options for the tabs
const connectionOptions: TabOption[] = [
  {
    id: "snowflake",
    title: "Snowflake",
    subtitle: "Data Warehouse",
    icon: <IconCloud className="h-6 w-6" />,
    badge: "Popular",
    description:
      "Connect directly to Snowflake data warehouse for real-time data sharing through native sharing capabilities.",
    features: [
      "Real-time data access",
      "Zero-copy data sharing",
      "Enterprise security",
      "Query-based access control",
      "Cross-cloud compatibility",
    ],
    bestFor:
      "Enterprise clients with existing Snowflake infrastructure looking for instant, secure data access.",
    color: "blue",
    metrics: {
      "Setup Time": "< 5 minutes",
      "Data Latency": "Real-time",
      "Security Level": "Enterprise-grade",
    },
  },
  {
    id: "databricks",
    title: "Databricks",
    subtitle: "Lakehouse Platform",
    icon: <IconDatabase className="h-6 w-6" />,
    description:
      "Connect to Databricks Unity Catalog for unified data and AI platform integration.",
    features: [
      "Unity Catalog integration",
      "Delta Sharing protocol",
      "ML-ready data formats",
      "Column-level security",
      "Cross-platform sharing",
    ],
    bestFor:
      "Data science teams and organizations building ML pipelines on Databricks platform.",
    color: "orange",
    metrics: {
      "Setup Time": "< 10 minutes",
      "Data Latency": "Near real-time",
      "ML Integration": "Native",
    },
  },
  {
    id: "sftp",
    title: "sFTP",
    subtitle: "Secure File Transfer",
    icon: <IconServer className="h-6 w-6" />,
    description:
      "Secure file transfer protocol for clients who prefer file-based data delivery with scheduled exports.",
    features: [
      "Encrypted file transfer",
      "Scheduled deliveries",
      "Multiple file formats",
      "Compression options",
      "Delivery confirmations",
    ],
    bestFor:
      "Traditional enterprises with existing file processing workflows and compliance requirements.",
    color: "green",
    metrics: {
      "Setup Time": "< 15 minutes",
      "Delivery Schedule": "Configurable",
      "File Formats": "CSV, JSON, Parquet",
    },
  },
];

// Sample datasets that clients can subscribe to
const sampleDatasets = [
  {
    id: "customer-analytics",
    name: "Customer Analytics",
    description: "Comprehensive customer behavior and transaction data",
    tables: ["customers", "transactions", "sessions", "events"],
    updateFrequency: "Real-time",
    size: "2.4 GB",
  },
  {
    id: "product-catalog",
    name: "Product Catalog",
    description: "Complete product information, pricing, and inventory",
    tables: ["products", "categories", "pricing", "inventory"],
    updateFrequency: "Daily",
    size: "850 MB",
  },
  {
    id: "financial-reports",
    name: "Financial Reports",
    description: "Aggregated financial metrics and KPIs",
    tables: ["revenue", "costs", "margins", "forecasts"],
    updateFrequency: "Weekly",
    size: "120 MB",
  },
];

export default function DataDockPage() {
  const [previewMode, setPreviewMode] = useState<"vendor" | "client">("vendor");
  const [selectedDatasets, setSelectedDatasets] = useState<string[]>([]);
  const [connectionConfig, setConnectionConfig] = useState({
    snowflake: {
      account: "",
      warehouse: "",
      database: "",
      schema: "",
      role: "",
    },
    databricks: {
      workspace: "",
      catalog: "",
      schema: "",
      token: "",
    },
    sftp: {
      host: "",
      port: "22",
      username: "",
      directory: "/data-shares",
    },
  });

  const toggleDatasetSelection = (datasetId: string) => {
    setSelectedDatasets(prev =>
      prev.includes(datasetId)
        ? prev.filter(id => id !== datasetId)
        : [...prev, datasetId]
    );
  };

  const handleConfigChange = (type: string, field: string, value: string) => {
    setConnectionConfig(prev => ({
      ...prev,
      [type]: {
        ...prev[type as keyof typeof prev],
        [field]: value,
      },
    }));
  };

  const generateEmbedCode = () => {
    return `<iframe
  src="https://dataporto.com/embed/data-dock/demo-vendor"
  width="100%"
  height="600"
  frameborder="0"
  style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
></iframe>`;
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <SidebarTrigger className="md:hidden" />
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <IconAnchor className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-slate-900">
                  Data Dock
                </h1>
                <p className="text-slate-600">
                  Self-serve data sharing portal for your enterprise clients
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="text-green-700 bg-green-50">
              <IconCheck className="h-4 w-4 mr-1" />
              Active
            </Badge>
            <Button variant="outline" size="sm">
              <IconSettings className="h-4 w-4 mr-2" />
              Configure
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Clients
              </CardTitle>
              <IconUsers className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-slate-600">+3 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Data Subscriptions
              </CardTitle>
              <IconFolder className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-slate-600">across all datasets</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Connection Types
              </CardTitle>
              <IconPlug className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-slate-600">
                Snowflake, Databricks, sFTP
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg Setup Time
              </CardTitle>
              <IconClock className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8m</div>
              <p className="text-xs text-slate-600">
                from start to data access
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Preview Mode Toggle */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <IconEye className="h-5 w-5 mr-2" />
                  Data Dock Preview
                </CardTitle>
                <CardDescription>
                  {previewMode === "vendor"
                    ? "Vendor management view - configure and monitor your Data Dock"
                    : "Client experience preview - see how your enterprise clients will interact with your data"}
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant={previewMode === "vendor" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPreviewMode("vendor")}
                >
                  Vendor View
                </Button>
                <Button
                  variant={previewMode === "client" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPreviewMode("client")}
                >
                  Client Preview
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {previewMode === "vendor" ? (
          /* Vendor Management View */
          <div className="space-y-8">
            {/* Embedding Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <IconCode className="h-5 w-5 mr-2" />
                  Embed Data Dock
                </CardTitle>
                <CardDescription>
                  Embed this Data Dock portal into your customer dashboard or
                  portal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Embed Code
                    </label>
                    <div className="relative">
                      <pre className="bg-slate-50 p-4 rounded-lg text-sm overflow-x-auto">
                        <code>{generateEmbedCode()}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2"
                        onClick={() =>
                          navigator.clipboard.writeText(generateEmbedCode())
                        }
                      >
                        <IconCopy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <IconShield className="h-4 w-4" />
                    <span>
                      Secure, branded, and customizable for your clients
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dataset Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <IconFolder className="h-5 w-5 mr-2" />
                  Available Datasets
                </CardTitle>
                <CardDescription>
                  Manage which datasets your clients can subscribe to
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sampleDatasets.map(dataset => (
                    <div
                      key={dataset.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium">{dataset.name}</h4>
                          <Badge variant="outline">
                            {dataset.updateFrequency}
                          </Badge>
                          <Badge variant="secondary">{dataset.size}</Badge>
                        </div>
                        <p className="text-sm text-slate-600 mt-1">
                          {dataset.description}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-xs text-slate-500">
                            Tables:
                          </span>
                          {dataset.tables.map(table => (
                            <Badge
                              key={table}
                              variant="outline"
                              className="text-xs"
                            >
                              {table}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <IconSettings className="h-4 w-4" />
                        </Button>
                        <Button variant="default" size="sm">
                          <IconShare className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Client Experience Preview */
          <div className="max-w-4xl mx-auto">
            <Card className="mb-6">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconAnchor className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">
                  Welcome to Demo Vendor's Data Dock
                </CardTitle>
                <CardDescription className="text-lg">
                  Connect your data warehouse and subscribe to datasets in
                  minutes
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Connection Setup */}
            <AnimatedTabs
              options={connectionOptions}
              defaultTab="snowflake"
              className="mb-8"
            >
              {activeOption => (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {activeOption.icon}
                      <span className="ml-2">Connect {activeOption.title}</span>
                    </CardTitle>
                    <CardDescription>
                      {activeOption.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Connection Form */}
                      <div className="space-y-4">
                        <h4 className="font-medium">Connection Details</h4>
                        {activeOption.id === "snowflake" && (
                          <div className="space-y-3">
                            <div>
                              <label className="text-sm font-medium mb-1 block">
                                Account Identifier
                              </label>
                              <Input
                                placeholder="your-account.snowflakecomputing.com"
                                value={connectionConfig.snowflake.account}
                                onChange={e =>
                                  handleConfigChange(
                                    "snowflake",
                                    "account",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-1 block">
                                Warehouse
                              </label>
                              <Input
                                placeholder="COMPUTE_WH"
                                value={connectionConfig.snowflake.warehouse}
                                onChange={e =>
                                  handleConfigChange(
                                    "snowflake",
                                    "warehouse",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-1 block">
                                Database
                              </label>
                              <Input
                                placeholder="ANALYTICS_DB"
                                value={connectionConfig.snowflake.database}
                                onChange={e =>
                                  handleConfigChange(
                                    "snowflake",
                                    "database",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-1 block">
                                Schema
                              </label>
                              <Input
                                placeholder="PUBLIC"
                                value={connectionConfig.snowflake.schema}
                                onChange={e =>
                                  handleConfigChange(
                                    "snowflake",
                                    "schema",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-1 block">
                                Role
                              </label>
                              <Input
                                placeholder="ANALYST"
                                value={connectionConfig.snowflake.role}
                                onChange={e =>
                                  handleConfigChange(
                                    "snowflake",
                                    "role",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                        )}

                        {activeOption.id === "databricks" && (
                          <div className="space-y-3">
                            <div>
                              <label className="text-sm font-medium mb-1 block">
                                Workspace URL
                              </label>
                              <Input
                                placeholder="https://your-workspace.cloud.databricks.com"
                                value={connectionConfig.databricks.workspace}
                                onChange={e =>
                                  handleConfigChange(
                                    "databricks",
                                    "workspace",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-1 block">
                                Catalog
                              </label>
                              <Input
                                placeholder="main"
                                value={connectionConfig.databricks.catalog}
                                onChange={e =>
                                  handleConfigChange(
                                    "databricks",
                                    "catalog",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-1 block">
                                Schema
                              </label>
                              <Input
                                placeholder="analytics"
                                value={connectionConfig.databricks.schema}
                                onChange={e =>
                                  handleConfigChange(
                                    "databricks",
                                    "schema",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-1 block">
                                Personal Access Token
                              </label>
                              <Input
                                type="password"
                                placeholder="dapi••••••••••••"
                                value={connectionConfig.databricks.token}
                                onChange={e =>
                                  handleConfigChange(
                                    "databricks",
                                    "token",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                        )}

                        {activeOption.id === "sftp" && (
                          <div className="space-y-3">
                            <div>
                              <label className="text-sm font-medium mb-1 block">
                                Host
                              </label>
                              <Input
                                placeholder="sftp.yourcompany.com"
                                value={connectionConfig.sftp.host}
                                onChange={e =>
                                  handleConfigChange(
                                    "sftp",
                                    "host",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-1 block">
                                Port
                              </label>
                              <Input
                                placeholder="22"
                                value={connectionConfig.sftp.port}
                                onChange={e =>
                                  handleConfigChange(
                                    "sftp",
                                    "port",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-1 block">
                                Username
                              </label>
                              <Input
                                placeholder="data_client"
                                value={connectionConfig.sftp.username}
                                onChange={e =>
                                  handleConfigChange(
                                    "sftp",
                                    "username",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-1 block">
                                Directory Path
                              </label>
                              <Input
                                placeholder="/data-shares"
                                value={connectionConfig.sftp.directory}
                                onChange={e =>
                                  handleConfigChange(
                                    "sftp",
                                    "directory",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                        )}

                        <Button
                          className="w-full"
                          style={{ backgroundColor: "#2970ff" }}
                        >
                          Test Connection
                        </Button>
                      </div>

                      {/* Metrics and Info */}
                      <div className="space-y-4">
                        <h4 className="font-medium">Connection Overview</h4>
                        {activeOption.metrics && (
                          <div className="space-y-3">
                            {Object.entries(activeOption.metrics).map(
                              ([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span className="text-sm text-slate-600">
                                    {key}
                                  </span>
                                  <span className="text-sm font-medium">
                                    {value}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        )}
                        <Separator />
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium">Features</h5>
                          {activeOption.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center text-sm"
                            >
                              <IconCheck className="h-4 w-4 text-green-600 mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </AnimatedTabs>

            {/* Dataset Subscription */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <IconFolder className="h-5 w-5 mr-2" />
                  Subscribe to Datasets
                </CardTitle>
                <CardDescription>
                  Select the datasets you want to access through your connection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sampleDatasets.map(dataset => (
                    <div
                      key={dataset.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedDatasets.includes(dataset.id)
                          ? "border-blue-500 bg-blue-50"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                      onClick={() => toggleDatasetSelection(dataset.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h4 className="font-medium">{dataset.name}</h4>
                            <Badge variant="outline">
                              {dataset.updateFrequency}
                            </Badge>
                            <Badge variant="secondary">{dataset.size}</Badge>
                          </div>
                          <p className="text-sm text-slate-600 mt-1">
                            {dataset.description}
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-xs text-slate-500">
                              Includes:
                            </span>
                            {dataset.tables.map(table => (
                              <Badge
                                key={table}
                                variant="outline"
                                className="text-xs"
                              >
                                {table}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center">
                          {selectedDatasets.includes(dataset.id) ? (
                            <IconCheck className="h-5 w-5 text-blue-600" />
                          ) : (
                            <div className="h-5 w-5 border rounded border-slate-300" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedDatasets.length > 0 && (
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">
                          {selectedDatasets.length} dataset
                          {selectedDatasets.length > 1 ? "s" : ""} selected
                        </p>
                        <p className="text-sm text-slate-600">
                          Data will be available in your warehouse within
                          minutes
                        </p>
                      </div>
                      <Button style={{ backgroundColor: "#2970ff" }}>
                        <IconDownload className="h-4 w-4 mr-2" />
                        Subscribe & Connect
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </>
  );
}
