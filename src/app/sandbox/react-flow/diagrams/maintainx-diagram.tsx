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

// Custom component for the MaintainX node
const MaintainXComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <Image
      src="/logo-maintainx.png"
      alt="MaintainX"
      width={0}
      height={0}
      sizes="100vw"
      className="h-4 w-auto"
    />
  </div>
);

// Custom component for DHL node
const DHLComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <Image
      src="/logo-dhl.svg"
      alt="DHL"
      width={0}
      height={0}
      sizes="100vw"
      className="h-4 w-auto"
    />
  </div>
);

// Custom component for McDonald's node
const McDonaldsComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <Image
      src="/logo-mcdonalds.svg"
      alt="McDonald's"
      width={0}
      height={0}
      sizes="100vw"
      className="h-4 w-auto"
    />
    McDonald's
  </div>
);

// Custom component for Mariott node
const MariottComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <Image
      src="/logo-mariott.svg"
      alt="Mariott"
      width={0}
      height={0}
      sizes="100vw"
      className="h-4 w-auto"
    />
    Mariott
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

export default function MaintainXDataFlowDiagram() {
  const nodes: FlexibleDiagramNode[] = [
    // MaintainX (Stage 0)
    {
      id: "maintainx",
      label: "MaintainX",
      customComponent: MaintainXComponent,
      description: "MaintainX cloud",
      variant: "default",
      stage: 0,
    },

    // dataporto (Stage 1)
    {
      id: "dataporto",
      customComponent: DataportoComponent,
      description: "Control your data shares",
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

    // DHL (Stage 3)
    {
      id: "dhl",
      label: "DHL",
      customComponent: DHLComponent,
      description: "Logistics & Supply Chain",
      variant: "danger",
      stage: 3,
    },

    // McDonald's (Stage 3)
    {
      id: "mcdonalds",
      label: "McDonald's",
      customComponent: McDonaldsComponent,
      description: "Restaurant & Food Service",
      variant: "warning",
      stage: 3,
    },

    // Mariott (Stage 3)
    {
      id: "mariott",
      label: "Mariott",
      customComponent: MariottComponent,
      description: "Hospitality & Hotels",
      variant: "success",
      stage: 3,
    },
  ];

  const connections: FlexibleDiagramConnection[] = [
    // MaintainX to dataporto
    {
      from: "maintainx",
      to: "dataporto",
      color: "#2970ff", // Main project color
      animated: true,
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

    // Data delivery methods to clients with maintenance data types
    {
      from: "snowflake-share",
      to: "dhl",
      color: "#ef4444", // Red for DHL
      animated: true,
      label: "Fleet Schedules",
    },
    {
      from: "databricks-share",
      to: "mcdonalds",
      color: "#f59e0b", // Yellow for McDonald's
      animated: true,
      label: "Service Logs",
    },
    {
      from: "sftp",
      to: "mariott",
      color: "#10b981", // Green for Mariott
      animated: true,
      label: "Inspection Reports",
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          MaintainX → Dataporto → Business Partners Data Flow
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
