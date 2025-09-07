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

// Custom component for the FireFlies AI node
const FireFliesAIComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <Image
      src="/brands/firefliesai.svg"
      alt="FireFlies AI"
      width={0}
      height={0}
      sizes="100vw"
      className="h-4 w-auto"
    />
  </div>
);

// Custom component for Expedia node
const ExpediaComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <Image
      src="/brands/expedia.svg"
      alt="Expedia"
      width={0}
      height={0}
      sizes="100vw"
      className="h-4 w-auto"
    />
  </div>
);

// Custom component for Delta node
const DeltaComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <Image
      src="/brands/delta.svg"
      alt="Delta"
      width={0}
      height={0}
      sizes="100vw"
      className="h-4 w-auto"
    />
  </div>
);

// Custom component for Nike node
const NikeComponent = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <Image
      src="/brands/nike.svg"
      alt="Nike"
      width={0}
      height={0}
      sizes="100vw"
      className="h-4 w-auto"
    />
    Nike
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

export default function FireFliesAIDataFlowDiagram() {
  const nodes: FlexibleDiagramNode[] = [
    // FireFlies AI (Stage 0)
    {
      id: "fireflies-ai",
      label: "Fireflies AI",
      customComponent: FireFliesAIComponent,
      description: "firefliesAI cloud",
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

    // Expedia (Stage 3)
    {
      id: "expedia",
      label: "Expedia",
      customComponent: ExpediaComponent,
      description: "Travel & Hospitality",
      variant: "danger",
      stage: 3,
    },

    // Delta (Stage 3)
    {
      id: "delta",
      label: "Delta",
      customComponent: DeltaComponent,
      description: "Airlines & Transportation",
      variant: "warning",
      stage: 3,
    },

    // Nike (Stage 3)
    {
      id: "nike",
      label: "Nike",
      customComponent: NikeComponent,
      description: "Sports & Retail",
      variant: "success",
      stage: 3,
    },
  ];

  const connections: FlexibleDiagramConnection[] = [
    // FireFlies AI to dataporto
    {
      from: "fireflies-ai",
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

    // Data delivery methods to clients with AI/meeting data types
    {
      from: "snowflake-share",
      to: "expedia",
      color: "#ef4444", // Red for Expedia
      animated: true,
      label: "Meeting Insights",
    },
    {
      from: "databricks-share",
      to: "delta",
      color: "#f59e0b", // Yellow for Delta
      animated: true,
      label: "Call Analytics",
    },
    {
      from: "sftp",
      to: "nike",
      color: "#10b981", // Green for Nike
      animated: true,
      label: "Conversation Data",
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          FireFlies AI → Dataporto → Business Partners Data Flow
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
