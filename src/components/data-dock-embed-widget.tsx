"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  IconFolder,
  IconDatabase,
  IconCheck,
  IconDownload,
} from "@tabler/icons-react";
import {
  SnowflakeIcon,
  DatabricksIcon,
  SftpIcon,
} from "@/components/brand-icons";
import Image from "next/image";

// Connection type options
const connectionOptions = [
  {
    id: "snowflake",
    title: "Snowflake",
    icon: <SnowflakeIcon className="h-4 w-4" size={16} />,
    badge: "Popular",
  },
  {
    id: "databricks",
    title: "Databricks",
    icon: <DatabricksIcon className="h-4 w-4" size={16} />,
  },
  {
    id: "sftp",
    title: "sFTP",
    icon: <SftpIcon className="h-4 w-4" size={16} />,
  },
];

import { Dataset } from "@/config/tenants";

// Sample datasets that clients can subscribe to (default fallback)
const sampleDatasets = [
  {
    id: "customer-analytics",
    name: "Customer Analytics",
    description: "Comprehensive customer behavior and interaction data",
    tables: ["customers", "interactions", "sessions", "events"],
    size: "2.4 GB",
    rows: "12.5M",
  },
  {
    id: "reviews",
    name: "Customer Reviews",
    description: "Customer feedback, ratings, and sentiment analysis",
    tables: ["reviews", "ratings", "sentiment", "feedback"],
    size: "1.2 GB",
    rows: "8.7M",
  },
  {
    id: "support-tickets",
    name: "Support Tickets",
    description: "Customer support interactions and resolution data",
    tables: ["tickets", "conversations", "resolutions", "agents"],
    size: "950 MB",
    rows: "3.2M",
  },
];

interface DataDockEmbedWidgetProps {
  brandLogo?: string;
  brandName?: string;
  datasets?: Dataset[];
  className?: string;
}

export default function DataDockEmbedWidget({
  brandLogo = "/brands/senti.png",
  brandName = "Senti",
  datasets,
  className = "",
}: DataDockEmbedWidgetProps) {
  const displayDatasets = datasets || sampleDatasets;
  const [selectedDatasets, setSelectedDatasets] = useState<string[]>([
    displayDatasets[0].id,
  ]);
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
    <div
      className={`bg-white border border-slate-200 rounded-xl shadow-lg p-8 ${className}`}
    >
      {/* Top - Custom Logo and Brand */}
      <div className="text-center mb-6">
        <div className="w-24 h-12 flex items-center justify-center mx-auto mb-4">
          <Image
            src={brandLogo}
            alt={brandName}
            width={144}
            height={26}
            className="h-auto p-2"
          />
        </div>
        <p className="text-xs text-slate-600">
          Self-Serve Data Access • Powered by Dataporto
        </p>
      </div>

      {/* Bottom - Two Pane Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bottom Left - Set up Connection */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-slate-900 mb-3">
            Set up Connection
          </h3>

          {/* Connection Type Selection */}
          <div className="space-y-2">
            {connectionOptions.map(option => (
              <Button
                key={option.id}
                variant={
                  selectedConnectionType === option.id ? "default" : "outline"
                }
                size="sm"
                onClick={() =>
                  setSelectedConnectionType(
                    option.id as "snowflake" | "databricks" | "sftp"
                  )
                }
                className="w-full flex items-center justify-start space-x-3 text-xs h-9 px-3"
                style={
                  selectedConnectionType === option.id
                    ? { backgroundColor: "#2970ff" }
                    : {}
                }
              >
                <div className="flex-shrink-0">{option.icon}</div>
                <span className="font-medium">{option.title}</span>
                {option.badge && (
                  <Badge
                    variant={
                      selectedConnectionType === option.id
                        ? "secondary"
                        : "outline"
                    }
                    className="ml-auto text-xs px-2 py-0"
                  >
                    {option.badge}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          {/* Connection Form */}
          <div className="space-y-2">
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
                      handleConfigChange("snowflake", "account", e.target.value)
                    }
                    className="h-7 text-xs"
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
                    className="h-7 text-xs"
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
                    className="h-7 text-xs"
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
                    className="h-7 text-xs"
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
                    className="h-7 text-xs"
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
                      handleConfigChange("databricks", "token", e.target.value)
                    }
                    className="h-7 text-xs"
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
                    className="h-7 text-xs"
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
                      handleConfigChange("sftp", "username", e.target.value)
                    }
                    className="h-7 text-xs"
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
                      handleConfigChange("sftp", "directory", e.target.value)
                    }
                    className="h-7 text-xs"
                  />
                </div>
              </>
            )}

            <Button
              className="w-full h-7 text-xs"
              style={{ backgroundColor: "#2970ff" }}
            >
              Test Connection
            </Button>
          </div>
        </div>

        {/* Bottom Right - Choose Schema/Tables */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-slate-900 mb-3">
            Choose Schema & Tables
          </h3>

          {/* Hierarchical Schema/Table View */}
          <div className="space-y-1">
            {displayDatasets.map(dataset => (
              <div key={dataset.id} className="space-y-1">
                {/* Schema Level */}
                <div
                  className={`p-2 border rounded cursor-pointer transition-all ${
                    selectedDatasets.includes(dataset.id)
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                  onClick={() => toggleDatasetSelection(dataset.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <IconFolder className="h-3 w-3 text-slate-500" />
                      <span className="text-xs font-medium whitespace-nowrap">
                        {dataset.name}
                      </span>
                      <Badge variant="outline" className="text-xs px-1 py-0">
                        {dataset.rows} rows
                      </Badge>
                      <Badge variant="secondary" className="text-xs px-1 py-0">
                        {dataset.size}
                      </Badge>
                    </div>
                    <div className="flex items-center">
                      {selectedDatasets.includes(dataset.id) ? (
                        <IconCheck className="h-3 w-3 text-blue-600" />
                      ) : (
                        <div className="h-3 w-3 border rounded border-slate-300" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Tables Level (shown when schema is selected or expanded) */}
                {selectedDatasets.includes(dataset.id) && (
                  <div className="ml-4 space-y-1">
                    {dataset.tables.map(table => (
                      <div
                        key={table}
                        className="flex items-center space-x-2 p-1 rounded hover:bg-slate-50"
                      >
                        <IconDatabase className="h-3 w-3 text-slate-400" />
                        <span className="text-xs text-slate-600">{table}</span>
                        <IconCheck className="h-3 w-3 text-green-600 ml-auto" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {selectedDatasets.length > 0 && (
            <div className="mt-3 pt-3 border-t">
              <div className="space-y-2">
                <p className="text-xs font-medium">
                  {selectedDatasets.length} schema
                  {selectedDatasets.length > 1 ? "s" : ""} selected
                </p>
                <p className="text-xs text-slate-600">
                  All tables in selected schemas will be available
                </p>
                <Button
                  size="sm"
                  style={{ backgroundColor: "#2970ff" }}
                  className="w-full h-7 text-xs"
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
  );
}
