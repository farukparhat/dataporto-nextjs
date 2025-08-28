"use client";

import React from "react";
import { ReactFlow, Node, Edge, Background, Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import { Database, Workflow, Share2, Shield, Cloud } from "lucide-react";

interface NodeData {
  label: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
  nodeType?: string;
}

// Custom node component for AWS RDS
const RDSNode = ({ data }: { data: NodeData }) => {
  return (
    <div className="w-40 h-16 flex flex-col items-center justify-center px-4 py-2 shadow-md rounded-md bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-300 relative">
      <div className="flex items-center space-x-2">
        <Database className="h-5 w-5 text-orange-600" />
        <div className="text-sm font-medium text-orange-900">{data.label}</div>
      </div>
      <div className="text-xs text-orange-700">{data.description}</div>
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-orange-500 !border-2 !border-white"
      />
    </div>
  );
};

// Custom node component for ingestion layer
const IngestionNode = ({ data }: { data: NodeData }) => {
  const IconComponent = data.icon || Cloud;
  return (
    <div className="w-36 h-14 flex flex-col items-center justify-center px-3 py-2 shadow-md rounded-md bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 relative">
      <div className="flex items-center space-x-2">
        <IconComponent className="h-4 w-4 text-blue-600" />
        <div className="text-xs font-medium text-blue-900">{data.label}</div>
      </div>
      <div className="text-xs text-blue-700">{data.description}</div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 !bg-blue-500 !border-2 !border-white"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-blue-500 !border-2 !border-white"
      />
    </div>
  );
};

// Custom node component for Databricks
const DatabricksNode = ({ data }: { data: NodeData }) => {
  const IconComponent = data.icon || Database;
  return (
    <div className="w-40 h-16 flex flex-col items-center justify-center px-4 py-2 shadow-md rounded-md bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 relative">
      <div className="flex items-center space-x-2">
        <IconComponent className="h-5 w-5 text-red-600" />
        <div className="text-sm font-medium text-red-900">{data.label}</div>
      </div>
      <div className="text-xs text-red-700">{data.description}</div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 !bg-red-500 !border-2 !border-white"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-red-500 !border-2 !border-white"
      />
    </div>
  );
};

// Custom node component for Snowflake
const SnowflakeNode = ({ data }: { data: NodeData }) => {
  const IconComponent = data.icon || Database;
  return (
    <div className="w-40 h-16 flex flex-col items-center justify-center px-4 py-2 shadow-md rounded-md bg-gradient-to-r from-cyan-50 to-cyan-100 border-2 border-cyan-300 relative">
      <div className="flex items-center space-x-2">
        <IconComponent className="h-5 w-5 text-cyan-600" />
        <div className="text-sm font-medium text-cyan-900">{data.label}</div>
      </div>
      <div className="text-xs text-cyan-700">{data.description}</div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 !bg-cyan-500 !border-2 !border-white"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-cyan-500 !border-2 !border-white"
      />
    </div>
  );
};

// Custom node component for consumers
const ConsumerNode = ({ data }: { data: NodeData }) => {
  return (
    <div className="w-36 h-14 flex flex-col items-center justify-center px-3 py-2 shadow-md rounded-md bg-gradient-to-r from-slate-50 to-slate-100 border-2 border-slate-300 relative">
      <div className="flex items-center space-x-2">
        <Share2 className="h-4 w-4 text-slate-600" />
        <div className="text-sm font-medium text-slate-900">{data.label}</div>
      </div>
      <div className="text-xs text-slate-700">{data.description}</div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 !bg-slate-500 !border-2 !border-white"
      />
    </div>
  );
};

const nodeTypes = {
  rds: RDSNode,
  ingestion: IngestionNode,
  databricks: DatabricksNode,
  snowflake: SnowflakeNode,
  consumer: ConsumerNode,
};

const initialNodes: Node[] = [
  // Source Layer
  {
    id: "rds",
    type: "rds",
    position: { x: 50, y: 150 },
    data: {
      label: "AWS RDS",
      description: "PostgreSQL/MySQL",
    },
  },

  // Ingestion Layer
  {
    id: "cdc",
    type: "ingestion",
    position: { x: 250, y: 80 },
    data: {
      label: "CDC/DMS",
      description: "Change Data Capture",
      icon: Workflow,
    },
  },
  {
    id: "s3-bronze",
    type: "ingestion",
    position: { x: 250, y: 220 },
    data: {
      label: "S3 Bronze",
      description: "Raw ingestion",
      icon: Cloud,
    },
  },

  // Databricks Processing Layer
  {
    id: "databricks-bronze",
    type: "databricks",
    position: { x: 450, y: 100 },
    data: {
      label: "Bronze Layer",
      description: "Raw Delta Tables",
      icon: Database,
    },
  },
  {
    id: "databricks-silver",
    type: "databricks",
    position: { x: 450, y: 180 },
    data: {
      label: "Silver Layer",
      description: "Cleaned & Validated",
      icon: Database,
    },
  },
  {
    id: "databricks-gold",
    type: "databricks",
    position: { x: 650, y: 140 },
    data: {
      label: "Gold Layer",
      description: "Curated & Governed",
      icon: Shield,
    },
  },

  // Snowflake Layer
  {
    id: "snowflake-tables",
    type: "snowflake",
    position: { x: 850, y: 100 },
    data: {
      label: "Snowflake Tables",
      description: "Replicated data",
      icon: Database,
    },
  },
  {
    id: "snowflake-shares",
    type: "snowflake",
    position: { x: 850, y: 180 },
    data: {
      label: "Data Shares",
      description: "Native sharing",
      icon: Share2,
    },
  },

  // Consumer Layer
  {
    id: "consumers",
    type: "consumer",
    position: { x: 1100, y: 140 },
    data: {
      label: "Consumers",
      description: "End clients",
    },
  },
];

const initialEdges: Edge[] = [
  // Source to ingestion
  {
    id: "rds-cdc",
    source: "rds",
    target: "cdc",
    animated: true,
    style: { stroke: "#3b82f6", strokeWidth: 3 },
    label: "CDC",
    labelStyle: { fill: "#3b82f6", fontWeight: "bold" },
  },
  {
    id: "rds-s3",
    source: "rds",
    target: "s3-bronze",
    animated: true,
    style: { stroke: "#3b82f6", strokeWidth: 3 },
    label: "Batch",
    labelStyle: { fill: "#3b82f6", fontWeight: "bold" },
  },

  // Ingestion to Databricks
  {
    id: "cdc-bronze",
    source: "cdc",
    target: "databricks-bronze",
    animated: true,
    style: { stroke: "#10b981", strokeWidth: 3 },
  },
  {
    id: "s3-bronze",
    source: "s3-bronze",
    target: "databricks-bronze",
    animated: true,
    style: { stroke: "#10b981", strokeWidth: 3 },
  },

  // Databricks pipeline
  {
    id: "bronze-silver",
    source: "databricks-bronze",
    target: "databricks-silver",
    animated: true,
    style: { stroke: "#ef4444", strokeWidth: 3 },
    label: "Transform",
    labelStyle: { fill: "#ef4444", fontWeight: "bold" },
  },
  {
    id: "silver-gold",
    source: "databricks-silver",
    target: "databricks-gold",
    animated: true,
    style: { stroke: "#ef4444", strokeWidth: 3 },
    label: "Curate",
    labelStyle: { fill: "#ef4444", fontWeight: "bold" },
  },

  // Replication to Snowflake
  {
    id: "gold-snowflake-tables",
    source: "databricks-gold",
    target: "snowflake-tables",
    animated: true,
    style: { stroke: "#f59e0b", strokeWidth: 4 },
    label: "Replicate",
    labelStyle: { fill: "#f59e0b", fontWeight: "bold" },
  },
  {
    id: "tables-shares",
    source: "snowflake-tables",
    target: "snowflake-shares",
    animated: true,
    style: { stroke: "#06b6d4", strokeWidth: 4 },
    label: "Share",
    labelStyle: { fill: "#06b6d4", fontWeight: "bold" },
  },

  // Shares to consumers
  {
    id: "shares-consumers",
    source: "snowflake-shares",
    target: "consumers",
    animated: true,
    style: { stroke: "#6366f1", strokeWidth: 4 },
    label: "Consume",
    labelStyle: { fill: "#6366f1", fontWeight: "bold" },
  },
];

export default function DataSharingWorkflowDiagramClient() {
  return (
    <div className="w-full h-[450px] bg-gray-50 rounded-lg border">
      <style jsx global>{`
        .react-flow__node {
          border: none !important;
          padding: 0 !important;
          background: none !important;
          cursor: default !important;
        }
        .react-flow__node-rds {
          border: none !important;
          cursor: default !important;
        }
        .react-flow__node-ingestion {
          border: none !important;
          cursor: default !important;
        }
        .react-flow__node-databricks {
          border: none !important;
          cursor: default !important;
        }
        .react-flow__node-snowflake {
          border: none !important;
          cursor: default !important;
        }
        .react-flow__node-consumer {
          border: none !important;
          cursor: default !important;
        }
        .react-flow__edge {
          cursor: default !important;
        }
        .react-flow__handle {
          cursor: default !important;
        }
        .react-flow__pane {
          cursor: default !important;
        }
      `}</style>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        minZoom={0.1}
        maxZoom={1.5}
      >
        <Background color="#f1f5f9" gap={16} />
      </ReactFlow>
    </div>
  );
}
