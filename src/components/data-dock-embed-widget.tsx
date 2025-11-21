"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { IconDownload, IconUpload } from "@tabler/icons-react";
import Image from "next/image";
import { Dataset } from "@/config/tenants";
import DataDockConnectionForm from "@/components/data-dock-connection-form";
import DataDockReceiveData from "@/components/data-dock-receive-data";
import DataDockSendData from "@/components/data-dock-send-data";

// Sample datasets that clients can subscribe to (default fallback)
const sampleDatasets: Dataset[] = [
  {
    id: "customer-analytics",
    name: "Customer Analytics",
    description: "Comprehensive customer behavior and interaction data",
    tables: ["customers", "interactions", "sessions", "events"],
    size: "2.4 GB",
    rows: "12.5M",
    locked: false,
  },
  {
    id: "reviews",
    name: "Customer Reviews",
    description: "Customer feedback, ratings, and sentiment analysis",
    tables: ["reviews", "ratings", "sentiment", "feedback"],
    size: "1.2 GB",
    rows: "8.7M",
    locked: false,
  },
  {
    id: "support-tickets",
    name: "Support Tickets",
    description: "Customer support interactions and resolution data",
    tables: ["tickets", "conversations", "resolutions", "agents"],
    size: "950 MB",
    rows: "3.2M",
    locked: false,
  },
];

interface DataDockEmbedWidgetProps {
  brandLogo?: string;
  brandName?: string;
  datasets?: Dataset[];
  customerDatasets?: Dataset[];
  mode?: "unidirectional" | "bidirectional";
  className?: string;
}

export default function DataDockEmbedWidget({
  brandLogo = "/brands/senti.png",
  brandName = "Senti",
  datasets,
  customerDatasets = [],
  mode = "unidirectional",
  className = "",
}: DataDockEmbedWidgetProps) {
  const displayDatasets = datasets || sampleDatasets;
  const [activeTab, setActiveTab] = useState<"receive" | "send">("receive");

  // Receive data state
  const [selectedDatasets, setSelectedDatasets] = useState<string[]>([
    displayDatasets[0].id,
  ]);
  const [expandedDatasets, setExpandedDatasets] = useState<string[]>([]);

  // Send data state
  const [selectedCustomerDatasets, setSelectedCustomerDatasets] = useState<
    string[]
  >([]);
  const [expandedCustomerDatasets, setExpandedCustomerDatasets] = useState<
    string[]
  >([]);

  // Shared connection state
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
    const dataset = displayDatasets.find(d => d.id === datasetId);
    // Don't allow selecting locked datasets
    if (dataset?.locked) return;

    setSelectedDatasets(prev =>
      prev.includes(datasetId)
        ? prev.filter(id => id !== datasetId)
        : [...prev, datasetId]
    );
  };

  const toggleDatasetExpansion = (datasetId: string) => {
    setExpandedDatasets(prev =>
      prev.includes(datasetId)
        ? prev.filter(id => id !== datasetId)
        : [...prev, datasetId]
    );
  };

  const toggleCustomerDatasetSelection = (datasetId: string) => {
    const dataset = customerDatasets.find(d => d.id === datasetId);
    // Don't allow selecting locked datasets
    if (dataset?.locked) return;

    setSelectedCustomerDatasets(prev =>
      prev.includes(datasetId)
        ? prev.filter(id => id !== datasetId)
        : [...prev, datasetId]
    );
  };

  const toggleCustomerDatasetExpansion = (datasetId: string) => {
    setExpandedCustomerDatasets(prev =>
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
      {mode === "bidirectional" ? (
        <Tabs
          defaultValue="receive"
          className="w-full"
          onValueChange={value => setActiveTab(value as "receive" | "send")}
        >
          {/* Top - Custom Logo, Brand, and Tabs */}
          <div className="relative mb-6">
            {/* Tab Switcher in top right - absolutely positioned */}
            <div className="absolute top-0 right-0">
              <TabsList className="h-8">
                <TabsTrigger value="receive" className="text-xs px-3 py-1">
                  <IconDownload className="h-3 w-3 mr-1" />
                  Receive
                </TabsTrigger>
                <TabsTrigger value="send" className="text-xs px-3 py-1">
                  <IconUpload className="h-3 w-3 mr-1" />
                  Send
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Centered logo and brand */}
            <div className="text-center">
              <div className="w-24 h-12 flex items-center justify-center mx-auto mb-4">
                <Image
                  src={brandLogo}
                  alt={brandName}
                  width={144}
                  height={26}
                  className="h-auto p-4"
                />
              </div>
              <p className="text-xs text-slate-600">
                Self-Serve Data Access • Powered by dataporto
              </p>
            </div>
          </div>

          <TabsContent value="receive">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DataDockConnectionForm
                selectedConnectionType={selectedConnectionType}
                setSelectedConnectionType={setSelectedConnectionType}
                connectionConfig={connectionConfig}
                handleConfigChange={handleConfigChange}
              />
              <DataDockReceiveData
                datasets={displayDatasets}
                selectedDatasets={selectedDatasets}
                expandedDatasets={expandedDatasets}
                toggleDatasetSelection={toggleDatasetSelection}
                toggleDatasetExpansion={toggleDatasetExpansion}
              />
            </div>
          </TabsContent>

          <TabsContent value="send">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DataDockSendData
                customerDatasets={customerDatasets}
                selectedCustomerDatasets={selectedCustomerDatasets}
                expandedCustomerDatasets={expandedCustomerDatasets}
                toggleCustomerDatasetSelection={toggleCustomerDatasetSelection}
                toggleCustomerDatasetExpansion={toggleCustomerDatasetExpansion}
              />
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <>
          {/* Top - Custom Logo and Brand (unidirectional mode) */}
          <div className="text-center mb-6">
            <div className="w-24 h-12 flex items-center justify-center mx-auto mb-4">
              <Image
                src={brandLogo}
                alt={brandName}
                width={144}
                height={26}
                className="h-auto p-4"
              />
            </div>
            <p className="text-xs text-slate-600">
              Self-Serve Data Access • Powered by dataporto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DataDockConnectionForm
              selectedConnectionType={selectedConnectionType}
              setSelectedConnectionType={setSelectedConnectionType}
              connectionConfig={connectionConfig}
              handleConfigChange={handleConfigChange}
            />
            <DataDockReceiveData
              datasets={displayDatasets}
              selectedDatasets={selectedDatasets}
              expandedDatasets={expandedDatasets}
              toggleDatasetSelection={toggleDatasetSelection}
              toggleDatasetExpansion={toggleDatasetExpansion}
            />
          </div>
        </>
      )}
    </div>
  );
}
