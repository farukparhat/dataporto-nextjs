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
  IconPlug,
  IconClock,
  IconShield,
  IconCheck,
  IconDownload,
  IconRefresh,
} from "@tabler/icons-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

// Connection type options
const connectionOptions = [
  {
    id: "snowflake",
    title: "Snowflake",
    icon: <IconCloud className="h-4 w-4" />,
    badge: "Popular",
  },
  {
    id: "databricks",
    title: "Databricks",
    icon: <IconDatabase className="h-4 w-4" />,
  },
  {
    id: "sftp",
    title: "sFTP",
    icon: <IconServer className="h-4 w-4" />,
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
  const [selectedDatasets, setSelectedDatasets] = useState<string[]>([]);
  const [selectedConnectionType, setSelectedConnectionType] = useState<
    "snowflake" | "databricks" | "sftp"
  >("snowflake");
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

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <SidebarTrigger className="md:hidden" />
            <div className="flex items-center space-x-3">
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
        {/* Embedded Data Dock Widget */}
        <div className="max-w-2xl mx-auto">
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 bg-slate-50/50">
            <div className="text-center mb-4">
              <p className="text-sm text-slate-500 mb-2">
                Embedded Data Dock Widget
              </p>
              <div className="w-full h-px bg-slate-300"></div>
            </div>

            {/* Single Embedded Component */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6">
              {/* Top - Custom Logo and Brand */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <IconAnchor className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-1">
                  Demo Vendor
                </h2>
                <p className="text-sm text-slate-600">
                  Data Dock - Self-Serve Data Access
                </p>
              </div>

              {/* Middle - Connect via Snowflake, Databricks, or sFTP */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-slate-900 mb-3">
                  Connect Your Data Warehouse
                </h3>

                {/* Connection Type Selection */}
                <div className="flex space-x-2 mb-4">
                  {connectionOptions.map(option => (
                    <Button
                      key={option.id}
                      variant={
                        selectedConnectionType === option.id
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() =>
                        setSelectedConnectionType(
                          option.id as "snowflake" | "databricks" | "sftp"
                        )
                      }
                      className="flex items-center space-x-1 text-xs"
                    >
                      {option.icon}
                      <span>{option.title}</span>
                      {option.badge && (
                        <Badge
                          variant="secondary"
                          className="ml-1 text-xs px-1 py-0"
                        >
                          {option.badge}
                        </Badge>
                      )}
                    </Button>
                  ))}
                </div>

                {/* Connection Form */}
                <div className="space-y-3">
                  {selectedConnectionType === "snowflake" && (
                    <>
                      <div>
                        <label className="text-xs font-medium mb-1 block text-slate-700">
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
                          className="h-8 text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium mb-1 block text-slate-700">
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
                          className="h-8 text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium mb-1 block text-slate-700">
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
                          className="h-8 text-sm"
                        />
                      </div>
                    </>
                  )}

                  {selectedConnectionType === "databricks" && (
                    <>
                      <div>
                        <label className="text-xs font-medium mb-1 block text-slate-700">
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
                          className="h-8 text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium mb-1 block text-slate-700">
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
                          className="h-8 text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium mb-1 block text-slate-700">
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
                          className="h-8 text-sm"
                        />
                      </div>
                    </>
                  )}

                  {selectedConnectionType === "sftp" && (
                    <>
                      <div>
                        <label className="text-xs font-medium mb-1 block text-slate-700">
                          Host
                        </label>
                        <Input
                          placeholder="sftp.yourcompany.com"
                          value={connectionConfig.sftp.host}
                          onChange={e =>
                            handleConfigChange("sftp", "host", e.target.value)
                          }
                          className="h-8 text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium mb-1 block text-slate-700">
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
                          className="h-8 text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium mb-1 block text-slate-700">
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
                          className="h-8 text-sm"
                        />
                      </div>
                    </>
                  )}

                  <Button
                    className="w-full h-8 text-sm"
                    style={{ backgroundColor: "#2970ff" }}
                  >
                    Test Connection
                  </Button>
                </div>
              </div>

              {/* Bottom - Choose Tables */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 mb-3">
                  Choose Tables to Access
                </h3>

                <div className="space-y-2">
                  {sampleDatasets.map(dataset => (
                    <div
                      key={dataset.id}
                      className={`p-3 border rounded cursor-pointer transition-all ${
                        selectedDatasets.includes(dataset.id)
                          ? "border-blue-500 bg-blue-50"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                      onClick={() => toggleDatasetSelection(dataset.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="text-sm font-medium">
                              {dataset.name}
                            </h4>
                            <Badge variant="outline" className="text-xs">
                              {dataset.updateFrequency}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {dataset.size}
                            </Badge>
                          </div>
                          <p className="text-xs text-slate-600 mt-1">
                            {dataset.description}
                          </p>
                          <div className="flex items-center space-x-1 mt-1">
                            <span className="text-xs text-slate-500">
                              Tables:
                            </span>
                            {dataset.tables.map(table => (
                              <Badge
                                key={table}
                                variant="outline"
                                className="text-xs px-1 py-0"
                              >
                                {table}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center">
                          {selectedDatasets.includes(dataset.id) ? (
                            <IconCheck className="h-4 w-4 text-blue-600" />
                          ) : (
                            <div className="h-4 w-4 border rounded border-slate-300" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedDatasets.length > 0 && (
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">
                          {selectedDatasets.length} dataset
                          {selectedDatasets.length > 1 ? "s" : ""} selected
                        </p>
                        <p className="text-xs text-slate-600">
                          Data will be available in your warehouse within
                          minutes
                        </p>
                      </div>
                      <Button
                        size="sm"
                        style={{ backgroundColor: "#2970ff" }}
                        className="h-8 text-xs"
                      >
                        <IconDownload className="h-3 w-3 mr-1" />
                        Subscribe & Connect
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
