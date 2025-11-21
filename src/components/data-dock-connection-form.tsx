"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  SnowflakeIcon,
  DatabricksIcon,
  SftpIcon,
} from "@/components/brand-icons";

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

interface ConnectionConfig {
  snowflake: {
    account: string;
    warehouse: string;
    database: string;
    schema: string;
    role: string;
  };
  databricks: {
    workspace: string;
    catalog: string;
    schema: string;
    token: string;
  };
  sftp: {
    host: string;
    port: string;
    username: string;
    directory: string;
  };
}

interface DataDockConnectionFormProps {
  selectedConnectionType: "snowflake" | "databricks" | "sftp";
  setSelectedConnectionType: (
    type: "snowflake" | "databricks" | "sftp"
  ) => void;
  connectionConfig: ConnectionConfig;
  handleConfigChange: (type: string, field: string, value: string) => void;
}

export default function DataDockConnectionForm({
  selectedConnectionType,
  setSelectedConnectionType,
  connectionConfig,
  handleConfigChange,
}: DataDockConnectionFormProps) {
  return (
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
                  selectedConnectionType === option.id ? "secondary" : "outline"
                }
                className="ml-auto text-xs px-2 py-0"
              >
                {option.badge}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      {/* Connection Form Fields */}
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
                  handleConfigChange("snowflake", "warehouse", e.target.value)
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
                  handleConfigChange("snowflake", "database", e.target.value)
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
                  handleConfigChange("databricks", "workspace", e.target.value)
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
                  handleConfigChange("databricks", "catalog", e.target.value)
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
  );
}
