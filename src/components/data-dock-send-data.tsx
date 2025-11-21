"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  IconFolder,
  IconDatabase,
  IconCheck,
  IconUpload,
  IconLock,
} from "@tabler/icons-react";
import {
  SnowflakeIcon,
  DatabricksIcon,
  SftpIcon,
} from "@/components/brand-icons";
import { Dataset } from "@/config/tenants";

interface ActiveConnection {
  id: string;
  name: string;
  type: "snowflake" | "databricks" | "sftp";
  status: "active" | "inactive";
  lastSync?: string;
}

interface DataDockSendDataProps {
  customerDatasets: Dataset[];
  selectedCustomerDatasets: string[];
  expandedCustomerDatasets: string[];
  toggleCustomerDatasetSelection: (datasetId: string) => void;
  toggleCustomerDatasetExpansion: (datasetId: string) => void;
}

// Mock active connections
const activeConnections: ActiveConnection[] = [
  {
    id: "snowflake-prod",
    name: "Snowflake Production",
    type: "snowflake",
    status: "active",
    lastSync: "2h ago",
  },
];

export default function DataDockSendData({
  customerDatasets,
  selectedCustomerDatasets,
  expandedCustomerDatasets,
  toggleCustomerDatasetSelection,
  toggleCustomerDatasetExpansion,
}: DataDockSendDataProps) {
  const [selectedConnection, setSelectedConnection] =
    useState<ActiveConnection | null>(null);

  const getConnectionIcon = (type: string) => {
    switch (type) {
      case "snowflake":
        return <SnowflakeIcon className="h-4 w-4" size={16} />;
      case "databricks":
        return <DatabricksIcon className="h-4 w-4" size={16} />;
      case "sftp":
        return <SftpIcon className="h-4 w-4" size={16} />;
      default:
        return <IconDatabase className="h-4 w-4" />;
    }
  };

  return (
    <>
      {/* Left Column - Active Connections & Shares */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-slate-900 mb-3">
          Active Connections
        </h3>

        {/* Active Connections List */}
        <div className="space-y-1.5">
          {activeConnections.map(connection => (
            <div
              key={connection.id}
              className={`p-2 border rounded cursor-pointer transition-all ${
                selectedConnection?.id === connection.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
              }`}
              onClick={() => setSelectedConnection(connection)}
            >
              <div className="flex items-center space-x-2 min-w-0">
                <div className="flex-shrink-0">
                  {getConnectionIcon(connection.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-900 truncate">
                    {connection.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          className="w-full h-8 text-xs"
          onClick={() => {
            /* Handle new connection */
          }}
        >
          + Add New Connection
        </Button>

        {/* Active Data Shares Section */}
        <div className="mt-6 pt-6 border-t">
          <h4 className="text-sm font-medium text-slate-900 mb-3">
            Active Data Shares
          </h4>
          <div className="space-y-1.5">
            <div
              className="p-2 border border-slate-200 rounded bg-slate-50 hover:border-slate-300 hover:bg-slate-100 cursor-pointer transition-all"
              onClick={() => console.log("Clicked Guest Order History share")}
            >
              <div className="flex items-center justify-between min-w-0">
                <div className="flex items-center space-x-2 min-w-0 flex-1">
                  <IconFolder className="h-3 w-3 flex-shrink-0 text-slate-500" />
                  <span className="text-xs font-medium text-slate-700 truncate">
                    Guest Order History
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-slate-500 ml-2">
                  <SnowflakeIcon className="h-3 w-3 flex-shrink-0" size={12} />
                  <span className="whitespace-nowrap">2h ago</span>
                  <div className="h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
                </div>
              </div>
            </div>
            <div
              className="p-2 border border-slate-200 rounded bg-slate-50 hover:border-slate-300 hover:bg-slate-100 cursor-pointer transition-all"
              onClick={() => console.log("Clicked Store Information share")}
            >
              <div className="flex items-center justify-between min-w-0">
                <div className="flex items-center space-x-2 min-w-0 flex-1">
                  <IconFolder className="h-3 w-3 flex-shrink-0 text-slate-500" />
                  <span className="text-xs font-medium text-slate-700 truncate">
                    Store Information
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-slate-500 ml-2">
                  <SnowflakeIcon className="h-3 w-3 flex-shrink-0" size={12} />
                  <span className="whitespace-nowrap">5h ago</span>
                  <div className="h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Dataset Selection */}
      <div className="space-y-3">
        {!selectedConnection ? (
          <div className="flex items-center justify-center h-full min-h-[300px]">
            <div className="text-center">
              <IconDatabase className="h-12 w-12 mx-auto mb-3 text-slate-300" />
              <p className="text-sm font-medium text-slate-600 mb-1">
                Select connection to create share
              </p>
              <p className="text-xs text-slate-500">
                Choose an active connection from the left to begin sharing data
              </p>
            </div>
          </div>
        ) : (
          <>
            <h3 className="text-sm font-medium text-slate-900 mb-3">
              Select Data to Share
            </h3>

            {customerDatasets.length > 0 ? (
              <>
                {/* Hierarchical Schema/Table View */}
                <div className="space-y-1">
                  {customerDatasets.map(dataset => {
                    const isLocked = dataset.locked === true;
                    const isExpanded = expandedCustomerDatasets.includes(
                      dataset.id
                    );
                    const isSelected = selectedCustomerDatasets.includes(
                      dataset.id
                    );

                    return (
                      <div key={dataset.id} className="space-y-1">
                        {/* Schema Level */}
                        <div
                          className={`p-2 border rounded transition-all ${
                            isLocked
                              ? "border-slate-200 bg-slate-50 opacity-60"
                              : isSelected
                                ? "border-blue-500 bg-blue-50"
                                : "border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div
                              className="flex flex-col flex-1 cursor-pointer"
                              onClick={() =>
                                isLocked
                                  ? toggleCustomerDatasetExpansion(dataset.id)
                                  : toggleCustomerDatasetSelection(dataset.id)
                              }
                            >
                              <div className="flex items-center space-x-2">
                                <IconFolder
                                  className={`h-3 w-3 ${isLocked ? "text-slate-400" : "text-slate-500"}`}
                                />
                                <span
                                  className={`text-xs font-medium whitespace-nowrap ${isLocked ? "text-slate-500" : ""}`}
                                >
                                  {dataset.name}
                                </span>
                                <span className="text-xs text-slate-400">
                                  {dataset.rows}
                                </span>
                              </div>
                              {dataset.tagline && (
                                <p className="text-xs text-slate-500 mt-1 ml-5">
                                  {dataset.tagline}
                                </p>
                              )}
                            </div>
                            <div className="flex items-center">
                              {isLocked ? (
                                <IconLock className="h-3 w-3 text-slate-400" />
                              ) : isSelected ? (
                                <IconCheck className="h-3 w-3 text-blue-600" />
                              ) : (
                                <div className="h-3 w-3 border rounded border-slate-300" />
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Tables Level */}
                        {(isSelected || isExpanded) && (
                          <div className="ml-4 space-y-1">
                            {dataset.tables.map(table => (
                              <div
                                key={table}
                                className={`flex items-center space-x-2 p-1 rounded ${isLocked ? "opacity-60" : "hover:bg-slate-50"}`}
                              >
                                <IconDatabase className="h-3 w-3 text-slate-400" />
                                <span className="text-xs text-slate-600">
                                  {table}
                                </span>
                                {!isLocked && (
                                  <IconCheck className="h-3 w-3 text-green-600 ml-auto" />
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {selectedCustomerDatasets.length > 0 && (
                  <div className="mt-3 pt-3 border-t">
                    <div className="space-y-2">
                      <p className="text-xs font-medium">
                        {selectedCustomerDatasets.length} schema
                        {selectedCustomerDatasets.length > 1 ? "s" : ""}{" "}
                        selected
                      </p>
                      <p className="text-xs text-slate-600">
                        All tables in selected schemas will be shared
                      </p>
                      <Button
                        size="sm"
                        style={{ backgroundColor: "#2970ff" }}
                        className="w-full h-7 text-xs"
                      >
                        <IconUpload className="h-3 w-3 mr-1" />
                        Share Selected Datasets
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8 text-slate-500 text-sm">
                No customer datasets configured
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
