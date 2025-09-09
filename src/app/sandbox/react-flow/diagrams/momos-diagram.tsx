"use client";

import React from "react";
import Image from "next/image";
import FlexibleFlowDiagram, {
  FlexibleDiagramNode,
  FlexibleDiagramConnection,
} from "@/components/flexible-flow-diagram";
import { IconFolderUp } from "@tabler/icons-react";
import {
  DataportoIcon,
  SnowflakeIcon,
  DatabricksIcon,
} from "@/components/brand-icons";

// Custom component for the Momos node
const MomosComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 justify-center ${className}`}>
    <Image
      src="/brands/momos.svg"
      alt="Momos"
      width={0}
      height={0}
      sizes="100vw"
      className="h-6 w-auto"
    />
  </div>
);

// Custom component for McDonald's node
const McDonaldsComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <Image
      src="/brands/mcdonalds.svg"
      alt="McDonald's"
      width={0}
      height={0}
      sizes="100vw"
      className="h-4 w-auto"
    />
    <span>McDonald's</span>
  </div>
);

// Custom component for RBI node
const RBIComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <Image
      src="/brands/rbi.png"
      alt="RBI"
      width={0}
      height={0}
      sizes="100vw"
      className="h-4 w-auto"
    />
  </div>
);

// Custom component for Starbucks node
const StarbucksComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <Image
      src="/brands/starbucks.svg"
      alt="Starbucks"
      width={0}
      height={0}
      sizes="100vw"
      className="h-4 w-auto"
    />
    <span>Starbucks</span>
  </div>
);

// Custom component for sFTP node with green icon
const SftpComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <IconFolderUp className="h-4 w-4" style={{ color: "#10b981" }} />
    <span>sFTP</span>
  </div>
);

// Custom component for the dataporto node
const DataportoComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center ${className}`}>
    <DataportoIcon className="h-6 w-6" />
    <span className="font-semibold">dataporto</span>
  </div>
);

export default function MomosDataFlowDiagram() {
  const nodes: FlexibleDiagramNode[] = [
    // Momos (Stage 0)
    {
      id: "momos",
      label: "Momos",
      customComponent: MomosComponent,
      description: "Momos restaurant platform",
      variant: "default",
      stage: 0,
    },

    // dataporto (Stage 1)
    {
      id: "dataporto",
      customComponent: DataportoComponent,
      description: "Multi-platform data sharing",
      variant: "primary",
      stage: 1,
    },

    // Snowflake Data Share (Stage 2)
    {
      id: "snowflake-share",
      label: "Snowflake",
      icon: SnowflakeIcon,
      description: "Snowflake private share",
      variant: "default",
      stage: 2,
    },

    // Databricks Delta Share (Stage 2)
    {
      id: "databricks-share",
      label: "Databricks",
      icon: DatabricksIcon,
      description: "Databricks delta share",
      variant: "default",
      stage: 2,
    },

    // sFTP (Stage 2)
    {
      id: "sftp",
      customComponent: SftpComponent,
      description: "sFTP file transfer",
      variant: "default",
      stage: 2,
    },

    // RBI (Stage 3)
    {
      id: "rbi",
      label: "RBI",
      customComponent: RBIComponent,
      description: "Enterprise Groups",
      variant: "danger",
      stage: 3,
    },

    // McDonald's (Stage 3)
    {
      id: "mcdonalds",
      label: "McDonald's",
      customComponent: McDonaldsComponent,
      description: "Quick Service Restaurant",
      variant: "warning",
      stage: 3,
    },

    // Starbucks (Stage 3)
    {
      id: "starbucks",
      label: "Starbucks",
      customComponent: StarbucksComponent,
      description: "Coffee & Quick Service",
      variant: "success",
      stage: 3,
    },
  ];

  const connections: FlexibleDiagramConnection[] = [
    // Momos to dataporto
    {
      from: "momos",
      to: "dataporto",
      color: "#2970ff", // Main project color
      animated: true,
      label: "Raw Tables",
    },

    // dataporto to data delivery methods
    {
      from: "dataporto",
      to: "snowflake-share",
      color: "#2970ff", // Main project color
      animated: true,
    },
    {
      from: "dataporto",
      to: "databricks-share",
      color: "#2970ff", // Main project color
      animated: true,
    },
    {
      from: "dataporto",
      to: "sftp",
      color: "#2970ff", // Main project color
      animated: true,
    },

    // Data delivery methods to clients with restaurant/food service data types
    {
      from: "snowflake-share",
      to: "rbi",
      color: "#ef4444", // Red for RBI
      animated: true,
      label: "Customer Insights",
    },
    {
      from: "databricks-share",
      to: "mcdonalds",
      color: "#f59e0b", // Yellow for McDonald's
      animated: true,
      label: "Guest Feedback",
    },
    {
      from: "sftp",
      to: "starbucks",
      color: "#10b981", // Green for Starbucks
      animated: true,
      label: "Google Reviews",
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Momos → Dataporto → Restaurant Partners Data Flow
        </h1>
        <FlexibleFlowDiagram
          nodes={nodes}
          connections={connections}
          height="h-[700px]"
          layout="horizontal"
          className="border rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
