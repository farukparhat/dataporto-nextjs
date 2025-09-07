"use client";

import React from "react";
import FlexibleFlowDiagram, {
  FlexibleDiagramNode,
  FlexibleDiagramConnection,
} from "@/components/flexible-flow-diagram";
import {
  Database,
  Snowflake,
  Sparkles,
  Anchor,
  Users,
  FolderOpen,
} from "lucide-react";
import {
  DatabricksIcon,
  SnowflakeIcon,
  PostgresSvg,
} from "@/components/brand-icons";

// Custom component for the warehouses node
const WarehousesComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <div className="flex items-center space-x-1">
      <SnowflakeIcon className="h-4 w-4 text-[#29b5e8]" />
      <DatabricksIcon className="h-4 w-4 text-[#ff3621]" />
    </div>
  </div>
);

// Custom component for the databases node
const DatabasesComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <div className="flex items-center space-x-1">
      <PostgresSvg className="h-4 w-4" />
      <Database className="h-4 w-4 text-[#f59e0b]" />
    </div>
  </div>
);

export default function DataFlowDiagram() {
  const nodes: FlexibleDiagramNode[] = [
    // Data Sources (Stage 0)
    {
      id: "aws-s3-rds",
      label: "S3, RDS",
      icon: Database,
      iconColor: "#ff9500", // AWS orange
      variant: "default",
      stage: 0,
    },
    {
      id: "warehouses",
      customComponent: WarehousesComponent,
      description: "Data Warehouse",
      variant: "default",
      stage: 0,
    },
    {
      id: "databases",
      customComponent: DatabasesComponent,
      description: "Databases",
      variant: "default",
      stage: 0,
    },

    // dataporto (Stage 1)
    {
      id: "dataporto",
      label: "dataporto",
      icon: Anchor,
      iconColor: "#ffffff",
      description: "Manage your data shares",
      variant: "primary",
      stage: 1,
    },

    // Clients (Stage 2)
    {
      id: "client-a",
      label: "Client A",
      icon: Users,
      iconColor: "#29b5e8", // Light blue
      variant: "default",
      stage: 2,
    },
    {
      id: "client-b",
      label: "Client B",
      icon: Users,
      iconColor: "#ff9500", // Orange
      variant: "default",
      stage: 2,
    },
    {
      id: "client-c",
      label: "Client C",
      icon: Users,
      iconColor: "#10b981", // Green
      variant: "default",
      stage: 2,
    },

    // Destinations (Stage 3)
    {
      id: "snowflake-dest",
      label: "Snowflake",
      icon: Snowflake,
      iconColor: "#29b5e8", // Light blue
      variant: "default",
      stage: 3,
    },
    {
      id: "databricks-dest",
      label: "Databricks",
      icon: Sparkles,
      iconColor: "#ff9500", // Orange
      variant: "default",
      stage: 3,
    },
    {
      id: "sftp-dest",
      label: "sFTP",
      icon: FolderOpen,
      iconColor: "#10b981", // Green
      variant: "default",
      stage: 3,
    },
  ];

  const connections: FlexibleDiagramConnection[] = [
    // Data sources to dataporto
    {
      from: "aws-s3-rds",
      to: "dataporto",
      color: "#6b7280", // Gray
      animated: true,
    },
    {
      from: "warehouses",
      to: "dataporto",
      color: "#6b7280", // Gray
      animated: true,
    },
    {
      from: "databases",
      to: "dataporto",
      color: "#6b7280", // Gray
      animated: true,
    },

    // dataporto to clients
    {
      from: "dataporto",
      to: "client-a",
      color: "#29b5e8", // Light blue
      animated: true,
    },
    {
      from: "dataporto",
      to: "client-b",
      color: "#ff9500", // Orange
      animated: true,
    },
    {
      from: "dataporto",
      to: "client-c",
      color: "#10b981", // Green
      animated: true,
    },

    // Clients to destinations
    {
      from: "client-a",
      to: "snowflake-dest",
      color: "#29b5e8", // Light blue
      animated: true,
    },
    {
      from: "client-b",
      to: "databricks-dest",
      color: "#ff9500", // Orange
      animated: true,
    },
    {
      from: "client-c",
      to: "sftp-dest",
      color: "#10b981", // Green
      animated: true,
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Data Flow Diagram
        </h1>
        <FlexibleFlowDiagram
          nodes={nodes}
          connections={connections}
          height="h-[600px]"
          layout="horizontal"
          className="border rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
