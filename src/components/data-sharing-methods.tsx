"use client";

import AnimatedTabs, { TabOption } from "@/components/ui/tabs-animated";
import { Database, Share, Upload } from "lucide-react";
import {
  SnowflakeIcon,
  DatabricksIcon,
  SftpIcon,
} from "@/components/brand-icons";

const dataSharingOptions: TabOption[] = [
  {
    id: "snowflake",
    title: "Snowflake Private Data Shares",
    subtitle: "Zero-copy sharing",
    icon: <SnowflakeIcon className="h-6 w-6" />,
    description:
      "Enable secure, zero-copy data sharing directly within Snowflake environments. Provide clients with real-time access to governed datasets without data movement or duplication. Learn more about Snowflake's data sharing capabilities.",
    features: [
      "Zero-copy data access with no storage duplication",
      "Real-time data sharing with instant updates",
      "Native Snowflake integration with full governance",
      "Client-specific access controls and data masking",
      "Reader account provisioning for clients without Snowflake",
      "Automatic schema evolution and versioning",
    ],
    bestFor:
      "Enterprise clients with Snowflake environments who need real-time, governed access to your data without the overhead of data copying or transformation.",
    color: "blue",
    metrics: {
      dataLatency: "Real-time",
      setupTime: "< 30 minutes",
      storageOverhead: "Zero-copy",
    },
    referenceUrl: "https://docs.snowflake.com/en/user-guide/data-sharing-intro",
    referenceText: "Snowflake Data Sharing Documentation →",
  },
  {
    id: "databricks",
    title: "Databricks Delta Shares",
    subtitle: "Open standard sharing",
    icon: <DatabricksIcon className="h-6 w-6" />,
    description:
      "Enable seamless data delivery directly into your clients' Databricks warehouses. Dataporto provisions Delta Shares that appear natively in your clients' Unity Catalog, giving them zero-copy access to governed datasets without leaving their Databricks environment. Learn more about Delta Sharing capabilities.",
    features: [
      "Direct delivery to client Databricks workspaces",
      "Native Unity Catalog integration for recipients",
      "Zero-copy access with live data updates",
      "Client-specific governance and row/column filtering",
      "Automated recipient provisioning and management",
      "No client infrastructure setup required",
    ],
    bestFor:
      "SaaS vendors and data providers whose enterprise clients use Databricks and prefer native data access within their existing analytics workflows.",
    color: "orange",
    metrics: {
      clientSetup: "Zero setup",
      dataAccess: "Native Unity Catalog",
      provisioning: "Automated",
    },
    referenceUrl: "https://docs.databricks.com/aws/en/delta-sharing/",
    referenceText: "Databricks Delta Sharing Documentation →",
  },
  {
    id: "sftp",
    title: "sFTP (Push/Pull)",
    subtitle: "Universal file delivery",
    icon: <SftpIcon className="h-6 w-6" />,
    description:
      "Traditional file-based data delivery via secure FTP with flexible push/pull patterns. Perfect for clients who need data in standard file formats or have legacy systems requiring file-based integration.",
    features: [
      "Scheduled data exports in multiple formats (CSV, Parquet, JSON)",
      "Push delivery to client sFTP servers",
      "Pull access from managed sFTP endpoints",
      "File encryption and secure transmission",
      "Retry logic and delivery confirmation",
      "Compression and archival options",
    ],
    bestFor:
      "Clients with legacy systems, specific file format requirements, or those who prefer traditional file-based data integration patterns over direct database access.",
    color: "green",
    metrics: {
      fileFormats: "CSV, Parquet, JSON",
      deliveryMode: "Push & Pull",
      scheduling: "Flexible",
    },
  },
];

export default function DataSharingMethods() {
  return (
    <AnimatedTabs
      options={dataSharingOptions}
      defaultTab="snowflake"
      autoRotate={true}
      tabDuration={10000}
    />
  );
}
